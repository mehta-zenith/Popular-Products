const Seed = (function() {
    function generateVoteCount() {
      return Math.floor((Math.random() * 50) + 15);
    }
  
    const products = [
      {
        id: 1,
        title: 'Study Link',
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