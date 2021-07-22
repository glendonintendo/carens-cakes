import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Flex } from "@chakra-ui/react";

import { QUERY_DECORATIONS } from "../../utils/queries";
import CakeCard from "../CakeCard";

const DecorationPanel = () => {
  const { loading, data: decorationData } = useQuery(QUERY_DECORATIONS);

  if (decorationData) {
    console.log(decorationData);
  }

  const [chosenDecoration, setChosenDecoration] = useState();

  return (
    <Flex justify="space-between" wrap="wrap" grow={[0, 1, 1, 1]}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        decorationData.decorations.map((decoration) => (
          <CakeCard
            description={decoration.description}
            image={decoration.image}
            name={decoration.name}
          />
        ))
      )}
    </Flex>
  );
};

export default DecorationPanel;