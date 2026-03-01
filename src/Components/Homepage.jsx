import { focus } from "./data"
import  home  from "../assets/home.png"

export default function Homepage() {
  return (
    <>    
    {/* <section className="h-screen p-40 grid grid-cols-[2fr-1fr] place-items-start"> */}
    <section className="min-h-screen md:p-10 lg:p-40 grid grid-cols-[2fr_1fr] items-center">
        <div className="grid gap-20">
        <header>
            <h1 className="sm:text-xl md:text-3xl lg:text-6xl text-blue-900 md:leading-16 lg:leading-28 font-serif">Your 20s Are Not for Surviving,</h1>
            <h1 className="sm:text-md md:text-xl lg:text-5xl text-yellow-400 font-mono">They’re for Building.</h1>
        </header>

        <div className="grid sm:gap-1 md:gap-3 lg:gap-6">
            <h3  className="text-blue-500 md:text-lg lg:text-2xl">A practical roadmap for your 20s — career, money, health, mindset, relationships, and growth.</h3>
        <div className="flex gap-5">
            <button className="border rounded p-3 font-sans font-semibold hover:bg-blue-900 hover:shadow-2xl hover:shadow-blue-900 hover:text-white text-blue-900 transform transition duration-300 cursor-pointer">Start Your Journey</button>
            <button className="border rounded p-3 font-sans font-semibold hover:bg-blue-900 hover:shadow-2xl hover:shadow-blue-900 hover:text-white text-blue-900 transform transition duration-200 cursor-pointer">Explore the Guide</button>
        </div>
        </div>
        </div>
            <div className=" flex justify-center lg:justify-end ">
                <img src={home} alt="Building your 20s" className="w-80 lg:w-96 object-contain"/>
            </div>
    </section>


    <section className="min-h-screen px-40 ">
        <header className="grid gap-5">
            <h1 className="text-6xl text-yellow-400">Why Your 20s Matter?</h1>
            <h3 className="text-3xl text-blue-900">Your 20s shape the next 40 years of your life.</h3>
        </header>

        <div className="m-12 text-blue-900">
        <p className="text-2xl ">This is the decade where:</p>
        <ul className="list-disc  list-outside pl-5 text-xl p-5 ">
            <li className="p-3">You build your career foundation</li>
            <li className="p-3">You shape your habits</li>
            <li className="p-3">You define your standards</li>
            <li className="p-3">You learn who you really are</li>
        </ul>
        </div>

        <div className="text-blue-900 grid text-xl gap-4">
            <p>Most people waste their 20s chasing trends. Smart people invest in skills, health, and clarity.</p>
        </div>
    </section>

    <section className="ticker-wrap text-center bg-blue-900 w-full space-y-8 py-8">
        <header>
            <h1 className="text-yellow-400 text-2xl font-serif ">Common Mistakes in Your 20s</h1>
        </header>
        <div className=" text-xl p-4 text-blue-50 ticker-wrapper">
            <div className="ticker-track gap-16">
                <p>Waiting for motivation</p>
                <p>Comparing yourself to social media</p>
                <p>Ignoring health</p>
                <p>Not learning about money</p>
                <p>Staying in comfort zones</p>
            
                <p>Waiting for motivation</p>
                <p>Comparing yourself to social media</p>
                <p>Ignoring health</p>
                <p>Not learning about money</p>
                <p>Staying in comfort zones</p>
            </div>  
        </div>
        <p className="text-blue-50 italic">
            You don’t need to be perfect. You need direction.
        </p>
    </section>

    <section className="min-h-screen p-40">
        <header>
            <h1 className="text-6xl text-yellow-400">What You Should Focus On?</h1>
        </header>

        <div className="flex gap-5 py-14">
            {focus.map((item, index) => (
                <div key={index} className="border-2 border-blue-200 w-md p-8 rounded-md hover:shadow-lg  flex flex-col justify-between">
                    <div>
                    <p className="font-bold text-blue-900">{item.title}</p>
                    <p >{item.content.line1}</p>
                    <p >{item.content.line2}</p>
                    <p >{item.content.line3}</p>
                    <p >{item.content.line4}</p>
                    </div>
                    <p className="italic text-left border-t text-gray-700 border-gray-200 pt-2">{item.advice}</p>
                </div>
            ))}
        </div>
    </section> 
    </>
  )
}
