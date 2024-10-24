let canScroll = false;

anime({
    targets: 'h1, h2',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: function(el, i) {
        return 2500 + anime.stagger(200); // 1000ms initial delay, then 200ms stagger delay
      }
});
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        anime({
            targets: button,
            scale: 1.2,
            duration: 500,
            easing: 'easeInOutQuad'
        });
    });

    button.addEventListener('mouseleave', () => {
        anime({
            targets: button,
            scale: 1,
            duration: 500,
            easing: 'easeInOutQuad'
        });
    });
});
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#4CAF50"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5
        },
        "size": {
            "value": 5
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "out_mode": "bounce"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            }
        }
    }
});
anime({
    targets: 'section',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: function(el, i) {
        return 2500 + anime.stagger(200); // 1000ms initial delay, then 200ms stagger delay
      },
    easing: 'easeOutQuad'
});
anime({
  targets: '.now',
    opacity: [1, 1],
  duration: 1200, 
  easing: 'easeInOutQuad',
  complete: function() {
    const nowElement = document.querySelector('.now');
    nowElement.classList.add('hidden');
      const notyetElement = document.querySelector('.notyet');
      notyetElement.classList.remove('hidden');
  }
});

setTimeout(function() {
    const nowElement = document.querySelector('.now');
    const notyetElement = document.querySelector('.notyet');
    const top = document.getElementById('top');
    const bottom = document.getElementById('bottom');

    document.body.style.overflow = 'auto';
    nowElement.classList.add('hidden');
    notyetElement.classList.add('hidden');
    top.classList.add('hidden');
    bottom.classList.add('hidden');
    canScroll = true;
}, 3300);
document.querySelectorAll('a').forEach(link => {
  link.setAttribute('target', '_blank');
});
    
function preventScroll() {
    if (canScroll) {
        clearInterval(interval);
    }
  window.scrollTo(0, 0);
  window.addEventListener('scroll', function(e) {
    e.preventDefault(); 
  }, { passive: false });
};

let interval = setInterval(preventScroll, 1);

const balls = [];
for (let q = 0; q < document.querySelectorAll('section').length; q++) {
    const colors = ["#47753f", "#8feb34", "#34eb5e", "#2a4f2a", "#75ba75"];

    const numBalls = 75;
    

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      document.querySelectorAll('section')[q].append(ball);
    }

    // Keyframes
    

}

balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 25
      };
        let anim = el.animate(
            [
              { transform: "translate(0, 0)" },
              { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
              duration: (Math.random() + 1) * 2000, // random duration
              direction: "alternate",
              fill: "both",
              iterations: Infinity,
              easing: "ease-in-out"
            }
          );
        });
