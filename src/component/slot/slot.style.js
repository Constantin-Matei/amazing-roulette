import styled from 'styled-components'

export const StyledSlot = styled.div`
  height: 175px;
  /* width: 55px; */
  position: relative;
  display: inline-block;
  margin-left: 165px;

  &::after {
    content: '1';
    position: relative;
  }

  &::before {
    content: '';
    border-top: 175px solid red;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    top: 0;
  }
`
