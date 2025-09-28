import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../store'
import {
  Content,
  Overlay,
  Sidebar,
  Title,
  Label,
  Input,
  Grid2,
  Grid3,
  ErrorText,
  Actions
} from './styles'
import { cores } from '../../styles'

import { close as closeCheckout, goTo } from '../../store/reducers/checkout'
import { open as openCart } from '../../store/reducers/cart' // ✅ importa a action real do carrinho

import {
  postCheckout,
  type DeliveryData,
  type CheckoutResponse
} from '../../services/checkout'
import type { Prato } from '../../models/Restaurant'
import { Grid } from '../CheckoutStyles'

const Checkout = () => {
  const dispatch = useDispatch()
  const { isOpen, step } = useSelector((s: RootReducer) => s.checkout)
  const cartItems = useSelector((s: RootReducer) => s.cart.items)

  // estado local de entrega
  const [delivery, setDelivery] = useState<DeliveryData>({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  })

  // estado local de pagamento
  const [card, setCard] = useState({
    nameOnCard: '',
    cardNumber: '',
    cvv: '',
    expiresMonth: '',
    expiresYear: ''
  })

  // resposta da API (usada na confirmação)
  const [order, setOrder] = useState<CheckoutResponse | null>(null)

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmitDelivery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg(null)

    if (
      !delivery.receiver ||
      !delivery.address ||
      !delivery.city ||
      !delivery.number
    ) {
      setErrorMsg('Preencha todos os campos obrigatórios.')
      return
    }
    if (!/^\d{5}-?\d{3}$/.test(delivery.zipCode)) {
      setErrorMsg('CEP inválido. Use o formato 00000-000.')
      return
    }

    dispatch(goTo('payment'))
  }

  const handleSubmitPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg(null)
    setLoading(true)

    try {
      const products = (cartItems as Prato[]).map((p) => ({
        id: p.id,
        price: p.preco
      }))
      const payload = {
        products: products.length ? products : [{ id: 1, price: 50 }],
        delivery,
        payment: { card }
      }

      const resp = await postCheckout(payload)
      setOrder(resp)
      dispatch(goTo('confirmation'))
    } catch (err: any) {
      setErrorMsg(err.message ?? 'Não foi possível finalizar o pagamento.')
    } finally {
      setLoading(false)
    }
  }

  const total = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format((cartItems as Prato[]).reduce((a, b) => a + b.preco, 0))

  return (
    <Content className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(closeCheckout())} />
      <Sidebar>
        {/* ENTREGA */}
        {step === 'delivery' && (
          <form onSubmit={handleSubmitDelivery}>
            <Title>Entrega</Title>

            <Label>Quem irá receber</Label>
            <Input
              value={delivery.receiver}
              onChange={(e) =>
                setDelivery({ ...delivery, receiver: e.target.value })
              }
            />

            <Label>Endereço</Label>
            <Input
              value={delivery.address}
              onChange={(e) =>
                setDelivery({ ...delivery, address: e.target.value })
              }
            />

            <Label>
              <div>
                <Label>Cidade</Label>
                <Input
                  value={delivery.city}
                  onChange={(e) =>
                    setDelivery({ ...delivery, city: e.target.value })
                  }
                />
              </div>
            </Label>
            <Grid2>
              <div>
                <Label>CEP</Label>
                <Input
                  value={delivery.zipCode}
                  onChange={(e) =>
                    setDelivery({ ...delivery, zipCode: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Número</Label>
                <Input
                  value={delivery.number}
                  onChange={(e) =>
                    setDelivery({ ...delivery, number: e.target.value })
                  }
                />
              </div>
            </Grid2>

            <Label>
              <div>
                <Label>Complemento (opcional)</Label>
                <Input
                  value={delivery.complement}
                  onChange={(e) =>
                    setDelivery({ ...delivery, complement: e.target.value })
                  }
                />
              </div>
            </Label>

            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}

            <Actions>
              <button type="submit">Continuar com o pagamento</button>
              <button
                type="button"
                onClick={() => {
                  dispatch(closeCheckout())
                  dispatch(openCart())
                }}
              >
                Voltar ao carrinho
              </button>
            </Actions>
          </form>
        )}

        {/* PAGAMENTO */}
        {step === 'payment' && (
          <form onSubmit={handleSubmitPayment}>
            <Title>
              Pagamento ·{' '}
              <span style={{ color: cores.rosaClaro }}>
                Valor a pagar {total}
              </span>
            </Title>

            <Label>
              <div>
                <Label>Nome no cartão</Label>
                <Input
                  value={card.nameOnCard}
                  onChange={(e) =>
                    setCard({ ...card, nameOnCard: e.target.value })
                  }
                />
              </div>
            </Label>
            <Grid2>
              <div>
                <Label>Número do cartão</Label>
                <Input
                  inputMode="numeric"
                  value={card.cardNumber}
                  onChange={(e) =>
                    setCard({ ...card, cardNumber: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>CVV</Label>
                <Input
                  inputMode="numeric"
                  value={card.cvv}
                  onChange={(e) => setCard({ ...card, cvv: e.target.value })}
                />
              </div>
            </Grid2>

            <Grid2>
              <div>
                <Label>Mês de vencimento</Label>
                <Input
                  value={card.expiresMonth}
                  onChange={(e) =>
                    setCard({ ...card, expiresMonth: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Ano de vencimento</Label>
                <Input
                  value={card.expiresYear}
                  onChange={(e) =>
                    setCard({ ...card, expiresYear: e.target.value })
                  }
                />
              </div>
            </Grid2>

            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}

            <Actions>
              <button type="submit" disabled={loading}>
                {loading ? 'Processando…' : 'Finalizar pagamento'}
              </button>
              <button type="button" onClick={() => dispatch(goTo('delivery'))}>
                Voltar para a edição de endereço
              </button>
            </Actions>
          </form>
        )}

        {/* CONFIRMAÇÃO */}
        {step === 'confirmation' && (
          <section>
            <Title>
              Pedido realizado {order?.orderId ? `(${order.orderId})` : ''}
            </Title>

            <p
              style={{
                color: cores.rosaClaro,
                fontSize: 14,
                marginBottom: 12,
                whiteSpace: 'pre-line' // <- faz \n virar quebra de linha
              }}
            >
              {order?.message ||
                `Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.

                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.

Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.

Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!`}
            </p>

            <Actions>
              <button type="button" onClick={() => dispatch(closeCheckout())}>
                Concluir
              </button>
            </Actions>
          </section>
        )}
      </Sidebar>
    </Content>
  )
}

export default Checkout
