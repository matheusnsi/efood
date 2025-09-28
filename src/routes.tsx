import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import { CheckoutProvider } from './contexts/CheckoutContext'
import DeliveryPage from './pages/DeliveryPage'
import PaymentPage from './pages/PaymentPage'
import ConfirmationPage from './pages/ConfirmationPage'

const Rotas = () => (
  <CheckoutProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<Perfil />} />
      <Route path="/checkout/entrega" element={<DeliveryPage />} />
      <Route path="/checkout/pagamento" element={<PaymentPage />} />
      <Route path="/checkout/confirmacao" element={<ConfirmationPage />} />
    </Routes>
  </CheckoutProvider>
)

export default Rotas
