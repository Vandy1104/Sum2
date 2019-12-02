console.log('NZ Tourism Transport');

var transport = [
  {
      id   : 0,
      type : 'Motor-Bike',
      vehicleName : 'BMWF800GT',
      transmission: 'M',
      year: 2018,
      description: "This is a great middle weight sports tourer with a full fairing, high windshield and touring oriented ergonomics with raised handlebars. Comfortable seating postion which is adjustable 3 ways, a punchy motor along with excellent handling and ABS make for a motorcycle that you just want to keep on riding.",
      features: "All our bikes are prepped and checked over by our Technicians and are backed by our exclusive POWERTRAIN WARRANTY so you'll have no worries getting out on the road.",
      minDay: 1,
      maxDay: 5,
      minPpl: 1,
      maxPpl: 1,
      rent   : 109,
      rating : 'images/star.png',
      fuel   : 'Petrol',
      mileage   : "3.7L/100km",
      test    : 3.7,
      engineCC   : "800cc",
      photo: "images/bikes/bike1.jpg"
  },
  {
      id   : 1,
      type : 'Small-Car',
      vehicleName : "TOYOTA YARIS SX 1.5P/4AT/HA/5DR/5",
      transmission: 'Automatic',
      year: 2015,
      description: 'The Yaris sets the bar high in looks, performance safety and features. The Yaris offers more than you would expect. The Yaris boasts a sportier look along with a modern and spacious interior and alloy wheels. Sports flair, family first.',
      features: "New Zealand new, 7 Airbags, 15 inch Alloy Wheels, Fog Lights,Cruise Control, Traction Control, Electronic Stability Control,Parking Sensors, Reversing Camera, Air Conditioning, CD Player, Bluetooth, USB/AUX/MP3 Input,Central Locking.",
      minDay: 1,
      maxDay: 10,
      minPpl: 1,
      maxPpl: 2,
      rent   : 129,
      rating : "images/star.png",
      fuel   : 'Petrol',
      mileage : "8.5L/100km",
      test    : 8.5,
      engineCC   : "1497cc",
      photo: "images/small/small1.jpg"
  },
  {
      id   : 2,
      type : 'Large-Car',
      vehicleName : "MAZDA CX8 LIMITED AWD",
      transmission: "Automatic",
      year: 2015,
      description: "Mazda’s stunning KODO Design language is at the heart of every Mazda SUV. First-Ever Mazda CX-8 Diesel is the latest example, offering the spacious versatility of a large SUV but with smaller dimensions that don’t compromise on interior space or cabin comfort.",
      features: "7 seats, Air conditioning Automatic, 3-zone Climate Control with Rear Vents, Bluetooth® handsfree phone connectivity, MZD Connect Infotainment System, Cabin Air Filter Ventilation pollen filter, Cruise Control, Seat adjustment - front Manual 6-way (Driver), Manual 6-way (Passenger), Steering column - adjustable, Apple Carplay™ and Android Auto™ Optional Accessory, Auxiliary input 3.5mm MP3 player compatible, 4 x USB input, iPod® connectivity, Bluetooth® audio.",
      minDay: 3,
      maxDay: 10,
      minPpl: 1,
      maxPpl: 5,
      rent   : 144,
      rating : "images/star.png",
      fuel   : 'Diesel',
      mileage   : "9.7L/100km",
      test    : 9.7,
      engineCC   : "2191cc",
      photo: "images/large/large1.jpg"
  },
  {
    id   : 3,
    type : 'Motor-Home',
    vehicleName : "FORD TRANSIT 470E JUMBO",
    transmission: "Manual",
    year: 2019,
    description: "Ford Transit Commercial Vehicles are known for their reliability, loadspace, comfort and efficiency. With a next generation diesel engine available with 6-speed automatic transmission.Tested for Toughness. Ford ran vehicles at maximum speed for two months. Took them from -40°C to towing fully-laden trailers in 50°C heat.",
    features: "16-inch steel wheels, Roll over mitigation, Torque Vectoring Control, Drive away locking, Power assisted steerting,Drivers armrest, Tachomater, Trip computer, Compartment lamps, 3.5-inch Multi-functional display screen.",
    minDay: 2,
    maxDay: 15,
    minPpl: 2,
    maxPpl: 6,
    rent   : 200,
    rating : "images/star.png",
    fuel   : 'Diesel',
    mileage   : "17L/100km",
    test    : 17,
    engineCC   : "1995cc",
    photo: "images/mh/mh1.jpg"
  },
];

