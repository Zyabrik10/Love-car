import InputSublist from '../InputSubist/InputSubist';
import css from './FormLabel.module.css';

import arrowUp from 'img/svg/arrow-up.svg';
export default function FormLabel({
  isThereList = false,
  type,
  value,
  onChange,
  data_func,
  id,
  placeholder,
}) {
  return (
    <label htmlFor="carBrand" className={css['input-box']}>
      <span>Car brand</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        data-func={data_func}
        id={id}
        placeholder={placeholder}
      />
      {isThereList ? (
        <>
          <img src={arrowUp} alt="" />
          <InputSublist list={carsBrands} setValue={setCarBrand} /> */}
        </>
      ) : null}
    </label>
  );
}
