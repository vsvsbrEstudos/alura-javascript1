var trs = document.getElementsByTagName("tr");

percorreArray(trs, function (tr) {
  tr.addEventListener("mouseover", function () {
    this.setAttribute("bgcolor", "grey");
  });
  tr.addEventListener("mouseout", function () {
    this.setAttribute("bgcolor", "white");
  });
  tr.addEventListener("dblclick", function () {
    this.setAttribute("bgcolor", "yellow");
  });
});
