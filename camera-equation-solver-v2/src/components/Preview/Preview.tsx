import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Preview(props:any) {
    return (
        <div>
                    {props.photoExist ? (
          <div>
            <Box         sx={{
          width: "80%",
          height: "50%",
          margin: "auto",
        }}>
              {" "}
              <div>
                <canvas
                  className="my-canvas"
                  style={{ width: "100%", maxWidth: "100%", height: "auto" }}
                  ref={props.photoRef}
                ></canvas>
              </div>
            </Box>
            <br />
            <Button variant="contained" onClick={() => props.sendPhoto(props.photo)}> Scan This Image</Button>
            <br />
            {/* {props.response ? props.response : <CircularProgress />} */}

          </div>
        ) : (
          <div>
            <Box         sx={{
          width: "80%",
          height: "50%",
          margin: "auto",
        }}>
              {" "}
              <div>
                <canvas
                  className="my-canvas"
                  style={{ width: "100%", maxWidth: "100%", height: "auto" }}
                  ref={props.photoRef}
                ></canvas>
              </div>
            </Box>
            <br />
          </div>
        )}
        </div>
    )
}

export default Preview
