let people = document.getElementById('people');
let people_less = document.getElementById('people_less');
let people_more = document.getElementById('people_more');

let people_index = 4;

people_less.addEventListener('click', () => {
    people_index -= 1;
    if (people_index <= 0) {
        people_index = 1;
        people.value = people_index + 'People';
    } else {
        people.value = people_index + 'People';
    }
})

people_more.addEventListener('click', () => {
    people_index += 1;
    if (people_index >= 4) {
        people_index = 4;
        people.value = people_index + 'People';
    } else {
        people.value = people_index + 'People';
    }
})
let checkout_data = document.getElementById('checkout_data');
let checkout = document.getElementById('checkout');

let checkin_data = document.getElementById('checkin_data');
let checkin = document.getElementById('checkin');

checkin.addEventListener('change', () => {
    let checkin_value = checkin.value;
    console.log(checkin_value);
    let dates = new Date(checkin_value);
    let dates2 = new Date();
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let day = week[dates.getDay()];
    //console.log(day)
    let date = dates.getDate();
    //console.log(date);

    let months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let month = months[dates.getMonth()];
    //console.log(month);


    if (dates < dates2) {
        console.log('No Date');
    } else {
        checkin_data.innerText = day + ', ' + date + ' ' + month;
    }

})

checkout.addEventListener('change', () => {
    let checkout_value = checkout.value;
    let checkin_value = checkin.value;
    console.log(checkin_value);
    let dates = new Date(checkout_value);
    let dates2 = new Date(checkin_value);
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let day = week[dates.getDay()];
    //console.log(day)
    let date = dates.getDate();

    //console.log(date);

    var months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let month = months[dates.getMonth()];
    //console.log(month);


    if (dates < dates2) {
        console.log('No Date');
    } else {
        checkout_data.innerText = day + ', ' + date + ' ' + month;
    }

})

let checkin_more = document.getElementById('checkin_more');
let checkin_less = document.getElementById('checkin_less');


checkin_more.addEventListener('click', () => {
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1);

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = months[tomorrow.getMonth()];

    checkin_data.innerText = day + ', ' + date + ' ' + month;
})
checkin_less.addEventListener('click', () => {
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let today = new Date();
    //  let tomorrow = new Date(today);

    // tomorrow.setDate(tomorrow.getDate() + 1);

    let day = week[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];

    checkin_data.innerText = day + ', ' + date + ' ' + month;
})
checkout_more.addEventListener('click', () => {
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 2);

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = months[tomorrow.getMonth()];

    checkout_data.innerText = day + ', ' + date + ' ' + month;
})
checkout_less.addEventListener('click', () => {
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1);

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = months[tomorrow.getMonth()];

    checkout_data.innerText = day + ', ' + date + ' ' + month;
})



const images = [
    "url(a3.jpeg)no-repeat center/cover",
    "url(a1.jpeg)no-repeat center/cover",
    "url(a7.webp)no-repeat center/cover",
    "url(h1.webp)no-repeat center/cover"
]

let index = 1;

let h6 = document.getElementById('h6');

h6.innerText = "+" + images.length;

let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');
let style = document.getElementsByClassName('content')[0].style;

btn_left.addEventListener('click', () => {
    index -= 1;
    if (index < 0) {
        index = (images.length) - 1;
    }

    style.setProperty('--background', images[index])
})

btn_right.addEventListener('click', () => {
    index++
    if (index > (images.length) - 1) {
        index = 0;
    }

    style.setProperty('--background', images[index])
})