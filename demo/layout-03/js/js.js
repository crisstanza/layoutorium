(function() {
	//
	var SCREEN_OPENING = 1;
	var SCREEN_SELECT_LEVEL = 2;
	var SCREEN_GAME = 3;
	//
	var DELAY_SCREEN_CHANGE = 1500;
	var DELAY_OBJECTS_CHANGE = 250;
	//
	var logger = {
		log: true,
		console: {
			log: function(msg) {
				if ( logger.log ) {
					console.log(msg);
				}
			}
		}
	};
	//
	// exposes the logger object so it can be turned
	// on/off from external debugging console:
	window.logger = logger;
	//
	function animateLogo(screen) {
		//
		logger.console.log('animateLogo('+screen+')');
		//
		var imgLogo = $('#img_logo');
		//
		if ( screen == SCREEN_OPENING ) {
			imgLogo.animate(
				{ left: 300, top: 200, width: 200, height: 100 },
				{ duration: DELAY_OBJECTS_CHANGE }
			);		
		} else if ( screen == SCREEN_SELECT_LEVEL ) {
			imgLogo.animate(
				{ left: 20, top: 50, width: 50, height: 25 },
				{ duration: DELAY_OBJECTS_CHANGE }
			);
		}
	}
	//
	function animateTitle(screen) {
		//
		logger.console.log('animateTitle('+screen+')');
		//
		var imgTitle = $('#img_title');
		//
		if ( screen == SCREEN_OPENING ) {
			imgTitle.fadeOut(DELAY_OBJECTS_CHANGE);
		} else 	if ( screen == SCREEN_SELECT_LEVEL ) {
			imgTitle.fadeIn(DELAY_OBJECTS_CHANGE);
		}
	}
	//
	function goToScreen(screen) {
		//
		logger.console.log('goToScreen('+screen+')');
		//
		if ( screen == SCREEN_OPENING ) {
			animateLogo(screen);
			animateTitle(screen);
			setTimeout(function() { goToScreen(SCREEN_SELECT_LEVEL); }, DELAY_SCREEN_CHANGE );
		} else if ( screen == SCREEN_SELECT_LEVEL ) {
			animateLogo(screen);
			animateTitle(screen);
			setTimeout(function() { goToScreen(SCREEN_OPENING); }, DELAY_SCREEN_CHANGE );
		}
	}
	//
	function init() {
		//
		logger.console.log('init()');
		//
		setTimeout(function() { goToScreen(SCREEN_SELECT_LEVEL); }, DELAY_SCREEN_CHANGE );
	}
	//
	$(document).ready(init);
	//
})();