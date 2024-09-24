"use client";
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface AnimationProps {
  id: string;
}

export const Animation: React.FC<AnimationProps> = (props) => {
  const [init, setInit] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: "#000",
      },
      fullScreen: {
        enable: true,
        zIndex: -10,
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
        },
        modes: {
          push: {
            quantity: 0,
          },
          repulse: {
            distance: 0,
          },
        },
      },
      particles: {
        color: {
          value: "#3C3D37",
        },
        links: {
          color: "#3C3D37",
          enable: true,
          distance: 300,
        },
        move: {
          enable: true,
          speed: { min: 0.2, max: 0.5 },
        },
        number: {
          value: windowWidth < 768 ? 40 : 100,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    }),
    [windowWidth]
  );

  if (typeof window === "undefined" || !init) {
    return null;
  }

  return (
    <Particles
      id={props.id}
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};
