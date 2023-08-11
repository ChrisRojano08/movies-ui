import { HashRouter as Routes, Switch, Route } from 'react-router-dom';
import NavBar from './resources/NavBar.jsx';

import HomeComponent from './HomeComponent/component/HomeComponent.jsx';
import MovieComponent from './MovieComponent/component/MovieComponent.jsx';
import SearchSeriesComponent from './SeriesComponent/component/SearchSeriesComponent.jsx';
import SearchMoviesComponent from './MovieComponent/component/SearchMoviesComponent.jsx';
import MoviesGridComponent from './MovieComponent/component/MoviesGridComponent.jsx';
import SeriesGridComponent from './SeriesComponent/component/SeriesGridComponent.jsx';

const App = () => {
  return (
    <Routes>
      <NavBar />
      
      <Switch>
        <Route path="/series" component={SearchSeriesComponent} />
        <Route path="/seriesGrid" component={SeriesGridComponent} />

        <Route path="/movies" component={SearchMoviesComponent} />
        <Route path="/moviesGrid" component={MoviesGridComponent} />
        <Route path="/movieDetails" component={MovieComponent} />
        <Route path="/" component={HomeComponent} />
      </Switch>
    </Routes>
  )
}

export default App
