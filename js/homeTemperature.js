"use strict"

var HomeTemperature = {};

/**
 * Bind the operation of the slides to the its actual temperature degree, set the color accordingly and save the value
 * @param sliderId
 * @param tempValueId
 * @param houseWingStops
 * @param temperature
 * @param isEastWing
 */
HomeTemperature.tempSlider = function (sliderId, tempValueId, houseWingStops, temperature, isEastWing) {
    $(sliderId).slider({
        range: "min",
        min: TEMP_MINIMUM,
        max: TEMP_MAXIMUM,
        value: temperature,
        slide: function (event, ui) {
            HomeTemperature.setTempColor(ui.value, houseWingStops, isEastWing);
            $(tempValueId).val(ui.value);
        },
        stop: function (event, ui) {
            if (isEastWing)
                HouseMain.saveFeature(EAST_WING, "temperature", ui.value);
            else
                HouseMain.saveFeature(WEST_WING, "temperature", ui.value);
        }
    });
    $(tempValueId).val($(sliderId).slider("value"));
}


/**
 * set color based on the temperature
 * @param temparature
 * @param houseWingStops
 * @param isEastWing
 */
HomeTemperature.setTempColor = function (temparature, houseWingStops, isEastWing) {
    var tempColor = COLD_TEMPRATURE_COLOR;
    if (temparature >= TEMP_THRESHOLD)
        tempColor = WARM_TEMPRATURE_COLOR;
    var opacity = HomeTemperature.getOpacity(temparature);
    if (isEastWing) {
        houseWingStops[0].setAttribute("style", "stop-color:" + tempColor + ";stop-opacity:0");
        houseWingStops[1].setAttribute("style", "stop-color:" + tempColor + ";stop-opacity:" + opacity);
    } else {
        houseWingStops[0].setAttribute("style", "stop-color:" + tempColor + ";stop-opacity:" + opacity);
        houseWingStops[1].setAttribute("style", "stop-color:" + tempColor + ";stop-opacity:0");
    }
}


/**
 * Set the temperature based on the json data
 * @param svgDoc
 * @param data
 */
HomeTemperature.setTemprature = function (svgDoc, data) {
    var eastWing = svgDoc.getElementById(EAST_WING);
    var eastWingStops = eastWing.getElementsByTagName("stop");
    var westWing = svgDoc.getElementById(WEST_WING);
    var westWingStops = westWing.getElementsByTagName("stop");
    var eastTemp = data.temp[EAST_WING];
    var westTemp = data.temp[WEST_WING];
    HomeTemperature.tempSlider("#west-temp-slider", "#westTemp", westWingStops, westTemp, false);
    HomeTemperature.tempSlider("#east-temp-slider", "#eastTemp", eastWingStops, eastTemp, true);
    HomeTemperature.setTempColor(eastTemp, eastWingStops, true);
    HomeTemperature.setTempColor(westTemp, westWingStops, false);
}

/**
 * Get Opacity according to the temperature
 * @param temperature
 * @returns {number}
 */
HomeTemperature.getOpacity = function(temperature){
    return Math.abs((temperature -TEMP_THRESHOLD) / TEMP_BUCKET_CAPACITY) * MAX_OPACITY;
}