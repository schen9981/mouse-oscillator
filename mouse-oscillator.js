var osc = new p5.SawOsc(); 
var fft = new p5.FFT();

function setup() {
	osc.amp(0.2);
	osc.start();
	createCanvas(750, 250);
}

function draw() {
	clear();
	background(0, 130, 150);

	var waveform = fft.waveform();

	fill(0, 130, 150);
	beginShape();
	strokeWeight(3);
	for (i = 0; i < waveform.length; i++) {
		var x = map(i, 0, waveform.length, 0, width);
		var y = map(waveform[i], -1, 1, height, 0);
		vertex(x, y);
	}
	endShape();

	var freq = map(mouseX, 0, width, 40, 880);
	osc.freq(freq);

	var amp = map(mouseY, 0, height, 1, 0.01);
	osc.amp(amp);
}

