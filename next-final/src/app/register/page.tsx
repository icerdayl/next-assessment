"use client";

import Link from "next/link"
import { useRegisterInfo } from "@/hooks/useRegisterInfo"


const registerPage = () => {
    const{mutate: registerList} = useRegisterInfo()

    const registerInfo = (formData: FormData) => {
        registerList({
            name: String(formData.get("name")),
            email: String(formData.get("email")),
            password: String(formData.get("password")),
            passwordConfirm: String(formData.get("passwordConfirm"))
        })

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
            <form className="flex flex-col justify-center mt-20 mb-30 flex-wrap" action={registerInfo}>
                <h1 className="text-center font-extrabold text-lg neon-text">REGISTER</h1>
                <div className="mt-4 items-center flex flex-col bg-purple-500 text-black w-100 h-115 rounded-3xl text-left justify-center mx-118">
                    <div className=" flex-col mt-5 justify-center">
                        <h3 className="font-bold mb-3">Name</h3>
                        <input className="bg-purple-300 py-3 px-6 rounded-2xl outline-0 w-90"type="text" id="name" name="name" required placeholder="Enter your name..."/>
                        <h3 className="font-bold my-3">Email</h3>
                        <input className="bg-purple-300 py-3 px-6 rounded-2xl outline-0 w-90"type="text" id="email" name="email" required placeholder="Enter your email..."/>
                        <h3 className="font-bold my-3">Password</h3>
                        <input className="bg-purple-300 py-3 px-6 rounded-2xl outline-0 w-90"type="password" id="password" name="password" required placeholder="Enter your password..."/>
                        <h3 className="font-bold my-3">Confirm Password</h3>
                        <input className="bg-purple-300 py-3 px-6 rounded-2xl outline-0 w-90"type="password" id="passwordConfirm" name="passwordConfirm" required placeholder="Confirm your password..."/>
                    </div>
                    <Link href="/login">
                    <button type="submit" className="mt-3 bg-black text-white font-bold cursor-pointer px-4 rounded-2xl hover:black hover:overflow-auto hover:border-2 hover:bg-purple-500 hover:text-black transition ease-in duration-500">Enter</button></Link>
                    <p>Already have an account?<a href="/login"><b> Log in</b></a></p>
                </div>
                    
            </form>
         </>
    )
}

export default registerPage