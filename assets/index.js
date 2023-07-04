function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

var stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
var elements = stripe.elements();

var card = elements.create('card', {
    hidePostalCode: true,
    style: {
        base: {
            iconColor: '#666EE8',
            color: '#31325F',
            lineHeight: '40px',
            fontWeight: 300,
            fontFamily: 'Helvetica Neue',
            fontSize: '15px',

            '::placeholder': {
                color: '#CFD7E0',
            },
        },
    }
});
card.mount('#card-element');

function setOutcome(result) {
    var successElement = document.querySelector('.success');
    var errorElement = document.querySelector('.error');
    successElement.classList.remove('visible');
    errorElement.classList.remove('visible');

    if (result.token) {
        // In this example, we're simply displaying the token
        successElement.querySelector('.token').textContent = result.token.id;
        successElement.classList.add('visible');

        // In a real integration, you'd submit the form with the token to your backend server
        //var form = document.querySelector('form');
        //form.querySelector('input[name="token"]').setAttribute('value', result.token.id);
        //form.submit();
    } else if (result.error) {
        errorElement.textContent = result.error.message;
        errorElement.classList.add('visible');
    }
}

card.on('change', function (event) {
    setOutcome(event);
});

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var options = {
        name: document.getElementById('first-name').value + " " + document.getElementById('last-name').value,
        address_line1: document.getElementById('address-line1').value,
        address_line2: document.getElementById('address-line2').value,
        address_city: document.getElementById('address-city').value,
        address_county: document.getElementById('address-county').value,
        address_postcode: document.getElementById('address-postcode').value,
        address_country: document.getElementById('address-country').value,
    };
    stripe.createToken(card, options).then(setOutcome);
});

  // set the date we are counting down to
  var countDown = new Date("August 25, 2023 12:12:50").getTime();
     
  //update the count down in every 1 second
  var update = setInterval(function () {
 
     // get the today's date and time
     var now = new Date().getTime();
   
     //find the difference b/w countDown and now
     var diff = countDown - now;
   
     //now we are calculating time in days, hrs, minutes, and seconds.
     var days = Math.floor(diff / (1000 * 60 * 60 * 24));
     var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((diff % (1000 * 60)) / 1000);
   
     //now output the result in an element with id ="time"
     document.getElementById("time").innerHTML =
     days + "-D: " + hrs + "-H: " + minutes + "-M: " + seconds + "-S ";
     if (diff < 0) {
        clearInterval(update);
        document.getElementById("time").innerHTML = "Expired";
     }
  }, 1000);

