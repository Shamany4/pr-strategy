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
    </div>
  );
}

export default App;
