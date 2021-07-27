import './style.sass';

import whiteArrowIcon from './assets/icons/whiteArrow.svg'

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <section className="home">
          <h1 className="section-title home__title">Получите работающую PR-стратегию</h1>
          <div className="d-flex fkex-column align-start">
            <div className="blockquote d-flex flex-column">
              <div className="d-flex align-center">
                <div className="arrow-circle">
                  <img src={whiteArrowIcon} alt="White arrow icon" />
                </div>
                <div className="circles circles__block">
                  <div className="circles__item"></div>
                  <div className="circles__item"></div>
                  <div className="circles__item"></div>
                </div>
              </div>
              <p className="section-subtitle blockquote__text">Нужны&nbsp;ли ещё классические СМИ?
                Что делать, если вовремя не&nbsp;вышли
                в&nbsp;ТикТок, приняв его за&nbsp;&laquo;детскую
                соцсеть&raquo;? Как можно было
                воспользоваться КлабХаусом,
                который появился, хайпанул&nbsp;и... умер?</p>
            </div>
            <div className="dividends dividends__content">
              <div className="dividends-block">
                <p className="section-subtitle dividends__text">...извлекайте
                  дивиденды
                  от&nbsp;узнаваемости
                  компании...</p>
              </div>
              <a href="#" className="button dividends__link">уже сейчас</a>
            </div>
          </div>
        </section>
      </div>
      <section className="experience experience__section">
        <div className="experience_rectangle"></div>
        <div className="container experience__content">
          <h2 className="section-title experience__title">По нашему опыту,</h2>
          <div className="d-flex">
            <p className="section-subtitle experience__text">По нашему опыту, компании теряют от восьми месяцев и миллиона рублей прежде, чем найдут правильный путь в пиаре и коммуникациях. <br /> И это без учёта «чёрных лебедей»!</p>
            <div className="experience-card">
              <p className="section-subtitle experience-card__text">Хорошая новость в том, <br /> что и общий вектор, <br /> и понятный алгоритм <br /> действий, и даже <br /> антикризисный менеджмент <br /> можно проработать заранее!</p>
              <h3 className="experience-card__title">Что мы вместе <br /> с вами создадим?</h3>
              <div className="experience-warning">
                <span>!</span>
              </div>
              <div className="arrow-circle experience-card_circle">
                <img src={whiteArrowIcon} alt="White arrow icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
