import { HeroContainer } from './styles'

type Props = {
  imagem: string
  tipo: string
  titulo: string
}

const HeroRestaurant = ({ imagem, tipo, titulo }: Props) => (
  <HeroContainer style={{ backgroundImage: `url(${imagem})` }}>
    <div className="container">
      <p>{tipo}</p>
      <h1>{titulo}</h1>
    </div>
  </HeroContainer>
)

export default HeroRestaurant
