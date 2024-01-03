import { Icon, IconConsumer, icon } from '@/components/icon';

export const AttachIcon = icon(({ ...props }) => (
  <Icon width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <IconConsumer>
      {({ fill = 'white' } = { fill: 'white' }) => (
        <path d="M16 6.102C16 6.72733 15.8889 7.33167 15.6667 7.915C15.4444 8.49833 15.1363 9.00933 14.7421 9.448L9.10692 15.664L8.32704 14.81L13.9623 8.594C14.5828 7.922 14.8931 7.09133 14.8931 6.102C14.8931 5.27133 14.6478 4.583 14.1572 4.037C13.6667 3.491 13.0482 3.218 12.3019 3.218C11.4465 3.218 10.6918 3.568 10.0377 4.268L3.83648 11.114C3.34172 11.6647 3.09434 12.2853 3.09434 12.976C3.09434 13.508 3.24948 13.9443 3.55975 14.285C3.87002 14.6257 4.26415 14.796 4.74214 14.796C5.37107 14.796 5.93291 14.5207 6.42767 13.97L11.1698 8.762C11.6143 8.24867 11.8365 7.796 11.8365 7.404C11.8365 7.208 11.7694 7.054 11.6352 6.942C11.501 6.83 11.3417 6.774 11.1572 6.774C10.7547 6.774 10.3941 6.96067 10.0755 7.334L5.79874 12.038L5.03145 11.184L9.2956 6.48C9.84906 5.864 10.4696 5.556 11.1572 5.556C11.6436 5.556 12.0629 5.72867 12.4151 6.074C12.7673 6.41933 12.9434 6.858 12.9434 7.39C12.9434 8.118 12.6122 8.86 11.9497 9.616L7.20755 14.824C6.50314 15.608 5.68134 16 4.74214 16C3.96226 16 3.31027 15.713 2.78616 15.139C2.26205 14.565 2 13.844 2 12.976C2 11.9493 2.3522 11.044 3.0566 10.26L9.25786 3.414C10.13 2.47133 11.1447 2 12.3019 2C13.3501 2 14.2285 2.392 14.9371 3.176C15.6457 3.96 16 4.93533 16 6.102Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));