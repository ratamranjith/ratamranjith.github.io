const newLocal = particlesJS("particles-js", {
   particles: {
      number: { value: 500, density: { enable: true, value_area: 1200 } },
      color: { value: "#ffffff" },
      shape: {
         type: "triangle",
         stroke: { width: 0, color: "#000000" },
         polygon: { nb_sides: 12 },
         // image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
         value: 0.5,
         random: true,
         anim: { enable: false, speed: 1, opacity_min: 0.9, sync: true },
      },
      size: {
         value: 2,
         random: true,
         anim: { enable: false, speed: 120, size_min: 0.1, sync: true },
      },
      line_linked: {
         enable: false,
         distance: 500,
         color: "#ffffff",
         opacity: 0.4,
         width: 1,
      },
      move: {
         enable: true,
         speed: 2,
         direction: "alternate",
         random: true,
         straight: false,
         out_mode: "out",
         bounce: true,
         attract: { enable: false, rotateX: 600, rotateY: 100 },
      },
   },
   interactivity: {
      detect_on: "canvas",
      events: {
         onhover: { enable: true, mode: "bubble" },
         onclick: { enable: true, mode: "repulse" },
         resize: true,
      },
      modes: {
         grab: { distance: 400, line_linked: { opacity: 0.5 } },
         bubble: { distance: 400, size: 2, duration: 0.3, opacity: 1, speed: 500 },
         repulse: { distance: 100, duration: 0.3 },
         push: { particles_nb: 100 },
         remove: { particles_nb: 50 },
      },
   },
   retina_detect: true,
});