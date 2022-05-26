import Flex from '@core/components/atoms/Flex';
import { CardSkeleton } from '@core/components/organisms/CatCard';

const CatsList = () => {
  return (
    <Flex>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </Flex>
  );
};

export default CatsList;
