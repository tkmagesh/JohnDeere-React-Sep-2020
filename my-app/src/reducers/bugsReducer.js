function bugsReducer(initialState = [], action){
    if (action.type === 'BUGS_LOAD')
        return action.payload;
    return initialState;
}

export default bugsReducer;