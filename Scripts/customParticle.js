const newLocal = particlesJS("particles-js", {
   particles: {
      number: { value: 600, density: { enable: true, value_area: 3000 } },
      color: { value: "#00e1ff" },
      shape: {
         type: "star",
         stroke: { width: 0, color: "#000000" },
         polygon: { nb_sides: 12 },
      },
      opacity: {
         value: 0.5,
         random: true,
         color: "#d64d0d",
         anim: { enable: false, speed: 400, opacity_min: 0.9, sync: true },
      },
      size: {
         value: 2,
         random: true,
         anim: { enable: false, speed: 700, size_min: 0.1, sync: true },
      },
      line_linked: {
         enable: false,
         distance: 50,
         color: "#d64d0d",
         opacity: 0.2,
         width: 0.5,
      },
      move: {
         enable: true,
         speed: 2,
         direction: "alternate",
         random: true,
         straight: false,
         out_mode: "in",
         bounce: true,
         attract: { enable: false, rotateX: 600, rotateY: 270 },
      },
   },
   interactivity: {
      detect_on: "canvas",
      events: {
         onhover: { enable: true, mode: "bubbles" },
         onclick: { enable: true, mode: "repulse" },
         resize: true,
      },
      modes: {
         grab: { distance: 100, line_linked: { opacity: 0.8 } },
         bubble: { distance: 400, size: 0.5, duration: 2, opacity: 1, speed: 5 },
         repulse: { distance: 300, duration: 0.8 },
         push: { particles_nb: 100 },
         remove: { particles_nb: 50 },
      },
   },
   retina_detect: true,
});