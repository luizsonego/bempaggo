import Checkbox from '../../Component/form/Checkbox'
import Count from '../../Component/form/Count';
import Textarea from '../../Component/form/Textarea';

function CheckoutForm() {
  
  const stickersOptions = [
    { id: 'react', value: 'react', label: 'React' },
    { id: 'vue', value: 'vue', label: 'Vue' },
    { id: 'angular', value: 'angular', label: 'Angular' }
  ];


  return (
    <div className="d-flex f-column">

      <div>
        <span className="label">Quais adesivos: </span>
        {
          stickersOptions.map(option => {
            return (
              <Checkbox id={option.id} value={option.value} label={option.label} />
              )
            })
          }
      </div>

      <div>
        <Count />
      </div>

      <div>
        <Textarea name="message" id="message" label="Observações:" />
      </div>
      
    </div>
  )
}

export default CheckoutForm