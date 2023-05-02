document.addEventListener('DOMContentLoaded', () => {
    let number = 0
    const stamps = [
        "assets/icons/cat.svg",
        "assets/icons/mountain.svg",
        "assets/icons/robot.svg",
        "assets/icons/skull.svg",
    ]

    const stampsTag = document.querySelector('div.icons')

    const addStamp = function (x, y) {
        const img = document.createElement('img')
        img.setAttribute('src', stamps[number])
        img.style.left = (x - window.innerWidth / 2) + 'px'
        img.style.top = y + 'px'
        stampsTag.appendChild(img)
        number += 1
        if (number > stamps.length - 1) number = 0
    }

    document.addEventListener('click', (e) => {
        addStamp(e.pageX, e.pageY)
    })
})