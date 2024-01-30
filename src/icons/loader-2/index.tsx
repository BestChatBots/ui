import { Icon, IconConsumer, icon } from '@/components/icon';

export const Loader2Icon = icon(({ ...props }) => (
  <Icon size={20} viewBox="0 0 20 20" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#F25124' } = { fill: '#F25124' }) => (
        <>
          <circle cx="10" cy="10" r="8.5" stroke="#3A4B62" strokeWidth="3" />
          <path d="M15.5884 16.4046C14.5352 17.3237 13.2715 17.9688 11.9094 18.2828C10.5473 18.5968 9.12879 18.57 7.7795 18.2048C6.43021 17.8397 5.19179 17.1474 4.17396 16.1893C3.15613 15.2312 2.39029 14.0369 1.94428 12.7121C1.49828 11.3873 1.38587 9.973 1.61702 8.59441C1.84817 7.21582 2.41575 5.91551 3.26947 4.80867C4.12319 3.70183 5.2367 2.82261 6.51138 2.2489C7.78605 1.6752 9.18254 1.4247 10.5771 1.51962" stroke={fill} strokeWidth="3">
            <animateTransform 
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 10 10"
              to="360 10 10"
              dur="1.35s"
              repeatCount="indefinite"
            />
          </path>
        </>
      )}
    </IconConsumer>
  </Icon>
));
