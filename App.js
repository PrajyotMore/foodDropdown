import React, { useState, useEffect } from "react";
import './App.css';
import Select from 'react-select';
import Selected from "./Selected";


const testData = [
  {
    category: "veg-sandwich",
    items: [
      { name: "Mushroom Cheese Sandwich", description: "Grilled Sandwich made of white or brown bread, cheese  & mushroom", price: "375rs", inStock: false },
      { name: "Corn Spinach Sandwich", description: "Sandwich made with brown bread and corn spinach filling.", price: "240rs", inStock: true },
      { name: "Jalapeno Cheese Sandwich", description: "Grilled Sandwich made of white or brown bread, cheese  & jalapeno", price: "350rs", inStock: true },
      { name: "Salad Sandwich", description: "Sandwich made of whole grain bread, Tomato, cucumber, lettuce", price: "150rs", inStock: true }
    ]
  },
  {
    category: "non-veg-sandwich",
    items: [
      { name: "Egg Salad Sandwich", description: "White bread sandwich with chopped hard boiledeggs, green onion, celery", price: "200rs", inStock: true },
      { name: "Chicken Club Sandwich", description: "White bread club sandwich filled with chicken and bacon", price: "380rs", inStock: true },
      { name: "Chicken Tandoori Sandwich", description: "wich filled with grilled tandoori chicken pieces with lettuce and mayonnaise", price: "400rs", inStock: false },
      { name: "Chicken Salad Sandwich", description: "White bread sandwich filled with chicken breast, garden salad, mayonnaise, and herbs.", price: "390rs", inStock: true }
    ]
  },
  {
    category: "Milk-Shake",
    items: [
      { name: "Chocolatier", description: "chocolate shake with brownies, hot fudge, and chocolate chips", price: "275rs", inStock: false },
      { name: "Bananas Foster", description: "vanilla shake with caramel, banana, toffee syrup, banana syrup, and cinnamon", price: "250rs", inStock: true },
      { name: "Caramel Macchiato", description: "coffee shake made with cold brew coffee and caramel, topped with whipped cream", price: "350rs", inStock: true },
      { name: "Peanut Butter Brownie", description: "peanut butter shake with brownies and hot fudge", price: "325rs", inStock: true }
    ]
  }
];


function App() {

  const [data, setData] = useState();
  // const [stock, setStock] = useState([]);


  const options = testData.map(entry => ({ label: entry.category, value: entry.category }));

  useEffect(() => {

    let selectMenu = document.getElementById("menu").innerText
    if (!selectMenu === "Select...") {
      setData(selectMenu);
    }
    return () => null
  })


  return (
    <div className="container">
      <h1 className="text-center mt-3 my-5">Welcome to Foodie Club</h1>
      <Select options={options} id="menu" onChange={(e) => setData(e.label)} />
      {data && <Selected testData={testData} selected={data} />}
    </div>
  );
}

export default App;


