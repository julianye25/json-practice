let username = {
  name: "julian",
  lastName: "yepes",
  age: 30,
};

const friends = [
  { name: "rachel", nickname: "rach123" },
  { name: "joe", nickname: "joe123" },
  { name: "chandler", nickname: "chan123" },
  { name: "ross", nickname: "ross123" },
];

username.friends = friends;

let output = "";

for (let i = 0; i < friends.length; i++) {
  output = output + `<li>${friends[i].name} - ${friends[i].nickname}</li> `;
}
document.getElementById("people").innerHTML = output;

let postElements = "";

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      postElements += `<li>${data[i].userId} - ${data[i].title} </li>`;
    }
    document.getElementById("posts").innerHTML = postElements;
  });
