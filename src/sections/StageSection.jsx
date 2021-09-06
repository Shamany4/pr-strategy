import React from 'react';
import StepBlock from '../components/StepBlock';

const StageSection = () => {
  return (
    <section className="stage stage__section">
      <div className="container">

        <div className="stage__content">
          <div className="d-flex justify-between stage-content">
            <div className="d-flex flex-column">
              <StepBlock
                count="01"
                title="Аудит"
                text="Аудит текущего&nbsp;PR и&nbsp;SMM, 
              оценка эффективности 
              действующих инструментов, 
              предложение по&nbsp;оптимизации 
              бюджетов."
                aos="fade-right"
              />
              <StepBlock
                count="03"
                title="Действия"
                text="Тактические спринты. 
              Реализация конкретных 
              шагов по&nbsp;кварталам 
              с&nbsp;чёткими KPI."
                aos="fade-right"
              />
            </div>
            <div className="stage-progress" data-aos="fade-up">
              <div className="stage-progress__thumb"></div>
            </div>
            <div className="d-flex flex-column">
              <StepBlock
                count="02"
                title="Планирование"
                right={true}
                text="Составление коммуникационной 
              стратегии бренда, в&nbsp;том числе 
              личного. Проработка медиаплана 
              в&nbsp;PR и&nbsp;SMM: площадки, инструменты 
              рекламной кампании, бюджеты."
                aos="fade-left"
              />
              <StepBlock
                count="04"
                right={true}
                title="Совершенствование"
                text="Разработка дополнительных УТП 
              и&nbsp;месседжей для различных 
              сегментов целевой аудитории. 
              Подключение SERM: реализация 
              плана по&nbsp;защите репутации 
              в&nbsp;интернете."
                aos="fade-left"
              />
            </div>
          </div>
          <div className="d-flex flex-column m-stage-content">
            <StepBlock
              count="01"
              title="Аудит"
              text="Аудит текущего&nbsp;PR и&nbsp;SMM,
              оценка эффективности
              действующих инструментов,
              предложение по&nbsp;оптимизации
              бюджетов."
              aos="fade-right"
            />
            <StepBlock
              count="02"
              title="Планирование"
              right={true}
              text="Составление коммуникационной
              стратегии бренда, в&nbsp;том числе
              личного. Проработка медиаплана
              в&nbsp;PR и&nbsp;SMM: площадки, инструменты
              рекламной кампании, бюджеты."
              aos="fade-left"
            />
            <StepBlock
              count="03"
              title="Действия"
              text="Тактические спринты.
              Реализация конкретных
              шагов по&nbsp;кварталам
              с&nbsp;чёткими KPI."
              aos="fade-right"
            />
            <StepBlock
              count="04"
              right={true}
              title="Совершенствование"
              text="Разработка дополнительных УТП
              и&nbsp;месседжей для различных
              сегментов целевой аудитории.
              Подключение SERM: реализация
              плана по&nbsp;защите репутации
              в&nbsp;интернете."
              aos="fade-left"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default StageSection;