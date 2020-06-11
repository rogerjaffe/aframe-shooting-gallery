/* global AFRAME, BOX_SPEED */

AFRAME.registerComponent('score', {

	schema: {
		score: {type: 'number', default: 0}
	},

	init: function() {
    this.el.addEventListener('bump-score', this.bumpScore.bind(this));
	},

	bumpScore: function() {
		this.data.score++
	} 


});