import { Html5Qrcode } from "html5-qrcode";
import React, { useEffect } from "react";

const Qrstuff = () => {
  useEffect(() => {
    // Put the "reader" div element in react app. Its currently hardcoded in the public index.html
    const html5QrCode = new Html5Qrcode("bro");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      /* handle success */
      // window.open("www.google.com", "_blank");
      // setUrlname(decodedText);
      console.log("hei");
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    // If you want to prefer back camera
    html5QrCode.start(
      { facingMode: "environment" },
      config,
      qrCodeSuccessCallback
    );
  }, []);

  return <div></div>;
};

export default Qrstuff;
