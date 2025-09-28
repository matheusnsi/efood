import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

// ⬇️ importe o provider do checkout
import { CheckoutProvider } from './contexts/CheckoutContext'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* ⬇️ tudo que usa useCheckout agora está dentro do provider */}
        <CheckoutProvider>
          <GlobalCss />
          <Rotas />
          <Footer />
          <Cart />
          <Checkout />
        </CheckoutProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
