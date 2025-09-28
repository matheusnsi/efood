import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCheckout } from '../contexts/CheckoutContext'
import type { DeliveryData } from '../services/checkout'
import { Container, Panel, Grid } from '../components/CheckoutStyles'

const initial: DeliveryData = {
  receiver: '',
  address: '',
  city: '',
  zipCode: '',
  number: '',
  complement: ''
}

export default function DeliveryPage() {
  const nav = useNavigate()
  const { setDelivery } = useCheckout()
  const [form, setForm] = useState<DeliveryData>(initial)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const e: Record<string, string> = {}
    if (!form.receiver.trim()) e.receiver = 'Informe o destinatário'
    if (!/^\d{5}-?\d{3}$/.test(form.zipCode)) e.zipCode = 'CEP inválido'
    if (!form.address.trim()) e.address = 'Informe o endereço'
    if (!form.number.trim()) e.number = 'Informe o número'
    if (!form.city.trim()) e.city = 'Informe a cidade'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return
    setDelivery(form)
    nav('/checkout/pagamento')
  }

  return (
    <Container>
      <Panel onSubmit={onSubmit}>
        <h1>Entrega</h1>
        <label>
          Quem irá receber
          <input
            value={form.receiver}
            onChange={(e) => setForm({ ...form, receiver: e.target.value })}
          />
          {errors.receiver && (
            <small className="error">{errors.receiver}</small>
          )}
        </label>
        <label>
          Endereço
          <input
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
          {errors.address && <small className="error">{errors.address}</small>}
        </label>
        <Grid>
          <label>
            CEP
            <input
              placeholder="00000-000"
              value={form.zipCode}
              onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
            />
            {errors.zipCode && (
              <small className="error">{errors.zipCode}</small>
            )}
          </label>
          <label>
            Número
            <input
              value={form.number}
              onChange={(e) => setForm({ ...form, number: e.target.value })}
            />
            {errors.number && <small className="error">{errors.number}</small>}
          </label>
        </Grid>
        <Grid>
          <label>
            Cidade
            <input
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            {errors.city && <small className="error">{errors.city}</small>}
          </label>
          <label>
            Complemento (opcional)
            <input
              value={form.complement}
              onChange={(e) => setForm({ ...form, complement: e.target.value })}
            />
          </label>
        </Grid>
        <div className="actions">
          <button type="submit">Continuar com o pagamento</button>
        </div>
      </Panel>
    </Container>
  )
}
