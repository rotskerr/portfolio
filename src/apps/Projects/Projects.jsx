import React, { useEffect, useRef, useState } from "react";
import { WindowContent, Button, Toolbar, Cutout, Panel, Frame } from "react95";
import useStore from "../../store";
import Game from "../Game/Game";

let observer;

export default function AboutMe(props) {
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
              paddingLeft: 10,
              paddingRight: 10,
              alignContent: "center",
              justifyContent: "center",
              display: "flex",
              flexWrap: "wrap",
              gap: 15,
            }}
          >
            <iframe src="https://car-game-main.vercel.app/" width="100%" height="535" />
          </div>
        </Cutout>
      </WindowContent>
      {/* <Panel variant="well" className="footer">
          Put some useful informations here
        </Panel> */}
    </div>
  );
}
