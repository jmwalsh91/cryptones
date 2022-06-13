import { Meta } from '@storybook/react'

import Toast from '../err-and-feedback/Toast'

const meta: Meta = {
  title: 'Toast',
  component: Toast,
}
export default meta

export const Default = () => (
  <Toast
    message="Your sequence was SPARSE and BASSY in the key of A Minor"
    severity="info"
  />
)
