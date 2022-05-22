/** @jsx jsx */
import { css } from '@emotion/react'

export const raised = css`
  border-radius: 20px;
  background: #d9d9d9;
  box-shadow: 6px 6px 15px #cacaca, -6px -6px 15px #e8e8e8;
`
export const depressed = css`
  border-radius: 20px;
  background: #d9d9d9;
  box-shadow: inset 6px 6px 15px #cacaca, inset -6px -6px 15px #e8e8e8;
`
export const token = css`
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
