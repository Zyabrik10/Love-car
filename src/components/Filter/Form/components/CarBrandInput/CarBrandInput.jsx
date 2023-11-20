import { useState } from 'react';
import FormInput from '../FormInput/FormInput';

import css from './CarBrandInput.module.css';

import PropTypes from 'prop-types';

export default function CarBrandInput({ value }) {
  const [carsBrands] = useState([
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ]);

  return (
    <FormInput
      label="Car brand"
      name="carBrand"
      value={value}
      classesBox={[css['car-brand-input']]}
      placeholder="Enter the text"
      isThereSublist={true}
      list={carsBrands}
    />
  );
}

CarBrandInput.propTypes = {
  value: PropTypes.string,
};
