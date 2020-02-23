document.addEventListener("DOMContentLoaded", function () {
    
// scroll button
    
    const scrollButton = document.querySelector(".scroll button");
    
    scrollButton.addEventListener("click", function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
	
	// client opinion
	
	const opinionOneBtn = document.querySelector(".opinion-first");
	
	const opinionTwoBtn = document.querySelector(".opinion-second");
	
	const opinionThreeBtn = document.querySelector(".opinion-three");
	
	const clientOne = document.querySelector(".client-one");
	
	const clientTwo = document.querySelector(".client-two");
	
	const clientThree = document.querySelector(".client-three");
	
	opinionOneBtn.addEventListener("click", function() {
		clientOne.style.display = "flex";
		clientTwo.style.display = "none";
		clientThree.style.display = "none";
	});
	
	opinionTwoBtn.addEventListener("click", function() {
		clientOne.style.display = "none";
		clientTwo.style.display = "flex";
		clientThree.style.display = "none";
	});
	
	opinionThreeBtn.addEventListener("click", function() {
		clientOne.style.display = "none";
		clientTwo.style.display = "none";
		clientThree.style.display = "flex";
	});

	// menu
	
	const menuMobileBtn = document.querySelector(".main-header-menu-mobile");
	
	const menuMobile = document.querySelector(".mobile-nav");
	
	const logo = document.querySelector(".main-header-logo");
	
	const closeBtn = document.querySelector(".menu-mobile-close");
	
	menuMobileBtn.addEventListener("click", function() {
		menuMobile.style.display = "block";
		logo.style.display = "none";
		menuMobile.style.margin = "auto";
		closeBtn.style.display = "block";
		menuMobileBtn.style.display = "none";
	});
	
	closeBtn.addEventListener("click", function() {
		menuMobile.style.display = "none";
		closeBtn.style.display = "none";
		logo.style.display = "block";
		menuMobileBtn.style.display = "block";
	});

    // offer-paragraph
    
    const readMoreLessButtons = document.querySelectorAll(".read-more-less");
    const offerParagraph = document.querySelector(".offer-paragraph");
    
    function readButton(){
        
        const siblingText = this.previousElementSibling;
        
        if (siblingText.style.display === "none" || siblingText.style.display === "") {
        siblingText.style.display = "inline-block";
            this.textContent = "Czytaj mniej";
        } else {
            siblingText.style.display = "none";
            this.textContent = "Czytaj więcej";
        }
    }
    
    readMoreLessButtons[0].addEventListener("click", readButton);
    readMoreLessButtons[1].addEventListener("click", readButton);
    readMoreLessButtons[2].addEventListener("click", readButton);
    
});    

        