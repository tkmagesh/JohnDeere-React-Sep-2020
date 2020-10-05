function getLocalBugs(){
    return [
      {
        id: 1,
        name: "Server communication failure",
        isClosed: false,
        createdAt: new Date()
      },
      {
        id: 2,
        name: "Data integrity checks failed",
        isClosed: true,
        createdAt: new Date()
      },
      {id : 3, name : 'User actions not recognized', isClosed : false, createdAt : new Date()},

    ];
}
export default function load(){
    const bugs = getLocalBugs();
    const action = { type : 'BUGS_LOAD', payload = bugs };
    return action;
}