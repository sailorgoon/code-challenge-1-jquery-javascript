$(document).ready(onReady);

let clickCount = 0; 

function onReady(){
    console.log('jquery has been loaded');
   $('#generateButton').on('click', generateClickHandler);
   $('#containerDiv').on('click', '.swapButton', swapClickHandler);
   $('#containerDiv').on('click', '.deleteButton', deleteButtonHandler);
}

function generateClickHandler(){
    console.log('in clickHandler');
    clickCount++
    generateDiv();
}

function swapClickHandler(){
    console.log('in swapClickHandler');
    changeParentColor();
}

function deleteButtonHandler(){
    console.log( 'deleteButton was clicked' );
    $('#containerDiv').remove();
}

function generateDiv(){
    $('#containerDiv').text(clickCount);
    $('#containerDiv').append(
    '<div class="buttonsDiv"><button class="swapButton">swap</button><button class="deleteButton">delete</button></div>')
}

function changeParentColor(){
    console.log('in changeParentColor');
    $('#containerDiv').children().css('background-color', 'rgb(240, 190, 10)');
}

  

