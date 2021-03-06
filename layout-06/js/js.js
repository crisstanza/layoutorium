(function() {

	var side = 10;
	var size = 30;
	var color = 255 / side;

	function draw() {
		var myCanvas = document.getElementById('my-canvas');
		var context = myCanvas.getContext('2d');
		for ( var i = 0 ; i < side ; i++ ) {
			for ( var j = 0 ; j < side ; j++ ) {
				context.fillStyle = 'rgb(' + Math.floor(255 - color*i) + ',' + Math.floor(255 - color*j) + ',0)';
				context.fillRect(j*size, i*size, size, size);
			}
		}
	}

	function init() {
		draw();
	}

	window.addEventListener('load', init, false);

})();