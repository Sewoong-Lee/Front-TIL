import { useNavigate } from "react-router-dom";

// export default function LoginButton() {
//   const navigate = useNavigate(); //네비게이트 선언
//   //console.log(Redirect);
//   function login() {
//     setTimeout(() => {
//       //페이지 이동
//       navigate("/"); //네비게이트로 이동할 페이지 지정
//     }, 1000);
//   }
//   return <button onClick={login}>로그인하기</button>;
// }

export default function LoginButton() {
  const navigate = useNavigate(); //네비게이트 선언
  //console.log(Redirect);
  function login() {
    setTimeout(() => {
      //페이지 이동
      navigate("/"); //네비게이트로 이동할 페이지 지정
    }, 1000);
  }
  return <button onClick={login}>로그인하기</button>;
}
