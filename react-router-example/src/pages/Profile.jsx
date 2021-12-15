import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  console.log(id, typeof id);
  return (
    <div>
      <h2>Profile 페이지 입니다.</h2>
      {id && <h3> id 는 {id} 입니다요</h3>}
    </div>
  );
}
