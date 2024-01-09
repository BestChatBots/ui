import { Icon, IconConsumer, icon } from '@/components/icon';

export const ErrorIcon = icon(({ ...props }) => (
  <Icon width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#F72525' } = { fill: '#F72525' }) => (
        <path d="M12.2949 2.2051C12.23 2.13997 12.1529 2.08832 12.0679 2.05312C11.983 2.01792 11.8919 1.99987 11.8 2H6.2C6.10806 1.99987 6.017 2.01792 5.93207 2.05312C5.84713 2.08832 5.76999 2.13997 5.7051 2.2051L2.2051 5.7051C2.13997 5.76999 2.08832 5.84713 2.05312 5.93207C2.01792 6.017 1.99987 6.10806 2 6.2V11.8C2 11.9862 2.0735 12.164 2.2051 12.2949L5.7051 15.7949C5.76999 15.86 5.84713 15.9117 5.93207 15.9469C6.017 15.9821 6.10806 16.0001 6.2 16H11.8C11.9862 16 12.164 15.9265 12.2949 15.7949L15.7949 12.2949C15.86 12.23 15.9117 12.1529 15.9469 12.0679C15.9821 11.983 16.0001 11.8919 16 11.8V6.2C16.0001 6.10806 15.9821 6.017 15.9469 5.93207C15.9117 5.84713 15.86 5.76999 15.7949 5.7051L12.2949 2.2051ZM9.7 12.5H8.3V11.1H9.7V12.5ZM9.7 9.7H8.3V5.5H9.7V9.7Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));