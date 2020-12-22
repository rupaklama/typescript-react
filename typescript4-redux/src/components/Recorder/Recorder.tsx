import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../..';
import { start } from '../../actions';

import './Recorder.css';

const Recorder = () => {

  // useDispatch hook to dispatch an action creator
  const dispatch = useDispatch();

  // useSelector hook to get access to recorder state in redux store
  // naming same as our 'recorder' state in combineReducers - key
  // this hook takes an arrow func with arg state & which part of state we want from combineReducers
  // must pass a selector to useSelector
  const recorder = useSelector((state: RootState) => state.recorder);

  const handleClick = () => {
    dispatch(start())
  }

  return (
    <div className="recorder">
      <button onClick={handleClick} className="recorder-record">
        <span></span>
      </button>

      <div className="recorder-counter">00:00:00</div>
      { JSON.stringify(recorder)}
    </div>
  )
}

export default Recorder
