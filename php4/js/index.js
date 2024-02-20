$(document).ready(function () {
  $(".form__singIn button.singUp").click(function () {
    $(".form__singIn").css("display", "none");
    $(".form__singUp").css("display", "block");
  });

  $("#SingIn").on("submit", function (e) {
    e.preventDefault();
    console.log("im here");
    $.ajax({
      method: "POST",
      url: "./service/login.php",
      data: $(this).serialize(),
      success: function (data) {
        let jsonData = JSON.parse(data);

        if (jsonData.success == 1) {
          window.location.href = "galery.php";
        } else {
          console.log(data.error);
        }
      },
    });
  });

  $(".form__singUp button.singIn").click(function () {
    $(".form__singIn").css("display", "block");
    $(".form__singUp").css("display", "none");
  });
});
