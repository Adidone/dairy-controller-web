const LoginScreen = () => {
    return <>
        <div className="flex-3 justify-center h-full flex flex-col items-center bg-gray-100 rounded-r-2xl p-10">
            <img src="/images/logo/logo.png" className="w-30 h-30" />
            <h1 className="text-2xl text-blue-800 font-bold">Welcome To DairyHunt!</h1>
            <p className="text-lg mt-2 text-blue-800">Please enter your email or phone number to continue</p>
            <div className="w-full">
                <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded-md px-4 py-2 w-full mt-4 text-gray-500" />

            </div>
            <div className="w-full">
                <button className="mt-4 w-full bg-blue-800 text-white px-4 py-2 rounded-md">Send Otp</button>
            </div>
        </div>
    </>
}

export default LoginScreen;