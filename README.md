# The-Haukai-Restaurant

The Haukai Restaurant project consists of a web site to attract both local and tourist customers to the restaurant.
The web site is made up of seven seperate pages (6 - visible, 1 - hidden):
* Home page - welcomes the visitor to the site and has a brief description of what the restaurant is about and has to offer.
* About Us page - introduce the owners and a brief history behind the restaurant.
* Menu page - shows the full menu contents along with a photo image of the dish.
* Gift Vouchers - an online form for the customer to fill out and submit to receive the requested gift vouchers via mail.
* Make Reservation page - online form for the customer to select a date and time they wish to make a booking for.
* Contact Us page - has an email message that the customer can fill out with any questions they may have and also a Google map for location.
This page also has a staff roster link which an employee can click to see the hours that they have been rostered on for.
* Roster page - includes a calendar which lists the hours each employee has been rostered on for.
This page is not visible in the main navigation links on any of the other pages.
The roster uses Google Calendar which is updated weekly, or ad-hoc by the restaurant owners/manager.

GitHub:

A master repository was set up in Github.com to store the website files - to share/view it with others.
Username: andyjamesgreaves
URL: https://github.com/andyjamesgreaves/The_Haukai_Restaurant.git



#Privacy Statement

The images included in the web pages have been uploaded from the internet which are public images that can be shared - so as not to impose on any copyright laws.
The purpose of the images was to give the visitor to the site an indication of what the restaurant has to offer, especially with the menu dishes, and not for further distribution.

The data collected from clients entering personal information in the forms in Gift Vouchers and Make Reservation are
stored in a MySQL database on the host-server - which are NOT shared and inaccessible to the public.
The data for the email entered by the user sending a message to The Haukai Restaurant in the Contact Us page - is also stored on the host-server in a MySQL database and is NOT shared or accessed by the public and is only used to repond via email to the sender of the message.



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

Images:

Images were also scaled to fit width size by using percentages:
e.g. width="10%" in HTML.
e.g. { width: 10%; } in CSS.
A maximum width was also incorporated so as not to allow the image to stretch too far beyond its original size and distort the image.
e.g. style = "max-width = "100%" in HTML
e.g. { max-width: 100%; } in CSS.
Also, wherever possible -  vector image file formats were used (as opposed to raster images that tend to distort when resized), so as not to skew the image too much when stretching according to screen size.
However, this was not possible for all images and so had to allow for width and height resizing accordingly to minimize distortion on different screen sizes.

After, using Chrome Dev Tool - Devices, the height made the images look 'stretched' on mobile devices with narrow screen widths.
Therefor, other responsive methods may be needed in order to allow for height with regards to width to give a better quality resized image for different devices.

Other methods:

*Adaptive images: 

The following is referencing to adaptive images - source: https://responsivedesign.is/resources/images/adaptive-images/:

Adaptive Images does a number of things depending on the scenario the script has to handle but here’s a basic overview of what happens when you load a page:

1. The HTML starts to load in the browser and a snippet of JS in the <head> writes a session cookie, storing the visitor’s screen size in pixels.
2. The browser then encounters an <img> tag and sends a request to the server for that image. It also sends the cookie, because that’s how browsers work.
3. Apache receives the request for the image and immediately has a look in the website’s.htaccess file, to see if there are any special instructions for serving files.
4. There are! The .htaccess says “Dear server, any request you get for a JPG, GIF, or PNG file please send to the adaptive-images.php file instead.”

The PHP file then does some intelligent thinking which can cover a number of scenario’s but I’ll illustrate one path that can happen:

1. The PHP file looks for a cookie and finds that the user has a maximum screen size of 480px.
2. It compares the cookie value with all $resolution sizes that were configured, and decides which matches best. In this case, an image maxing out at 480px wide.
3. It then has a look inside the /ai-cache/480/ folder to see if a rescaled image already exists.
4. We’ll pretend it doesn’t – the PHP then goes to the actual requested URI to find the original file.
5. It checks the image width. If that’s smaller than the user’s screen width it sends the image.
6. If it’s larger, the PHP creates a down-scaled copy and saves that into the /ai-cache/480/ folder ready for the next time it’s needed, and sends it to the user.

