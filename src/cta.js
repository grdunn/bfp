function setUpCta() {
  const forms = document.querySelectorAll("[data-cta-form]");
  const url =
    "https://secure.actblue.com/donate/web-bfp-march2-2024?refcode=web_test&amount=";

  // Search the dom for all possible CTA component instances,
  // and loop through them.
  for (var i = 0; i < forms.length; i++) {
    let elem = forms[i];
    let listItems = elem.querySelectorAll("[data-cta-item]");

    // Radio inputs and their corresponding labels need to have matching
    // unique IDs. So we'll loop through and create them here, in the event
    // this CTA is used in more then once place on the same page.
    for (var z = 0; z < listItems.length; z++) {
      let id = Math.random().toString(16).slice(2);
      listItems[z].querySelector("input").setAttribute("id", id);
      listItems[z].querySelector("label").setAttribute("for", id);
    }

    // Event listener for form submission.
    elem.addEventListener(
      "submit",
      function (e) {
        e.preventDefault();
        const target = e.target;
        if (!target) {
          return;
        }

        // Loop through the radio inputs, and find
        // the one that's checked. Add the value to the URL string.
        for (var j = 0; j < target.length; j++) {
          const element = target[j];
          if (element.checked) {
            window.open(`${url}${element.value}`, "_blank");
          }
        }
      },
      false
    );
  }
}

setUpCta();
