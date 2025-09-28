import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px 16px;
`

export const Panel = styled.form`
  width: 360px;
  max-width: 100%;
  background: #ffebd9;
  border: 1px solid #e66767;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    font-size: 18px;
    margin: 0 0 8px;
  }
  label {
    font-size: 12px;
    display: block;
  }
  input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #e66767;
    background: #fff8f2;
    border-radius: 4px;
  }
  small.error {
    color: #b00020;
  }
  .actions {
    display: flex;
    gap: 8px;
  }
  button {
    background: #e66767;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 10px 12px;
    font-weight: 700;
    cursor: pointer;
    &.secondary {
      background: #fff;
      color: #e66767;
      border: 1px solid #e66767;
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`
