1. First you must be a registered merchant with Bringg http://app.bringg.com
2. Create a new public task form https://app.bringg.com/#/merchant/merchant-config/ ![Adding the public task form](https://github.com/bringg/bringg-button/blob/master/howtoimages/add%20new%20public%20task%20form.png)
3. Copy the public task form link (should start with http://form.bringg.com/#/?uuid=) we will use it soon.
4. Add the bringg-button dependencies to your site 
```
    <!-- The css for the button -->
    <link rel="stylesheet" href="bringg-button.css"/>
    <!-- The code for the button -->
    <script src="bringg-button.js"></script>
```
6. Add a onload callback to body of the product page and initialize the BringgButton with the id of button you 
```
function handleOnLoad(){
    BringgButton('bringg-order-button');
}
...
 <body onLoad="handleOnLoad()"
...

...
<button id="bringg-order-button" data-href="YOUR PUBLICK TASK FORM LINK GOES HERE"></button>
...
```
7. Paste the public task form url to the data-href property you can see above

Test that the button is working by clicking on it and creating a order with it.
