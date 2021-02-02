const renderCalendar = ({appElement, currentDate}) => {
  const calendarContainer = document.createElement("table");
  const calendarHead = document.createElement("thead");
  const calendarBody = document.createElement("tbody");
  calendarContainer.prepend(calendarHead); // This element must contain tr > th*monthLength > <span>DayName</span> + <span>DayNum</span>
  calendarContainer.append(calendarBody); // This element must contain tr > td*monthLength
  appElement.append(calendarContainer);
  Date.prototype.daysInMonth = function() {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
  };

  const state = {
    countWeekDay: 0,
    // monthLenght:28,
    weekDay: ["Mo", "Tu", "We", "Th", "Fr", "St", "Su"],
    monthDay: new Array(new Date().daysInMonth()).fill(null),
    friday: false
  };

  calendarHead.innerHTML = (`${state.monthDay.map((el,index) => `
      ${ state.friday ?
    `<th class='theadBlock'>
  <span>
    ${index+1}
        <span class="logicBlockHidden">
          ${state.countWeekDay >= 7 ? state.countWeekDay = 1 : state.countWeekDay += 1}
          ${state.countWeekDay === 6  ? state.friday = true:state.friday = false}
  </span>
  </span>
      <br>
  <span>
     ${state.weekDay[state.countWeekDay - 1]}
  </span>
    </th>`
  :
   ` <th class='theadBlock-friday'>
  <span>
    ${index+1}
    <span class="logicBlockHidden">
        ${state.countWeekDay >= 7 ? state.countWeekDay = 1 : state.countWeekDay += 1}
        ${state.countWeekDay === 5? state.friday = true:state.friday = false }
    </span>
  </span>
      <br>
  <span>
     ${state.weekDay[state.countWeekDay - 1]}
  </span>
    </th>`
  }`).join("")}`);
};
export default renderCalendar;
