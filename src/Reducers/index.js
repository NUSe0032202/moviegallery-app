const initialState = {
    query: {type: "Filter By", payload: ""},
    search: {type: "Search By", payload: ""}
};
function filterReducer(state= initialState,action) {
    if(action.type === "Filter By") {
       state.query =Object.assign({},state,{query: {type:"Filter By",payload:action.payload}});
       return state.query;
    }
    if(action.type === "Search By") {
        state.query =Object.assign({},state,{search: {type:"Search By",payload:action.payload}});
        return state.query;
     }
    return state;
}
export default filterReducer;