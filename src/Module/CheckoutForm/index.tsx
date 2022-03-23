import { FormEvent, useState } from 'react';
import Checkbox from '../../Component/form/Checkbox'
import Count from '../../Component/form/Count';
import Textarea from '../../Component/form/Textarea';

import './styles.css';


function CheckoutForm() {
  const [sticker, setSticker] = useState('')
  const [quantity, setQuantity] = useState('')
  const [message, setMessage] = useState('')
  
  const stickersOptions = [
    { id: 'react', value: 'react', label: 'React' },
    { id: 'vue', value: 'vue', label: 'Vue' },
    { id: 'angular', value: 'angular', label: 'Angular' }
  ];

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()
    const data = {
      sticker,
      quantity,
      message
    }

    // TODO: api to send data form itens;
  }


  return (
    <form onSubmit={handleSubmitForm}>
    <div className="d-flex f-column form">

      <div className="p-form">
        <span className="label">Quais adesivos: </span>
        {
          stickersOptions.map(option => {
            return (
              <Checkbox 
                key={option.id}
                name={option.id}
                id={option.id} 
                label={option.label} 
                value={sticker} 
                onChange={(e) => setSticker(e.target.value)}
              />
              )
            })
          }
      </div>

      <div className="p-form">
        <Count onChange={(e) => setQuantity(e.target.value)} />
      </div>

      <div className="p-form">
        <Textarea
              label="Observações"
              name="message"
              placeholder="Alguma dúvida? Recado?"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
      </div>

      <div className="send">
        <input type="submit" className="btn btn-send" value="Enviar" />
      </div>
      
    </div>
    </form>
  )
}

export default CheckoutForm