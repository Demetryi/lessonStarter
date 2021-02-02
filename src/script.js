let date = new Date();
let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
let counter = 0;
let day = 24*60*60*1000;
let body = document.body;
let tbl  = document.createElement('table');
tbl.setAttribute('class', 'calendar');
let header  = document.createElement('div');
header.setAttribute('class', 'header');
let prewArrow = document.createElement('i');
let nextArrow = document.createElement('i');
let monthAndYear = document.createElement('p');
monthAndYear.setAttribute('class', 'header-content');
let daysOfWeek = [
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'St'
  ];

firstDay = Date.parse(firstDay);
lastDay = Date.parse(lastDay);

for (let i = firstDay; i <= lastDay; i= i + day) {
    counter++;
}


function headerCreate(){
    prewArrow.setAttribute('class', "fa fa-arrow-left prew-arrow");
    nextArrow.setAttribute('class', "fa fa-arrow-right next-arrow");

    body.appendChild(header);
    header.appendChild(prewArrow);
    header.appendChild(monthAndYear);
    header.appendChild(nextArrow);
}
headerCreate();

function tableCreate(){

    for(let i = 0; i < 1; i++){
        let tr = tbl.insertRow();
            for(let k = 1; k <= counter; k++){
            let th = tr.insertCell();
            th.style.border = '1px solid black';
            let dayOfWeek = document.createElement('span');
            let dayOfMonth = document.createElement('span');

            dayOfWeek.setAttribute('class', "day-of-week");
            dayOfMonth.setAttribute('class', "day-of-month");
            dayOfMonth.appendChild(document.createTextNode(k));
            let d = date.setDate(k);
            dayOfWeek.appendChild(document.createTextNode(daysOfWeek[date.getDay(d)]));            

            if(daysOfWeek[date.getDay(d)] == 'St' || daysOfWeek[date.getDay(d)] == 'Su'){
                th.style.backgroundColor = '#F0F0F0';
            }
        
            th.appendChild(dayOfWeek);
            th.appendChild(dayOfMonth);
        }
    }

    for(let i = 0; i < 3; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < counter; j++){
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(' '));
                td.style.border = '1px solid black';
        }
    }
    body.appendChild(tbl);
}
tableCreate();

function findMonth(month, year) {
    monthAndYear.appendChild(document.createTextNode(`${month} ${year}`));
}
findMonth(date.toLocaleString(undefined, {month:'long'}), date.getFullYear());

