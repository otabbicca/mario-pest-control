var updateTotalAll = function() {
  var totalSubmit = document.querySelector("#total-all");
  var goombaTotal = parseInt(document.querySelector("#goomba-total").innerHTML || 0);
  var cheepTotal = parseInt(document.querySelector("#cheep-total").innerHTML || 0);
  var bobombTotal = parseInt(document.querySelector("#bobomb-total").innerHTML || 0);
  totalSubmit.innerHTML = goombaTotal + cheepTotal + bobombTotal;
}

var cheepBtn = document.querySelector("#cheep-submit");

cheepBtn.addEventListener("click", function() {
  var amountCheepElem = document.querySelector("#cheep-caught");
  var amountCheepValue = parseInt(amountCheepElem.value);

  var priceCheepElem = document.querySelector("#cheep-price");
  var priceCheepValue = parseInt(priceCheepElem.value);

  document.querySelector("#cheep-total").innerHTML = amountCheepValue * priceCheepValue;
  updateTotalAll();
});

var goombaBtn = document.querySelector("#goomba-submit");

goombaBtn.addEventListener("click", function() {
  var amountGoombaElem = document.querySelector("#goomba-caught");
  var amountGoombaValue = parseInt(amountGoombaElem.value);

  var priceGoombaElem = document.querySelector("#goomba-price");
  var priceGoombaValue = parseInt(priceGoombaElem.value);

  document.querySelector("#goomba-total").innerHTML = amountGoombaValue * priceGoombaValue;
  updateTotalAll();
});

var bobombBtn = document.querySelector("#bobomb-submit");

bobombBtn.addEventListener("click", function() {
  var amountBobombElem = document.querySelector("#bobomb-caught");
  var amountBobombValue = parseInt(amountBobombElem.value);

  var priceBobombElem = document.querySelector("#bobomb-price");
  var priceBobombValue = parseInt(priceBobombElem.value);

  document.querySelector("#bobomb-total").innerHTML = amountBobombValue * priceBobombValue;
  updateTotalAll();
});
