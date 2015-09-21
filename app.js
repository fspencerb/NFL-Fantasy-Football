var PlayersService = function(endpointUri){
	
	var playersData = [];
​
	
	this.getPlayersByTeam = function(teamName){
		var filteredPlayers = playersData.filter(function(player){
			return player.team === teamName;
		});
	
		return filteredPlayers;
	}
​
	
	this.getPlayersByPosition = function(position){
		var filteredPlayers = playersData.filter(function(player){
			return player.position === position;
		});
​
		return filteredPlayers;
	}
	
	function loadPlayersData(){
		$.getJSON(endpointUri,function(data){
			playersData = data.body.players; //maybe play with this
		});
	};	
	loadPlayersData();
}
​
//consumer
//service already linked in HTML
var prodUrl = "cbs.com....";
var testUrl = "test.cbs.com....";
​
var playerService = new PlayerService(testUrl);
​
$('some-button').on('click',function(){
	var sf = playerService.getPlayersByTeam("SF");
}

var roster = {
  players:{},
  addPlayer :function(player){
    if(player.name && player.position && player.number){
      this.players[player.id] = player;
      updatePlayers();
    }else{
      alert("Invalid Player Data");
    }
  }
}
​
var Player = function(name,position,number,id){
  this.name = name;
  this.position = position;
  this.number = number;
  this.id = id;
}
​
​
var PlayerFactory = {
  _uniqueId:0,
  createPlayer:function(name,position,number){
    this._uniqueId++;
        return new Player(name,position,number,this._uniqueId);
  }
}
​
​
function updatePlayers(){
  var rosterDiv = $(".player-roster");
  rosterDiv.html('');
  for(var id in roster.players){
      var player = roster.players[id];
      //without the if statement this loop throws an error
      if(!player){
        //continue;
      }
      var html = '<div class="player-card">'+
            '<button class="btn btn-xs btn-danger remove" id="'+player.id+'">Remove</button>'+
            '<div>'+
              '<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" />'+
            '</div>'+
            '<div>'+
              '<span>'+player.name+'</span>'+
            '</div>'+
            '<div>'+
              '<span>'+player.position+'</span>'+
            '</div>'+
            '<div>'+
              '<span>'+player.number+'</span>'+
           '</div>'+
          '</div>';
          
      rosterDiv.append(html);
  }
}
​
$(function(){
  
  $("#add-player-form").on('submit',function(event){
      event.preventDefault();
      var values = $(this).serializeArray();
      var name = values[0].value;
      var position = values[1].value;
      var number = values[2].value;
      roster.addPlayer(PlayerFactory.createPlayer(name,position,number));
  });
  
  $(".expand-player-panel").on('click',function(){
    $(".panel-add-player .panel-body").toggle(200)
  });
  
  $(".player-roster").on('click','.remove',function(event){
    delete roster.players[this.id];
    updatePlayers();
  })
    
  
})

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


        $("#removePlayer").on('click',function(){

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
            $(".player-card").prepend(".player-card");
        });
