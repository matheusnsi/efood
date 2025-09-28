import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCheckout } from '../contexts/CheckoutContext'
import { postCheckout } from '../services/checkout'
import { Container, Panel, Grid, Grid3 } from '../components/CheckoutStyles'

export default function PaymentPage() {
  const { cart, delivery, setCard, setOrder } = useCheckout()
  const nav = useNavigate()

  const [form, setForm] = useState({
    nameOnCard: '',
    cardNumber: '',
    cvv: '',
    expiresMonth: '',
    expiresYear: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!delivery) {
      setError('Preencha a entrega antes de pagar.')
      return
    }
    setSubmitting(true)
    setError(null)
    try {
      setCard(form)
      const products = (cart && cart.length ? cart : []).map((i) => ({
        id: i.id,
        price: i.preco
      }))
      const payload = {
        products: products.length ? products : [{ id: 1, price: 50 }],
        delivery,
        payment: { card: form }
      }
      const resp = await postCheckout(payload)
      setOrder(resp)
      nav('/checkout/confirmacao')
    } catch (err: any) {
      setError(err.message ?? 'Erro ao finalizar pagamento')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Container>
      <Panel onSubmit={handleSubmit}>
        <h1>Pagamento</h1>
        <Grid3>
          <label>
            Nome no cartão
            <input
              value={form.nameOnCard}
              onChange={(e) => setForm({ ...form, nameOnCard: e.target.value })}
            />
          </label>
          <label>
            Número do cartão
            <input
              inputMode="numeric"
              maxLength={19}
              value={form.cardNumber}
              onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
            />
          </label>
          <label>
            CVV
            <input
              inputMode="numeric"
              maxLength={4}
              value={form.cvv}
              onChange={(e) => setForm({ ...form, cvv: e.target.value })}
            />
          </label>
        </Grid3>
        <Grid>
          <label>
            Mês de vencimento
            <input
              placeholder="MM"
              maxLength={2}
              value={form.expiresMonth}
              onChange={(e) =>
                setForm({ ...form, expiresMonth: e.target.value })
              }
            />
          </label>
          <label>
            Ano de vencimento
            <input
              placeholder="YYYY"
              maxLength={4}
              value={form.expiresYear}
              onChange={(e) =>
                setForm({ ...form, expiresYear: e.target.value })
              }
            />
          </label>
        </Grid>
        {error && <p style={{ color: '#b00020', fontSize: 12 }}>{error}</p>}
        <div className="actions">
          <button type="submit" disabled={submitting}>
            {submitting ? 'Processando…' : 'Finalizar pagamento'}
          </button>
        </div>
      </Panel>
    </Container>
  )
}
