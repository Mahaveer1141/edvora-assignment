import Navbar from "../components/Navbar";
import Body from "../components/Body";

const homeStyle = {
  background: "#292929",
  minHeight: "100vh",
  paddingBottom: "15px",
};

function Home({ user, rides }) {
  console.log(rides);

  return (
    <div style={homeStyle}>
      <Navbar user={user} />
      <Body />
    </div>
  );
}

export async function getServerSideProps() {
  const user = await (
    await fetch("https://assessment.api.vweb.app/user")
  ).json();

  const rides = await (
    await fetch("https://assessment.api.vweb.app/rides")
  ).json();

  return {
    props: {
      user,
      rides,
    },
  };
}

export default Home;
