const OtpScreen = ({ setScreen }) => {
    return <>
        <div className="flex-3 justify-center h-full flex flex-col items-center bg-gray-100 rounded-r-2xl p-10">
            <img src="/images/logo/logo.png" className="w-30 h-30" />
            <h1 className="text-2xl text-blue-800 font-bold ">Enter OTP</h1>
            <p className="text-xs mt-2 text-blue-800">OTP sent to adidone07@gmail.com</p>
            <div className="flex flex-row mt-4 gap-5">
                <input type="text" className="text-black w-10 h-10 text-center border-b-2 border-gray-300 focus:outline-none focus:border-black" ></input>
                <input type="text" className="text-black w-10 h-10 text-center border-b-2 border-gray-300 focus:outline-none focus:border-black" ></input>
                <input type="text" className="text-black w-10 h-10 text-center border-b-2 border-gray-300 focus:outline-none focus:border-black" ></input>
                <input type="text" className="text-black w-10 h-10 text-center border-b-2 border-gray-300 focus:outline-none focus:border-black" ></input>
                <input type="text" className="text-black w-10 h-10 text-center border-b-2 border-gray-300 focus:outline-none focus:border-black" ></input>
                <input type="text" className="text-black w-10 h-10 text-center border-b-2 border-gray-300 focus:outline-none focus:border-black" ></input>
            </div>
            <div className="w-full mt-2">
                <button className="mt-4 w-full bg-blue-800 text-white px-4 py-2 rounded-md">Submit</button>
            </div>
        </div>
    </>
}

export default OtpScreen;