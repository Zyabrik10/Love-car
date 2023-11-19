const filterLocalStorage = JSON.parse(localStorage.getItem('filters'));

export const filtersInitialValue = filterLocalStorage || {
  carBrand: '',
  price: '',
  from: '',
  to: '',
};
