import React from "react";
import Button from "./components/Button/Button";
// import Camera from "./components/Camera/Camera";
import Header from "./components/Header/Header";
import Text from "./components/Text/Text";
// import { Html5Qrcode } from "html5-qrcode";
// import Qrstuff from "./components/Qrstuff";
import useLoadQRScan from "./components/CustomHook/useLoadQRScan";

function App() {
  const urlname = useLoadQRScan();

  return (
    <div
      id="reader"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>{urlname}</div>
      <div id="dude">hei</div>
      <Text>
        Gratulerer. Du har nå tatt kurs 1 - Brannsluknings apparat av
        FireSafeWalk. Gå til neste stasjon: Brannalarm og scan qr-koden.
      </Text>
      <Header>Scan QR-kode</Header>
      {/* <Camera /> */}
      {/* <Qrstuff /> */}
      <Button>Neste</Button>
    </div>
  );
}

export default App;
