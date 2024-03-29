import React, { useState } from "react";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px"
});

export default function StyledComponents() {
  let [count, setCount] = useState(0);
  const click = () => {
    setCount((count = count + 1));
  };
  return <MyButton onClick={click}>Styled ponents {count}</MyButton>;
}
