import { Icon, IconConsumer, icon } from '@/components/icon';

export const WarningIcon = icon(({ ...props }) => (
  <Icon width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#FFB038' } = { fill: '#FFB038' }) => (
        <path d="M16.7288 14.0163L14.6083 10.3996C13.9685 9.30932 12.9234 7.5247 12.2847 6.43447L10.1631 2.81768C9.52321 1.72744 8.47813 1.72744 7.8394 2.81768L5.71836 6.43502L3.39301 10.4001L1.27309 14.0169C0.633244 15.1082 1.15691 16 2.43492 16H15.5642C16.8439 16 17.3659 15.1082 16.7277 14.0169L16.7288 14.0163ZM9.60628 14.5764H8.34904V13.3878H9.60628V14.5764ZM9.54623 12.5109H8.41077L8.29852 7.42242H9.64894L9.54679 12.5109H9.54623Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));
