import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketSlice';
import missionsSlicereducer from './redux/mission/missionSlice';

export default configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionsSlicereducer,
  },
});
