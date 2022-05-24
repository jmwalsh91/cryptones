import { Meta } from '@storybook/react'

import Modal from '../layout/Modal'

const meta: Meta = {
  title: 'Basic Modal',
  component: Modal,
}

export default meta

export const Default = () => <Modal isOpen={true} />
