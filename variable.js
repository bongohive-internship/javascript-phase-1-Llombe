// you solution should be here
<html>
<body>
  
<h2>JavaScript Variables</h2>
<p>In this assignment, birthYearx, possibleAge, and futureYear are variables.</p>

<p id="demo"></p>

<script>
var birthYear = 1994;
var futureYear = 2050;
var possibleAge = futureYear - birthYear;

console.log(possibleAge);

/*alert(possibleAge)*/

document.getElementById("demo").innerHTML = "The Possible age is: " + possibleAge;
</script>
</body>

</html>