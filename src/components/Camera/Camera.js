const Camera = () => {
  const constraints = {
    video: { facingMode: "environment", width: 200, height: 200 },
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
      console.error(`${err.name}: ${err.message}`);
    });
  return (
    <div>
      <video
        playsInline
        onLoadedMetadata={() => {
          console.log("hei");
        }}
      />
    </div>
  );
};

export default Camera;
