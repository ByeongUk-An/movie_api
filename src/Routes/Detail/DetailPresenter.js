import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "../../Components/Loading";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
`;
const ImgWrap = styled.div`
  background: ${(props) => props.bgImg} no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  filter: blur(7px);
  background-position: center center;
  position: absolute;
  z-index: 0;
`;
const Content = styled.div`
  width: 25%;
  height: 70%;
  position: absolute;
  z-index: 90;
  left: 15%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10px;
  overflow: hidden;
`;
const CardImage = styled.div`
  width: 100%;
  background: ${(props) => props.bgImage} no-repeat;
  background-size: cover;
  height: 100%;
`;

const TextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 44%;
  transform: translateY(-50%);
  width: 45%;
  height: 70%;
  z-index: 100;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: rgba(2, 2, 2, 0.5);
  border-radius: 10px;
  padding: 50px;
`;
const Title = styled.h2`
  font-size: 62px;
  color: #fff;
  margin-bottom: 20px;
`;
const Descriptionn = styled.p`
  color: #fff;
  font-size: 24px;
  line-height: 1.4;
  margin-bottom: 20px;
`;
const Decorate = styled.span`
  margin-bottom: 20px;
  font-size: 20px;
  color: #fff;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  font-size: 20px;
  color: #fff;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      <ImgWrap
        bgImg={`url(https://image.tmdb.org/t/p/original${result.backdrop_path})`}
      />
      <Content>
        <CardImage
          bgImage={
            result.poster_path
              ? `url(https://image.tmdb.org/t/p/original${result.poster_path})`
              : "#777"
          }
        >
          {result.poster_path ? null : "Image Not Found"}
        </CardImage>
      </Content>
      <TextWrap>
        <Title>
          {result.original_title}
          <Decorate>{result.vote_average}</Decorate>
        </Title>
        <Descriptionn>{result.overview.slice(1, 200)}...</Descriptionn>
        <Info>
          <span>{result.release_date} 개봉</span>{" "}
          <span>Runtime : {result.runtime}분</span>
        </Info>
      </TextWrap>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
