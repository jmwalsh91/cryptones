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
    background: #d9d9d9;
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
  titleGlow: css`
  text-shadow:
    0 0 5px #fff,
    0 0 16px #65ABBA;
}`,
}
//dark mode literals
// background:  background: linear-gradient(#1c1c1c, #161616);
//linear-gradient(#1c1c1c, #121212);
// background: linear-gradient(145deg, #1c1c1c, #121212);
export const dark = {
  raised: css`
    border-radius: 10px;
    background: linear-gradient(123deg, #181818, #141414);
    box-shadow: 5px 5px 17px #0e0e0e, -5px -5px 17px #1e1e1e;
  `,
  depressed: css`
    border-radius: 12px;
    background: #161616;
    box-shadow: inset 8px 8px 16px #0f0f0f, inset -8px -8px 16px #1d1d1d;
  `,
  flat: css`
    border-radius: 8px;
    background: linear-gradient(#1c1c1c, #161616);
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
    border-radius: 50px 50px;
    background-position: 50% 50%;
    background: linear-gradient(145deg, #181818, #141414);
    box-shadow: 5px 5px 11px #0e0e0e, -5px -5px 11px #1e1e1e;
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
  titleGlow: css`
  text-shadow:
    0 0 1px #fff,
    0 0 6px #0ff,
    0 0 11px #0ff;
}`,
}

/**********************
 *    GRAVEYARD       *
 * ********************
 * 
 * * MappingsCard title style w/ aurora * *
 * font-weight: 700;
            text-shadow: 10px 1px 20px ${currentTheme.palette.primary.main},
              5px 8px 10px ${currentTheme.palette.secondary.main};
            color: ${currentTheme.palette.background.default};
          `}
  *********************
  * * ToneCard title style w/ aurora
  font-weight: 700;
            text-shadow: 10px 1px 12px ${currentTheme.palette.secondary.main},
              5px 8px 12px ${currentTheme.palette.primary.main};
            color: ${currentTheme.palette.background.default};
          `
 ***********************/
