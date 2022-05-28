import React from 'react';
import { createUseStyles, cnj } from '@core/utils/makeStyle';
import Flex from '../Flex';
import { ITheme } from '../../../types/theme';

export interface FlexComponentProps {
  className?: string;
  variant: 'square';
}

const SkeletonComponent: React.FC<FlexComponentProps> = ({ className }) => {
  const classes = useStyles();

  return <Flex className={cnj(classes.skeletonComponentRoot, className)} />;
};

const useStyles = createUseStyles(({ colors }: ITheme) => ({
  '@keyframes loader': {
    '0%': { opacity: 0 },
    '100%': { opacity: '100%' },
  },
  skeletonComponentRoot: {
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: colors.background,
    position: 'relative',
    overflow: 'hidden',

    '&::after': {
      animationName: '$loader',
      animationDuration: '1000ms',
      animationDirection: 'alternate',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
      backgroundColor: colors.darkBackground,
      borderRadius: 'inherit',
      bottom: 0,
      content: '""',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
  },
}));

export default SkeletonComponent;
