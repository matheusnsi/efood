import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurante } from '../../models/Restaurant'

import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import HeroRestaurant from '../../components/HeroRestaurant'

const Perfil = () => {
  const [restaurante, setRestaurante] = useState<Restaurante>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <HeroRestaurant
        imagem={restaurante.capa}
        titulo={restaurante.titulo}
        tipo={restaurante.tipo}
      />
      <ProductsList pratos={restaurante.cardapio} />
    </>
  )
}

export default Perfil
