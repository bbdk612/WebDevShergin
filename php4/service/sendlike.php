<?php
if (isset($_POST["id"]) && isset($_POST["operation"]) && $_POST["id"] != "") {
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $msqli = new mysqli("localhost", "root", "", "image_service");
    $query = "UPDATE images SET images.likes=images.likes".$_POST["operation"]."1 WHERE id=".$_POST["id"].";"; 
    $query1 = "SELECT likes FROM images WHERE id=".$_POST["id"].";";
    $msqli->query($query);
    $result = $msqli->query($query1);
    $row = $result->fetch_assoc();
    echo json_encode(array("query" => $row["likes"], "success" => 1));
}
?>