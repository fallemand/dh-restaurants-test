const actions = {
  increment: amount => ({
    type: 'INCREMENT',
    amount,
  }),
  decrement: amount => ({
    type: 'DECREMENT',
    amount,
  }),
};

export default actions;
