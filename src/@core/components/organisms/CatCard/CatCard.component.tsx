import React from 'react';
import Image from '../../atoms/Image';
import { ICat } from '../../../types';
import { createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '../../../types/theme';
import Flex from '../../atoms/Flex';

interface IMovieCardProps {
  data: ICat;
}

const CatCard: React.FC<IMovieCardProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Flex className={classes.cardComponentRoot}>
      <Image className={classes.cardImage} src={data.url} />
    </Flex>
  );
};
const useStyles = createUseStyles(({ media, sizes, radii }: ITheme) => ({
  cardComponentRoot: {
    display: 'flex',
    flexGrow: 0,
    flexBasis: '50%',
    flexShrink: 0,
    borderRadius: radii.sm,
    overflow: 'hidden',
    padding: sizes.xs,
    height: 150,
  },
  cardImage: {
    height: 'auto',
    minWidth: '100%',
    borderRadius: radii.sm,
    overflow: 'hidden',
    objectFit: 'cover',
  },
  [media.tablet]: {
    cardComponentRoot: {
      flexBasis: '33.33%',
      height: 300,
      padding: sizes.sm,
    },
  },
  [media.desktop]: {
    cardComponentRoot: {
      flexBasis: '25%',
    },
  },
}));
export default CatCard;
