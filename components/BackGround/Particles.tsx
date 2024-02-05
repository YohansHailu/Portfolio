import Particles from "react-tsparticles";

export function GraphParticles({ particlesLoaded, particlesInit }: { particlesLoaded: any, particlesInit: any }) {

  return (<Particles
    loaded={particlesLoaded}
    init={particlesInit}
    options={{
      background: {
        color: {
          value: "#0F2341",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 250,
            duration: 0.9,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#cccccc",
          distance: 150,
          enable: true,
          opacity: 0.05,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }}

  />)
}
