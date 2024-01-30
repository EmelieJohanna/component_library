import React from "react";
import Buttons from "./components/Buttons";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Cards from "./components/Cards";
import { CiAlarmOn, CiAlignBottom, CiAvocado, CiBacon } from "react-icons/ci";
import "./index.css";
import foot from "./assets/foot.jpeg";

function App() {
  return (
    <>
      <div className="m-6">
        <h1 className="flex justify-center text-2xl m-4">Component Library</h1>
        <h2>This is a Button Component</h2>
        <h3>
          Props: size(sm, m, lg or xl), color(ex: bg-red-500),
          disabled(true/false)
        </h3>
        <Buttons size="sm" color="bg-red-500" disabled={false}>
          Hej
        </Buttons>
        <Buttons size="xl" color="bg-green-400" disabled={true}>
          Hej Då
        </Buttons>

        <h2>This is an Alert Component</h2>
        <h3>Props: color(ex: bg-red-500), icon</h3>
        <Alerts color="bg-green-500" icon={CiAlarmOn}>
          Time is up buddy!
        </Alerts>
        <Alerts color="bg-red-500" icon={CiAvocado}>
          Time is up buddy!
        </Alerts>

        <h3>This is a Badge Component</h3>
        <h2>Props: color(blue/pink/purple...), size(sm, m, lg, xl), icon</h2>
        <Badges color="pink" size="sm" icon={CiAlignBottom}>
          Waring!!
        </Badges>
        <Badges color="purple" size="m" icon={CiBacon}>
          Waring!!
        </Badges>

        <h2>This is a Card component</h2>
        <h3>Props: href, imgAlt, imgSrc, children</h3>
        <Cards imgSrc={foot} href="https://www.flowbite-react.com">
          Click the link to get started with Flowbite
        </Cards>
        <Cards imgSrc={foot} href="https://www.flowbite-react.com">
          Click the link to get started with Flowbite
        </Cards>
      </div>
    </>
  );
}

export default App;
