const initialState = {
    query: {type: "Filter By", payload: ""},
    search: {type: "Search By", payload: ""}
};
function filterReducer(state= initialState,action) {
    if(action.type === "Filter By") {
       console.log("Filter By");
       state.query =Object.assign({},state,{query: {type:"Filter By",payload:action.payload}});
       console.log(state.query);
       return state.query;
    }
    if(action.type === "Search By") {
        console.log("Search By");
        state.query =Object.assign({},state,{search: {type:"Search By",payload:action.payload}});
        console.log(state.query);
        return state.query;
     }
    return state;
}
export default filterReducer;