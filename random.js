function random() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const backColor = document.getElementById('body')
    backColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    const head = document.getElementById('h1')
    head.innerText = `rgb(${r}, ${g}, ${b})`;
}


const clickBtn = document.querySelector('button');
clickBtn.addEventListener('click', random)