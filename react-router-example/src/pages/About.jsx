import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function About() {
  const { search } = useLocation();
  const query = queryString.parse(search);
  console.log(query);
  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      <p>{query.name && query.name}</p>
    </div>
  );
}
