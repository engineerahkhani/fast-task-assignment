import React from 'react';
import Flex from '../../atoms/Flex';
import Image from '../../atoms/Image';
import { ICat } from '../../../types';
import { createUseStyles } from '@core/utils/makeStyle';

interface IMovieCardProps {
  data: ICat;
}

const CatCard: React.FC<IMovieCardProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Flex className={classes.cardComponentRoot}>
      <Image src={data.url} />
    </Flex>
  );
};
const useStyles = createUseStyles({
  cardComponentRoot: {
    width: 'auto',
    border: [1, 'solid', 'green'],
  },
});
export default CatCard;
