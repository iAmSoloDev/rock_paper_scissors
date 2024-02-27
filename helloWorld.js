// const helloWorld = function() {
//     return 'Hello, World!'
//   };
  
//   module.exports = helloWorld;

  const container = document.querySelector('#container');

const content = document.createElement('div');
const paragraph = document.createElement('p')
const subHead = document.createElement('h3')

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
paragraph.textContent = 'Hey I’m red!';
subHead.textContent = 'I’m a blue h3!';

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(subHead);