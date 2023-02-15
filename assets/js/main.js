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

$("#signup-submit").click((e) => {
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

  console.log(payload);
});

$("#contact-submit").click((e) => {
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

  console.log(payload);
});

$("#dynamic-form-submit").click((e) => {
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

  console.log(payload);
});
