'use client';
import LoginScreen from "@/components/LoginScreen";
import OtpScreen from "@/components/OtpScreen";
import { useState } from "react";

const Login = () => {
    const [screen, setScreen] = useState('login');
    return <>
        <div className="bg-gray-300 w-full h-screen flex p-10">
            <div className="flex-9">
                {/* big logo */}
            </div>
            {screen === 'login' && <LoginScreen setScreen={setScreen} />}
            {screen === 'otp' && <OtpScreen setScreen={setScreen} />}
        </div>
    </>
}

export default Login;