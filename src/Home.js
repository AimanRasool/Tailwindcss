import React from 'react';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


// Header Component with Navigation
const Header = () => {
  return (
    <header className="fixed top-1 left-0 right-0 w-full bg-slate-800 text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tailwind</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#features" className="hover:text-gray-300">Categories</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// bg-gradient-to-r from-yellow-600 to-black
// Home Component
// Home Component
const Home = () => {
  return (
    <section id="home" className="
     bg-slate-600
     text-white py-8">
      <div className="container mx-auto px-6 flex items-center justify-center min-h-screen">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mb-2">Welcome to Creative Graphic Designing!</h2>
          <h3 className="text-2xl mb-8 text-gray-200">Create Professional Graphics Design with us.</h3>
          <button className="bg-white text-indigo-600 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            View All
          </button>
        </div>
       
        <div className="w-full  rounded-full">
          <img src='./images/2.jpg'></img>
        </div>
      </div>
    </section>
  );
};



// About Component
const About = () => {
  return (
    <section id="about" className="pt-20 min-h-screen py-8 bg-white">
    < div className="sm:flex items-center max-w-screen-xl">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
        
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                voluptatum.
            </p>
        </div>
    </div>
</div>
    </section>
  );
};

// Features Component
const Features = () => {
  return (
    <section id="features" className="pt-20 min-h-screen py-8 bg-slate-600">
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Categories</h2>
        <div className="flex flex-wrap mb-20 p-0">
          <div className="w-full p-10 md:w-1/2">
            <h4 className="text-3xl text-black shadow-lg font-bold mb-2">Business Card Design</h4>
            <p className="text-gray-300 mb-8"> You can create Professional business card design using the simple and elegant business card template</p>
          </div>
          <div className="w-40">
            <img src="/images/1.png" alt="Monitoring" className="w-full h-auto" />
          </div>
        </div>

        <div className="flex flex-wrap mb-20">
          <div className="w-40">
            <img src="/images/22.png" alt="Reporting" className="w-full h-auto" />
          </div>
          <div className="w-full p-10 md:w-1/2 pl-10">
            <h4 className="text-3xl text-black shadow-lg font-bold mb-3">Logo Designs</h4>
            <p className="text-gray-300 text-align-center justify-content-center">You can create your own logo by using professional graphics from here</p>
          </div>
        </div>

        <div className="flex flex-wrap mb-20">
          <div className="w-full p-10 md:w-1/2">
            <h4 className="text-3xl text-black shadow-lg font-bold mb-2">Poster Designs</h4>
            <p className="text-gray-300 mb-8">You can create poster by using different templates.</p>
          </div>
          <div className="w-40">
            <img src="/images/3.png" alt="Syncing" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section id='contact' className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl font-bold text-center text-indigo-600">Contact Us</h2>
      <p className="mb-8 lg:mb-16  text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-bold text-gray-900  dark:text-gray-300">Email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-bold text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
  );
};




const Footer = () => {
  return (
    <footer className="bg-color py-10">
        <div className="bg-gray-800 py-10 text-white">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-8">
              <div className="flex-1 lg:w-1/6">
                <h4 className="text-white mb-3">About</h4>
                <ul className="text-gray-400 list-none">
                  <li>Our story</li>
                  <li>Our Mission</li>
                  <li>Our Plan</li>
                </ul>
              </div>

              <div className="flex-1 ">
                <h4 className="text-white mb-3">Products</h4>
                <ul className="text-gray-400 list-none">
                  <li>Web</li>
                  <li>App</li>
                  <li>Software</li>
                  <li>Ecommerce</li>
                </ul>
              </div>

              <div className="flex-1 lg:w-1/6">
                <h4 className="text-white mb-3">Services</h4>
                <ul className="text-gray-400 list-none">
                  <li>Design</li>
                  <li>Development</li>
                 
                </ul>
              </div>

              <div className="flex-1 lg:w-1/6">
                <h4 className="text-white mb-3">Company</h4>
                <ul className="text-gray-400 list-none">
                  <li>Privacy Policy</li>
                  <li>Terms & conditions</li>
                </ul>
              </div>

              <div className="flex-1 lg:w-1/2">
                <h4 className="text-white mb-3">Subscribe</h4>
                <div className="flex">
                  <input type="text" className="form-input w-full py-2 px-4 rounded-l-lg border-none" placeholder="Client Username" />
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-r-lg">Subscribe</button>
                </div>
              </div>
          </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-5">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-black pl-10">
              &copy; 2024 All rights reserved. | This template is made by <span className="bg-slate-600 text-white px-2 py-1 rounded-sm">Aiman Rasool</span>
            </div>

            <div className="flex space-x-4 pr-10">
              <a href="https://www.instagram.com/aimanrasool/" target="_blank" rel="noopener noreferrer" className="text-white">
                <div className="p-2 bg-gray-700 rounded">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </a>
              <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="text-white">
                <div className="p-2 bg-gray-700 rounded">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
              </a>
              <a href="https://twitter.com/yourtwitterlink" target="_blank" rel="noopener noreferrer" className="text-white">
                <div className="p-2 bg-gray-700 rounded">
                  <i className="fa-brands fa-twitter"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
};




// Main App Component
const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Features />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
