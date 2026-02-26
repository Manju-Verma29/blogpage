import {data} from "./data.js"

export default function Blogpage() {
  return (
    <>
        {data.map((category, index)=> (
            <div key={index}>
                {category.title}
                <ul>
                    {category.subcategories.map((sub, subIndex)=>(
                        <li key={subIndex}>
                            <h3>{sub.subTitle}</h3>
                            {sub.contentTitle1 && <strong>{sub.contentTitle1}</strong>}
                            <p>{sub.content1}</p>
                            
                            {sub.contentTitle2 && <strong>{sub.contentTitle2}</strong>}
                            <p>{sub.content2}</p>
                            
                        </li>
                    ))}
                </ul>
            
            </div>
        ))}
    </>
  )
}