var myKey = JSON.parse(apiKey);
//console.log(myKey[0].key);
//convert json data into js object


var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key + '&libraries=places&callback=initMap';
document.getElementsByTagName('body')[0].appendChild(script);
//map stylesheet

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var distance;
function initMap() {
  //console.log('test');
  // document.getElementById('map').style.display = "none";

  var map = new google.maps.Map(document.getElementById('map'), {
    mapTypeControl: false,
    center: {lat: -40.9006, lng: 174.8860},
    zoom: 6
  });

  new AutocompleteDirectionsHandler(map);
}

/**
 * @constructor
 */
function AutocompleteDirectionsHandler(map) {
  this.map = map;
  this.originPlaceId = null;
  this.destinationPlaceId = null;
  this.travelMode = 'WALKING';
  this.directionsService = new google.maps.DirectionsService;
  this.directionsRenderer = new google.maps.DirectionsRenderer;
  this.directionsRenderer.setMap(map);

  var originInput = document.getElementById('origin-input');
  var destinationInput = document.getElementById('destination-input');
  var modeSelector = document.getElementById('mode-selector');

  var originAutocomplete = new google.maps.places.Autocomplete(originInput);
  // Specify just the place data fields that you need.
  originAutocomplete.setFields(['place_id']);

  var destinationAutocomplete =
      new google.maps.places.Autocomplete(destinationInput);
  // Specify just the place data fields that you need.
  destinationAutocomplete.setFields(['place_id']);

  this.setupClickListener('changemode-walking', 'WALKING');
  this.setupClickListener('changemode-transit', 'TRANSIT');
  this.setupClickListener('changemode-driving', 'DRIVING');

  this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
  this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
      destinationInput);
  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
}

// Sets a listener on a radio button to change the filter type on Places
// Autocomplete.
AutocompleteDirectionsHandler.prototype.setupClickListener = function(
    id, mode) {
  // var radioButton = document.getElementById(id);
  var me = this;

  // radioButton.addEventListener('click', function() {
  //   me.travelMode = mode;
  //   me.route();
  // });
};

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(
    autocomplete, mode) {
  var me = this;
  autocomplete.bindTo('bounds', this.map);

  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();

    if (!place.place_id) {
      window.alert('Please select an option from the dropdown list.');
      return;
    }
    if (mode === 'ORIG') {
      me.originPlaceId = place.place_id;
    } else {
      me.destinationPlaceId = place.place_id;
    }
    me.route();
  });
};

