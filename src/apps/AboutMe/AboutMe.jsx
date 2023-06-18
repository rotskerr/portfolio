import React from "react";
import { WindowContent, Button, Toolbar, Panel, Avatar, Anchor } from "react95";
import PorfilePhoto from "../../assets/images/PorfilePhoto.jpg";
import Githubicon from "../../assets/images/githubicon.png";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AboutMe(props) {
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://rotskerr.s-host.net/api/desktop");
        setText(response.data[0].text);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);


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
          <p>{text}</p>
          

        <div style={{ display: "flex", gap: 20 }}>
          <Anchor
            href="https://github.com/rotskerr"
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
