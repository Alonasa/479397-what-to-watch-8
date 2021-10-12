import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Error from '../error-404/error';
import MyList from '../my-list/my-list';
import FilmCard from '../film-card/film-card';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';

const isAuthenticated = true;

const FILM_INFO = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  release: 2014,
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main name={FILM_INFO.name} genre={FILM_INFO.genre} release={FILM_INFO.release} posterImage={FILM_INFO.posterImage} backgroundImage={FILM_INFO.backgroundImage}/>
        </Route>
        <Route path="/login">
          <SignIn/>
        </Route>
        <PrivateRoute isAuthenticated={isAuthenticated} authenticationPath={'/login'}>
          <MyList/>
        </PrivateRoute>
        <Route path="/films/:id">
          <FilmCard name={FILM_INFO.name} genre={FILM_INFO.genre} release={FILM_INFO.release} posterImage={FILM_INFO.posterImage} backgroundImage={FILM_INFO.backgroundImage}/>
        </Route>
        <Route path="/films/:id/review">
          <AddReview/>
        </Route>
        <Route path="/player/:id">
          <Player/>
        </Route>
        <Route>
          <Error/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
