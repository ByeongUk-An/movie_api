// 데이터를 전달해준다.
import React from 'react';
import MainPresenter from "./MainPresenter";
import getMovieApi from 'api';

export default class extends React.Component {
    state = {
        latest: null,
        nowPlaying: null,
        popular: null,
        topRated: null,
        upcomming: null,
        error: null,
        loading: true
    };

    async componentDidMount(){
       try {
           const {data: {results: latest}} = await getMovieApi.latest();
           const {data: {results: nowPlaying}} = await getMovieApi.nowPlaying();
           const {data: {results: popular}} = await getMovieApi.popular();
           const {data: {results: topRated}} = await getMovieApi.topRated();
           const {data: {results: upcomming}} = await getMovieApi.upcomming();
           this.setState({
               latest,
               nowPlaying,
               popular,
               topRated,
               upcomming
           });
       }catch{
           this.setState({
               error: "결과가 없습니다."
           });
       } finally {
           this.setState({
               loading: false
           });
       }
    }

    render() {
        const {latest,nowPlaying,popular,topRated,upcomming,error,loading} = this.state;
        return(
            <MainPresenter latest={latest} nowPlaying={nowPlaying} popular={popular} topRated={topRated} upcomming={upcomming} error={error} loading={loading} />
            )
    }
}