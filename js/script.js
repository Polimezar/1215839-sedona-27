var link = document.querySelector(".search-button");
var form = document.querySelector(".search-form");

var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");
var entry = form.querySelector("[name=entry]");
var departure = form.querySelector("[name=departure]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

try {
 storageAdults = localStorage.getitem("adults");
 storageChildren = localStorage.getItent("children");
} 
catch (err) {
 is5torageSupport = false;
}

link.addEventListener("click", function(evt) {
 evt.preventDefault();
 form.classList.toggle("form-hide");
 form.classList.remove("forrm-error");
});

form.addEventListener("submit", function (evt) {
 if (!entry.value || !departure.value || !adults.value || !children.value) {
     evt.preventDefault();
     form.classList.remove("form-error");
     form.offsetWidth = form.offsetWidth;
      form.classList.add("form-error");
     if (!departure.value) {
         departure.focus();
         if (!entry.value);
             entry.focus();
         }   
     } else if (!adults.value) {
         adults.focus();
     } else children.focus();
 });

window.addEventListenert("keydown", function(evt) {
     if (evt.keyCode ===27) {
    
         if (form.classList,contains ("form-show")) {
             form.classlist.add ("form-hide");
             form.classList.removel (" form-error");
            }
        }
    });