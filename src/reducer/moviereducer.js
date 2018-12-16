const fav = (state = [], action) => {
    switch (action.type) {
      case "ADD_Fav":
        return [
          ...state,
          {
            id: action.id,
          //  text: action.text,
            complete: false
          }
        ];
  
      /* case "TOGGLE_TODO":
        return state.map(todo =>
          todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
        );
   */
      default:
        return state;
    }
  };
  
  export default fav;
  