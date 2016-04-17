var displayStatus = function (book) {
    var sStatus =  book.readingStatus  ? "Already read " : "You still need to read ";
    var sBook = "'" + book.title + "' by " + book.author + ".";
    console.log(sStatus + sBook);
};

function displayInformation() {
     // var library is defined, use it to print the information
    library.map(displayStatus);
};

// tail starts here
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();
