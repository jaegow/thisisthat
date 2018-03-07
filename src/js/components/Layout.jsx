import styled from 'styled-components'
import Styles from 'Styles'

const Layout = styled.div`
  display: flex;
  ${props => props.h_center && 'justify-content: center;'}
  ${props => props.v_center && 'align-items: center;'}
  ${props => props.v_bottom && 'align-items: flex-end;'}
 
  ${props => props.alonzo && `
    flex-direction: column;
    align-items: center;
    & > * {
      flex: 1 0 0;
    }
  `}
 
  ${Styles.media.max.m`
      ${props => props.alonzo && `
        flex-direction: row;
      `}
  `}
`;


export default Layout;