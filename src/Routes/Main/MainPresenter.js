import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Container from "../../Components/Container";
import Loading from "../../Components/Loading";
import Alert from "../../Components/Alert";
import ImageBox from "../../Components/ImageBox";

const Wrapper = styled.div`
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  overflow: hidden;
  overflow-x: auto;
`;

const MainPresenter = ({
  latest,
  nowPlaying,
  popular,
  topRated,
  upcomming,
  error,
  loading,
}) =>
  loading ? (
    <Loading />
  ) : (
    <Wrapper>
      {latest && latest.length > 0 && (
        <Container title="Latest Movie">
          {latest.map((movie) => (
            <ImageBox
              id={movie.id}
              title={movie.original_title}
              key={movie.id}
              popularity={movie.vote_average}
              openday={movie.release_date}
              imgurl={movie.poster_path}
            />
          ))}
        </Container>
      )}
      {nowPlaying && nowPlaying.length > 0 && (
        <Container title="NowPlaying Moive">
          {nowPlaying.map((movie) => (
            <ImageBox
              id={movie.id}
              title={movie.original_title}
              key={movie.id}
              popularity={movie.vote_average}
              openday={movie.release_date}
              imgurl={movie.poster_path}
            />
          ))}
        </Container>
      )}
      {popular && popular.length > 0 && (
        <Container title="Popular Movie">
          {popular.map((movie) => (
            <ImageBox
              id={movie.id}
              title={movie.original_title}
              key={movie.id}
              popularity={movie.vote_average}
              openday={movie.release_date}
              imgurl={movie.poster_path}
            />
          ))}
        </Container>
      )}
      {topRated && topRated.length > 0 && (
        <Container title="TopRated Movie">
          {topRated.map((movie) => (
            <ImageBox
              id={movie.id}
              title={movie.original_title}
              key={movie.id}
              popularity={movie.vote_average}
              openday={movie.release_date}
              imgurl={movie.poster_path}
            />
          ))}
        </Container>
      )}
      {upcomming && upcomming.length > 0 && (
        <Container title="upComming Movie">
          {upcomming.map((movie) => (
            <ImageBox
              id={movie.id}
              title={movie.original_title}
              key={movie.id}
              popularity={movie.vote_average}
              openday={movie.release_date}
              imgurl={movie.poster_path}
            />
          ))}
        </Container>
      )}
      {error && <Alert color="#F44336" text={error} />}
    </Wrapper>
  );

MainPresenter.propTypes = {
  latest: PropTypes.array,
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  upcomming: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default MainPresenter;
