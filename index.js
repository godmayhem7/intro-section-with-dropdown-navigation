let dropLength = document.querySelectorAll("#drop").length

    document.querySelectorAll("#drop")[0].addEventListener("click",()=>{
        document.querySelectorAll("#dropdown")[0].classList.toggle("dropdown1")
        document.querySelectorAll("#dropdown")[0].classList.toggle("dropdown1-1")
        document.querySelectorAll("#up")[0].classList.toggle("disappear")
        document.querySelectorAll("#up")[0].classList.toggle("appear")
        document.querySelectorAll("#down")[0].classList.toggle("disappear")
    })


    document.querySelectorAll("#drop")[1].addEventListener("click",()=>{
        document.querySelectorAll("#dropdown")[1].classList.toggle("dropdown2")
        document.querySelectorAll("#dropdown")[1].classList.toggle("dropdown2-1")
        document.querySelectorAll("#up")[1].classList.toggle("disappear")
        document.querySelectorAll("#up")[1].classList.toggle("appear")
        document.querySelectorAll("#down")[1].classList.toggle("disappear")
    })


    document.querySelector("#open").addEventListener("click",()=>{
        document.querySelector("#naved").classList.add("hdr-div1-sub")
        document.querySelector("#naved").classList.remove("hdr-div1")
        document.querySelector("#open").classList.remove("icon-menu")
        document.querySelector("#open").classList.add("display")
    })

    document.querySelector("#close").addEventListener("click",()=>{
        document.querySelector("#naved").classList.remove("hdr-div1-sub")
        document.querySelector("#naved").classList.add("hdr-div1")
        document.querySelector("#open").classList.add("icon-menu")
        document.querySelector("#open").classList.remove("display")
    })



