<?php
if (isset($_COOKIE["login"]) && isset($_COOKIE["role"])) :
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $msqli = new mysqli("localhost", "root", "", "image_service");
    $query = "SELECT * FROM images";
    $result = $msqli->query($query);
?>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Galery</title>
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

        <link href="style.css" rel="stylesheet">

    </head>

    <body>
        <div class="container-xxl mt-5">
            <h1>Galery</h1>
            <div class="album py-5 bg-body-tertiary">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <?php while ($row = $result->fetch_assoc()) : ?>
                        <div class="col">
                            <div class="card">
                                <img class="bd-placehold-img card-img-top" width="100%" src="<?php echo $row["path"]; ?>">
                                <div class="card-body ">
                                    <div class="card-text pb-2 text-center">
                                        <?php echo $row["name"]; ?>
                                    </div>
                                    <div class="d-flex justify-content-center aling-items-center">
                                        <button class="btn btn-sm btn-primary like" data-id=<?php echo $row["id"]; ?>>Like <span><?php echo $row["likes"]; ?></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
            </div>
            <?php if ((int)$_COOKIE["role"] > 0) :?>
                .
            <?php endif ?>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
        <script src="./js/galery.js"></script>
    </body>

    </html>
<?php else :
    echo $_COOKIE["login"] . "  " . $_COOKIE["role"];
endif;?>