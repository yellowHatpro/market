import { Footer } from "./Footer";
import { Header } from "./Header";
import {Helmet} from "react-helmet";
import {Toaster} from "react-hot-toast";
export const Layout = ({children, title, description, keywords, author }) => (
  <div className={"flex flex-col"}>
      <Helmet>
          <meta charSet={"utf-8"}/>
          <meta name= "description" content={description}/>
          <meta name= "keywords" content={keywords}/>
          <meta name= "author" content={author}/>
          <title>{title}</title>
      </Helmet>
    <Header />
    <main className={"min-h-[90vh]"}>
        <Toaster/>
        {children}
    </main>
    <Footer />
  </div>
)

Layout.defaultProps = {
    title: "market",
    description: "marketplace built using mern stack",
    keywords: "mern, react, node, mongodb",
    author: "yellowhatpro"
}