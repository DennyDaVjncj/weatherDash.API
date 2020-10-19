//target needed elements
let userQuery=$("#userQuery");//trgt user query
let searchBttn=$("#clckEvnt1");//triggers request to api, then prepends query to page
let storedQuery=$("#prePend");//element I wish to multiply on click event

function userQ(){
    let captureQuery=userQuery.val();
    console.log(captureQuery);
}userQ();