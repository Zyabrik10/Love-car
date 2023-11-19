import FavoritesList from 'components/FavoritesList/FavoritesList';
import Modal from 'components/Modal/Modal';
import globalCss from 'css/global.module.css';

export default function Favorites() {
  return (
    <>
      <Modal />
      <section className={globalCss['section']}>
        <div className={globalCss.container}>
          <FavoritesList />
        </div>
      </section>
    </>
  );
}
