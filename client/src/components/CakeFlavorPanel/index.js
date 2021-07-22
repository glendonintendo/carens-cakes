import { useState } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_CAKE_FLAVORS } from "../../utils/queries";

const CakeFlavorPanel = () => {
  const { loading, data: cakeFlavorData } = useQuery(QUERY_CAKE_FLAVORS);

  if (cakeFlavorData) {
    console.log(cakeFlavorData);
  }

  const [chosenFlavor, setChosenFlavor] = useState();

  return <div>FlavorTown</div>;
};

export default CakeFlavorPanel;
