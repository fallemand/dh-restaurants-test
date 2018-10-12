const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return {
      value: state.value + 1,
    };
  }
  if (action.type === 'DECREMENT') {
    return {
      value: state.value - 1,
    };
  }
  return state;
};

export default reducer;
