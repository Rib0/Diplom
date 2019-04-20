
export default class Scroll {
  constructor (selector) {
    const trigger = document.querySelector(selector);    
    trigger.onclick = this.scroll;
  }

  scroll = e => {
    const { target } = e.target.dataset;
    const animId = requestAnimationFrame(function move () {
      const coords = target.getBoundingClientRect().top;
      if (coords === 0) cancelAnimationFrame(animId);
      scrollBy(0, coords / 8);
      requestAnimationFrame(move);
    })
  }
}

window.onload = () => new Scroll('#scroll-button');