(function ( $ ) {

$.fn.sensoryOverload = function(settings) {

	// Body access.
	var body = $(document.body);
	
	// Local access to the element.
	var me = this;
	
	// Local access to jQuery'd element.
	var jqme = $(me);
	
	// Easy access to defaults.
	var defaults = $.fn.sensoryOverload.defaults;
	
	// Set options.
	var options = $.extend({}, defaults, settings);
	
	// Whether there is CSS transitions support.
	var transitions = false;
	
	me.random = true;
	
	// Sensory Flashes
	me.flash = 1;
	
	function lazyLoadImages(){
		$(options.items).each(function(index) {
            var bg_image = $(this).data('background'),
            	flash_item = $(this);

            $('<img />').attr('src', bg_image).load(function() {
               $(this).remove();
               flash_item.css('background-image', 'url('+bg_image+')');
               me.flash ++;
            });
        });
	}	
		
	function sensoryOverloadLoop(){
		if (me.random) {
			
			// Add body Class
			body.addClass('sensory-activated');
			
			$(options.container).find('.'+options.active).removeClass(options.active);
			
			randomize = Math.floor(Math.random() * 1000);
			
			$(options.items).eq(randomize % me.flash).addClass(options.active);

			me.random = false;

	        setTimeout(function(){
	            me.random = true;
	        }, options.delay);			

		}
	}
	
	function initSensoryOverload(){

		setTimeout(function(){

			lazyLoadImages();

			$(window).scroll(function(e){
				
				// Set Timeout for scrollCheck
				clearTimeout( $.data( this, "scrollCheck" ) );
				
				// Fire Sensory Overload
				sensoryOverloadLoop();

				$.data( this, "scrollCheck", setTimeout(function() {
					body.removeClass('sensory-activated');
    			}, options.delay) );

			});

		}, 100);

	}

	initSensoryOverload();
	
	// Return the modified element.
	return this;
};

$.fn.sensoryOverload.defaults = {
	'delay': 100,				// Delay between sensory items
	'container': '[data-sensory-overload]', // Container of your items,
	'items': '[data-sensory-item]', // Items  to flash
	'active': 'activated'		// Active class for items
};

}( jQuery ));
