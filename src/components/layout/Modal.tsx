import { DialogContent, DialogContentText, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import { useState } from 'react'

export default function Modal() {
  const [open, setOpen] = useState(true)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        sx={{
          bgcolor: 'black',
          opacity: '.6',
          backgroundBlendMode: 'hard-light',
        }}
      >
        <DialogActions>
          <DialogContent>
            <DialogContentText>
              <Typography variant="h1">Text</Typography>
            </DialogContentText>
          </DialogContent>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
