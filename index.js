fetch('https://middleware.blockchain.julasoft.com/data/save/123456', {
method: 'POST',
body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
}),
headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => console.log(json));