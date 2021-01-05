const users = [
  {
    id: '1',
    name: 'Kevin',
    email: 'kevin@example.com',
    age: 38,
  },
  {
    id: '2',
    name: 'Sara',
    email: 'sara@example.com',
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com',
  },
]

const posts = [
  {
    id: '10',
    title: 'Dinosaurs on Venus',
    body: 'Some speculate that there is a T-Rex on the planet.',
    published: true,
    author: '1',
  },
  {
    id: '20',
    title: 'Chicken Wing Theory',
    body: 'Yum = Crispyness time Spicyness squared.  y=cs^2.',
    published: true,
    author: '3',
  },
  {
    id: '30',
    title: 'Confidential',
    body: 'This post will self destruct in 10 seconds!.',
    published: false,
    author: '2',
  },
]

const comments = [
  {
    id: '102',
    text: 'Very cool!',
    author: '2',
    post: '20',
  },
  {
    id: '103',
    text: 'I doubt it.',
    author: '3',
    post: '30',
  },
  {
    id: '104',
    text: 'Agree completely',
    author: '1',
    post: '20',
  },
  {
    id: '105',
    text: 'No way this is real!',
    author: '2',
    post: '10',
  },
]

const db = {
  users,
  posts,
  comments,
}

export { db as default }
