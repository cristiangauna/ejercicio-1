import React from 'react';
import styled from 'styled-components';
import Playlist from './Playlist';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 20px;
  background-color: #000;
`;

const playlists = [
  { title: 'Playlist Name', artist: 'Artist Name', image: 'url-to-image-1' },
  { title: 'Playlist Name', artist: 'Artist Name', image: 'url-to-image-2' },
  { title: 'Playlist Name', artist: 'Artist Name', image: 'url-to-image-3' },
  { title: 'Playlist Name', artist: 'Artist Name', image: 'url-to-image-4' },
  { title: 'Playlist Name', artist: 'Artist Name', image: 'url-to-image-5' },
  { title: 'Playlist Name', artist: 'Artist Name', image: 'url-to-image-6' },
  { title: 'Playlist Name', artist: 'Artist Name', image: 'url-to-image-7' },

];

function PlaylistContainer() {
  return (
    <Container>
      {playlists.map((playlist, index) => (
        <Playlist
          key={index}
          image={playlist.image}
          title={playlist.title}
          artist={playlist.artist}
        />
      ))}
    </Container>
  );
}

export default PlaylistContainer;