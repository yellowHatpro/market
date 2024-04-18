import {Link} from "react-router-dom";

export const Footer = () => (

  <div className={"flex flex-col h-full justify-center items-center bg-[#11111b] p-4"}>
    <h1 className={"font-black"}>
      market
    </h1>
      <div className={"flex flex-row child:px-2"}>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/about"}>About</Link>
      </div>
  </div>
)
