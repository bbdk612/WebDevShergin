<?php

function mSum($m)
{
  $sum = 0;
  for ($i = 0; $i <= $m; $i++) {
    $sum += $i;
  }

  return $sum;
}

function kSum($k)
{
  $sum = 0;
  for ($i = 0; $i <= 2 * $k; $i++) {
    $sum += $i;
  }

  return $sum;
}

if (isset($_POST)) {
  echo mSum((int)$_POST["m"] + kSum((int)$_POST["k"]));
}
