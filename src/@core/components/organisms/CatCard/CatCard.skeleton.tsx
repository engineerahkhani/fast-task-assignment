import React from 'react';
import Skeleton from '../../atoms/Skeleton';
import Flex from '../../atoms/Flex';
import { createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '@core/types/theme';

const CatCardSkeleton = () => {
  const classes = useStyles();
  return (
    <Flex className={classes.catCardSkeletonRoot}>
      <Skeleton className={classes.skeleton} variant="square" />
    </Flex>
  );
};

const useStyles = createUseStyles(({ media, radii, sizes }: ITheme) => ({
  catCardSkeletonRoot: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '50%',
    borderRadius: radii.sm,
    overflow: 'hidden',
    padding: sizes.sm,
    height: 150,
  },
  skeleton: {
    width: '100%',
    height: 250,
  },
  [media.tablet]: {
    catCardSkeletonRoot: {
      flexBasis: '33.33%',
      height: 250,
    },
  },
  [media.desktop]: {
    catCardSkeletonRoot: {
      flexBasis: '25%',
    },
  },
}));

export default CatCardSkeleton;
