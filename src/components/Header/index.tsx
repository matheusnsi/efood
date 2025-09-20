import { Link } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderContainer>
      <div>
        <h3 id="rest">
          <Link to="/">Restaurantes</Link>
        </h3>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <h3 onClick={openCart} id="carrinho">
          {items.length} produto(s) no carrinho
        </h3>
      </div>
    </HeaderContainer>
  )
}

export default Header
