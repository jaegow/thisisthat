import {css} from 'styled-components'

// const sizing_name_modifiers = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
// const iterateSizingNames = (iterationFunction) => sizing_name_modifiers.forEach((name, index) => iterationFunction(name, index));
// const spacing_sizes = [2, 4, 10, 20, 30, 40, 50];

const spacing_sizes = {
  xxs: 2,
  xs: 4,
  s: 10,
  m: 20,
  l: 30,
  xl: 50,
  xxl: 100
};

const screen_sizes = {
  xxl: 1370,
  xl: 1170,
  l: 992,
  m: 768,
  s: 500,
  xs: 376,
  xxs: 333
};

// Iterate through the screen_sizes and create a media template
const media_min = Object.keys(screen_sizes).reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (...args) => css`
    @media (min-width: ${screen_sizes[currentValue]}px) {
      ${css(...args)}
    }
  `
  return accumulator;
}, {});

const media_max = Object.keys(screen_sizes).reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (...args) => css`
    @media (max-width: ${screen_sizes[currentValue]}px) {
      ${css(...args)}
    }
  `
  return accumulator;
}, {});

// Iterate through the spacing_sizes and create css friendly sizes
const spacing = Object.keys(spacing_sizes).reduce((accumulator, currentValue) => {
  accumulator[currentValue] = `${spacing_sizes[currentValue]}px`;
  return accumulator;
}, {});

export default {
  media: {
    min: media_min,
    max: media_max
  },
  spacing,
  utils: {}
};