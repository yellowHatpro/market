import { Footer } from "./Footer";
import { Header } from "./Header";
import {Helmet} from "react-helmet";
import {Toaster} from "react-hot-toast";
export const Layout = ({children, title, description, keywords, author }) => (
  <>
      <Helmet>
          <meta charSet={"utf-8"}/>
          <meta name= "description" content={description}/>
          <meta name= "keywords" content={keywords}/>
          <meta name= "author" content={author}/>
          <title>{title}</title>
      </Helmet>
    <Header/>
    <main className={"h-screen bg-[#1e1e2e]"}>
        <Toaster/>
        {children}
    </main>
    <Footer/>
  </>
)

Layout.defaultProps = {
    title: "market",
    description: "marketplace built using mern stack",
    keywords: "mern, react, node, mongodb",
    author: "yellowhatpro"
}
