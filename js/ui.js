/*
    This file will hold the User Interface Logic
*/

const filterButtons = document.querySelectorAll('button.btn');

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
        })
    })
}

// todo: create a filter system for buttons and genres

// run on load
changeFilterBtnColor();