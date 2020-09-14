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


// city 1

var location1 = {
  name: 'Seattle',
  theMinCust_hour: 23,
  theMaxCust_hour: 65,
  avgCookie_Cust: 6.3,
  OpenTime: 6,
  CloseTime: 20,
  workTime: 'From 6:00AM To 8:00PM',
  custPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  HourOfWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],


  getInfo: function () {
    for (var i = 0; i < this.HourOfWork.length; i++) {
      this.custPerHour.push(customersPerHour(this.theMinCust_hour, this.theMaxCust_hour));
    }
  },

  getcookie: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      this.cookiesPerHour.push(values(this.custPerHour[i], this.avgCookie_Cust));

    }
  },

  getTotal: function () {
    var totalval = 0;
    totalval = total(this.cookiesPerHour);
    this.totalCookies = totalval;
    return this.totalCookies;
  },

  render: function () {
    var div = document.getElementById('Seattle');

    var section = document.createElement('section');
    div.appendChild(section);


    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    section.appendChild(h2);

    var ul = document.createElement('ul');
    section.appendChild(ul);

    for (var i = 0; i < this.HourOfWork.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.HourOfWork[i] + ' O\'clock: ' + this.cookiesPerHour[i] + ' Cookies Purchased,  While Customers May be Around ' + this.custPerHour[i];
      ul.appendChild(li);

    }

    var li2 = document.createElement('li');
    li2.textContent = 'Total Sellings: ' + this.totalCookies;
    ul.appendChild(li2);
  }
};
location1.getInfo();
location1.getcookie();
location1.getTotal();
console.log(location1);
location1.render();


//city 2



var location2 = {
  name: 'Tokyo',
  theMinCust_hour: 3,
  theMaxCust_hour: 24,
  avgCookie_Cust: 1.2,
  OpenTime: 6,
  CloseTime: 20,
  workTime: 'From 6:00AM To 8:00PM',
  custPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  HourOfWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],


  getInfo: function () {
    for (var i = 0; i < this.HourOfWork.length; i++) {
      this.custPerHour.push(customersPerHour(this.theMinCust_hour, this.theMaxCust_hour));
    }
  },

  getcookie: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      this.cookiesPerHour.push(values(this.custPerHour[i], this.avgCookie_Cust));

    }
  },

  getTotal: function () {
    var totalval = 0;
    totalval = total(this.cookiesPerHour);
    this.totalCookies = totalval;
    return this.totalCookies;
  },

  render: function () {
    var div = document.getElementById('Tokyo');

    var section = document.createElement('section');
    div.appendChild(section);


    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    section.appendChild(h2);

    var ul = document.createElement('ul');
    section.appendChild(ul);

    for (var i = 0; i < this.HourOfWork.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.HourOfWork[i] + ' O\'clock: ' + this.cookiesPerHour[i] + ' Cookies Purchased,  While Customers May be Around ' + this.custPerHour[i];
      ul.appendChild(li);

    }

    var li2 = document.createElement('li');
    li2.textContent = 'Total Sellings: ' + this.totalCookies;
    ul.appendChild(li2);
  }
};
location2.getInfo();
location2.getcookie();
location2.getTotal();
console.log(location2);
location2.render();






// city 3


