import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/WeatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [query, setQuery] = useState({ q: "lahore" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
    // console.log(weather + "asdasdasdasd")
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-900 to-orange-400";
  };

  return (
    <div className={`mx-auto max-w-screen py-5 px-32 bg-gradient-to-br from-cyan-900 to-blue-400 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureDetails weather={weather} />

          <Forecast title="hourly forecast" items={weather?.hourly} />
          <Forecast title="daily forecast" items={weather?.daily} />
        </div>
<ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
