import "./scss/styles.scss";
import "./scss/reset.scss";
import "./scss/generals.scss";
import Layout from "./components/Layout";
import Title from "./components/Title";
import { AlertType } from "../src/aviation-types";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const alertTypesArray = Object.values(AlertType);
  const [selectedArticleType, setSelectedArticleType] = useState<
    AlertType | undefined
  >(undefined);

  return (
    <>
      <Layout>
        <Title titleText="Articles Types" />
        {alertTypesArray.map((item) => (
          <Button text={item} />
        ))}
      </Layout>
    </>
  );
}

export default App;
