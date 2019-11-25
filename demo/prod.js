import "./core.scss"
import Direction from "../dist/direction-hover.min" 
const imgs = [...document.querySelectorAll(".item img")]
imgs.map( o => {
	new Direction({
		el: o
	})
})