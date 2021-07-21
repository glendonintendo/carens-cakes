import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../utils/queries";

const Browse = () => {
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  if (categoryData) {
    console.log(categoryData);
  }

  return <div>explore page</div>;
};

export default Browse;
