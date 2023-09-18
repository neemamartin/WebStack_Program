window.onload=()=>{
    // --------------------Jokes Api------------------------------

    const jokesApi = "https://v2.jokeapi.dev/joke/Any"
    var jokeButton=document.getElementById("joke");
    var jokeClearButton=document.getElementById("clearjoke")

    jokeClearButton.addEventListener('click',()=>{
        document.getElementById("jokes-container").innerHTML=null
    })

    jokeButton.addEventListener('click',async()=>{
        console.log("joke button is pressed")
        await fetch(jokesApi).then((result)=>{
            result.json().then((data)=>{
                // console.log(data)
                var newJoke = document.createElement('div')
                newJoke.className = "single-item"
                if(data.type === "single"){
                    newJoke.innerHTML = data.joke
                }
                else if(data.type === "twopart"){
                    newJoke.innerHTML = `${data.setup} . ${data.delivery}`
                }

                if(data.flags.nsfw===true){
                    newJoke.style.border="2px solid red"
                    newJoke.style.backgroundColor="#ffb1b1"
                }

                document.getElementById("jokes-container").appendChild(newJoke)

            })
        }).catch((err)=>{
            console.log(err);
        })
    })


    // ------------------Dogs Api -----------------------------


    const dogApi="https://dog.ceo/api/breeds/image/random"
    var dogButton=document.getElementById("dog")
    var dogClearButton=document.getElementById("cleardog")

    
    dogClearButton.addEventListener('click',()=>{
        document.getElementById("dog-container").innerHTML=null
    })

    dogButton.addEventListener('click',async()=>{
        console.log("Dog button is pressed")
        await fetch(dogApi).then((res)=>{
            res.json().then((data)=>{
                // console.log(data)
                var newdog = document.createElement('img')
                newdog.className="item-image"
                newdog.src = data.message
                document.getElementById("dog-container").innerHTML=null
                document.getElementById("dog-container").appendChild(newdog)
            })

        }).catch((err)=>{
            console.log(err);
        })
    })

    // --------------------Exhange Rates Api-------------------------------

    const exchangeApi = "https://api.apilayer.com/exchangerates_data/latest?base=USD"
    
    var myHeaders = new Headers()
    myHeaders.append("apikey","0h399deSlkFvh7EGq6XRKVJVoUIAbpoQ")

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeader
      };
    var exchangeButton=document.getElementById("exchange");
    var exchangeClearButton=document.getElementById("clearexchange")

    exchangeClearButton.addEventListener('click',()=>{
        document.getElementById("exchangebody").innerHTML=null
    })

    var exchangeRates={}
    exchangeButton.addEventListener('click',async()=>{
        exchangeRates={}
        console.log("Exchange button was clicked")
        await fetch(exchangeApi,requestOptions).then((res)=>{
            res.json().then((data)=>{
                // console.log(data);
                exchangeRates=data.rates
                // console.log(exchangeRates);
                for(const key in exchangeRates)
                {
                    var row = document.createElement("tr")
                    var countryCode = document.createElement("td")
                    countryCode.innerHTML=key
                    var rate= document.createElement("td")
                    rate.innerHTML=exchangeRates[key]
                    row.appendChild(countryCode)
                    row.appendChild(rate)
                    document.getElementById("exchangebody").appendChild(row)
                    // console.log(`${key} ---- ${exchangeRates[key]}`);
                }
            })

        }).catch((err)=>{
            console.log(err);
        })
    })

    // -------------Books API---------------------------

    const bookAPI = "https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=QTd4H7HDVpLKhqIqtV42NmAthrt8ub4b"
    var bookButton = document.getElementById("books")
    var clearBookButton = document.getElementById("clearbook")

    clearBookButton.addEventListener('click',()=>{
        document.getElementById("bookbody").innerHTML=null
    })

    var bookList = []
    bookButton.addEventListener('click',async()=>{
        bookList = []
        console.log("Book Button Pressed");
        await fetch(bookAPI).then((res)=>{
            res.json().then((data)=>{
                bookList = data.results.books
                // console.log(bookList)
                for(let i = 0;i<bookList.length;i++){
                    var row = document.createElement("tr")
                    var title = document.createElement("td")
                    title.innerHTML = bookList[i].title
                    var author = document.createElement("td")
                    author.innerHTML = bookList[i].author
                    var desc = document.createElement("td")
                    desc.innerHTML = bookList[i].description
                    var bookimage = document.createElement("td")
                    var image = document.createElement('img')
                    image.src = bookList[i].book_image
                    image.width="100"
                    image.height="100"
                    bookimage.appendChild(image)
                    row.appendChild(title)
                    row.appendChild(author)
                    row.appendChild(desc)
                    row.appendChild(bookimage)
                    document.getElementById("bookbody").append(row)
                }
            })
        }).catch((err)=>{
            console.log(err);
        })

    })





    


























}