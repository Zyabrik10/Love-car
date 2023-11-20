const filterLocalStorage = JSON.parse(localStorage.getItem('filters'));

export const filtersInitialValue = filterLocalStorage || {
  carBrand: '',
  price: 0,
  from: 0,
  to: 0,
};
