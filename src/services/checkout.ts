export type DeliveryData = {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement?: string
}

export type CardData = {
  nameOnCard: string
  cardNumber: string
  cvv: string
  expiresMonth: string
  expiresYear: string
}

export type CheckoutPayload = {
  products: Array<{ id: number; price: number }>
  delivery: DeliveryData
  payment: { card: CardData }
}

export type CheckoutResponse = {
  orderId?: string | number
  status?: string
  total?: number
  delivery?: DeliveryData
  payment?: Partial<CardData>
  message?: string
  [k: string]: any
}

const API = 'https://ebac-fake-api.vercel.app/api/efood/checkout'

export async function postCheckout(
  payload: CheckoutPayload
): Promise<CheckoutResponse> {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (!res.ok) {
    let detail = ''
    try {
      detail = await res.text()
    } catch {
      /* empty */
    }
    throw new Error(`Falha no checkout (${res.status}) ${detail}`)
  }
  return res.json()
}
