<?php
// Online PHP compiler to run PHP program online
// Print "Try programiz.pro" message
echo "Try programiz.pro \n";

// if, switch
$t = 14;
if ($t < 20) {
  echo "PHP \n";
}
//
$favcolor = "apel";

switch ($favcolor) {
  case "apel":
    echo "Your favorite color is apel!\n";
    break;
  case "mangga":
    echo "Your favorite color is mangga!\n";
    break;
  case "HP":
    echo "Your favorite color is HP!\n";
    break;
  default:
    echo "Your favorite color is semua!!!!!!!!!!!\n";
}

// for, foreach
for ($x = 0; $x <= 10; $x++) {
  if ($x == 5) break;
  echo "The number is: $x \n";
}
// 
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  if ($x == "yellow") break;
  echo "$x \n";
}

// function

function myMessage() {
  echo "Ini adalah Function!!!!!!!!!!! \n";
}

myMessage();

// while, do while

$i = 1;

while ($i < 6) {
  echo $i;
  $i++;
}
{echo "\n";}
// 
$i = 1;

do {
  echo $i;
  $i++;
} while ($i < 6);
{echo "\n";}
?>