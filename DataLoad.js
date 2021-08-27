import React,{useEffect, useState} from 'react'

function DataLoad({testData}) {
    const [data,setData] = useState([]);
    useEffect(() => {
      setData(testData)
    })
    return (
        <div>
        <div className="form-check my-5">
                <input className="form-check-input" type="checkbox"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Show items only inStock items
                </label>
            </div>
             {
                 data.map((value,index)=> {
                     return <div key={index}>
                                <h1 className="text-center">{value.category}</h1>
                                <div className="text-center p-5">
                                <div> {value.items[0].name} {value.items[0].price}</div>
                                <div> {value.items[1].name} {value.items[1].price}</div>
                                <div> {value.items[2].name} {value.items[2].price}</div>
                                <div> {value.items[3].name} {value.items[3].price}</div>

                            </div>
                           </div>
                 })
             }       
         </div>
    )
}

export default DataLoad
