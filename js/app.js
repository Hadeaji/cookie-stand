'use strict';
var parent = document.getElementById('mai');
var table = document.createElement('table');
table.setAttribute('id', 'MainTable');
parent.appendChild(table);


var HourOfWork = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];

var locations = [];

function Location(Name, MinCustPHour, MaxCustPHour, avgCookPCust, OpenningTime) {
  this.name = Name;
  this.theMinCust_hour = MinCustPHour;
  this.theMaxCust_hour = MaxCustPHour;
  this.avgCookie_Cust = avgCookPCust;
  this.OpenTime = 6;
  this.CloseTime = 20;
  this.workTime = OpenningTime;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  locations.push(this);



  //Custmer Per Hour
  Location.prototype.getinfo = function(){
    for (var i = 0; i < HourOfWork.length; i++) {
      this.custPerHour.push(customersPerHour(this.theMinCust_hour, this.theMaxCust_hour));
    }};

  // Cookies Per Hour
  Location.prototype.getcookie = function(){
    for (var i = 0; i < this.custPerHour.length; i++) {
      this.cookiesPerHour.push(values(this.custPerHour[i], this.avgCookie_Cust));
    }};
  // Total
  Location.prototype.getotal = function(){
    var totalval = 0;
    totalval = total(this.cookiesPerHour);
    this.totalCookies = totalval;
    return this.totalCookies;
  };

}
// function table (){
//   var parent = document.getElementById('mai');
//   var tablehead = document.createElement('table');
//   tablehead.setAttribute('id', 'MainTable');
//   parent.appendChild(tablehead);



//   var div = document.getElementById(this.name);

//   var section = document.createElement('section');
//   div.appendChild(section);


// }




// Location.prototype.render = function(){
//   // for(var i = 0 ; i < this.HourOfWork; i++){
//   //   var tableheading = document.createElement('th');
//   //   table.appendChild(tableheading);
//   // }

// };



var location1 = new Location('Seattle',23,65,6.3,'From 6:00AM To 8:00PM');

location1.getinfo();
location1.getcookie();
location1.getotal();

var location2 = new Location('Tokyo',3,24,1.2,'From 6:00AM To 8:00PM');

location2.getinfo();
location2.getcookie();
location2.getotal();

var location3 = new Location('Dubai',11,38,3.7,'From 6:00AM To 8:00PM');

location3.getinfo();
location3.getcookie();
location3.getotal();

var location4 = new Location('Paris',20,38,2.3,'From 6:00AM To 8:00PM');

location4.getinfo();
location4.getcookie();
location4.getotal();

var location5 = new Location('Lima',2,16,4.6,'From 6:00AM To 8:00PM');

location5.getinfo();
location5.getcookie();
location5.getotal();


console.log(locations);





// table
function tablema(){
  var Sums;
  var columnSum =[0,0,0,0,0];

  for(var i = 0; i < locations.length +2 ; i++){
    var Row = document.createElement('tr');
    var rowSum =0;
    for(var m = 0; m < HourOfWork.length +2 ; m++){
      var hou = HourOfWork[m -1];
      var thcell = document.createElement('th');
      var tdcell = document.createElement('td');

      if(i == 0 && m == 0){;
        thcell.textContent = '';
        Row.appendChild(thcell);
      } else if(i == 0 && m >= 1 && m != HourOfWork.length +1){
        thcell.textContent = hou + ' O\'clock';
        Row.appendChild(thcell);
      } else if(i == 0 && m == HourOfWork.length +1){
        thcell.textContent = 'Daily Location Total';
        Row.appendChild(thcell);
      } else if (i >= 1 && m == 0 && i != locations.length +1 ){
        tdcell.textContent = locations[i-1].name;
        Row.appendChild(tdcell);
      }  else if (i >= locations.length +1 && m == 0){
        tdcell = document.createElement('td');
        tdcell.textContent = 'Totals';
        Row.appendChild(tdcell);
      } else if (i >= 1 && m >= 1 && i != locations.length +1 && m != HourOfWork.length +1){
        Sums = locations[i-1].cookiesPerHour[m-1];
        tdcell.textContent = Sums;
        rowSum = rowSum + Sums;
        Row.appendChild(tdcell);
      } else if (i >= 1 && m == HourOfWork.length +1 && i != locations.length +1){
        tdcell.textContent = rowSum;
        Row.appendChild(tdcell);
      }
      // while ( m >= 1 && m <= HourOfWork.length){




      // };

      for(var f = 0; f < 1 ; f++){
        if(i == locations.length +1 && m >= 1){
          var lastrow = document.createElement('td');

          lastrow.textContent = 4;
          Row.appendChild(lastrow);
        }
      }
    }
    table.appendChild(Row);
  }
}



// //outers

function values(one, two) {
  var value = 0;
  value = one * two;
  value = Math.floor(value);
  return value;
}

function total(first) {
  var total = 0;
  for (var i = 0; i < first.length; i++) {
    total = total + first[i];

  }
  total = Math.floor(total);
  return total;
}

