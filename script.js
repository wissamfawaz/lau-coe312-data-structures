
//Constants and query selectors
let current = new Date();
let currentDate = current.getDate();
let currentMonth = current.toLocaleString("en-US", { month: "short" });
let className = currentMonth+currentDate;
let btn = document.querySelector('#scroll-to-date');
let currentDateRow = document.querySelector("."+className);

//Chooses the date that is the closest to the current date
while(currentDateRow == null) {
    currentDate--;
    className = currentMonth+currentDate;
    currentDateRow = document.querySelector("."+className);
}

//Basic Functions
const hide = (element) => {
    element.classList.remove('active');
    element.classList.add('hidden');
}
const unhide = (element) => {
    element.classList.remove('hidden');
    element.classList.add('active');
}
const activate = (row) => {
    //Function that fulfills the purpose of scroll-to-date button
    row.scrollIntoView({ block: 'end',  behavior: 'smooth' });
    row.classList.add("active");
    activeAnimationTimeout(row);
};
const activeAnimationTimeout = (element) => {
    setTimeout(() => {
        element.classList.remove("active");
    }, 1000);
}

//Upon clicking takes the user to the date
btn.addEventListener('click', function () {
        activate(currentDateRow);
        hide(btn);
});

//Keyboard and mouse support
window.addEventListener("mousewheel", () => {
    unhide(btn);
})
window.addEventListener("keydown", function(e){
    if (e.keyCode == 38 || e.keyCode == 40 ) {
        unhide(btn);
    }
})