import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BikeSearch } from './bike.js';

$(document).ready(function() {
  $('#stolenBike').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    let distance = $('#distance').val();
    $('#distance').val("");

    let bikes = new BikeSearch();
    let promise = bikes.findBikeByCity(city, distance);

    promise.then(function(response) {
      let body = JSON.parse(response);
      for (let i = 0; i < body.bikes.length; i++) {
         $('.title').append(`<li>Stolen bike: ${body.bikes[i].title}</li>`);
         if ( `${body.bikes[i].large_img}` != "null") {
           $('.title').append(`<img src ='${body.bikes[i].large_img}'/>`);

         }
      }
      });
  });
});
