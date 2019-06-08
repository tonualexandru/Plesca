window.addEventListener("load", () => {

    let list = q('.showroom ul'),
        items = qA('.showroom li'),
        bgs = qA('.bg'),
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
            clearAll(items);
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
        bgs.forEach((element, index) => {
            if (switches < paths.length - index)
                element.style.backgroundImage = `url('${paths[index + switches]}`;
        });
    }

    setTimeout(() => {
        let iteration = 0;
        setInterval(() => {
            slideCarousel(iteration % pathsCount);
            changePath(iteration++ % pathsCount);
        }, 3000);

        console.log("record", list, bgs);

    }, 100);

});