import {Link} from "react-router-dom";

export const Footer = () => (

  <div className={"flex flex-col justify-center items-center bg-neutral-700 p-3 text-white"}>
    <text className={""}>
      market
    </text>
      <div className={"flex flex-row child:px-2"}>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/about"}>About</Link>
      </div>
  </div>
)