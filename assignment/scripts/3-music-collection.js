console.log('***** Music Collection *****')


const collection = [];


function addToCollection(title,artist,yearPublished){
    let album = {name:title, artistName:artist, year:yearPublished};
    collection.push(album);
    return collection;
}


console.log(addToCollection('One Dance', 'Drake', '2016'));
console.log(addToCollection('goosebumps', 'Travis Scott', '2016'));
console.log(addToCollection('Rose Golden', 'Kid Cudi', '2016'));
console.log(addToCollection('Mr. Roboto', 'Styx', '1983'));
console.log(addToCollection('In the Air Tonight', 'Phil Collins', '1981'));
console.log(addToCollection('Juicy', 'Biggie Smalls', '1994'));
console.log(`Full Album: ${collection}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////

function showCollection(arr){
    console.log(arr.length);
    for(let i = 0; i < arr.length; i++){
        console.log(`${arr[i].name} by ${arr[i].artistName} published in ${arr[i].year}`);
    }
}


showCollection(collection);


/////////////////////////////////////////////////////////////////////////////////////////////////////


function findByArtist(artist){
    let sameArtist = [];
    for(let i=0; i < collection.length; i++){
        if(artist === collection[i].artistName){
            sameArtist.push(collection[i]);
        }
    }
    return sameArtist;
}


console.log(findByArtist("Kid Cudi"));
console.log(findByArtist("Styx"));
console.log(findByArtist("taylor swift"));