const nameInput = document.querySelector("#floatingInput")
const descInput = document.querySelector("#floatingTextarea2")
const submitBtn = document.querySelector("#submitBtn")
const card = document.querySelector("#mypost_card")
const tempString = document.querySelector("#temp")

function useState(initialValue) {
  let value = initialValue
  const state = () => value

  function setState(newValue) {
    value = newValue || state()
  }

  return [state, setState]
}

function createCardInformation(obj) {
  const [myState, setMyState] = useState({
    name: "",
    desc: "",
  })
  setMyState({
    name: obj.name,
    desc: obj.desc,
  })
  const { name, desc } = myState()
  card.innerHTML += `
        <div class="card">
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>${desc}</p>
                    <footer class="blockquote-footer">${name}</footer>
                </blockquote>
            </div>
        </div>
    `
}

submitBtn.addEventListener("click", () => {
  const obj = {}
  obj.name = nameInput.value
  obj.desc = descInput.value
  if (!obj.name || !obj.desc) {
    alert("내용을 입력 하세요")
    return
  }
  createCardInformation(obj)
  nameInput.value = ""
  descInput.value = ""
})

function showTempRequest() {
  $.ajax({
    type: "GET",
    url: "http://spartacodingclub.shop/sparta_api/weather/seoul",
    data: {},
    success: function (response) {
      const { temp } = response

      tempString.innerHTML += `
                현재기온 : <span>${temp}</span> 도
            `
    },
  })
}

showTempRequest()

// $(document).ready(function(){
// 	alert('다 로딩됐다!')
// });
