document.querySelectorAll('a').forEach(link => {
  link.setAttribute('target', '_blank');
});


anime({
    targets: 'h1, h2',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: anime.stagger(200)  // Delays each text element
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
    delay: anime.stagger(200),
    easing: 'easeOutQuad'
});
