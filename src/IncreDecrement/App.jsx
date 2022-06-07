import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Button, Typography, Box } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You can't go in negative");
      setCount(0);
    }
  };

  return (
    <Box style={{ marginTop: 100 }}>
      <div className="main">
        <div className="title">
          <Typography className="title">Increment and decrement</Typography>
        </div>
        <br />
        <div>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <Tooltip title="Increment">
            <Button onClick={Increment} className="btn_inc">
              <AddIcon />
            </Button>
          </Tooltip>

          <Tooltip title="Decrement">
            <Button onClick={Decrement} className="btn_dec ">
              <RemoveIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </Box>
  );
};

export default App;
