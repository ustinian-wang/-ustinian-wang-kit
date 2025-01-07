/**
 * @description convert color format to hex like "#105450"
 * @param {string} rgb '#000000', rgba(255,255,255,1) and rgb(255,255,255)'. the alpha will be ignored
 * @returns {string|*}
 */
import {isString} from "./typer.js";

/**
 * @description color string to hex like #000000, rgb(255,255,255) and rgba(255,255,255,0)
 * @param {string} rgb
 * @returns {string}
 */
export function colorToHex(rgb) {
    if(!isString(rgb)){
        return "#000000";
    }
    if (rgb.startsWith("#")) {
        return rgb;
    }
    let arr = rgb.replace("(").replace(")").split(",")
    return rgbArgs2hex(arr[0], arr[1], arr[2]);
}

/**
 * @description rgb to hex string
 * @param {number|string} red
 * @param {number|string} green
 * @param {number|string} blue
 * @returns {string}
 */
export function rgbArgs2hex(red, green, blue) {
    return '#' + [red, green, blue].map(value=>parseInt(value || '0').toString(16))
}

/**
 * @description hex to rgb
 * @param {string} hex
 * @returns {Array<number>}
 */
export function hex2rgb(hex) {
    hex = hex + "";
    hex = hex.startsWith("#") ? hex.slice(1) : hex;
    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4), 16);
  
    return [r, g, b];
}

/**
 * @description rgb to hex
 * @param {string} color
 * @returns {string}
 */
export function rgbToHex(color) {
    var values = color
      .replace(/rgb?\(/, "")
      .replace(/\)/, "")
      .replace(/[\s+]/g, "")
      .split(",");
    var a = parseFloat((values[3] || 1) + ""),
      r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
      g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
      b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
    return (
      "#" +
      ("0" + r.toString(16)).slice(-2) +
      ("0" + g.toString(16)).slice(-2) +
      ("0" + b.toString(16)).slice(-2)
    );
}