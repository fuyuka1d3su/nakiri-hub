import "./index.css";

import Service from "./components/Service";
import NakiriLogo from "./components/NakiriLogo";

import JellyFinLogo from "./assets/jellyfin.svg";
import InvidiousLogo from './assets/invidious.png';
import ImmichLogo from './assets/immich.png';
import CockpitLogo from './assets/cockpit.png';


function App() {
  return (
    <>
    <div className="flex justify-center p-8">
      <NakiriLogo size="35%"/>
    </div>

    <div className="flex gap-10 items-center justify-center p-8">
      <Service logo={JellyFinLogo} name={"Jellyfin"} url="http://jellyfin.nakiri.local" />
      <Service logo={InvidiousLogo} name={"Invidious"} url="http://invidious.nakiri.local" />
      <Service logo={ImmichLogo} name={"Immich"} url="http://immich.nakiri.local" />
      <Service logo={CockpitLogo} name={"Cockpit"} url="http://cockpit.nakiri.local" />   
      
    </div>
    </>
  );
}

export default App;
