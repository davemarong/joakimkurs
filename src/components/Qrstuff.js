import { Html5Qrcode } from "html5-qrcode";
import React from "react";

const Qrstuff = () => {
  const html5QrCode = new Html5Qrcode("reader");
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

  return <div>qrstuff</div>;
};

export default Qrstuff;
