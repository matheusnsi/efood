import { Restaurante } from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'

type Props = {
  restaurants: Restaurante[]
}

export const RestaurantsList = ({ restaurants }: Props) => {
  return (
    <Container>
      <List>
        {restaurants.map((restaurants) => (
          <li key={restaurants.id}>
            <RestaurantCard
              capa={restaurants.capa}
              titulo={restaurants.titulo}
              avaliacao={restaurants.avaliacao}
              descricao={restaurants.descricao}
              tipo={restaurants.tipo}
              destacado={restaurants.destacado}
              id={restaurants.id}
            />
          </li>
        ))}
      </List>
    </Container>
  )
}

export default RestaurantsList
