import FormInput from '../FormInput/FormInput';

import css from './FromToInputs.module.css';

import PropTypes from 'prop-types';

export default function FromToInputs({ fromValue, toValue }) {
  return (
    <div className={css['from-to-box']}>
      <FormInput
        label="Сar mileage / km"
        name="from"
        value={fromValue}
        classesInput={[css['from-input']]}
        isThereTextPlaceHolder={true}
        placeholder=""
        textPlaceHolder="From"
      />
      <FormInput
        label=""
        name="to"
        value={toValue}
        classesInput={[css['to-input']]}
        isThereTextPlaceHolder={true}
        placeholder=""
        textPlaceHolder="To"
      />
    </div>
  );
}

FromToInputs.propTypes = {
  fromValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  toValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
