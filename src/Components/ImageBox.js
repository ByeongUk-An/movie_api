import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 220px;
  height: auto;
  margin-bottom: 40px;
  margin-right: 40px;
`;
const ImgItem = styled.div`
  background: ${(props) => props.bgImg};
  width: 220px;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
`;
const TextWrap = styled.div`
  font-weight: 700;
  line-height: 1.4;
`;
const Title = styled.p`
  text-align: center;
  font-size: 20px;
`;
const OpennDay = styled.p`
  text-align: start;
`;
const Popularity = styled.p`
  text-align: end;
`;

const ImageBox = ({ id, popularity, imgurl, title, openday }) => (
  <Link to={`/movie/${id}`}>
    <Container>
      <ImgItem
        bgImg={
          imgurl
            ? `url(https://image.tmdb.org/t/p/w220_and_h330_face${imgurl})`
            : "#777"
        }
      >
        {imgurl ? null : "Not Found Image"}
      </ImgItem>
      <TextWrap>
        <OpennDay>{openday}</OpennDay>
        <Title>{title}</Title>
        <Popularity>⭐️ {popularity} / 10</Popularity>
      </TextWrap>
    </Container>
  </Link>
);

ImageBox.propTypes = {
  id: PropTypes.number.isRequired,
  popularity: PropTypes.number,
  imgurl: PropTypes.string,
  openday: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ImageBox;
