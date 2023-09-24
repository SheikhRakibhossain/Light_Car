import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CompletedTask = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [projects, setProjects] = useState(['']);
    useEffect(()=>{

        fetch('http://localhost:5000/completed-projects')
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setProjects(data)
        })
        .catch(error =>console.log(error))
    },[])

  return (
    <>
      <div className="text-center">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="border-0">
          <TabList>
            <Tab>title 1</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default CompletedTask;
