import React from "react";
import { WindowContent, Button, Toolbar, Panel, Avatar, Anchor } from "react95";
import PorfilePhoto from "../../assets/images/PorfilePhoto.jpg";
import Githubicon from "../../assets/images/githubicon.png";
export default function AboutMe(props) {
  return (
    <div>
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
      <WindowContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar src={PorfilePhoto} size={200} />
        </div>

        <h1>Привіт! Я Влад.</h1>
        <p>
          Я ентузіаст, швидко вчуся і пристрасно люблю свою справу
          <br />
          <strong>Front End веб-розробник</strong>.<br /> Прагнете вивчати нові
          технології та навички і застосовувати їх у реальному світі. Люблю
          вирішувати проблеми та знаходити креативні рішення і завжди готовий до
          нові виклики.
        </p>

        <div style={{ display: "flex", gap: 20 }}>
          <Anchor
            href="/"
            target="_blank"
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <img src={Githubicon} height={25} width={27} /> My GitHub
          </Anchor>
        </div>
      </WindowContent>
    </div>
  );
}
