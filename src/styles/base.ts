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
`
export const inputBox = css`
  min-width: 10rem;
  height: 6.5rem;
  justify-content: 'center';
  &:hover {
    box-shadow: 0 0 10px #65abba;
  }
`

export const centerChildren = css`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
`
export const centeredSvg = css`
  width: 4rem;
  height: 4rem;
  background-size: contain;
  background-origin: content-box;
  background-repeat: no-repeat;
`
export const mapCard = css`
  padding-top: 1rem;
  min-width: 40rem;
  &:focus-within {
    box-shadow: 0 0 10px #65abba;
  }
`
export const toneCard = css`
  &:focus-within {
    box-shadow: 0 0 10px #d070be;
  }
`
export const focusBorder = css``
