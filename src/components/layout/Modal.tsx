/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
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

import * as neu from '../../styles/neu'
import CircleButtonBase from '../formComponents/CircleButtonBase'

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
          <Stack justifyContent={'center'}>
            <DialogTitle variant="h1" textAlign={'center'}>
              Welcome to crypTones
            </DialogTitle>
            <DialogContent>
              <DialogContentText variant="body1" textAlign={'center'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                veritatis ullam adipisci itaque quae, molestiae modi, unde
                sapiente laudantium cum iste, esse sequi quisquam dolores nulla
                tenetur porro perferendis sint.
              </DialogContentText>
            </DialogContent>

            <CircleButtonBase>Continue</CircleButtonBase>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  )
}
