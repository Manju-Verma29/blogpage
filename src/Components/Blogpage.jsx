import {lifeGoals} from "./data.js"

export default function Blogpage() {
  return (
    <>
    {lifeGoals.map((category, index)=> (
        <div key={index} className="p-8  lg:max-w-5xl lg:mx-auto">
        <h2 className="text-3xl font-bold">{category.title}</h2>
        <ul>
            {category.subcategories.map((sub, subIndex)=>(
            <li key={subIndex} className="px-8 py-2">
                <h3 className="text-2xl py-3 font-bold">{sub.subTitle}</h3>
                <div className="px-10">
                <p className="text-lg">{sub.contentTitle1 && <strong>{sub.contentTitle1}</strong>}
                {sub.content1}</p>
                
                <p className="text-lg">{sub.contentTitle2 && <strong>{sub.contentTitle2}</strong>}
                {sub.content2}</p>

                <p className="text-lg">{sub.contentTitle3 && <strong>{sub.contentTitle3}</strong>}
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
