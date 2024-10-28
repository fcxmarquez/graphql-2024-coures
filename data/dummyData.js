const usersData = [
  {
    id: '1',
    name: 'John Doe',
    age: 30,
    profession: 'Archaeologist'
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 25,
    profession: 'Astronomer'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    age: 35,
    profession: 'Pastry Chef'
  },
  {
    id: '4',
    name: 'Alice Brown',
    age: 28,
    profession: 'Wildlife Photographer'
  },
  {
    id: '5',
    name: 'Charlie Davis',
    age: 40,
    profession: 'Ethical Hacker'
  },
  {
    id: '6',
    name: 'Eva Wilson',
    age: 32,
    profession: 'Urban Planner'
  },
  {
    id: '7',
    name: 'Frank Miller',
    age: 45,
    profession: 'Renewable Energy Consultant'
  },
  {
    id: '8',
    name: 'Grace Lee',
    age: 29,
    profession: 'Forensic Psychologist'
  }
];

const hobbiesData = [
  {
    id: '1',
    title: 'Photography',
    description: 'Capturing moments through the lens'
  },
  {
    id: '2',
    title: 'Gardening',
    description: 'Cultivating plants and creating beautiful landscapes'
  },
  {
    id: '3',
    title: 'Cooking',
    description: 'Exploring culinary arts and creating delicious dishes'
  },
  {
    id: '4',
    title: 'Painting',
    description: 'Expressing creativity through colors and brushstrokes'
  },
  {
    id: '5',
    title: 'Hiking',
    description: 'Exploring nature trails and enjoying outdoor adventures'
  },
  {
    id: '6',
    title: 'Reading',
    description: 'Immersing in literature and expanding knowledge'
  },
  {
    id: '7',
    title: 'Yoga',
    description: 'Practicing mindfulness and improving physical flexibility'
  },
  {
    id: '8',
    title: 'Woodworking',
    description: 'Crafting and building with wood'
  }
];

const postsData = [
  {
    id: '1',
    comment: 'Great article on machine learning!',
    userId: '3'
  },
  {
    id: '2',
    comment: 'Just finished a 5K run. Feeling accomplished!',
    userId: '1'
  },
  {
    id: '3',
    comment: "New recipe alert: Vegan lasagna. It's delicious!",
    userId: '5'
  },
  {
    id: '4',
    comment: 'Excited about the upcoming tech conference!',
    userId: '2'
  },
  {
    id: '5',
    comment: 'Beautiful sunset at the beach today.',
    userId: '7'
  },
  {
    id: '6',
    comment: 'Just started learning GraphQL. Any tips?',
    userId: '4'
  },
  {
    id: '7',
    comment: 'Book recommendation: "Atomic Habits" by James Clear',
    userId: '8'
  },
  {
    id: '8',
    comment: 'Working on a new photography project. Stay tuned!',
    userId: '6'
  }
];

const userHobbiesData = [
  {
    userId: '1',
    hobbyId: '1'
  },
  {
    userId: '1',
    hobbyId: '5'
  },
  {
    userId: '2',
    hobbyId: '6'
  },
  {
    userId: '3',
    hobbyId: '3'
  },
  {
    userId: '4',
    hobbyId: '1'
  },
  {
    userId: '5',
    hobbyId: '7'
  },
  {
    userId: '5',
    hobbyId: '6'
  }
];

module.exports = {
  usersData,
  hobbiesData,
  postsData,
  userHobbiesData
};
