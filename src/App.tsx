import "./index.css";

import Service from "./components/Service";
import NakiriLogo from "./components/NakiriLogo";

import JellyFinLogo from "./assets/services/jellyfin.svg";
import InvidiousLogo from "./assets/services/invidious.png";
import ImmichLogo from "./assets/services/immich.png";
import CockpitLogo from "./assets/services/cockpit.png";
import PortainerLogo from "./assets/services/portainer.png";

function App() {
  return (
    <>
      <div className="flex justify-center p-8">
        <NakiriLogo size="28%" />
      </div>

      <div className="flex justify-center">
        <p>word of the day : meow</p>
      </div>

      <div className="flex xl:flex-row gap-10 items-center justify-center p-8 sm:flex-col">
        <Service
          logo={JellyFinLogo}
          name={"Jellyfin"}
          url="http://jellyfin.nakiri.local"
          color="#7d2ce8"
        />
        <Service
          logo={InvidiousLogo}
          name={"Invidious"}
          url="http://invidious.nakiri.local"
          color="#FFFFFF"
        />
        <Service
          logo={ImmichLogo}
          name={"Immich"}
          url="http://immich.nakiri.local"
          color="#e8a903"
        />
        <Service
          logo={CockpitLogo}
          name={"Cockpit"}
          url="http://cockpit.nakiri.local"
          color="#305d96"
        />
        <Service
          logo={PortainerLogo}
          name={"Portainer"}
          url="http://portainer.nakiri.local"
          color="#33c5e7"
        />
      </div>

      <div className="flex justify-center p-5">
        <p>nakirihub | made by @naz-bdeb on github</p>
      </div>
    </>
  );
}

export default App;
