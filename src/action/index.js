let favID = 1;

export const addFav_action = text => ({
  id: favID++,
  type: "ADD_Fav",
  text: text
});