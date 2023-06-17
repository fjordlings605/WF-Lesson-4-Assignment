//alert('woot woot! L04 Assignment!'); yes it works

//create a function that gets rectangle width and returns an int value
function getRectWidth(){
    let rectWidth = document.getElementById('rectangle').style.width;
    console.log(rectWidth);
    rectWidth = parseInt(rectWidth);
    console.log(rectWidth);
    return rectWidth;
}

//add an event listener to decreasBtn element & does the following:
/*  extracts current width & stores it in a variable
    decreases the width by 10
    sets the updated value as the new width of the rectangle element.style.width = newWidth + 'px'
*/
function decreaseWidth(){
    let width = getRectWidth();
    width -= 10
    let rWidth = document.getElementById('rectangle');
    rWidth.style.width = width + 'px';
}
//event listener for the decreaseBtn element
document.getElementById('decreaseBtn').addEventListener('click', decreaseWidth);

//add an event listener to increaseBtn element & does the following:
/*  extracts the current width of rectangle & stores it in a variable using DOM style property
        use parseInt() to convert the value to a number
    increase the variable's value by 10
    sets the updated value as the new width of the rectangle using the DOM style property
        element.style.width = newWidth + 'px'
 */
function increaseWidth(){
    let width = getRectWidth();
    width += 10
    let rWidth = document.getElementById('rectangle');
    rWidth.style.width = width + 'px';
}
//event listener for the decreaseBtn element
document.getElementById('increaseBtn').addEventListener('click', increaseWidth);