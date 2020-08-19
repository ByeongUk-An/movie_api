import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loading from "../../Components/Loading";
import Container from "../../Components/Container";
import Alert from "../../Components/Alert";
import ImageBox from "../../Components/ImageBox";

const FormWrapper = styled.div`
  padding: 80px;
  margin-top: 30px;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 1px solid #000;
  font-size: 24px;
`;

const SearchPresenter = ({
  searchResult,
  searchTerm,
  error,
  loading,
  controllSubmit,
  changeTerm,
}) => (
  <FormWrapper>
    <Form onSubmit={controllSubmit}>
      <Input
        placeholder="Search Movie Plz..."
        value={searchTerm}
        onChange={changeTerm}
      />
    </Form>
    {loading ? (
      <Loading />
    ) : (
      <>
        {searchResult && searchResult.length > 0 && (
          <Container title="Search Result">
            {searchResult.map((movie) => (
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

        {error && <Alert color="#f44336" text={error} />}
        {searchResult && searchResult.length === 0 && (
          <Alert color="#03A8F4" text="Result Not Found" />
        )}
      </>
    )}
  </FormWrapper>
);

SearchPresenter.propTypes = {
  searchResult: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  controllSubmit: PropTypes.func.isRequired,
  changTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
