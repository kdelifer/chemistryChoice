var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"StartIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "start" )
	},
	"YesIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "yes" )
	},
	"NoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "no" )
	},
	"NoneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "none" )
	},
	"NormalIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "normal" )
	},
	"HonorsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "honors" )
	},
	"AdvancedPlacementIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "advanced placement" )
	},
}