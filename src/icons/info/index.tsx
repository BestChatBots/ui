import { Icon, IconConsumer, icon } from '@/components/icon';

export const InfoIcon = icon(({ ...props }) => (
  <Icon width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#F25124' } = { fill: '#F25124' }) => (
        <>
          <g clipPath="url(#clip0_31_486)">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.15789 17H16.8421C18.5789 17 20 15.65 20 14V3C20 1.35 18.5789 0 16.8421 0H3.15789C1.42105 0 0 1.35 0 3V20L3.15789 17ZM11.0025 4.80371C11.0025 5.35738 10.5537 5.80622 10 5.80622C9.44633 5.80622 8.9975 5.35738 8.9975 4.80371C8.9975 4.25005 9.44633 3.80121 10 3.80121C10.5537 3.80121 11.0025 4.25005 11.0025 4.80371ZM11.0025 12.8238V7.31003H8.9975V12.8238H11.0025Z" fill={fill} />
          </g>
          <defs>
            <clipPath id="clip0_31_486">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>

        </>
      )}
    </IconConsumer>
  </Icon>
));
