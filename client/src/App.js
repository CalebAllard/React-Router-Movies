import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = (props) => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [ ...savedList, movie,] );
    
  };
  
  return (
    <div>
      <Route render={(props)=> <SavedList list={savedList} {...props}/> } />
      <Route path="/" component={MovieList}exact/>
      <Route path="/movies/:id" render={(props) => <Movie addToSavedList={addToSavedList} {...props} /> }/>

    </div>
  );
};

export default App;
