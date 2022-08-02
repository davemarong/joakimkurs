import React, { useRef } from "react";
import Button from "./components/Button/Button";
// import Camera from "./components/Camera/Camera";
import Header from "./components/Header/Header";
import Text from "./components/Text/Text";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import { Html5Qrcode } from "html5-qrcode";

function App() {
  const html5QrCode = new Html5Qrcode("bro");
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */
    console.log("hei");
  };
  const config = { fps: 10, qrbox: { width: 250, height: 250 } };

  // If you want to prefer back camera
  html5QrCode.start(
    { facingMode: "environment" },
    config,
    qrCodeSuccessCallback
  );

  return (
    <div
      id="reader"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Text>
        Gratulerer. Du har nå tatt kurs 1 - Brannsluknings apparat av
        FireSafeWalk. Gå til neste stasjon: Brannalarm og scan qr-koden.
      </Text>
      <Header>Scan QR-kode</Header>
      {/* <Camera /> */}
      {/* <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      /> */}
      <Button>Neste</Button>
    </div>
  );
}

export default App;
