let grid = document.querySelectorAll('#captcha-grid');
let btnReset = document.querySelector("#reset")
let btnVerify = document.getElementById("verify")
btnReset.childNodes[1].classList.add('hide')
btnVerify.childNodes[1].classList.add('hide')
let ans = []
let selectedImg = []
let order = [3,5,2,1,0,4].map(i=> Math.floor((i+1)*Math.random()));

for (let i = 0; i < grid[0].children.length; i++) {
    grid[0].children[i].style.order=order[i];
}

for (let i = 0; i < grid[0].children.length; i++) {
    grid[0].children[i].addEventListener('click', (e) => { select(e, grid[0].children[i]) });
}

function select(e, el) {

    btnReset.childNodes[1].classList.remove('hide')
    let data = el.getAttribute("data-ns-test")
    if (ans.length < 2) {
        ans.push(data)
        selectedImg.push(e)
    }
    // if(selectedImg.length == 2){
    //     if(selectedImg[0].target.getAttribute('alt') === selectedImg[1].target.getAttribute('alt'))
    //     {
    //         e.target.classList.remove('img-clicked')
    //         selectedImg=[]
    //         ans=[]
    //     }

    // }
    e.target.classList.add('img-clicked')

    if (ans.length >= 2) btnVerify.childNodes[1].classList.remove('hide')
    
}

function validate() {

    if (ans[0] === ans[1] && (selectedImg[0].target.getAttribute('alt') !== selectedImg[1].target.getAttribute('alt'))) {
        alert('You are a human. Congratulations!')
        btnReset.childNodes[1].classList.add('hide')
        btnVerify.childNodes[1].classList.add('hide')
    }
    else {
        alert('We cant verify you as a human You selected the non identical tiles')
        btnReset.childNodes[1].classList.add('hide')
        btnVerify.childNodes[1].classList.add('hide')
    }
    for (let i = 0; i < selectedImg.length; i++) {
        selectedImg[i].target.classList.remove('img-clicked')
    }
    ans = []
    selectedImg = []
}

function reset() {
    for (let i = 0; i < selectedImg.length; i++) {
        selectedImg[i].target.classList.remove('img-clicked')
    }
    btnReset.childNodes[1].classList.add('hide')
    btnVerify.childNodes[1].classList.add('hide')
    if (ans.length <= 2 && ans.length > 0) ans = []
    selectedImg = []
}

