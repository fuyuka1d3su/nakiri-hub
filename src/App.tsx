import "./index.css";
import Service from "./components/Service";
import JellyFinLogo from "./assets/jellyfin.svg";

function App() {
  return (
    <div className="flex flex-row gap-2">
      <Service logo={JellyFinLogo} url="http://nakiri:8096" />
      <Service logo={JellyFinLogo} url="http://nakiri:8096" />
      <Service logo={JellyFinLogo} url="http://nakiri:8096" />
    </div>
  );
}

export default App;
