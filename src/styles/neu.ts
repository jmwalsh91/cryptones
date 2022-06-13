/** @jsx jsx */
import { css } from '@emotion/react'

export const pendingSection = css`
  opacity: 0.6;
`
export const disabled = css`
  opacity: 0.5;
  pointer-events: none;
`
export const light = {
  raised: css`
    border-radius: 20px;
    background: #d9d9d9;
    box-shadow: 6px 6px 15px #cacaca, -6px -6px 15px #e8e8e8;
  `,
  depressed: css`
    border-radius: 20px;
    background: #d9d9d9;
    box-shadow: inset 6px 6px 15px #cacaca, inset -6px -6px 15px #e8e8e8;
  `,
  flat: css`
  border-radius: 15px;
  background:  #d9d9d9;
  `,

  /*  token: css`
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

  circleAction: css`
    display: block;
    padding: 1rem;
    width: 6rem;
    height: 6rem;
    background-position: 50% 50%;
    border-radius: 100px;
    background: #d9d9d9;
    box-shadow: 6px 6px 15px #cacaca, -6px -6px 15px #e8e8e8;
  `,

  actionHover: css`
    &:hover {
      border-radius: 100px;
      background: #d9d9d9;
      box-shadow: inset 6px 6px 15px #cacaca, inset -6px -6px 15px #e8e8e8;
    }
  `,
  actionHoverPrimary: css`
    &:hover {
      border-radius: 100px;
      background: #d9d9d9;
      box-shadow: inset 6px 6px 15px #cacaca, inset -6px -6px 15px #e8e8e8,
        inset -3px 3px 15px 3px #65abba;
    }
  `,
}
//dark mode literals
export const dark = {
  raised: css`
    border-radius: 15px;
    background: #2f2c2c;
    box-shadow: 7px 7px 10px #1f1d1d, -7px -7px 10px #3f3b3b;
  `,
  depressed: css`
    border-radius: 20px;
    background: #2f2c2c;
    box-shadow: inset 6px 6px 12px #181717, inset -6px -6px 12px #464141;
  `,
  flat: css`
  border-radius: 15px;
  background: #2f2c2c;
  `,
  /*  token: css`
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

  circleAction: css`
    display: block;
    padding: 1rem;
    width: 6rem;
    height: 6rem;
    background-position: 50% 50%;
    border-radius: 100px;
    background: #2f2c2c;
    box-shadow: 8px 8px 15px #201e1e, -8px -8px 15px #3e3a3a;
  `,

  actionHover: css`
    &:hover {
      border-radius: 100px;
      background: #2f2c2c;
      box-shadow: 8px 8px 15px #201e1e, -8px -8px 15px #3e3a3a;
    }
  `,
  actionHoverPrimary: css`
  &:hover {
    border-radius: 50%;
    background: #2f2c2c;
    box-shadow: inset 8px 8px 15px #1b1a1a,
                inset -8px -8px 15px #433e3e;
                inset -3px 3px 15px 3px #65abba;
  }
`,
}
