import React from 'react';
import Flex from '@core/components/atoms/Flex';
import Text from '@core/components/atoms/Text';
import { createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '@core/types/theme';

const Home = () => {
  const classes = useStyles();

  return (
    <Flex className={classes.homeRoot}>
      <Text>Home screen</Text>
    </Flex>
  );
};

const useStyles = createUseStyles(({ sizes }: ITheme) => ({
  homeRoot: {
    width: '100%',
    minHeight: 500,
    padding: sizes.md,
  },
}));

export default Home;
