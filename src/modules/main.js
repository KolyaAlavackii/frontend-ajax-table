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



$.ajax({
        url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
        success: function(usersData){
            addTableHeaders(allusersElem);
            usersData.forEach(function(user){
                addTableElem(allusersElem, user);
            })   
        }
    })


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
            addTableHeaders(sortAgeUsers);
            usersData = usersData.sort(sortings.sortingAge);
            usersData.forEach(function(user){
                addTableElem(sortAgeUsers, user);
            })   
        }
    })
    

 $.ajax({
        url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
        success: function(usersData){
            addTableHeaders(sortNameUsers);
            usersData = usersData.sort(sortings.sortingName);
            usersData.forEach(function(user){
                addTableElem(sortNameUsers, user);
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


