import CheckoutForm from './Module/CheckoutForm';

import './styles/global.css';
import './styles/card.css';

function App() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='head'>
          <h1>Formulario <br /> para compra de <br /><strong>Pacotes de adesivos</strong></h1>
          <div className="box-svg"></div>
          <div className="shape"></div>
        </div>

          
        <div className='body'>
          <CheckoutForm />
        </div>

      </div>
    </div>
  )
}

export default App
