// String.prototype.capitalize = String.prototype.capitalize.wrap(

//     function(proceed, eachWord) {
//         if (eachWord && this.include(" ")) {
//             // capitalize each word in the string
//             return this.split(" ").invoke("capitalize").join(" ");
//         } else {
//             // proceed using the original function
//             return proceed();
//         }

//     }
// );

// function addBorder(element, color) {
//     return $(element).setStyle({
//         border: "3px solid " + (color || "red")
//     });
// }
// addBorder("sidebar", "#ddd");
// $("sidebar").addBorder = addBorder.methodize();
// $("sidebar").addBorder("#888");

// //Floor
// $w("abs round ceil floor").each(function(method) {
//     Number.prototype[method] = Math[method].methodize();
// });


// //cat


// var Animal = Class.create({
//     initialize: function(name) {
//         this.name = name;
//     },
//     eat: function() {
//         return this.say("Yum!");
//     },
//     say: function(message) {
//         return this.name + ": " + message;
//     }
// });
// // subclass that augments a method
// var Cat = Class.create(Animal, {
//     eat: function($super, food) {
//         if (food instanceof Mouse) return $super();
//         else return this.say("Yuk! I only eat mice.");
//     }
// });

// var newAnimal = new Animal('Felix');


// var pet = new Cat('Felix');

// // console.log(newAnimal);
// // console.log(newAnimal.eat());
// // console.log(newAnimal.say('Miau!!'));
// // console.log(pet);
// // console.log(pet.say('Goob Bye'));

// $("items").insert({
//     after: new Element("p")
// });
// $("items").insert({
//     top: "<li>an item</li>"
// });
// $("items").insert("<li>another item</li>"); // defaults to bottom


// // new Ajax.Request("5.json", {
// //     onSuccess: function(transport) {
// //         var person = transport.responseJSON;
// //         person.hello
// //     },
// //     method: "get"
// // });


// var Calendar = Class.create({
//     toElement: function() {
//         var container = new Element("div");
//         return container;
//     }
// });

// // $("capitalize").insert(new Calendar());
// // $("capitalize").insert({ bottom: new Calendar() });
// $("capitalize").insert({
//     bottom: new Calendar().toElement()
// });
// $("capitalize").setStyle("font-size: 12px; float: left; opacity: 0.5; width: 50%; height: 50px; background: bisque;");


// // console.log($A($R(0, 5)).join(', '));
// // console.log($A($R('aa', 'ah')).join(', '));
// // console.log($R(0, 10, true).include(10));

// $R(0, 10, true).each(function(value) {});


// // console.log($R(0, 10, true));

// // console.log($w('apples bananas kiwis'));



// var xmlHttpRequest = Class.create({
//     getTransport: function() {
//         return Try.these(
//             function() {
//                 return new XMLHttpRequest()
//             },
//             function() {
//                 return new ActiveXObject('Msxml2.XMLHTTP')
//             },
//             function() {
//                 return new ActiveXObject('Microsoft.XMLHTTP')
//             }
//         ) || false;
//     }
// });

// var url = new xmlHttpRequest();

// // console.log(url);

// document.getElementsByClassName('foo');
// // -> [HTMLElement, HTMLElement] (div#one, div#two)
// document.getElementsByClassName('thud');
// // -> [HTMLElement, HTMLElement, HTMLElement] (div#two, li#item_one, li#item_two);
// document.getElementsByClassName('thud', $('list'));
// // -> [HTMLElement, HTMLElement] (li#item_one, li#item_two)


// var url = '/proxy?url=' + encodeURIComponent('http://www.google.com/search?q=Prototype');
// // var url = '/proxy?url=' + encodeURIComponent('http://www.google.com/search?q=Prototype');

// console.log(url);
// // notice the use of a proxy to circumvent the Same Origin Policy.
// new Ajax.Request(url, {
//     method: 'get',
//     format: 'jsonp',
//     onSuccess: function(transport) {
//         var notice = $('notice');
//         if (transport.responseText.match(/href="http:\/\/prototypejs.org/)) {
//             notice.update('Yeah! You are in the Top 10!').setStyle({
//                 background: '#dfd'
//             });
//         } else {
//             notice.update('Damn! You are beyond #10...').setStyle({
//                 background: '#fdd'
//             });
//         }
//     }
// });



// document.getElementById('test').addEventListener('click', function() {
//     alert('Hello world');
// }, true);

// document.getElementById('test').addEventListener('click', function() {
//     alert('Hello world again!!!');
// }, true);



// $("#ingresar").on("click", function() {


// if ($('#ingresar').val() != '') {

// console.log('Buscar Rut: ' + $('#ingresar').val());

//         // $('.input-tesr').bind('input', function() {
//         //     $(this).next().stop(true, true).fadeIn(0).html($(this).val()).fadeOut(2000);
//         // });


// $('#input-tesr').on('change', function() {
//     $(this).next().stop(true, true).fadeIn(0).html($(this).val()).fadeOut(2000);
// });
// $(".input-tesr").trigger("change");
//         // $("#ingresar").trigger("click", function() {
//         //     $(this).next().stop(true, true).fadeIn(0).html($(this).val()).fadeOut(2000);
//         // });
//         // $(".input-tesr").trigger("click");
//         // if ($('#ingresar').val() == '') {
//         //     console.log('si esta vacio');
//         // } else {
//         //     console.log('no esta vacío busco el rut: ' + $('#ingresar').val());
// }



// }).trigger("click");


// $("#ingresar").trigger("click");

var $mensaje = '';

$('#ingresar').on('input', function() {

    // if ($('#ingresar').val() == '') {

    // console.log($('#ingresar').val());
    // $(this).next().stop(true, true).fadeIn(0).html($(this).val()).fadeOut(2000);
    // $mensaje = 'No ningún campo a buscar';
    // console.log($mensaje);
    // $('#mensaje').next().stop(true, true).fadeIn(0).html(mensaje).fadeOut(2000);
    // $('#mensaje').fadeIn(0).html($mensaje).fadeOut(4000);

    // } else {

    // $mensaje = 'Desea buscar el número ?';
    // console.log($mensaje);
    // $('#mensaje').next().stop(true, true).fadeIn(0).html(mensaje).fadeOut(2000);
    // $('#mensaje').fadeIn(0).html($mensaje).fadeOut(4000);

    // }


    if ($('#ingresar').val() != '') {

            $mensaje = 'Desea buscar el número ?';
            // console.log($mensaje);
            // $('#mensaje').next().stop(true, true).fadeIn(0).html(mensaje).fadeOut(2000);
            $('#mensaje').fadeIn(0).html($mensaje).fadeOut(4000);

    }

    return $mensaje;
    // console.log($(this).val());

}).trigger('input');


// $(".input-tesr").trigger("input");