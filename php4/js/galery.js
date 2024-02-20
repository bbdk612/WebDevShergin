$(document).ready(function () {
  $("button.like").on("click", (e) => {
    let id = e.target.getAttribute("data-id");
    let operation = e.target.classList.contains("clicked") ? "-" : "+";
    $.ajax({
      method: "POST",
      url: "./service/sendlike.php",
      data: { id: id, operation: operation },
      success: (data) => {
        let jsonData = JSON.parse(data);
        console.log(jsonData);
        if (jsonData.success == 1) {
          $(`button.like[data-id="${id}"] > span`).text(jsonData.query);
        } else {
          console.log(jsonData)
        }
      },
    });
    e.target.classList.toggle("clicked");
    e.target.classList.toggle("btn-secondary");
  });
});
