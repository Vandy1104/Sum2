console.log('NZ Tourism Transport');

var transport = [
  {
      type : 'Motor-Bike',
      vehicleName : 'BMWF800GT',
      transmission: 'M',
      year: 2018,
      description: "This is a great middle weight sports tourer with a full fairing, high windshield and touring oriented ergonomics with raised handlebars. Comfortable seating postion which is adjustable 3 ways, a punchy motor along with excellent handling and ABS make for a motorcycle that you just want to keep on riding.",
      id   : 0,
      minDay: 1,
      maxDay: 5,
      minPpl: 1,
      maxPpl: 1,
      rent   : 109,
      fuel   : 'Petrol',
      mileage   : "3.7L/100km",
      engineCC   : "800cc",
      photo: "images/bikes/bike1.jpg"
  },
  {
      type : 'Small-Car',
      vehicleName : "TOYOTA YARIS SX 1.5P/4AT/HA/5DR/5",
      transmission: 'Automatic',
      year: 2015,
      description: 'The Yaris sets the bar high in looks, performance safety and features. The Yaris offers more than you would expect. The Yaris boasts a sportier look along with a modern and spacious interior and alloy wheels. Sports flair, family first, the Toyota Yaris Hatch adds an enviable sports flair, whilst safely bringing the kids along for the ride.Yaris Hatch is bursting with funky features and cool technologies. Great looking and with a bubbly personality to match, it’s not only a fun way to get around, but safe and stylish too. Everyone needs a little Yaris in their life. Yaris has proven itself a dependable hatchback that offers so much more.',
      features: "New Zealand new, Iso Fixings, 7 Airbags, 15 inch Alloy Wheels, Fog Lights, ABS, Power Steering, Cruise Control, Traction Control, Electronic Stability Control, Automatic Headlights, Parking Sensors, Reversing Camera, Air Conditioning, CD Player, Bluetooth, USB/AUX/MP3 Input, Electric Mirrors, Electric Windows, Multi-Function Steering Wheel, Central Locking",
      id   : 1,
      minDay: 1,
      maxDay: 10,
      minPpl: 1,
      maxPpl: 2,
      rent   : 129,
      fuel   : 'Petrol',
      mileage   : "8.5L/100km",
      engineCC   : "1497cc",
      photo: "images/small/small1.jpg"
  },
  {
      type : 'Large-Car',
      vehicleName : "MAZDA CX8 LIMITED AWD",
      transmission: "Automatic",
      year: 2015,
      description: "Imagination is the world’s most valuable resource. It’s our window to the future, because if we can imagine it, we can create it. Mazda is built on a foundation of imagination and ingenuity. It’s the fuel behind all we create and achieve. It has given us SKYACTIV TECHNOLOGY, ‘KODO — Soul of Motion’ design and countless successes that once existed only in someone’s imagination. These pages show how imagination is an integral part of our innovative cars. First-Ever Mazda CX-8 Diesel brings a level of sleek design and diesel performance and efficiency that you wouldn’t expect in a seven-seat SUV. Featuring all the luxury and technology Mazda SUVs have become known for, as well as the latest in advanced safety technology, you’ll discover an outstanding SUV experience for growing families. Mazda’s stunning KODO Design language is at the heart of every Mazda SUV. First-Ever Mazda CX-8 Diesel is the latest example, offering the spacious versatility of a large SUV but with smaller dimensions that don’t compromise on interior space or cabin comfort.",
      features: "7 seats, Air conditioning Automatic, 3-zone Climate Control with Rear Vents, Bluetooth® handsfree phone connectivity, MZD Connect Infotainment System, Cabin Air Filter Ventilation pollen filter, Cruise Control, Seat adjustment - front Manual 6-way (Driver), Manual 6-way (Passenger), Steering column - adjustable, Apple Carplay™ and Android Auto™ Optional Accessory, Auxiliary input 3.5mm MP3 player compatible, 4 x USB input, iPod® connectivity, Bluetooth® audio, Internet Radio Integration Yes (Stitcher™; Aha™ with Facebook™ and Twitter™), Speakers 6, Steering-wheel-mounted audio controls, USB input, Cup holders, Interior illumination, Black cabin headlining, Leather wrapped shift knob, Leather wrapped steering wheel, MZD Connect Infotainment System (7 inch colour touchscreen display, commander dial, voice control, steering wheel controls), Push button engine start, Rear seats - split-fold, Satellite navigationSeat adjustment - front, Rear spoiler, dual chrome exhaust extensions, roof rails, Fog-lampsLED, High Beam Control (HBC), automatic on/off function, coming/leaving home lighting, Keyless entry - remote central locking, Mirrors with Body-coloured, power adjustable, side indicator, automatic power fold, Windscreen wipers - front 2-speed with rain-sensing function, Active Bonnet",
      id   : 2,
      minDay: 3,
      maxDay: 10,
      minPpl: 1,
      maxPpl: 5,
      rent   : 144,
      fuel   : 'Diesel',
      mileage   : "9.7L/100km",
      engineCC   : "2191cc",
      photo: "images/large/large1.jpg"
  },
  {
    type : 'Motor-Home',
    vehicleName : "FORD TRANSIT 470E JUMBO",
    transmission: "Manual",
    year: 2019,
    description: "Ford Transit Commercial Vehicles are known for their reliability, loadspace, comfort and efficiency. With a next generation diesel engine available with 6-speed automatic transmission.Tested for Toughness. Ford ran vehicles at maximum speed for two months. Took them from -40°C to towing fully-laden trailers in 50°C heat. We opened and closed the doors and bonnet over 250,000 times. So if you need tough and reliable, the Transit Commercial Vehicle range has got what it takes. Makes work a pleasure. Whether Transit Custom or Cargo, there’s a range of intelligent features to help lighten the load. Car-like comfort makes work a pleasure, while high-quality materials give a premium feel without compromising everyday practicality.",
    features: "16-inch steel wheels, Roll over mitigation, Torque Vectoring Control, Drive away locking, Power assisted steerting, Rear mudflaps, Drivers armrest, Tachomater, Trip computer, Compartment lamps, 3.5-inch Multi-functional display screen",
    id   : 3,
    minDay: 2,
    maxDay: 15,
    minPpl: 2,
    maxPpl: 6,
    rent   : 200,
    fuel   : 'Diesel',
    mileage   : "17L/100km",
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

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    mapTypeControl: false,
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13
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
  var radioButton = document.getElementById(id);
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
        if (status === 'OK') {
          me.directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
};    //End of address autofield

//Home Menu
document.getElementById('home').addEventListener('click', function(){
  //Vehicle Search box
  document.getElementById('show').innerHTML = " "; //to clear the container
    document.getElementById('show').innerHTML
+=  '<div class="myContainer bg-info mt-3 text-white col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4">'
+    '<h5 class="text-center py-2">Search For your Transport</h5>'
    //map test
+      '<div class="form-group"><div>'
+       '<label class="float-left" for="exampleFormControlSelect1">From</label>'
+        '<input id="origin-input" class="form-control controls float-left" type="text" placeholder="Enter an origin location">'
+           '<div class="clearfix">'
+           '</div>'
+       '<label class="float-left clearfix" for="exampleFormControlSelect1">To</label>'
+       '<input id="destination-input" class="form-control controls ml-5" type="text" placeholder="Enter a destination location">'
+   '</div>'

+   '<div id="map"></div>' //Ends

+    '<label for="exampleFormControlSelect1">Number of Days</label>'
+    '<select class="form-control controls" id="exampleFormControlSelect1">'
+      '<option>1</option>'
+      '<option>2</option>'
+      '<option>3</option>'
+      '<option>4</option>'
+      '<option>5</option>'
+    '</select>'
+    '<label for="exampleFormControlSelect1">Number of People</label>'
+    '<select class="form-control controls" id="exampleFormControlSelect1">'
+      '<option>1</option>'
+      '<option>2</option>'
+      '<option>3</option>'
+      '<option>4</option>'
+      '<option>5</option>'
+    '</select>'
+    '<button type="button" class="btn btn-dark my-3">Search</button>'
+  '</div>'
+  '</div>'
});   //Home menu ends here.

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
  += '<div class="card vCard myContainer border border-light clearfix py-0 ml-4 center mb-2 col-sm-6 col-md-6 col-lg-4">'
  +  '<img src="' + transport[i].photo + ' " class="card-img-top myTransport" alt="Vehicles"/>'
  +  '<ul class="card-body py-1 px-1 list-group list-group-flush">'
  + '<li class="text-primary cardContent list-group-item">' + transport[i].vehicleName + '</li>'
  + '<li class="text-primary cardContent list-group-item" >' + transport[i].type + '</li>'
  + '<li class="text-primary cardContent list-group-item" > ' + transport[i].rent + '</li>'
  + '<button id= "'+ transport[i].id +  '" type="button" class="btn btn-primary modalClass" data-toggle="modal" data-target="#exampleModalCenter">More</button>'
  +  '</ul>'
  +  '</div>'
  // += '<div class="row ml-4">'
  // +'<div class="col">'
  // + '<img class="img-thumbnail mt-3" src="' + transport[i].photo + ' "  alt="Vehicles"/>'
  // + '</div>'
  // + '<div class="col">'
  // + '</br><h5 class="text-danger">' + transport[i].vehicleName + '</h5>'
  // + '</br>Year : <h5 class="text-danger" >' + transport[i].year + '</h5>'
  // + '</br><h5 class="text-danger" > ' + transport[i].rent + '</h5>'
  // + '</div>'
  // + '</div>';
  }
};

