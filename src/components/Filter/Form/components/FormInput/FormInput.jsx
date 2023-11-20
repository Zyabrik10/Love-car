import css from './FormInput.module.css';

import arrowUp from 'img/svg/arrow-up.svg';
import InputSublist from '../InputSublist/InputSubist';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filters-reducer';

import PropTypes from 'prop-types';

export default function FormInput ({
  label,
  value,
  placeholder,
  name,
  classesBox = [],
  classesInput = [],
  autocomplete = 'off',
  isThereSublist = false,
  list = [],
  isThereTextPlaceHolder = false,
  textPlaceHolder = '',
}) {
  const dispatch = useDispatch();

  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);

  const openSubMenu = () => {
    setIsSubmenuOpened(true);
    window.addEventListener('mousedown', closeOnWhiteSpace);
  };

  const closeSubMenu = () => {
    setIsSubmenuOpened(false);
    window.removeEventListener('mousedown', closeOnWhiteSpace);
  };

  const closeOnWhiteSpace = ({ target }) => {
    if (
      target.className.length !== 0 &&
      target.className[0].split(/_+/).join('') !== 'sub-list-box'
    ) {
      setIsSubmenuOpened(false);
      window.removeEventListener('mousedown', closeOnWhiteSpace);
    }
  };

  function inputHandler({ target }) {
    const name = target.getAttribute('name');
    const value = target.value;

    dispatch(setFilter({ name, value }));
  }

  return (
    <label
      htmlFor={name}
      className={`${css['input-box']} ${classesBox.join(' ')} ${
        isThereSublist ? css['thereIsSubList'] : ''
      } ${isThereTextPlaceHolder ? css['thereIsTextPlaceholder'] : ''}`}
    >
      <span className={css['label']}>{label}</span>
      {isThereTextPlaceHolder ? (
        <span className={css['text-placeholder']}>{textPlaceHolder}</span>
      ) : null}
      <input
        type="text"
        value={value}
        onChange={inputHandler}
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={autocomplete}
        onFocus={openSubMenu}
        className={`${classesInput.join(' ')}`}
      />

      {isThereSublist ? (
        <>
          <img
            src={arrowUp}
            alt=""
            className={`${css['arrow']} ${
              isSubmenuOpened ? css['active'] : ''
            }`}
          />
          <InputSublist
            list={list}
            isSubmenuOpened={isSubmenuOpened}
            closeSubMenu={closeSubMenu}
            name={name}
          />
        </>
      ) : null}
    </label>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  classesBox: PropTypes.array,
  classesInput: PropTypes.array,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.bool,
  list: PropTypes.array,
  isThereSublist: PropTypes.bool,
  isThereTextPlaceHolder: PropTypes.bool,
  textPlaceHolder: PropTypes.string,
};
