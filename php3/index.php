<form method="post" action="index.php">
  <input type="number" name="num1">
  <select name="operation">
    <option value="sum">+</option>
    <option value="cut">-</option>
    <option value="mult">*</option>
    <option value="div">/</option>
  </select>
  <input type="number" name="num2">
  <button type="submit">=</button>
</form>

<?php
if (isset($_POST['num1'])) {
  echo "<h3>Результат</h3>";
  $res;
  switch ($_POST['operation']) {
    case 'sum':
      $res = (int)$_POST['num1'] + (int)$_POST['num2'];
      break;
    case 'cut':
      $res = (int)$_POST['num1'] - (int)$_POST['num2'];
      break;
    case 'mult':
      $res = (int)$_POST['num1'] * (int)$_POST['num2'];
      break;
    case 'div':
      if ((int)$_POST['num2'] != 0) {
        $res = (int)$_POST['num1'] * (int)$_POST['num2'];
      } else {
        $res = "На ноль делить нельзя";
      }
      break;
  }

  echo "<p>$res</p>";
}
?>
