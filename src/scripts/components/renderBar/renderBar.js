const renderBar = ({appElement, currentDate}) => {
  const calendarToolbar = document.createElement("div");
  calendarToolbar.classList.add("calendarBar"); // Add class example
  const arrowLeft = document.createElement('a');
  arrowLeft.classList.add("arrowLeft");
  const arrowRight = document.createElement('a');
  arrowRight.classList.add("arrowRight");
  const monthTitle = document.createElement('h1');

  const state = {
    allMonth: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNow: new Date().getMonth(),
    yearNow: new Date().getFullYear(),
  };

  arrowRight.onclick = () => {
    if (state.monthNow > 10) {
      state.yearNow += 1;
      state.monthNow = 0;
      monthTitle.innerText = `${state.allMonth[state.monthNow]} ${state.yearNow}`;

      return;
    }
    state.monthNow += 1;
    monthTitle.innerText = `${state.allMonth[state.monthNow]} ${state.yearNow}`;
  };

  arrowLeft.onclick = () => {
    if (state.monthNow <= 0) {
      state.yearNow -= 1;
      state.monthNow = 11;
      monthTitle.innerText = `${state.allMonth[state.monthNow]} ${state.yearNow}`;

      return;
    }
    state.monthNow -= 1;
    monthTitle.innerText = `${state.allMonth[state.monthNow]} ${state.yearNow}`;
  };

  arrowLeft.append("←");
  arrowRight.append("→");
  monthTitle.append(`${state.allMonth[state.monthNow]} ${state.yearNow}`);
  calendarToolbar.append(arrowLeft, monthTitle, arrowRight);
  appElement.prepend(calendarToolbar);

};

export default renderBar;
