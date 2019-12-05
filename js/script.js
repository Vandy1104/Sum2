console.log('NZ Tourism Transport');

var transport = [
  {
      id          : 0,
      type        : 'Motor-Bike',
      vehicleName : 'BMWF800GT',
      transmission: 'M',
      year        : 2018,
      description : "This is a great middle weight sports tourer with a full fairing, high windshield and touring oriented ergonomics with raised handlebars. Comfortable seating postion which is adjustable 3 ways, a punchy motor along with excellent handling and ABS make for a motorcycle that you just want to keep on riding.",
      features: "All our bikes are prepped and checked over by our Technicians and are backed by our exclusive POWERTRAIN WARRANTY so you'll have no worries getting out on the road.",
      minDay      : 1,
      maxDay      : 5,
      minPpl      : 1,
      maxPpl      : 1,
      luggage     : 0,
      rent        : 109,
      rating      : 'images/star.png',
      fuel        : 'Petrol',
      fuelPrice   : 2.30,
      mileage     : "3.7L/100km",
      mPer100KM   : 3.7,
      engineCC    : "800cc",
      photo       : "images/bikes/bike1.jpg",
      photo2       : "images/bikes/bike1.2.jfif",
      photo3       : "images/bikes/bike1.3.jpg"
  },

  {
      id            : 1,
      type          : 'Small-Car',
      vehicleName   : "TOYOTA YARIS SX 1.5P/4AT/HA/5DR/5",
      transmission  : 'Auto',
      year          : 2015,
      description   : 'The Yaris sets the bar high in looks, performance safety and features. The Yaris offers more than you would expect. The Yaris boasts a sportier look along with a modern and spacious interior and alloy wheels. Sports flair, family first.',
      features      : "New Zealand new, 7 Airbags, 15 inch Alloy Wheels, Fog Lights,Cruise Control, Traction Control, Electronic Stability Control,Parking Sensors, Reversing Camera, Air Conditioning, CD Player, Bluetooth, USB/AUX/MP3 Input,Central Locking.",
      minDay        : 1,
      maxDay        : 10,
      minPpl        : 1,
      maxPpl        : 2,
      luggage       : 1,
      rent          : 129,
      rating        : "images/star.png",
      fuel          : 'Petrol',
      fuelPrice     : 2.30,
      mileage       : "8.5L/100km",
      mPer100KM     : 8.5,
      engineCC      : "1497cc",
      photo         : "images/small/small1.jpg",
      photo2        : "images/small/small1.2.jpg",
      photo3        : "images/small/small1.3.jpg"
  },
  {
      id            : 2,
      type          : 'Large-Car',
      vehicleName   : "MAZDA CX8 LIMITED AWD",
      transmission  : "Auto",
      year          : 2015,
      description   : "Mazda’s stunning KODO Design language is at the heart of every Mazda SUV. First-Ever Mazda CX-8 Diesel is the latest example, offering the spacious versatility of a large SUV but with smaller dimensions that don’t compromise on interior space or cabin comfort.",
      features      : "7 seats, Air conditioning Automatic, 3-zone Climate Control with Rear Vents, Bluetooth® handsfree phone connectivity, MZD Connect Infotainment System, Cabin Air Filter Ventilation pollen filter, Cruise Control, Seat adjustment - front Manual 6-way (Driver), Manual 6-way (Passenger), Steering column - adjustable, Apple Carplay™ and Android Auto™ Optional Accessory, Auxiliary input 3.5mm MP3 player compatible, 4 x USB input, iPod® connectivity, Bluetooth® audio.",
      minDay        : 3,
      maxDay        : 10,
      minPpl        : 1,
      maxPpl        : 5,
      luggage       : 2,
      rent          : 144,
      rating        : "images/star.png",
      fuel          : 'Diesel',
      fuelPrice     : 1.73,
      mileage       : "9.7L/100km",
      mPer100KM     : 9.7,
      engineCC      : "2191cc",
      photo         : "images/large/large1.jpg",
      photo2        : "images/large/large1.2.jpg",
      photo3        : "images/large/large1.3.jpg"
  },
  {
    id              : 3,
    type            : 'Motor-Home',
    vehicleName     : "FORD TRANSIT 470E JUMBO",
    transmission    : "Manual",
    year            : 2019,
    description     : "Ford Transit Commercial Vehicles are known for their reliability, loadspace, comfort and efficiency. With a next generation diesel engine available with 6-speed automatic transmission.Tested for Toughness. Ford ran vehicles at maximum speed for two months. Took them from -40°C to towing fully-laden trailers in 50°C heat.",
    features        : "16-inch steel wheels, Roll over mitigation, Torque Vectoring Control, Drive away locking, Power assisted steerting,Drivers armrest, Tachomater, Trip computer, Compartment lamps, 3.5-inch Multi-functional display screen.",
    minDay          : 2,
    maxDay          : 15,
    minPpl          : 2,
    maxPpl          : 6,
    luggage         : 4,
    rent            : 200,
    rating          : "images/star.png",
    fuel            : 'Diesel',
    fuelPrice       : 1.73,
    mileage         : "17L/100km",
    mPer100KM       : 17,
    engineCC        : "1995cc",
    photo         : "images/mh/mh1.jpg",
    photo2        : "images/mh/mh1.2.jpg",
    photo3        : "images/mh/mh1.3.jpg"
  },
  {
      id          :  4,
      type        : 'Motor-Bike',
      vehicleName : 'INDIAN ROADMASTER DARK HORSE',
      transmission: 'M',
      year        : 2020,
      description : "New to the 2020 Indian Motorcycle lineup is the Roadmaster Dark Horse featuring aggressive modern styling. The Roadmaster Dark Horse features a streamlined fairing, slammed saddlebags, 19 inch front wheel with an open fender.",
      features    : "All our bikes are prepped and checked over by our Technicians and are backed by our exclusive POWERTRAIN WARRANTY so you'll have no worries getting out on the road.",
      minDay      : 1,
      maxDay      : 5,
      minPpl      : 1,
      maxPpl      : 1,
      luggage     : 0,
      rent        : 109,
      rating      : 'images/star.png',
      fuel        : 'Petrol',
      fuelPrice   : 2.30,
      mileage     : "3.7L/100km",
      mPer100KM   : 3.7,
      engineCC    : "1890cc",
      photo       : "images/bikes/bike6.jfif",
      photo2       : "images/bikes/bike2.2.jpg",
      photo3       : "images/bikes/bike2.3.jpg"
  },
  {
      id          :  5,
      type        : 'Motor-Bike',
      vehicleName : 'INDIAN CHALLENGER',
      transmission: 'M',
      year        : 2020,
      description : "The 2020 Indian Challenger is a striking combination of American muscle, next level technology, and premium comfort to deliver a truly unmatched riding experience.",
      features    : "All our bikes are prepped and checked over by our Technicians and are backed by our exclusive POWERTRAIN WARRANTY so you'll have no worries getting out on the road.",
      minDay      : 1,
      maxDay      : 5,
      minPpl      : 1,
      maxPpl      : 1,
      luggage     : 0,
      rent        : 109,
      rating      : 'images/star.png',
      fuel        : 'Petrol',
      fuelPrice   : 2.30,
      mileage     : "3.7L/100km",
      mPer100KM   : 3.7,
      engineCC    : "1768cc",
      photo       : "images/bikes/bike4.jfif",
      photo2      : "images/bikes/bike3.2.jpg",
      photo3      : "images/bikes/bike3.3.jpg"
  },
  {
      id          :  6,
      type        : 'Motor-Bike',
      vehicleName : 'INDIAN SCOUT',
      transmission: 'M',
      year        : 2020,
      description : "The 69 cubic inch liquidcooled V-twin that puts out 100 horsepower combined with its lightweight chassis inspires confidence and gives the rider plenty of smiles per miles.",
      features    : "All our bikes are prepped and checked over by our Technicians and are backed by our exclusive POWERTRAIN WARRANTY so you'll have no worries getting out on the road.",
      minDay      : 1,
      maxDay      : 5,
      minPpl      : 1,
      maxPpl      : 1,
      luggage     : 0,
      rent        : 109,
      rating      : 'images/star.png',
      fuel        : 'Petrol',
      fuelPrice   : 2.30,
      mileage     : "3.7L/100km",
      mPer100KM   : 3.7,
      engineCC    : "1133cc",
      photo       : "images/bikes/bike6.jpg",
      photo2      : "images/bikes/bike4.2.jpg",
      photo3      : "images/bikes/bike4.3.jpg"
  },
  {
      id          :  7,
      type        : 'Motor-Bike',
      vehicleName : 'INDIAN CHIEFTAIN ELITE',
      transmission: 'M',
      year        : 2020,
      description : "The ultra premium 2020 Chieftain Elite combines style, technology and performance, including the new Thunder Stroke 116 and Indian Motorcycle's booming PowerBand Audio system with integrated saddlebag speakers. PowerBand Audio produces crystal-clear sound that is 50% louder than Indian Motorcycle's stock audio system.",
      features    : "All our bikes are prepped and checked over by our Technicians and are backed by our exclusive POWERTRAIN WARRANTY so you'll have no worries getting out on the road.",
      minDay      : 1,
      maxDay      : 5,
      minPpl      : 1,
      maxPpl      : 1,
      luggage     : 0,
      rent        : 109,
      rating      : 'images/star.png',
      fuel        : 'Petrol',
      fuelPrice   : 2.30,
      mileage     : "3.7L/100km",
      mPer100KM   : 3.7,
      engineCC    : "1890cc",
      photo       : "images/bikes/bike3.jpg",
      photo2      : "images/bikes/bike5.2.jpg",
      photo3      : "images/bikes/bike5.3.jpg"
  },
  {
      id            : 8,
      type          : 'Small-Car',
      vehicleName   : "MAZDA 3 I HATCH GTX",
      transmission  : 'Auto',
      year          : 2019,
      description   : 'All-New Mazda3 represents the beginning of a new era for Mazda. A car that takes every element of design, performance and technology beyond anything that’s come before. It’s a drive you need to feel to believe.',
      features      : 'Parking sensors, (front)Vanity mirrors (front) with illumination7-inch TFT LCD customisable multi-information meter display8.8-inch widescreen colour displayActive Driving Display (windscreen-projected)Airbags SRS: front (driver and passenger), side (front), knee (driver) and curtain (front and rear)Air-conditioning.',
      minDay        : 1,
      maxDay        : 10,
      minPpl        : 1,
      maxPpl        : 2,
      luggage       : 1,
      rent          : 129,
      rating        : "images/star.png",
      fuel          : 'Petrol',
      fuelPrice     : 2.30,
      mileage       : "8.5L/100km",
      mPer100KM     : 8.5,
      engineCC      : "2500cc",
      photo         : "images/small/small2.1.jpg",
      photo2        : "images/small/small2.2.jpg",
      photo3        : "images/small/small2.3.jpg"
  },
  {
      id            : 9,
      type          : 'Small-Car',
      vehicleName   : "FORD FOCUS SPORT 1.5 ECOB HATCH",
      transmission  : 'Auto',
      year          : 2019,
      description   : 'All-New Mazda3 represents the beginning of a new era for Mazda. A car that takes every element of design, performance and technology beyond anything that’s come before. It’s a drive you need to feel to believe.',
      features      : '17" Alloy Wheels, Tow Bar, ABSPower Steering, Cruise Control, Traction Control, Electronic Stability Control, Automatic Headlights, Parking Sensors, Reversing Camera, Climate ControlCD Player, Bluetooth, USB/AUX/MP3 Input, GPS Navigation.',
      minDay        : 1,
      maxDay        : 10,
      minPpl        : 1,
      maxPpl        : 2,
      luggage       : 1,
      rent          : 129,
      rating        : "images/star.png",
      fuel          : 'Petrol',
      fuelPrice     : 2.30,
      mileage       : "8.5L/100km",
      mPer100KM     : 8.5,
      engineCC      : "1498cc",
      photo         : "images/small/small3.1.jpg",
      photo2        : "images/small/small3.2.jpg",
      photo3        : "images/small/small3.3.jpg"
  },
  {
      id            : 10,
      type          : 'Small-Car',
      vehicleName   : "HOLDEN BARINA RS 1.4T HATCH",
      transmission  : 'Auto',
      year          : 2016,
      description   : 'The Holden Barina RS stands out for all the right reasons – sporty stance, edgy looks inside and out, class-leading standard safety features, and included luxuries that many small cars offer only as added extras. The Barina comes with the must-haves like a Bluetooth, USB/AUX/MP3 Input sound system that lets your friends DJ your favourite beats.',
      features      : 'ABSPower Steering, Cruise Control, Traction Control, Electronic Stability Control, 17" Alloy Wheels, Tow Bar, Automatic Headlights, Parking Sensors, Reversing Camera, Climate ControlCD Player, Bluetooth, USB/AUX/MP3 Input, GPS Navigation, Central Locking.',
      minDay        : 1,
      maxDay        : 10,
      minPpl        : 1,
      maxPpl        : 2,
      luggage       : 1,
      rent          : 129,
      rating        : "images/star.png",
      fuel          : 'Petrol',
      fuelPrice     : 2.30,
      mileage       : "8.5L/100km",
      mPer100KM     : 8.5,
      engineCC      : "1364cc",
      photo         : "images/small/small4.1.jpg",
      photo2        : "images/small/small4.2.jpg",
      photo3        : "images/small/small4.3.jpg"
  },
  {
      id            : 11,
      type          : 'Small-Car',
      vehicleName   : "FORD FOCUS TREND 1.5 ECOB HATCH",
      transmission  : 'Auto',
      year          : 2018,
      description   : 'Effortless control - Stay connected and in control of your world, hands free. Using simple voice commands you can make calls, choose music, control the climate, and even use the sat-nav with SYNC 3. Alternatively, use the 8-inch colour touch screen to navigate your way through the extensive range of connectivity features.',
      features      : 'Tow Bar, ABSPower Steering, Cruise Control, Traction Control, Electronic Stability Control, Automatic Headlights, Parking Sensors, Reversing Camera, Climate ControlCD Player, Bluetooth, USB/AUX/MP3 Input, GPS Navigation, Central Locking, Multi-Function Steering Wheel.',
      minDay        : 1,
      maxDay        : 10,
      minPpl        : 1,
      maxPpl        : 2,
      luggage       : 1,
      rent          : 129,
      rating        : "images/star.png",
      fuel          : 'Petrol',
      fuelPrice     : 2.30,
      mileage       : "8.5L/100km",
      mPer100KM     : 8.5,
      engineCC      : "1498cc",
      photo         : "images/small/small5.1.jpg",
      photo2        : "images/small/small5.2.jpg",
      photo3        : "images/small/small5.3.jpg"
  },
  {
      id            : 12,
      type          : 'Large-Car',
      vehicleName   : "NISSAN X-TRAIL Medium SUV 2018",
      transmission  : "Manual",
      year          : 2018,
      description   : "The new Nissan X-TRAIL offers updated exterior styling - an enlarged Nissan V-motion grille, updated headlights with LED signature daytime running lights, and new 19-inch aluminum alloy wheels^ combine to make this the most stylish Nissan X-TRAIL yet.",
      features      : "Whatever kind of life you live, the Nissan X-TRAIL can accommodate it. Within its ample interior space, a series of clever innovations offer impressive versatility while maintaining superior passenger comfort. The second-row seating sports individual air vents, as well as a split-folding system that lets you open up a whopping 945L^ of boot space. The rear doors open wide to 80° giving you easy access, split folding third-row* is perfect if you have large family.",
      minDay        : 3,
      maxDay        : 10,
      minPpl        : 1,
      maxPpl        : 5,
      luggage       : 2,
      rent          : 144,
      rating        : "images/star.png",
      fuel          : 'Diesel',
      fuelPrice     : 1.73,
      mileage       : "9.7L/100km",
      mPer100KM     : 9.7,
      engineCC      : "2488cc",
      photo         : "images/large/large2.1.jpg",
      photo2        : "images/large/large2.2.jpg",
      photo3        : "images/large/large2.3.jpg"
  },
  {
      id            : 13,
      type          : 'Large-Car',
      vehicleName   : "Skoda's KODIAQ SUV NEW",
      transmission  : "Auto",
      year          : 2015,
      description   : "Skoda NZ has confirmed the specification and pricing for the new Kodiaq which takes the brand into a new sector of the market as its first large SUV model.",
      features      : "From transporting the family and general chores to the long weekend DIY project, there’s a reason you need a large SUV. With three row, 7-Seat versatility and an all rear seats folded flat luggage capacity of 2,005 Litres, the ŠKODA Kodiaq gives you plenty of space to stretch your legs.",
      minDay        : 3,
      maxDay        : 10,
      minPpl        : 1,
      maxPpl        : 5,
      luggage       : 2,
      rent          : 144,
      rating        : "images/star.png",
      fuel          : 'Diesel',
      fuelPrice     : 1.73,
      mileage       : "9.7L/100km",
      mPer100KM     : 9.7,
      engineCC      : "2488cc",
      photo         : "images/large/large3.1.jpg",
      photo2        : "images/large/large3.2.png",
      photo3        : "images/large/large3.3.jpg"
  },
  {
      id            : 14,
      type          : 'Large-Car',
      vehicleName   : "FORD ENDURA SUV TREND 2.0D 8A FWD",
      transmission  : "Auto",
      year          : 2019,
      description   : "The Ford Endura is a sophisticated and luxurious midsized urban SUV. Underneath European design, the Endura is packed with intelligent technology and innovation, as well as a powerful yet efficient engine.This well-appointed SUV was created with your driving pleasure in mind. The Endura’s 2.0L Turbo Diesel Engine with 8-speed automatic transmission allows for maximum power with incredible fuel efficiency. Save on fuel while you enjoy torque you could need on anadventure.",
      features      : "Departure Warning, Evasive Steer Assist, Driver Alert System, Front & Rear Sensors, Daytime Running Lights, Automatic High Beam, Follow Me Home Headlights 18 inch, Alloy Wheels, Roof Rails, ABSAdaptive Cruise Control.",
      minDay        : 3,
      maxDay        : 10,
      minPpl        : 1,
      maxPpl        : 5,
      luggage       : 2,
      rent          : 144,
      rating        : "images/star.png",
      fuel          : 'Diesel',
      fuelPrice     : 1.73,
      mileage       : "9.7L/100km",
      mPer100KM     : 9.7,
      engineCC      : "2000cc",
      photo         : "images/large/large4.1.jpg",
      photo2        : "images/large/large4.2.jpg",
      photo3        : "images/large/large4.3.jpg"
  },
  {
      id            : 15,
      type          : 'Large-Car',
      vehicleName   : "FORD ESCAPE ST-LINE 2.0 ECOB AWD",
      transmission  : "Auto",
      year          : 2019,
      description   : "Standing out from the crowd, the Escape ST-Line with it's 18-inch Absolute Black alloys matched to the front grille, fog-lamp surrounds, roof rails and rear valence to reflect it's athletic, bold nature.",
      features      : "Driver Alert System, Front & Rear Sensors, Daytime Running Lights, Departure Warning, Evasive Steer Assist, Automatic High Beam, Follow Me Home Headlights 18 inch, Alloy Wheels, Roof Rails, ABSAdaptive Cruise Control.",
      minDay        : 3,
      maxDay        : 10,
      minPpl        : 1,
      maxPpl        : 5,
      luggage       : 2,
      rent          : 144,
      rating        : "images/star.png",
      fuel          : 'Petrol',
      fuelPrice     : 1.73,
      mileage       : "9.7L/100km",
      mPer100KM     : 9.7,
      engineCC      : "1998cc",
      photo         : "images/large/large5.1.jpg",
      photo2        : "images/large/large5.2.jpg",
      photo3        : "images/large/large5.3.jpg"
  },
  {
    id              : 16,
    type            : 'Motor-Home',
    vehicleName     : "Rocket 2 Berth 4/11 Motorhome",
    transmission    : "Manual",
    year            : 2001,
    description     : "Qualmark endorsed, New Zealand Tourism Award winner. This 2-berth budget option is a perfect way to see New Zealand. The Rocket has a full size double bed that can be used inside or extended out the back into a rear awning.",
    features        : "RATES INCLUDE:Standard insurance, unlimited kilometres, 24 hour roadside assistance, GST, extra driver fees, free after hours pick up and drop off service, free NZ Frenzy Book (250 page ultimate travel guide book),free travel app (Android phone only) and free airport return transfers for rentals over 14 days.",
    minDay          : 2,
    maxDay          : 15,
    minPpl          : 2,
    maxPpl          : 6,
    luggage         : 4,
    rent            : 200,
    rating          : "images/star.png",
    fuel            : 'Diesel',
    fuelPrice       : 1.73,
    mileage         : "17L/100km",
    mPer100KM       : 17,
    engineCC        : "3000cc",
    photo         : "images/mh/mh2.1.jfif",
    photo2        : "images/mh/mh2.2.jpg",
    photo3        : "images/mh/mh2.3.jpg"
  },
  {
    id              : 17,
    type            : 'Motor-Home',
    vehicleName     : "American Coach grand Motorhome",
    transmission    : "Manual",
    year            : 2005,
    description     : "Qualmark endorsed, New Zealand Tourism Award winner. This 2-berth budget option is a perfect way to see New Zealand. The Rocket has a full size double bed that can be used inside or extended out the back into a rear awning.",
    features        : "RATES INCLUDE:Standard insurance, unlimited kilometres, 24 hour roadside assistance, GST, extra driver fees, free after hours pick up and drop off service, free NZ Frenzy Book (250 page ultimate travel guide book),free travel app (Android phone only) and free airport return transfers for rentals over 14 days.",
    minDay          : 2,
    maxDay          : 15,
    minPpl          : 2,
    maxPpl          : 6,
    luggage         : 4,
    rent            : 200,
    rating          : "images/star.png",
    fuel            : 'Diesel',
    fuelPrice       : 1.73,
    mileage         : "17L/100km",
    mPer100KM       : 17,
    engineCC        : "3000cc",
    photo         : "images/mh/mh3.1.jfif",
    photo2        : "images/mh/mh3.2.jpg",
    photo3        : "images/mh/mh3.3.jpg"
  },
  {
    id              : 18,
    type            : 'Motor-Home',
    vehicleName     : "Entegra Coach grand Motorhome",
    transmission    : "Manual",
    year            : 2012,
    description     : "Qualmark endorsed, New Zealand Tourism Award winner. This 2-berth budget option is a perfect way to see New Zealand. The Rocket has a full size double bed that can be used inside or extended out the back into a rear awning.",
    features        : "RATES INCLUDE:Standard insurance, unlimited kilometres, 24 hour roadside assistance, GST, extra driver fees, free after hours pick up and drop off service, free NZ Frenzy Book (250 page ultimate travel guide book),free travel app (Android phone only) and free airport return transfers for rentals over 14 days.",
    minDay          : 2,
    maxDay          : 15,
    minPpl          : 2,
    maxPpl          : 6,
    luggage         : 4,
    rent            : 200,
    rating          : "images/star.png",
    fuel            : 'Diesel',
    fuelPrice       : 1.73,
    mileage         : "17L/100km",
    mPer100KM       : 17,
    engineCC        : "3500cc",
    photo         : "images/mh/mh4.1.jfif",
    photo2        : "images/mh/mh4.2.jpg",
    photo3        : "images/mh/mh4.3.jpg"
  },
  {
    id              : 19,
    type            : 'Motor-Home',
    vehicleName     : "Forest River RV grand Motorhome",
    transmission    : "Manual",
    year            : 2016,
    description     : "Qualmark endorsed, New Zealand Tourism Award winner. This 2-berth budget option is a perfect way to see New Zealand. The Rocket has a full size double bed that can be used inside or extended out the back into a rear awning.",
    features        : "RATES INCLUDE:Standard insurance, unlimited kilometres, 24 hour roadside assistance, GST, extra driver fees, free after hours pick up and drop off service, free NZ Frenzy Book (250 page ultimate travel guide book),free travel app (Android phone only) and free airport return transfers for rentals over 14 days.",
    minDay          : 2,
    maxDay          : 15,
    minPpl          : 2,
    maxPpl          : 6,
    luggage         : 4,
    rent            : 200,
    rating          : "images/star.png",
    fuel            : 'Diesel',
    fuelPrice       : 1.73,
    mileage         : "17L/100km",
    mPer100KM       : 17,
    engineCC        : "2980cc",
    photo         : "images/mh/mh5.1.jpg",
    photo2        : "images/mh/mh5.2.jpg",
    photo3        : "images/mh/mh5.3.jpg"
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

var distance;

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
  $('.mainCarousel').hide();
  $('#map').hide();
  $('.wizard').hide();
  document.getElementById('show').innerHTML
  +='<nav aria-label="breadcrumb">'
  +  '<ol class="breadcrumb bg-white">'
  + '<li class="breadcrumb-item ml-5"><a href="index.html">Home</a></li>'
  + '<li class="breadcrumb-item active" aria-current="page">Contact</li>'
  + '</ol>'
  + '</nav>'
  + '<form class="myContainer mt-5 w-50">'
  + '<h4 class="ml2 my-5">Write to us..</h4>'
  +  '<div class="form-group">'
  +  '<label for="exampleFormControlInput1">Email address</label>'
  +  '<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">'
  +  '</div>'
  +  '<div class="form-group">'
  +  '<label for="exampleFormControlInput1">Subject</label>'
  +  '<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Type your subject">'
  +  '</div>'
  +  '<div class="form-group">'
  +  '<label for="exampleFormControlTextarea1">Message/Enquiry</label>'
  +  '<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>'
  +  '</div>'
  +  '<button onClick="sendAlert()" type="button" class="btn btn-dark my-5 ml-1 sendBtn w-50">Send</button>'
  +  '</form>'
});

