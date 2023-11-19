import { useState } from 'react';
import { FormInput } from '../FormInput/FormInput';

import css from './CarsPricesInput.module.css';

export default function CarsPricesInput({ value }) {
  const [carsPrices] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

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
