class Forms {
    constructor(width) {
        this.form = document.createElement('form');
        this.form.style.cssText = 'width:' + width + 'px;position:fixed;top:0;right:0;';
        document.body.appendChild(this.form)
    }
    elt(element, creat) {
        var cet = document.createElement(creat);
        element.appendChild(cet);
        return cet;
    }
    range(objs, obj, min, max) {
        var index = max - min;
        var input = this.elt(this.form, 'input')
        input.min = 0;
        input.max = 100;
        input.value = objs[obj] / (index / input.max);
        input.type = 'range';
        input.addEventListener('input', e => {
            objs[obj] = index * (input.value / input.max);
            console.log(objs)
        })
        input.style.cssText = 'width:100%;height:1.5em;';
    }
    add(objs, obj, min, max) {
        this.range(objs, obj, min, max)
    }
}