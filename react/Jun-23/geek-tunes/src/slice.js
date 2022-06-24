import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'geektunes-slice',
  initialState: {
    playingTrack: "",
  },
  reducers: {
    changePlayingTrack(state, action) {
      state.playingTrack = action.payload;
    }
  }
});

export const { changePlayingTrack } = slice.actions;
export default slice.reducer;