function sendAlert(){
$('.sendBtn').on('click', function(){
  Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Message sent successfullly.. Thanks',
  showConfirmButton: false,
  timer: 2000
})
});
};
//Function to display all vehicles.
function allTransport(){
  document.getElementById('show').innerHTML = " "; //to clear the container
  document.getElementById('show').innerHTML
  += '<h4 class="text-white bg-primary my-4"><marquee>Trusted by Over<b> 8 Million </b>customers and counting</marquee></h4><br>'
  for(var i = 0; i < transport.length; i++) {
  document.getElementById('show').innerHTML
  += '<div class="vCard py-2 mt-3 mx-1 ml-5 myContainer clearfix col-sm-6 col-md-6 col-lg-4">'
  +  '<img src="' + transport[i].photo + ' " class="card-img-top" alt="Vehicles"/>'
  +  '<br><div><img class="icons ml-2" src="images/person.png" alt="person"><img class="icons ml-4" src="images/luggage.png" alt="luggage"><img class="icons ml-4" src="images/transmission.png" alt="transmission"></div><div class="text-primary text-dark ml-3 small" >' + transport[i].maxPpl + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + transport[i].luggage + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + transport[i].transmission + '</div>'
  +  '<br><ul class="py-0 px-0 list-group list-group-flush">'
  + '<li class="text-primary cardContent list-group-item">' + transport[i].vehicleName + '</li>'
  + '<li class="text-primary cardContent list-group-item" >' + transport[i].type + '</li>'
  + '<li class="text-primary cardContent list-group-item" > Rent: $ ' + transport[i].rent + ' per day </li>'
  + '<img src="' + transport[i].rating + ' " class="card-img-top smaller" alt="Vehicles"/>'
  + '<br><button id= " ' + transport[i].id + ' " type="button" class="btn btn-primary modalClass modalClass1" data-toggle="modal" data-target=".bd-example-modal-lg">View More</button>'
  +  '</ul>'
  +  '</div>'

  }
};

