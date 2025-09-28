import styled from 'styled-components'
import { cores } from '../../styles'

export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1000;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 10;
`

export const Sidebar = styled.aside`
  position: relative;
  z-index: 20;
  background-color: ${cores.rosa};
  padding: 32px 8px 16px;
  max-width: 360px;
  width: 100%;

  button {
    background-color: ${cores.rosaClaro};
    color: ${cores.rosa};
    font-size: 14px;
    font-weight: bold;
    padding: 6px 4px;
    cursor: pointer;
    display: inline-block;
    width: 100%;
    text-align: center;
    border: none;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  input {
    outline: none;
  }
`

export const Title = styled.h3`
  color: ${cores.rosaClaro};
  margin: 0 0 8px;
  font-weight: 900;
`

export const Label = styled.label`
  display: block;
  color: ${cores.rosaClaro};
  font-size: 12px;
  margin: 8px 0 4px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${cores.rosa};
  background: #fff8f2;
  border-radius: 4px;
  color: ${cores.rosa};
`

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`

export const ErrorText = styled.p`
  color: #b00020;
  font-size: 12px;
  margin-top: 8px;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`
