import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getDiscography } from "../redux";
import styled from 'styled-components';

const StyledAlbum = styled.div`
width: 100%;
padding: 10px;
box-sizing: border-box;
background: blueviolet;
`
const StyledAlbumTitle = styled.h2`
display: block;
padding: 10px;
margin: 0 auto;
text-align: center;
font-size: 30px;
color: yellow;
`
const StyledAlbumArtist = styled.div`
display: block;
padding: 10px;
margin: 0 auto;
margin-bottom: 20px;
text-align: center;
font-size: 30px;
color: yellowgreen;
`
const StyledAlbumAlbumCountry = styled.span`
display: block;
padding: 10px;
margin: 0 auto;
margin-bottom: 20px;
text-align: center;
font-size: 30px;
color: yellowgreen;
`
const StyledTracklist = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
box-sizing: border-box;
`
const StyledCountry = styled.div`
width: 700px;
`
const StyledCountryImage = styled.img`
display: block;
width: 600px;
height: 600px;
margin: 0 auto;
border: 10px white solid;
`
const StyledAlbumYear = styled.p`
width: 100 %;
margin: 5px;
text-align: center;
font-size: 40px;
color: yellow;
`
const StyledAlbumTracklist = styled.div`
min-width: 400px;
flex-grow: 10;
`
const StyledTracklistTitle = styled.div`
display: block;
margin-bottom: 20px;
color: yellow;
text-transform: uppercase;
font-size: 25px;
`
const StyledAlbumTracklistItem = styled.li`
margin: 5px 0;
font-size: 18px;
color: yellowgreen;
list-style-type: none;
`
const StyledArtistTitle = styled.p`
margin-top: 40px;
margin-bottom: 20px;
font-size: 25px;
color: yellow;
text-transform: uppercase;
`
const StyledArtistItem = styled.li`
list-style-type: none;
margin: 5px 0;
color: yellowgreen;
font-size: 18px;
`
const StyledReviewsTitle = styled.p`
margin-left: 40px;
text-transform: uppercase;
color: yellow;
font-size: 35px;
`
const StyledReview = styled.li`
display: block;
padding-bottom: 15px;
margin-left: 40px;
margin-top: 10px;
margin-bottom: 10px;
list-style-type: none;
`
const StyledReviewTitle = styled.h4`
font-size: 25px;
color: orangered;
`
const StyledReviewText = styled.h4`
font-size: 20px;
color: orange;
`

function Pagination({ bandName, album, getDiscography, based }) {
  const base = based.filter(x => (x.bandName === bandName)).filter(x => (x.title === album));
  const { title, group, image, year, country, tracklist, artists, reviews } = base[0];
  return (
    <StyledAlbum>
      <StyledAlbumTitle>{title}</StyledAlbumTitle>
      <StyledAlbumArtist>
        <Link to="/discography" className="artist__link" onClick={() => getDiscography(bandName)}>
          <p>{group}<StyledAlbumAlbumCountry>({country})</StyledAlbumAlbumCountry></p>
        </Link>
      </StyledAlbumArtist>
      <StyledTracklist>
        <StyledCountry>
          <StyledCountryImage src={image} alt={title} />
          <StyledAlbumYear>{year}</StyledAlbumYear>
        </StyledCountry>
        <StyledAlbumTracklist>
          <StyledTracklistTitle>Tracklist</StyledTracklistTitle>
          <ul>
            {tracklist.map(track => (
              <StyledAlbumTracklistItem key={track.id} >
                {track.id} - {track.trackName} - {track.duration}
              </StyledAlbumTracklistItem>)
            )}
          </ul>
          <StyledArtistTitle>Artists</StyledArtistTitle>
          <ul>
            {artists.map(artist => (
              <StyledArtistItem key={artist.name} >
                {artist.name} - {artist.role}
              </StyledArtistItem>)
            )}
          </ul>
        </StyledAlbumTracklist>
      </StyledTracklist>
      <StyledReviewsTitle>Reviews</StyledReviewsTitle>
      <ul>
        {reviews.map(review => (
          <StyledReview key={review.author} >
            <StyledReviewTitle>{review.author}</StyledReviewTitle>
            <StyledReviewText>{review.text}</StyledReviewText>
          </StyledReview>)
        )}
      </ul>
    </StyledAlbum>
  )
}

const mapStateToProps = (state) => {
  return {
    bandName: state.stoner.bandName,
    album: state.stoner.album,
    based: state.stoner.based,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDiscography: (bandName) => dispatch(getDiscography(bandName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);