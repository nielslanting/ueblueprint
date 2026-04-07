export default class CSSValue {
    /** @param {String} cssText */
    constructor(cssText = "") {
        this.cssText = cssText
    }

    toString() {
        return this.cssText
    }
}

export const cssValue = (strings, ...values) =>
    new CSSValue(strings.reduce((acc, cur, index) => acc + cur + (values[index] ?? ""), ""))
