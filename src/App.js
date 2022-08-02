import React from "react";
import Button from "./components/Button/Button";
import Camera from "./components/Camera/Camera";
import Header from "./components/Header/Header";
import Text from "./components/Text/Text";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Text>
        Gratulerer. Du har nå tatt kurs 1 - Brannsluknings apparat av
        FireSafeWalk. Gå til neste stasjon: Brannalarm og scan qr-koden.
      </Text>
      <Header>Scan QR-kode</Header>
      <Camera />
      <Button>Neste</Button>
    </div>
  );
}

export default App;
