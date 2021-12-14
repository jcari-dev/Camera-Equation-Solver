import React from 'react'
import ManualEdit from "../ManualEdit/ManualEdit";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function Result(props: any) {

   

    return (
        <div>
            <div className='result'>
                {props.response}
            </div>
            <div>
                {props.response ? <div> <p>Wrong? </p> <p className="manualEdit"> <div>
                <p onClick={props.handleClickOpen}>
                    Click here to manually input the equation.
                </p>


                <Dialog  open={props.open} onClose={props.handleClose}>
                <form onSubmit={(e) =>{props.handleEdit(e)}}>

                    <DialogTitle>Edit Result</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Equation"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={props.handleClose}>Cancel</Button>
                        <Button type="submit" onClick={props.handleClose}>Confirm</Button>
                    </DialogActions>
                </form>

                </Dialog>

            </div> </p> </div> : ""}
            </div>
            
        </div>

    )
}

export default Result
