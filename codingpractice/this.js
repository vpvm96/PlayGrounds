function a() {
  var argv = Array.prototype.slice.call(arguments)
  argv.forEach(function (arg) {
    console.log(arg)
  })
}

a(5, 1, 200)

document.body.innerHTML = `<div>첫 번째</div><div>두 번째</div><div>세 번째</div>`
var nodeList = document.querySelectorAll("div")
var nodeArr = Array.prototype.slice.call(nodeList)
nodeArr.forEach(function (node) {
  console.log(node)
})
