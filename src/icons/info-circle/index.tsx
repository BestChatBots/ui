import { Icon, IconConsumer, icon } from '@/components/icon';

export const InfoCircleIcon = icon(({ ...props }) => (
  <Icon width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <IconConsumer>
      {({ fill = 'white' } = { fill: 'white' }) => (
        <>
          <g clipPath="url(#clip0_51_8948)">
            <path d="M9.00002 0.824615C4.48483 0.824615 0.824646 4.4848 0.824646 8.99999C0.824646 13.5152 4.48483 17.1754 9.00002 17.1754C13.5152 17.1754 17.1754 13.5152 17.1754 8.99999C17.1754 4.4848 13.5152 0.824615 9.00002 0.824615ZM8.30083 4.49999H9.66208V5.94787H8.30083V4.49999ZM10.5536 13.2874H9.05627C8.47465 13.2874 8.22658 13.0399 8.22658 12.4459V8.58374C8.22658 8.39812 8.12758 8.31205 7.95433 8.31205H7.45933V6.97499H8.95727C9.53946 6.97499 9.7864 7.23487 9.7864 7.81649V11.6904C9.7864 11.8648 9.8854 11.9627 10.0586 11.9627H10.5536V13.2874Z" fill={fill} />
          </g>
          <defs>
            <clipPath id="clip0_51_8948">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </>
      )}
    </IconConsumer>
  </Icon>
));
