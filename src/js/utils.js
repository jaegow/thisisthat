import LO from './components/LO'

const arrayify = (object) => {
  if (object === undefined) return [];
  if (typeof object === "string") return object.split(',');
  return Array.isArray(object) ? object : [object];
}

const arrayHasItem = (array, item) => {
  if (array === undefined) return false;
  return array.find((array_item) => array_item === item) !== undefined;
}

export default {
  arrayify,
  arrayHasItem
};