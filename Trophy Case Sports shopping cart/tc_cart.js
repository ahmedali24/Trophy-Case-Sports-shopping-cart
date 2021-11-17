"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Ahmed Ali
   Date:   11/16/21
   
   Filename: tc_cart.js
	
*/
var orderTotal = 0;

var cartHTML = "<table>";
cartHTML += "<tr>";
cartHTML += "<th>Item</th>";
cartHTML += "<th>Description</th>";
cartHTML += "<th>Price</th>";
cartHTML += "<th>Qty</th>";
cartHTML += "<th>Total</th>";
cartHTML += "</tr>";

for (var i = 0; i < 4; i++) {
  cartHTML += "<tr>";
  cartHTML += "<td>";
  cartHTML += "<img src='tc_" + item[i] + ".png' alt='item' />";
  cartHTML += "</td>";

  cartHTML += "<td>";
  cartHTML += itemDescription[i];
  cartHTML += "</td>";

  cartHTML += "<td>";
  cartHTML += "$" + itemPrice[i];
  cartHTML += "</td>";

  cartHTML += "<td>";
  cartHTML += itemQty[i];
  cartHTML += "</td>";

  var itemCost = itemPrice[i] * itemQty[i];

  cartHTML += "<td>";
  cartHTML += "$" + itemCost;

  orderTotal = itemCost;
}

cartHTML += "<tr>";
cartHTML += "<td colspan='4'>Subtotal<td>";
cartHTML += "$" + orderTotal;
cartHTML += "</tr>";
cartHTML += "</table>";

document.getElementById("cart").innerHTML = cartHTML;
