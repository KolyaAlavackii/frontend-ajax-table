'use strict';

var $ = require('jquery');
var addTableHeaders = require('./add-headers.js');
var addTableElem = require('./add-tabel-elem.js');
var sortings = require('./utils.js');


var allusersElem = $('.all-users');
var activeUsers = $('.active-users');
var sortAgeUsers = $('.sorted-age-users');
var sortNameUsers = $('.sorted-name-users');
var lengLastNameUsers = $('.length-lastname-users');


function data(elem, elem2){
    $.ajax({
        url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
        success: function(usersData){
            addTableHeaders(elem);
            usersData = usersData.sort(elem2);
            usersData.forEach(function(user){
                addTableElem(elem, user);
            })   
        }
    })
}

data(allusersElem);
data(sortAgeUsers, sortings.sortingAge);
data(sortNameUsers, sortings.sortingName);


$.ajax({
    url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
    success: function(usersData){
        addTableHeaders(activeUsers);
        usersData.forEach(function(user){
            if(user.isActive === true){
                addTableElem(activeUsers, user);
            }
        }) 
    }
})

$.ajax({
    url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
    success: function(usersData){
        addTableHeaders(lengLastNameUsers);
        usersData.forEach(function(user){
            if(user.name.last.length >=  6){
                addTableElem(lengLastNameUsers, user);
            }
        }) 
    }
})


