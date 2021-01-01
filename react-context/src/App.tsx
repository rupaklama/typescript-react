import { useEffect } from 'react';

import './App.css';
import { useStoreContext, IAction} from './context';

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
}

function App(): JSX.Element {
  const { state, dispatch } = useStoreContext();

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    });
  };

  console.log(state);

  const toggleFavAction = (episode: IEpisode): IAction => dispatch({
    type: 'ADD_FAV',
    payload: episode
  })

  return (
    <div className='App'>
      <header className='header'>
        <h1>React Context</h1>
        <p>Typescript</p>
      </header>
      <section className='episode-layout'>
        {state.episodes.map((episode: IEpisode) => (
          <section key={episode.id} className='episode-box'>
            <img
              src={episode.image.medium}
              alt={`Rick and Mort ${episode.name}`}
            />
            <div>{episode.name}</div>
            <section>
              <div>
                Season: {episode.season} Number: {episode.number}
              </div>
              <button type='button' onClick={() => toggleFavAction(episode)}>
                Favorite
              </button>
            </section>
          </section>
        ))}
      </section>
    </div>
  );
}

export default App;
