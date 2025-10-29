import React from "react";

const ContactSection = () => {
  const contacts = [
    {
      title: "Collaborate",
      email: "collaborate@example.com",
      phone: "+1 (555) 905-2345",
    },
    {
      title: "Press",
      email: "press@example.com",
      phone: "+1 (555) 905-3456",
    },
    {
      title: "Join our team",
      email: "careers@example.com",
      phone: "+1 (555) 905-4567",
    },
    {
      title: "Say hello",
      email: "hello@example.com",
      phone: "+1 (555) 905-5678",
    },
  ];

  return (
    <section id="contact" className="w-full bg-white text-gray-900 py-16 md:py-24">
      <div className="w-full md:w-10/12 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Heading */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Get in touch
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-sm">
              We’d love to hear from you. Whether you have a question,
              partnership idea, or want to join our team — reach out anytime.
            </p>
          </div>

          {/* Right Side - Contact Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contacts.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 hover:bg-gray-200 transition-all rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <a
                  href={`mailto:${item.email}`}
                  className="block text-indigo-600 font-medium hover:underline"
                >
                  {item.email}
                </a>
                <p className="text-gray-700 mt-1">{item.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
