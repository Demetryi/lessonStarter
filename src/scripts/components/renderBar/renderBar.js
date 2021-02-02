const renderBar = ({ appElement, currentDate }) => {
  const calendarToolbar = document.createElement("div");
  calendarToolbar.classList.add("calendarBar"); // Add class example
  // here toolBar content rendering

  let now = new Date(),
  currentYear = now.getFullYear(),
  currentMonth = now.getMonth();

  function numberOfMonthToString(month) {
    switch (month) {
      case 0: 
        return 'January';
        break;
      case 1: 
        return 'February';
        break;
      case 2: 
        return 'March';
        break;
      case 3: 
        return 'April';
        break;
      case 4: 
        return 'May';
        break;
      case 5: 
        return 'June';
        break;
      case 6: 
        return 'July';
        break;
      case 7: 
        return 'August';
        break;
      case 8: 
        return 'September';
        break;
      case 9: 
        return 'October';
        break;
      case 10: 
        return 'November';
        break;
      case 11: 
        return 'December';
        break;
    }
  }

  function stringOfMonthToNumber(month) {
    switch (month) {
      case 'January': 
        return 0;
        break;
      case 'February': 
        return 1;
        break;
      case 'March': 
        return 2;
        break;
      case 'April': 
        return 3;
        break;
      case 'May': 
        return 4;
        break;
      case 'June': 
        return 5;
        break;
      case 'July': 
        return 6;
        break;
      case 'August': 
        return 7;
        break;
      case 'September': 
        return 8;
        break;
      case 'October': 
        return 9;
        break;
      case 'November': 
        return 10;
        break;
      case 'December': 
        return 11;
        break;
    }
  }

  function changeMonth(element) {
      currentMonth = document.querySelector('.header-date').innerHTML;
      currentMonth = currentMonth.substr(0,currentMonth.indexOf(" "));
      currentMonth = stringOfMonthToNumber(currentMonth);
    if (element.classList.contains('next-arrow')) {
      if(currentMonth <= 10) {
        currentMonth++;
      } else {
        currentMonth = 0;
        currentYear++;
      }
      document.querySelector('.header-date').innerHTML = `${numberOfMonthToString(currentMonth)} ${currentYear}`;
    }
    if (element.classList.contains('prev-arrow')) {
      if(currentMonth > 0) {
        currentMonth--;
      } else {
        currentMonth = 11;
        currentYear--;
      }
      document.querySelector('.header-date').innerHTML = `${numberOfMonthToString(currentMonth)} ${currentYear}`;
    }
  }

  calendarToolbar.innerHTML = `
    <div class="header-nav__prev">
      <img src="../src/icons/arrow-prev.svg" alt="arrow-prev" class="prev-arrow">
    </div>
    <div class="header-date">${numberOfMonthToString(currentMonth)} ${currentYear}</div>
    <div class="header-nav__next">
      <img src="../src/icons/arrow-next.svg" alt="arrow-next" class="next-arrow">
    </div>
  `;

  document.addEventListener("DOMContentLoaded", () => {
    
    let prevMonthArrow = document.querySelector('img.prev-arrow'), 
        nextMonthArrow = document.querySelector('img.next-arrow');

    nextMonthArrow.addEventListener('click', function(e) {
      changeMonth(e.target);
    });

    prevMonthArrow.addEventListener('click', function(e) {
      changeMonth(e.target);
    });

  });
  


  appElement.prepend(calendarToolbar);
};

export default renderBar;
