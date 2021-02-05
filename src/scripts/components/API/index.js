export const departmentTeams = {
    teams: [
      {
        name: "Frontend Team",
        percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
        members: [
          {
            name: "FE_Team_User1",
            vacations: [
              { startDate: "20.12.2020", endDate: "22.12.2020", type: "Paid" },
              { startDate: "20.11.2020", endDate: "22.11.2020", type: "Paid" },
            ],
          },
          {
            name: "FE_Team_User1",
            vacations: [
              { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
              { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
            ],
          },
        ],
      },
      {
        name: "Backend Team",
        percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
        members: [
          {
            name: "FE_Team_User1",
            vacations: [
              { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
              { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
            ],
          },
          {
            name: "FE_Team_User1",
            vacations: [
              { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
              { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
            ],
          },
        ],
      },
    ],
  };


  export const users = [];
  const showUsers = 2;
  
  const pushToUsers = (user)=> users.push(user);
  
  const url = 'https://jsonplaceholder.typicode.com/posts/';
  
  for(let userId = 1; userId <= showUsers; userId++){
    fetch(`${url}${userId}`, {
      method: "PUT",
      body: JSON.stringify(departmentTeams.teams[userId - 1]),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(response => response.json())
      .then (data => pushToUsers(data));
  }
  

