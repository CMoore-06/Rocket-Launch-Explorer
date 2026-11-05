# Rocket Launch Explorer README #

## The Callback API Calls ##
I was supposed to take out the callback functions but I decided I wanted to keep them, as I didn't quite see a reason to take them out. Anyway, the functions use a callback parameter, which is used to call the next function in the sequence, whether that's populating the dropdown or adding the infromation to the divs. The correct functions are passed in whenever the page loads, or when the user chooses a specific launch and the event listener activates. For example: populateDropdown is passed into getUpcomingLaunches when the later function is called after the page loads.

### Why I didn't Remove the Callbacks ###
I didn't neccesarily see a reason to take them out. I know how to make the program work without them; it would just be replacing "callback" wherever it's called and replacing it with the function that was passed in. I know the code is probably cleaner like that, but the code already worked so I didn't fully see a reason to remove them. If I need to remove them and resubmit then I'm more than happy to do so.

## The Current API Calls ##
The current API calls use axios instead of the XMLHttpRequest object. This makes it easier, as there's less writing involved in actually making the call. It also makes verification of the response easier, as .then() only goes when the response is successful, and .catch() handles any error that would occur during the call.

## AI Usage ##
I mostly used AI to help me fix errors I couldn't fully figure out (especially the axios ones as I've barley worked with it.). VS Code's Copiolt suggested using the ?? operators in displayLaunchInfo. I know how they work (they're just a shorthanded if statement, the value on the right will be chosen if the value on the left is false or null). I didn't have it write any code for me.
I just wanted to be upfront and honest about where AI was unsed in this project.

## Github Link ##
(Repository Link)[https://github.com/CMoore-06/Rocket-Launch-Explorer]