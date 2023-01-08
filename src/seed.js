// seeding is a process of inserting dummy data
// data aayega parent component ke pass usko child component ko dena hai 
// passing this data is done through attributes (par isse attributes nhi bolte isse khete hai passing data through props (properties) ku props bolte)
// jsx = javascript expressions isshe hum {} mai likhte ha
const Seed = (function() {
    function generateVoteCount() {
      return Math.floor((Math.random() * 50) + 15);
    }
  
    const products = [
      {
        id: 1,
        title: 'Zenith',
        description: 'A short description about Product One which will describe what the product does!',
        url: '#',
        votes: generateVoteCount(),
        submittedAvatarUrl: 'images/avatars/daniel.jpg',
        productImageUrl: 'images/products/image-aqua.png'
      },
      {
        id: 2,
        title: 'Product Two',
        description: 'A short description about Product Two which will describe what the product does!',
        url: '#',
        votes: generateVoteCount(),
        submittedAvatarUrl: 'images/avatars/kristy.jpg',
        productImageUrl: 'images/products/image-rose.png'
      },
      {
        id: 3,
        title: 'Product Three',
        description: 'A short description about Product Three which will describe what the product does!',
        url: '#',
        votes: generateVoteCount(),
        submittedAvatarUrl: 'images/avatars/helen.jpg',
        productImageUrl: 'images/products/image-steel.png'
      },
      {
        id: 4,
        title: 'Product Four',
        description: 'A short description about Product Four which will describe what the product does!',
        url: '#',
        votes: generateVoteCount(),
        submittedAvatarUrl: 'images/avatars/jenny.jpg',
        productImageUrl: 'images/products/image-yellow.png'
      },
    ];
  
    return ({ products });
  }());
  
  export default Seed;