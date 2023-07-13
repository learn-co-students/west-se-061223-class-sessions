import React, {useState} from 'react'

function EditPlantForm({ id, price, onUpdatePlant }) {

    const [inputPrice, setInputPrice] = useState(price)

    function handleSubmit(e){
        e.preventDefault()
        const config = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ price: inputPrice})
        }
        fetch(`http://localhost:6001/plants/${id}`, config)
            .then(r => r.json())
            .then(onUpdatePlant)
    }

  return (
    <form onSubmit={handleSubmit}> 
        <input 
            type="number"
            step="0.01"
            placeholder='New price'
            value={inputPrice}
            onChange={e => setInputPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Update Price</button>
    </form>
  )
}

export default EditPlantForm