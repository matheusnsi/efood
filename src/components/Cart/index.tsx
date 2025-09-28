import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { CartContent, Overlay, Sidebar, CartItem, Prices } from './styles'
import { close as closeCart, remove } from '../../store/reducers/cart'
import { open as openCheckout } from '../../store/reducers/checkout'

import { Prato } from '../../models/Restaurant'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const close = () => {
    dispatch(closeCart())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPrice = (lista: Prato[]) => {
    return lista.reduce((acc, item) => acc + item.preco, 0)
  }

  return (
    <CartContent className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={close} />
      <Sidebar>
        {items.map((item: Prato) => (
          <CartItem key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h4>{item.nome}</h4>
              <p>{formataPreco(item.preco)}</p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="lixeira"
              type="button"
              aria-label={`Remover ${item.nome}`}
            />
          </CartItem>
        ))}

        <Prices>
          <p>Valor total</p>
          <span>{formataPreco(getTotalPrice(items))}</span>
        </Prices>

        <button
          type="button"
          onClick={() => {
            // abre o checkout no aside na etapa de entrega
            dispatch(openCheckout('delivery'))
            // fecha o carrinho para o checkout assumir a lateral
            dispatch(closeCart())
          }}
        >
          Continuar com a entrega
        </button>
      </Sidebar>
    </CartContent>
  )
}

export default Cart
