import { useCheckout } from '../contexts/CheckoutContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Panel } from '../components/CheckoutStyles'

export default function ConfirmationPage() {
  const { order, delivery } = useCheckout()
  const nav = useNavigate()

  useEffect(() => {
    if (!order) nav('/checkout/entrega')
  }, [order, nav])

  if (!order) return null

  return (
    <Container>
      <Panel as="section" onSubmit={(e) => e.preventDefault()}>
        <h1>Pedido realizado {order.orderId ? `(#${order.orderId})` : ''}</h1>

        <h2>Status</h2>
        <p>{order.status ?? 'Recebido'}</p>

        <h2>Entrega</h2>
        <ul>
          <li>
            <strong>Destinatário:</strong> {delivery?.receiver}
          </li>
          <li>
            <strong>Endereço:</strong> {delivery?.address}, {delivery?.number} –{' '}
            {delivery?.city}
          </li>
          <li>
            <strong>CEP:</strong> {delivery?.zipCode}
          </li>
          {delivery?.complement && (
            <li>
              <strong>Complemento:</strong> {delivery.complement}
            </li>
          )}
        </ul>

        <h2>Pagamento</h2>
        <ul>
          <li>
            <strong>Nome no cartão:</strong> {order.payment?.nameOnCard}
          </li>
          <li>
            <strong>Final:</strong> {order.payment?.cardNumber?.slice(-4)}
          </li>
        </ul>

        <h2>Total</h2>
        <p>
          {order.total
            ? order.total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })
            : '—'}
        </p>

        {order.message && (
          <p style={{ color: '#666', fontSize: 12 }}>{order.message}</p>
        )}

        <div className="actions">
          <button onClick={() => nav('/')}>Concluir</button>
        </div>
      </Panel>
    </Container>
  )
}
