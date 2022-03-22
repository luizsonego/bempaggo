import { useState } from "react"

import './styles.css'

function Count() {
    const [quantity, setQuantity] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')
    
    const incrementQuantity = () => {
        setErrorMessage('')
        setQuantity(quantity + 1);
    }

    const decrementQuantity = () => {
        if(quantity <= 0){
            setErrorMessage('Você deve escolher pelomenos um adesivo')
            setQuantity(0);
            return;
        }
        setErrorMessage('')
        setQuantity(quantity - 1);
    }
    
    return (
        <div className="content">
            <label className="label">Quantos adesivos de cada?</label> <br />
            
            <input type="button" className="button-action" value="-" onClick={decrementQuantity}/>
        
            <input type="number" className="value-quantity" value={quantity} />

            <input type="button" className="button-action" value="+" onClick={incrementQuantity}/>

            <span>{errorMessage}</span>
        </div>
  )
}

export default Count