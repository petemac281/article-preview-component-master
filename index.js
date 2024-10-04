

document.getElementById("shareButton1").addEventListener("click", displayShare);

const mediaQuery = window.matchMedia('(min-width: 48rem)')

    function displayShare () {

        var originalDiv = document.getElementById("bottomSection");
        var newDiv = document.getElementById("bottomSectionShare");

        if (mediaQuery.matches) {

            newDiv.classList.remove("invisible");    

        } else {

            originalDiv.classList.add("invisible");
            newDiv.classList.remove("invisible"); 
            }};


document.getElementById("shareButton2").addEventListener("click", hideShare);

    function hideShare () {

        var originalDiv = document.getElementById("bottomSection");
        var newDiv = document.getElementById("bottomSectionShare");

        if (mediaQuery.matches) {

            newDiv.classList.add("invisible");    

        } else {

            originalDiv.classList.remove("invisible");
            newDiv.classList.add("invisible"); 
            }};


