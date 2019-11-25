import "./core.scss"
import Direction from "../src/direction" 
const imgs = [...document.querySelectorAll(".item img")]
imgs.map( o => {
	new Direction({
		el: o
	})
})