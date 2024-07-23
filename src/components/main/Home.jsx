import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Helper function to construct image URLs
// const url = (name, wrap = false) =>
//   `${
//     wrap ? "url(" : ""
//   }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
//     wrap ? ")" : ""
//   }`;

export default function Home() {
  const parallax = useRef(null);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#253237",
      }}
    >
      <Parallax ref={parallax} pages={3}>
        {/* Background Layers */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            // backgroundImage: "url('/assets/images/Portfolio/galaxyViews1.jpg')", // Replace 'stars' with actual path
            background:
              "linear-gradient(90deg, #090010 0%, #090010 100%, #24243e 100%)",
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            // backgroundImage: "url('/assets/images/Portfolio/galaxyView.jpg')",
            background:
              "linear-gradient(90deg, #090010 0%, #090010 100%, #24243e 100%)",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#000004" }}
        />

        {/* Layer with Satellite Image */}
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src="/assets/images/Portfolio/spaceship.png"
            style={{ width: "10%", marginLeft: "45%" }}
            alt="SpaceShip"
          />
        </ParallaxLayer>

        {/* Cloud Layers */}
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.4 }}>
          <img
            src="/assets/images/Portfolio/alien1.png"
            style={{ width: "10%", marginLeft: "5%" }}
            alt="Cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.3} style={{ opacity: 0.5 }}>
          <img
            src="/assets/images/Portfolio/alien2.png"
            style={{ width: "5%", marginLeft: "90%" }}
            alt="Cloud"
          />
          {/* <img
            // src={url("cloud")}
            style={{ width: "20%", marginLeft: "40%" }}
            alt="Cloud"
          /> */}
        </ParallaxLayer>
        {/* 
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            // src={url("cloud")}
            style={{ width: "20%", marginLeft: "75%" }}
            alt="Cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            //src={url("clouds")}
            style={{ width: "20%", marginLeft: "60%" }}
            alt="Cloud"
          />
          <img
            // src={url("clouds")}
            style={{ width: "25%", marginLeft: "30%" }}
            alt="Cloud"
          />
          <img
            // src={url("clouds")}
            style={{ width: "10%", marginLeft: "80%" }}
            alt="Cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            // src={url("clouds")}
            style={{ width: "20%", marginLeft: "5%" }}
            alt="Cloud"
          />
          <img
            // src={url("cloud")}
            style={{ width: "15%", marginLeft: "75%" }}
            alt="Cloud"
          />
        </ParallaxLayer> */}

        {/* Earth Layer */}
        {/* <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div></div>
          <img src={url("earth")} style={{ width: "60%" }} alt="Earth" /> 
        </ParallaxLayer> */}

        {/* Background Images */}
        {/* <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        /> */}

        {/* Interactive Layers */}
        {/* <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={url("server")} style={{ width: "20%" }} alt="Server" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={url("bash")} style={{ width: "40%" }} alt="Bash" />
        </ParallaxLayer>
*/}
        {/* <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img
            // src={url("clients-main")}
            style={{ width: "40%" }}
            alt="Clients Main"
          />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}
