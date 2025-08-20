"use client";

import { useLoginInfo } from "@/hooks/useLoginInfo";
import { toast } from "react-toastify";



const loginPage = () => {
    const{mutate: loginList} = useLoginInfo()
 

    const loginInfo = (formData: FormData) => {
        loginList({
            email: String(formData.get("email")),
            password: String(formData.get("password")),

        })
        if (!String(formData.get("email")).includes("@")){
            toast.error("Please enter a valid email :(")
        } else {
            window.location.replace("/main")
        }
    }
    

    return(
        <>
            <header>
                <nav className="bg-white dark:bg-purple-500 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://www.svgrepo.com/show/18482/smile.svg" className="h-8" alt="Flowbite Logo"/>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">API COLLECTOR</span>
                        </a>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button type="button" className="font-extrabold mx-3 text-xl hover:text-purple-950 cursor-pointer ease-in transition duration-500"><a href="/">Home</a></button>
                            <button type="button" className="font-extrabold mx-3 text-xl hover:text-purple-950 cursor-pointer ease-in transition duration-500"><a href="/login">Get started</a></button>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="flex">
                <div className="flex">
                    <img src="dashboard.png" alt="" className="fixed w-110 mt-35 rotate-20"/>
                </div>
                <form className="flex flex-col justify-center mt-20 mb-30 flex-wrap" action={loginInfo}>
                    <h1 className="text-center font-extrabold text-lg neon-text">LOGIN</h1>
                    <div className="mt-5 items-center flex flex-col bg-purple-500 text-black w-100 h-75 rounded-3xl text-left justify-center mx-120">
                        <div className=" flex-col mt-5 justify-center">
                            <h3 className="font-bold mb-3">Email</h3>
                            <input className="bg-purple-300 py-3 px-6 rounded-2xl outline-0 w-90"type="text" id="email" name="email" required placeholder="Enter your email..."/>
                            <h3 className="font-bold my-3">Password</h3>
                            <input className="bg-purple-300 py-3 px-6 rounded-2xl outline-0 w-90"type="password" id="password" name="password" required placeholder="Enter your password..."/>
                        </div>
                        <button type="submit" className="mt-3 bg-black border-2 border-black text-white font-bold cursor-pointer px-4 rounded-2xl hover:black hover:overflow-auto hover:border-2 hover:bg-purple-500 hover:text-black transition ease-in duration-500">Enter</button>
                        <p>Don't have an account?<a href="/register"><b> Register</b></a></p>
                    </div>
                        
                </form>
                <div className="flex">
                    <img src="person.png" alt="" className="fixed w-80 mt-45 ml-[-400px] rotate-30"/>
                </div>
            </div>
         </>
    )
}

export default loginPage