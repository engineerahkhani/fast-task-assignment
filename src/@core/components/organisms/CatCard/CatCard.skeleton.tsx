import React from 'react';
import Skeleton from '../../atoms/Skeleton';
import Flex from '../../atoms/Flex';

const CatCardSkeleton = () => {
  return (
    <Flex>
      <Skeleton variant="square" />
    </Flex>
  );
};

export default CatCardSkeleton;
