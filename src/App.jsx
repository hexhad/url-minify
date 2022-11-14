import "./App.scss";
import { getShortURL } from "./service";
import React, { useState } from "react";

async function checkThisVal(url) {
  return await getShortURL(url);
}
function App() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [minifiedUrl, setMinifiedUrl] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <div className="minfy-search">
        <input
          className="short-txt"
          placeholder="intput url"
          type="text"
          onChange={(e) => setCurrentUrl(e)}
        />
        <input
          className="short-btn"
          value={"Minify"}
          type="button"
          onClick={() => {
            setMinifiedUrl("");
            checkThisVal(currentUrl).then((e) => {
              console.log(e);
              if (e.data.success) {
                setMinifiedUrl(e.data.data.url);
              } else {
                setMessage("Error")
                setPopUp(true);
                setTimeout(() => {
                  setPopUp(false);
                }, 1000);
              }
            });
          }}
        />
      </div>
      <div className="minify-prev">
        <h1
          className="minified-url"
          onClick={(e) => {
            setMessage("copied !!")
            setPopUp(true);
            navigator.clipboard.writeText(minifiedUrl);
            setTimeout(() => {
              setPopUp(false);
            }, 1000);
          }}
        >
          {minifiedUrl}
        </h1>
      </div>
      {popUp ? (
        <div className="popup">
          <p className="copied">{message}</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
