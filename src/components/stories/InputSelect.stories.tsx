import { Meta } from '@storybook/react'

import InputSelect from '../formComponents/InputSelect'

const meta: Meta = {
  title: 'Input Select',
  component: InputSelect,
}
const handleClick = () => {
  console.log('Clicky!')
}
const mockProps = {
  label: 'pick a thing',
  values: ['option', 'option two', 'another option'],
  helperText: 'Helper text',
  handler: handleClick(),
}

export default meta

export const Default = () => (
  <InputSelect
    label={mockProps.label}
    values={mockProps.values}
    helperText={mockProps.helperText}
    handler={() => handleClick}
  ></InputSelect>
)
