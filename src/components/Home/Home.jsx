import './Home.scss';
import heroImage from '../../assets/img/main.png';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__text">
          <h1 className="home__title">Новые поступления в этом сезоне</h1>

          <p className="home__desc">
            Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
            этом сезоне. Время исследовать.
          </p>

          <button class="home__button">
            <div class="home__button-container">
              <div class="home__button-arrow"></div>
              <span class="home__button-text">Открыть магазин</span>
            </div>
          </button>
        </div>
        <div className="home__image">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
