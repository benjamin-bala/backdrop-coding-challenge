import {useInfiniteQuery} from 'react-query';
import {useState} from 'react';
import {fetchData} from './fetchdata';

export default function Queries() {
  const [page, setPage] = useState(0);

  const {
    data,
    isSuccess,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
    isRefetching,
  } = useInfiniteQuery('backdrop', fetchData, {
    keepPreviousData: true,
    pageParams: 0,
    getNextPageParam: () => {
      let _count = page + 1;
      let pagecount = 7;

      if (_count <= pagecount) return _count;
      return undefined;
    },
  });

  const handleLoad = () => {
    fetchNextPage();
    let newstart = page + 1;
    setPage(newstart);
  };

  if (isSuccess && !isError) {
    return {
      data,
      isLoading,
      isFetchingNextPage,
      handleLoad,
    };
  }

  return {
    isError,
    isLoading,
    refetch,
    isRefetching,
  };
}
