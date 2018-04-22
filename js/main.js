var path = window.location.pathname.split('/'),
	c_file = path[path.length-1]
	links = document.querySelectorAll('#menu a');
	for (var i = links.length - 1; i >= 0; i--) {
		if(links[i].getAttribute('href') == c_file) links[i].className += 'current';
	}
var touchstartX = 0,
        touchendX = 0,
        gesuredZone = document.querySelector('#main_container');
    gesuredZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    }, false);
    gesuredZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesure();
    }, false); 
    function handleGesure() {
    	console.log('kjngjn')
        var content = document.querySelector('#menu');
        if (Math.round(touchendX) < Math.round(touchstartX)) {
            if ( content.className.includes('active')) {
                content.className = "";
            }
        }
        if (Math.round(touchendX) > Math.round(touchstartX)) {
            if (!content.className.includes('active')) {
                content.className = 'active';
            }
        }
    }