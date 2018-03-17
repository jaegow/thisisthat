// import styled from 'styled-components'
// import Styles from 'Styles'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'



const Layout = ({children, v, row, column, center, center_h, center_v}) => {

  console.log('Layout.render()');
  console.log('v', v);

  const classes = classNames('layout', {
    'layout--row' : row,
    'layout--column' : column,
    'layout--center' : center,
    'layout--center_h' : center_h,
    'layout--center_v' : center_v
  });

  return (
    <div className={classes}>{children}</div>
  );
}

Layout.V = 'vertical';
Layout.H = 'horizontal';
Layout.C = 'center';


export default Layout;





// const Layout = styled.div`
//   display: flex;
//   ${props => props.h_center && 'justify-content: center;'}
//   ${props => props.v_center && 'align-items: center;'}
//   ${props => props.v_bottom && 'align-items: flex-end;'}
//
//   ${props => props.alonzo && `
//     flex-direction: column;
//     align-items: center;
//     & > * {
//       flex: 1 0 0;
//     }
//   `}
//
//   ${Styles.media.max.m`
//       ${props => props.alonzo && `
//         flex-direction: row;
//       `}
//   `}
// `;