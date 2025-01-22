

const api = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'GET',
    })
    const data = await responce.json()
    console.log(data)
    return (
        <div>
            <h1>api</h1>
            <h1>{data}</h1>
        </div>

    )
}

export default api