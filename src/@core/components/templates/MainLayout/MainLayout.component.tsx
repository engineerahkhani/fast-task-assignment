import React from 'react';
import { createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '@core/types/theme';
import Flex from '../../atoms/Flex';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children, ...props }) => {
  const classes = useStyles(props);

  return (
    <Flex className={classes.mainLayoutRoot}>
      <Flex>{children}</Flex>
    </Flex>
  );
};

const useStyles = createUseStyles(({ sizes, colors }: ITheme) => ({
  mainLayoutRoot: {
    padding: sizes.md,
    background: colors.background,
  },
  mainLayoutHeader: {
    paddingBottom: sizes.md,
  },
}));

export default MainLayout;
