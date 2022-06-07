import React, { useEffect, useState } from "react";
import { Button, Typography, Box } from "@material-ui/core";
function App() {
  const state = useState();
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState();
  const [bg, setBg] = useState(
    (document.body.style.backgroundColor = "#7A3720")
  );
  useEffect(() => {
    const getData = () => {
      setTitle((document.title = `Clicked ${count}`));
    };
    getData();
  }, [count]);
  function IncNum() {
    setCount(count + 1);
  }
  const resetMe = () => {
    setCount(0);
  };
  return (
    <>
      <Box
        style={{
          marginTop: "150px",
          display: "flex",
          padding: 10,
          flexDirection: "column",
          alignItems: "center",
          //   justifyContent: "center",
        }}
      >
        <Typography style={{ color: "#fff", fontSize: "42px" }}>
          {count}
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={IncNum}
            style={{ margin: 10 }}
          >
            Click Me
          </Button>
          <Button variant="contained" color="secondary" onClick={resetMe}>
            Reset Me
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
