import { useState } from 'react'
import { Card, Modal, ModalContent, Title, Description, Button } from './styles'
import { Prato } from '../../models/Restaurant'
import close from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  prato: Prato
}

const ProductsCard = ({ prato }: Props) => {
  const dispatch = useDispatch()
  const [estaVisivel, setEstaVisivel] = useState(false)

  const addToCart = (prato: Prato) => {
    dispatch(add(prato))
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 190) {
      return descricao.slice(0, 160) + '...'
    }
    return descricao
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <Card>
        <img src={prato.foto} alt={prato.nome} />
        <Title>{prato.nome}</Title>
        <Description>{getDescription(prato.descricao)}</Description>
        <Button onClick={() => setEstaVisivel(true)}>Mais detalhes</Button>
      </Card>
      <Modal className={estaVisivel ? 'visible' : ''}>
        <ModalContent className="containerCard">
          <img src={prato.foto} className="foto-prato" />
          <img
            src={close}
            className="close"
            onClick={() => setEstaVisivel(false)}
          />
          <div>
            <div>
              <Title>{prato.nome}</Title>
              <Description>
                {prato.descricao}
                <br />
                <br />
                <br />
                {prato.porcao !== '1 pessoa' ? (
                  <>Serve de </>
                ) : (
                  <>Serve </>
                )}{' '}
                {prato.porcao}
              </Description>
            </div>
            <Button
              onClick={() => {
                addToCart(prato)
                setEstaVisivel(false)
                openCart()
              }}
            >
              {'Adicionar ao carrinho - ' + formataPreco(prato.preco)}
            </Button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setEstaVisivel(false)}></div>
      </Modal>
    </>
  )
}

export default ProductsCard
