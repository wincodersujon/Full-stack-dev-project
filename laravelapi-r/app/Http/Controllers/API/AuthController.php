<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use Dotenv\Exception\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'email' => 'required|email|max:191|unique:users,email',
            'password' => 'required|min:7',
        ]);

        if($validator->fails()){
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);
        }
        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
        ]);
        $token = $user->createToken($user->email.'_Token')->plainTextToken;

        return response()->json([
            'status'=>200,
            'username'=>$user->name,
             'token'=>$token,
             'message'=>'Registered Successfully',
        ]);

     }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email' => 'required|max:191',
            'password' => 'required',
        ]);

        if($validator->fails())
        {
            return response()->json([
            'validation_errors'=>$validator->messages(),
            ]);
        }
        else
        {
            $user = User::where('email', $request->email)->first();

            if(!$user || !Hash::check($request->password, $user->password))
            {
               return response()->json([
                'status' => '401',
                 'message' => 'Invalid Credentials',
               ]);
            }
            else
            {
                $token = $user->createToken($user->email.'_Token')->plainTextToken;

                return response()->json([
                    'status'=>200,
                    'username'=>$user->name,
                     'token'=>$token,
                     'message'=>'Logged In Successfully',
                ]);
            }
        }
    }
    // public function logout(Request $request)
    // {
    //     auth()->user()->tokens()->delete();
    //     return [
    //         'message' => 'user logged out'
    //     ];
    // }
}
