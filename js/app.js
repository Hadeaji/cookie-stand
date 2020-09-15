'use strict';
var HourOfWork = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];

var totaltotal= [];
var locations = [];
var columnTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// table

var parent = document.getElementById('mai');
var table = document.createElement('table');
table.setAttribute('id', 'MainTable');
parent.appendChild(table);

function tablehead(){

  var firstrow = document.createElement('tr');
  var th = document.createElement('th');
  firstrow.appendChild(th);

  for(var i =0; i < HourOfWork.length; i++){
    th = document.createElement('th');
    th.textContent = HourOfWork[i];
    firstrow.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Daily Location Total';
  firstrow.appendChild(th);
  table.appendChild(firstrow);

}
tablehead();


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
}

//Custmer Per Hour
Location.prototype.getinfo = function(){
  for (var i = 0; i < HourOfWork.length; i++) {
    this.custPerHour.push(customersPerHour(this.theMinCust_hour, this.theMaxCust_hour));
  }};


// Cookies Per Hour
Location.prototype.getcookie = function(){
  var answer;

  for (var i = 0; i < this.custPerHour.length; i++) {
    answer = values(this.custPerHour[i], this.avgCookie_Cust);
    this.cookiesPerHour.push(answer);
    columnTotal[i] += answer;
  }


};


// Total
Location.prototype.getotal = function(){
  var totalval = 0;
  totalval = total(this.cookiesPerHour);
  this.totalCookies = totalval;
  totaltotal.push(totalval);
  return this.totalCookies;
};

// tabel contant
Location.prototype.renderMid = function(){

  // Normal Row
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);

  for(var i =0; i < this.cookiesPerHour.length ; i++){
    td = document.createElement('td');
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  td = document.createElement('td');
  td.textContent = this.totalCookies;
  tr.appendChild(td);

};

// Last Row
function lastRow (){
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);

  for(var i = 0 ; i < columnTotal.length -1; i++){
    var td = document.createElement('td');
    td.textContent = columnTotal[i];
    tr.appendChild(td);
  }
  var totalsum =0;
  var td = document.createElement('td');
  for (let i = 0; i < totaltotal.length; i++) {
    totalsum = totalsum + totaltotal[i];
  }

  td.textContent = totalsum;
  tr.appendChild(td);

}

var location1 = new Location('Seattle',23,65,6.3,'From 6:00AM To 8:00PM');
var location2 = new Location('Tokyo',3,24,1.2,'From 6:00AM To 8:00PM');
var location3 = new Location('Dubai',11,38,3.7,'From 6:00AM To 8:00PM');
var location4 = new Location('Paris',20,38,2.3,'From 6:00AM To 8:00PM');
var location5 = new Location('Lima',2,16,4.6,'From 6:00AM To 8:00PM');

for (var i =0; i < locations.length ; i++){
  locations[i].getinfo();
  locations[i].getcookie();
  locations[i].getotal();
  locations[i].renderMid();

}

lastRow();

//outers
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