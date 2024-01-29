import { Icon, IconConsumer, icon } from '@/components/icon';

export const PlatformIcon = icon(({ ...props }) => (
  <Icon size={24} viewBox="0 0 24 24" {...props}>
    <IconConsumer>
      {({ fill = '#F25124', stroke = 'white' } = { fill: '#F25124', stroke: 'white' }) => (
        <>
          <g clipPath="url(#clip0_255_7385)">
            <circle cx="12" cy="12" r="12" fill={fill} />
            <path d="M15.052 13.4C15.108 12.938 15.15 12.476 15.15 12C15.15 11.524 15.108 11.062 15.052 10.6H17.418C17.53 11.048 17.6 11.517 17.6 12C17.6 12.483 17.53 12.952 17.418 13.4M13.813 17.292C14.233 16.515 14.555 15.675 14.779 14.8H16.844C16.1658 15.9678 15.0899 16.8524 13.813 17.292ZM13.638 13.4H10.362C10.292 12.938 10.25 12.476 10.25 12C10.25 11.524 10.292 11.055 10.362 10.6H13.638C13.701 11.055 13.75 11.524 13.75 12C13.75 12.476 13.701 12.938 13.638 13.4ZM12 17.572C11.419 16.732 10.95 15.801 10.663 14.8H13.337C13.05 15.801 12.581 16.732 12 17.572ZM9.2 9.2H7.156C7.8272 8.02905 8.90236 7.14304 10.18 6.708C9.76 7.485 9.445 8.325 9.2 9.2ZM7.156 14.8H9.2C9.445 15.675 9.76 16.515 10.18 17.292C8.90504 16.8522 7.83139 15.9674 7.156 14.8ZM6.582 13.4C6.47 12.952 6.4 12.483 6.4 12C6.4 11.517 6.47 11.048 6.582 10.6H8.948C8.892 11.062 8.85 11.524 8.85 12C8.85 12.476 8.892 12.938 8.948 13.4M12 6.421C12.581 7.261 13.05 8.199 13.337 9.2H10.663C10.95 8.199 11.419 7.261 12 6.421ZM16.844 9.2H14.779C14.5599 8.33302 14.2355 7.49613 13.813 6.708C15.101 7.149 16.172 8.038 16.844 9.2ZM12 5C8.129 5 5 8.15 5 12C5 13.8565 5.7375 15.637 7.05025 16.9497C7.70026 17.5998 8.47194 18.1154 9.32122 18.4672C10.1705 18.8189 11.0807 19 12 19C13.8565 19 15.637 18.2625 16.9497 16.9497C18.2625 15.637 19 13.8565 19 12C19 11.0807 18.8189 10.1705 18.4672 9.32122C18.1154 8.47194 17.5998 7.70026 16.9497 7.05025C16.2997 6.40024 15.5281 5.88463 14.6788 5.53284C13.8295 5.18106 12.9193 5 12 5Z" fill={stroke} />
          </g>
          <defs>
            <clipPath id="clip0_255_7385">
              <rect width="24" height="24" rx="12" fill="white" />
            </clipPath>
          </defs>
        </>
      )}
    </IconConsumer>
  </Icon>
));
