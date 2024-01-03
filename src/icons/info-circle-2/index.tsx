import { Icon, IconConsumer, icon } from '@/components/icon';

export const InfoCircle2Icon = icon(({ ...props }) => (
  <Icon width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <IconConsumer>
      {({ fill = 'white' } = { fill: 'white' }) => (
        <path d="M8.2125 12.9375H9.7875V8.2125H8.2125V12.9375ZM9 6.6375C9.22312 6.6375 9.41029 6.5619 9.56149 6.4107C9.71269 6.2595 9.78802 6.0726 9.7875 5.85C9.7875 5.62687 9.7119 5.43997 9.5607 5.2893C9.4095 5.13862 9.2226 5.06302 9 5.0625C8.77687 5.0625 8.58997 5.1381 8.4393 5.2893C8.28862 5.4405 8.21302 5.6274 8.2125 5.85C8.2125 6.07312 8.2881 6.26029 8.4393 6.41149C8.5905 6.56269 8.7774 6.63802 9 6.6375ZM9 16.875C7.91062 16.875 6.88687 16.6681 5.92875 16.2544C4.97062 15.8407 4.13719 15.2798 3.42844 14.5716C2.71969 13.8628 2.15872 13.0294 1.74555 12.0712C1.33238 11.1131 1.12552 10.0894 1.125 9C1.125 7.91062 1.33185 6.88687 1.74555 5.92875C2.15925 4.97062 2.72021 4.13719 3.42844 3.42844C4.13719 2.71969 4.97062 2.15872 5.92875 1.74555C6.88687 1.33238 7.91062 1.12552 9 1.125C10.0894 1.125 11.1131 1.33185 12.0712 1.74555C13.0294 2.15925 13.8628 2.72021 14.5716 3.42844C15.2803 4.13719 15.8415 4.97062 16.2552 5.92875C16.6689 6.88687 16.8755 7.91062 16.875 9C16.875 10.0894 16.6681 11.1131 16.2544 12.0712C15.8407 13.0294 15.2798 13.8628 14.5716 14.5716C13.8628 15.2803 13.0294 15.8415 12.0712 16.2552C11.1131 16.6689 10.0894 16.8755 9 16.875Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));