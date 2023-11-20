import { useEffect, useState } from 'react';
import FormInput  from '../FormInput/FormInput';

import css from './CarsPricesInput.module.css';

import PropTypes from 'prop-types';

export default function CarsPricesInput({ value }) {
  const [carsPrices, setCarsPrices] = useState([]);

  useEffect(() => {
    const prices = [];

    for (let i = 10; i <= 1000; i += 10){
      prices.push(i);
    }

    setCarsPrices(prices);
  }, []);

  return (
    <FormInput
      label="Price/ 1 hour"
      name="price"
      value={value}
      isThereTextPlaceHolder={true}
      textPlaceHolder={"To"}
      classesInput={[css['car-price-input']]}
      placeholder="$"
      isThereSublist={true}
      list={carsPrices}
    />
  );
}

CarsPricesInput.propTypes = {
  value: PropTypes.string,
};
