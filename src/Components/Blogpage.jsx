import {data} from "./data.js"

export default function Blogpage() {
  return (
    <>
        {data.map((category, index)=> (
            <div key={index} className="p-5">
                <h2 className="text-3xl">{category.title}</h2>
                <ul>
                    {category.subcategories.map((sub, subIndex)=>(
                        <li key={subIndex} className="p-6">
                            <h3 className="text-2xl py-3">{sub.subTitle}</h3>
                            <div className="px-10">
                            <p className="text-xl">{sub.contentTitle1 && <strong>{sub.contentTitle1}</strong>}</p>
                            <p>{sub.content1}</p>
                            
                            {sub.contentTitle2 && <strong>{sub.contentTitle2}</strong>}
                            <p>{sub.content2}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            
            </div>
        ))}
    </>
  )
}
