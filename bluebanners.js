/* Include this script after bluebanners.css. No framework is required. */
(function (global) {
  'use strict';

  /** Create one banner. Set longAward/longEvent for the smaller TBA text styles. */
  function createBlueBanner(options) {
    if (!options || typeof options.award !== 'string' || typeof options.event !== 'string') {
      throw new TypeError('A banner requires award and event strings.');
    }
    const banner = document.createElement('div');
    banner.className = 'blue-banner';

    const logo = document.createElement('img');
    logo.className = 'blue-banner__logo';
    logo.src = options.logoUrl || 'first_icon.svg';
    logo.alt = '';
    banner.appendChild(logo);

    function addText(kind, value, isLong) {
      const container = document.createElement('div');
      container.className = 'blue-banner__' + kind + (isLong ? ' blue-banner__' + kind + '--long' : '');
      const text = document.createElement('span');
      text.textContent = value;
      container.appendChild(text);
      banner.appendChild(container);
    }
    addText('award', options.award, options.longAward);
    if (options.award.trim().toLowerCase() === 'winner') {
      banner.lastChild.classList.add('blue-banner__award--winner');
    }
    if (/\bFIRST\b/i.test(options.award)) {
      banner.lastChild.classList.add('blue-banner__award--first');
    }
    const match = options.event.match(/^(\d{4})\s+([\s\S]+)$/);
    if (match) addText('year', match[1], false);
    addText('event', match ? match[2] : options.event, options.longEvent);
    return banner;
  }

  global.createBlueBanner = createBlueBanner;
})(window);
