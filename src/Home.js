import React from 'react';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


// Header Component with Navigation
const Header = () => {
  return (
    <header className="fixed w-full">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white font-serif">MNTN</h1>
        <nav className="flex-1 flex justify-center">
        <ul className="flex items-center text-white font-sans space-x-4">
          <li><a href="#home" className="hover:text-gray-300">Equipment</a></li>
          <li><a href="#about" className="hover:text-gray-300">About us</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Blog</a></li>
        </ul>
      </nav>
        <div className="flex items-center text-white space-x-1">
        <i className="fa-regular fa-user"></i>
        <a href="#" className="hover:text-gray-300">Account</a>
      </div>
    </div>
  </header>
  
  );
};

const Home = () => {
  return (
    <section id="home" className="bg-cover bg-center bg-img flex flex-col justify-center items-center text-white">
    <div className="container mx-auto px-6 flex items-center justify-center min-h-screen">
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8 mb-8 lg:mb-0">
        <div className="flex items-center mb-6">
          <div className="w-12 h-0.5 bg-yellow-600 mr-6"></div>
          <h2 className="text-md text-yellow-600 mr-6 tracking-widest font-sans">A HIKING GUIDE</h2>
        </div>
        <h3 className="text-5xl font-serif font-medium mb-6 text-gray-200"> 
          Be Prepared For The Mountains And Beyond!
        </h3>

      {/*right side bar  */}

      <div className="absolute right-0 top-1/2  -translate-y-1/2  flex-col items-start space-y-4">
      <div className="flex flex-col pr-5 items-center">
      <div className="absolute top-0 mr-9 h-1/2 w-1 bg-white"></div>
      <div className="h-64 w-1 mr-9 bg-gray-400">
      <div className='flex flex-col pl-5 space-y-8 items-start '><p>start</p>
        <p className='text-white'>01</p>
        <p className='text-white'>02</p>
        <p className='text-white'>03</p>
        </div> </div></div></div>
 

      {/* left side bar */}
        <div className="flex flex-col items-center space-y-4">
        <div className="absolute left-0  mx-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
      <div className='flex flex-col mb-6 items-center space-y-8 rotate-90'>
        <p>Follow us</p>
      </div>
      <div className="flex flex-col mb-6 items-center space-y-4">
        <i className="fa-brands fa-instagram fa-2x"></i>
        <i className="fa-brands fa-twitter fa-2x"></i>
      </div>
    </div>
  </div>
       <div className="flex items-center space-x-4">
          <p className="text-md">Scroll down</p>
          <i className="fas fa-chevron-down fa-2x"></i>
        </div>
      </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 z-0"></div>
       </section>
  

  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="pt-20 min-h-screen py-8 bg-black">
    < div className="sm:flex items-center max-w-screen-xl">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
        
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-yellow-600">Our Company</span>
            </h2>
            <p className="text-white opacity-50">
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

// Contact Component
const Contact = () => {
  return (
    <section id='contact' className="bg-black">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl font-bold text-center text-yellow-600">Contact Us</h2>
      <p className="mb-8 lg:mb-16  text-center text-white opacity-50 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-sans text-white  dark:text-gray-300">Email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-sans text-white dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-sans text-white dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-sans text-center bg-yellow-600 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
  );
};




const Footer = () => {
  return (
    <footer className="bg-color py-10">
        <div className="bg-black py-10 text-white">
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
              &copy; 2024 All rights reserved. | This template is made by <span className="bg-blacks text-white px-2 py-1 rounded-sm">Aiman Rasool</span>
            </div>

            <div className="flex space-x-4 pr-10">
              <a href="https://www.instagram.com/aimanrasool/" target="_blank" rel="noopener noreferrer" className="text-white">
                <div className="p-2 bg-black rounded">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </a>
              <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="text-white">
                <div className="p-2 bg-black rounded">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
              </a>
              <a href="https://twitter.com/yourtwitterlink" target="_blank" rel="noopener noreferrer" className="text-white">
                <div className="p-2 bg-black rounded">
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
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
