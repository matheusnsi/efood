import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 320px;
  background-color: ${cores.rosa};
  padding: 8px;
  color: ${cores.rosaClaro};
  border-radius: 8px;

  > img {
    width: 100%;
    display: block;
    height: 217px;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900px;
  margin-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
  line-height: 22px;
`

export const Button = styled.button`
  width: 304px;
  padding: 4px;
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  border: none;
  cursor: pointer;
  font-weight: 700;
  margin-top: 8px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  content: '';
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  background-color: ${cores.rosa};
  padding: 32px;
  display: flex;
  gap: 24px;
  z-index: 1;
  color: ${cores.creme};
  position: relative;

  .containerCard {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 280px;
  }

  .foto-prato {
    display: block;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  h4 {
    font-weight: 900;
    font-size: 18px;
  }

  p {
    margin: 16px 0;
    font-size: 14px;
  }

  ${Button} {
    display: flex;
    justify-content: start;
    max-width: 212px;
    padding-left: 8px;
    padding-right: 8px;
  }
`
