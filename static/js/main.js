$(document).ready(function() {
  $(document).on("click", ".downloadIso", function() {
    window.open("https://github.com/Catergos/catergos-iso/releases");
  });
});

$(document).scroll(function() {
  window.scrollY > 0
    ? $("#main-nav").css("box-shadow", "0px 1px 10px rgba(0,0,0,0.1)")
    : $("#main-nav").css("box-shadow", "");
});
