const movie = (state = 'all', action) => {
    switch (action.type) {
      case 'SET_All':
        return action.filter
      default:
        return state
    }
  }

  export default movie