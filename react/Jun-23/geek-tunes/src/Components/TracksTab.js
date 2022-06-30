import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { napster } from '../util';
import SongList from './SongList';

const TracksTab = () => {
  const { query } = useParams();
  const [trackList, setTrackList] = useState(Array(20).fill(-1));
  const [offset, setOffset] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if(query == undefined || query == "") {
      setTrackList([]);
      return;
    }
    setTrackList(Array(20).fill(-1));
    setOffset(0);
    (async _ => {
      try {
        const response = await napster.get(`/search?query=${query}&type=track&per_type_limit=20&offset=0`);
        // setTrackList(response.data.tracks);
        setTrackList(response.data.search.data.tracks);
        setOffset(20);
        setShowMore(true);
      } catch(e) {
        setTrackList([]);
      }
    })();
  }, [query]);

  const loadMore = () => {
    const oldState = trackList;
    setTrackList(e => [...e, ...(Array(20).fill(-1))]);
    (async _ => {
      const response = await napster.get(`/search?query=${query}&type=track&per_type_limit=20&offset=${offset}`);
      if (response.data.search.data.tracks == 0) {
        setShowMore(false);
      }
      setTrackList([...oldState, ...response.data.search.data.tracks]);
      setOffset(e => e + 20);
    })();
  }

  return (
    <>
      <SongList list={trackList} loadMore={loadMore} showLoadMore={showMore} showImages={true} />
    </>
  )
}

export default TracksTab