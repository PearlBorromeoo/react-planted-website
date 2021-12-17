import "./marketplace.css"
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import Market from "../../components/market/Market";

export default function Marketplace() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Leftbar/>
        <Market/>
        <Rightbar/>
      </div>
    </>
  )
}