An example of this, including the php code, can be found at GitHub:
https://github.com/MattWilcox/Adaptive-Images


*Combine Images to CSS Sprites:

CSS sprites allow you to combine multiple images into a single file. 
Ordinary sprites are a fixed size, but 'responsive sprites' are able to be resized, for example using: max-width: 100%;




#Optimise page loading times

Techniques used for optimising page loading:

1. Implement a Content Delivery Network (CDN). 
This is where a collection of global servers 'share' a website’s static files, such as CSS or JavaScript, and they deliver from the server closest to the user’s 'physical location'.
(Discussed further under #HTTP caching and Content Delivery Networks).

2. Use adaptive images. 
Images take longer to load than text 
Using tools such as Picturefill or Adaptive Images on your website can save bandwidth and improve page speed for your site. 
Another option is to adopt new image formats like WebP and JPeg XR—this can help reduce image weight by twenty to fifty percent without sacrificing image quality.

3. HTTP Caching. 
Browser caching stores cache versions of static resources - a process that increases page speed and reduces server lag. When a user visits a page on your website, the cached version usually displays unless it has changed since it was last cached. 
Therefore, the browser saves a lot of requests to your server and improves load speed for the site.

4. Evaluate plugins. 
The more plugins a website has, the longer it takes to load. 
Poor or outdated plugins can slow down website performance dramatically - which could be fixed by removing plugins that duplicate functionality, or are out of date or are no longer used.

5. Combine images into CSS sprites.
CSS sprites allow you to combine multiple images into a single file. 
This reduces the number of HTTP requests, speeding up page loading. 
With several images on a page, you are forcing multiple roundtrips of the server to get all the resources secured, which slows down page speed. 
Sprites combine all background images on a page into one single image, which means all images appear when the main “sprite” loads. This reduces the chance of 'flickering' images and a smoother experience for the user.

6. Enable HTTP 'keep-alive' response headers. 
HTTP requests grab a single file, distribute and close - which ia a process that is not always fast, so 'keep-alive' allows the web browser and server to agree to use the same connection to grab and send multiple files. 
In this scenerio, the server holds the connection open while a user is on the site instead of opening a new connection with every request, easing the load for the processor, network and memory.

7. Compress content. 
You can compress your content significantly in order to improve your website performance, by removing unnecessary spaces and characters within the HTML, CSS and JavaScript code. 
Web servers such as Apache and IIS use the GZIP compression algorithm to do this automatically. 
There are other compressor services online that can perform this task.

8. Configure expire-date in headers. 
Website files are stored on the local computer so that the website loads faster the next time the user visits the site. 
There is an expiration date in the file header that determines how long these files will be stored on their computer, which is usually set to 24 hours by default. 
You can configure the expires header so that the files never time-out, or you can increase the expiration date so that it doesn’t impact your server and page load time.

9. Minify JavaScript and CSS code. 
By removing unnecessary line breaks, extra space, and so on, you will speed up parsing, downloading and executing by cutting bytes from the page. 
Tools like this CSS Minifier/Compressor can be very helpful in this department.

10. Review your hosting package. 
If all previous steps have been taken and the website is still loading slowly, you may want to consider a new hosting package. On a typical shared hosting account, you might be sharing server space with dozens of other companies, which can impact the speed of your website since a number of people are using the same server.

Refer - screenshot showing the network performance in Chrome's Developer Tools (Screenshots folder).


#HTTP caching and Content Delivery Networks

HTTP Caching:

Ensure that the users mobile browser uses local memory to cache resources in order to avoid unnecessary server requests - improves responsive page loading times.


Content Delivery Networks:

Content Delivery Network is a system of distributed servers (network) that deliver webpages and other Web content to a user based on the geographic locations of the user.
You may use a Content Delivery Network (CDN) such as Amazon Cloudfront to reduce the page load time. Access to a faster server near your user’s geographical location ensures faster loading time for your mobile site.


