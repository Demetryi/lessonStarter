const renderBar = ({
  appElement,
  currentDate,
}: {
  appElement: Element;
  currentDate: Date;
}) => {
  const calendarToolbar = document.createElement("div");
  calendarToolbar.classList.add("calendarBar");
  appElement.prepend(calendarToolbar);
  console.log(currentDate);
};

export default renderBar;
