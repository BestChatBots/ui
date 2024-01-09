import { css, RuleSet, ExecutionContext } from 'styled-components';

export type AdaptiveStyle = string | number | false | RuleSet<object>;

export type AdaptiveResult<Props extends object> = 
  (props: ExecutionContext & Props) => AdaptiveStyle;

export interface AdaptiveOptions {
  merge?: boolean;
  desktop?: AdaptiveStyle;
  tablet?: AdaptiveStyle;
  mobile?: AdaptiveStyle;
  touch?: AdaptiveStyle;
}

export type AdaptiveFn<Props extends object> = (props: ExecutionContext & Props) => AdaptiveOptions;

export function adaptive
<Props extends object>(optionsOrFn: AdaptiveOptions | AdaptiveFn<Props>): AdaptiveResult<Props> {
  return (props) => {
    const { theme } = props;
    const {
      merge = false, desktop, tablet, mobile, touch
    } = typeof optionsOrFn === 'object' ? optionsOrFn : optionsOrFn(props);

    const tabletMaxWidth: string = theme.tablet.maxWidth;
    const mobileMaxWidth: string = theme.mobile.maxWidth;

    const touchStyle = touch && css`
      @media only screen and (hover: none) and (pointer: coarse) {
        ${touch}
      }
    `;

    if (merge) {
      return css`
        ${desktop}
        ${tablet && css`
          @media (max-width: ${tabletMaxWidth}) {
            ${tablet}
          }
        `}
        ${mobile && css`
          @media (max-width: ${mobileMaxWidth}) {
            ${mobile}
          }
        `}
        ${touchStyle}
      `;
    }
  
    return css`
      ${desktop && css`
        @media (min-width: ${parseInt(tabletMaxWidth) + 1}px) {
          ${desktop}
        }
      `}
      ${tablet && css`
        @media (min-width: ${parseInt(mobileMaxWidth) + 1}px) and (max-width: ${tabletMaxWidth}) {
          ${tablet}
        }
      `}
      ${mobile && css`
        @media (max-width: ${mobileMaxWidth}) {
          ${mobile}
        }
      `}
      ${touchStyle}
    `;
  };
}
