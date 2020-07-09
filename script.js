
      showMapData("Total");
      function showMapData(stateName) {
        console.log(stateName);
        fetch("https://api.covid19india.org/data.json")
          .then((e) => {
            return e.json();
          })
          .then((data) => {
            for (var i in data.statewise) {
              if (data.statewise[i].state == stateName) {
                document.querySelector(".state-name").innerHTML = stateName;
                document.querySelector(".caseFigActive").innerHTML =
                  data.statewise[i].active;
                document.querySelector(".caseFigConfirmed").innerHTML =
                  data.statewise[i].confirmed;
                document.querySelector(".caseFigRecod").innerHTML =
                  data.statewise[i].recovered;
                document.querySelector(".caseFigDied").innerHTML =
                  data.statewise[i].deaths;
              }
            }
          });
      }
