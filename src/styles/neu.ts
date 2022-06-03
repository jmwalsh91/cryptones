/** @jsx jsx */
import { css } from '@emotion/react'

export const raisedlight = css`
  border-radius: 20px;
  background: #d9d9d9;
  box-shadow: 6px 6px 15px #cacaca, -6px -6px 15px #e8e8e8;
`
export const depressedlight = css`
  border-radius: 20px;
  background: #d9d9d9;
  box-shadow: inset 6px 6px 15px #cacaca, inset -6px -6px 15px #e8e8e8;
`
/* export const token = css`
  display: block;
  padding: 1rem;
  margin: 0 auto;
  width: 6rem;
  height: 6rem;
  background-position: 50% 50%;
  border-radius: 100px;
  background: #d9d9d9;
  box-shadow: 6px 6px 15px #cacaca, -6px -6px 15px #e8e8e8;
` */

export const circleActionlight = css`
  display: block;
  padding: 1rem;
  margin: 0 auto;
  width: 6rem;
  height: 6rem;
  background-position: 50% 50%;
  border-radius: 100px;
  background: #d9d9d9;
  box-shadow: 6px 6px 15px #cacaca, -6px -6px 15px #e8e8e8;
`

export const actionHoverlight = css`
  &:hover {
    border-radius: 100px;
    background: #d9d9d9;
    box-shadow: inset 6px 6px 15px #cacaca, inset -6px -6px 15px #e8e8e8;
  }
`
export const actionHoverPrimarylight = css`
  &:hover {
    border-radius: 100px;
    background: #d9d9d9;
    box-shadow: inset 6px 6px 15px #cacaca, inset -6px -6px 15px #e8e8e8,
      inset -3px 3px 15px 3px #65abba;
  }
`

export const pendingSection = css`
  opacity: 0.6;
`

//dark mode literals

export const raiseddark = css`
  border-radius: 20px;
  background: #2f2c2c;
  box-shadow: 17px 17px 34px #1b1919, -17px -17px 34px #433f3f;
`
export const depresseddark = css`
  border-radius: 20px;
  background: #2f2c2c;
  box-shadow: inset 6px 6px 12px #181717, inset -6px -6px 12px #464141;
`
/* export const token = css`
  display: block;
  padding: 1rem;
  margin: 0 auto;
  width: 6rem;
  height: 6rem;
  background-position: 50% 50%;
  border-radius: 100px;
  background: #d9d9d9;
  box-shadow: 6px 6px 15px #cacaca, -6px -6px 15px #e8e8e8;
` */

export const circleActiondark = css`
  display: block;
  padding: 1rem;
  margin: 0 auto;
  width: 6rem;
  height: 6rem;
  background-position: 50% 50%;
  border-radius: 100px;
  background: #2f2c2c;
  box-shadow: 8px 8px 15px #201e1e, -8px -8px 15px #3e3a3a;
`

export const actionHoverdark = css`
  &:hover {
    border-radius: 100px;
    background: #2f2c2c;
    box-shadow: 8px 8px 15px #201e1e, -8px -8px 15px #3e3a3a;
  }
`
export const actionHoverPrimarydark = css`
  &:hover {
    border-radius: 50%;
    background: #2f2c2c;
    box-shadow: inset 8px 8px 15px #1b1a1a,
                inset -8px -8px 15px #433e3e;
                inset -3px 3px 15px 3px #65abba;
  }
`
