//target needed elements
let userQuery=$("#userQuery").val();//trgt user query
let searchBttn=$("#clckEvnt1");//triggers request to api, then prepends query to page
let storedQuery=$("#prePend");//element I wish to multiply on click event
let domDiv=$("<div>");//new divs for every user temp search
let pendingList=$("#prePend");//trgtng div which will store newDivs

function getRequest(){
    //create what I need on the client
        //this may be the new direction
    searchBttn.on("click",function(){
        domDiv.text(userQuery);
        pendingList.append(domDiv);
    })
}
getRequest();

//focusing on stored query selections, I will populate <divs> on user request(s).
    //pass to localStorage as well