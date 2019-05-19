# The-Haukai-Restaurant

The Haukai Restaurant project consists of a web site to attract both local and tourist customers to the restaurant.
The web site is made up of seven seperate pages:
* Home page - welcomes the visitor to the site and has a brief description of what the restaurant is about and has to offer.
* Contact Us page - introduce the owners and a brief history behind the restaurant.
* Menu page - shows the full menu contents along with a photo image of the dish.
* Gift Vouchers - an online form for the customer to fill out and submit to receive the requested gift vouchers via mail.
* Make Reservation page - online form for the customer to select a date and time they wish to make a booking for.
* Contact Us page - has an email message that the customer can fill out with any questions they may have and also a Google map for location.
This page also has a staff roster link which an employee can click to see the hours that they have been rostered on for.
* Roster page - includes a calendar which lists the hours each employee has been rostered on for.
This page is not visible in the main navigation links on any of the other pages.
The roster uses Google Calendar which is updated weekly, or ad-hoc by the restaurant owners.




#Privacy Statement

The images included in the web pages have been uploaded from the internet which are public images that can be shared - so as not to impose on any copyright laws for distribution.
The purpose of the images was to give the visitor to the site an indication of what the restaurant has to offer, especially with the menu dishes.



#Accessibility guidelines

When considering accessibilty issues for visitors to the site - the layout was designed for ease of reading and easy to understand the content.
To assist in accessibility - used appropriate font size and use of color with appropriate backgrond colors to make text more easily readable and understandable for the user.
Also, the page layouts were made easy to navigate to obtain any required information.
To check for any accessibility issues we used the online app - Web Accessibity Checker (AChecker).
Screenshots of the results for each individual html page are stored in a seperate folder named Screenshots.

AChecker Results (Refer screenshots):

* Index.html - 10 known problems, 80 potential problems.
* About Us.html - 7 known problems, 93 potential problems.
* Menu.html - 8 known problems, 218 potential problems.
* Gift Vouchers.html - 32 known problems, 116 potential problems.
* Bookings.html - 21 known problems, 113 potential problems.
* Contact Us.html - 13 known problems, 111 potential problems.
* Roster.html - 2 known problems, 83 potential problems.

Changes to known problems:

Index.html - 10 known problems.
(Ref 1.1 check 1) - Include an alt text element to every photo image with a brief description of the image.
(Ref 2.4 check 116)- Replace <b></b> tags with <strong></strong> tags for bold fonts.
(Ref 2.4 check 174) - Anchor contains no text <a href="https://www.emojilib.com"></a> so deleted this link because it is not necessary.
(Ref 2.4 check 37)- Header nesting, had <h1></h1> followed by <h3></h3>, so changed to <h2></h2>.
(Ref 3.1 check 48) - Document language not identified (eng - English).
Included eng in the html tag <html lang="eng">.
All known accessibility problems addressed and resolved.

About Us.html - 7 known problems.
Included an alt text element to every photo image with a brief description of the image.
(Ref 2.4 check 116)- Replace <b></b> tags with <strong></strong> tags for bold fonts.
(Ref 3.1 check 48, 49) - Document language not identified (eng - English).
Included eng in the html tag <html lang="eng">.


Menu.html - 8 known problems.
Included an alt text element to every photo image with a brief description of the image.
(Ref 2.4 check 116)- Replace <b></b> tags with <strong></strong> tags for bold fonts.
(Ref 3.1 check 48, 49) - Document language not identified (eng - English).
Included eng in the html tag <html lang="eng">.
(Ref 4.1 check 185) - id attribute is not unique.
Had an unwanted copy of a previous line for the background image id="bg-image", deleted line.


Gift Vouchers.html - 32 known problems.
Included an alt text element to every photo image with a brief description of the image.
(Ref 1.4 check 116)- Replace <b></b> tags with <strong></strong> tags for bold fonts.
(Ref 3.1 check 48, 49) - Document language not identified (eng - English).
Included eng in the html tag <html lang="eng">.
(Ref 3.1 check 57) - input element missing an associated label.
Added a for="..." with its associated input field e.g. <label for="firstname">First Name:</label> <input name="firstname>...</input>.
(Ref 3.3 check 188) - Label text missing.
Line 79 and 80 are input type="submit" type="reset" and therefore do not require labels - so no changes needed (but will still show up on AChecker as 2 known problems).


