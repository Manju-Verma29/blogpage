import {lifeGoals} from "./data.js"

export default function Blogpage() {
  return (
    <>    
    {lifeGoals.map((category, index)=> (
        <div key={index} className="mx-8 text-amber-950 my-3.5 lg:max-w-5xl lg:mx-auto">
        <h1 className="text-4xl py-10">What to Do in Your 20s: A Complete Guide</h1>
        <h2 className="text-xl lg:text-3xl  font-bold">{category.title}</h2>
        <ul>
            {category.subcategories.map((sub, subIndex)=>(
            <li key={subIndex} className="px-8 py-2">
                <h3 className="text-md lg:text-2xl lg:py-3 font-bold">{sub.subTitle}</h3>
                <div className="lg:px-10 px-2 grid gap-2">
                <p className="text-base lg:text-lg ">{sub.contentTitle1 && <strong>{sub.contentTitle1}</strong>}
                {sub.content1}</p>
                
                <p className="text-base lg:text-lg">{sub.contentTitle2 && <strong>{sub.contentTitle2}</strong>}
                {sub.content2}</p>

                <p className="text-base lg:text-lg">{sub.contentTitle3 && <strong>{sub.contentTitle3}</strong>}
                {sub.content3}</p>
                </div>
            </li>
            ))}
        </ul>
        </div>
    ))}
    </>
  )
}
