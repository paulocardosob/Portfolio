$("#hireMeButton").click(function () {
  $("html, body").animate({
    scrollTop: $("#hireMe").offset().top
  }, 1000);
});

$("#homeButton").click(function () {
  $("html, body").animate({
    scrollTop: $("#home").offset().top
  }, 1000);
});

$("#mySkillsButton").click(function () {
  $("html, body").animate({
    scrollTop: $("#mySkills").offset().top
  }, 1000);
});

$("#myWorksButton").click(function () {
  $("html, body").animate({
    scrollTop: $("#myWorks").offset().top
  }, 1000);
});

$("#contactButton").click(function () {
  console.log("hue")
  $("html, body").animate({
    scrollTop: $("#hireMe").offset().top
  }, 1000);
});

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}


