const projectsData = [
  {
    id: 1,
    name: "Payroll Master"
  },
  {
    id: 2,
    name: "Expense Manager"
  },
  {
    id: 3,
    name: "Test Manager"
  }
];

export default function projectsReducer(currentState = projectsData, action){
    if (action.type === 'PROJECTS_LOAD'){
        return [...action.payload];
    }
    return currentState;
}