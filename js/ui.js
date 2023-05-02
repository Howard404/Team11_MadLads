/*
    This file will hold the User Interface Logic
*/
const filterButtons = document.querySelectorAll('button.btn');
const articleTag = Array.from(document.querySelectorAll("article.art"));
const audio = document.createElement('audio');

/*
    This function loops over all
    filter buttons, and removes their active class
    if not currently clicked. Yet adds
    the active class only the button that is clicked.
*/
function changeFilterBtnColor() {
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('active')
            });
            btn.classList.add('active');
            audio.setAttribute('src', 'assets/fonts/music/plop.mp3')
            audio.volume = 0.25
            audio.play()
        })
    })
}

/*  
    Applies filter setting according to the 
    button index. 
*/
function applyFilter() {
    filterButtons.forEach((btn, btnIndex) => {
        btn.addEventListener("click", () => {
            if (btnIndex === 0) {
                resetFilter(articleTag)
            } else if (btnIndex > filterButtons.length) {
                return;
            } else {
                articleTag.forEach(item => {
                    setDisplayFlex(item);
                })
                filterValues(articleTag, btn)
            }
        })
    })
}

/*
    Takes an item array as a parameter, and
    set's the div item's display to flex
*/
function resetFilter(itemArr) {
    itemArr.forEach(item => {
        setDisplayFlex(item);
    })
}

/*
    Takes an item array and button data as parameters
    Builds a new array of the items attributes and filters
    according to button clicked attribute. Next,
    A new filtered array is made and if the filtered array
    matches the button clicked then display those items.
*/
function filterValues(itemArr, btnData) {
    let attributeArray = [];
    let btnAttribute = btnData.getAttribute('data-filter');

    // creates an array of attributes
    for (let index = 0; index <= itemArr.length - 1; index++) {
        attributeArray.push(itemArr[index].getAttribute('data-filter'));
    }

    // creates new result filtered array according to pushed button
    const result = attributeArray.filter((value => {
        return value.trim().includes(btnAttribute);
    }))

    articleTag.forEach(item => {
        let itemAttribute = item.getAttribute('data-filter');
        if (result.includes(itemAttribute) && result.length >= 1) {
            setDisplayFlex(item);
        } else {
            setDisplayNone(item);
        }
    })
}

// Set's an item's display as flex
function setDisplayFlex(item) {
    item.style.display = 'flex';
}

// Sets an item's display as none
function setDisplayNone(item) {
    item.style.display = 'none';
}

// run on load
changeFilterBtnColor();
applyFilter();