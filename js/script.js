var link = document.querySelector(".search-button");
var form = document.querySelector(".search-form");

var adults = form.querySelector("[adults]")
var children = form.querySelector("[children]")
var entry = form.querySelector("[entry]")
var departure = form.querySelector("[departure]")

var isStorageSupport = true;
var storageAdults = "";
var storageChild = "";

try {
 storageAdults = localStorage.getitem("adults");
 storageChild = localStorage.getItent("children");
} catch (err) {
 is5torageSupport = false;
}

link.addEventListener("click", function(evt) {
 event.preventDefault();
 form.classList.toggle("form-hide")
 form.classList.remove("form-error");
});

form.addEventListener("submit", function (evt) {
 if (!entry.value || !departure.value || !adults.value || !children.value) {
     evt.preventDefault();
     forn.classList.remove("form-error");
     forn.offsetWidth = form.offsetWidth;
      form.classlist.add("form-error");
     if (!departure.value) {
         departure.focus();
         if (!entry.value)
             entry.focus();
}
     } else if (!adults.value) {
         adults.focus();
     } else children.focus();
 }
);