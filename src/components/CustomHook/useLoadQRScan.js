import { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

const useLoadQRScan = () => {
  const [urlname, setUrlname] = useState("nope");

  useEffect(() => {
    // Put the "reader" div element in react app. Its currently hardcoded in the public index.html
    const html5QrCode = new Html5Qrcode("hei");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      /* handle success */
      setUrlname(decodedText);
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
  return urlname;
};

export default useLoadQRScan;
