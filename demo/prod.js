import "./core.scss"
import Direction from "../dist/direction-hover.min"

const $imgs = document.querySelectorAll(".item")
new Direction({ $els: $imgs })
