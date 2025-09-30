import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;





  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <>
      <section id="contact" className="w-full m-auto max-w-3xl my-12">
        <h2 className="text-2xl  font-semibold mb-6 ml-10">Contact</h2>
        <form className="flex flex-col space-y-4  ml-10 mr-10" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            name='user_name'
            className="w-full p-3 rounded-md border border-gray-500 bg-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name='user_email'
            placeholder="Email"
            className="w-full p-3 rounded-md border border-gray-500 bg-white  outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            name='message'
            rows="4"
            className="w-full p-3 rounded-md border border-gray-500 bg-white  outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            value='Send'
            className="px-6 py-3 self-center bg-blue-600  text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Links */}
      <section className="w-full m-auto max-w-3xl ">
        <h2 className="text-2xl font-semibold mb-4 ml-10">Other options</h2>
        <p className="text-lg mb-6 text-center">Let’s build something togather.</p>
        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          <a
            href="#"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
          >
            <span>Email Me</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-neutral-800 text-white dark:bg-neutral-700 dark:text-white rounded-md font-medium hover:bg-neutral-900 dark:hover:bg-neutral-600 transition"
          >
            <span>in LinkedIn</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-neutral-800 text-white dark:bg-neutral-700 dark:text-white rounded-md font-medium hover:bg-neutral-900 dark:hover:bg-neutral-600 transition"
          >
            <span>GitHub</span>
          </a>
        </div>

      </section>
    </>
  )
}

export default Contact