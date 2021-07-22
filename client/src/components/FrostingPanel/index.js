import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Flex } from "@chakra-ui/react";

import { QUERY_FROSTINGS } from "../../utils/queries";
import CakeCard from "../CakeCard";

const FrostingPanel = () => {
  const { loading, data: frostingData } = useQuery(QUERY_FROSTINGS);

  if (frostingData) {
    console.log(frostingData);
  }

  const [chosenFrosting, setChosenFrosting] = useState();

  return (
    <Flex justify="space-between" wrap="wrap" grow={[0, 1, 1, 1]}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        frostingData.frostings.map((frosting) => (
          <CakeCard
            description={frosting.description}
            image={frosting.image}
            name={frosting.name}
          />
        ))
      )}
    </Flex>
  );
};

export default FrostingPanel;