"use client";

import Link from "next/link";

import { useGetListing } from "@/hooks/useGetListing";
import { usePostListing} from "@/hooks/usePostListing";
import { useDeleteListing } from "@/hooks/useDeleteListing";
import { useUpdateListing } from "@/hooks/useUpdateListing";
import { useState } from "react";


type Listing = {
    id: number;
    title: string;
    tags: string;
    company: string;
    email: string;
    website: string;
    location: string;
    description: string
}

export const LandingPage = () => {
    const {data: listings, isLoading, isError, error} = useGetListing()
    const {mutate: postList} = usePostListing()
    const {mutate: deleteList} = useDeleteListing()
    const {mutate: updateList} = useUpdateListing()
    const [editList, seteditList] = useState<Listing | null>(null)

    const editClick = (listing: Listing) => {
        seteditList(listing)
    }

    const handleUpdate = (formValue: FormData) => {
        if (!editList) return;
        updateList({
            id: editList.id,
            title: formValue.get('titleUp'),
            tags: formValue.get('tagsUp'),
            company: formValue.get('companyUp'),
            email: formValue.get('emailUp'),
            website: formValue.get('websiteUp'),
            location: formValue.get('locationUp'),
            description: formValue.get('descriptionUp')
        });
        seteditList(null);
    }

    const updatePost = (listing:Listing) => {
        return(
            <div className="fixed flex inset-0 z-50 items-center justify-center backdrop-blur-xl bg-[rgb(0,0,0,0.7)]">
                <div className="w-150">
                    <div className=" bg-white text-black rounded-3xl flex flex-col">
                        <h1 className=" font-bold text-center font-sans text-xl ">Edit List</h1>
                        <form action={handleUpdate} className=" flex flex-col gap-1 ml-4">
                            <h3 className="font-bold">Title</h3>                             
                            <input type="text" defaultValue={listing.title} name="titleUp" className="bg-gray-300 py-2 w-140 rounded-2xl pl-2  focus:bg-amber-200"/>
                            <h3 className="font-bold">Tags</h3>
                            <input type="text" defaultValue={listing.tags} name="tagsUp" className="bg-gray-300 py-2 w-140 rounded-2xl pl-2  focus:bg-amber-200"/>
                            <h3 className="font-bold">Company</h3>
                            <input type="text" defaultValue={listing.company} name="companyUp" className="bg-gray-300 py-2 w-140 rounded-2xl pl-2  focus:bg-amber-200"/>
                            <h3 className="font-bold">Email</h3>
                            <input type="text" defaultValue={listing.email} name="emailUp" className="bg-gray-300 py-2 w-140 rounded-2xl pl-2  focus:bg-amber-200"/>
                            <h3 className="font-bold">Website</h3>
                            <input type="text" defaultValue={listing.website} name="websiteUp" className="bg-gray-300 py-2 w-140 rounded-2xl pl-2  focus:bg-amber-200"/>
                            <h3 className="font-bold">Location</h3>
                            <input type="text" defaultValue={listing.location} name="locationUp" className="bg-gray-300 py-2 w-140 rounded-2xl pl-2  focus:bg-amber-200"/>
                            <h3 className="font-bold">Description</h3>                                             
                            <input type="text" defaultValue={listing.description} name="descriptionUp" className="bg-gray-300 py-2 w-140 rounded-2xl pl-2  focus:bg-amber-200"/>
                            <div className="flex gap-4 my-3">
                                <button type="submit" className="bg-gray-300 py-2 px-4 rounded-xl hover:bg-amber-600 hover:text-black transition duration-500 ease-in font-bold cursor-pointer">SUMBIT</button>
                                <button type="button" onClick={() => seteditList(null)} className="bg-gray-300 py-2 px-4 rounded-xl hover:bg-red-400 hover:text-black transition duration-500 ease-in font-bold cursor-pointer"> CANCEL</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const deletePost = (id: string) => {
        deleteList(id)
    }

    const addPost = (formData: FormData) => {
        postList({
            title: String(formData.get('title')),
            tags: String(formData.get('tags')),
            company: String(formData.get('company')),
            email:String( formData.get('email')),
            website: String(formData.get('website')),
            location: String(formData.get('location')),
            description: String(formData.get('description'))

        })
        console.log(postList)


    }


    if (isLoading){
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
            </div>
        )
    }

    if(isError){
        return(
            <div>
                <h1 className="text-red-600 font-bold text-6xl text-center align-middle animate-pulse">Error: {error.message}</h1>
            </div>
        )
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
            <form action={addPost}className="flex-col justify-between text-center mt-20 flex-1">
                <div className="">
                <input className="mr-2 bg-purple-400 placeholder:text-purple-800 pr-5 pl-2 py-1.5 rounded-3xl text-black outline-amber-300 outline- border-2 border-amber-300"type="text" id="title" name="title" required placeholder="Enter the title..."/>
                <input className="mr-2 bg-purple-400 placeholder:text-purple-800 pr-5 pl-2 py-1.5 rounded-3xl text-black outline-amber-300 outline- border-2 border-amber-300"type="text" id="tags" name="tags" required  placeholder="Enter the tags..."/>
                <input className="mr-2 bg-purple-400 placeholder:text-purple-800 pr-5 pl-2 py-1.5 rounded-3xl text-black outline-amber-300 outline- border-2 border-amber-300"type="text" id="company" name="company" required placeholder="Enter the company..."/>
                <input className="mr-2 bg-purple-400 placeholder:text-purple-800 pr-5 pl-2 py-1.5 rounded-3xl text-black outline-amber-300 outline- border-2 border-amber-300"type="text" id="email" name="email" required placeholder="Enter the email..."/>
                </div>
                <div className="mt-4">
                <input className="mr-2 bg-purple-400 placeholder:text-purple-800 pr-5 pl-2 py-1.5 rounded-3xl text-black outline-amber-300 outline- border-2 border-amber-300"type="text" id="website" name="website" required placeholder="Enter the website..."/>
                <input className="mr-2 bg-purple-400 placeholder:text-purple-800 pr-5 pl-2 py-1.5 rounded-3xl text-black outline-amber-300 outline- border-2 border-amber-300"type="text" id="location" name="location" required placeholder="Enter the location..."/>
                <input className="mr-2 bg-purple-400 placeholder:text-purple-800 pr-5 pl-2 py-1.5 rounded-3xl text-black outline-amber-300 outline- border-2 border-amber-300"type="text" id="description" name="description" required  placeholder="Enter the description..."/>
                <button type="submit" className="mr-41 border-2 border-purple-400 font-bold px-3 py-1.5 rounded-lg btn-style507 transition duration-300 ease-in cursor-pointer">Enter</button>
                </div>
            </form>
            
            <ul className="space-y-4 p-4">
                {(listings ?? []).map((listing: Listing) => (  
                    <li
                        key={listing.id}
                        className="flex-col flex p-4 mt-5 bg-purple-400 rounded-lg transition-all ease-in  btn-style3"
                    >
                        <div className="font-bold flex justify-between">{listing.title} 
                        <div className="flex gap-5">
                            <button className="hover:text-amber-200 cursor-pointer" onClick={() => editClick(listing)}>Edit</button>
                            <button className="hover:text-red-400 cursor-pointer" onClick={() => deletePost(listing.id.toString())}>Delete</button>
                        </div>
                        </div>
                        <div className="text-sm">
                        <div>{listing.tags}</div>
                        <div>{listing.email}</div>
                        <div>{listing.company}</div>
                        <div>Email: {listing.website}</div>
                        <div>Location: {listing.location}</div>
                        <div>Job Description: {listing.description}</div>
                        </div>
                    </li>
                
                ))}
            </ul>
            {editList && updatePost(editList)}
         </>
    )
}

export default LandingPage