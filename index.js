const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector("#result");
const sound = document.querySelector("#sound");
const btn = document.querySelector("#search-btn");
// const word = document.querySelector('#inp-word');

// console.log(word.textContent);

btn.addEventListener("click", () => {
  let inpWord = document.querySelector("#inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((data) => data.json())
    .then((item) => {
      result.innerHTML = `<div class="word">
        <h3>${inpWord}</h3>
        <button onclick="playSound()">
          <i class="fa-solid fa-volume-high"></i>
        </button>
      </div>
      <div class="details">
        <p>${item[0].meanings[0].partOfSpeech}</p>
        <p>/${item[0].phonetic}/</p>
      </div>
      <p class="word-meaning">
        ${item[0].meanings[0].definitions[0].definition}
      </p>
      <p class="word-example">
        ${item[0].meanings[0].definitions[0].example || ""}
      </p>`;
      sound.setAttribute("src", `${item[0].phonetics[0].audio}`);
    });

});

function playSound()
{
    sound.play();
}