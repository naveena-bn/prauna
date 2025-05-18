(function($) {

  "use strict";

  var initPreloader = function() {
    $(document).ready(function($) {
    var Body = $('body');
        Body.addClass('preloader-site');
    });
    $(window).load(function() {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    });
  }

  // init Chocolat light box
	var initChocolat = function() {
		Chocolat(document.querySelectorAll('.image-link'), {
		  imageSize: 'contain',
		  loop: true,
		})
	}

  var initSwiper = function() {

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 6,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });

    var brand_swiper = new Swiper(".brand-carousel", {
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".brand-carousel-next",
        prevEl: ".brand-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
      }
    });

    var products_swiper = new Swiper(".products-carousel", {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".products-carousel-next",
        prevEl: ".products-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });
  }

  var initProductQty = function(){

    $('.product-qty').each(function(){

      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          if(quantity>0){
            $el_product.find('#quantity').val(quantity - 1);
          }
      });

    });

  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  // document ready
  $(document).ready(function() {
    
    initPreloader();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();

  }); // End of a document

})(jQuery);


document.querySelectorAll('.get-quote-cu').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const productItem = this.closest('.product-item');
    const title = productItem.querySelector('h3').innerText;
    const price = productItem.querySelector('.price').innerText;
    const image = productItem.querySelector('img').getAttribute('src');

    const details1 = productItem.querySelector('.material-details-cu.detail-1')?.innerHTML || '';
    const details2 = productItem.querySelector('.material-details-cu.detail-2')?.innerHTML || '';
    const details3 = productItem.querySelector('.material-details-cu.detail-3')?.innerHTML || '';

    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImage').setAttribute('src', image);

    document.getElementById('modeldetails-1').innerHTML = details1;
    document.getElementById('modeldetails-2').innerHTML = details2;
    document.getElementById('modeldetails-3').innerHTML = details3;

    const textdetails1 = details1?.replace("<strong>", "*").replace("</strong>", "*") || '';
    const textdetails2 = details2?.replace("<strong>", "*").replace("</strong>", "*") || '';
    const textdetails3 = details3?.replace("<strong>", "*").replace("</strong>", "*") || '';

    let finalLinkDetails = '';
    if (textdetails1) finalLinkDetails += `\n\nDetails\n• ${textdetails1}`;
    if (textdetails2) finalLinkDetails += `\n• ${textdetails2}`;
    if (textdetails3) finalLinkDetails += `\n• ${textdetails3}`;

    // WhatsApp message
    const message = `Hi, I'm interested in the product\n\n*Title*: ${title}\n*Price*: ${price}${finalLinkDetails}\n\nPlease provide more details.`;
    const whatsappURL = `https://wa.me/918746944770?text=${encodeURIComponent(message)}`; // Replace with your number
    document.getElementById('whatsappBtn').setAttribute('href', whatsappURL);

    // Show modal
    const quoteModal = new bootstrap.Modal(document.getElementById('quoteModal'));
    quoteModal.show();
  });
});
