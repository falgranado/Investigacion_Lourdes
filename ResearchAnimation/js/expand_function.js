function initialize() {
    var id_original_css = {
        backgroundColor: '#bca',
        width: '30px',
        border: '1px solid black',
        marginLeft: '0',
        fontSize: '1em',
        opacity: '100',
        borderWidth: '1px',
        borderHeight: '1px'
    };
    var id_expanded_css = {
        width: '100%',
        opacity: 60,
        marginLeft: '0.5in',
        borderWidth: '5px'
    };

	
    var counters = new Array();
    // Searches for every div that have an id attribute
    $('div').each(function () {
        if (!this.id) {} else {
            var id = this.id + '_counter';
            counters.push(id); //add id to counters array 
            counters[id] = 0; //initialize as 0 the counter of corresponding id 
            console.log(counters);//Logs the array
        }
    });
	$(function() {
	    	$( "#dialog" ).dialog();
	    });

	$( "#p_and_d_block" ).hide();
    $( "#fda_block" ).hide();
    $( "#standards_div_block" ).hide();
    $( "#upsto_block" ).hide();
	
    expand('medical_devices_block', id_expanded_css, id_original_css, 500,function(){
    	$("#p_and_d_block").hide('fast');
    	$( "#fda_block" ).hide('fast');
        $( "#standards_div_block" ).hide('fast');
        $( "#upsto_block" ).hide('fast');
       }
        ,function(){
	        $("#p_and_d_block").show('slow');
	    	$( "#fda_block" ).show('slow');
	        $( "#standards_div_block" ).show('slow');
	        $( "#upsto_block" ).show('slow');        	
        });
    expand('p_and_d_block', id_expanded_css, id_original_css, 500,function(){
    	alert('ended');
    });
/*
 * 
 * Params div_block_id : enter the id of the div you want to animate
 * 		  expansion_class: enter the css modification to be made in JSON format
 * 		  original_class: enter the original css styling of this div
 * 		  time: enter duration of animation. Can be used with "fast","slow"  or integers in microseconds
 * 		  callback_function_original: enter a function you want to use when divs animate back to its origninal state
 * 		  callback_function_original: enter a function you want to use when divs animate back to its expanding state
 * 	 	   
 */
    function expand(div_block_id, expansion_class, original_class, time, callback_function_original,callback_function_expand) {
        console.log("entered expand");
        var id = '#' + div_block_id; //ID received by function
        counter = counters[div_block_id + '_counter']; //Associates the counter per div block respectively 

        //Original ID of style
        $(id).click(function () {
            console.log("entered expand on click");
            //If the click counter is even then animate back to original state
            $("#dialog").remove();
            if (++counter % 2 == 0) {
                console.log("entered expand if");
                $(this).animate(original_class, {
                	duration:time, //animation duration
                	start:callback_function_original//make animation happen symultaneously with callback
                	});
                console.log("animated original class");
                console.log(counters[div_block_id + '_counter']);
            } else {
                console.log("entered expand else");
                //Expand to desired css
                $(this).animate(expansion_class, {
                	duration:time,
                	start:callback_function_expand //make animation happen symultaneously with callback
                	});
                console.log("animated expand class");
                console.log(div_block_id+'='+dejcounters[div_block_id + '_counter']);
                //Reset counter on every uneven click so it wont get bigger
                counters[div_block_id + '_counter'] = 0;
            }
            console.log("exited expand");
        });
    };
}

$(document).ready(function () {
    initialize();
});