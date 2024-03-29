/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */

if(navToggle){
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show-sidebar');
  })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
  navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-sidebar');
  })
}

// إغلاق القائمة عند اختيار أي لينك
const links = navMenu.querySelectorAll('a'); // اختيار جميع الروابط داخل النافذة

links.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove('show-sidebar');
  });
});

/*=============== SKILLS TABS ===============*/

const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
tab.addEventListener("click", () => {
const target = document.querySelector (tab.dataset.target)
tabContent.forEach(tabContents => {
tabContents.classList.remove("skills_active")
})
target.classList.add('skills_active')
tabs.forEach(tab => {
tab.classList.remove("skills_active")
})
tab.classList.add('skills_active')
})
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container', {
    selectors:{
        target:'.work_card'
    },
    animation:{
        duration:300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work_item');

  function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
  }

  linkWork.forEach(l => l.addEventListener("click", activeWork));

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work_button")) {
      togglePortfolioPopup();
      portfolioItemDetails(e.target.parentElement);
    }
  });

  function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
  }

  document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup);

  function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
  }

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services_modal'),
modalBtns = document.querySelectorAll('.services_button'),
modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) =>{
  modalBtn.addEventListener('click',() => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click',() => {
    modalViews.forEach((modalView) =>{
      modalView.classList.remove('active-modal');
    })
  }) 
});

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll('.input');

function focusFunc(){
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc(){
  let parent = this.parentNode;
  if (this.value == ""){
    parent.classList.remove('focus');
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
}
)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top, and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    /* If our current scroll position enters the space where the current section on screen is, 
    add the active class to the corresponding navigation link; else, remove it
    - To know which link needs an active class, we use the sectionId variable we are getting while looping through 
    sections as a selector */

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link");
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link");
    }
  });
}


    
/*====== Place this script at the end of the body tag ====*/
    var form = document.getElementById("my-form");

    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("my-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Your message has been successfully sent. I'll get back to you as soon as possible.";
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwnProperty.call(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form";
                    }
                });
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form";
        });
    }
    form.addEventListener("submit", handleSubmit);

/*=============== SHOW SCROLL UP ===============*/
function copyTextToClipboard() {
  var textToCopy = document.getElementById("textToCopy");
  var textArea = document.createElement("textarea");

  // تضع النص في العنصر النصي المؤقت
  textArea.value = textToCopy.textContent;

  // إضافة العنصر النصي إلى الصفحة
  document.body.appendChild(textArea);

  // حدد النص في العنصر النصي
  textArea.select();

  // نسخ النص من العنصر النصي
  document.execCommand("copy");

  // قم بإزالة العنصر النصي المؤقت من الصفحة (لا يؤثر على العنصر النصي الأصلي)
  document.body.removeChild(textArea);

  // استخدام SweetAlert لعرض رسالة جميلة
  Swal.fire({
    icon: 'success',
    title: 'Copied!',
    text: 'Portfolio link copied to clipboard',
    showConfirmButton: false,
    timer: 2500, // ستظهر الرسالة لمدة 2 ثانية ثم تختفي
    iconColor: '#ffc107',
    
  });
}


//----------------------------------------------------------------
window.addEventListener('load', function() {
  var preloader = document.querySelector('.preloader');
  var MyContent = document.querySelector('.MyContent');

  setTimeout(function() {
    preloader.style.display = 'none';
    MyContent.style.display = 'block';
  }, 100);
});

