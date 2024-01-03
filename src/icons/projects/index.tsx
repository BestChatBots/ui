import { Icon, IconConsumer, icon } from '@/components/icon';

export const ProjectsIcon = icon(({ ...props }) => (
  <Icon width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <IconConsumer>
      {({ fill = 'white' } = { fill: 'white' }) => (
        <path d="M14.3636 3.07692H18V19H2V3.07692H5.63636V4.46154H14.3636V3.07692ZM4.90909 10H15.0909V8.61539H4.90909V10ZM4.90909 15.5385H15.0909V14.1538H4.90909V15.5385ZM7.09091 3.07692V1H12.9091V3.07692H7.09091Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));
