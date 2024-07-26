import "./scss/styles.scss";
import "./scss/reset.scss";
import "./scss/generals.scss";
import Layout from "./components/Layout";
import Title from "./components/Title";
import { Document } from "../src/aviation-types";
import AlertTypes from "./components/AlertTypes";
import { useMemo, useState } from "react";
import data from "../src/aviation-partnerships.json";
import Articles from "./components/Articles";

function App() {
  const [activeAlerts, setActiveAlerts] = useState<string[]>([]);
  const [strictFilters, setStrictFilters] = useState(false);
  const allAlertTypes = useMemo(
    () => [
      ...new Set(
        data.documents.flatMap(({ sentences }) =>
          sentences.flatMap(({ alertTypes }) => alertTypes)
        )
      ),
    ],
    []
  );

  const documents = useMemo(() => {
    const filterType = strictFilters ? "every" : "some";
    return data.documents.filter(({ sentences }) =>
      sentences[filterType](({ alertTypes }) =>
        activeAlerts[filterType]((activeAlert) =>
          alertTypes.includes(activeAlert)
        )
      )
    ) as any as Document[];
  }, [activeAlerts, strictFilters]);

  const handleCheckedAlerts = (name: string) => {
    if (activeAlerts.includes(name)) {
      setActiveAlerts((state) =>
        state.filter((activeName) => name !== activeName)
      );
    } else {
      setActiveAlerts((state) => [...state, name]);
    }
  };

  return (
    <>
      <Layout>
        <Title titleText="Articles Types" />
        <label>
          <input
            type="checkbox"
            onChange={() => setStrictFilters((state) => !state)}
          />
          Should contain every alert?
        </label>
        <AlertTypes
          alertTypesArray={allAlertTypes}
          onChange={handleCheckedAlerts}
        />
        <Articles documents={documents} activeAlerts={activeAlerts} />
      </Layout>
    </>
  );
}

export default App;
