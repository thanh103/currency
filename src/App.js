import logo from "./dollar.png";
import "./App.css";
import SelectMenu from "./components/SelectMenu";
import InputGroup from "./components/InputGroup";
import Button from "./components/Button";
import { ReactComponent as SwitchIcon } from "./image/SwitchIcon.svg";
import { useState } from "react";
import * as usFlag from "./image/us.png";
import * as vnFlag from "./image/vn.png";

function App() {
  const countries = [
    {
      id: 1,
      name: "USD",
      avatar: usFlag.default,
    },
    {
      id: 2,
      name: "VND",
      avatar: vnFlag.default,
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedCountry1, setSelectedCountry1] = useState(countries[1]);

  function switchCountry() {
    const temp = selectedCountry;
    setSelectedCountry(selectedCountry1); // State phải thay đổi bằng setState
    setSelectedCountry1(temp);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div class="container shadow-xl rounded-lg mx-auto mt-10 pb-20 p-10 flex flex-row justify-center border border-white">
        <div className="mx-8 flex flex-col text-left text-white">
          <div>Amount</div>
          <InputGroup />
        </div>
        <div className="mx-8 flex flex-col text-left text-white ">
          <div>From</div>
          <SelectMenu
            selected={selectedCountry}
            setSelected={setSelectedCountry}
            countries={countries}
          />
        </div>
        <div className="mx-8 flex flex-col text-left  ">
          <div className="h-7"></div>
          <button className="rounded-full h-12 w-12 flex items-center justify-center bg-white">
            <SwitchIcon onClick={switchCountry} />
          </button>
        </div>
        <div className="mx-8 flex flex-col justify-start text-left text-white">
          <div>To</div>
          <SelectMenu
            selected={selectedCountry1}
            setSelected={setSelectedCountry1}
            countries={countries}
          />
          <Button>Transfer </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
