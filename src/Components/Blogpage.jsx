import {lifeGoals} from "./data.js"
export default function Blogpage() {
  return (
    <> 
    <div>
      <h1 className="text-xl sm:text-lg md:text-3xl lg:text-5xl  mx-8 lg:my-3.5 lg:max-w-5xl lg:mx-auto py-10 text-center text-yellow-400">What to Do in Your 20s: A Complete Guide</h1>   
    </div>
    {lifeGoals.map((category, index)=> (
        <div key={index} className="w-full max-w-5xl mx-auto px-6 lg:my-12 flex flex-col">
        <h2 className="text-xl lg:text-3xl text-blue-900 font-bold">{category.title}</h2>
        <ul>
            {category.subcategories.map((sub, subIndex)=>(
            <div key={subIndex} className="px-8 text-blue-900 py-2">
                <h3 className="text-md lg:text-2xl lg:py-3 font-bold ">{sub.subTitle}</h3>
                <div className="lg:px-10 px-2 grid gap-2">
                <p className="text-base lg:text-lg ">{sub.contentTitle1 && <strong>{sub.contentTitle1}</strong>}
                {sub.content1}</p>
                
                <p className="text-base lg:text-lg">{sub.contentTitle2 && <strong>{sub.contentTitle2}</strong>}
                {sub.content2}</p>

                <p className="text-base lg:text-lg">{sub.contentTitle3 && <strong>{sub.contentTitle3}</strong>}
                {sub.content3}</p>
                </div>
            </div>
            ))}
        </ul>
        </div>
    ))}
    </>
  )
}
