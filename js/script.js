console.log('NZ Tourism Transport');

var transport = [
  {
      type : "Browny",
      vehicleName : "Browny",
      id   : "AB101",
      minPpl: "Australian Bulldog",
      maxPpl: "Brown and White",
      nop: 50,
      nod   : 8,
      minDay: "Australian Bulldog",
      maxDay: "Australian Bulldog",
      fuel   : 8,
      fuelC   : 8,
      engineCC   : 8,
      photo: "images/aussieBulldog.jpg"

  },
  {
    name : "Blacky",
    id   : "AS102",
    breed: "American Staffordshire",
    color: "Black and White",
    height: 60,
    age   : 10,
    photo: "images/americanStaffordshire.jpg"
  },
  {
    name : "Beaggie",
    id   : "B103",
    breed: "Beagle",
    color: "Brown, white and black",
    height: 35,
    age   : 6,
    photo: "images/beagle.jpg"
  },
  {
    name : "Alasky",
    id   : "AM104",
    breed: "Alaskan Malamute",
    color: "Black and White",
    height: 70,
    age   : 11,
    photo: "images/alaskanMalamute.jpg"
  },
  {
    name : "Britty",
    id   : "BB105",
    breed: "British Bulldog",
    color: "Brown and White",
    height: 30,
    age   : 13,
    photo: "images/britishBulldog.jpg"
  }
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


function allTransport(){
  document.getElementById('dogs').innerHTML = " "; //to clear the container
for(var i = 0; i < transport.length; i++) {
  document.getElementById('dogs').innerHTML
  += '</br><h1 class="jumbotron text-danger">' + transport[i].name + '</h1>'
  + '<div class="row">'
  +'<div class="col">'
  + '<img class="img-thumbnail mt-5 myDogs" src="' + transport[i].photo + ' "  alt="Dog"/>'
  + '</div>'
  + '<div class="col">'
  + '</br></br> Breed : <h5 class="text-danger" >' + transport[i].breed + '</h5>'
  + '</br> Age : <h5 class="text-danger" > ' + transport[i].age + '</h5>'
  + '</br> Height : <h5 class="text-danger" >' + transport[i].height + '</h5>'
  + '</div>'
  + '</div>';
}
}
