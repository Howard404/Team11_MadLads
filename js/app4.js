"use strict";

const submitBtn = document.querySelector('button.submit-btn');
const inputArray = Array.from(document.querySelectorAll('input[type="text"]'));
const storyModal = document.querySelector('section.story-modal');
const flipBook = document.querySelector('article.book');
const restartBtn = document.querySelector('button.restart-btn');
const modalBtns = document.querySelectorAll('button.m-btn');

// story with :tokens:
const storyText = `	I went downstairs one :timeday:
                to get a glass of :beverage:, and I saw our cat, :petname:,
                 sitting on the :furniture:. 
                 But beside him was another cat, a(n) 
                 :color: one I’d never seen before. 
                 They didn’t see me sneak into the nearby :room:, 
                 so they continued to sit there calmly. Then all of a sudden I heard a shout, 
                 “:interjection:!” As I peeked around the corner, 
                 I saw another cat, this one a(n) :color2: tabby.
                  He was wearing a :hat: and stood on his hind legs with his paws on his side. 
                  “What do you think you’re doing? Humans need to be supervised at all times!” 
                  The other strange cat was just :verb: and :verb2:. 
                  “It’s fine, relax. We’re taking a break, besides we just–” 
                  My cat spotted me and we made eye contact. 
                  All of a sudden they dropped into a regular cat posture 
                  and meowed at each other innocently and the two strange cats disappeared.
                `;
/*
    Parses input text values and pushes
    them into an empty array. The function
    returns an array of the inputs.
    Additonally, the function evaluates if the input is empty
    else if the input is not an alphabetical letter a-z A-z no matter their case
*/
function parseInputs() {
    const inputs = Array.from(document.querySelectorAll('input'));
    const inputValues = [];
    for (let index = 0; index < inputs.length; index++) {
        let inputValue = inputs[index].value;
        if (isEmpty(inputValue, inputs)) {
            alert('Please fill in all fields ');
            return;
        } else if (!isLetter(inputs[index].value)) {
            alert('Every character is not a letter');
            return;
        } else {
            inputValues.push(inputValue);
        }
    }
    return inputValues;
}

/*
    Takes a string parameter
    and returns a boolean if it is empty or not
*/
function isEmpty(input, inputArray) {
    inputArray.forEach(element => {
        element.style.border = '2px solid red';
    })
    return input === '';
}

/*
    Take's a string as parameter
    and returns a boolean if a character is an alphabetic letter
    from a-z, A-Z . and empty space ' ' using REGEX validation 
    and +s is to match a string
*/
function isLetter(char) {
    return /^[a-zA-Z .]+$/.test(char);
}

/*
    Takes an array as a parameter
    and constructs a HTML data-pof attrbiute array
    and returns the array of parts-of-Speech.
*/
function parseAttributeHTMLData(arr) {
    const attributeArray = [];
    for (let index = 0; index < arr.length; index++) {
        attributeArray.push(arr[index].getAttribute('data-pof'));
    }
    return attributeArray;
}

function processTokens() {
    const inputs = parseInputs();
    const attributes = parseAttributeHTMLData(inputArray);
    let story = storyText;
    for (let index = 0; index < attributes.length; index++) {
        const regex = new RegExp(`:${attributes[index]}:`, 'g'); // 'g' parameter indicates search is global
        story = story.replace(regex, inputs[index]);
    }
    createParagraph(story);
    showModalHideBook();
}

/*
    Adds classes to show modal and hide flipbook
*/
function showModalHideBook() {
    storyModal.classList.add('active');
    flipBook.classList.add('unactive');
    fadeInButtons();
}

/*
    Takes a string as a parameter
    and creates a paragraph element and appends it
    to the html file while adding the active class defined in the css
*/
function createParagraph(story) {
    const pElement = document.createElement('p');
    pElement.innerHTML = `<p class="story-p">${story}</p>`;
    pElement.classList.add('active');
    storyModal.append(pElement);
}

// refreshes page
function refreshPage() {
    window.parent.location = window.parent.location.href;
}

// animates modal buttons with stagger animation when modal appears
function fadeInButtons() {
    modalBtns.forEach((btn, index) => {
        setTimeout(() => {
            btn.classList.add('active');
        }, index * 700 + 300) // index * time + delay
    })
}

// Event Listeners
submitBtn.addEventListener("click", processTokens);
restartBtn.addEventListener("click", refreshPage);