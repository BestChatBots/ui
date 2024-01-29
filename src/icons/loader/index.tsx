import { Icon, IconConsumer, icon } from '@/components/icon';

export const LoaderIcon = icon(({ ...props }) => (
  <Icon size={18} viewBox="0 0 18 18" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#248FF2' } = { fill: '#248FF2' }) => (
        <>
          <circle cx="9" cy="9" r="7" stroke="#3A4B62" strokeWidth="4" />
          <path d="M13.6022 14.2744C12.7349 15.0313 11.6942 15.5625 10.5725 15.8211C9.45073 16.0797 8.28254 16.0576 7.17135 15.7569C6.06017 15.4562 5.0403 14.8861 4.20208 14.0971C3.36387 13.308 2.73318 12.3245 2.36588 11.2335C1.99858 10.1425 1.90601 8.97776 2.09637 7.84245C2.28673 6.70714 2.75414 5.6363 3.45721 4.72479C4.16027 3.81327 5.07728 3.08921 6.12701 2.61674C7.17675 2.14428 8.3268 1.93799 9.4753 2.01616" stroke="url(#paint0_linear_251_2906)" strokeWidth="4">
            <animateTransform 
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 9 9"
              to="360 9 9"
              dur="1.35s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="paint0_linear_251_2906" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
              <stop offset="0.191528" stopColor={fill} />
              <stop offset="0.791937" stopColor={fill} stopOpacity="0" />
            </linearGradient>
          </defs>
        </>
      )}
    </IconConsumer>
  </Icon>
));
