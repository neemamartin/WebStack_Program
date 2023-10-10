const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'posts', 'post.txt'), 'My_First_Blog_Post', (err) => {
  if (err) {
    throw err;
  }
  console.log('file created');
});