function customersPerHour(min, max) {
  var random = Math.random();
  random = (random * (max - min + 1)) + min;
  random = Math.floor(random);
  return random;
}

tablema();
// // city 1

// var location1 = {
//   name: 'Seattle',
//   theMinCust_hour: 23,
//   theMaxCust_hour: 65,
//   avgCookie_Cust: 6.3,
//   OpenTime: 6,
//   CloseTime: 20,
//   workTime: 'From 6:00AM To 8:00PM',
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   HourOfWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],


//   getInfo: function () {
//     for (var i = 0; i < this.HourOfWork.length; i++) {
//       this.custPerHour.push(customersPerHour(this.theMinCust_hour, this.theMaxCust_hour));
//     }
//   },

//   getcookie: function () {
//     for (var i = 0; i < this.custPerHour.length; i++) {
//       this.cookiesPerHour.push(values(this.custPerHour[i], this.avgCookie_Cust));

//     }
//   },

//   getTotal: function () {
//     var totalval = 0;
//     totalval = total(this.cookiesPerHour);
//     this.totalCookies = totalval;
//     return this.totalCookies;
//   },

//   render: function () {
//     var parent = document.getElementById('mai');
//     var createDiv = document.createElement('div');
//     createDiv.setAttribute('id', this.name);
//     parent.appendChild(createDiv);



//     var div = document.getElementById(this.name);

//     var section = document.createElement('section');
//     div.appendChild(section);


//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     section.appendChild(h2);

//     var ul = document.createElement('ul');
//     section.appendChild(ul);

//     for (var i = 0; i < this.HourOfWork.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = this.HourOfWork[i] + ' O\'clock: ' + this.cookiesPerHour[i] + ' Cookies Purchased,  While Customers May be Around ' + this.custPerHour[i];
//       ul.appendChild(li);

//     }

//     var li2 = document.createElement('li');
//     li2.textContent = 'Total Sellings: ' + this.totalCookies;
//     ul.appendChild(li2);
//   }
// };
// location1.getInfo();
// location1.getcookie();
// location1.getTotal();
// console.log(location1);
// location1.render();


// //city 2



// var location2 = {
//   name: 'Tokyo',
//   theMinCust_hour: 3,
//   theMaxCust_hour: 24,
//   avgCookie_Cust: 1.2,
//   OpenTime: 6,
//   CloseTime: 20,
//   workTime: 'From 6:00AM To 8:00PM',
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   HourOfWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],


//   getInfo: function () {
//     for (var i = 0; i < this.HourOfWork.length; i++) {
//       this.custPerHour.push(customersPerHour(this.theMinCust_hour, this.theMaxCust_hour));
//     }
//   },

//   getcookie: function () {
//     for (var i = 0; i < this.custPerHour.length; i++) {
//       this.cookiesPerHour.push(values(this.custPerHour[i], this.avgCookie_Cust));

//     }
//   },

//   getTotal: function () {
//     var totalval = 0;
//     totalval = total(this.cookiesPerHour);
//     this.totalCookies = totalval;
//     return this.totalCookies;
//   },

//   render: function () {
//     var parent = document.getElementById('mai');
//     var createDiv = document.createElement('div');
//     createDiv.setAttribute('id', this.name);
//     parent.appendChild(createDiv);



//     var div = document.getElementById(this.name);

//     var section = document.createElement('section');
//     div.appendChild(section);


//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     section.appendChild(h2);

//     var ul = document.createElement('ul');
//     section.appendChild(ul);

//     for (var i = 0; i < this.HourOfWork.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = this.HourOfWork[i] + ' O\'clock: ' + this.cookiesPerHour[i] + ' Cookies Purchased,  While Customers May be Around ' + this.custPerHour[i];
//       ul.appendChild(li);

//     }

//     var li2 = document.createElement('li');
//     li2.textContent = 'Total Sellings: ' + this.totalCookies;
//     ul.appendChild(li2);
//   }
// };
// location2.getInfo();
// location2.getcookie();
// location2.getTotal();
// console.log(location2);
// location2.render();






// // city 3


// var location3 = {
//   name: 'Dubai',
//   theMinCust_hour: 11,
//   theMaxCust_hour: 38,
//   avgCookie_Cust: 3.7,
//   OpenTime: 6,
//   CloseTime: 20,
//   workTime: 'From 6:00AM To 8:00PM',
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   HourOfWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],


//   getInfo: function () {
//     for (var i = 0; i < this.HourOfWork.length; i++) {
//       this.custPerHour.push(customersPerHour(this.theMinCust_hour, this.theMaxCust_hour));
//     }
//   },

//   getcookie: function () {
//     for (var i = 0; i < this.custPerHour.length; i++) {
//       this.cookiesPerHour.push(values(this.custPerHour[i], this.avgCookie_Cust));

//     }
//   },