AutocompleteDirectionsHandler.prototype.route = function() {
  if (!this.originPlaceId || !this.destinationPlaceId) {
    return;
  }
  var me = this;

  this.directionsService.route(
      {
        origin: {'placeId': this.originPlaceId},
        destination: {'placeId': this.destinationPlaceId},
        travelMode: this.travelMode
      },
      function(response, status) {
        console.log(response);
        //console.log(response.routes[0].legs[0].distance.text);
        distance = response.routes[0].legs[0].distance.text;

        if (status === 'OK') {
          me.directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
      return (distance);
};    //End of address autofield

//Home Menu
// document.getElementById('home').addEventListener('click', function(){
//   //Vehicle Search box
//   document.getElementById('show').innerHTML = " "; //to clear the container
//     document.getElementById('show').innerHTML
// +=  '<div class="myContainer bg-info mt-3 text-white col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4">'
// +    '<h5 class="text-center py-2">Search For your Transport</h5>'
//     //map test
// +      '<div class="form-group"><div>'
// +       '<label class="float-left" for="exampleFormControlSelect1">From</label>'
// +        '<input id="origin-input" class="form-control controls float-left" type="text" placeholder="Enter an origin location">'
// +           '<div class="clearfix">'
// +           '</div>'
// +       '<label class="float-left clearfix" for="exampleFormControlSelect1">To</label>'
// +       '<input id="destination-input" class="form-control controls ml-5" type="text" placeholder="Enter a destination location">'
// +   '</div>'
//
// +   '<div id="map"></div>' //Ends
//
// +    '<label for="exampleFormControlSelect1">Number of Days</label>'
// +    '<select class="form-control controls" id="exampleFormControlSelect1">'
// +      '<option>1</option>'
// +      '<option>2</option>'
// +      '<option>3</option>'
// +      '<option>4</option>'
// +      '<option>5</option>'
// +    '</select>'
// +    '<label for="exampleFormControlSelect1">Number of People</label>'
// +    '<select class="form-control controls" id="exampleFormControlSelect1">'
// +      '<option>1</option>'
// +      '<option>2</option>'
// +      '<option>3</option>'
// +      '<option>4</option>'
// +      '<option>5</option>'
// +    '</select>'
// +    '<button type="button" class="btn btn-dark my-3">Search</button>'
// +  '</div>'
// +  '</div>'
// });   //Home menu ends here.

//Contact menu
document.getElementById('contact').addEventListener('click', function(){
  document.getElementById('show').innerHTML = " "; //to clear the container
  $('#search').hide();
});

//Function to display all vehicles.
function allTransport(){
  document.getElementById('show').innerHTML = " "; //to clear the container
for(var i = 0; i < transport.length; i++) {
  document.getElementById('show').innerHTML
  += '<div class="vCard py-2 mt-3 mx-1 ml-5 myContainer clearfix col-sm-6 col-md-6 col-lg-4">'

  +  '<img src="' + transport[i].photo + ' " class="card-img-top" alt="Vehicles"/>'
  +  '<ul class="py-0 px-0 list-group list-group-flush">'
  + '<li class="text-primary cardContent list-group-item">' + transport[i].vehicleName + '</li>'
  + '<li class="text-primary cardContent list-group-item" >' + transport[i].type + '</li>'
  + '<li class="text-primary cardContent list-group-item" > Rent: $ ' + transport[i].rent + ' per day </li>'
  + '<img src="' + transport[i].rating + ' " class="card-img-top" alt="Vehicles"/>'
  + '<br><button id= " ' + transport[i].id + ' " type="button" class="btn btn-primary modalClass" data-toggle="modal" data-target=".bd-example-modal-lg">More</button>'
  +  '</ul>'
  +  '</div>'
//
//   // += '<div class="row ml-4">'
//   // +'<div class="col">'
//   // + '<img class="img-thumbnail mt-3" src="' + transport[i].photo + ' "  alt="Vehicles"/>'
//   // + '</div>'
//   // + '<div class="col">'
//   // + '</br><h5 class="text-danger">' + transport[i].vehicleName + '</h5>'
//   // + '</br>Year : <h5 class="text-danger" >' + transport[i].year + '</h5>'
//   // + '</br><h5 class="text-danger" > ' + transport[i].rent + '</h5>'
//   // + '</div>'
//   // + '</div>';
  }
};

allTransport();
// initMap();
modals();
//modals
function modals(){
$('.modalClass').on('click', function(){
  $('.myModal').show();
  //console.log(this.id);
  //console.log(typeof(this.id));
  console.log(days);
  console.log(people);
  console.log(distance);
  document.getElementById('modalContent').innerHTML = " ";

  // distance = 675;
 distance = parseInt(distance.substring(0,3));
 console.log
  // var res = str.substring(0, 2);
  console.log(distance);

  for(var i = 0; i < transport.length; i++) {
  if (parseInt(this.id) === parseInt(transport[i].id)) {

    var cost = distance/100 * transport[i].rent*2.66;
    console.log(cost);

    console.log('ID matched');
    document.getElementById('modalContent').innerHTML +=
      '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">'
    +  '<div class="carousel-inner">'
    +  '<div class="carousel-item active">'
    +  '<img src=" ' + transport[i].photo + ' " class="d-block w-50 center" alt="..."></div><div class="carousel-item">'
    +  '<img src=" ' + transport[i].photo + ' " class="d-block w-50 center" alt="..."></div>'
    +  '<div class="carousel-item"><img src=" ' + transport[i].photo + ' " class="d-block w-50 center" alt="..."></div></div>'
    +  '<a class="carousel-control-prev bg-primary" href="#carouselExampleControls" role="button" data-slide="prev">'
    +  '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
    +  '<span class="sr-only">Previous</span>'
    +  '</a><a class="carousel-control-next bg-primary" href="#carouselExampleControls" role="button" data-slide="next">'
    +  '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
    +  '<span class="sr-only">Next</span></a></div>'
    +  '<div class="card myContainer border border-light clearfix py-0 ml-4 center mb-2 col-sm-6 col-md-6 col-lg-4">'
    // +  '<img src="' + transport[i].photo + ' " class="card-img-top myTransport" alt="Vehicles"/>'
    +  '</div>'
    +  '<div class="card-body py-1 px-1 list-group list-group-flush">'
    + '<br><h5 class="w-100 text-center"> Name: ' + transport[i].vehicleName + '</h5>'
    + '<h6 class="w-100 text-center">Type: ' + transport[i].type + '</h6>'
    + '<h6 class="w-100 text-center">$ ' + transport[i].rent + ' per day </h6>'
    + '<div class="mx-5">'
    + '<h6 class="w-100"><b> Fuel: </b>' + transport[i].fuel + '</h6>'
    + '<h6 class="w-100"><b> Mileage: </b>' + transport[i].mileage + '</h6>'
    + '<h6 class="w-100"><b> Engine Capacity: </b>' + transport[i].engineCC + '</h6>'
    + '<h6 class="w-100"><b> Transmission: </b>' + transport[i].transmission + '</h6>'
    + '<h6 class="w-100"><b> Cost: $ </b>' + cost + '</h6>'
    + '<h6 class="w-100"><b> Distance: </b>' + distance + 'KM</h6>'

    + '<br><h6 class="w-100 text-justify"><b> Description: </b>' + transport[i].description + '</h6>'
    + '<br><h6 class="w-100 text-justify"><b> Features: </b>' + transport[i].features + '</h6>'
    + '<div class="map"></div>'
    + '</div>'
    + '</div>'
    }
  }
  //initMap()
});
}



//
//vehicles
document.getElementById('vehicles').addEventListener('click', function(){
  document.getElementById('show').innerHTML = " "; //to clear the container
  $('#search').hide();
  $('.mainCarousel').hide();
  for(var i = 0; i < transport.length; i++) {
    document.getElementById('show').innerHTML
      += '<br><div class="row ml-4 container jumbotron w-50 mx-auto">'
      +'<div class="col">'
      +  '<img src="' + transport[i].photo + ' " class="card-img-top myTransport w-75 mt-4" alt="Vehicles"/>'
      + '</div>'
      + '<div class="col">'
      + '</br><h5 class="">' + transport[i].type + '</h5>'
      + '</br><h5 class="">' + transport[i].vehicleName + '</h5>'
      + '<h5 class="">Make: ' + transport[i].year + '</h5>'
      + '<h5 class="">$' + transport[i].rent + ' per day</h5>'
      + '<h5 class="">Transmission: ' + transport[i].transmission + ' per day</h5>'
      + '<h5 class="">Fuel: ' + transport[i].fuel + ' per day</h5>'
      + '<h5 class="">Mileage: ' + transport[i].mileage + ' per day</h5>'
      + '<h5 class="">Engine Capacity: ' + transport[i].engineCC + ' per day</h5>'
      + '<br><button id= " ' + transport[i].id + ' " type="button" class="btn btn-primary modalClass" data-toggle="modal" data-target=".bd-example-modal-lg">More</button>'
      + '</div>'
      + '</div>';
  }
  modals();
});

  // Trigger Search Button
    var days, people;
    $('.searchBtn').on('click', function(){
      // var days = spinner.spinner( "value" ) ;
      //Read the place values
      // x = parseInt(document.getElementById('nod').value);
      days = parseInt(document.getElementById('days').value);
      if ((days > 15) || (days < 1)){
        alert('Please Enter between 1 to 15');
      }
       people = parseInt(document.getElementById('nop').value);
      console.log(days);
      console.log(people);
      console.log(distance);

      document.getElementById('show').innerHTML = " ";
      for(var i = 0; i < transport.length; i++) {
     //   console.log('search result');
       console.log(i);
      if ((days >= transport[i].minDay) && (days<= transport[i].maxDay) &&(people >=transport[i].minPpl) && (people <= transport[i].maxPpl)){
      console.log('true');
      document.getElementById('show').innerHTML
      += '<br><div class="card vCard myContainer border border-light clearfix py-0 ml-4 center mb-2 col-sm-6 col-md-6 col-lg-4">'
      +  '<img src="' + transport[i].photo + ' " class="card-img-top myTransport" alt="Vehicles"/>'
      +  '<ul class="card-body py-1 px-1 list-group list-group-flush">'
      + '<li class="text-primary cardContent list-group-item">' + transport[i].vehicleName + '</li>'
      + '<li class="text-primary cardContent list-group-item" >' + transport[i].type + '</li>'
      + '<li class="text-primary cardContent list-group-item" > ' + transport[i].rent + '</li>'
      + '<button id= " ' + transport[i].id + ' " type="button" class="btn btn-primary modalClass" data-toggle="modal" data-target=".bd-example-modal-lg">More</button>'
      +  '</ul>'
      +  '</div>'
      }
    }
    modals();
});
