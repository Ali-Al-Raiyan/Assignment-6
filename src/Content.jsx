import React, { useState } from "react";

const Content = () => {
  const [text, setText] = useState("");
  const changeText = () => {
    setText(document.getElementById("textArea").value);
    document.getElementById("pera").innerHTML = text;
  };
  return (
    <>
      <label>
        <h3>Write Something inside box</h3>
        <textarea id="textArea" name="content" rows={4} cols={40} />
      </label>
      <br></br>
      <br></br>
      <button onClick={changeText}>Click</button>
      <p id="pera"></p>
    </>
  );
};

export default Content;
