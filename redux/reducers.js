// reducers.js

const initialState = {
  selectedChannel: {
    title: '',
    channelNumber: '',
    url: '',
  },
  isPlaying: false,
};

const radioReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_CHANNEL':
      return {
        ...state,
        selectedChannel: action.payload,
      };
    case 'PLAY_RADIO':
      return {
        ...state,
        isPlaying: true,
      };
    case 'STOP_RADIO':
      return {
        ...state,
        isPlaying: false,
      };
    default:
      return state;
  }
};

export default radioReducer;
