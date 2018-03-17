// import styled from 'styled-components'
// import Styles from 'Styles'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Utils from 'Utils'



const LO = ({children, v, h, align, xxs, xs, s, m, l, xl, xxl}) => {

  // normalize values to always be arrays
  // const _v = Utils.arrayify(v);
  // const _h = Utils.arrayify(h);
  const _align = Utils.arrayify(align);

  let align_classes;
  if (_align.length) {
    const is_align_vertical = Utils.arrayHasItem(_align, LO.V);
    const is_align_horizontal = Utils.arrayHasItem(_align, LO.H);
    if (is_align_vertical && is_align_horizontal) console.warn('WARNING: LO should not have both LO.V & LO.H passed to the align prop');

    align_classes = _align.map(align_item => {



      return `lo--a--${align_item}`;
    }).join(' ');
    console.log('align_classes', align_classes);
  }



  const classes = classNames('lo', {
    'lo--h' : h,
    'lo--v' : v,
    // 'layout--center' : center,
    // 'layout--center_h' : center_h,
    // 'layout--center_v' : center_v
  }, align_classes);

  return (
    <div className={classes}>{children}</div>
  );
}

LO.V = 'v'; // vertical
LO.H = 'h'; // horizontal
LO.C = 'c'; // center
LO.A = 'a'; // align
LO.T = 't'; // top
LO.B = 'b'; // bottom
LO.L = 'l'; // left
LO.R = 'r'; // right

export default LO;
