export const metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-center text-gray-800 dark:text-white">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Have questions? Send us a message and we will get back to you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              rows={4}
              required
              placeholder="Your message..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2.5 rounded-lg hover:opacity-90 transition font-medium"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Get in Touch
          </h2>

          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <span>📍</span>
            <span>Basundhara, Kathmandu, Nepal</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <span>✉️</span>
            <span>dipesharl@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <span>📞</span>
            <span>+977 9813089078</span>
          </div>
        </div>
      </div>
    </div>;
};

export default ContactPage;
