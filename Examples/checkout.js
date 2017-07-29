/*
keep purchasing phones (hint: loop!) until you run out of money in your bank account.

You’ll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.

After you’ve calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted. 

Finally, check the amount against your bank account balance to see if you can afford it or not. 

//You should set up some constants for the “tax rate,” “phone price,” “accessory price,” and “spending threshold,” as well as a variable for your “bank account balance.” 

//You should define functions for calculating the tax and for formatting the price with a “$” and rounding to two decimal places. Bonus Challenge: Try to incorporate input into this program, perhaps with the //prompt(..) covered in “Input” . You may prompt the user
*/

class Checkout {

	constructor(SpendingThreshold, BankAccountTotal) {
		this.spendingThreshold = SpendingThreshold;
		this.bankAcountTotal = BankAccountTotal;
		this.TAX_RATE = 0.07;
		this.PHONE_RATE = 99.99;
		this.ACCESSORY_PRICE = 19.99;
		this.phoneCount = 0;
		this.accessoryCount = 0;
		this.purchaseTotal = 0;
	}

	purchasePhones() {
		while(this.purchaseTotal <= this.bankAcountTotal) {

			// check total if you buy one more phone
			// if less than bankAccount buy another phone
			if(this.purchaseTotal + this.calcItemTotal(this.PHONE_RATE) < this.bankAcountTotal) {
				this.purchaseTotal = this.purchaseTotal + this.calcItemTotal(this.PHONE_RATE);
				this.phoneCount++;	
			} else {
				this.displayPurchase();
				break;
			}
			// check if you want to buy an accessory:
			if (this.purchaseTotal <= this.spendingThreshold) {
				this.purchaseTotal = this.purchaseTotal + this.calcItemTotal(this.ACCESSORY_PRICE);
				this.accessoryCount++;
			}
		} // end while
	}

	calcItemTotal(itemCost) {
		let total = itemCost;
		total = total + total * this.TAX_RATE;
		return total;

	}

	displayPurchase() {
		console.log(`Phone Count: ${this.phoneCount} Accessory Count: ${this.accessoryCount} TOTAL: $${this.purchaseTotal.toFixed(2)}`);
	}
}

let buyPhones = new Checkout(500, 800);

buyPhones.purchasePhones();

