const resobj = document.getElementById("res")
let res = Number(resobj.textContent)
let ad = 0
let op = 0
let dbl = 0
let eqlflag = true


const one = document.getElementById("one")
one.onclick = () => {
    res = res * 10 + 1
    dbl = dbl * 10
    if (dbl > 0) {
        resobj.textContent = res / dbl
    } else {
        resobj.textContent = res
    }
}

const two = document.getElementById("two")
two.onclick = () => {
    res = res * 10 + 2
    dbl = dbl * 10
    if (dbl > 0) {
        resobj.textContent = res / dbl
    } else {
        resobj.textContent = res
    }
}

const three = document.getElementById("three")
three.onclick = () => {
    res = res * 10 + 3
    dbl = dbl * 10
    if (dbl > 0) {
        resobj.textContent = res / dbl
    } else {
        resobj.textContent = res
    }
}

const four = document.getElementById("four")
four.onclick = () => {
    res = res * 10 + 4
    dbl = dbl * 10
    if (dbl > 0) {
        resobj.textContent = res / dbl
    } else {
        resobj.textContent = res
    }
}

const five = document.getElementById("five")
five.onclick = () => {
    res = res * 10 + 5
    dbl = dbl * 10
    if (dbl > 0) {
        resobj.textContent = res / dbl
    } else {
        resobj.textContent = res
    }
}

const six = document.getElementById("six")
six.onclick = () => {
    res = res * 10 + 6
    dbl = dbl * 10
    if (dbl > 0) {
        resobj.textContent = res / dbl
    } else {
        resobj.textContent = res
    }
}

const seven = document.getElementById("seven")
seven.onclick = () => {
    res = res * 10 + 7
    dbl = dbl * 10
    if (dbl > 0) {
        resobj.textContent = res / dbl
    } else {
        resobj.textContent = res
    }
}

const eight = document.getElementById("eight")
eight.onclick = () => {
    res = res * 10 + 8
    dbl = dbl * 10
    if (dbl > 0) {
        resobj.textContent = res / dbl
    } else {
        resobj.textContent = res
    }
}

const nine = document.getElementById("nine")
nine.onclick = () => {
    res = res * 10 + 9
    dbl = dbl * 10
    if (dbl > 0) {
        resobj.textContent = res / dbl
    } else {
        resobj.textContent = res
    }
}

const zero = document.getElementById("zero")
zero.onclick = () => {
    res = res * 10
    dbl = dbl * 10
    if (dbl > 0) {
        resobj.textContent = res / dbl
    } else {
        resobj.textContent = res
    }
}



const pls = document.getElementById("pls")
pls.onclick = () => {
    if (dbl > 0) {
        ad = res / dbl
    } else {
        ad = res
    }
    res = 0
    dbl = 0
    op = 1
    eqlflag = true
    resobj.textContent = res
}

const mns = document.getElementById("mns")
mns.onclick = () => {
    if (dbl > 0) {
        ad = res / dbl
    } else {
        ad = res
    }
    res = 0
    dbl = 0
    op = 2
    eqlflag = true
    resobj.textContent = res
}

const mlt = document.getElementById("mlt")
mlt.onclick = () => {
    if (dbl > 0) {
        ad = res / dbl
    } else {
        ad = res
    }
    res = 0
    dbl = 0
    op = 3
    eqlflag = true
    resobj.textContent = res
}

const dvd = document.getElementById("dvd")
dvd.onclick = () => {
    if (dbl > 0) {
        ad = res / dbl
    } else {
        ad = res
    }
    res = 0
    dbl = 0
    op = 4
    eqlflag = true
    resobj.textContent = res
}



let q

const eql = document.getElementById("eql")
eql.onclick = () => {
    if (eqlflag) {
        q = ad
        if (dbl > 0) {
            ad = res / dbl
        } else {
            ad = res
        }
        res = q
        eqlflag = false
    }

    switch (op) {
        case 1:
            res = res + ad
            resobj.textContent = res
            break
        case 2:
            res = res - ad
            resobj.textContent = res
            break
        case 3:
            res = res * ad
            resobj.textContent = res
            break
        case 4:
            if (ad === 0) {
                resobj.textContent = "ERROR"
                res = 0
                ad = 0
                op = 0
                dbl = 0
                eqlflag = 0
                setTimeout(() => resobj.textContent = res, 2000)
            } else {
                res = res / ad
                resobj.textContent = res
            }
            break
    }
    console.log(ad, dbl, q)
}

const clr = document.getElementById("clr")
clr.onclick = () => {
    res = 0
    ad = 0
    op = 0
    dbl = 0
    eqlflag = true
    resobj.textContent = res
}

const dt = document.getElementById("dt")
dt.onclick = () => {
    if (dbl === 0) {
        dbl = 1
    } else {
        resobj.textContent = "ERROR"
        res = 0
        ad = 0
        op = 0
        dbl = 0
        eqlflag = true
    }
}

const sch = document.getElementById("sch")
sch.onclick = () => {
    res = res * (-1)
    if (dbl > 0) {
        resobj.textContent = res / dbl
    } else {
        resobj.textContent = res
    }
}

const prc = document.getElementById("prc")
prc.onclick = () => {
    if (dbl === 0) {
        dbl = 100
    } else {
        dbl = dbl * 100
    }
    resobj.textContent = res / dbl
}

const fun = document.getElementById("fun")
fun.onclick = () => {
    resobj.textContent = "Yipeee!"
}