let changes = [
  {
    images: "img/person-1.jpg",
    client: "john",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. at aliquam reiciendis modi ipsam rerum suscipit distinctio?",
  },
  {
    images: "img/person-2.jpg",
    client: "Sandy",
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
  },
  {
    images: "img/person-3.jpg",
    client: "Amy",
    message:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    images: "img/person-4.jpg",
    client: "Jennie",
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    images: "img/person-5.jpg",
    client: "Christian",
    message:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
];

console.log(changes[0].images);
console.log(changes[0].client);
console.log(changes[0].message);
var num = changes.length;
function change(e) {
  let person = document.querySelector(".client-image");
  let name = document.getElementById("names");
  let comment = document.getElementById("comments");

  console.log(changes[changes.length - 1].client);
  num--;
  name.innerHTML = changes[num].client;
  person.style.backgroundImage = `url(${changes[num].images})`;
  comment.innerHTML = changes[num].message;
  if (num === 0) {
    num = changes.length;
  }
}

function goBack() {
  window.history.back();
}

// imageDIV.style.backgroundImage = `url('${images[currentImg]}')`;
