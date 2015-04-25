/* Simple JavaScript Inheritance
*by Hohn Resig http://ejohn.org/
*MIT Licensed
*/
//Inspired by base2 and Prototype
(function () {
    var initialising = false, fnTest = /xyz/.test(function () {xyz; }) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    this.Class = function () {};

    //Create a new Class that inherits from this Class
    Class.extend = function(prop) {
        var _super = this.prototype;

        // Instantiate a base Class (but only create the instance,
        // don't run the init constructor)
		initializing = true;
        var prototype = new this();
        initialising = false;
        
    // Copy the properties over onto the new prototype
        for (var name in prop) {
            // Check if we're overwriting an existing function
            prototype[name] = typeof prop[name] == "function" && 
                typeof _super[name] == "function" && 
                fnTest.test(prop[name]) ?
                function(name, fn) {
                return function() {
                    var tmp = this._super;
    // Add a new ._super method that is the same method
    // but on the super class
                    this._super = _super[name];
                    
    // the method only need to be bound temporarily, so we
    // remove it when we're done executing
                    var ret = fn.apply(this, arguments);
                    this._super = tmp;
                    
                    return ret;
                };
            })(name, prop[name]) :
            prop[name];
        }
        
        // The dummy class constructor
        function Class() {
            // All construction is actually done in the init method
            if ( !initialising && this.init )
                this.init.apply(this, arguments);
        }
        
        // Populate our constructed prototype object
        Class.prototype = prototype;
        
        // Enforce the constructor to be what we expect
        Class.prototype.constructor = Class;
        
        // And make this class extendable
        Class.extend = arguments.callee;
        
        return Class;
    };
})();
                

/** GUID-Generator, je nach Browser mit Crypto-Bibliothek
* oder nicht 
* Wird zur Methode der Ur-Klasse
* Ausgabe: z.Bsp.: d532c334-a7ca-a7ca-90c5-fbfc-1d3dbc01204e
*/
Class.prototype.generateGUID = (typeof(window.crypto) !=
							   'undefined' && typeof(window.crypto.getRandomValues)  != 'undefined') ?
	function() {
	// CRypto-Bibliothek vorhanden
	// http://stackoverflow.com/questions/6906916
	// collisions-when-generating-uuids-in-javascript
	var buf = new Uint16Array(8);
	window.crypto.getRandomValues(buf);
	var S4 = function(num) {
		var ret =  num.toString(16);
		while(ret.length < 4) {
			ret = "0"+ret;
		}
		return ret;
	};
	return (S4(buf[0]) +S4(buf[1])+"-"+S4(buf[2])+"-"+"-"+S4(buf[3])+"-"+S4(buf[4])+"-"+S4(buf[5])+"-"+S4(buf[6])+"-"+S4(buf[7]));
}
;
function() {
//Alternativ Math.random
//http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
var r = Math.random()*16|0, v=c== 'x' ? r :
(r&0x3|0x8);
return v.toString(16);
});
}:


/* Observer Implementierung
* by Philipp Friberg*/
var Observer = Class.extend({
	init: function() {
		this.observers = [];
	},
	/** Beobachter hinzufügen */
	addObserver: function(obj, callback) {
		//Check ob function existiert
		if( typeof(obj[callback]) !== 'function')
			throw( "Funktion doesn't exist" );
		//ok
		this.observers.push({obj: obj, callback: callback});
	},
	/** Beobacher entfernen*/
	removeObserver: function(obj, callback) {
		this.observers = this.observers.filter(function(el) {
			if (el.obj !== obj && el.callback != callback){
				return el;
			}
		});
	},
	/** Es hat sich etwas geändert, alle informieren */
	notify: function(data) {
		var = scope = this; // Aufrufendes Model
		for ( var i=0; i<this.observers.length; i++) {
			var el = this.observers[i];
			el.obj[el.callback].call(el.obj, scope, data);
		}
	}
});


/* View Inplementierung */
var View = Class.extend({
	init: function(){
	},
	/** Konsolen Log*/
	log: function(value) {
		console.log(value);
	},
	/**Alert-Ausgabe */
	alert : function(text) {
		alert(text);
	}
});
		