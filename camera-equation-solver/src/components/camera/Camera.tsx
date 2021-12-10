import * as React from "react";
import { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { saveAs } from "file-saver";

export default function BoxSx() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);
  const [renderCamera, setRenderCamera] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 1920,
          height: 1080,
        },
      })
      .then((stream) => {
        let video: any = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const showCamera = () => {
    setRenderCamera(true);
  };

  const takePhoto = () => {
    const width = 720;
    const height = width / (16 / 9);

    let video: any = videoRef.current;
    let photo: any = photoRef.current;

    photo.width = width;
    photo.height = height;

    let context = photo.getContext("2d");
    context.drawImage(video, 0, 0, width, height);

    // photo.toBlob(function (blob: any) {
    //   saveAs(blob, "pretty image.png"); // SAVE IMAGE 
    // });

    setHasPhoto(true);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef, renderCamera]);

  return (
    <Box
      sx={{
        width: "80%",
        height: "50%",
        margin: "auto",
      }}
    >
      {renderCamera ? (
        <Box>
          <div className="camera">
            <video
              style={{ width: "100%", maxWidth: "100%", height: "auto" }}
              ref={videoRef}
            ></video>
            <Button variant="contained" onClick={takePhoto}>
              {" "}
              CAPTURE{" "}
            </Button>
          </div>
        </Box>
      ) : (
        <Button onClick={showCamera}>Capture</Button>
      )}

      <br />
      <Box>
        {" "}
        <div>
          <canvas
            className="my-canvas"
            style={{ width: "100%", maxWidth: "100%", height: "auto" }}
            ref={photoRef}
          >
            <Button variant="contained"> Close </Button>
          </canvas>
        </div>
      </Box>
    </Box>
  );
}
