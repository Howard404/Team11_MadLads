const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const pages = Array.from(document.querySelectorAll('.paper'));

let currentPage = 1; // first current page
const MAX_PAGE = pages.length + 1; // the maximum pages avaliable
const SLIDE_PERCENT = 50; // slide percentage
const ROTATION = 180; // rotation constant
const ZERO = 0; // zero constant for no transformation

/*
    Applies css 3d transformations (x, y, z)
    to the book, and two buttons in the x direction.
*/
function openBook() {
    book.style.transform = `translate3d(${SLIDE_PERCENT}%, ${ZERO}, ${ZERO})`; // book slides 50% to the right when opened
    prevBtn.style.transform = `translate3d(-${ROTATION}px, ${ZERO}, ${ZERO})`;
    nextBtn.style.transform = `translate3d(${ROTATION}px, ${ZERO}, ${ZERO})`;
}
/*
    Takes a boolean as a parameter showing if it's the firstPage or not
    and applies a 3d transformation accordingly.
*/
function slideBook(isFirstPage) {
    if (!isFirstPage) {
        book.style.transform = `translate3d(${SLIDE_PERCENT * 2}%, 0, 0)`; // slide book the right 100% since width is smaller now 
    } else {
        book.style.transform = `translate3d(${ZERO}%, ${ZERO}, ${ZERO})`; // if the book is at the first page don't slide
    }
    prevBtn.style.transform = `translate3d(${ZERO}%, ${ZERO}, ${ZERO})`;
    nextBtn.style.transform = `translate3d(${ZERO}%, ${ZERO}, ${ZERO})`;
}

/*
    Pre: checks current page 
    and set's a flip animation to the current page
    within current page === 1, currentPage <= MAX_PAGE && currentPage > 1
    and increments currentPage by 1.

    Post: if none of the pre-conditions are met throw a new error
*/
function goNextPage() {
    if (currentPage < MAX_PAGE) {
        if (currentPage === 1) {
            openBook();
            setFlip(currentPage);
        } else if (currentPage <= MAX_PAGE && currentPage > 1) {
            setFlip(currentPage);
            if (currentPage === MAX_PAGE - 1) {
                slideBook(false);
            }
        } else {
            throw new Error("unknown state");
        }
        currentPage += 1;
    }
}

/*
    Pre: checks current page 
    and removes the flip animation to the current page
    within page === 2, currentPage < MAX_PAGE && currentPage > 2
    and decrements currentPage by 1

    post: if none of the pre-conditions are met throw a new error
*/
function goPrevPage() {
    if (currentPage > 1) {
        if (currentPage === 2) {
            slideBook(true);
            removeFlip(currentPage);
            pages[0].style.zIndex = MAX_PAGE;
        } else if (currentPage < MAX_PAGE && currentPage > 2) {
            removeFlip(currentPage);
            pages[currentPage - 2].style.zIndex = MAX_PAGE - currentPage + 2;
        } else if (currentPage === MAX_PAGE) {
            openBook();
            removeFlip(currentPage);
        } else {
            throw new Error("unknown state");
        }
        currentPage -= 1;
    }
}

/*
    Takes an integer current page as a parameter
    and adds the classList of flipped which
    is defined in the CSS, and also sets zIndex to 1
*/
function setFlip(currentPage) {
    pages[currentPage - 1].classList.add("flipped");
    pages[currentPage - 1].style.zIndex = 1;
}

/*
    Takes an integer current page as a parameter and 
    removes the classList of flipped which is
    defined in the css.
*/
function removeFlip(currentPage) {
    pages[currentPage - 2].classList.remove("flipped");
}

// Event Listeners on click
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);