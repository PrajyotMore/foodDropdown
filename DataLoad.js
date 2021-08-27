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
                                <div className="text-center p-2 text-white border border-dark bg-secondary">{value.category}</div>
                                <div className= "card-body text-center text-black mb-5 border border-dark">
                                    <div> <strong className="fw-normal p-3">{value.items[0].name}</strong>  <strong className="pl-3">{value.items[0].price}</strong></div>
                                    <div> <strong className="fw-normal p-3">{value.items[1].name}</strong>  <strong className="pl-3">{value.items[1].price}</strong></div>
                                    <div> <strong className="fw-normal p-3">{value.items[2].name}</strong>  <strong className="pl-3">{value.items[2].price}</strong></div>
                                    <div> <strong className="fw-normal p-3">{value.items[3].name}</strong>  <strong className="pl-3">{value.items[3].price}</strong></div>
                                </div>
                            </div>
                 })
             }       
         </div>
    )
}

export default DataLoad
