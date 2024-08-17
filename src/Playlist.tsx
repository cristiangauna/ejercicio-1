import React from 'react';
import styled from 'styled-components';

const PlaylistCard = styled.div`
  width: 150px;
  margin: 10px;
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
`;

const PlaylistImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const PlaylistInfo = styled.div`
  padding: 10px;
  color: #fff;
`;

function Playlist({ image, title, artist }) {
  return (
    <PlaylistCard>
      <PlaylistImage src={image} alt={title} />
      <PlaylistInfo>
        <h4>{title}</h4>
        <p>{artist}</p>
      </PlaylistInfo>
    </PlaylistCard>
  );
}

export default Playlist;