import { Layout } from '../components/Layout/Layout'
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"market | 404"}>
      <div className={"flex flex-col items-center p-2 text-center justify-center align-middle min-h-[65vh]"}>
          <text className={"text-7xl"}>404</text>
          <text className={"text-4xl"}>Page not found</text>
          <Link to={"/"}> <button className={"rounded-xl border-2 border-black"}>Go back to home</button> </Link>
      </div>
    </Layout>
  )
}

export default PageNotFound
