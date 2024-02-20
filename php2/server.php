<?php
if (isset($_POST['url'])) {
    if (!empty($_POST['query'] ? true : false)) {
        switch ($_POST['url']) {
            case "yandex":
                $url = "https://yandex.ru/search/?text=" . $_POST['query'];
                header("Location: $url");
                break;
            case "google":
                $url = "https://www.google.com/search?q=" . $_POST['query'];
                header("Location: $url");
                break;
            case "duckduckgo":
                $url = "https://duckduckgo.com/?q=" . $_POST['query'];
                header("Location: $url");
                break;
        }
    } else {
        switch ($_POST['url']) {
            case "yandex":
                $url = "https://ya.ru/";
                header("Location: $url");
                break;
            case "google":
                $url = "https://www.google.com/";
                header("Location: $url");
                break;
            case "duckduckgo":
                $url = "https://duckduckgo.com/";
                header("Location: $url");
                break;
        }
    }
}
