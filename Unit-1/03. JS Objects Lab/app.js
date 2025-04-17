const album1 = {
    title: 'Talking Heads',
    albumDetails: {
      released: 'September 16, 1977',
      label: 'Sire',
      formats: ['LP']
    }
  };
  
  // Exercise 1:  Update the title property of album1 from 'Talking Heads' 
  // to 'Talking Heads - 77', then assign that property to a variable named title
  
  const title = album1.title = 'Talking Heads - 77'

  
  // Exercise 2: Assign the string 'Sire' from album1 to a variable named label
  
  
  const album2 = {
    title: 'More Songs About Buildings and Food',
    albumDetails: {
      released: 'July 14, 1978',
      label: 'Sire',
      formats: ['LP', '8-track']
    }
  };
  
  const album3 = {
    title: 'Fear of Music',
    albumDetails: {
      released: 'August 2, 1979',
      label: 'Sire',
      formats: ['Cassette']
    }
  };

const label = album1.albumDetails.label
  
  // Exercise 3: Accessing the string 'LP' from album2's formats array,
  //  add it to the end of album3's formats array.
  
  album3.albumDetails.formats.push(album2.albumDetails.formats[0]);
  
  
  // Exercise 4:  Update the current released property of album3 from 
  // 'August 2, 1979' to 'August 3, 1979'
  
  
  
  
  const album4 = {
    title: 'Remain in Light',
    albumDetails: {
      released: 'October 8, 1980',
      formats: ['Cassette', 'LP']
    }
  };

  album3.albumDetails.released = 'August 3, 1979';
  
  // Exercise 5:  Add a property named label with the value 'Sire' to 
  // album4's albumDetails property
  
  album4.albumDetails.label = label;
  
  
  const album5 = {
    title: 'Little Creatures',
    albumDetails: {
      released: 'June 10, 1985',
      labels: ['Sire', 'emi'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  

  // Exercise 6:  Update the value 'emi' within album5's labels array to 'EMI'
  
  album5.albumDetails.labels[1] = 'EMI';
  
  
  const album6 = {
    title: 'True Stories',
    albumDetails: {
      released: 'October 7, 1986',
      labels: ['Sire, EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 7:  Assign album6's formats array to a variable named formats
  
  const formats = album6.albumDetails.formats
  
  
  const album7 = {
    title: 'Naked',
    albumDetails: {
      released: 'March 15, 1988',
      labels: ['Sire', 'EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  const talkingHeadsAlbums = [
    album1,
    album2,
    album3,
    album4,
    album5,
    album6,
    album7
  ];
  
  // Exercise 8:  Using the talkingHeadsAlbums array, assign album5's 
  // labels property to a variable named labels
  
  const labels = talkingHeadsAlbums[4].albumDetails.labels;
  
  
  // Exercise 9:  Using the talkingHeadsAlbums array, assign album7's released 
  // property to album6's released property
  
  talkingHeadsAlbums[5].albumDetails.released = talkingHeadsAlbums[6].albumDetails.released;
  
  
  // Exercise 10:  Using the pre-defined variable named albumIdx below, 
  // assign the albumDetails object of the album located within the 
  // talkingHeadsAlbums array at the index represented by the value of albumIdx 
  // to a variable named albumDetails
  
  let albumIdx = 4;

  const albumDetails = talkingHeadsAlbums[albumIdx].albumDetails;
  
  
  
  
  /********** These console.logs generate the answer key below **********/
  
  console.log('Exercise 1:', title);
  console.log('Exercise 2:', label);
  console.log('Exercise 3:', album3.albumDetails.formats[1]);
  console.log('Exercise 4:', album3.albumDetails.released);
  console.log('Exercise 5:', album4.albumDetails.label);
  console.log('Exercise 6:', album5.albumDetails.labels[1]);
  console.log('Exercise 7:', formats);
  console.log('Exercise 8:', labels);
  console.log('Exercise 9:', talkingHeadsAlbums[5].albumDetails.released);
  console.log('Exercise 10:', albumDetails);