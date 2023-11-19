import CarList from 'components/CarsList/CarsList';
import Modal from 'components/Modal/Modal';
import globalCss from 'css/global.module.css';
import { useEffect } from 'react';
import { Hourglass } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from 'redux/cars/cars-actions';
import { selectCars } from 'redux/cars/cars-selector';

export default function Favorites() {
  const dispatch = useDispatch();
  const { favorites, isLoading } = useSelector(selectCars);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <>
      <Modal />
      <section className={globalCss['section']}>
        <div className={globalCss.container}>
          {isLoading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
              />
            </div>
          ) : favorites.length === 0 ? (
            <p style={{ textAlign: 'center' }}>No cars</p>
          ) : (
            <>
              <CarList cars={favorites} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
