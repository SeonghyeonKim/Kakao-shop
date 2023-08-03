import { useEffect, useState } from "react";
import "../../styles/radiobutton.css"

const RadioButton = ({ value, name, defaultChecked }) => {
  const [check, setCheck] = useState(false);

  const handleClick = () => {
    setCheck(prev => (!prev));
  }

  useEffect(() => {
    if(defaultChecked)
      setCheck(true);
  }, [])

  return (
    <>
      <input
          type="radio"
          value={value}
          name={name}
          id={name}
          checked={check}
          onClick={handleClick}
        />
      <label id={name}>{name}</label>
    </>
  );
}

export default RadioButton;