//target needed elements
let $userQuery = $("#userQuery");//input field
let $fetchDataBtn = $("#fetchData");//form button
let $prependedQueries = $("#prependedQueries");//empty div for displaying user input on client
let emptyArr = [];//for taking in every new user query, upon click. use: .push() for adding queries

//create or give each function what it needs to accomplish task
function fetchQuery(userRequest) {
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userRequest + "&appid=6479e29c0185f5dcfc8f3a876352199a&units=imperial"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data);

        //need this fetched data to fill into designed areas
        for (let i = 0; i < data.list.length; i += 8) {
            let fetchedTemp = data.list[i].main.temp;
            let fetchedHumidity = data.list[i].main.humidity;
            let fetchedDateTime = data.list[i].dt_txt;
            let fetchedIcon = data.list[i].weather[0].icon;
            /////////////////////////////////////////
            let domEl = `<div class="card text-white bg-warning mb-3" style="max-width: 18rem;"> <div id="cardForcastDate" class="card-header">Date</div>
          <div class="card-body"><h5 class="card-title">
                  graphic/icon
              </h5>
              <p id="tempHumidity" class="card-text">
                  Temperature: ${fetchedTemp}<br>
                  Humidity: ${fetchedHumidity}
              </p>
          </div>
      </div>`

            $("#tempData").append(domEl);


        }
        // let domDiv=$("<div>");
        // domDiv.text(Data);//print JSON to new div
        // domDiv.prepend($prependedQueries);
    })
}
//on click is when the user query is stored to localStorage 
$fetchDataBtn.on("click", function (e) {
    e.preventDefault();
    let userRequest = $("#userQuery").val().trim();//trgt user query
    localStorage.setItem("weatherInfo", userRequest);
    $prependedQueries.text(userRequest);
    console.log(userRequest);
    fetchQuery(userRequest);
})

//focusing on stored query selections, I will populate <divs> on user request(s).
    //pass to localStorage as well
//add event.preventDefault() on form

// $(selector).hide()//only shows when data comes in

// //graydons code
// $searchBttn.on("click",function(){
//     if($inputField.val()){
//         getCurrentWeather($)
//     }
// })

//update variable names
//fetch current weather
    //use that response to fetch uv index
//display data for all three, using jquery dom manipulation

//store unser input to local storage
//creat button off of local storage
//onClick of buttons run 3 queries to display info