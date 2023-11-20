import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './InputSublist.module.css';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filters-reducer';

export default function InputSublist({ list, isSubmenuOpened, name }) {
  const dispatch = useDispatch();

  const setText = ({ target }) => {
    if (target.tagName === "LI") {
      dispatch(setFilter({ name, value: target.innerText }));
    }
  };

  return (
    <div className={`${css['sub-list-box']} ${isSubmenuOpened ? css["active"] : ""}`}>
      <ul onClick={setText} className={css['sub-list']}>
        {list.map(e => {
          return (
            <li key={nanoid()}>
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

InputSublist.propTypes = {
  list: PropTypes.array,
  isSubmenuOpened: PropTypes.bool,
  name: PropTypes.string,
};
