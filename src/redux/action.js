export const addtocart = (data) => ({
  type: 'ADD_TO_CART',
  payload: data,
});

export const removefromcart = (data) => ({
  type: 'REMOVE_FROM_CART',
  payload: data,
});

export const checkout = () => ({
  type: 'CHECKOUT',
});