Bookings.html - 21 known problems.
Included an alt text element to every photo image with a brief description of the image.1
(Ref 1.4 check 116)- Replace <b></b> tags with <strong></strong> tags for bold fonts.
(Ref 3.1 check 48, 49) - Document language not identified (eng - English).
Included eng in the html tag <html lang="eng">.
(Ref 3.1 check 57) - input element missing an associated label.
Added a for="..." with its associated input field e.g. <label for="firstname">First Name:</label> <input name="firstname>...</input>.
(Ref 3.3 check 188) - Label text missing.
Line 99 and 100 are input type="submit" type="reset" and therefore do not require labels - so no changes needed (but will still show up on AChecker as 2 known problems).


Contact Us.html - 13 known problems.
Included an alt text element to every photo image with a brief description of the image.
(Ref 1.3 check 95) - textarea element missing associated label.
Added a for="textArea" in the label tag associated with the text area.
(Ref 1.4 check 116)- Replace <b></b> tags with <strong></strong> tags for bold fonts.
(Ref 2.4 check 37)- Header nesting, had <h1></h1> followed by <h3></h3>, so changed to <h2></h2>.
(Ref 3.1 check 48, 49) - Document language not identified (eng - English).
Included eng in the html tag <html lang="eng">.
(Ref 3.3 check 188) - Label text missing.
Lines 59 and 60 are input type="submit" type="reset" and therefore do not require labels - so no changes needed (but will still show up on AChecker as 2 known problems).



Roster.html - 2 known problems.
Included an alt text element to every photo image with a brief description of the image.
(Ref 3.1 check 48, 49) - Document language not identified (eng - English).
Included eng in the html tag <html lang="eng">.




Changes to potential problems:

Most of these included the alt texts for images may require a longer description or that some images may be decorative, or may not correctly contain the same information as the image.
The alt text descriptions were adequate and therefore would have no affect on accessibility, so no changes were necessary.
Other potential problems were assessed as being irrelevant to any accessibility issues and could be ignored without limiting accessibility.
Therefor, only the known problems were addressed.




#Responsive Design

The design of the page layout utilises CSS with respect to screen size and dimensions in order to accomodate for different screen sizes on different devices.
Reduced the use of absolute sizes with regards to the width of the screen sizes on different devices (viewport).
Setting the viewport:
<meta name="viewport" content="width=device-width, initial-scale=1.0"> within the <head></head> tags on each page.
For contents using containers and panels - width was measured as a percentage (rather than pixels) of the screen width, to allow for different screen widths.
Instead of using absolute sizing of text fonts to cater for different screen sizes - replaced pixels with vw (viewport width) to optimize text for reading.
This was included in the HTML code and CSS:
e.g. style = "font-size: 10vw" in HTML.
e.g. { font-size: 10vw; } in CSS.
(where 1 vw = 1% of the viewport width).
Images were also scaled to fit width size by using percentages:
e.g. width="10%" in HTML.
e.g. { width: 10%; } in CSS.
A maximum width was also incorporated so as not to allow the image to stretch too far beyond its original size and distort the image.
e.g. style = "max-width = "100%" in HTML
e.g. { max-width: 100%; } in CSS.
Also, wherever possible -  vector image file formats were used (as opposed to raster images that tend to distort when resized), so as not to skew the image too much when stretching according to screen size.
However, this was not possible for all images and so had to allow for width and height resizing accordingly to minimize distortion on different screen sizes.
To cater for devices with screen width less than 800 pixels - used media query to define different widths for different screen sizes using the following code in CSS:
@media screen and (max-width: 800px) {
	.main-container {
		width: 100%;
	}
	#panel1 {
		width: 95%;
	}
	#panel2 {
		visibility: hidden;
	}
}
This hides the panel2 container from the page when the screen is less than 800px (This panel is only decorative and not informative).



#HTTP caching and Content Delivery Networks

These can further improve responsiveness.


