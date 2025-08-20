import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-evenly items-center flex-1 my-30 font-sans fade-in">
        <div className="flex">
          <main className="flex flex-col">
            <h1 className="melting-text"
            >API COLLECTOR</h1>
            <p className="font-medium text-justify" 
            >This project displays information from the API of a laravel backend. <br />You can also add, edit, and delete information to your liking as long <br />as you are authenticated in the <a href="/login" className="font-bold text-purple-400 cursor-pointer hover:text-purple-600 ease-in transition duration-200">Login Page</a>.</p>
            <Link href="/login"><button 
            className="border-purple-400 border-2 text-3xl rounded-2xl px-10 py-5 font-bold cursor-pointer hover:text-black transition duration-700 ease-initial mt-7 btn-style507">
              Get Started</button></Link>
          </main>
        </div>
        <div className="">
          <img className="w-150 flex"
          src="home.png" alt="" />
        </div>
      </div>
    </>
  );
}
