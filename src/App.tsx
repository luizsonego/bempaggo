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
          
          {/* <div className="shape"> */}
              {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M 0 0 L 0 0 L 1200 0 C 900 200 80 20 -20 0 Z" className='shape-fill'/>
              </svg> */}
          {/* </div> */}

        <div className='body'>
          
          <CheckoutForm />

        </div>
      </div>
    </div>
  )
}

export default App
