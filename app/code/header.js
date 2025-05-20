const title = document.createElement("h1");
title.textContent = 'Library';
header.appendChild(title);

const search = document.createElement("div");

header.appendChild(search);


/* Add search input and button */
const searchInput = document.createElement("input");
searchInput.type = "text";
search.appendChild(searchInput);

const searchButton = document.createElement("button");
search.appendChild(searchButton);
