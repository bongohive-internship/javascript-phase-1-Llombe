// you solution should be here
<html>
<body>

<h2>Javascript-basics</h2>

<p>In this example, birthYear, futureYear, possibleAge, currentAge, maximumAge, foodPerDay, and eatTotal are variables.</p>

<p2 id="demo1"></p2>
<p id="demo"></p> 

<script>
var birthYear = 1994;
var futureYear = 2050;
var possibleAge = futureYear - birthYear;
var currentAge = 25;
var maximumAge = 100;
var foodPerDay = 3;
var eatTotal = (365 * (maximumAge - currentAge)) / foodPerDay;

console.log(possibleAge);
console.log(eatTotal);

//alert(possibleAge);
//alert(eatTotal);
//document.getElementById("demo").innerHTML = "For the first question my possible age for the year 2050 is" +" "+ possibleAge +" "+ "You will need" +" "+ eatTotal +" "+ "to last you until the ripe old age of" +" "+ maximumAge;
 
document.getElementById("demo").innerHTML = "You will need" +" "+ eatTotal +" "+ "to last you until the ripe old age of" +" "+ maximumAge;

document.getElementById("demo1").innerHTML = "For the first question my possible age for the year 2050 is" +" "+ possibleAge;
</script>

</body>
</html>