import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material'
import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import { useState } from 'react'

type Props = {
  isOpen: boolean
}
export default function Modal({ isOpen }: Props) {
  const [open, setOpen] = useState(isOpen)

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
          opacity: '.90',
          backgroundBlendMode: 'luminosity',
        }}
      >
        <DialogActions>
          <Stack>
            <DialogTitle variant="h1">Welcome to crypTones</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="p1" color={'primary'}>
                  Text
                </Typography>
              </DialogContentText>
            </DialogContent>
            <Button onClick={handleClose}>Close</Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  )
}
