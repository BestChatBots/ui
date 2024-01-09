import { Middleware } from 'stylis';

export const BestChatBotsStyleSheetPlugin: Middleware = (element) => {
  if (element.type === 'decl' 
    && element.props !== 'background'
    && element.props !== 'background-image') {
    element.value = element.value.replace(/([-0-9.]+)px/g, (_, value) => {
      const pxValue = +value;
      
      return Math.abs(pxValue) <= 1 ? `${pxValue}px` : `calc(var(--bestchatbots-scale, 1) * ${pxValue}px)`;
    });
    
    element.value = element.value.replace(/([-0-9.]+)vh/g, (_, value) => {
      const vhValue = +value;

      return `calc(var(--bestchatbots-vh, 1vh) * ${vhValue})`;
    });
  }
};
