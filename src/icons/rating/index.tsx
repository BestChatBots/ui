import { Icon, IconConsumer, icon } from '@/components/icon';

export const RatingIcon = icon(({ ...props }) => (
  <Icon width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#F25124' } = { fill: '#F25124' }) => (
        <path d="M18 18V2H14V18H18ZM12 18V7H8V18H12ZM6 18V10H2V18H6Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));
