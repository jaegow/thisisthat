import React from 'react'
import styled from 'styled-components';
import Styles from 'Styles'

const Page = ({className, name, children}) => {
  return (<div className={`${className} page--${name}`}>{children}</div>);
}

const StyledPage = styled(Page)`
  margin: ${Styles.spacing.s};
  
  ${Styles.media.max.m`margin: ${Styles.spacing.xl};`}
  
`;

export default StyledPage;