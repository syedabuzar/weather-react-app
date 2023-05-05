import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className="mx-auto max-w-screen py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ">
      <TopButtons/>
      <Inputs/>
      <TimeAndLocation/>
      <TemperatureDetails/>

      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>

    </div>
  );
}

export default App;
