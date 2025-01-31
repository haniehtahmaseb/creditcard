
const _inp = document.querySelectorAll('main>#form>#_num>input')
const _card = document.getElementById('card')
const _select = document.querySelectorAll('main>#form>div>div>select')
const _month = document.querySelector('main>#form>div>div>#_month')
const _year = document.querySelector('main>#form>div>div>#_year')
const _cvv = document.querySelector('main>#form>div>div>input')
const _holder = document.querySelector('main>#form>#_holder>input')
const _submit = document.getElementById('submit')
const _cardNum = document.getElementById('cardNum')
const _name = document.getElementById('_name')
const _date = document.getElementById('_date')



function month() {
    for (mah = 1; mah <= 12; mah++) {
        let opt1 = document.createElement('option')
        opt1.innerText = mah
        _month.appendChild(opt1)
    }
}
function year() {
    for (years = 0; years <= 20; years++) {
        let opt2 = document.createElement('option')
        opt2.innerText = years + 1403
        _year.appendChild(opt2)
    }
}

_inp.forEach((val, i) => {
    val.addEventListener('keyup', (e) => {
        if (e.keyCode != 8) {
            if (i != 3) {
                if ((val.value).search(/[^0-9]/) < 0) {
                    if ((val.value).length >= 4) {
                        val.value = (val.value).slice(0, 4)
                        val.nextElementSibling.focus()
                    }
                } else {
                    val.value = (val.value).slice(0, (val.value.length) - 1)
                }
            } else {
                if ((val.value).search(/[^0-9]/) < 0) {
                    if ((val.value).length >= 4) {
                        val.value = (val.value).slice(0, 4)
                        _holder.focus()
                    }
                } else {
                    val.value = (val.value).slice(0, (val.value.length) - 1)
                }
            }
        } else {
            if (val.value.length == 0 && i != 0) {
                val.previousElementSibling.focus()
            }
        }
        _cardNum.innerText = ''
        _inp.forEach((val, i) => {
            if (val.value != '') {

                if (val.value.length != 4) {
                    _cardNum.innerText += val.value
                } else {
                    if (i != 3) {
                        _cardNum.innerText += val.value + "-"
                    } else {
                        _cardNum.innerText += val.value
                    }
                }
            }
        })

    })
})


_holder.addEventListener('input', () => {
    _name.innerText = ''
    let x = _holder.value
    if (x != '') {
        _name.innerText += x
    }
})

_select.forEach((val, i) => {
    val.addEventListener('change', () => {
        _date.innerText = ''
        let y = _month.value
        let z = _year.value
        
        if (y != '' && z != '') {
            _date.innerText += z + '/' + y
        }
    })
    
})

_cvv.addEventListener('input', () => {
    _cv.innerText = ''
    let c = _cvv.value
    if (c != '') {
        if( c.length <=4){
            _cv.innerText += c
        }else{
            _cv.innerText += c.slice(0,4)
        }
    }
})


_cvv.addEventListener('focus', () => {
    _card.style.transform = 'translate(-50%, -50%)rotateY(180deg)'
})
_cvv.addEventListener('blur', () => {
    _card.style.transform = 'translate(-50%, -50%)rotateY(0deg)'
})

_cvv.addEventListener('input', () => {
    if (_cvv.value.search(/[^0-9]/) < 0) {
        if (_cvv.value.length >= 4) {
            _cvv.value = (_cvv.value).slice(0, 4)
        }
    } else {
        _cvv.value = (_cvv.value).slice(0, (_cvv.value.length) - 1)
    }
})