//   getTotal: function () {
//     var totalval = 0;
//     totalval = total(this.cookiesPerHour);
//     this.totalCookies = totalval;
//     return this.totalCookies;
//   },

//   render: function () {
//     var parent = document.getElementById('mai');
//     var createDiv = document.createElement('div');
//     createDiv.setAttribute('id', this.name);
//     parent.appendChild(createDiv);



//     var div = document.getElementById(this.name);

//     var section = document.createElement('section');
//     div.appendChild(section);


//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     section.appendChild(h2);

//     var ul = document.createElement('ul');
//     section.appendChild(ul);

//     for (var i = 0; i < this.HourOfWork.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = this.HourOfWork[i] + ' O\'clock: ' + this.cookiesPerHour[i] + ' Cookies Purchased,  While Customers May be Around ' + this.custPerHour[i];
//       ul.appendChild(li);

//     }

//     var li2 = document.createElement('li');
//     li2.textContent = 'Total Sellings: ' + this.totalCookies;
//     ul.appendChild(li2);
//   }
// };
// location3.getInfo();
// location3.getcookie();
// location3.getTotal();
// console.log(location3);
// location3.render();




// // city 4


// var location4 = {
//   name: 'Paris',
//   theMinCust_hour: 20,
//   theMaxCust_hour: 38,
//   avgCookie_Cust: 2.3,
//   OpenTime: 6,
//   CloseTime: 20,
//   workTime: 'From 6:00AM To 8:00PM',
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   HourOfWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],


//   getInfo: function () {
//     for (var i = 0; i < this.HourOfWork.length; i++) {
//       this.custPerHour.push(customersPerHour(this.theMinCust_hour, this.theMaxCust_hour));
//     }
//   },

//   getcookie: function () {
//     for (var i = 0; i < this.custPerHour.length; i++) {
//       this.cookiesPerHour.push(values(this.custPerHour[i], this.avgCookie_Cust));

//     }
//   },

//   getTotal: function () {
//     var totalval = 0;
//     totalval = total(this.cookiesPerHour);
//     this.totalCookies = totalval;
//     return this.totalCookies;
//   },

//   render: function () {
//     var parent = document.getElementById('mai');
//     var createDiv = document.createElement('div');
//     createDiv.setAttribute('id', this.name);
//     parent.appendChild(createDiv);



//     var div = document.getElementById(this.name);

//     var section = document.createElement('section');
//     div.appendChild(section);


//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     section.appendChild(h2);

//     var ul = document.createElement('ul');
//     section.appendChild(ul);

//     for (var i = 0; i < this.HourOfWork.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = this.HourOfWork[i] + ' O\'clock: ' + this.cookiesPerHour[i] + ' Cookies Purchased,  While Customers May be Around ' + this.custPerHour[i];
//       ul.appendChild(li);

//     }

//     var li2 = document.createElement('li');
//     li2.textContent = 'Total Sellings: ' + this.totalCookies;
//     ul.appendChild(li2);
//   }
// };
// location4.getInfo();
// location4.getcookie();
// location4.getTotal();
// console.log(location4);
// location4.render();





// // city 5


// var location5 = {
//   name: 'Lima',
//   theMinCust_hour: 2,
//   theMaxCust_hour: 16,
//   avgCookie_Cust: 4.6,
//   OpenTime: 6,
//   CloseTime: 20,
//   workTime: 'From 6:00AM To 8:00PM',
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   HourOfWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],


//   getInfo: function () {
//     for (var i = 0; i < this.HourOfWork.length; i++) {
//       this.custPerHour.push(customersPerHour(this.theMinCust_hour, this.theMaxCust_hour));
//     }
//   },

//   getcookie: function () {
//     for (var i = 0; i < this.custPerHour.length; i++) {
//       this.cookiesPerHour.push(values(this.custPerHour[i], this.avgCookie_Cust));

//     }
//   },

//   getTotal: function () {
//     var totalval = 0;
//     totalval = total(this.cookiesPerHour);
//     this.totalCookies = totalval;
//     return this.totalCookies;
//   },

//   render: function () {
//     var parent = document.getElementById('mai');
//     var createDiv = document.createElement('div');
//     createDiv.setAttribute('id', this.name);
//     parent.appendChild(createDiv);

//     var div = document.getElementById(this.name);

//     var section = document.createElement('section');
//     div.appendChild(section);

//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     section.appendChild(h2);

//     var ul = document.createElement('ul');
//     section.appendChild(ul);

//     for (var i = 0; i < this.HourOfWork.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = this.HourOfWork[i] + ' O\'clock: ' + this.cookiesPerHour[i] + ' Cookies Purchased,  While Customers May be Around ' + this.custPerHour[i];
//       ul.appendChild(li);

//     }

//     var li2 = document.createElement('li');
//     li2.textContent = 'Total Sellings: ' + this.totalCookies;
//     ul.appendChild(li2);
//   }
// };

// location5.getInfo();
// location5.getcookie();
// location5.getTotal();
// console.log(location5);
// location5.render()
