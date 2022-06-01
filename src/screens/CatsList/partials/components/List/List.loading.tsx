import Flex from '@core/components/atoms/Flex';
import { CardSkeleton } from '@core/components/organisms/CatCard';
import { createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '@core/types/theme';

const skeletonCount = Array.from({ length: 10 }, (v, k) => k + 1);
const CatsListLoading = () => {
  const classes = useStyles();

  return (
    <Flex as="aside" className={classes.catListLoadingRoot}>
      {skeletonCount.map((item) => (
        <CardSkeleton key={item} />
      ))}
    </Flex>
  );
};

const useStyles = createUseStyles(({ sizes }: ITheme) => ({
  catListLoadingRoot: {
    padding: sizes.md,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
}));

export default CatsListLoading;
