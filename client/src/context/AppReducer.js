export default (state, action) => {
  switch (action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload
          .map(transaction => ({
            ...transaction,
            date: new Date(transaction.date),
          }))
          .sort((a, b) => b.date - a.date),
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction._id !== action.payload
        ),
      };
    case 'UPDATE_TRANSACTION':
      return {
        ...state,
        transactions: [
          ...state.transactions.filter(
            transaction => transaction._id !== action.payload._id
          ),
          action.payload,
        ]
          .map(transaction => ({
            ...transaction,
            date: new Date(transaction.date),
          }))
          .sort((a, b) => b.date - a.date),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
          .map(transaction => ({
            ...transaction,
            date: new Date(transaction.date),
          }))
          .sort((a, b) => b.date - a.date),
      };
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
