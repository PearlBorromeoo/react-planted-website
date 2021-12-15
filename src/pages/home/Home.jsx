import Content from "../../components/content/Content";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Leftbar/>
        <Content/>
        <Rightbar/>
      </div>
    </>
  )
}
