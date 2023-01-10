function shuffle(sugPlace) {
    sugPlace.sort(() => Math.random() - 0.5);
}

window.setTimeout(() => {
    location.reload();
}, 30000);

let sugPlace = [
    "New York",
    "London",
    "Paris",
    "Tokyo",
    "Berlin",
    "Madrid",
    "Rome",
    "Moscow",
    "Beijing",
    "Osaka",
    "Cairo",
    "Istanbul",
    "Toronto",
    "Kansas City",
    "Mesa",
    "Atlanta",
    "Virginia Beach",
    "Omaha",
    "Colorado Springs",
    "Raleigh",
    "Miami",
    "Cleveland",
    "Tulsa",
    "New Orleans",
    "Wichita",
    "Arlington",
    "Tampa",
    "Aurora",
    "Santa Ana",
    "St. Louis",
    "Pittsburgh",
    "Corpus Christi",
    " Riverside",
    "Cincinnati",
    "Lexington",
    "Anchorage",
    "Stockton",
    "Toledo",
    "St. Paul",
    "Newark",
    "Greensboro",
    "Buffalo",
    "Plano",
    "Lincoln",
    "Henderson",
    "Fort Wayne",
    "Jersey City",
    "St. Petersburg",
    "Chula Vista",
    "Norfolk",
    "Orlando",
    "Chandler",
    "Laredo",
    "Madison",
    "Winston-Salem",
    "Lubbock",
    "Baton Rouge",
    "Durham",
    "Garland",
    "Glendale",
    "Reno",
    "Hialeah",
    "Chesapeake",
    "Scottsdale",
    "Irving",
    "Fremont",
    "Irvine",
    "Birmingham",
    "Rochester",
    "Spokane",
    "Arlington",
    "Gilbert",
    " Arlington",
    "Montgomery",
    "Tacoma",
    "Grand Rapids",
    "Shreveport",
    "Amarillo",
    "Little Rock",
    "Augusta",
    "Jackson",
    "Tallahassee",
    "Mobile",
    "Providence",
    "Raleigh",
    "Riverside",
    " Dayton",
    "Anaheim",
    "Minneapolis",
    "Houston",
    "Tulsa",
    "Wichita",
    "Cleveland",
    "Tampa",
    "Aurora",
    "Santa Ana",
    "St. Louis",
    "Pittsburgh",
    "Corpus",
    "Riverside",
    "Cincinnati",
    "Lexington",
    "Anchorage",
    "Stockton",
    "Toledo",
    "St. Paul",
    "Newark",
];

shuffle(sugPlace);
sugPlace = sugPlace.slice(0, 16);
console.log(sugPlace);

export default sugPlace;
