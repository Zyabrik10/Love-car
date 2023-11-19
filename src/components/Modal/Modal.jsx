import { useDispatch, useSelector } from 'react-redux';
import css from './Modal.module.css';
import { selectModal } from 'redux/modal/modal-selector';
import { nanoid } from 'nanoid';
import { useCallback, useEffect, useState } from 'react';
import { closeModal } from 'redux/modal/modal-reducer';

export default function Modal() {
  const dispatch = useDispatch();

  const { car, isOpened } = useSelector(selectModal);
  const [addr, setAddr] = useState([]);
  const [rnCon, setRnCon] = useState([]);

  const {
    img,
    description,
    model,
    year,
    rentalPrice,
    id,
    address,
    type,
    mileage,
    functionalities,
    fuelConsumption,
    engineSize,
    make,
    accessories,
    rentalConditions,
  } = car;


  const closeOnKeyClick = useCallback(({ key }) => {
    console.log('hell');
    if (key === 'Escape') {
      dispatch(closeModal());
      window.removeEventListener('keydown', closeOnKeyClick);
    }
  }, [dispatch]);

  const closeOnButtonClick = () => {
    dispatch(closeModal());
    window.removeEventListener('keydown', closeOnKeyClick);
  };

  const closeOnBackgroundClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      dispatch(closeModal());
      window.removeEventListener('keydown', closeOnKeyClick);
    }
  };

  useEffect(() => {
    if (isOpened) {
      setAddr(address.split(', '));
      setRnCon(rentalConditions.split('\n'));
      window.addEventListener('keydown', closeOnKeyClick);
    }
  }, [isOpened, address, rentalConditions, closeOnKeyClick]);


  return (
    <div
      className={`${css['modal-wrapper']} ${isOpened ? css['active'] : ''}`}
      onClick={closeOnBackgroundClick}
    >
      <div className={css['modal']}>
        <div onClick={closeOnButtonClick} className={css['close-button']}></div>
        <div className={css['img-box']}>
          <img src={img} alt="" />
        </div>
        <p className={css['car-title']}>
          {make} <span>{model}</span>, {year}
        </p>
        <div className={css['car-info-box']}>
          <p className={css['car-info']}>
            {`${addr[1]}`}
            <span className={css['delimeter']}>|</span>
            {`${addr[2]}`}
            <span className={css['delimeter']}>|</span>
            Id: {`${id}`}
            <span className={css['delimeter']}>|</span>
            Year: {`${year}`}
            <span className={css['delimeter']}>|</span>
            Type: {`${type}`}
          </p>
          <p className={css['car-info']}>
            Fuel Consumption: {`${fuelConsumption}`}
            <span className={css['delimeter']}> | </span>
            Engine Size: {`${engineSize}`}
          </p>
        </div>
        <p className={css['car-description']}>{description}</p>
        <p className={css['modal-sec-title']}>
          Accessories and functionalities:
        </p>
        <div className={css['modal-acc-func']}>
          <p className={css['car-info']}>
            {accessories?.map((e, index) => {
              if (index + 1 >= accessories.length) return e;
              return (
                <span key={nanoid()}>
                  {e}
                  <span>|</span>
                </span>
              );
            })}
          </p>
          <p className={css['car-info']}>
            {functionalities?.map((e, index) => {
              if (index + 1 >= functionalities.length) return e;
              return e + ' | ';
            })}
          </p>
        </div>

        <p className={css['modal-sec-title']}>Rental Conditions: </p>
        <div className={css['rental-cond-box']}>
          {rnCon.map(e => {
            const cond = e.split(/:\s+/);
            return (
              <p key={nanoid()}>
                {cond[0]}
                {cond.length === 2 ? (
                  <>
                    : <span>{cond[1]}</span>
                  </>
                ) : null}
              </p>
            );
          })}
          <p>
            Mileage: <span>{mileage}</span>{' '}
          </p>
          <p>
            Price: <span>{rentalPrice}</span>{' '}
          </p>
        </div>
        <a href="tel:+380730000000" className={css['modal-rent-button']}>
          Rental car
        </a>
      </div>
    </div>
  );
}
