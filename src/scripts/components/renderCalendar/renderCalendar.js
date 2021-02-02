
const renderCalendar = ({ appElement, currentDate }) => {
  const calendarContainer = document.createElement("table");
  const calendarHead = document.createElement("thead");
  const calendarBody = document.createElement("tbody");
  calendarContainer.prepend(calendarHead); // This element must contain tr > th*monthLength > <span>DayName</span> + <span>DayNum</span>
  calendarContainer.append(calendarBody); // This element must contain tr > td*monthLength
  appElement.append(calendarContainer);


  let now = new Date(),
  currentYear = now.getFullYear(),
  currentMonth = now.getMonth(),
  currentDayofWeek = now.getDay();

  function daysInMonth(currentMonth) {
		return 33 - new Date(currentYear, currentMonth, 33).getDate();
  };

  function dayOfWeek(currentYear, currentMonth, currentDate) {
    let days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'],
        date = new Date(currentYear, currentMonth, currentDate);

    return days[date.getDay()];
  }


    calendarHead.innerHTML = `
    <tr> 
    </tr>
  `;


  for (let i = 1; i <= (daysInMonth(currentMonth)); i++) {
    if (dayOfWeek(currentYear, currentMonth, i) == 'Su' || dayOfWeek(currentYear, currentMonth, i) == 'St') {
      document.querySelector('thead tr').innerHTML += `
      <th class="dayOff"><span>${dayOfWeek(currentYear, currentMonth, i)}</span><span>${i}</span></th>
    `;
    } else {
      document.querySelector('thead tr').innerHTML += `
      <th><span>${dayOfWeek(currentYear, currentMonth, i)}</span><span>${i}</span></th>
    `;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    
    let prevMonthArrow = document.querySelector('img.prev-arrow'), 
        nextMonthArrow = document.querySelector('img.next-arrow');

    nextMonthArrow.addEventListener('click', function(e) {
      currentMonth++;
      document.querySelector('thead tr').innerHTML = '';
      for (let i = 1; i <= (daysInMonth(currentMonth)); i++) {
        if (dayOfWeek(currentYear, currentMonth, i) == 'Su' || dayOfWeek(currentYear, currentMonth, i) == 'St') {
          document.querySelector('thead tr').innerHTML += `
          <th class="dayOff"><span>${dayOfWeek(currentYear, currentMonth, i)}</span><span>${i}</span></th>
        `;
        } else {
          document.querySelector('thead tr').innerHTML += `
          <th><span>${dayOfWeek(currentYear, currentMonth, i)}</span><span>${i}</span></th>
        `;
        }
    }
    });

    prevMonthArrow.addEventListener('click', function(e) {
      currentMonth--;
      document.querySelector('thead tr').innerHTML = '';
      for (let i = 1; i <= (daysInMonth(currentMonth)); i++) {
        if (dayOfWeek(currentYear, currentMonth, i) == 'Su' || dayOfWeek(currentYear, currentMonth, i) == 'St') {
          document.querySelector('thead tr').innerHTML += `
          <th class="dayOff"><span>${dayOfWeek(currentYear, currentMonth, i)}</span><span>${i}</span></th>
        `;
        } else {
          document.querySelector('thead tr').innerHTML += `
          <th><span>${dayOfWeek(currentYear, currentMonth, i)}</span><span>${i}</span></th>
        `;
        }
      }
    });

  });

  // calendarHead.innerHTML = `
  //   <tr> 
  //     <th><span>Mo</span><span>1</span></th>
  //     <th><span>Tu</span><span>2</span></th>
  //     <th><span>We</span><span>3</span></th>
  //     <th><span>Th</span><span>4</span></th>
  //     <th><span>Fr</span><span>5</span></th>
  //     <th><span>St</span><span>6</span></th>
  //     <th><span>Su</span><span>7</span></th>
  //     <th><span>Mo</span><span>8</span></th>
  //     <th><span>Tu</span><span>9</span></th>
  //     <th><span>We</span><span>10</span></th>
  //     <th><span>Th</span><span>11</span></th>
  //     <th><span>Fr</span><span>12</span></th>
  //     <th><span>St</span><span>13</span></th>
  //     <th><span>Su</span><span>14</span></th>
  //     <th><span>Mo</span><span>15</span></th>
  //     <th><span>Tu</span><span>16</span></th>
  //     <th><span>We</span><span>17</span></th>
  //     <th><span>Th</span><span>18</span></th>
  //     <th><span>Fr</span><span>19</span></th>
  //     <th><span>St</span><span>20</span></th>
  //     <th><span>Su</span><span>21</span></th>
  //     <th><span>Mo</span><span>22</span></th>
  //     <th><span>Tu</span><span>23</span></th>
  //     <th><span>We</span><span>24</span></th>
  //     <th><span>Th</span><span>25</span></th>
  //     <th><span>Fr</span><span>26</span></th>
  //     <th><span>St</span><span>27</span></th>
  //     <th><span>Su</span><span>28</span></th>
  //   </tr>
  // `;

  calendarBody.innerHTML = `
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  `;

};

export default renderCalendar;
