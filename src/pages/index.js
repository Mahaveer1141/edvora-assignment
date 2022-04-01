import Navbar from "../components/Navbar";
import Body from "../components/Body";

// https://assessment.api.vweb.app/rides
// https://assessment.api.vweb.app/user

const homeStyle = {
  background: "#292929",
  minHeight: "100vh",
  paddingBottom: "15px",
};

export default function Home() {
  return (
    <div style={homeStyle}>
      <Navbar />
      <Body />
    </div>
  );
}
