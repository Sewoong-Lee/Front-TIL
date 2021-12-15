import { NavLink } from "react-router-dom";

export default function NavLinks() {
  //   const Hello = ({ isActive }) => {
  //     return (
  //       <div>
  //         <h1>
  //           isActive?
  //           {(() => {
  //             if (isActive === true) return console.log("ㅋㅋ");
  //             else if (isActive === false) return <span>No</span>;
  //           })()}
  //         </h1>
  //       </div>
  //     );
  //   };

  return (
    <ul>
      <li>
        <NavLink
          to={"/"}
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/profile"}
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/profile/1"}
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Profile/1
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
          className={(isActive) => (isActive ? "active11" : "")}

          //   isActive={(match, location) => {
          //     console.log(location);
          //     if (!location.search === "") {
          //       console.log("펄스");
          //       return false;
          //     }
          //     return true;
          //   }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about?name=zz"}
          //   isActive={(match, location) => {
          //     console.log(location.search);
          //     if (!location.search === "?name=zz") {
          //       console.log("펄스2");
          //       return false;
          //     }
          //     return true;
          //   }}
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
          className={(navData) => (navData.isActive ? "active22" : "")}
        >
          About/name
        </NavLink>
      </li>
    </ul>
  );
}
