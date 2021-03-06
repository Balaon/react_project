import React from 'react'
import { useSelector } from "react-redux";
import * as PropTypes from 'prop-types';
import MovieCard from '../components/movieCard'
import NavBar from '../components/navbar/navbar'
import Searching from '../components/searching/searching'
import Filters from '../components/filters/filters'
import { 
    Col, 
    Row } from 'reactstrap';


function RootPage() {

    const moviesListRedux = useSelector((store) => (store.app.movies || []));

    const renderCard = ()=>{

        const moviesList =  moviesListRedux;

        if (moviesList.length === 0){
         return null;
        }

        return moviesList.map((item) => {
    
          const {
            id,
            name = "",
            url = "",
            summary= "", 
            premiered= "",
            image = {},
          } = item.show || {};
         
          
          return <MovieCard
                  key={ id }
                  id={ id }
                  name={ name }
                  url={ url }
                  image={ image.medium }
                  summary={ summary }
                  premiered={ premiered }
                />; 
        });   
    }
    const styles =  { display: "flex", flexWrap: "wrap", justifyContent: "space-between" };
    
    return (
      <>
        <NavBar />
        <br/>
        <Searching />
        <br/>
        <Filters />
        <br/>

        <Row>
            <Col sm="12">
              <div style={ styles }>
                { 
                  renderCard()
                } 
              </div>
            </Col>
        </Row>
        </>
    )
}

RootPage.propTypes = {
    moviesList: PropTypes.array,
}

RootPage.defaultTypes = {
    moviesList: [],
}
export default RootPage;