import styled from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 419px;
  height: 56px;
  border-top: 1px solid #ddd;
`
export const StyledLink = styled(Link)`
  flex: 1;
  text-align: center;
`
