<a name="readme-top"></a>

<h1>Fullstack Social Network Project</h1>

<h2>💬 Introduction</h2>

<p>In this project, I'm bringing together everything I've learned so far to create a social network. Users will be able to register, log in, and make posts using the API I developed in the 2nd backend project.</p>

<h2>⚡ Requirements</h2>

<p>After carefully looking at the project requirements, I aim to build a frontend that can:</p>

<ul>
  <li>Allow users to register</li>
  <li>Enable users to log in</li>
  <li>Display and create posts</li>
  <li>Allow users to like/unlike posts</li>
  <li>Show user profile with personal data and posts</li>
  <li>Provide an option to log out</li>
</ul>

<h3>Project Essential Requirements:</h3>
<ul>
  <li>Git branches will be used, ensuring that the final repository has two branches: <code>main</code> (or <code>master</code>) and <code>develop</code>.</li>
  <li>The README presentation will be detailed and clear.</li>
</ul>

<section>
  <h2>Social Network Components</h2>
  <h3>Minimum Components:</h3>
  <ol>
    <li><strong>Register:</strong> Users can sign up.</li>
    <li><strong>Login:</strong> Users can log into their accounts.</li>
    <li><strong>Home:</strong> Displays all posts.</li>
    <li><strong>Posts:</strong> Shows individual posts.</li>
    <li><strong>Add Post:</strong> Allows users to create new posts.</li>
    <li><strong>Profile:</strong> Users can view their profile with personal data and posts.</li>
    <li><strong>Header:</strong> Navigational header.</li>
    <li><strong>Footer:</strong> Page footer.</li>
    <li><strong>React Router:</strong> I'll be implementing React Router for smooth navigation.
      <ul>
        <li><code>/home:</code> Home</li>
        <li><code>/login:</code> Login</li>
        <li><code>/register:</code> Register</li>
        <li><code>/profile:</code> User profile</li>
      </ul>
    </li>
  </ol>
  <h3>Implementation Guidelines</h3>
  <ul>
    <li>I'm planning to use Context for state management.</li>
    <li>Styling will be done using SASS.</li>
    <li>Design guidelines will be followed.</li>
    <li>To maintain clean and readable code, I'll ensure components stay under 400 lines and functions under 75 lines.</li>
  </ul>
  <h3>API Integration</h3>
  <p>
    To make API requests, I'll be installing the CORS module:
  </p>
  <ol>
    <li>In the backend repository: <code>npm i cors</code></li>
    <li>In <code>index.js:</code>
      <pre><code>const cors = require("cors");
app.use(cors());
      </code></pre>
    </li>
  </ol>
</section>

<section>
  <h2>Extras</h2>
  <p>To take the project to the next level, I'm considering adding these features:</p>
  <ul>
    <li>Edit and delete my own posts</li>
    <li>Comment on posts</li>
    <li>Deploy the frontend (e.g., Vercel, AWS)</li>
    <li>Allow users to follow and have followers</li>
    <li>Implement CRUD for comments</li>
    <li>Edit and delete my own comments</li>
    <li>Upload photos in posts or change my profile picture</li>
    <li>Like comments in posts</li>
    <li>Display the number of followers and following</li>
    <li>View followers and following list</li>
    <li>See liked posts in my profile</li>
    <li>Implement guards</li>
    <li>Ensure the design is responsive</li>
  </ul>
</section>

<h2>🔧 Built with</h2>

<p>
  <img alt="npm" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg">
  <img alt="React" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg">
  <img alt="SASS" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg">
  <img alt="JavaScript" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img alt="Postman" height="50" width="50" src="https://github.com/your-username/social-network-frontend/assets/postman-icon.png">
</p>

<h2>⬇️ Download</h2>

```bash
# Clone the repository
$ git clone <repository-url>

# Enter the directory
$ cd <project-directory>

# Install the dependencies
$ npm install

# Start the project
$ npm start
```
<section>
  <h2>🚀 Development</h2>
  <p>For the development of this project, I will be utilizing the following technologies:</p>
  <ul>
    <li><strong>React:</strong> Frontend library for building user interfaces.</li>
    <li><strong>React Router:</strong> For handling navigation within the application.</li>
    <li><strong>SASS:</strong> Syntactically Awesome Stylesheets for efficient and maintainable styling.</li>
    <li><strong>Git:</strong> Version control system for collaborative development.</li>
    <li><strong>Node.js:</strong> JavaScript runtime for server-side development.</li>
  </ul>
  <p>During the development process, I will apply the following techniques:</p>
  <ul>
    <li><strong>Context API:</strong> For state management and sharing data across components.</li>
    <li><strong>React Hooks:</strong> Utilizing hooks like useState, useEffect, useContext, and useReducer for managing state and handling side effects.</li>
  </ul>
  <p>The project will rely on the following dependencies:</p>
  <ul>
    <li><strong>react-router-dom:</strong> To enable routing in the React application.</li>
    <li><strong>cors:</strong> For handling Cross-Origin Resource Sharing in API requests.</li>
    <li><strong>axios:</strong> For making HTTP requests to the backend.</li>
  </ul>
  <p>React hooks will be crucial for managing state and lifecycle events. The primary hooks to be used include:</p>
  <ul>
    <li><strong>useState:</strong> For managing component state.</li>
    <li><strong>useEffect:</strong> For handling side effects, such as data fetching.</li>
    <li><strong>useContext:</strong> For accessing the context data globally.</li>
    <li><strong>useReducer:</strong> For managing complex state logic in a more organized way.</li>
  </ul>
</section>
<section>
  <h2>🤝 Contributing</h2>
  <p>Contributions are welcome! Fork the repository, create a feature branch, commit your changes, and open a pull request. Don't forget to show your support by giving the project a star! Thank you!</p>
  <ol>
    <li>Fork SocialNetwork_Backend_Project</li>
    <li>Create your Feature Branch (<code>git checkout -b feature/YourName</code>)</li>
    <li>Commit your Changes (<code>git commit -m 'Add some YourName'</code>)</li>
    <li>Push to the Branch (<code>git push origin feature/YourName</code>)</li>
    <li>Open a Pull Request</li>
  </ol>
</section>
<section>
  <h2>🖊️ License</h2>
  <p>This project is under the license of <a href="https://github.com/demispreviotto">Demis Previotto</a>.</p>
</section>
<section>
  <h2>⭐️ Reach me!</h2>
  <p>Demis Previotto</p>
  <a href="https://www.linkedin.com/in/demispreviotto/" target="_blank">
    <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" alt="LinkedIn">
  </a>
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
</section>
