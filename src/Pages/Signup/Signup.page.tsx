export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-lg border rounded-md text-left p-6">
                <form action="">
                    <div className="text-3xl mb-6 text-center">Signup</div>
                    <div className="mb-4">
                        <label htmlFor="emailID">Email ID: </label> <br />
                        <input
                            type="text"
                            name="emailID"
                            className="border border-1 border-gray-400 p-2 mt-2 rounded-sm w-80"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label> <br />
                        <input
                            type="password"
                            name="password"
                            className="border border-1 border-gray-400 p-2 mt-2 rounded-sm w-80"
                        />
                    </div>
                    <div className="mt-2 text-sm">forgot password? </div>
                    <div className="mt-6">
                        <input
                            type="checkbox"
                            name="rememberme"
                            id="rememberme"
                            className="mr-1"
                        />
                        <label htmlFor="rememberme">Remember Me</label>
                    </div>
                    <button
                        type="submit"
                        className="text-xl border mt-4 bg-[#FFBD59] py-2 px-4 rounded-sm text-white"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}
