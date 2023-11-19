import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterCars } from 'redux/cars/cars-actions';

import css from './Form.module.css';


export default function Form() {
  const [carBrand, setCarBrand] = useState('');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(Infinity);
  const [price, setPrice] = useState(Infinity);
  // const [carsBrands] = useState([
  //   'Buick',
  //   'Volvo',
  //   'HUMMER',
  //   'Subaru',
  //   'Mitsubishi',
  //   'Nissan',
  //   'Lincoln',
  //   'GMC',
  //   'Hyundai',
  //   'MINI',
  //   'Bentley',
  //   'Mercedes-Benz',
  //   'Aston Martin',
  //   'Pontiac',
  //   'Lamborghini',
  //   'Audi',
  //   'BMW',
  //   'Chevrolet',
  //   'Mercedes-Benz',
  //   'Chrysler',
  //   'Kia',
  //   'Land',
  // ]);

  const dispatch = useDispatch();

  function buttonHandler(e) {
    e.preventDefault();

    const filterObject = {
      model: carBrand,
      price,
      from,
      to,
    };

    dispatch(filterCars(filterObject));
  }

  function inputHandler({ target }) {
    const func = target.getAttribute('data-func');
    const value = target.value;

    switch (func) {
      case 'setCarBrand':
        setCarBrand(value);
        break;
      case 'setPrice':
        setPrice(value);
        break;
      case 'setFrom':
        setFrom(value);
        break;
      case 'setTo':
        setTo(value);
        break;
      default:
    }
  }
  return (
    <form className={css['form']}>
      <label htmlFor="carBrand" className={css['input-box']}>
        <span>Car brand</span>
        <input
          type="text"
          value={carBrand}
          onChange={inputHandler}
          data-func="setCarBrand"
          id="carBrand"
          placeholder="Enter the text"
        />
{/* 
        <img src={arrowUp} alt="" />
        <InputSublist list={carsBrands} setValue={setCarBrand} /> */}
      </label>
      <label htmlFor="price" className={css['input-box']}>
        <span>Price</span>
        <input
          type="number"
          value={price}
          onChange={inputHandler}
          data-func="setPrice"
          id="price"
        />
      </label>
      <label htmlFor="from" className={css['input-box']}>
        <span>From</span>
        <input
          type="number"
          value={from}
          onChange={inputHandler}
          data-func="setFrom"
          id="from"
        />
      </label>
      <label htmlFor="to" className={css['input-box']}>
        <span>To</span>
        <input
          type="number"
          value={to}
          onChange={inputHandler}
          data-func="setTo"
          id="to"
        />
      </label>

      <button type="submit" onClick={buttonHandler}>
        search
      </button>
    </form>
  );
}
