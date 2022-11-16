export default function destructuring(obj) {
  const temp = [];
  obj.special.forEach((item, idx) => temp.push({ ...obj.special[idx] }));
  temp.forEach((item) => {
    // eslint-disable-next-line no-prototype-builtins
    if (item.hasOwnProperty('description') === false) {
      // eslint-disable-next-line no-param-reassign
      item.description = 'Описание недоступно';
    }
  });
  return temp;
}
