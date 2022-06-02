/** @jsx jsx */
import { css } from '@emotion/react'

export const select = css`
  min-width: 120px;
  margin: 1rem;
`
export const label = css`
  padding-bottom: 5rem;
  margin-bottom: 5rem;
  font-size: 1.4rem;
  color: black;
`
export const inputBox = css`
  min-width: 10rem;
  height: 6.5rem;
  justify-content: 'center';
  &:hover {
    box-shadow: 0 0 10px #65abba;
  }
`

export const mapCard = css`
  &:focus-within {
    box-shadow: 0 0 10px #65abba;
  }
`

export const focusBorder = css``
