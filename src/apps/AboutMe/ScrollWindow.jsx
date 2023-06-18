import React, { useEffect, useRef, useState } from "react";
import { WindowContent, Button, Toolbar, Cutout, Panel } from "react95";
let observer;
export default function AboutMe(props) {
  const windowRef = useRef()

  const [windowHight, setWindowHight] = useState(0)
  const onresize = () => {
    if (windowRef.current) {
      setWindowHight(windowRef.current.offsetHeight - 120)

    }
  }
  useEffect(() => {
    if (windowRef.current) {
      observer = new ResizeObserver(onresize)
      observer.observe(windowRef.current)
    }
    return () => {

      if (observer) {

        observer.disconnect()
        observer = null
      }


    }
  }, [windowRef.current, windowHight])
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


      <WindowContent style={{ hight: "100%" }}>
        <Cutout style={{ backgroundColor: "white", height: windowHight != 0 ? windowHight : "200px", overflow: "hidden" }}>
          <div>
            <p>Ентузіаст, який швидко навчається та пристрасний Frontend веброзробник. Прагнете вивчати нове</p>
            <p>технології та навички і застосовувати їх у реальному світі. Я люблю вирішувати проблеми та знаходити</p>
            <p>творчі рішення і завжди готовий до нових викликів</p>
          </div>
        </Cutout>
      </WindowContent>
      
    </div>

  );
}
