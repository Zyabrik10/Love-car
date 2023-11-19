import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function InputSublist({ list, setValue }) {
  const setText = ({target}) => {
    setValue(target.innerText);
  };
  return (
    <ul>
      {list?.map(e => {
        return (
          <li onClick={setText} key={nanoid()}>
            {e}
          </li>
        );
      })}
    </ul>
  );
}

InputSublist.propType = {
  list: PropTypes.array,
};
