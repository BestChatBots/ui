import { SVGMotionProps, motion } from 'framer-motion';
import {
  Icon, IconConsumer, icon 
} from '@/components/icon';
import { useHeader } from '../../../context';

export const HeaderMenuToggleIconLine: React.FC<SVGMotionProps<SVGPathElement>> = (props) => (
  <IconConsumer>
    {({ fill = 'white' } = { fill: 'white' }) => (
      <motion.path stroke={fill} strokeWidth="2" strokeLinecap="round" {...props} />
    )}
  </IconConsumer>
);

export const HeaderMenuToggleIcon = icon(({ ...props }) => {
  const { isMenuOpen } = useHeader();

  return (
    <Icon
      {...props}
      viewBox="0 0 18 18"
      initial={isMenuOpen ? 'open' : 'close'}
      animate={isMenuOpen ? 'open' : 'close'}
    >
      <HeaderMenuToggleIconLine
        variants={{
          open: { d: 'M3 2.5L15 14.5' },
          close: { d: 'M2 4.5L16 4.5' }
        }}
        transition={{
          duration: 0.15
        }}
      />
      <HeaderMenuToggleIconLine
        d="M2 8.5L16 8.5"
        variants={{
          open: { opacity: 0 },
          close: { opacity: 1 }
        }}
        transition={{
          duration: 0.075
        }}
      />
      <HeaderMenuToggleIconLine
        variants={{
          open: { d: 'M3 14.5L15 2.5' },
          close: { d: 'M2 12.5L16 12.5' }
        }}
        transition={{
          duration: 0.15
        }}
      />
    </Icon>
  );
});
