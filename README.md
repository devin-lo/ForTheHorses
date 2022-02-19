# ForTheHorses
Animal rescue app for yuHacks
Overview of the project 

The goal of this project was to speed up the process of matching animals in rescue centres with potential forever homes by incorporating information gathered by the rescue and adopter during the sign-up process that identifies potential animal adopters who meet criteria and characteristics that the animals in need of forever homes require.

We picked the New Hacker track since we are all new to hackathons and, while we wanted to push ourselves, we also recognised that balancing the workload in the time allotted would be difficult.


Getting Started 
The application was built utilising Node.js and the Express framework. There were some concerns with file permissions throughout the setup process, but these were finally addressed. The biggest coding problem here was establishing the proper page routing. It was also critical to keep everyone on the same page so that they understood the steps involved in cloning the project from github, as little changes in the code may result in major dependency issues when executed. Nodemon was used as our local server so that any modifications could be viewed right away. Overall, we collaborated via github.

Home Page + Pet Search 
This is the home page, often known as the index page. Customers will get their initial impression of our firm on this page. Our purpose is to bring people together with pets in need, and to spread love amongst them. The charming artwork we selected demonstrates people's sympathy for animals and engages potential clients with this adorable picture. Those two icons represent the two most common pet species, and they take us straight to the search page, which already has the right filters in place thanks to query strings used to toggle settings on the search page.
The search feature is one of the most important aspects of our software, and it was a significant challenge for us to overcome. We opted to save all of the data in a JSON file to imitate reading from a huge database. We had to build a file with the appropriate attribute structure for each pet, then construct JavaScript code that reads the file with these exact properties and makes related HTML objects to present the data in a tabular style.

Pet Search (pt 2)
Users may search for cats, dogs, and other animals on the search page. When a user searches for a certain species, the function iterates over the array in the JSON file and returns all entries that fit that breed, along with much additional information about that individual dogs that the Adopter may use to contact the shelter like the email and the shelter ID. Logging in allows organisations to control their pets in the database.

Login pages + Registration pages 
The user logs in here, and if they are a new user, they are led to a registration page, where they must submit the necessary information to sign up.
The organisation login works in a similar fashion, with new representatives being requested to register a new account. Regrettably, due to a lack of resources, the actual registration and login checks have yet to be implemented.


Org Dash 
After logging in, animal shelter representatives would see this screen. On the left, you'll see the shelter's current active listings. Using the same code that runs the search results page, this reads the JSON database file and displays the information. There are four buttons in the bottom right corner for adding, viewing, editing, and removing listings. The information about the organisation is presented on the right hand side; due to time constraints, this has been hard coded, and the Edit link is not functional.

Add a Pet 
Each rescue organisation generates a unique profile for each animal in their care that is available for adoption, which can be accessed through the organisation dashboard. When a potential adopter creates their profile and searches for potential matches, the specifications selected on the adopter's end will look for correlations between the animals the rescue has available and bring up a list of potential matches, depending on the species of animal (dog, cat, bird, etc.) the rescue documents the data that they have collected on that animal in such a way that when a potential adopter creates their profile and searches for potential matches, the specifications selected on the adopter's end will look for correlations.

About Us + Contact Us 
The about us page provides insight into the attitude we had when developing the app. We want to make something that will help those who are looking for a new pet. We also intend to make the process of finding potential adopters easier for adoption agencies. The About Us page was created with the ejs template, which employs html and CSS styling. Although the contact us website has a form for users to submit any queries they may have, the actual submission mechanism has not been created due to time restrictions.

Conclusion 
Overall, this project provided us with significant experience in working with popular environments and frameworks such as Node.js and Express. We were ecstatic to be able to contribute to the ideals of social empowerment. We hope you will find our online application useful in the future.
