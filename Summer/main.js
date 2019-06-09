window.addEventListener("load", () => {
    // intro
    let capital = qA('.capital'),
            fadeLettter = function (index) {
                capital[index].style = 'transform : translateY(' + index * 50 + '%); animation: appear 1s ease forwards;';
                var letters = capital[index].getAttribute("data").split(""),
                    left = 80,
                    insert = function (contor) {
                        capital[index].innerHTML += `<span style="left:${left}px; animation: fade 0.5s ease forwards ${contor / 10}s">${letters[contor]}</span>`;
                        left += qA('span', capital[index])[contor].offsetWidth;
                    }

                for (let i = 0; i < letters.length; i++) {
                    insert(i);
                }
            }
        fadeLettter(0);
        setTimeout(() => {
            fadeLettter(1);
        }, 1500);
        setTimeout(() => {
            fadeLettter(2);
            setTimeout(() => {
                toggleIt(q('.intro'));
                capital[0].style = 'transform : translateY(180%)';
                capital[1].style = 'transform : translate(95%, 50%)';
                capital[2].style = 'transform : translate(185%, -80%)';
            }, 1500);
        }, 2200);

    // carousel
    let list = q('.showroom ul'),
        items = qA('.showroom li'),
        wall = q('.bg'),
        paths = [],
        images = [],
        pathsCount = items.length > 1 ? items.length : 2,
        template = {
            path: './assets/bg',
            extension: '.jpg'
        },
        preloadImage = (url) => {
            var img = new Image();
            img.src = url;
            images.push(img);
        },
        slideCarousel = (switches, initial) => {
            list.style.transform = `translateX(-${switches * 100}vw)`
            clearAll(items, 'actst');
            toggleIt(items[switches]);
        },
        host = window.location.pathname.split("index")[0];

    for (let i = 0; i < pathsCount; i++) {
        paths.push(
            template.path +
            i +
            template.extension
        );
        preloadImage(host + paths[i]);
    }

    changePath = (switches) => {
        wall.style.backgroundImage = `url('${paths[switches]}`;
    }
    preloadImage(host + './assets/bg0_2.jpg');
    setTimeout(() => {
        let iteration = 0,
            slide;
        setInterval(() => {
            slide = iteration < pathsCount ? iteration % pathsCount : 0;
            slideCarousel(slide);
            changePath(slide);
            iteration++;
            paths[0] = './assets/bg0_2.jpg';
        }, 3000);
    }, 1000);
});