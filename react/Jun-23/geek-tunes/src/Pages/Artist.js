import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArtistInfo from '../Components/ArtistInfo';
import AlbumList from '../Components/AlbumList';
import SongList from '../Components/SongList';
import { napster } from '../util';

const Artist = () => {
  const { artistId } = useParams();
  const navigate = useNavigate();
  const [albumList, setAlbumList] = useState(Array(20).fill(-1));
  const [offsetAlbum, setOffsetAlbum] = useState(0);
  const [showLoadMoreAlbum, setShowLoadMoreAlbum] = useState(true);

  const [tracksList, setTrackList] = useState(Array(20).fill(-1));
  const [offsetTrack, setOffsetTrack] = useState(0);
  const [showLoadMoreTrack, setShowLoadMoreTrack] = useState(true);

  const [artistDetails, setArtistDetails] = useState({});

  useEffect(() => {
    setAlbumList(Array(20).fill(-1));
    setTrackList(Array(20).fill(-1));
    (async _ => {
      try {
        const response = await napster.get(`/artists/${artistId}`);
        const data = response.data.artists[0];
        if (data === undefined) {
          throw new Error("Data is undefined");
        }

        setArtistDetails(data);

        const album_response = await napster.get(`/artists/${artistId}/albums/top?limit=20`);
        setAlbumList(album_response.data.albums);
        setOffsetAlbum(20);

        const tracks_response = await napster.get(`artists/${artistId}/tracks/top?limit=20`);
        setTrackList(tracks_response.data.tracks);
        setOffsetTrack(20);
      } catch (e) {
        navigate('/404');
      }
    })();
  }, [artistId, navigate]);

  const loadMoreAlbums = () => {
    const oldState = albumList;
    setAlbumList(e => [...e, ...(Array(20).fill(-1))]);
    (async _ => {
      const album_response = await napster.get(`/artists/${artistId}/albums/top?limit=20&offset=${offsetAlbum}`);
      if (album_response.data.albums.length === 0) {
        setShowLoadMoreAlbum(false);
      }
      setAlbumList([...oldState, ...album_response.data.albums]);
      setOffsetAlbum(e => e + 20);
    })();
  }

  const loadMoreTracks = () => {
    const oldState = tracksList;
    setTrackList(e => [...e, ...(Array(20).fill(-1))]);
    (async _ => {
      const tracks_response = await napster.get(`/artists/${artistId}/tracks/top?limit=20&offset=${offsetTrack}`);
      if (tracks_response.data.tracks.length === 0) {
        setShowLoadMoreTrack(false);
      }
      setTrackList([...oldState, ...tracks_response.data.tracks]);
      setOffsetTrack(e => e + 20);
    })();
  }

  return (
    <>
      <ArtistInfo artistDetails={artistDetails} />
      <div className="container mx-auto px-4 relative">
        <p className='text-2xl font-semibold mt-4'>Top Albums</p>
        <AlbumList albumList={albumList} loadMore={loadMoreAlbums} showLoadMore={showLoadMoreAlbum} />


        <p className='text-2xl font-semibold mt-6 mb-3'>Top Tracks</p>
        <SongList list={tracksList} loadMore={loadMoreTracks} showLoadMore={showLoadMoreTrack} />

      </div>

    </>
  )
}

export default Artist