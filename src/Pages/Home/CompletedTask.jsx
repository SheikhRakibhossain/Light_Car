import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CompletedTaskCard from "./CompletedTaskCard.jsx";

const CompletedTask = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [projects, setProjects] = useState([""]);
  useEffect(() => {
    fetch("http://localhost:5000/completed-projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const color = projects.filter((project) => project.category === "Color");
  const engine = projects.filter(
    (project) => project.category === "Engine_Repair"
  );
  const fullCarRepair = projects.filter(
    (project) => project.category === "Full_Car_Repair"
  );
  const electric = projects.filter(
    (project) => project.category === "Electric"
  );
  console.log("I am from color", color, engine, fullCarRepair, electric);

  return (
    <>
    <section className="text-center">
    <div className="py-10 ">
        <h2 className="text-3xl font-semibold text-center">Some Of <span className="text-[#f22613]">Our Succeessfull Works</span></h2>
    </div>
      <div className="text-center space-x-4 pb-10">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="border-0"
        >
          <TabList>
            <Tab>Color</Tab>
            <Tab>Full Car Repair</Tab>
            <Tab>engine Repair</Tab>
            <Tab>Electrical Line Generate</Tab>
          </TabList>

          <TabPanel>
            <CompletedTaskCard project={color} />
          </TabPanel>
          <TabPanel>
            <CompletedTaskCard project={engine} />
          </TabPanel>
          <TabPanel>
            <CompletedTaskCard project={fullCarRepair} />
          </TabPanel>
          <TabPanel>
            <CompletedTaskCard project={electric} />
          </TabPanel>
          <TabPanel>
            <h1>heloo</h1>
          </TabPanel>
        </Tabs>
      </div>

      </section>
    </>
  );
};

export default CompletedTask;
