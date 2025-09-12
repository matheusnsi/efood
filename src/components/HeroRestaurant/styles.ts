import styled from 'styled-components'

import backgroundPattern from '../../assets/images/backgroundLaDolce.png'
import { cores } from '../../styles'

export const HeroContainer = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundPattern}) no-repeat center center;
  background-size: cover;
  display: flex;
  color: ${cores.branca};
  justify-content: center;

  div {
    max-width: 1024px;
    width: 100%;
    font-size: 32px;
  }

  p {
    font-weight: 100;
    margin-top: 24px;
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    margin-top: 156px;
    margin-bottom: 32px;
  }
`
