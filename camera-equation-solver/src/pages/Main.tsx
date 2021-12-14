import { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Axios from "axios";
import FormData from "form-data";
import CircularProgress from '@mui/material/CircularProgress';


function Main() {

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [renderCamera, setRenderCamera] = useState(false);
  const [photoExist, setPhotoExist] = useState(false);
  const [photo, setPhoto] = useState("")
  const [response, setResponse] = useState("")

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 640,
          height: 480,
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

  const sendPhoto = (photo: any) => {
    let data = new FormData();
    data.append("uploaded_file", photo);

    Axios.post("http://localhost:3001/Api", data, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data;`,
      },
    })
      .then((textresponse) => {
        setResponse(textresponse.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const takePhoto = () => {

    const width = 640;
    const height = 480;

    let video: any = videoRef.current;
    let photo: any = photoRef.current;

    photo.width = 320;
    photo.height = 96;

    let context = photo.getContext("2d");
    context.drawImage(
      video,
      160,
      200, // Start at 70/20 pixels from the left and the top of the image (crop),
      320,
      96, // "Get" a `50 * 50` (w * h) area from the source image (crop),
      0,
      0, // Place the result at 0, 0 in the canvas,
      320,
      96
    );

    // sendPhoto(photo.toDataURL("image/jpeg", 1.0));
    setPhotoExist(true);
    setPhoto(photo.toDataURL("image/jpeg", 1.0))

    // photo.toBlob(function (blob: any) {
    //   saveAs(blob, "pretty image.png"); // SAVE IMAGE
    // });
  };

  useEffect(() => {
    getVideo();
  }, [videoRef, renderCamera]);
    

    return (
        <div>
            
        </div>
    )
}

export default Main
