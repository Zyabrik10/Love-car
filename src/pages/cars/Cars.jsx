import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/cars-selector';
import { addCars, getCars, getFavorites } from 'redux/cars/cars-actions';

import { useEffect, useState } from 'react';

import Filter from 'components/Filter/Filter';

import globalCss from 'css/global.module.css';
import CarsList from 'components/CarsList/CarsList';

import css from './Cars.module.css';
import Modal from 'components/Modal/Modal';

// export default function Cars() {
//   const dispatch = useDispatch();
//   const { cars, isButtonShown, favorites } = useSelector(selectCars);
//   const [page, setPage] = useState(1);

//   const buttonHandler = () => {
//     dispatch(addCars({ page: page + 1 }));
//     setPage(page + 1);
//   };

//   useEffect(() => {
//     if (cars.length === 0) {
//       dispatch(getCars());
//       dispatch(getFavorites());
//     }
//   }, [dispatch, cars.length]);

  

//   return (
//     <>
//       <Modal />
//       <section className={globalCss.section}>
//         <div className={`${globalCss.container} ${css.container}`}>
//           <Filter />
//           <CarsList cars={cars} favorites={favorites} />
//           {isButtonShown ? <button className={css["load-more"]} onClick={buttonHandler}>Load more</button> : null}
//         </div>
//       </section>
//     </>
//   );
// }
export default function Cars() {
  const dispatch = useDispatch();
  const { cars, isButtonShown, favorites } = useSelector(selectCars);
  const [page, setPage] = useState(1);

  const buttonHandler = () => {
    dispatch(addCars({ page: page + 1 }));
    setPage(page + 1);
  };

  useEffect(() => {
    console.log("jj");
      dispatch(getCars());
      dispatch(getFavorites());
  }, [dispatch]);

  

  return (
    <>
      <Modal />
      <section className={globalCss.section}>
        <div className={`${globalCss.container} ${css.container}`}>
          {/* <Filter /> */}
          <CarsList cars={cars} favorites={favorites} />
          {isButtonShown ? <button className={css["load-more"]} onClick={buttonHandler}>Load more</button> : null}
        </div>
      </section>
    </>
  );
}
