(($) ->
  $('.popup-gallery').magnificPopup
    delegate: 'a'
    type: 'image'
    mainClass: 'mfp-img-mobile'
    gallery: {
      enabled: true
      navigateByImgClick: true
      preload: [0,1]
    }
    image: {
      tError: 'The image could not be loaded.'
      titleSrc: (item) ->
        return item.el.attr('title')
    }
) jQuery