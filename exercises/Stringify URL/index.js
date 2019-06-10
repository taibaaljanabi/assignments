const stringifyUrl = (url, query) => {


    const result = `${url}/search?title= ${query.title}&length=${query.length} `
    console.log('url:',url)
    console.log('query:', query)
    console.log(result)
}


const url = "www.youtube.com/"
const myQuery = {
    title: "hello",
   length: 2000000
}

stringifyUrl(url, query)
// returns "http://localhost:8080/monkeys?color=black&species=howler"