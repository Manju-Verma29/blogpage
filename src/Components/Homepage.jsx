import { focus, homeMain, thewhy, commonMistakes } from "./data"
import home from "../assets/home.png"

export default function Homepage() {
    return (
        <>
            {/* main */}
            <section className="min-h-screen px-6 py-12 md:px-10 lg:px-40 lg:py-20 grid lg:grid-cols-[2fr_1fr] items-center gap-12">
                <div className="grid gap-10 text-center lg:text-left">
                    <header>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-blue-900 leading-tight font-serif">{homeMain.title1}</h1>
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-5xl text-yellow-400 font-mono">{homeMain.title2}</h1>
                    </header>

                    <div className="grid sm:gap-1 md:gap-3 lg:gap-6">
                        <h3 className="text-blue-500 md:text-lg lg:text-2xl">{homeMain.mainSub}</h3>
                        <div className="flex flex-col sm:flex-row gap-4 p-4 justify-center lg:justify-start">
                            {homeMain.buttons.map((btn, i) => (
                                <button key={i} className="border rounded p-3 font-sans font-semibold hover:bg-blue-900 hover:shadow-2xl hover:shadow-blue-900 hover:text-white text-blue-900 transform transition duration-300 cursor-pointer">{btn}</button>
                            ))}
                        </div>
                    </div>
                </div>
                {home && (
                    <div className="hidden lg:block justify-center lg:justify-end ">
                        <img src={home} alt="Building your 20s" className="w-80 lg:w-96 object-contain" />
                    </div>
                )}
            </section>


            {/* Why */}
            <section className="lg:min-h-screen px-4 py-14 sm:px-6 md:px-10 lg:px-32">
                <header className="space-y-6 text-center lg:text-left">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-400">{thewhy.title}</h1>
                    <h3 className="text-lg md:text-xl lg:text-2xl text-blue-900">{thewhy.subTitle}</h3>
                </header>
                <div className="m-8 text-blue-900">
                    <p className="text-base md:text-lg">{thewhy.intro}</p>
                    <ul className="list-disc list-outside pl-1 lg:pl-5  lg:p-5 ext-sm sm:text-base md:text-lg ">
                        {thewhy.points.map((lines, index) => (
                            <li className="p-3" key={index}>{lines}</li>
                        ))}
                    </ul>
                </div>
                <div className="text-blue-900 text-sm md:text-lg">
                    <p>{thewhy.last}</p>
                </div>
            </section>

            {/* mistakes */}
            <section className="ticker-wrap text-center bg-blue-900 w-full space-y-8 py-4 md:py-6 lg:py-8">
                <header>
                    <h1 className="text-yellow-400 sm:text-md md:text-lg lg:text-3xl font-serif ">{commonMistakes.title}</h1>
                </header>

                <div className="text-base lg:text-xl lg:p-4 text-blue-50 ticker-wrapper overflow-hidden">
                    <div className="flex ticker-track gap-16">
                        {[...commonMistakes.points, ...commonMistakes.points].map((points, index) => (
                            <p key={index}>{points}</p>
                        ))}
                    </div>
                </div>

                <p className="text-blue-50 sm:text-xs lg:text-lg italic">{commonMistakes.last}</p>
            </section>

            {/* focus */}
            <section className="min-h-screen p-4 sm:px-8 lg:px-20 py-16 overflow-x-hidden">
                <header className="text-center mb-12">
                    <h1 className="text-2xl sm:text-4xl lg:text-6xl text-yellow-400">What You Should Focus On?</h1>
                </header>

                <div className="flex flex-wrap gap-6 justify-center">
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
