var btn = document.getElementById("getText")
var display=document.getElementById("result")
var display2=document.getElementById("secndresult")
var btn2 = document.getElementById("GetUsers")
var btn3 = document.getElementById("Get-Post")
var addPost = document.getElementById("addPosttoform")


// btn.addEventListener ("click", function(){
//     console.log("123")
// })

// the code up and down are both the same

btn.addEventListener ("click", button )
//fetching a simple text file in my folder
    function button (){
        // fetch("assets/sample.txt")
        // .then(function(res){
        //     return (res.text())
        // })
        // .then(function(data){
        //     console.log(data)
        // })

        fetch("assets/sample.txt")
        .then((res)=>res.text())
        .then(data => {
            var ourData = data;
            display.innerHTML =ourData
        })
        .catch((err) => console.log(error))
    }

btn2.addEventListener ("click", getmyUsers)
//fetching a simple json file in my folder called user.json
    function getmyUsers(){
        fetch("assets/users.json")
        // .then(function(res){
        //     return res.json()
        // })
        // .then(function(json){  //using es5 FN
        .then(response=> response.json())
        .then(json => {
            var output = "<h2>users</h2>" ;
            json.forEach(function(user){
                output += `
                <ul>
                <li>Name:${user.name}</li>
                <li>Species:${user.species}</li>
                <li>food:${user.foods}</li>
                </ul>
                `;
            })
        display2.innerHTML = output
        })
    }

btn3.addEventListener ("click", getPost)
//fetching a simple post from http jsonplaceholder,com
    function getPost (){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=> response.json())
        .then(json =>{
            var output = "<h2>Post</h2>" ;
            json.forEach(function(post){
                output += `
                <div>
                 <br>
                 <h3> Title:${post.title} </h3>
                 <h3> Body:${post.body} </h3>
                 <br>
                </div>
                `;
            })
        display2.innerHTML = output
        }) 
    }

    addPost.addEventListener ("submit", addnewPost)
        function addnewPost(e){
            e.preventDefault()
        }