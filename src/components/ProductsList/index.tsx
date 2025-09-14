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
          <ProductsCard
            foto={prato.foto}
            nome={prato.nome}
            descricao={prato.descricao}
            id={prato.id}
            preco={prato.preco}
            porcao={prato.porcao}
          />
        </li>
      ))}
    </List>
  </Container>
)

export default ProductsList