allTransport();
// initMap();
modals1();
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

  distance = parseInt(distance);

  console.log(distance);

  for(var i = 0; i < transport.length; i++) {
  if (parseInt(this.id) === parseInt(transport[i].id)) {
    console.log(transport[i].fuelPrice);
    var fuelCost = (distance/100 * transport[i].mPer100KM * transport[i].fuelPrice);
    var totalRent = days * transport[i].rent;
    console.log(totalRent);
    console.log(fuelCost);
    var totalCost = (fuelCost + totalRent).toFixed(2);
    console.log(totalCost);

    console.log('ID matched');
    document.getElementById('modalContent').innerHTML +=
      '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">'
    +  '<div class="carousel-inner">'
    +  '<div class="carousel-item active">'
    +  '<img src=" ' + transport[i].photo + ' " class="d-block w-50 center" alt="..."></div><div class="carousel-item">'
    +  '<img src=" ' + transport[i].photo2 + ' " class="d-block w-50 center" alt="..."></div>'
    +  '<div class="carousel-item"><img src=" ' + transport[i].photo3 + ' " class="d-block w-50 center" alt="..."></div></div>'
    +  '<a class="carousel-control-prev bg-primary" href="#carouselExampleControls" role="button" data-slide="prev">'
    +  '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
    +  '<span class="sr-only">Previous</span>'
    +  '</a><a class="carousel-control-next bg-primary" href="#carouselExampleControls" role="button" data-slide="next">'
    +  '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
    +  '<span class="sr-only">Next</span></a></div>'
    +  '<div class="card myContainer border border-light clearfix py-0 ml-4 center mb-2 col-sm-6 col-md-6 col-lg-4">'
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
    + '<div class="costContainer bg-primary text-center text-white py-5 my-5"><h4 class="my-3">There you go!</h4><h6 class="w-100"><b> The total Distance you are travelling is: </b>' + distance + 'KM</h6>'
    + '<h6 class="w-100"><b> Fuel Cost: $ </b>' + fuelCost + ' as per ' + transport[i].mileage + '</h6>'
    + '<h6 class="w-100"><b> Total hiring rent for vehicle: $ </b>' + totalRent + ' for ' + days + ' days.</h6>'
    + '<h6 class="w-100"><b> Yours Total Cost will be: $ </b>' + totalCost + '</h6></div>'


    + '<br><h6 class="w-100 text-justify"><b> Description: </b>' + transport[i].description + '</h6>'
    + '<br><h6 class="w-100 text-justify"><b> Features: </b>' + transport[i].features + '</h6>'
    + '<br><div class="modal-footer"><button type="button" onClick="bookAlert()" class="btn btn-danger book">Book Now</button>'
    + '<button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button></div>'
    + '</div>'
    + '</div>'
    }
  }
  //initMap()
});
}

