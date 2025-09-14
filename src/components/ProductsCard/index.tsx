import { useState } from 'react'

import { Card, Modal, ModalContent, Title, Description, Button } from './styles'

import { Prato } from '../../models/Restaurant'

import close from '../../assets/images/close.png'

const ProductsCard = ({ foto, nome, descricao, id, porcao, preco }: Prato) => {
  const [estaVisivel, setEstaVisivel] = useState(false)

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
  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <Title>{nome}</Title>
        <Description>{getDescription(descricao)}</Description>
        <Button onClick={() => setEstaVisivel(true)}>Mais detalhes</Button>
      </Card>
      <Modal className={estaVisivel ? 'visible' : ''}>
        <ModalContent className="containerCard">
          <img src={foto} className="foto-prato" />
          <img
            src={close}
            className="close"
            onClick={() => setEstaVisivel(false)}
          />
          <div>
            <div>
              <Title>{nome}</Title>
              <Description>
                {descricao}
                <br />
                <br />
                <br />
                {porcao !== '1 pessoa' ? <>Serve de </> : <>Serve </>} {porcao}
              </Description>
            </div>
            <Button>{'Adicionar ao carrinho - ' + formataPreco(preco)}</Button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setEstaVisivel(false)}></div>
      </Modal>
    </>
  )
}

export default ProductsCard
