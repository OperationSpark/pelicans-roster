<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

To Install this project

    os install

and select `pelicans-roster`.

You just [learned about arrays](https://docs.google.com/presentation/d/1jh1grFWZRsheklfBtuPnr4l3nVPNYXp0DNiVIXypuQo/edit?usp=sharing) and how to use their `map` function. Time to try and put that to some use!

A lot of time when you have some data it is helpful to have different ways of displaying it. Well in this application, we have some data! Open `index.html` and try running the application, opening a new tab and opening the console. In there type

     pelicans

And you will see some data on the current pelicans roster. Click the expander icons to explore this array of objects.

Ok, time to get started. See those controls at the top? Let's get these working.

# Part 1

## Show player names

Start by enabling the first input by removing the `disabled` attributed from 

	<input type="radio" name="whatToShow" value="names" disabled >

You will now be able to click it.

When any button value changes this function will be triggered. It should go through all `pelicans` and create a new array. This new array will be *just* strings each of which will be an item that will be put into the output list.

Start by finding the `TODO 1` marker in the `getDisplayedPlayerStrings` javascript function. We have the `pelicans` (array) variable and the `displayType` (string) variable available to us. Start by checking if the `displayType` is equal to `"names"`. If it is you should call `map` on the `pelicans` array with `getName` as an argument. Put the results into the `displayStrings` variable.

When you run the application and click the first radio button you should now see the some outputs to the console. To get the display working you need to find the `TODO 2` marker and implement the `getName` function.

## Show player names and numbers

Let's get the second radio button working. As before, remove the `disabled` attribute.

Inside of `getDisplayedPlayerStrings`, if the `displayType` is equal to `"name-number"` then `map` the `pelicans` array with `getNameAndNumber`. *Do you know where `"name-number"` came from? Find where else it appears on this page.*

Now find the `TODO 3` marker. Implement this method. Note that you might be surprised at the results. While in the examples we did earlier, we did `player["jerseyNumber"]` to get the number, it's not the same here. How do we find what the correct name for the property should be?

Also note that you will have to concatenate strings (eg `"foo" + " - " + " bar"`). Make sure your output matches what shows up in the radio button description.

Try switching between the two enabled radio buttons, do you see the output change immediately?

## Show player wins and names

One more time, get the third radio button working.

## Show player id, name, and position

The fourth one is a bit harder, we didn't create a function for you and you have to display more data. We think you can do it yourself at this point.

Try toggling between the enabled radio buttons, see the display updated in real time!

## Sort alphabetically

We're going to learn about another array function, this one isn't as useful as `map` but it will still come up every once in a while. Start by enabling the checkbox in the html.

Now look at the `updateDisplay` function. Take some time to understand and explain to your partner what it does. Call an instructor over to explain it to you if you don't get it fully.

Sorting an array of strings alphabetically is very easy.

     var sortedArrayOfStrings = arrayOfStrings.sort();

Find the `TODO 6` marker. Write some code to sort `stringsToDisplay` if `shouldSort` is `true`. Assign the results to `stringsToDisplay`.

Play around with the UI. You should now be able to sort the display by checking that box.

## Bonus 1 - Display players with no jersey number properly

You might note that some players (like *Darius Miller*) haven't played enough to have a jersey number assigned. Their display looks wierd when the second option is selected. See if you can figure out how to fix that so that it displays something like

    Darius Miller - (no number)

## Bonus 2 - Display wins in blue

When displaying wins and names it makes sense for all the wins to stick out. Let's color them blue. *(What do we use here? html? javascript? css?)*

To do this we will have to put some html around the wins count so that we could use a CSS selector. Fortunately when we build up the strings we can use html. The `<em>` elements seems right for this. Change the function that picks the wins and player name so that it outputs something like

    <em>39</em> by Anthony Davis

Use css in the `<style>` toward the top to change all `em` elements so that their font [is blue](http://www.w3schools.com/cssref/pr_text_color.asp) and [bold](http://www.w3schools.com/cssref/pr_font_weight.asp).

## Bonus 3 - Display player id smaller

The player id when selecting the last radio button isn't really as important. Make just the player id use the consolas font and 70% smaller.

# Part 2 - Filtering

In Part 2, we will learn how to use the array `filter()` function in order to change which players are shown. Make sure you've completed all the steps in Part 1 before working on Part 2!

In order to use `filter()` you must pass it a function that takes a particular item in the array and returns `true` or `false`. If your function returns `true`, the item is included in the returned array otherwise it is not. 

## Getting Started - Javascript

The following function returns `true` if a particular person plays at the "Guard" position

```js
function isGuard(person) {
    var positionIsGuard;
    if(person.position === 'Guard') {
        positionIsGuard = true;
    }
    else {
        positionIsGuard = false;
    }
    return positionIsGuard;
}
```

Copy and paste the `isGuard` function into the javascript code AFTER the `getIdNameAndPosition` function. Make sure the code is properly indented to match the rest of the code. 

Then, add the following code to the `getDisplayedPlayerStrings()` function BEFORE the rest of the code. 

    var pelicansToShow = pelicans;
    pelicansToShow = pelicansToShow.filter(isGuard);

What does this do? If you don't know, add `console.log` statements before and after the use of the `filter` function to find out. Modify the rest of the code in the `getDisplayedPlayerStrings()` function to use the `pelicansToShow` variable instead of `pelicans`.

When you are done you should only see players who play as guards regardless of which buttons are selected.  

## Getting Started - HTML

The following HTML creates three additional checkboxes with different options that control which players are shown. 

```html
<h2>Part 2</h2>
<fieldset>
    <label>
        <input type="checkbox" name="hidePlayersWithoutPosition">
        <span class="label">Hide players without a position</span>
    </label>
    <label>
        <input type="checkbox" name="showOnlyMajorPlayers">
        <span class="label">Show only major players (anyone who has played in over 40 games)</span>
    </label>
    <label>
        <input type="checkbox" name="hidePlayersUsingWins">
        <span class="label">Hide players with less than <input name="minNumberOfWins" value="50"> wins </span>
    </label>            
</fieldset>
```

Copy and paste the code above into your file so that the checkboxes appear below the other buttons but before the list of players. When you are done the web page should look like this:

![Screenshot](http://i.imgur.com/dZt3zy6.png)

## Getting Started - Javascript Event Handlers

jQuery is a bunch of popular and very helpful methods for using javascript with web pages. That's what the `$(...)` stuff is! We're using it here to respond to clicks on buttons. 

Copy and paste the javascript code after the other code that uses jQuery. 

```js
// changes the value of filterPlayersWithoutPosition to true or false
// depending on if the checkbox with name="hidePlayersWithoutPosition"
// is checked, and then calls updateDisplay() to change which players 
// are showing
$("[name=hidePlayersWithoutPosition]").on('click',function(e) { 
    filterPlayersWithoutPosition = $(e.target).is(':checked');
    console.log("clicked on hidePlayersWithoutPositon. filterPlayersWithoutPosition = ",filterPlayersWithoutPosition);
    updateDisplay();
});
// As above, sets filterMinorPlayers to true/false depending on if
// checkbox with name="showOnlyMajorPlayers" is checked
$("[name=showOnlyMajorPlayers]").on('click',function(e) {
    filterMinorPlayers = $(e.target).is(':checked');
    console.log("clicked on showOnlyMajorPlayers. filterMinorPlayers = ",filterMinorPlayers);
    updateDisplay();
});
// As above, sets filterPlayersByWins to true/false depending on if
// checkbox with name="hidePlayersUsingWins" is checked
$("[name=hidePlayersUsingWins]").on('click',function(e) {
    filterPlayersByWins = $(e.target).is(':checked');
    console.log("clicked on hidePlayersUsingWins. filterPlayersByWins = ",filterPlayersByWins);
    updateDisplay();
});
// updates the value of minNumberOfWins to match that of the text field
// with name="minNumberOfWins" whenever that field changes
$("[name=minNumberOfWins]").on('input',function(e) {
    minNumberOfWins = $("[name=minNumberOfWins]").val();
    console.log("clicked on minNumberOfWins. minNumberOfWins = ",minNumberOfWins);
    updateDisplay();
});
```

Read the comments for this code and try and understand what it does. This code uses four variables which must be declared and initialized to a starting value. Write those variable declarations following the existing variable declarations in the javascript code. 

When you are done, reload the page. You should have no errors displayed in the console. When you click on a button, you should see the correct message printed out to the console. 

## Filter Players By Position

Whenever the checkbox labelled "Hide players without a position" is clicked, the `filterPlayersWithoutPosition` is set to `true` or `false` depending on if the checkbox is checked or not. We want to show or hide players based on their position whenever the checkbox is clicked.

Write a function `hasPosition` which takes a player and return `true` if they have a position

```js
function hasPosition(person) {
    // TODO ????
}
```

Use that function to filter the `shownPelicans` array when `filterPlayersWithoutPosition` is `true`. 

You can remove the code that filters using the `isGuard` function. We won't need it anymore. 

Confirm the code works by checking and unchecking the "Hide players without a position" checkbox. 

## Filter Players By Number Of Games Played

We now want to do the same thing for the "Show only major players" checkbox.

Write the a filter function and apply that function to hide players who have played less than 50 games if `filterMinorPlayers` is `true`. 

If you don't know what to do, try these steps:

- Figure out what you want to do first by explaining it out loud to your partner
- Figure out a name for your function and write out the function declaration. In the body of the function, just write out what it should do in your own words using comments
- modify `getDisplayedPlayerStrings`() to apply the filter using your function
- go back to the function you wrote and try and write the code itself

## Filter Players By Wins

Write the code for the final checkbox, which only shows players having a minimum number of wins. The `filterPlayersByWins` variable should be used to determine if you apply the filter. The minimum number of wins is based on what the user has typed into the text field and is stored in `minNumberOfWins` You should use that variable in your filter function. 

## Bonus 1 - Add a footer

Whenever we show data to a user that is limited or filtered in some way, it can be helpful to let the user know that what we are showing is only a portion of the larger dataset. Let's add that functionality to our web page. 

Add a new HTML element following your list of players

```html
<footer></footer>
```

You can style this element using the following CSS

```css
footer {
    color: rgb(100,100,200);
    font-style: italic;
}
```

And you can change the contents of that element by using the following code

```js
var footerContents = " ... any old string ....";
$("footer").html(footerContents);
```

Write some code in `updateDisplay()` to show the following whenever the list of player changes

> X of Y players shown

Where "X" is the number of players being shown and the "Y" is the total number of players on the pelicans roster. 

## Bonus 2 - Free-Throw Percentage

Write a new filter option that shows everyone that has made 75% their free-throws. If a player has not made any free throws do not show them when that filter option is selected. 

In order to do this, you will need to use a different dataset that has additional info about the Pelican's players.

Find the line of code which loads the data file

```js
$.getJSON("pelicans-simple.json").then(function(pelicans) {
```

and then change it use the `pelicans-extended.json` file

```js
$.getJSON("pelicans-extended.json").then(function(pelicans) {
```

You can view this new dataset by opening the file in your project or explore it by typing `pelicans` in the console. You should notice that it has a slightly different format and if you run through your web page and test all of its behavior, you will find errors. 

Fix your existing code to use the new dataset first, then use the new data to implement the a filter option based on free-throw percentage. 

