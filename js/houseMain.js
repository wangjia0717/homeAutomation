"use strict"

$(document).ready(function () {
    HouseMain.getHouseSVGReady();
});

var HouseMain = {};


/**
 * This method does the following steps:
 1. get information from the input json object
 2. set the initial ui(lights/temperature) based on the information from step 1
 * @param svgDoc the svg
 */
HouseMain.setHouseInit = function (svgDoc) {
    $.getJSON(HOME_OBJECT)
        .done(function (data) {
            HomeLights.setLights(svgDoc, data);
            HomeTemperature.setTemprature(svgDoc, data);
        })
        .fail(function () {
            console.log(ERROR_MESSAGE);
        })
}


/**
 * Save the information from the mock call
 * @param featureId
 * @param featureKey
 * @param featureValue
 */
HouseMain.saveFeature = function (featureId, featureKey, featureValue) {
    $.get(FEATURE_SET_JSON, {
        "featureId": featureId,
        "key": featureKey,
        "value": featureValue
    }).done(function (data) {
        if (data.success === false) {
            console.log("Error saving adjustment: " + data.success);
        }
    }, 'json');
}

/**
 * Check if the document is ready or not
 */
HouseMain.getHouseSVGReady = function () {
    var svg = document.getElementById(HOUSE_SVG_ID);
    var svgDoc = svg.contentDocument;
    svg.style.display = "";
    if (svgDoc == null) {
        setTimeout(HouseMain.getHouseSVGReady, TIME_OUT_MAX);
    } else {
        HouseMain.setHouseInit(svgDoc);
    }
}