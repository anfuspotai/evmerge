function dynaminForm(title) {
  $("#dynamic-form-title").html(title);
  $("#dynamic-form-type").val(title);

  $("#partner-modal").modal("show");
}

$(".about-tab").click(function () {
  $(".about-tab").removeClass("active");
  $(this).addClass("active");

  $(".our-text-div").toggle(false);
  $($(this).attr("data-target")).toggle(true);
});

$(".service-description").toggle(false);

$(".service-card").hover(function (e) {
  $(".service-card.active").removeClass("active");
  $(this).addClass("active");

  $(this).find(".service-title").toggle(false);
  $(".service-card").not(this).find(".service-description").toggle(false);

  $(this).find(".service-description").toggle(true);
  $(".service-card").not(this).find(".service-title").toggle(true);

  $(this).find(".service-img").css("filter", "brightness(30%)");
  $(".service-card")
    .not(this)
    .find(".service-img")
    .css("filter", "brightness(60%)");
});

$("#subscribe-submit").click((e) => {
  let payload = {};

  payload.email = $("#newsletter-email").val();

  if (!payload.email) return console.log("Email is required!");

  console.log(payload);
});

$("#signup-form").submit(function (e) {
  e.preventDefault();

  let payload = {};

  payload.fistname = $("#user-fname").val();
  payload.lastname = $("#user-lname").val();
  payload.email = $("#user-email").val();
  payload.phone = $("#user-phone").val();
  payload.country = $("#user-country").val();
  payload.city = $("#user-city").val();
  payload.postal = $("#user-postal").val();
  payload.address = $("#user-address").val();

  if (!payload.email) return console.log("Email is required!");

  if (payload.fistname && payload.lastname && payload.email && payload.phone) {
    swal(
      "Good job!",
      "we will get back to your as soon as possible",
      "success"
    );
  } else {
    alert("please enter your first-name, last-name, email and phone number");
  }

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyeoJQ4MXb0xloyP4OHiUhpWJ5bqos66jJU3hTS9JtobN3nXi9UktB1ZsdG5IsmhZSS/exec",
    data: $(this).serialize(),
    method: "post",
    success: function (response) {
      console.log(response.data);
      $('.form-control').val('')
      $('#signup-modal').modal('hide')
      // window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function (err) {
      console.log(err);
    },
  });

  console.log(payload);
});

$("#contact-form").submit(function (e) {
  e.preventDefault();
  let payload = {};

  payload.fistname = $("#contact-fname").val();
  payload.lastname = $("#contact-lname").val();
  payload.email = $("#contact-email").val();
  payload.phone = $("#contact-phone").val();
  payload.company = $("#contact-company").val();
  payload.city = $("#contact-city").val();
  payload.msg = $("#contact-msg").val();

  if (!payload.email) return console.log("Email is required!");

  if (payload.fistname && payload.lastname && payload.email && payload.phone) {
    swal(
      "Good job!",
      "we will get back to your as soon as possible",
      "success"
    );
  } else {
    alert("please enter your first-name, last-name, email and phone number");
  }

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzO2HciwEfQSGxC8Wlzwn3Wdo9q99HSmFpF5xr5k0s1jKuW9yu6RdL--Uv2_MRhTuXk_w/exec",
    data: $(this).serialize(),
    method: "post",
    success: function (response) {
      console.log(response.data);
      $('.form-control').val('')
      $('#contact-modal').modal('hide')
      // window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function (err) {
      console.log(err);
    },
  });
});

$("#dynamic-form").submit(function (e) {
  e.preventDefault();

  let payload = {};

  payload.fistname = $("#partner-fname").val();
  payload.lastname = $("#partner-lname").val();
  payload.type = $("#partner-type").val();
  payload.email = $("#partner-email").val();
  payload.phone = $("#partner-phone").val();
  payload.location = $("#partner-location").val();
  payload.city = $("#partner-city").val();
  payload.landmark = $("#partner-landmark").val();
  payload.msg = $("#partner-msg").val();

  if (!payload.email) return console.log("Email is required!");

  if (payload.fistname && payload.lastname && payload.email && payload.phone) {
    swal(
      "Good job!",
      "we will get back to your as soon as possible",
      "success"
    );
  } else {
    alert("please enter your first-name, last-name, email and phone number");
  }

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbw37bPhDMVKk-6fBe-QWC7_9ISHt9aj9dl7aZcIUwUCQZPqAgy7yrA_ErNZGNVMiOow/exec",
    data: $(this).serialize(),
    method: "post",
    success: function (response) {
      console.log(response.data);
      $('.form-control').val('')
      $('#partner-modal').modal('hide')
      // window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function (err) {
      console.log(err);
    },
  });
});
