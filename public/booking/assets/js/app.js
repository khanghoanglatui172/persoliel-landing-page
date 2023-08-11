"use strict";

var CB_Object = (function ($, global) {
  /**************************
   *
   *   jQuery Extensions
   *
   ***************************/
  $.extend({
    jpost: function jpost(url, body) {
      console.log(body);
      return $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(body),
        contentType: "application/json",
        dataType: "json",
      });
    },
  });

  /**************************
   *
   *   VARIABLE DECLARATIONS
   *
   ***************************/
  var $hamburger = $(".hamburger-icon"),
    $navMobile = $(".menu-mobile"),
    $body = $("body"),
    $yearSpan = $(".current-year"),
    $contactSend = $("#contact-send"),
    $bookNowButton = $(".book-now__button"),
    $bookNowForm = $(".book-now__button"),
    $main = $("main");

  /**************************
   *
   *   TEMPLATES
   *
   ***************************/
  var inc = 0;

  /**************************
   *
   *   FUNCTION DECLARATIONS
   *
   ***************************/

  $(".additional-passengers__container").on(
    "click",
    ".remove-passenger",
    function (e) {
      e.preventDefault();
      $(this).parent().remove();
    }
  );

  function addAdditionalPassengerInput() {
    $("#booking-form__step-2 .form-group:first-of-type").css(
      "margin-bottom",
      ".75rem"
    );
    $(".additional-passengers__add").on("click", "*", function (e) {
      e.preventDefault();
      inc++;
      var additionalPassengerInput = `
        <div class="form-group passengerNr${inc + 1}">
          <img class="remove-passenger" src="./assets/images/minus-icon.png" />
          <div class="form__input--third">
            <label for="bnf__add-passenger${inc}">
              Passenger ${inc + 1} First Name
            </label>
            <input
              class="required"
              type="text"
              id="bnf__add-passenger-first-name-${inc}"
              data-val="add-passenger${inc}"
              placeholder="First Name"
              maxlength="35"
            >
            <div class="messages"></div>
          </div>
          <div class="form__input--third">
            <label for="bnf__add-passenger${inc}">
              Passenger ${inc + 1} Last Name
            </label>
            <input
              class="required"
              type="text"
              id="bnf__add-passenger-last-name-${inc}"
              data-val="add-passenger${inc}"
              placeholder="Last Name"
              maxlength="35"
            >
            <div class="messages"></div>
          </div>
          <div class="form__input--third">
            <label for="bnf__add-passenger${inc}">
              Passenger ${inc + 1} Record Locator
            </label>
            <input
              type="text"
              id="bnf__add-passenger-record-locator-${inc}"
              data-val="add-passenger${inc}"
              placeholder="Record Locator"
              minlength="4"
              maxlength="6"
            >
            <div class="messages"></div>
          </div>
        </div>`;
      $(".additional-passengers__container").append(additionalPassengerInput); //add input box
    });
  }

  function toggleMobileMenu() {
    $navMobile.toggleClass("active");

    if ($navMobile.hasClass("active")) {
      $navMobile.slideDown();
    } else {
      $navMobile.slideUp();
    }

    $body.toggleClass("u-noscroll");
  }

  function getFullYear() {
    return new Date().getFullYear();
  }

  function setInputDates(arr) {
    arr.each(function (i, v) {
      $(v).val(new Date());
    });
  }

  function getFormData() {
    const values = {
      travelDate: new Date($("#bnf__travel-date").val()).toISOString(),
      flightNumber: $("#bnf__flight-numbers").val(),
      pointOfService: "",
      passengers: [
        {
          firstName: $("#bnf__pri-passenger-first-name").val(),
          lastName: $("#bnf__pri-passenger-last-name").val(),
        },
      ],
      emergencyContact: {
        firstName: $("#bnf__contact-first-name").val(),
        lastName: $("#bnf__contact-last-name").val(),
        phoneNumber: $("#bnf__contact-phone").val(),
      },
      requestor: {
        firstName: $("#bnf__req-first-name").val(),
        lastName: $("#bnf__req-last-name").val(),
        phoneNumber: $("#bnf__req-phone").val(),
        email: $("#bnf__req-email").val(),
      },
    };

    if ($("#bnf__pri-passenger-record-locator").val()) {
      values.passengers[0].recordLocator = $(
        "#bnf__pri-passenger-record-locator"
      ).val();
    }

    // Transportation information is optional
    if (
      $("#bnf__car-service-company").val() ||
      $("#bnf__car-service-phone").val() ||
      $("#bnf__car-service-reservation").val()
    ) {
      const carService = {
        company: $("#bnf__car-service-company").val() || "",
        phoneNumber: $("#bnf__car-service-phone").val() || "",
        reservation: $("#bnf__car-service-reservation").val() || "",
      };
      values.carService = carService;
    }

    // Get point of service radio button
    $('input[type="radio"]').each(function (i, el) {
      if ($(this).is(":checked")) {
        const underscoreLocation = $(this).val().indexOf("_") + 2;
        values.pointOfService = $(this).val().substring(underscoreLocation);
      }
    });

    // Get additional passengers
    const additionalPassengerCount =
      $('input[id^="bnf__add-passenger-first-name"]').length + 1;
    for (let i = 1; i < additionalPassengerCount; i++) {
      let passenger = {};
      passenger.firstName = $(`#bnf__add-passenger-first-name-${i}`).val();
      passenger.lastName = $(`#bnf__add-passenger-last-name-${i}`).val();
      if ($(`#bnf__add-passenger-record-locator-${i}`).val()) {
        passenger.recordLocator = $(
          `#bnf__add-passenger-record-locator-${i}`
        ).val();
      }
      values.passengers.push(passenger);
    }

    return values;
  }

  function jPost(url, data) {
    return $.jpost(url, data);
  }

  function initSmoothScroll(elm, isTop) {
    if (isTop === undefined) {
      isTop = false;
    }

    $(elm).on("click", "li", function (e) {
      var $this = $(this),
        headerHeight = $(".menu__container").innerHeight(),
        id,
        scrollDest;

      e.preventDefault();

      id = $this.attr("data-target");

      $(".menu-desktop li").each(function (i, el) {
        $(el).hasClass("menu-active") ? $(el).removeClass("menu-active") : true;
      });

      if (isTop) {
        e.stopPropagation();
        scrollDest = "0px";
      } else {
        $this.addClass("menu-active");
        scrollDest = $(id).position().top - headerHeight;
      }

      if ($navMobile.hasClass("active")) toggleMobileMenu();

      $("html, body").animate({
        scrollTop: scrollDest,
        easing: "easeInOutSine",
        duration: 250,
      });
    });
  }

  function setClienteleFlickity() {
    $(".clientele-carousel").flickity({
      // options
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      autoPlay: true,
    });
  }

  function setTestimonialFlickity() {
    $(".testimonial-carousel").flickity({
      // options
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      autoPlay: 5000,
    });
  }

  function setDatePickers(arr) {
    arr.forEach(function (v, i) {
      $(v).datepicker({
        minDate: 0,
        maxDate: "+15m",
        numberOfMonths: 2,
      });
    });
  }

  /*********************
   *
   *   EVENT LISTENERS
   *
   **********************/

  // Click to reveal the nav
  function hamburgerClick() {
    $hamburger.click(toggleMobileMenu);
  }

  validate.extend(validate.validators.datetime, {
    // The value is guaranteed not to be null or undefined but otherwise it
    // could be anything.
    parse: function parse(value, options) {
      return +moment.utc(value);
    },
    // Input is a unix timestamp
    format: function format(value, options) {
      var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
      return moment.utc(value).format(format);
    },
  });

  // These are the constraints used to validate the form

  function addDynamicErrorChecking(inputs, form, constraints) {
    for (var i = 0; i < inputs.length; ++i) {
      inputs[i].addEventListener("change", function (ev) {
        var errors = validate(form, constraints) || {};
        showErrorsForInput(this, errors[this.name]);
      });
    }
  }

  function honeyPot(el) {
    if (typeof $(el).val() !== "undefined") {
      return true;
    } else {
      return false;
    }
  }

  function handleFormSubmit(form, constraints) {
    // validate the form aainst the constraints
    var errors = validate(form, constraints);
    // then we update the form to reflect the results
    showErrors(form, errors || {});

    if (!errors) {
      $(".contact-form--thank-you").fadeIn(800);
      $(".contact-form--pre-submission").fadeOut(500);
    }
  }

  // Updates the inputs with the validation errors
  function showErrors(form, errors) {
    // We loop through all the inputs and show the errors for that input
    _.each(
      form.querySelectorAll("input[name], textarea[name]"),
      function (input) {
        // Since the errors can be null if no errors were found we need to handle
        // that
        showErrorsForInput(input, errors && errors[input.name]);
      }
    );
  }

  // Shows the errors for a specific input
  function showErrorsForInput(input, errors) {
    // This is the root of the input
    var formGroup = closestParent(input.parentNode, "form-group"),
      // Find where the error messages will be insert into
      messages = formGroup.querySelector(".messages");
    // First we remove any old messages and resets the classes
    resetFormGroup(formGroup);
    // If we have errors
    if (errors) {
      // we first mark the group has having errors
      formGroup.classList.add("has-error");
      // then we append all the errors
      _.each(errors, function (error) {
        addError(messages, error);
      });
    } else {
      // otherwise we simply mark it as success
      formGroup.classList.add("has-success");
    }
  }
  // Recusively finds the closest parent that has the specified class
  function closestParent(child, className) {
    if (!child || child == document) {
      return null;
    }
    if (child.classList.contains(className)) {
      return child;
    } else {
      return closestParent(child.parentNode, className);
    }
  }

  function resetFormGroup(formGroup) {
    // Remove the success and error classes
    formGroup.classList.remove("has-error");
    formGroup.classList.remove("has-success");
    // and remove any old messages
    _.each(formGroup.querySelectorAll(".help-block.error"), function (el) {
      el.parentNode.removeChild(el);
    });
  }
  // Adds the specified error with the following markup
  // <p class="help-block error">[message]</p>
  function addError(messages, error) {
    var block = document.createElement("p");
    block.classList.add("help-block");
    block.classList.add("error");
    block.innerText = error;
    messages.appendChild(block);
  }

  function initMenuScroll() {
    initSmoothScroll(".menu");
  }

  function initHomeScroll() {
    initSmoothScroll(".logo", true);
  }

  function alphaNumericValidation(val, el) {
    var alphaNumeric = /[^0-9a-z]/i;

    if (val.match(alphaNumeric)) {
      var messageDiv = $(el).next();
      $(messageDiv).html(
        '<p class="help-block error">Must be an alphanumeric code</p>'
      );
      return false;
    }
    return true;
  }

  function requiredInput(val, el) {
    if ($(val).length === 0) {
      var messageDiv = $(el).next();
      $(messageDiv).html(
        '<p class="help-block error">This Field is required</p>'
      );
      return false;
    }
    return true;
  }

  function alphaNumericAsteriskDashValidation(val, el) {
    var alphaNumeric = /[^0-9a-z\*\-]/i,
      messageDiv = $(el).next();

    if (val.match(alphaNumeric)) {
      $(messageDiv).html(
        '<p class="help-block error">Only certain special characters are allowed</p>'
      );
      return false;
    }
    $(messageDiv).html("");
    return true;
  }

  function hasNUmber(val, el) {
    if (/\d/.test(myString)) {
      return true;
    } else {
      var messageDiv = $(el).next();
      $(messageDiv).html(
        '<p class="help-block error">Phone Number must include numbers</p>'
      );
      return false;
    }
  }

  function dateCheckIfToday(el) {
    if ($(el).val() === moment(new Date()).format("MM/DD/YYYY")) {
      var answer = confirm(
        "Thank you. We see this request is for today.  Confirming it may be hampered a contracted lead time, but we will give it our best and give you our reply as soon at possible. Would you like to proceed?"
      );
      if (answer !== true) {
        return false;
      }
    }
    return true;
  }

  function firstCharAlphaNumeric(val, el) {
    var firstChar = val.substring(0, 1);

    if (firstChar.match(/[^a-z0-9]/i)) {
      var messageDiv = $(el).next();
      // $(messageDiv).html('<p class="help-block error">The First two characters must be alphanumeric</p>')
      $(messageDiv).html(
        '<p class="help-block error">The flight number must begin with the airline code and end with the flight code.</p>'
      );
      return false;
    }
    return true;
  }

  function secondCharAlphaNumeric(val, el) {
    var secondChar = val.substring(1, 2);

    if (secondChar.match(/[^a-z0-9]/i)) {
      var messageDiv = $(el).next();
      // $(messageDiv).html('<p class="help-block error">The First two characters must be alphanumeric</p>')
      $(messageDiv).html(
        '<p class="help-block error">The flight number must begin with the airline code and end with the flight code.</p>'
      );
      return false;
    }
    return true;
  }

  function lastCharsNumbers(val, el) {
    var afterTwo = val.substring(2);

    if (afterTwo.match(/[^0-9]/i)) {
      var messageDiv = $(el).next();
      $(messageDiv).html(
        '<p class="help-block error">All Characters after the second must be numbers</p>'
      );
      return false;
    }
    return true;
  }

  function phoneNumberOnly(val, el) {
    var messageDiv = $(el).next();
    if (val.match(/[^0-9x\-\.\(\)\+]/i)) {
      $(messageDiv).html(
        '<p class="help-block error">Phone number can only contain numbers and certain special characters</p>'
      );
      return false;
    } else if (val.length < 6) {
      $(messageDiv).html(
        '<p class="help-block error">Phone number needs to contain more than 6 characters.</p>'
      );
      return false;
    }
    $(messageDiv).html("");
    return true;
  }

  function nameValidator(val, el) {
    var val = val.trim(),
      messageDiv = $(el).next();

    if (typeof val === "undefined") val = $(el).val();
    if (val.match(/[^A-Za-z_'-\s]/i)) {
      $(messageDiv).html(
        '<p class="help-block error">Name cannot contain numbers or special characters</p>'
      );
      return false;
    }

    messageDiv.next().html();
    return true;
  }

  function maxChar(val, el, limit) {
    var messageDiv = $(el).next();
    if (typeof val !== "undefined" && val.length > limit) {
      $(messageDiv).html(
        '<p class="help-block error">This field cannot be more than ' +
          limit +
          " characters long</p>"
      );
      return false;
    }
    messageDiv.next().html("");
    return true;
  }

  function minChar(val, el, limit) {
    var singular = "character",
      plural = "characters",
      messageDiv = $(el).next();

    if (val.length <= limit) {
      $(messageDiv).html(
        '<p class="help-block error">This field must be more than ' +
          limit +
          " " +
          (limit === 1 ? singular : plural) +
          " long</p>"
      );
      return false;
    }
    messageDiv.html("");
    return true;
  }

  function emailTypeValidation(val, el) {
    var emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      messageDiv = $(el).next();
    if (!val.match(emailRegex)) {
      $(messageDiv).html(
        '<p class="help-block error">Please enter a valid email</p>'
      );
      return false;
    }
    $(messageDiv).html("");
    return true;
  }

  function validateFlightNumbers() {
    var flightNumberInput = "#bnf__flight-numbers";
    var messageDiv = $(flightNumberInput).next();
    var message =
      '<p class="help-block error">Invalid flight number. E.g.: DL123 for Delta flight 123</p>';

    // if (
    //   !/^([A-Z]{3}|[A-Z\d]{2})(?:\s?)(\d{1,4})$/.test(
    //     $(flightNumberInput).val()
    //   )
    // ) {
    //   $(messageDiv).html(message);
    //   return false;
    // }
    if (
      !alphaNumericValidation($(flightNumberInput).val(), flightNumberInput)
    ) {
      $(messageDiv).html(message);
      return false;
    } else if (
      !firstCharAlphaNumeric($(flightNumberInput).val(), flightNumberInput)
    ) {
      $(messageDiv).html(message);
      return false;
    } else if (
      !secondCharAlphaNumeric($(flightNumberInput).val(), flightNumberInput)
    ) {
      $(messageDiv).html(message);
      return false;
    } else if (
      !lastCharsNumbers($(flightNumberInput).val(), flightNumberInput)
    ) {
      $(messageDiv).html(message);
      return false;
    } else if (!maxChar($(flightNumberInput).val(), flightNumberInput, 6)) {
      $(messageDiv).html(message);
      return false;
    } else if (!minChar($(flightNumberInput).val(), flightNumberInput, 2)) {
      $(messageDiv).html(message);
      return false;
    }
    messageDiv.html("");
    return true;
  }

  function validatePointOfService() {
    if ($('[name="bnf__service"]:checked').length < 1) {
      $(".radio-messages").html(
        '<p class="help-block error">This field is required</p>'
      );
      return false;
    }
    $(".radio-messages").html("");
    return true;
  }

  function validatePassengerName(el) {
    var messageDiv = $(el).next();

    if (!maxChar($(el).val(), el, 35)) {
      return false;
    } else if (!nameValidator($(el).val(), el)) {
      return false;
    }
    messageDiv.html("");
    return true;
  }

  function validateRecordLocator(el) {
    var messageDiv = $(el).next();

    if (!alphaNumericValidation($(el).val(), el, 35)) {
      return false;
    } else if (!minChar($(el).val(), el, 4)) {
      return false;
    } else if (!maxChar($(el).val(), el, 6)) {
      return false;
    }
    messageDiv.html("");
    return true;
  }

  function validateEmail(el) {
    if (!emailTypeValidation($(el).val(), el)) {
      return false;
    }
    return true;
  }

  function validateCarReservationNumber(val, el) {
    if (!alphaNumericAsteriskDashValidation($(el).val(), el)) {
      return false;
    }
    return true;
  }

  function validateCurrentFieldset(fs) {
    var requiredFields = $(fs).find(".required");
    var errors = 0;
    requiredFields.each(function (i, v) {
      if (
        $(this).prop("name") === "bnf__service" &&
        !validatePointOfService()
      ) {
        errors++;
      } else if ($(this).val() === "") {
        var messageDiv = $(v).next();
        $(messageDiv).html(
          '<p class="help-block error">This field is required</p>'
        );
        errors++;
      }
    });

    if (errors > 0) {
      return false;
    }

    if ($(fs).find("#bnf__travel-date").val() === "") {
      errors++;
    }

    if ($(fs).find("#bnf__flight-numbers").length > 0) {
      if (!validateFlightNumbers()) {
        errors++;
      }
    }

    if ($(fs).find(".form-group--radio").length > 0) {
      if (!validatePointOfService()) {
        errors++;
      }
    }

    if ($(fs).find("#bnf__pri-passenger-first-name").length > 0) {
      if (!validatePassengerName("#bnf__pri-passenger-first-name")) {
        errors++;
      }
    }

    if ($(fs).find("#bnf__pri-passenger-last-name").length > 0) {
      if (!validatePassengerName("#bnf__pri-passenger-last-name")) {
        errors++;
      }
    }

    if (
      $(fs).find("#bnf__pri-passenger-record-locator").length > 0 &&
      $("#bnf__pri-passenger-record-locator").val().length > 0
    ) {
      if (!validateRecordLocator("#bnf__pri-passenger-record-locator")) {
        errors++;
      }
    }

    if ($(fs).find('[id^="bnf__add-passenger-first"]').length > 0) {
      $('[id^="bnf__add-passenger-first"]').each(function (i, v) {
        var el = "#" + $(v).attr("id");
        if (!validatePassengerName(el)) {
          errors++;
        }
      });
    }

    if ($(fs).find('[id^="bnf__add-passenger-last"]').length > 0) {
      $('[id^="bnf__add-passenger-last"]').each(function (i, v) {
        var el = "#" + $(v).attr("id");
        if (!validatePassengerName(el)) {
          errors++;
        } else {
          $(el).next().html("");
        }
      });
    }

    if ($(fs).find('[id^="bnf__add-passenger-record"]').length > 0) {
      $('[id^="bnf__add-passenger-record"]').each(function (i, v) {
        var el = "#" + $(v).attr("id");
        if ($(el).val().length > 0) {
          if (!validateRecordLocator(el)) {
            errors++;
          }
        }
      });
    }

    if (
      $(fs).find("#bnf__car-service-phone").length > 0 &&
      $("#bnf__car-service-phone").val().length > 0
    ) {
      if (
        !phoneNumberOnly(
          $("#bnf__car-service-phone").val(),
          "#bnf__car-service-phone"
        )
      ) {
        errors++;
      }
    }

    if (
      $(fs).find("#bnf__car-service-reservation").length > 0 &&
      $("#bnf__car-service-reservation").val().length > 0
    ) {
      if (
        !validateCarReservationNumber(
          $("#bnf__car-service-reservation").val(),
          "#bnf__car-service-reservation"
        )
      ) {
        errors++;
      }
    }

    if ($(fs).find("#bnf__contact-first-name").length > 0) {
      if (!validatePassengerName("#bnf__contact-first-name")) {
        errors++;
      }
    }

    if ($(fs).find("#bnf__contact-phone").length > 0) {
      if (
        !phoneNumberOnly($("#bnf__contact-phone").val(), "#bnf__contact-phone")
      ) {
        errors++;
      }
    }

    if ($(fs).find("#bnf__contact-last-name").length > 0) {
      if (!validatePassengerName("#bnf__contact-last-name")) {
        errors++;
      }
    }

    if (
      $(fs).find("#bnf__req-phone").length > 0 &&
      $("#bnf__req-phone").val().length > 0
    ) {
      if (!phoneNumberOnly($("#bnf__req-phone").val(), "#bnf__req-phone")) {
        errors++;
      }
    }

    if ($(fs).find("#bnf__req-first-name").length > 0) {
      if (!validatePassengerName("#bnf__req-first-name")) {
        errors++;
      }
    }

    if ($(fs).find("#bnf__req-last-name").length > 0) {
      if (!validatePassengerName("#bnf__req-last-name")) {
        errors++;
      }
    }

    if ($(fs).find("#bnf__req-email").length > 0) {
      if (!validateEmail("#bnf__req-email")) {
        errors++;
      }
    }

    if (errors > 0) {
      return false;
    } else {
      return true;
    }
  }

  /*******************************************
   *
   * Keyup validation rules for Booking form
   *
   *******************************************/
  function validateFlightNumbersKeyUp() {
    $("#bnf__flight-numbers").on("keyup", function () {
      if ($("#bnf__flight-numbers").val().length >= 3) {
        validateFlightNumbers();
      } else {
        $(this).next().html("");
      }
      const val = $("#bnf__flight-numbers").val();
      $(this).val(val.toUpperCase());
    });
  }

  function priFirstNameKeyup() {
    $("#bnf__pri-passenger-first-name").on("keyup", function () {
      validatePassengerName("#bnf__pri-passenger-first-name");
    });
  }

  function priLastNameKeyup() {
    $("#bnf__pri-passenger-last-name").on("keyup", function () {
      validatePassengerName("#bnf__pri-passenger-last-name");
    });
  }

  function priRecordLocatorKeyup() {
    var $priRecord = $("#bnf__pri-passenger-record-locator");

    $priRecord.on("keyup", function () {
      if ($priRecord.val().length > 0) {
        validateRecordLocator($priRecord);
      } else {
        $priRecord.next().html("");
      }
    });
  }

  function carServicePhoneKeyup() {
    var $carPhone = $("#bnf__car-service-phone");
    $carPhone.on("keyup", function () {
      if ($carPhone.val().length > 0) {
        phoneNumberOnly($carPhone.val(), "#bnf__car-service-phone");
      } else {
        $carPhone.next().html("");
      }
    });
  }

  function carReservationNumKeyup() {
    var $carRes = $("#bnf__car-service-reservation");

    $carRes.on("keyup", function () {
      if ($carRes.val().length > 0) {
        validateCarReservationNumber(
          $carRes.val(),
          "#bnf__car-service-reservation"
        );
      } else {
        $carRes.next().html("");
      }
    });
  }

  function contactFirstNameKeyup() {
    var contactFirst = "#bnf__contact-first-name";

    $(contactFirst).on("keyup", function () {
      validatePassengerName(contactFirst);
    });
  }

  function contactLastNameKeyup() {
    var name = "#bnf__contact-last-name";

    $(name).on("keyup", function () {
      validatePassengerName(name);
    });
  }

  function contactPhoneKeyup() {
    var $contactPhone = $("#bnf__contact-phone");

    $contactPhone.on("keyup", function () {
      phoneNumberOnly($("#bnf__contact-phone").val(), "#bnf__contact-phone");
    });
  }

  function reqPhoneKeyup() {
    var $reqPhone = $("#bnf__req-phone");

    $reqPhone.on("keyup", function () {
      phoneNumberOnly($("#bnf__req-phone").val(), "#bnf__req-phone");
    });
  }

  function reqFirstNameKeyUp() {
    var name = "#bnf__req-first-name";

    $(name).on("keyup", function () {
      validatePassengerName(name);
    });
  }

  function reqLastNameKeyUp() {
    var name = "#bnf__req-last-name";

    $(name).on("keyup", function () {
      validatePassengerName(name);
    });
  }

  function reqEmailKeyUp() {
    var email = "#bnf__req-email";

    $(email).on("keyup", function () {
      validateEmail(email);
    });
  }

  function keyupFunctions() {
    // Fieldset 1
    validateFlightNumbersKeyUp();
    // Point of service??

    // Fieldset 2
    priFirstNameKeyup();
    priLastNameKeyup();
    priRecordLocatorKeyup();

    // Fieldset 3
    carServicePhoneKeyup();
    carReservationNumKeyup();

    // Fieldset 4
    contactFirstNameKeyup();
    contactLastNameKeyup();
    contactPhoneKeyup();
    reqPhoneKeyup();
    reqFirstNameKeyUp();
    reqLastNameKeyUp();
    reqEmailKeyUp();
  }

  function clearValidation() {
    var inputs = $("#msform input");

    inputs.each(function (i, v) {
      if ($(v).hasClass("required") && $(v).prop("name") !== "bnf__service") {
        $(v).on("blur", function () {
          if ($(this).val() !== "") {
            var c = $(this).next();
            c.html("");
          }
        });
      }
      if ($(v).hasClass("required") && $(v).prop("name") === "bnf__service") {
        $(v).on("change", function () {
          if ($(this).is(":checked")) {
            $(".radio-messages").html("");
          }
        });
      }
    });
  }

  clearValidation();

  function bookNowStepWizard() {
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate

    $(".next").click(function () {
      // var animating; //flag to prevent quick multi-click glitches
      // if(animating) return false;

      // animating = true;

      var current_fs = $(this).closest('fieldset[id^="booking-form__step-"]');

      var valid = validateCurrentFieldset(current_fs);

      if (!valid) {
        // animating = false;
        return false;
      }

      next_fs = current_fs.next();

      //activate next step on progressbar using the index of next_fs
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function step(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = now * 50 + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ transform: "scale(" + scale + ")" });
            next_fs.css({ left: left, opacity: opacity });
          },
          duration: 400,
          complete: function complete() {
            current_fs.hide();
            //show the next fieldset
            next_fs.show();
          },
        }
      );
    });

    $(".previous").click(function () {
      // if(animating) return false;
      // animating = true;

      current_fs = $(this).closest('fieldset[id^="booking-form__step-"]');
      previous_fs = current_fs.prev();

      //de-activate current step on progressbar
      $("#progressbar li")
        .eq($("fieldset").index(current_fs))
        .removeClass("active");

      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function step(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = (1 - now) * 50 + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ left: left });
            previous_fs.css({
              transform: "scale(" + scale + ")",
              opacity: opacity,
            });
          },
          duration: 400,
          complete: function complete() {
            current_fs.hide();
            //show the previous fieldset
            previous_fs.show();
          },
        }
      );
    });

    $(".submit").click(function (e) {
      e.preventDefault();

      current_fs = $(this).closest('fieldset[id^="booking-form__step-"]');
      var valid = validateCurrentFieldset(current_fs);

      if (!valid) {
        // animating = false;
        return false;
      }

      if (!dateCheckIfToday("#bnf__travel-date")) return false;

      const success = submitBookNow();

      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function step(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = now * 50 + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ transform: "scale(" + scale + ")" });
          },
          duration: 400,
          complete: function complete() {
            current_fs.hide();
            $("#booking-form__step-result").css({
              display: "block",
              opacity: 1,
              left: 0,
            });
            if (success) {
              $("#booking-form__step-result--success").show();
            } else {
              $("#booking-form__step-result--failure").show();
            }
          },
        }
      );

      return false;
    });

    $(".submit-new").click(function (e) {
      e.preventDefault();

      var inputs = $("#msform").find("input");

      inputs.each(function () {
        if (
          $(this).attr("type") !== "button" &&
          $(this).attr("type") !== "submit" &&
          $(this).prop("name") !== "bnf__service"
        ) {
          $(this).val("");
        }
        if ($(this).prop("name") === "bnf__service") {
          $(this).prop("checked", false);
        }
      });

      var fieldsets = $("#msform").find("fieldset");

      fieldsets.each(function () {
        $(this).css("transform", "scale(1)");
      });

      // if(animating) return false;
      // animating = true;

      current_fs = $("fieldset#booking-form__step-result");
      next_fs = $("fieldset#booking-form__step-1");

      //de-activate current step on progressbar
      $("#progressbar li").each(function () {
        $(this).removeClass("active");
      });
      $("#progressbar li").eq(0).addClass("active");

      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function step(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale next_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = (1 - now) * 50 + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ left: left });
            next_fs.css({
              transform: "scale(" + scale + ")",
              opacity: opacity,
            });
          },
          duration: 400,
          complete: function complete() {
            current_fs.hide();
            //show the next fieldset
            next_fs.show();
          },
        }
      );

      return false;
    });
  }

  function submitBookNow() {
    let success = false;
    console.log("run");

    const formData = getFormData("#msform");
    $.ajax({
      method: "POST",
      url: " http://localhost:3000/api/booking",
      contentType: "application/json",
      data: JSON.stringify(formData),
      dataType: "json",
      async: false,
      error: function (err) {
        console.log(err);
        let errorsHtml = "";
        const { errors } = err.responseJSON;
        delete errors.counter;
        Object.values(errors).forEach((value) => {
          if (value) errorsHtml += `<li>${value}</li>`;
        });
        $(".submission-errors").html(errorsHtml);
      },
      success: function (data) {
        console.log(data);
        success = data;
      },
    });
    return success;
  }

  // All event handlers should be placed in this function
  function events() {
    hamburgerClick();
    // sendContactRequest();
    initMenuScroll();
    initHomeScroll();
    bookNowStepWizard();
    addAdditionalPassengerInput();
    keyupFunctions();
  }

  // All data initialiaztion should go in this function
  function init() {
    // Init functions
    setClienteleFlickity();
    setTestimonialFlickity();
    // Dyanmically add year to copyright area
    $yearSpan.text(getFullYear());
    setDatePickers(["#bnf__travel-date"]);
    // $("#bnf__contact-phone").intlTelInput({
    //   allowDropdown: true,
    //   autoPlaceholder: "polite",
    //   preferredCountries: ['us']
    // });
    // $("#test").intlTelInput({
    //   allowDropdown: true,
    //   autoPlaceholder: "polite",
    // });

    var flight_number = new URLSearchParams(window.location.search).get(
      "flight_number"
    );
    if (flight_number) $("#bnf__flight-numbers").val(flight_number);

    $(".close-modal__nav-link").on("click", function (e) {
      e.preventDefault();
      window.history.back();
    });
  }

  // Wait for DOM to load before firing event and init functions
  $(document).ready(function () {
    events();
    init();
  });

  // Object that returns global methods and variables
  return {
    alphaNumericValidation: alphaNumericValidation,
  };
})(jQuery, window);
