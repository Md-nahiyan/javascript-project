// const boxDiv = document.querySelector(".box");

// fetch("https://jsonplaceholder.typicode.com/posts")
// fetch("https://jsonplaceholder.typicode.com/photos")
// .then( (response) => response.json())
// .then( (data) => displayDate(data))


// function displayDate(post){
//     let allPosts = post.slice(0, 20);
//     allPosts.forEach(posts => {
//         boxDiv.innerHTML += `
//         <div class="container posts">
//             <img src="${posts.url}" alt="">
//             <h1>${posts.id}</h1>
//             <h2>${posts.title}</h2>
//             <p>${posts.thumbnailUrl}</p>
//         </div>
//         `
//     });
// }
const boxDiv = document.querySelector(".box");

fetch("https://randomuser.me/api/?results=20")
.then( (response) => response.json())
.then( (data) => displayData(data))

function displayData(data) {
    let allDates = data.results;
    // console.log(allDates)
    allDates.forEach(result =>  {
        // console.log(allDates)
        boxDiv.innerHTML += `
        <div class="container posts">
            <h2>${result.id.name}</h2>
            <h1>${result.gender}</h1>
            <h1>${result.name.first} ${result.name.last}</h1>
             <input type="${result.email}">
              <input type="${result.login.username}" placeholder="username">
               <input type="${result.login.password}" placeholder="password">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus cum molestiae!</p>
        </div>
        `
    })
}