import { useState } from "react";
import { Button } from "@chakra-ui/react";

const CakeFlavorPanel = () => {
  const [chosenFlavor, setChosenFlavor] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();

    setChosenFlavor((prev) => prev + 1);
  };

  return (
    <div>
      {chosenFlavor}
      <Button onClick={handleClick} />
    </div>
  );
};

export default CakeFlavorPanel;
