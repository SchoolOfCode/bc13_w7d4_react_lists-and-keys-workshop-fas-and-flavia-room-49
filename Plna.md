// Plan
Task 1
In the `<Main/>` component (src/components/Main), use the map() method to loop over the the 'posts' state. For each post in the array, return a `<Post/>` component.

- sample posts from data
- map through each post using the .map method
- samplePosts.map(function({title}){ <Post postTitle={title}> })

Task 2
Set the `key` prop for each `<Post/>` component as the `postId` property contained within the post object.

const samplePosts = [
  {
    postId: 1,
    title: 'One Of My Favourites',
    date: '12/10/20',
    author: 'Bobby Nest',
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link:
        'https://i.pinimg.com/originals/71/a0/5f/71a05f47b8f449fc231881416bf4bc66.jpg',
      alt: 'A blue-grey pigeon turns to face the camera.',
    },
  },
  {
    postId: 2,
    title: 'Look At This Marvellous Pigeon',
    date: '14/10/20',
    author: 'Lucy Wing',
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link: 'https://i.redd.it/u6xrjmzbrf321.png',
      alt: 'A close up shot of a pigeon with glorious ruffles.',
    },
  },
  {
    postId: 3,
    title: 'A Lovely Pidgeon',
    date: '16/10/20',
    author: 'Mohammad Feather',
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link:
        'https://image.freepik.com/free-photo/pidgeon-waters-edge_19485-37038.jpg',
      alt:
        'A pigeon with a spectacular green plumage stares thoughtfully into the distance.',
    },
  },
];

## Task 5

Use the information to build the `<Post/>` component using HTML elements in JSX. Choose the most semantic html tag for each property that makes up the post. Leave the `highlights` and `image` property to last.

Run `npm start` in your console to test whether your code is displaying correctly. You should see three posts for the price of one! Your map() method and `<Post/>` component are working together to generate a post for each item in the `posts` state.

For the `highlights` property of the post object, use the map() method again to generate an `<li>` element for each item in the array. For each `<li>` element, set the key to be the index of the item in the `highlights` array.

The `image` property of the post object is itself an object - how can you use this knowledge to populate an img tag with both a `src` and `alt` attribute?

//for the highlights property of the post object, 

//use the map() method again to generate an `<li>` element for each item in the array

// 