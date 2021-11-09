/**
 * 
 * @param {number} val 
 * @param {number} min 
 * @param {number} max 
 * @return {number}
 */


function between(val, min, max) {
    return Math.max(min, Math.min(val, max));
}

/**
 * @property {HTMLElement} root
 * @property {HTMLElement[]} icons
 * @property {number} iconSize 
 */

class Dock {
    /**
     * 
     * @param {HTMLElement} el 
     */
    constructor(el) {
        this.root = el;
        this.icons = Array.from(el.children);
        if (this.icons.length === 0) {
            return;
        }
        this.iconSize = this.icons[0].offsetWidth;
        el.addEventListener("mousemove", this.handleMouseMove.bind(this));
    }
    /**
     * @param {MouseEvent} e
     */
    handleMouseMove(e) {
        this.mousePosition = between((e.clientX - this.root.offsetLeft) / this.iconSize, 0, this.icons.length);
        console.log(this.mousePosition);
    }
}

new Dock(document.querySelector(".dock"));