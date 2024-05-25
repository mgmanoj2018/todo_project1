import { useState } from "react";
// import "./styles.css";

export default function App() {
  const allBrands = [
    { id: 1, brand: "jocky" },
    { id: 2, brand: "rebock" },
    { id: 3, brand: "nike" },
    { id: 4, brand: "fibo" },
    { id: 5, brand: "puma" },
  ];
   const [selectedBrand, setselectedBrand] = useState("");
   const [brands, setBrands] = useState(allBrands);
  const handleSelected = (e) => {
   let setselected = e.target.value
    setselectedBrand(setselected)
    if(setselected ==="allBrands"){
      setBrands(allBrands)
    }else{
      const filterItems = allBrands.filter((newItem) => newItem.brand === setselected);
    setBrands(filterItems);
    }
    
  };
  // console.log(brands);
  return (
    <div>
      

      <label htmlFor="allBrands">all Brands</label>
      <input
        type="radio"
        name="brand"
        value="allBrands"
        onClick={handleSelected}
      />
      <label htmlFor="puma">puma</label>
      <input 
        type="radio" 
        name="brand"
        value="puma" 
        onClick={handleSelected} 

        />
      <label htmlFor="jocky">jocky</label>
      <input 
            type="radio"
             name="brand" 
             value="jocky" 
             onClick={handleSelected} 

            />
      <ul>
        {brands.map((item) => {
          return <li key={item.id}>{item.brand}</li>;
        })}
      </ul>
    </div>
  );
}
