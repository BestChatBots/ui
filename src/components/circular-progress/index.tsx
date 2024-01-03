import React from 'react';
import { CircularProgressStyled } from './styled';
import { CircularProgressVariant } from './types';

export interface CircularProgressProps extends React.ComponentProps<'svg'> {
  variant: CircularProgressVariant;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  variant, ...props
}) => (
  <CircularProgressStyled 
    width="80" 
    height="80" 
    viewBox="0 0 80 80" 
    fill="none"
    {...props}  
  >
    <circle cx="40" cy="40" r="38" stroke="#3A4B62" strokeWidth="4" />
    <path d="M64.9836 68.6325C60.2749 72.7411 54.6257 75.625 48.5363 77.0288C42.4468 78.4326 36.1052 78.313 30.0731 76.6805C24.0409 75.048 18.5045 71.953 13.9542 67.6697C9.40385 63.3865 5.98011 58.0471 3.9862 52.1246C1.9923 46.2021 1.48978 39.8793 2.52316 33.7162C3.55654 27.5531 6.09393 21.7399 9.91055 16.7917C13.7272 11.8435 18.7052 7.91285 24.4038 5.34804C30.1023 2.78323 36.3455 1.66338 42.5802 2.0877" stroke="#F25124" strokeWidth="4">
      <animateTransform 
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 40 40"
        to="360 40 40"
        dur="1.35s"
        repeatCount="indefinite"
      />
    </path>
    <rect x="25" y="25" width="30" height="30" rx="6" fill="url(#paint0_linear_210_2527)" />
    <path d="M32.6463 42.9828C31.9965 42.4324 31 42.8942 31 43.7458V48C31 48.5523 31.4477 49 32 49H48C48.5523 49 49 48.5523 49 48V47.8837C49 47.5849 48.8664 47.3017 48.6357 47.1118L40.8422 40.6936C40.3894 40.3207 39.7144 40.4158 39.3823 40.8994L36.6264 44.9116C36.2912 45.3996 35.6076 45.4911 35.1558 45.1084L32.6463 42.9828ZM31 37.3064C31 36.4695 31.9665 36.0028 32.6219 36.5233L35 38.4118L39.376 31.925C39.709 31.4313 40.397 31.3363 40.8514 31.7212L45 35.2353H48C48.5523 35.2353 49 35.683 49 36.2353V42.6142C49 43.4592 48.0167 43.9233 47.3644 43.3861L40.4428 37.6869C39.9898 37.3139 39.3144 37.4093 38.9825 37.8932L36.2466 41.8818C35.9114 42.3705 35.2271 42.4622 34.7752 42.0789L31 38.8776V37.3064Z" fill="white" />
    <defs>
      <linearGradient id="paint0_linear_210_2527" x1="40" y1="25" x2="40" y2="55" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF7E5A" />
        <stop offset="0.536458" stopColor="#F8643B" />
        <stop offset="1" stopColor="#C42F06" />
      </linearGradient>
    </defs>
  </CircularProgressStyled>
);
