<?php 
	include 'header.php';
?>
	<link rel="stylesheet" type="text/css" href="css/contact.css" />
	<script type="text/javascript" src="js/contact.js"></script>
<?php 
	include 'nav.php';
?>
<form id="contactForm" action"#">
			<fieldset>
				<legend>Basic Information</legend>
				<ul id="name">
					<li><label for="txtFirstName">First name: </label><input id="txtFirstName" type="text" placeholder="First Name" required /></li>
					<li><label for="txtLastName">Last name: </label><input id="txtLastName" type="text" placeholder="Last Name" required /></li>
					<li><label for="txtEmail">Email: </label><input id="txtEmail" type="email" placeholder="Email" required /></li>
					<li><label>Age: </label>
						<ul>
							<li><input id="rdoAgeUnder18" name="rdoAge" type="radio" /> Under 1</li>
							<li><input id="rdoAge18-21" name="rdoAge" type="radio" /> 18-21</li>
							<li><input id="rdoAge22-30" name="rdoAge" type="radio" /> 22-30</li>
							<li><input id="rdoAge31-45" name="rdoAge" type="radio" /> 31-45</li>
							<li><input id="rdoAge46-60" name="rdoAge" type="radio" /> 46-60</li>
							<li><input id="rdoAge61Over" name="rdoage" type="radio" /> 61 or over</li>
						</ul>
					</li>
				</ul>
			</fieldset>
			
			<fieldset>
				<legend>Address</legend>
				<ul id="address">
					<li><label for="txtStreet">Street address:</label><input id="txtStreet" type="text"placeholder="Street address" /></li>
					<li><label for="txtCity">City: </label> <input id="txtCity" type="text" placeholder="City" /></li>
					<li><label for="selState">State: </label>
						<select id="selState">
							<option value="" name="state">Select state</option>
							<option value="Alabama" name="state">Alabama</option>
							<option value="Alaska" name="state">Alaska</option>
							<option value="Alaska" name="state">Arizona</option>
						</select>
					</li>
					<li><label for="txtZip">Zip code: </label> <input id="txtZip" type="text" pattern="^[0-9]{5}$" placeholder="Zip code" /></li>
				</ul>
			</fieldset>
			
			<fieldset>
				<legend>Your Message:</legend>
					<ul id="message">
						<li><label>Message:</label><textarea id="txtMessage" required></textarea></li>
					</ul>
			</fieldset>
			
			<fieldset>
				<legend>Subscribe?</legend>
					<ul id="subscribe">
						<li><input type="checkbox" value="Newsletter" name="subscribe" id="chkNewsletter" /> Subscribe to the Fitsburg Observatory Newsletter</li>
						<li><input type="checkbox" value="Deals" name="subscribe" id="chkNewsletter" /> Receive coupons</li>
						<li><input type="checkbox" value="New Member" name="subscribe" id="chkNewsletter" /> Register me as a new member</li>
					</ul>
			</fieldset>
			
			<input type="submit" id="contactSubmit" value="Submit" /><input type="reset" id="contactReset" value="Reset" />
		</form>
<?php 
include 'footer.php';
?>