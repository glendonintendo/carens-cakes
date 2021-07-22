import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Flex } from "@chakra-ui/react";

import { QUERY_CAKE_TYPES } from "../../utils/queries";
import CakeCard from "../CakeCard";

const CakeTypePanel = () => {
  const { loading, data: cakeTypeData } = useQuery(QUERY_CAKE_TYPES);

  if (cakeTypeData) {
    console.log(cakeTypeData);
  }

  const [chosenType, setChosenType] = useState();

  return (
    <Flex justify="space-between" wrap="wrap" grow={[0, 1, 1, 1]}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        cakeTypeData.cakeTypes.map((cakeType) => (
          <CakeCard
            description={cakeType.description}
            image={cakeType.image}
            name={cakeType.name}
          />
        ))
      )}
    </Flex>
  );
};

export default CakeTypePanel;