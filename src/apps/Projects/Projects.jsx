import React, { useEffect, useRef, useState } from "react";
import { WindowContent, Button, Toolbar, Cutout, Panel, Frame } from "react95";
import useStore from "../../store";

let observer;

export default function AboutMe(props) {
  const [isMobile, setIsMobile] = useState(false);

  const windowRef = useRef();
  const AddWindow = useStore((state) => state.AddWindow);
  const [windowHeight, setWindowHeight] = useState(0);

  const onResize = () => {
    if (windowRef.current) {
      setWindowHeight(windowRef.current.offsetHeight - 120);
    }
  };

  useEffect(() => {
    if (windowRef.current) {
      observer = new ResizeObserver(onResize);
      observer.observe(windowRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };
  }, [windowRef.current]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Припустимо, що ширина 768px вважається мобільним пристроєм
    };

    handleResize(); // Викликаємо один раз при завантаженні компонента
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = "hidden";
    };

    handleBodyOverflow(); // Викликаємо один раз при завантаженні компонента

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div style={{ height: "100%" }} ref={windowRef}>
      <Toolbar>
        <Button variant="menu" size="sm">
          File
        </Button>
        <Button variant="menu" size="sm">
          Edit
        </Button>
        <Button variant="menu" size="sm">
          Save
        </Button>
      </Toolbar>

      <WindowContent style={{ height: "100%" }}>
        <Cutout
          style={{
            height: windowHeight !== 0 ? windowHeight : "200px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              height: "100%",
              width: "94%",
              overflow: "hidden",
            }}
          >
            {isMobile ? (
              <iframe src="https://google.com" height="100%" width="100%" />
            ) : (
              <iframe
                src="https://car-game-main.vercel.app/"
                height="100%"
                width="100%"
              />
            )}
          </div>
        </Cutout>
      </WindowContent>
    </div>
  );
}
