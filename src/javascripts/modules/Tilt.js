export default class Tilt {

    constructor(options) {

        const defaultOptions = {
            el: document.querySelector(".tilt"),
            max: 5, 
            rotateX: 1,
            rotateY: -1
        };

        this.options = (options) ? Object.assign({}, defaultOptions, options) : defaultOptions;

        // console.log(this.options);

        this.options.el.addEventListener('mousemove', this._transform.bind(this));
        this.options.el.addEventListener('mouseleave', () => { 
            this.options.el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`; 
            this.options.el.style.transition = `transform 300ms ease-in-out`;
        });

    }

    _transform(e) {
        const { el, max, rotateX, rotateY } = this.options;

        const { offsetWidth: width, offsetHeight: height } = el;
        let { offsetX: mouseX, offsetY: mouseY } = e;

        if (this !== e.target) {
            mouseX = mouseX + e.target.offsetLeft;
            mouseY = mouseY + e.target.offsetTop;
        }

        const xWalk = (mouseX / width * max * 2) - max;
        const yWalk = (mouseY / height * max * 2) - max;

        el.style.transform = `perspective(1000px) rotateX(${yWalk * rotateX}deg)  rotateY(${xWalk * rotateY}deg) scale3d(1, 1, 1)`;
        el.style.transition = `all 0s ease 0s`;

    }
    
}
