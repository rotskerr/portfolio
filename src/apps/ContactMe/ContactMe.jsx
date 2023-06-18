import React, { useState } from "react";
import { WindowContent, Button, Toolbar, TextInput } from "react95";
import useForm from "../../hooks/useForm";
import axios from "axios";

export default function ContactMe(props) {
  const { values, HandelChange } = useForm({
    email: "",
    text: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const HandelSubmit = async () => {
    try {
      const url = `https://rotskerr.s-host.net/api/message/${values.email}/${values.text}`;
      await axios.post(url);
  
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };
  
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
        {isSuccess ? (
          <p>Message sent successfully!</p>
        ) : (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: 15,
                marginBottom: 10,
              }}
            >
              <p style={{ width: 100 }}>Email</p>
              <TextInput
                value={values.email}
                name="email"
                onChange={HandelChange}
                fullWidth
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: 15,
                marginBottom: 10,
              }}
            >
              <p style={{ width: 100 }}>Message</p>
              <TextInput
                value={values.text}
                multiline
                rows={4}
                name="text"
                onChange={HandelChange}
                fullWidth
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: 15,
                marginBottom: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button size="lg" style={{ width: 300 }} onClick={HandelSubmit}>
                Send
              </Button>
            </div>
          </>
        )}
      </WindowContent>
    </div>
  );
}
