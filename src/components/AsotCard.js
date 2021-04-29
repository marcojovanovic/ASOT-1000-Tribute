import React from 'react';
import { FiPlay } from 'react-icons/fi';
function AsotCard() {
  return (
    <div className="asot__trance--card">
      <div className="asot__trance--card__header"></div>
      <div className="asot__trance--card__body">
        <div className="asot-top1000">
          <a href="https://www.youtube.com/watch?v=P6l5Y5BgEns&t=111s">
            ASOT TOP 1000{' '}
          </a>
        </div>
        <div className="asot__trance--card__item">
          <div>
            <h2 className="asot__trance--card__subtitle">Utreht</h2>
            <h5 className="asot__trance--card__country">Holandija</h5>
          </div>
          <h5> 3 & 4 septembar</h5>
          <a href="https://festival.astateoftrance.com/">
            {<FiPlay className="asot__trance-card__icon" />}
          </a>
        </div>
        <div className="asot__trance--card__item">
          <div>
            <h2 className="asot__trance--card__subtitle">Krakow</h2>
            <h5 className="asot__trance--card__country">Poljska</h5>
          </div>
          <h5> Oktobar 2021</h5>
          <a href="https://festival.astateoftrance.com/">
            {<FiPlay className="asot__trance-card__icon" />}
          </a>
        </div>
        <div className="asot__trance--card__item">
          <div>
            <h2 className="asot__trance--card__subtitle">Moskva</h2>
            <h5 className="asot__trance--card__country">Rusija</h5>
          </div>
          <h5>Oktobar 2021</h5>
          <a href="https://festival.astateoftrance.com/">
            {<FiPlay className="asot__trance-card__icon" />}
          </a>
        </div>
      </div>
    </div>
  );
}

export default AsotCard;
