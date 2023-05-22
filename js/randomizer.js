document.addEventListener('DOMContentLoaded', () => {

    const pages = [
        {
            copy: "Interjection:<br>Interjections are words or phrases that are used to express strong emotions, feelings, or sudden reactions",
            background: "#edc7a9",
            circle: "#3e78ed"
        },
        {
            copy: "Verb:<br>A verb is a word that expresses an action, occurrence, or state of being.",
            background: "#a1fffe",
            circle: "#e34a47"
        },
        {
            copy: "Adjective:<br>An adjective is a word that describes or modifies a noun or pronoun.",
            background: "#d3c7f3",
            circle: "#f7fe00"
        },
        {
            copy: "Noun:<br>A noun is a word that represents a person, place, thing, or idea.",
            background: "#faffb8",
            circle: "#b472e6"
        }
    ]

    let pageNumber = 0
    const nextTag = document.querySelector('footer img.next')
    const prevTag = document.querySelector('footer img.prev')
    const randomTag = document.querySelector('footer img.random')

    const outputTag = document.querySelector('h2')
    const circleTag = document.querySelector('section div.circle')
    const bodyTag = document.querySelector('main.random-main')

    nextTag.addEventListener('click', () => next())
    prevTag.addEventListener('click', () => previous())
    randomTag.addEventListener('click', () => random())

    const next = function () {
        pageNumber += 1
        if (pageNumber > pages.length - 1) pageNumber = 0
        updateSection()
    }

    const previous = () => {
        pageNumber -= 1
        if (pageNumber < 0) pageNumber = pages.length - 1
        updateSection()
    }

    const random = () => {
        pageNumber = Math.floor(Math.random() * pages.length)
        updateSection()
    }

    function updateSection() {
        outputTag.innerHTML = pages[pageNumber].copy
        bodyTag.style.backgroundColor = pages[pageNumber].background
    }

    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft') {
            previous()
        } else if (e.key === 'ArrowRight') {
            next()
        }
    })
})