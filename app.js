const currentDate=document.getElementById('current-date');
const daysTag=document.querySelector('.days');
prevNextIcons=document.querySelectorAll('.icons span');
let date=new Date(),
currentYear=date.getFullYear(),
currentMonth=date.getMonth();
const months=['January','February','March','April','June','July','August','September','October','November','December'];
const renderCalender=()=>{
    let FirstDateOfMonth=new Date(currentYear,currentMonth,1).getDate();
    let lastDateOfMonth=new Date(currentYear,currentMonth+1,0).getDate();
    let lastDayOfMonth=new Date(currentYear,currentMonth,lastDateOfMonth).getDay();
    let lastDateOfLastMonth=new Date(currentYear,currentMonth,0).getDate();
    let liTag="";
    for(let i=FirstDateOfMonth;i>0;i--){
        liTag +=`<li class='inactive'>${lastDateOfLastMonth-i+1}</li>`;
    }
    for(let i=1;i<=lastDateOfMonth;i++){
        let isToday=i===date.getDate()&& currentMonth===new Date().getMonth()&& currentYear===new Date().getFullYear()?"active":"";
       liTag +=`<li class="${isToday}">${i}</li>`;
       
    }
    for(let i=lastDayOfMonth;i<6;i++){
        liTag +=`<li class='inactive'>${i-lastDayOfMonth+1}</li>`;
    }
    currentDate.innerText=`${months[currentMonth]} ${currentYear}`;
    daysTag.innerHTML=liTag;
}
renderCalender();


prevNextIcons.forEach(icon => {
    icon.addEventListener('click',()=>{
        currentMonth=icon.id==='prev'? currentMonth-1:currentMonth+1;

if ( currentMonth<0 || currentMonth>=11) {
    date=new Date(currentYear,currentMonth);
    currentYear=date.getFullYear();
    currentMonth=date.getMonth();
}
else{
    date=new Date();
}

        renderCalender();
    })
});