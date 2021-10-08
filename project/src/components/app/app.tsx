import Main from '../main/main';

const FILM_INFO = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  release: 2014,
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
};

function App(): JSX.Element {
  return (
    <Main name={FILM_INFO.name} genre={FILM_INFO.genre} release={FILM_INFO.release} posterImage={FILM_INFO.posterImage} backgroundImage={FILM_INFO.backgroundImage}/>
  );
}

export default App;
