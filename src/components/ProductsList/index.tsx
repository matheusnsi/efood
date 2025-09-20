import { Prato } from '../../models/Restaurant'
import ProductsCard from '../ProductsCard'
import { Container, List } from './styles'

type Props = {
  pratos: Prato[]
}

const ProductsList = ({ pratos }: Props) => (
  <Container>
    <List>
      {pratos.map((prato) => (
        <li key={prato.id}>
          <ProductsCard prato={prato} />
        </li>
      ))}
    </List>
  </Container>
)

export default ProductsList
