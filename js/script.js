	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const transportation = document.querySelector('#transportation').value;
  const electricity = document.querySelector('#electricity').value;
  const food = document.querySelector('#food').value;
  const carbonFootprint = calculateCarbonFootprint(transportation, electricity, food);
  result.textContent = `Your carbon footprint is ${carbonFootprint} tons of CO2 per year!`;
});

function calculateCarbonFootprint(transportation, electricity, food) {
 
  const transportationFactor = getTransportationFactor(transportation);
  const electricityFactor = getElectricityFactor(electricity);
  const foodFactor = getFoodFactor(food);
  const carbonFootprint = transportationFactor + electricityFactor + foodFactor;
  return carbonFootprint.toFixed(2);
}

function getTransportationFactor(transportation) {
 

  switch(transportation) {
    case 'car':
      return 5.5;
    case 'bus':
      return 0.5;
    case 'train':
      return 0.1;
    case 'plane':
      return 9.5;
    default:
      return 0;
  }
}

function getElectricityFactor(electricity) {
 
  switch(electricity) {
    case 'coal':
      return 2.1;
    case 'natural gas':
      return 1.1;
    case 'nuclear':
      return 0.2;
    case 'renewables':
      return 0.0;
    default:
      return 0;
  }
}

function getFoodFactor(food) {
 
  switch(food) {
    case 'meat':
      return 3.3;

    case 'vegetables':
      return 1;
    case 'vegan':
      return 0.5;
    default:
      return 0;
  }
}


    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

    const name1 = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const submit = document.getElementsByClassName('contact-form');



function sendEmail(){
    const ebody=`Name: ${name1.value}
      <br>
       Email : ${email.value}
       <br>
       Message: ${message.value}`;
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "isha16shinde@gmail.com",
  Password : "773D844730893553033485D2AE3705CF90BAh",
  To : 'isha16shinde@gmail.com',
  From : 'isha16shinde@gmail.com',
  Subject : "tried to contact from" + email.value,
  Body : ebody
}).then(
message => alert(message)
);
console.log(ebody)
  }
