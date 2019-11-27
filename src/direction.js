import "./direction.scss"
const DEFAULT_DIR = -1
export class Direction {
	constructor ( settings ) {
		this.classes = [ '__top', '__right', '__bottom', '__left' ]
		this.onUpdate = typeof settings.onUpdate === "function" ? settings.onUpdate : null
		this.$els = [...settings.$els]
		this.dir = DEFAULT_DIR
		this.initClass()
		this.bindEvent()
	}
	initClass = () => this.$els.map( $el => $el.classList.add("__direction_item") )
	bindEvent () {
		this.$els.map( $el => {
			$el.addEventListener('mouseleave', this.out)
			$el.addEventListener('mousemove', this.updateDir)
		})
	}
	unbindEvent () {
		this.$els.map( $el => {
			$el.removeEventListener('mouseleave', this.out)
			$el.removeEventListener('mousemove', this.updateDir)
		})
	}
	updateDir = e => {
		const d = this.getDir( e )
		if( this.dir === d ) return
		this.dir = d
		this.updateClass( e )
		if( !!this.onUpdate ) this.onUpdate( e )
	}
	getDir (e) {
		const $el = e.currentTarget
		var pos = $el.getBoundingClientRect()
		var cx  = pos.left + ( pos.width / 2 )
		var cy  = pos.top  + ( pos.height / 2 )
		var x	= ( e.pageX - cx ) * ( pos.width > pos.height ? ( pos.height / pos.width ) : 1 )
		var y   = -( e.pageY - cy ) * ( pos.height > pos.width ? ( pos.width / pos.height ) : 1 )
		var d 	= Math.round( ( (Math.atan2(x,y) + Math.PI) / (Math.PI/2)) + 2 ) % 4
		return d
	}
	get currentClass () { return this.classes[ this.dir ] }
	updateClass ( e ) {
		this.removeClass( e )
		if( !!this.currentClass ) e.currentTarget.classList.add( this.currentClass )
	}
	removeClass ( e ) {
		this.classes.forEach( c => e.currentTarget.classList.remove( c ) )
	}

	out = e => {
		this.dir = DEFAULT_DIR
		this.removeClass(e)
	}
}
export default Direction