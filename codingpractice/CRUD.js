async function getData() {
    const res = await fetch("https://reqres.in/api/users", {
        method: "Get",
        headers: {
            "content-type": "application/json",
        },
    })

    const { data } = await res.json()

    data.forEach((d) => {
        app.innerHTML += `
			<div>
				<img src=${d.avatar} />
				<div>${d.first_name}</div>
				<div>${d.last_name}</div>
				<div>${d.email}</div>
			</div>
		`
    })

    console.log(data)
}

async function createData() {
    const res = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "sangwon",
            email: "abc123@naver.com",
        }),
    })
    console.log(await res.json())
}

async function updateData() {
    const res = await fetch("https://reqres.in/api/users2", {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: "leesangwon",
            email: "abc456@naver.com",
        }),
    })
    console.log(await res.json())
}

async function deleteData() {
    const res = await fetch("https://reqres.in/api/users2", {
        method: "DELETE",
    })

    console.log(await res.json())
}
