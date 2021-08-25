import React from 'react'

function Selected({ testData, selected }) {
    const [inStock, setInStock] = React.useState(null)
    let filterData;

    const filter = () => {
        if (filterData)
            setInStock(filterData)
    }

    React.useEffect(() => {
        testData.forEach((value) => {
            if (value.category === selected) {
                filterData = value.items.filter((data) => data.inStock === true);
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
            {inStock && inStock.map((data, index) => {
                return <>
                    <div key={index}>
                        <div>  Name:{data.name} Price:{data.price}</div>
                    </div>
                </>
            })}
        </div>
    )
}

export default Selected;

