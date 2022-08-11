import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ConfirmationDialog(props) {
    const {open,title,contentText,btnFirstText,btnSecondText,handleBtnFirst,handleBtnSecond,handleClose} = props
    // const [open, setOpen] = useState(false)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open responsive dialog
            </Button> */}
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {contentText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleBtnSecond}>
                        {btnSecondText}
                    </Button>
                    <Button onClick={handleBtnFirst} autoFocus>
                        {btnFirstText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
