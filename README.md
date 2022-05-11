# Etch-A-Sketch
This is the Odin Project based Etch-A-Sketch project.

## Introduction
The original goal for this project was to create a 16 X 16 grid of squares that will change color with a mouseover. 

## Process
I ended up using a combination of JS and CSS grid to eventually create the grid dynamically. This was after several attempts at using flexbox alone to perform this task. After numerous attempts and a deep dive into some CSS grid documentation I was able to get the result I wanted.
Next up was to change colors on any of the squares in the grid upon mouseover. This was just a matter of programmtically creating event listeners for each square by iterating over all elements. Following this I proceeded to create the logic to enable the user to scale the grid squares number up or down upon th push of a button. Finally I created the logic that chooses a random color for each square upon mouseover but then upon any subsequent mouseover 10% black will be applied to the current RGB of the square until it hits 100% black.
