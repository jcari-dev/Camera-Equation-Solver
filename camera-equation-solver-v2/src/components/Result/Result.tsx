import React from 'react'
import ManualEdit from "../ManualEdit/ManualEdit";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

type ResultProps = {
    solve: (response: string) => void
    response: string
    handleClose: () => void
    handleEdit: (e: object) => void
    open: boolean
    handleClickOpen: () => void
}

function Result(props: ResultProps) {



    return (
        <div>
            <div className='result'>
                {props.response}
            </div>
            <div>
                {props.response ? <div> <p className='wrong'>Wrong? </p> <p className="manualEdit"> <div>
                    <p className='wrong' onClick={props.handleClickOpen}>
                        Click here to manually input the equation.
                    </p>
                    <br />

                    <Dialog open={props.open} onClose={props.handleClose}>
                        <form onSubmit={(e) => { props.handleEdit(e) }}>

                            <DialogTitle>Edit Result</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Equation"
                                    fullWidth
                                    variant="standard"
                                    defaultValue={props.response}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={props.handleClose}>Cancel</Button>
                                <Button type="submit" onClick={props.handleClose}>Confirm</Button>
                            </DialogActions>
                        </form>

                    </Dialog>

                </div> </p>
                    <br />
                    <Button onClick={() => props.solve} variant="outlined" >
                        Solve
                    </Button> </div> : ""}
            </div>

        </div>

    )
}

export default Result
