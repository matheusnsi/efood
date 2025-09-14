import { Link } from 'react-router-dom'

import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Card, Description, Infos, Rating, Title } from './styles'
import { Restaurante } from '../../models/Restaurant'

type Props = Omit<Restaurante, 'cardapio'>

const Restaurant = ({
  capa,
  titulo,
  avaliacao,
  destacado,
  descricao,
  tipo,
  id
}: Props) => (
  <Card>
    <img src={capa} alt={titulo} />
    <Infos>
      {destacado && <Tag>Destacado da semana</Tag>}
      <Tag>{tipo}</Tag>
    </Infos>
    <div>
      <Title>{titulo}</Title>
      <Rating>
        <span>{avaliacao}</span>
        <img src={estrela} alt="Estrela" />
      </Rating>
    </div>
    <Description>{descricao}</Description>
    <Link to={`/restaurante/${id}`}>
      <button>Saiba mais</button>
    </Link>
  </Card>
)

export default Restaurant
