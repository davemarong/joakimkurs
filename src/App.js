import React, { useRef } from "react";

function App() {
  // const [data, setData] = useState("No result");

  // useEffect(() => {
  //   const openMediaDevices = async (constraints) => {
  //     return await navigator.mediaDevices.getUserMedia(constraints);
  //   };

  //   try {
  //     const stream = openMediaDevices({ video: true, audio: true });
  //     console.log("Got MediaStream:", stream);
  //     setData(stream);
  //   } catch (error) {
  //     console.error("Error accessing media devices.", error);
  //   }
  // }, []);

  const inputEl = useRef(null);
  const constraints = {
    video: true,
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((mediaStream) => {
      const video = document.querySelector("video");
      video.srcObject = mediaStream;
      video.onloadedmetadata = () => {
        video.play();
      };
    })
    .catch((err) => {
      // always check for errors at the end.
      console.error(`${err.name}: ${err.message}`);
    });
  return (
    <div>
      {/* <video ref={inputEl}></video> */}
      <video
        playsInline
        onLoadedMetadata={() => {
          console.log("hei");
        }}
        ref={inputEl}
      />
      Hei du
    </div>
  );
}

export default App;
