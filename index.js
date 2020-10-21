//target needed elements
let userQuery=$("#userQuery").val().trim();//trgt user query
let searchBttn=$("#clckEvnt1");//triggers request to api, then prepends query to page
let storedQuery=$("#prePend");//element I wish to multiply on click event
let domDiv=$("<div>");//new divs for every user temp search
let pendingList=$("#prePend");//trgtng div which will store newDivs


    domDiv.text(userQuery).append(domDiv);   
    
    searchBttn.on("click",function(e){
        e.preventDefault();
        pendingList.append(domDiv);
        initialQuery;
    })

//focusing on stored query selections, I will populate <divs> on user request(s).
    //pass to localStorage as well
//add event.preventDefault() on form