var handlerArmySpawn = {
    run: function(spawn) {
        
        var defenders = _.filter(spawn.room.find(FIND_MY_CREEPS), (creep) => creep.memory.role == 'defender');
        
        var energyCap = spawn.room.energyCapacityAvailable;
        var hundreds = Math.floor(energyCap/100);
        var toughs = Math.floor(hundreds*1/3*2);
        var attacks = Math.floor(hundreds*1/3);
        var moves = Math.floor(hundreds*1/3*3);
        
        var bodyParts = [];
        
        for(var i=0; i<toughs; i++) {
            bodyParts.push(TOUGH);
        }
        for(var i=0; i<moves; i++) {
            bodyParts.push(MOVE);
        }
        for(var i=0; i<attacks; i++) {
            bodyParts.push(ATTACK);
        }
        
        var newRole;
        var make = false;
        
        if(defenders.length < 3) {
            newRole = 'defender';
            bodyParts = [MOVE,MOVE,ATTACK,ATTACK]
            make = true;
        }
        else if(defenders.length < 6) {
            newRole = 'defender';
            make = true;
        }
        
        if(make) { 
            spawn.createCreep(bodyParts,null,{role: newRole});
        }
    }
}

module.exports = handlerArmySpawn;