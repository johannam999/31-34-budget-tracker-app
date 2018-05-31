import uuid from 'uuid/v4';

export const createAction = ({ name, categoryId, price }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    categoryId,
    price,
    id: uuid(),
    timestamp: new Date(),
  },
});

export const updateAction = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const removeAction = expense => ({
  type: 'EXPENSE_DESTROY',
  payload: expense,
});
