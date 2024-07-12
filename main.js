const resobj = document.getElementById("res")
let res = Number(resobj.textContent)
let ad = 0
let op = 0



// const one = document.getElementById("one")
// one.onclick = ("touchend", () => {
//     res = res * 10 + 1
//     resobj.textContent = res
// })

const one = document.getElementById("one")
one.onclick = ("touchend", () => {
    res = res * 10 + 1
    resobj.textContent = res
})

const two = document.getElementById("two")
two.onclick = ("touchend", () => {
    res = res * 10 + 2
    resobj.textContent = res
})

const three = document.getElementById("three")
three.onclick = ("touchend", () => {
    res = res * 10 + 3
    resobj.textContent = res
})

const four = document.getElementById("four")
four.onclick = ("touchend", () => {
    res = res * 10 + 4
    resobj.textContent = res
})

const five = document.getElementById("five")
five.onclick = ("touchend", () => {
    res = res * 10 + 5
    resobj.textContent = res
})

const six = document.getElementById("six")
six.onclick = ("touchend", () => {
    res = res * 10 + 6
    resobj.textContent = res
})

const seven = document.getElementById("seven")
seven.onclick = ("touchend", () => {
    res = res * 10 + 7
    resobj.textContent = res
})

const eight = document.getElementById("eight")
eight.onclick = ("touchend", () => {
    res = res * 10 + 8
    resobj.textContent = res
})

const nine = document.getElementById("nine")
nine.onclick = ("touchend", () => {
    res = res * 10 + 9
    resobj.textContent = res
})

const zero = document.getElementById("zero")
zero.onclick = ("touchend", () => {
    res = res * 10
    resobj.textContent = res
})



const pls = document.getElementById("pls")
pls.onclick = ("touchend", () => {
    ad = res
    res = 0
    op = 1
    resobj.textContent = res
})

const mns = document.getElementById("mns")
mns.onclick = ("touchend", () => {
    ad = res
    res = 0
    op = 2
    resobj.textContent = res
})

const mlt = document.getElementById("mlt")
mlt.onclick = ("touchend", () => {
    ad = res
    res = 0
    op = 3
    resobj.textContent = res
})

const dvd = document.getElementById("dvd")
dvd.onclick = ("touchend", () => {
    ad = res
    res = 0
    op = 4
    resobj.textContent = res
})



const eql = document.getElementById("eql")
eql.onclick = ("touchend", () => {
    switch (op) {
        case 1:
            res = ad + res
            break
        case 2:
            res = ad - res
            break
        case 3:
            res = ad * res
            break
        case 4:
            res = ad / res
            break
    }
    resobj.textContent = res
    //console.log(res)
})

const clr = document.getElementById("clr")
clr.onclick = ("touchend", () => {
    res = 0
    ad = 0
    op = 0
    resobj.textContent = res
    console.log(res)
})








let yp = document.getElementById("yp")
yp.onclick = ("touchend", () => resobj.textContent = 12321)