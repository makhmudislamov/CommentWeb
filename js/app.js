// function myPic(){
//
//   var foo = document.getElementById('foo');
//
//   foo.innerHTML = '';//get rid of what was in the element
//
//
//   var picObj = {};
//   picObj.url = picUrl;
//     localStorage.setItem('myObj', JSON.stringify(picObj));
//   var picEl = document.createElement('str'); //creating img element
//   picEl.src = picUrl; //dynamically set pic src to our pic url from user
//   document.getElementById('foo').appendChild(picEl);//add our pic element to the div on the html
//   document.getElementById('username').value = '';//set value
//   console.log();
// };

function myFunction() {
    var user = document.getElementById("myName").value;
    document.getElementById("demo1").innerHTML = "Username:  " + user;

    var comment = document.getElementById("myComment").value;
    document.getElementById("demo2").innerHTML = "Comment:  " + comment;
    myName.innerHTML = '';
    myComment.innerHTML = '';
}
