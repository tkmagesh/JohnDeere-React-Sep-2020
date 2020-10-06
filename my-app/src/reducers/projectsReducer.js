const initialState = [];

export default function projectsReducer(currentState = initialState, action){
    if (action.type === 'PROJECTS_LOAD'){
        return [...action.payload];
    }
    return currentState;
}