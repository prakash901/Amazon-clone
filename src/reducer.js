export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      //update the user when logged in
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //Loing for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
      break;

    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket

      //cloned the basket
      let newBasket = [...state.basket];

      //check to see if proudct exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket, remot it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id: ${action.id}) as its not in basket`
        );
      }
      return { ...state, basket: newBasket };
      break;

    default:
      return state;
  }
};

export default reducer;
