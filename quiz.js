// Do NOT modify the HTML document manually!!!!

// Question 1
// Use jQuery to add two more elements to the the UL in the 'question-1' div
//$('<li>').html(favoriteColors[i]).appendTo('#color-list');
$('<li>').html("Foxes").appendTo('question-1');
$('<li>').html("Dragons").appendTo('question-1');
//I did look it up in case that wasn't obvious.

var addItems = function(text) {
	$('<li>').html(text).appendTo('#question-1')
}
//I forgot the # in most of the calls

// Question 2
// Add a click event handler to the paragraph in the 'question-2' div
// which triggers a method called 'alertClicked', 
// which will display an alert with the text of "Question 2 Success".

var alertClicked = function() {
	alert("Question 2 Success");
};
$('p').click(alertClicked);
//looked it up

//right call: answer
$('#question-2 p').click(alertClicked);

// Question 3
// Why won't the following code make clicking on anything the 'question-3' div 
// invoke the alertClicked method?

$('#question-3').on('click', alertClicked);
//Because only the div itself has the id 'question-3' wrong


//answer
//You need to wap event handlers in a $(document).ready (or window.onload)
//for them to bind properly, as they don't exist yet otherwise!


// Question 4
// Make the HTML in the 'question-4' div fade out when you hover over it,
// and fade back in when you move your mouse away from it

$('question-4').hover(this.fade);

//answer
$('#question-4').hover(function() {
	$(this).animate({opacity: 0} )}, function() {
		$(this).animate({opacity: 1})
});

// Question 5
// Make question 5's h2 turn blue when someone types 'winning' 
// in its input element and hits enter

var changeColor = function() {
	this.addClass('Blue');
};

('q-5-input').change('winning', changeColor);
//looked this up, not sure about the addition of 'winning' specifying what the input needs to be, but it is my best guess.

//answer
$('#q-5-input').on('change', function() {
	if($(this).val() === 'winning') {
		$(this).prev().css('color', 'blue');
	}
})


// Question 6
// Add a method to the String prototype called 'reverse'
// which will return the string reversed.
// You should be able to run 'foo'.reverse() and get 'oof'
// Use this method to reverse the text in the h2 in the 'question-6' div

var reverse = function(element) {
	var word = element;
	var newWord = "";
	for(var i = word.length - 1; i >= 0; i = i-1) {
		newWord += word.charAt(i);
	}
	return newWord;
};

//answer
String.prototype.reverse = function() {
	var length = this.length;
	var rev_string = '';
	for(var i = length - 1; i >=0; i--) {
		rev_string += this.charAt(i);
	}
	return rev_string;
}//okay I had the right method more or less, but I totally missed the first instruction or rather read it as "write a method called reverse..." 

// Question 7
// Write a method called 'highLightHeaders' that will add a class of 'highlight'
// to all h2's when it is invoked

var highLightHeaders = function() {
	$('h2').addClass('highlight');
};

// Question 8
// Define a constructor function called `Cat`,that accepts a `name`,
// an `age`, and a `color`, and stores these values as properties.

var Cat = function(name, age, color) {
	name: name, age: age, color: color;
};

//answer
var Cat = function(name, age, color) {
	this.name = name;
	this.age = age;
	this.color = color;
};

// Question 9
// Add a function called `description` to the `Cat` prototype that returns a string
// describing the cat in this format: "<name> is a <age>-year-old <color> cat."

Cat.prototype.description = function() {
	return this.name + " is a " + this.age + " -year-old " + this.color + " cat.";
};//I double checked the syntax for Cat.prototype.description = function() {}
//I almost used Cat.__proto__ as part of my answer. finally got a question completely right

// Question 10
// Use the methods of .map and .reduce to return the
// sum the prices of the objects in the array below.
// Do *not* use a for loop

var items = [
  {name: 'iPhone 5c', price: 99.99},
  {name: 'iPhone 5s', price: 149.99},
  {name: 'iPhone 6', price: 249.99},
  {name: 'iPhone 6 plus', price: 399.99}
];

items.map do |item|
	item.price.reduce;
end

//answer
items
	.map(item, function() {
		return item.price;
	})
	.reduce(function(a,b){
		return a + b;
	});

//ok I both used ruby syntax which is wrong for js and I miss used reduce apparently