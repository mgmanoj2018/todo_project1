import React,{useState} from 'react'

const App = () => {
    const [addCard,setAddcard] =useState([])
    const allBrands = [
        { id: 1, brand: "jocky" },
        { id: 2, brand: "rebock" },
        { id: 3, brand: "nike" },
        { id: 4, brand: "fibo" },
        { id: 5, brand: "puma" },
      ];
     
      const handleAddcard = (id)=>{
        let selected = allBrands.find((item)=>item.id===id)
        setAddcard([...addCard,selected])
      }
      const removeFromCart = (id)=>{
        let cardselected = addCard.filter(item=>item.id !==id)
        setAddcard(cardselected)
      }
  return (
    <div className='App'>
        <h1>add brand to your card</h1>
    {
        allBrands.map((item)=>{
            return(
                <>
                    <div key={item.id}>
                        {item.brand}
                        <button onClick={()=>handleAddcard(item.id)}>Add to card</button>
                    </div>
                </>
            )
        })
    }
        <div>{
            addCard &&  addCard.map(addcartItem=>{
                return (
                    <div key={addcartItem.id}>{addcartItem.brand}p
                        <button onClick={()=>removeFromCart(addcartItem.id)}>Remove </button>
                    </div>
                )
            })
        }</div>
    </div>
  )
}

export default App