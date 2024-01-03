import { Icon, IconConsumer, icon } from '@/components/icon';

export const LangIcon = icon(({ ...props }) => (
  <Icon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <IconConsumer>
      {({ fill = 'white' } = { fill: 'white' }) => (
        <>
          <g clipPath="url(#clip0_96_8966)">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.85008 17.5009C9.75002 20.3827 11.1251 22.7092 11.9951 24C12.8651 22.7092 14.24 20.3827 15.14 17.5009H8.85008Z" fill={fill} />
            <path fillRule="evenodd" clipRule="evenodd" d="M15.1449 6.49407C14.245 3.61727 12.87 1.29081 12 0C11.13 1.29081 9.75496 3.61727 8.85496 6.49407H15.1449Z" fill={fill} />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.0299 11.9975C16.0299 10.7867 15.8899 9.61093 15.6599 8.49528H8.33483C8.10483 9.61093 7.96483 10.7867 7.96483 11.9975C7.96483 13.2083 8.10483 14.384 8.33483 15.4996H15.6599C15.8899 14.384 16.0299 13.2083 16.0299 11.9975Z" fill={fill} />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.24 6.49411H22.6649C21.0449 3.35715 18.0849 1.03069 14.54 0.265213C15.46 1.82119 16.53 3.97253 17.24 6.49411Z" fill={fill} />
            <path fillRule="evenodd" clipRule="evenodd" d="M23.48 15.4996C23.8151 14.394 24 13.2183 24 11.9975C24 10.7767 23.8151 9.60093 23.48 8.49528H17.7051C17.91 9.616 18.03 10.7867 18.03 11.9975C18.03 13.2083 17.91 14.3789 17.7051 15.4996H23.48Z" fill={fill} />
            <path fillRule="evenodd" clipRule="evenodd" d="M6.75995 17.5009H1.33496C2.95496 20.6379 5.91495 22.9693 9.45989 23.7348C8.53995 22.1788 7.46995 20.0275 6.75995 17.5009Z" fill={fill} />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.24 17.5009C16.53 20.0275 15.46 22.1788 14.54 23.7348C18.0849 22.9693 21.0449 20.6379 22.6649 17.5009H17.24Z" fill={fill} />
            <path fillRule="evenodd" clipRule="evenodd" d="M6.75995 6.49411C7.46995 3.96753 8.53995 1.81619 9.45989 0.265213C5.91495 1.03069 2.95496 3.35715 1.33496 6.49411H6.75995Z" fill={fill} />
            <path fillRule="evenodd" clipRule="evenodd" d="M0.519999 8.49528C0.185 9.606 0 10.7817 0 11.9975C0 13.2132 0.185 14.3889 0.519999 15.4996H6.29499C6.08999 14.3789 5.96999 13.2083 5.96999 11.9975C5.96999 10.7867 6.08999 9.616 6.29499 8.49528H0.519999Z" fill={fill} />
          </g>
          <defs>
            <clipPath id="clip0_96_8966">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </>
      )}
    </IconConsumer>
  </Icon>
));
