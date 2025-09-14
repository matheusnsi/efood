import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  max-width: 472px;
  background-color: ${cores.branca};
  border: 1px solid ${cores.rosa};
  overflow: hidden;
  position: relative;

  > img {
    width: 100%;
    display: block;
    height: 217px;
    object-fit: cover;
  }

  button {
    padding: 6px 4px;
    background-color: ${cores.rosa};
    color: ${cores.rosaClaro};
    font-weight: bold;
    border: none;
    cursor: pointer;
    margin-top: 16px;
    margin-bottom: 8px;
    margin-left: 8px;
  }

  div {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    align-items: center;
    text-align: center;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  margin-left: 8px;
  margin-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  display: block;
  margin-top: 16px;
  margin-left: 8px;
`

export const Rating = styled.div`
  text-align: center;
  margin-right: 8px;
  font-size: 18px;

  span {
    margin-right: 8px;
  }
`

export const Infos = styled.div`
  ${TagContainer} {
    margin-right: 8px;
  }

  position: absolute;
  top: 16px;
  right: 16px;
`
