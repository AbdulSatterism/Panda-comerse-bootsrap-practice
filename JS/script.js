// h2 color change
let textColor = document.getElementsByClassName('blue-h2');
for (const color of textColor) {
    console.log(color.innerHTML)
    color.style.color = 'lightblue';
}

// backpack background change 
document.getElementById('backpack').style.backgroundColor = 'tomato'

// card radius by js
const cardRadius = document.getElementsByClassName('card');
for (const card of cardRadius) {
    card.style.borderRadius = '30px'
}

// add message button
document.getElementById('message').addEventListener('click', function () {
    alert('Thanks for explore this site')
})

// remove subscribe btn in last part

function removeBtn() {
    const pandaButton = document.getElementsByClassName('panda-button');
    for (const panda of pandaButton) {
        panda.remove()
    }
}

// disabled button on input
document.getElementById('input-email').addEventListener('keyup', function (event) {
    const disableBtn = document.getElementById('disable-button');
    if (event.target.value == 'email') {
        disableBtn.removeAttribute('disabled')
    }
    else {
        disableBtn.setAttribute('disabled', true)
    }
});


// double touch in last section
function doubleClick() {
    const doubleTouch = document.getElementById('double-touch');
    doubleTouch.style.backgroundColor = '#b3860b'
}
