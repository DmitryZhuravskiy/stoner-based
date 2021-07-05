<h1><b>Stoner-Based</b></h1>

Presentation - https://dmitryzhuravskiy.github.io/stoner-based/ 
<br /><br />

<h2><b>Startup Guide</b></h2>
<b>1.</b> git clone https://github.com/DmitryZhuravskiy/stoner-based.git <i> - clone repository;</i><br />
<b>2.</b> cd ./stoner-based <i>- go to the folder with the local version;</i><br />
<b>3.</b> npm install <i> - install dependencies;</i><br />
<b>4.</b> npm start <i> - to view the local version in the browser at http://localhost:3000/ ;</i><br />
<b>5.</b> <i>или</i> npm run build <i> to build the project;</i><br />
<br /><br />
<h2><b>Description of the project</b></h2>

It is a part of the functionality of a music reference site. I took stoner as the theme and implemented the following functionality:
on the general page, you can see all available releases. They are sorted from newest to oldest. The page has pagination with a choice of the number of albums on the page. Works correctly for counting the number of pages for the number of albums on each page, but there are drawbacks in displaying the correct number on each page. When you click on the name of the album, go to the page with specific information on the album, when you click on the artist/group, go to the page of the artist/group indicating the discography;
on the "Discography" page a selection of the group's albums sorted from new to old;
on the "Album" page, the country of the band members, the tracklist with the duration of each track, the composition, and reviews, taken by me from Bandcamp, are indicated;
For convenience, in the header I returned to the main page through the "Main Page", and in the footer, I indicated some of my contacts. The project is educational, instead of the backend file base.json, from which all information is taken for display. I did it myself, when deploying to GitHub pages I had to redo the links to pictures from those located in the project to images from open access. 
 The project uses react, react-router-dom and react-redux technologies.


<img src="https://github.com/DmitryZhuravskiy/stoner-based/raw/main/public/images/stoner-based--1.jpg "/>
<b>Album selection page</b>
<br /><br /><br /><br /><br />

<img src="https://github.com/DmitryZhuravskiy/stoner-based/raw/main/public/images/stoner-based--2.jpg "/>
<b>... continuation</b>
<br /><br /><br /><br /><br />

<img src="https://github.com/DmitryZhuravskiy/stoner-based/raw/main/public/images/stoner-based--3.jpg "/>
<b>Selected Artist Discography Page</b>
<br /><br /><br /><br /><br />

<img src="https://github.com/DmitryZhuravskiy/stoner-based/raw/main/public/images/stoner-based--4.jpg "/>
<b>Information page for the selected album</b>
<br /><br /><br /><br /><br />

<img src="https://github.com/DmitryZhuravskiy/stoner-based/raw/main/public/images/stoner-based--5.jpg "/>
<b>... its end</b>
<br />
