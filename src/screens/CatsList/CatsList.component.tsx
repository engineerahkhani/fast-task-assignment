import Flex from '@core/components/atoms/Flex';
import List from './partials/components/List';
import LoadMore from './partials/components/LoadMore';
import useGetCats from '@core/hooks/api-hooks/useGetCats';

const CatsList = () => {
  const { data, isLoading, isError, hasNextPage, loadMore, isLoadingNextPage } =
    useGetCats();

  return (
    <Flex>
      <List list={data} isLoading={isLoading} isError={isError} />
      {hasNextPage && (
        <LoadMore disabled={isLoadingNextPage} onClick={loadMore} />
      )}
    </Flex>
  );
};

export default CatsList;
