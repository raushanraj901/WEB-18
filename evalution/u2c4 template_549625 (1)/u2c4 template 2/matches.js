var schedule = JSON.parse(localStorage.getItem("schedule")) || []
     displayData(schedule);
    function displayData(data) {
      data.forEach(function (elem) {
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
        td5.innerText = "Add as Favourites";
        td5.style.color = "green";
        td5.style.cursor = "pointer";
        td5.addEventListener("click",function(){
          favourit(elem)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
     })
    }

    function favourit(elem) {
      console.log(elem);
      schedule.push(elem);
      localStorage.setItem("favourit", JSON.stringify(favourit));
    }