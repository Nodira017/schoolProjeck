function focuss(st) {
    let wnav = document.getElementsByClassName("wnavi")
    for (const key of wnav) {
        if (!key.classList.contains(st)) {
            key.classList.remove('active')

        } else {
            key.classList.add("active");
        }
    }
}

$("#wellcomeCarousel").on('slide.bs.carousel', function(e) {
    let flag = 'wnav' + (e.to + 1)
    focuss(flag)
});

new Glide('.glide', {
    type: 'carousel',
    focusAt: 'center',
    startAt: 0,
    perView: 3
}).mount();