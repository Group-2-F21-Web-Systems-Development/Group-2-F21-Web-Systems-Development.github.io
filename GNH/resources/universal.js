$(document).ready(function() { // after everything in html loads
  $.ajax({
    type: "GET",
    url: "./resources/data.json",
    dataType: "json",
    success: function(responseData, status) {
      // header
      header = document.createElement("header");
      nav = document.createElement("nav");
      ul = document.createElement("ul");
      $.each(responseData.header.nav, function(i, liEl) { // add internal navagation links to header
        li = document.createElement("li");
        // create anchor tags nested in li with text and href
        a = document.createElement("a");
        a.append(Object.keys(liEl));
        a.setAttribute("href", Object.values(liEl));
        li.append(a);
        ul.append(li);
      });
      // add image logo
      logo = document.createElement("img");
      logo.setAttribute("alt", "GNH logo");
      logo.setAttribute("src", responseData.header.logo);
      li = document.createElement("li");
      li.append(logo);
      ul.prepend(li);
      nav.append(ul);
      header.append(nav);
      

      // add entire header to body
      document.body.prepend(header);

      // footer
      footer = document.createElement("footer");
      nav = document.createElement("nav");
      ul = document.createElement("ul");
      $.each(responseData.footer.contact, function(i, liEl) { // add any contact links, including email to footer
        li = document.createElement("li");
        // create anchor tags nested in li with text and href
        a = document.createElement("a");
        a.append(Object.keys(liEl));
        a.setAttribute("href", Object.values(liEl));
        li.append(a);
        ul.append(li);
      });
      nav.append(ul);
      ul = document.createElement("ul");
      $.each(responseData.footer.external, function(i, liEl) { // add external social media links to footer
        li = document.createElement("li");
        // create anchor tags nested in li with text and href
        a = document.createElement("a");
        a.append(Object.keys(liEl));
        a.setAttribute("href", Object.values(liEl));
        li.append(a);
        ul.append(li);
      });
      nav.append(ul);
      footer.append(nav)

      // add entire footer to body
      document.body.append(footer);
    }, error: function(msg) {
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });

});