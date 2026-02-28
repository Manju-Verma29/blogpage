import { focus } from "./data"

export default function Homepage() {
  return (
    <>
    <section className="h-screen p-40 grid  place-items-start">
        <header className="grid gap-2.5">
            <h1 className="text-6xl text-blue-900 font-serif">Your 20s Are Not for Surviving.</h1>
            <h1 className="text-5xl text-yellow-400 font-mono">They’re for Building.</h1>
        </header>

        <div className="grid gap-6">
            <h3  className="text-[#3B82F6] text-2xl">A practical roadmap for your 20s — career, money, health, mindset, relationships, and growth.</h3>
        <div className="flex gap-5">
            <button className="border rounded p-3 font-sans font-semibold hover:bg-[#1E3A8B] hover:shadow-2xl hover:shadow-[#1E3A8B] hover:text-white text-blue-900 transform transition duration-300 cursor-pointer">Start Your Journey</button>
            <button className="border rounded p-3 font-sans font-semibold hover:bg-[#1E3A8B] hover:shadow-2xl hover:shadow-[#1E3A8B] hover:text-white text-blue-900 transform transition duration-200 cursor-pointer">Explore the Guide</button>
        </div>
        </div>
    </section>


    <section className="min-h-screen p-30 bg-amber-100">
        <header className="grid gap-5">
            <h1 className="text-6xl text-yellow-400">Why Your 20s Matter?</h1>
            <h3 className="text-3xl text-blue-900">Your 20s shape the next 40 years of your life.</h3>
        </header>

        <div className="m-12">
        <p className="text-2xl ">This is the decade where:</p>
        <ul className="list-disc list-outside pl-5 text-xl p-5 ">
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

    <section className="min-h-screen p-20">
        <header>
            <h1 className="text-6xl text-yellow-400">What You Should Focus On?</h1>
        </header>

        <div className="flex gap-5 py-14">
            {focus.map((item, index) => (
                <div key={index} className="border w-5xl p-4 rounded-sm shadow-xs bg-neutral-primary-soft hover:bg-neutral-secondary-medium flex flex-col justify-between">
                    <div>
                    <p className="font-bold text-blue-900">{item.title}</p>
                    {/* {focus.content.map((pageContent, contentIndex))} */}
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
    <section>
        <header>
            <h1>Common Mistakes in Your 20s</h1>
        </header>
        <div className="flex">
            <div className="border w-xs">
                <p>Waiting for motivation</p>
            </div>
            <div className="border w-xs">
                <p>Comparing yourself to social media</p>
            </div>
            <div className="border w-xs">
                <p>Ignoring health</p>
            </div>
            <div className="border w-xs">
                <p>Not learning about money</p>
            </div>
            <div className="border w-xs">
                <p>Staying in comfort zones</p>
            </div>
        </div>
        <div>You don’t need to be perfect. You need direction.</div>
    </section>
    </>
  )
}
