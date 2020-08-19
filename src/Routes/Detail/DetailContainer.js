import React from "react";
import DetailPresenter from "./DetailPresenter";
import getMovieApi from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const changId = parseInt(id);
    if (isNaN(changId)) {
      return push("/");
    }
    let result = null;
    try {
      const request = await getMovieApi.detail(changId);
      result = request.data;

      // other data
    } catch {
      this.setState({
        error: "This Fucking Error",
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
