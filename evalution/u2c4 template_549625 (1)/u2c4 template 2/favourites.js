// write js code here corresponding to favourites.html
var favArr = JSON.parse(localStorage.getItem("favourit"));
    displayData(favArr);

    function displayData(data) {
      data.forEach(function (elem, index) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.matchNo;

        var td2 = document.createElement("td");
        td2.innerText = elem.teamA;

        var td3 = document.createElement("td");
        td3.innerText = elem.teamB;

        var td4 = document.createElement("td");
        td4.innerText = elem.date;
        var td5 = document.createElement("select");
        td4.innerText = elem.venue;

        var td6 = document.createElement("td");
        td5.innerText = "Delete";
        td5.setAttribute("class", "deleteText");
        td5.addEventListener("click", function () {
          deleteItem(elem, index);
        });

        tr.append(td1, td2, td3, td4, td5,td6);

        document.querySelector("tbody").append(tr);
      });
    }

    function deleteItem(elem, index) {
      favArrArr.splice(index, 1);
      localStorage.setItem("favArr", JSON.stringify(favArr));
      window.location.reload();
    }