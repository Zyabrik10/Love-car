const filterLocalStorage = JSON.parse(localStorage.getItem('filters'));

export const filtersInitialValue = filterLocalStorage || {
  carBrand: undefined,
  price: undefined,
  from: undefined,
  to: undefined,
};
