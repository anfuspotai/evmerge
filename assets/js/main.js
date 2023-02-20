$(document).ready( function(e) {
  $('#nav-link-dd1').click( e => {
    e.preventDefault()
    e.stopPropagation();
    return null;
  } )
  $('#nav-link-dd2').click( e => {
    e.preventDefault()
    e.stopPropagation();
    return null;
  } )
})

function dynamicForm(title) {
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

$(".service-card").hover(
  function (e) {
    // $(".service-card.active").removeClass("active");
    // $(this).addClass("active");

    $(this).find(".service-title").toggle(false);
    $(".service-card").not(this).find(".service-description").toggle(false);

    $(this).find(".service-description").toggle(true);
    $(".service-card").not(this).find(".service-title").toggle(true);

    $(this).find(".service-img").css("filter", "brightness(30%)");
    $(".service-card")
      .not(this)
      .find(".service-img")
      .css("filter", "brightness(60%)");
  },
  function (e) {
    $(".service-card").find(".service-description").toggle(false);

    $(".service-card").find(".service-title").toggle(true);

    $(".service-img").css("filter", "brightness(60%)");
  }
);

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
      "Thank you",
      "we will get back to you as soon as possible",
      "success"
    );
  } else {
    alert("please enter your first-name, last-name, email and phone number");
  }

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyUu5MkCABZli9AOgxpxtue4lcGqxjRbMqxfRngcs-6Yui4s0PBDr62XnD9ortA-mzJ/exec",
    data: $(this).serialize(),
    method: "post",
    success: function (response) {
      console.log(response.data);
      $(".form-control").val("");
      $("#signup-modal").modal("hide");
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
      "Thank you",
      "we will get back to you as soon as possible",
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
      $(".form-control").val("");
      $("#contact-modal").modal("hide");
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
      "Thank you",
      "we will get back to you as soon as possible",
      "success"
    );
  } else {
    alert("please enter your first-name, last-name, email and phone number");
  }

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwcwTecPud572ipAAj7ZNsIa1-CKI4YABAcr3V9SHohWmTeGMF-LyS633PFf7MfgqkA/exec",
    data: $(this).serialize(),
    method: "post",
    success: function (response) {
      console.log(response.data);
      $(".form-control").val("");
      $("#partner-modal").modal("hide");
      // window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function (err) {
      console.log(err);
    },
  });
});


$("#newsletter-form").submit(function (e) {
  e.preventDefault();
  let payload = {};

  payload.email = $("#newsletter-email").val();

  if (!payload.email) return console.log("Email is required!");

  if (payload.email) {
    swal(
      "Thank you",
      "we will get back to you as soon as possible",
      "success"
    );
  } else {
    alert("please enter your email");
  }

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwbsQfCevC8c8iaFPlPpVbVGAczpWCET3iTEEPEQYfgqUIJ06fxauhB4yZLcDQQ54Az/exec",
    data: $(this).serialize(),
    method: "post",
    success: function (response) {
      console.log(response.data);
      $(".form-control").val("");
      // window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function (err) {
      console.log(err);
    },
  });
});
