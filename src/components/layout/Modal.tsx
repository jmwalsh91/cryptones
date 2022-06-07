/** @jsxImportSource @emotion/react */
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import { useState } from 'react'
import * as Tone from 'tone'

/* import * as neu from '../../styles/neu' */
import CircleButtonBase from '../formComponents/CircleButtonBase'

type Props = {
  isOpen: boolean
}
export default function Modal({ isOpen }: Props) {
  const [open, setOpen] = useState(isOpen)

  const handleClose = async () => {
    await Tone.start()
    console.log('tone started')
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
        }}
      >
        <DialogActions>
          <Stack
            direction="column"
            justifyContent={'center'}
            alignItems="center"
          >
            <DialogTitle variant="h1" textAlign={'center'}>
              crypTones
            </DialogTitle>
            <DialogContent>
              <DialogContentText variant="body1" textAlign={'center'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                veritatis ullam adipisci itaque quae, molestiae modi, unde
                sapiente laudantium cum iste, esse sequi quisquam dolores nulla
                tenetur porro perferendis sint.
              </DialogContentText>
            </DialogContent>

            <CircleButtonBase handler={handleClose}>Continue</CircleButtonBase>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  )
}
