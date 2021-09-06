import React from 'react';

const StepBlock = ({ count, title, text, right, aos }) => {
  return (
    <div className={right ? 'step step__block step_right' : 'step step__block step_left'} data-aos={aos}>
      <div className="d-flex align-start">
        <span className="step__count">{count}</span>
        <div className="d-column step-description">
          <div className="d-flex">
            <h3 className="step__title">Этап</h3>
            <h3 className="step__subtitle">{title}</h3>
          </div>
          <p className="step__text section-subtitle">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default StepBlock;