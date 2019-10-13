class Loading {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight - 3;
        document.body.appendChild(this.canvas);
        this.wave = {
            y: this.canvas.height / 2,
            length: 0.01,
            amplitude: 100,
            frequency: 0.01
        }
        this.hsl = {
            h: 200,
            s: 50,
            l: 50
        }
        this.rgba = {
            r: 0,
            g: 0,
            b: 0,
            a: 0.01
        }
        this.input = new Forms(150)
        this.input.add(this.wave, 'y', 0, this.canvas.height * 2);
        this.input.add(this.wave, 'length', -0.01, 0.01);
        this.input.add(this.wave, 'amplitude', -300, 300);
        this.input.add(this.wave, 'frequency', -0.01, 0.01);
        this.input.add(this.hsl, 'h', 0, 255);
        this.input.add(this.hsl, 's', 0, 100);
        this.input.add(this.hsl, 'l', 0, 100);
        this.input.add(this.rgba, 'r', 0, 255);
        this.input.add(this.rgba, 'g', 0, 255);
        this.input.add(this.rgba, 'b', 0, 255);
        this.input.add(this.rgba, 'a', 0, 1);
        this.inc = this.wave.frequency
    }
    anime() {
        this.ctx.fillStyle = 'rgba(' + this.rgba.r + ', ' + this.rgba.g + ', ' + this.rgba.b + ',' + this.rgba.a + ')';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canvas.height / 2);
        for (let i = 0; i < this.canvas.width; i++) {
            this.ctx.lineTo(i, this.wave.y + ((Math.sin(i * this.wave.length + this.inc) * this.wave.amplitude / i) * 100));
        };
        this.ctx.strokeStyle = 'hsl(' + Math.abs(this.hsl.h * Math.sin(this.inc)) + ', ' + this.hsl.s + '%, ' + this.hsl.l + '%)';
        this.ctx.stroke();
        this.inc += this.wave.frequency;

    }
}