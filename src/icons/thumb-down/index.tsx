import { Icon, IconConsumer, icon } from '@/components/icon';

export const ThumbDownIcon = icon(({ ...props }) => (
  <Icon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <IconConsumer>
      {({ fill = 'white' } = { fill: 'white' }) => (
        <path d="M17.462 3.99999H7.654V15L13.924 21.192L14.365 20.75C14.4563 20.6587 14.533 20.542 14.595 20.4C14.657 20.258 14.688 20.1273 14.688 20.008V19.85L13.665 15H20.385C20.803 15 21.1763 14.8353 21.505 14.506C21.835 14.1767 22 13.803 22 13.385V12.154C22 12.0627 21.9907 11.9633 21.972 11.856C21.9533 11.748 21.9253 11.6487 21.888 11.558L19.158 5.08499C19.0207 4.77699 18.7897 4.51932 18.465 4.31199C18.141 4.10399 17.8067 3.99999 17.462 3.99999ZM6.654 15V3.99999H3V15H6.654Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));
