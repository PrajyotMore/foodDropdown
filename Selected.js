import React, { useEffect } from 'react'

function Selected({ testData, selected }) {
    const [inStock, setInStock] = React.useState(null)
    // const[item,setItem] = React.useState([]);

    let filterData;

    const filter = () => {
        if (filterData)
            console.log(filterData);
            setInStock(filterData)
    }


    // useEffect(()=> {
    //     setItem();
    // },[selected])


    React.useEffect(() => {
        testData.forEach((value) => {
            console.log(value)
            if (value.category === selected) {
                filterData = value.items.filter((data) => 
                data.inStock === true
                );
            }
        })

    }, [selected])


    return (
        <div>
            <div className="form-check my-5">
                <input className="form-check-input" type="checkbox" value="" onClick={filter} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Show items only inStock items
                </label>
            </div>
            {
                (inStock && inStock.map((data, index) => {
                            return <>
                                <div key={index} className="card text-black bg-secondary">
                                <div className= "card-body ">
                                    <div> <strong className="fs-2 fw-normal">{data.name}</strong>  <strong className="pl-3">{data.price}</strong></div>
                                </div>
                                </div>
                            </>
                    })) 
            }
            </div>
        
    )
}

export default Selected;

