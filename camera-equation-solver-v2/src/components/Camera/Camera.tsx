import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import CircularProgress from '@mui/material/CircularProgress';


function Camera(props: any) {
  return (
    <div>
      <br />
      <Box
        sx={{
          width: "80%",
          height: "50%",
          margin: "auto",
        }}
      >
        {props.renderCamera ? (
          <Box>
            <div className="camera">
              <video
                style={{ width: "100%", maxWidth: "100%", height: "auto" }}
                ref={props.videoRef}
              ></video>
            </div>
            <br />
            <Button variant="contained" onClick={props.takePhoto}>
              {" "}
              CAPTURE{" "}
            </Button>
          </Box>
        ) : (
          <Button onClick={props.showCamera}>Capture</Button>
        )}
      </Box>
      <br />
    </div>
  )
}

export default Camera
