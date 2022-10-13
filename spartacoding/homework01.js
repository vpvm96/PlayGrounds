const nameInput = document.querySelector("#floatingInput")
const descInput = document.querySelector("#floatingTextarea2")
const submitBtn = document.querySelector("#submitBtn")
const card = document.querySelector("#mypost_card")

submitBtn.addEventListener("click", () => {
  const inputValue = []

  const obj = {}
  obj.name = nameInput.value
  obj.desc = descInput.value

  if (obj.name !== "" && obj.desc !== "") {
    inputValue.push(obj)
  } else {
    alert("내용을 입력 하세요")
  }

  card.innerHTML += `
        <div class="card">
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>${inputValue[0].desc}</p>
                    <footer class="blockquote-footer">${inputValue[0].name}</footer>
                </blockquote>
            </div>
        </div>
    `
  nameInput.value = ""
  descInput.value = ""
})