//Book Now button effect using jquery UI.

$( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } );      // Book now button effect ends here.


  //Book now button sweetalert.
    function bookAlert(){
    $('.book').on('click', function(){
    //console.log('there you go');
    Swal.fire({
    title: 'Congrats!',
    text: 'You have been booked. Yours booking reference: NZTransport1548',
    imageUrl: 'images/logo.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image'
  });
  });
}


//Home page Modals by default.

function modals1(){
$('.modalClass1').on('click', function(){
  $('.myModal').show();
  //console.log(this.id);
  //console.log(typeof(this.id));

  document.getElementById('modalContent').innerHTML = " ";

  for(var i = 0; i < transport.length; i++) {
  if (parseInt(this.id) === parseInt(transport[i].id)) {

    console.log('ID matched');
    document.getElementById('modalContent').innerHTML +=
      '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">'
    +  '<div class="carousel-inner">'
    +  '<div class="carousel-item active">'
    +  '<img src=" ' + transport[i].photo + ' " class="d-block w-50 center" alt="..."></div><div class="carousel-item">'
    +  '<img src=" ' + transport[i].photo2 + ' " class="d-block w-50 center" alt="..."></div>'
    +  '<div class="carousel-item"><img src=" ' + transport[i].photo3 + ' " class="d-block w-50 center" alt="..."></div></div>'
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


    + '<br><h6 class="w-100 text-justify"><b> Description: </b>' + transport[i].description + '</h6>'
    + '<br><h6 class="w-100 text-justify"><b> Features: </b>' + transport[i].features + '</h6>'
    + '<div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button></div>'
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
  $('.wizard').hide();
  $('.map').hide();
  $('.mainCarousel').hide();
    document.getElementById('show').innerHTML
      = '<nav aria-label="breadcrumb">'
      +  '<ol class="breadcrumb bg-white">'
      + '<li class="breadcrumb-item"><a href="index.html">Home</a></li>'
      + '<li class="breadcrumb-item active" aria-current="page">Vehicles</li>'
      + '</ol>'
      + '</nav>'
      // + '<select class="custom-select myContainer w-50" id="drop">'
      // + '<option selected>Select Vehicle</option>'
      // + '<option class="motorBike" value="Motor-Bike" onClick="motorBike()">Motor-Bike</option>'
      // + '<option class="smallCar" value="Small-Car">Small-Car</option>'
      // + '<option class="largeCar" value="Large-Car">Large-Car</option>'
      // + '<option class="motorHome" value="Motor-Home">Motor-Home</option>'
      // + '</select>'
        vehiclesForVehiclesMenu();

        modals1();
      });



  // Trigger Search Button
    var days, people, originInput, destinationInput;
    $('.searchBtn').on('click', function(){
      let timerInterval
      Swal.fire({
        title: 'Searching...',
        html: 'Searching <b>Results</b>.',
        timer: 2000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            Swal.getContent().querySelector('b')
              .textContent = Swal.getTimerLeft()
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.timer
        ) {
          console.log('I was closed by the timer') // eslint-disable-line
        }
      })    //Sweetalert ends here.


      var originInput = document.getElementById('origin-input').value;
      var destinationInput = document.getElementById('destination-input').value;

      //alert for entering both start and end location
      if ((originInput === "") || (destinationInput === "")){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Enter Start & End Location!',
          // footer: '<a href>Why do I have this issue?</a>'
        })
      }  // alert ends here.

      days = parseInt(document.getElementById('days').value);
      if ((days > 15) || (days < 1)){
          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Enter days between 1 to 15!',
          // footer: '<a href>Why do I have this issue?</a>'
        })
      }

       people = parseInt(document.getElementById('nop').value);
      console.log(days);
      console.log(people);
      console.log(distance);

      document.getElementById('show').innerHTML = " ";
      document.getElementById('show').innerHTML
      = '<br><ol class="breadcrumb bg-white">'
      + '<li class="breadcrumb-item active ml-5" aria-current="page"><a href="#">Home</a></li>'
      + '</ol>'
      + '<h4 class="ml-5">Search results/</h4><br>'
      for(var i = 0; i < transport.length; i++) {
     //   console.log('search result');
       console.log(i);
      if ((days >= transport[i].minDay) && (days<= transport[i].maxDay) &&(people >=transport[i].minPpl) && (people <= transport[i].maxPpl)){
      console.log('true');
      document.getElementById('show').innerHTML
      += '<div class="card vCard myContainer border border-light clearfix py-0 ml-5 mx-1 center mb-2 col-sm-6 col-md-6 col-lg-4">'
      +  '<img src="' + transport[i].photo + ' " class="card-img-top myTransport" alt="Vehicles"/>'
      +  '<br><br><div><img class="icons ml-2" src="images/person.png" alt="person"><img class="icons ml-4" src="images/luggage.png" alt="luggage"><img class="icons ml-4" src="images/transmission.png" alt="transmission"></div><div class="text-primary text-dark ml-3 small" >' + transport[i].maxPpl + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + transport[i].luggage + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + transport[i].transmission + '</div>'
      +  '<br><ul class="card-body py-1 px-1 list-group list-group-flush">'
      + '<li class="text-primary cardContent list-group-item">' + transport[i].vehicleName + '</li>'
      + '<li class="text-primary cardContent list-group-item" >' + transport[i].type + '</li>'
      + '<li class="text-primary cardContent list-group-item" > ' + transport[i].rent + ' per day</li>'
      + '<br><button id= " ' + transport[i].id + ' " type="button" class="btn btn-primary modalClass" data-toggle="modal" data-target=".bd-example-modal-lg">View More</button>'
      +  '</ul>'
      +  '</div>'
      }
    }
    modals();
});

  $('#vehicleTypes, #submit').hide();