allTransport();


//Display search results

// var x = 0;
// var y = 0;
// function bike(){
//   for(var i = 0; i < transport.length; i++) {
//     x = document.getElementById('nod').value;
//     y = document.getElementById('nop').value;
//     console.log(x);
//     console.log(y);
//     if (x <= 5 && y == 1) {
//       console.log('Search');
//       console.log(transport[i]);
//         return transport[i].type;
//
//           }
//         }
//   };

  // Trigger Search Button

    $('.searchBtn').on('click', function(){
      // var days = spinner.spinner( "value" ) ;
      //Read the place values
      // x = parseInt(document.getElementById('nod').value);
      var days = parseInt(document.getElementById('days').value);
      if ((days > 15) || (days < 1)){
        alert('Please Enter between 1 to 15');
      }
      var people = parseInt(document.getElementById('nop').value);
      console.log(days);
      console.log(people);
      document.getElementById('show').innerHTML = " ";
     for(var i = 0; i < transport.length; i++) {
     //   console.log('search result');
     // bike();
       //to clear the container
       console.log(i);
      if ((days >= transport[i].minDay) && (days<= transport[i].maxDay) &&(people >=transport[i].minPpl) && (people <= transport[i].maxPpl)){
        console.log('true');
      document.getElementById('show').innerHTML
      += '<div class="card vCard myContainer border border-light clearfix py-0 ml-4 center mb-2 col-sm-6 col-md-6 col-lg-4">'
      +  '<img src="' + transport[i].photo + ' " class="card-img-top myTransport" alt="Vehicles"/>'
      +  '<ul class="card-body py-1 px-1 list-group list-group-flush">'
      + '<li class="text-primary cardContent list-group-item">' + transport[i].vehicleName + '</li>'
      + '<li class="text-primary cardContent list-group-item" >' + transport[i].type + '</li>'
      + '<li class="text-primary cardContent list-group-item" > ' + transport[i].rent + '</li>'
      + '<button id= " ' + transport[i].id + ' " type="button" class="btn btn-primary modalClass" data-toggle="modal" data-target="#exampleModalCenter">More</button>'
      +  '</ul>'
      +  '</div>'
      }
    }
});   // Vehicle Search ends here.

$('.modalClass').on('click', function(){
  console.log(this.id);
});
