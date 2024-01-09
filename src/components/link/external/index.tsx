import React from 'react';
import { Link, LinkProps } from '@/components/link';
import { LinkOutIcon } from '@/icons';

export type ExternalLinkProps = LinkProps;

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  ...props
}) => (
  <Link
    endIcon={<LinkOutIcon />}
    {...props}
  />
);
