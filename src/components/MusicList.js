import React from 'react';

const MusicList = (props) => {
  console.log(props.songs);
  if(props.songs.length === 0) return null;
  const options = props.songs.map((song) => {
    return <h3>{song['im:artist'].label}</h3>
  })

  return (
    <div>

      <ul>
          {options}
      </ul>

    </div>
  );
}

export default MusicList;
