import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { napster } from '../util';
import ArtistList from './ArtistList';

const ArtistsTab = () => {
  const { query } = useParams();
  const [artistList, setArtistList] = useState(Array(20).fill(-1));
  const [offset, setOffset] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if(query == undefined || query == "") {
      setArtistList([]);
      setShowMore(false);
      return;
    }
    setArtistList(Array(20).fill(-1));
    setOffset(0);
    (async _ => {
      try {
        const response = await napster.get(`/search?query=${query}&type=artist&per_type_limit=20&offset=0`);
        setArtistList(response.data.search.data.artists);
        setOffset(20);
        setShowMore(true);
      } catch(e) {
        setArtistList([]);
      }
    })();
  }, [query]);

  const loadMore = () => {
    const oldState = artistList;
    setArtistList(e => [...e, ...(Array(20).fill(-1))]);
    (async _ => {
      const response = await napster.get(`/search?query=${query}&type=artist&per_type_limit=20&offset=${offset}`);
      if (response.data.search.data.artists == 0) {
        setShowMore(false);
      }
      setArtistList([...oldState, ...response.data.search.data.artists]);
      setOffset(e => e + 20);
    })();
  }

  return (
    <>
      <ArtistList list={artistList} loadMore={loadMore} showLoadMore={showMore} horizontal={false}/>
    </>
  )
}

export default ArtistsTab