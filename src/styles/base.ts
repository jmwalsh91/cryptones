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
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  &:focus-within {
    box-shadow: 0 0 10px #65abba;
  }
`
export const toneCard = css`
  position: relative;
  &:focus-within {
    box-shadow: 0 0 10px #d070be;
  }
`

export const playBackControls = css`
  position: relative;
  max-width: 100%;
`
export const focusBorder = css``

export const onLight = css`
  justify-self: center;
  align-self: baseline;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(
    45deg,
    hsla(80, 66%, 51%, 1) 30%,
    hsla(139, 61%, 53%, 1) 99%
  );
  border-radius: 50%;
  box-shadow: #89ff00 0 2px 12px;
`

export const offLight = css`
  justify-self: center;
  align-self: baseline;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(
    45deg,
    hsla(0, 72%, 48%, 1) 30%,
    hsla(0, 79%, 30%, 1) 100%
  );
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 4px 1px, inset #304701 0 -1px 4px,
    #d5484f 0 2px 12px;
`