var location3 = {
  name: 'Dubai',
  theMinCust_hour: 11,
  theMaxCust_hour: 38,
  avgCookie_Cust: 3.7,
  OpenTime: 6,
  CloseTime: 20,
  workTime: 'From 6:00AM To 8:00PM',
  custPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  HourOfWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],


  getInfo: function () {
    for (var i = 0; i < this.HourOfWork.length; i++) {
      this.custPerHour.push(customersPerHour(this.theMinCust_hour, this.theMaxCust_hour));
    }
  },

  getcookie: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      this.cookiesPerHour.push(values(this.custPerHour[i], this.avgCookie_Cust));

    }
  },

  getTotal: function () {
    var totalval = 0;
    totalval = total(this.cookiesPerHour);
    this.totalCookies = totalval;
    return this.totalCookies;
  },

  render: function () {
    var div = document.getElementById('Dubai');

    var section = document.createElement('section');
    div.appendChild(section);


    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    section.appendChild(h2);

    var ul = document.createElement('ul');
    section.appendChild(ul);

    for (var i = 0; i < this.HourOfWork.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.HourOfWork[i] + ' O\'clock: ' + this.cookiesPerHour[i] + ' Cookies Purchased,  While Customers May be Around ' + this.custPerHour[i];
      ul.appendChild(li);

    }

    var li2 = document.createElement('li');
    li2.textContent = 'Total Sellings: ' + this.totalCookies;
    ul.appendChild(li2);
  }
};
location3.getInfo();
location3.getcookie();
location3.getTotal();
console.log(location3);
location3.render();




// city 4


var location4 = {
  name: 'Paris',
  theMinCust_hour: 20,
  theMaxCust_hour: 38,
  avgCookie_Cust: 2.3,
  OpenTime: 6,
  CloseTime: 20,
  workTime: 'From 6:00AM To 8:00PM',
  custPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  HourOfWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],


  getInfo: function () {
    for (var i = 0; i < this.HourOfWork.length; i++) {
      this.custPerHour.push(customersPerHour(this.theMinCust_hour, this.theMaxCust_hour));
    }
  },

  getcookie: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      this.cookiesPerHour.push(values(this.custPerHour[i], this.avgCookie_Cust));

    }
  },

  getTotal: function () {
    var totalval = 0;
    totalval = total(this.cookiesPerHour);
    this.totalCookies = totalval;
    return this.totalCookies;
  },

  render: function () {
    var div = document.getElementById('Paris');

    var section = document.createElement('section');
    div.appendChild(section);


    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    section.appendChild(h2);

    var ul = document.createElement('ul');
    section.appendChild(ul);

    for (var i = 0; i < this.HourOfWork.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.HourOfWork[i] + ' O\'clock: ' + this.cookiesPerHour[i] + ' Cookies Purchased,  While Customers May be Around ' + this.custPerHour[i];
      ul.appendChild(li);

    }

    var li2 = document.createElement('li');
    li2.textContent = 'Total Sellings: ' + this.totalCookies;
    ul.appendChild(li2);
  }
};
location4.getInfo();
location4.getcookie();
location4.getTotal();
console.log(location4);
location4.render();





// city 5


var location5 = {
  name: 'Lima',
  theMinCust_hour: 2,
  theMaxCust_hour: 16,
  avgCookie_Cust: 4.6,
  OpenTime: 6,
  CloseTime: 20,
  workTime: 'From 6:00AM To 8:00PM',
  custPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  HourOfWork: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],


  getInfo: function () {
    for (var i = 0; i < this.HourOfWork.length; i++) {
      this.custPerHour.push(customersPerHour(this.theMinCust_hour, this.theMaxCust_hour));
    }
  },

  getcookie: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      this.cookiesPerHour.push(values(this.custPerHour[i], this.avgCookie_Cust));

    }
  },

  getTotal: function () {
    var totalval = 0;
    totalval = total(this.cookiesPerHour);
    this.totalCookies = totalval;
    return this.totalCookies;
  },

  render: function () {
    var div = document.getElementById('Lima');

    var section = document.createElement('section');
    div.appendChild(section);


    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    section.appendChild(h2);

    var ul = document.createElement('ul');
    section.appendChild(ul);

    for (var i = 0; i < this.HourOfWork.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.HourOfWork[i] + ' O\'clock: ' + this.cookiesPerHour[i] + ' Cookies Purchased,  While Customers May be Around ' + this.custPerHour[i];
      ul.appendChild(li);

    }

    var li2 = document.createElement('li');
    li2.textContent = 'Total Sellings: ' + this.totalCookies;
    ul.appendChild(li2);
  }
};
location5.getInfo();
location5.getcookie();
location5.getTotal();
console.log(location5);
location5.render();



