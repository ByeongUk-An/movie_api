import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrap = styled.section`
  :not(:last-child) {
    margin-bottom: 40px;
  }
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  padding-top: 70px;
  margin-bottom: 20px;
`;

const Carditem = styled.div`
  display: flex;
  height: 400px;
`;

const Container = ({ children, title }) => (
  <Wrap>
    <Title>{title}</Title>
    <Carditem>{children}</Carditem>
  </Wrap>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Container;
