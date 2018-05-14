import React, { Component } from 'react';

const Presentation = () => (
    <div>     
    <form action="()">
    <fieldset>
        <legend>Wie gefällt euch unser neues Design?</legend>
        <select name="formDesignLikeScore" id="formDesignLikeScore">
        <option selected value="1">Sehr gut!</option>
        <option value="0">Es ist ok</option>
        <option value="-1">Leider gar nicht</option>
        </select>
    </fieldset>
    <fieldset>
        <input type="submit" id="submit"></input>
    </fieldset>
    </form>  
    <h2>Hier findet eine Präsentation statt</h2>
    </div>

);

export default Presentation;

/**
 * Form
 */


/**
 * H2
 */


