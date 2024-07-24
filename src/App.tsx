import "./scss/styles.scss";
import "./scss/reset.scss";
import "./scss/generals.scss";
import Layout from "./components/Layout";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Layout>
        <Title titleText="Articles Types" />
      </Layout>
    </>
  );
}

export default App;
