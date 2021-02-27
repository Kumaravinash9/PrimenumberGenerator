document.addEventListener("DOMContentLoaded", function () {
  let islight = false;

  setInterval(function () {
    if (!islight) document.getElementById("brand").style.color = "  gold";
    else document.getElementById("brand").style.color = "white";
    islight = !islight;
  }, 1000);
  console.log("heelo");
  function isprime(a) {
    for (var i = 2; i < a; i++) {
      if (a % i == 0) return false;
    }
    return true;
  }

  var button = document.getElementById("searchBtn");

  button.addEventListener("click", (e) => {
    let doc = document.getElementsByClassName("divy");
    doc[0].innerHTML = "";

    e.preventDefault();
    let ulcheck = document.querySelector("ul");
    if (ulcheck != null) {
      let li = document.querySelectorAll("li");
      for (var i = 0; i < li.length; i++) li[i].remove();
      ulcheck.remove();
    }

    console.log(document.getElementById("staticEmail").value);
    var a = parseInt(document.getElementById("staticEmail").value);
    var b = parseInt(document.getElementById("inputPassword").value);
    console.log(a, b);
    if (isNaN(a) || isNaN(b) || a > b) {
      alert("please input valid number");
      console.log("worng");
    } else {
      var array = [];

      for (var i = a; i <= b; i++) {
        if (isprime(i)) array.push(i);
      }
      let body = document.querySelector("body");
      let oyl = document.getElementById("oly");
      let ul;
      if (array.length > 0) {
        ul = document.createElement("ul");
        oyl.appendChild(ul);
      }
      console.log(array.length);
      array.forEach(function (e1) {
        let li = document.createElement("li");
        li.innerHTML = e1;
        ul.appendChild(li);

        li.classList.add("li");
      });
      if (array.length <= 0) {
        alert("Hey there ! No number lies between the given range");
        doc[0].innerHTML = "No number lies between the given range";
      }
    }
  });
});
