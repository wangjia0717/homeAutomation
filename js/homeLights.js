"use strict";

var HomeLights = {};

/**
 * Set the lights from the input json data
 * @param svgDoc
 * @param data the data from json
 */
HomeLights.setLights = function (svgDoc, data) {
    var houseRooms = svgDoc.getElementsByClassName("house-room");
    for (var j = 0; j < houseRooms.length; j++) {
        var houseRoom = houseRooms[j];
        var circle = houseRoom.getElementsByTagName("circle");
        var roomId = houseRoom.id;
        var lightsStatus = data.rooms[roomId].lights;
        for (var i = 0; i < circle.length; i++) {
            if (!lightsStatus && circle[i].parentElement.classList.contains("on")) {
                circle[i].parentElement.classList.add(LIGHT_OFF);
            }
            $(circle[i]).click(function () {
                roomId = $(this).parents('.house-room').attr('id');
                var lightsStatus = data.rooms[roomId].lights;
                this.parentElement.classList.toggle(LIGHT_OFF);
                HouseMain.saveFeature(roomId, "lights", lightsStatus);
            });
        }
    }
}