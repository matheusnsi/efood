import React, { createContext, useContext, useState } from 'react'
import type {
  CardData,
  CheckoutResponse,
  DeliveryData
} from '../services/checkout'
import type { Prato } from '../models/Restaurant'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

type Ctx = {
  cart: Prato[]
  delivery?: DeliveryData
  setDelivery: (d: DeliveryData) => void
  card?: CardData
  setCard: (c: CardData) => void
  order?: CheckoutResponse
  setOrder: (o: CheckoutResponse) => void
}

const CheckoutContext = createContext<Ctx | null>(null)

export const CheckoutProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const cart = useSelector((state: RootReducer) => state.cart.items)
  const [delivery, setDeliveryState] = useState<DeliveryData | undefined>()
  const [card, setCard] = useState<CardData | undefined>()
  const [order, setOrder] = useState<CheckoutResponse | undefined>()
  const setDelivery = (d: DeliveryData) => setDeliveryState(d)

  return (
    <CheckoutContext.Provider
      value={{ cart, delivery, setDelivery, card, setCard, order, setOrder }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckout = () => {
  const ctx = useContext(CheckoutContext)
  if (!ctx)
    throw new Error('useCheckout deve estar dentro de <CheckoutProvider>')
  return ctx
}
