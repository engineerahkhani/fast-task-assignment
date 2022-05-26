import React from 'react';
import { createUseStyles, cnj } from '@core/utils/makeStyle';
import Flex from '../Flex';

export interface FlexComponentProps {
  className?: string;
  variant: 'square';
}

const SkeletonComponent: React.FC<FlexComponentProps> = ({ className }) => {
  const classes = useStyles();

  return <Flex className={cnj(classes.flexComponentRoot, className)} />;
};

const useStyles = createUseStyles({
  flexComponentRoot: {},
});

export default SkeletonComponent;
