<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link href="style.css" rel="stylesheet">

    <title>Hello, world!</title>
</head>

<body>
    <main>
        <div class="container-xxl">
            <form class="form__singIn" id="SingIn">
                <div class="mb-3 form-floating">
                    <label for="login" class="form-label">Логин</label>
                    <input id="login" name="login" type="text" class="form-control">
                </div>
                <div class="mb-3 form-floating">
                    <label for="password" class="form-label">Пароль</label>
                    <input id="password" name="password" type="password" class="form-control">
                </div>
                <button class="btn btn-primary singIn" id="singIn" type="submit">Войти</button>
                <button class="btn btn-primary singUp" type="button">Зарегестрироваться</button>
            </form>
            <form class="form__singUp" id="SingUp">
                <div class="mb-3">
                    <label for="login1" class="form-label">Логин</label>
                    <input id="login1" name="login" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="password1" class="form-label">Пароль</label>
                    <input id="password1" name="password" type="password" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="passwordcheck" class="form-label">Подтвердите пароль</label>
                    <input id="passwordcheck" type="password" class="form-control">
                </div>
                <button class="btn btn-primary singIn" type="button">Войти</button>
                <button class="btn btn-primary singUp" type="submit">Зарегестрироваться</button>
            </form>
        </div>
    </main>
    <!-- JQuery -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script src="./js/index.js"></script>
</body>

</html>