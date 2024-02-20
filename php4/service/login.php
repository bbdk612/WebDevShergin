<?php

if (isset($_POST["login"]) && isset($_POST["password"])) {
    $msqli = mysqli_connect("localhost", "root", "", "image_service");
    if (mysqli_connect_errno()) {
        echo json_encode(array("error" => mysqli_connect_error(), "success" => 0));
    } else {
        $query = "SELECT * FROM users WHERE name=\"" . $_POST['login'] . "\" AND password=\"" . $_POST["password"] . "\"";
        $result = mysqli_query($msqli, $query);

        if (!$result) {
            echo json_encode(array("error" => mysqli_connect_error($msqli), "success" => 0));
        } else {
            $row = $result->fetch_assoc();
            setcookie("login", $_POST["login"], time() + (86400 * 30), "/");
            setcookie("role", $row["role"], time() + (86400 * 30), "/");
            echo json_encode(array("success" => 1));
        }
    }
}
?>
