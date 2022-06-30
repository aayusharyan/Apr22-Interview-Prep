import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { napster } from '../util';
import AlbumList from './AlbumList';

const AlbumsTab = () => {
  const { query } = useParams();
  const [albumList, setAlbumList] = useState(Array(20).fill(-1));
  const [offset, setOffset] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if(query == undefined || query == "") {
      setAlbumList([]);
      setShowMore(false);
      return;
    }
    setAlbumList(Array(20).fill(-1));
    setOffset(0);
    (async _ => {
      try {
        const response = await napster.get(`/search?query=${query}&type=album&per_type_limit=20&offset=0`);
        setAlbumList(response.data.search.data.albums);
        setOffset(20);
        setShowMore(true);
      } catch(e) {
        setAlbumList([]);
      }
    })();
  }, [query]);

  const loadMore = () => {
    const oldState = albumList;
    setAlbumList(e => [...e, ...(Array(20).fill(-1))]);
    (async _ => {
      const response = await napster.get(`/search?query=${query}&type=album&per_type_limit=20&offset=${offset}`);
      if (response.data.search.data.albums == 0) {
        setShowMore(false);
      }
      setAlbumList([...oldState, ...response.data.search.data.albums]);
      setOffset(e => e + 20);
    })();
  }

  return (

    <>
      <AlbumList albumList={albumList} horizontal={false} loadMore={loadMore} showLoadMore={showMore}  />
    </>
  )
}

export default AlbumsTab