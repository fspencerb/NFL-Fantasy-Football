

        $('#addPlayer').on('click',function(){
            
            console.log("hi")
    	    var name = $('#playerName').val();
    	    var position = $('#playerPosition').val();
    	    var number = $('#playerNumber').val();
     
     
    	var html = '<div class="player-card">'+
			  '<div>'+
              '<div style="text-align:center"><span type="button" class="btn btn-danger btn-xs" id="removePlayer">Remove</span></div>'+
                '<image src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"></image>'+
              '</div>'+
			  '<div>'+
				'<span style="text-align:center">' + (name) + '</span>' +
			  '</div>'+
			  '<div>'+
				'<span style="text-align:center">' + (position) + '</span>' +
			  '</div>'+
			  '<div>'+
				'<span style="text-align:center">' + (number) + '</span>' +
			  '</div>'+
			'</div>';
    	$('.player-roster').append(html);
        });


        $("#removePlayer").on('click', function () {

            var html = '<div class="player-card">' +
          '<div>' +
          '<div style="text-align:center"><button type="button" class="btn btn-danger btn-xs" id="removePlayer">Remove</button></div>' +
            '<image src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"></image>' +
          '</div>' +
          '<div>' +
            '<span>' + (name) + '</span>' +
          '</div>' +
          '<div>' +
            '<span>' + (position) + '</span>' +
          '</div>' +
          '<div>' +
            '<span>' + (number) + '</span>' +
          '</div>' +
        '</div>';
            $(".player-card").prepend(html);
        });
