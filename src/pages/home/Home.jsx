import globalCss from 'css/global.module.css';
import css from './Home.module.css';

export default function Home() {
  return (
    <section className={globalCss.section}>
      <div className={`${globalCss.container} ${css["hero"]}`}>
        <h1 className={css["hero-title"]}>Home</h1>
        <p className={css["hero-description"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro aperiam explicabo fugit similique magni sint, modi suscipit placeat sit voluptate mollitia dolor possimus corporis quibusdam, quaerat nulla sunt nostrum!</p>
      </div>
    </section>
  );
}
