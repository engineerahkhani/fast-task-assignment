import React from 'react';
import Flex from '@core/components/atoms/Flex';
import { createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '@core/types/theme';
import Skeleton from '../../atoms/Skeleton';

const skeletonCount = Array.from({ length: 8 }, (v, k) => k + 1);

const SidebarLayoutLoading = () => {
  const classes = useStyles();

  return (
    <Flex as="aside" className={classes.sidebarLayoutLoadingRoot}>
      {skeletonCount.map((item) => (
        <Flex key={item} className={classes.categoryCardSkeletonRoot}>
          <Skeleton className={classes.skeleton} variant="square" />
        </Flex>
      ))}
    </Flex>
  );
};

const useStyles = createUseStyles(({ colors, radii, sizes }: ITheme) => ({
  sidebarLayoutLoadingRoot: {
    padding: sizes.xs,
    background: colors.darkBackground,
    borderRadius: radii.lg,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: sizes.md,
  },
  categoryCardSkeletonRoot: {
    height: 42,
    padding: sizes.sm,
  },
  skeleton: {
    width: '100%',
    minHeight: 42,
  },
}));

export default SidebarLayoutLoading;
