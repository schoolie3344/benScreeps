
//TODO: Make a module to get creeps to move to new room and help colonize
var handlerOtherRoom = {
    run: function(creep,Room) {
        
        if(creep.room != Room) {
            creep.memory.role = creep.memory.role + "m";
            creep.moveTo(Game.rooms[Room.name].controller);
        }
        else {
            creep.memory.role = creep.memory.role.slice(0,-1);
        }
    }
}

module.exports = handlerOtherRoom;