import { Icon, IconConsumer, icon } from '@/components/icon';

export const FilterIcon = icon(({ ...props }) => (
  <Icon width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <IconConsumer>
      {({ fill = 'white' } = { fill: 'white' }) => (
        <path d="M1.125 2.25H16.875V4.5L10.125 10.125V18L7.875 15.75V10.125L1.125 4.5V2.25ZM1.125 0H16.875V1.125H1.125V0Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));