document.getElementById('vehicles').addEventListener('click', function(){
  $('#vehicleTypes, #submit').show();
});

function vehiclesForVehiclesMenu(){
  for(var i = 0; i < transport.length; i++) {
  document.getElementById('show').innerHTML
  += '<br><div class="row ml-4 container jumbotron w-75 mx-auto bg-dark text-white col-12 col-sm-12 col-md-12 col-lg-12">'
  +  '<div class="col">'
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
  + '<img src="' + transport[i].rating + ' " class="card-img-top smaller" alt="Vehicles"/>'
  + '<br><br><button id= " ' + transport[i].id + ' " type="button" class="btn btn-primary modalClass modalClass1" data-toggle="modal" data-target=".bd-example-modal-lg">View More</button>'
  + '</div>'
  + '</div>';
  }
}


$('#submit').click(function(){
  var vehicleType=document.getElementById('vehicleTypes').value;
  console.log(vehicleType);
  document.getElementById('show').innerHTML = " ";
  document.getElementById('show').innerHTML
  = '<nav aria-label="breadcrumb">'
  +  '<ol class="breadcrumb bg-white">'
  + '<li class="breadcrumb-item"><a href="index.html">Home</a></li>'
  + '<li class="breadcrumb-item active" aria-current="page">Vehicles</li>'
  + '</ol>'
  + '</nav>'
  for(var i = 0; i < transport.length; i++) {
  if (transport[i].type === vehicleType){
    document.getElementById('show').innerHTML
    += '<br><div class="row ml-4 container jumbotron w-75 mx-auto bg-dark text-white col-12 col-sm-12 col-md-12 col-lg-12">'
    +  '<div class="col">'
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
    + '<img src="' + transport[i].rating + ' " class="card-img-top smaller" alt="Vehicles"/>'
    + '<br><br><button id= " ' + transport[i].id + ' " type="button" class="btn btn-primary modalClass modalClass1" data-toggle="modal" data-target=".bd-example-modal-lg">View More</button>'
    + '</div>'
    + '</div>';
  }
  }
  modals1();
});
