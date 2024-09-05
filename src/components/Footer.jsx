import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);

const Footer = () => {
  const socialIcons = [
    { name: 'Facebook', icon: Facebook },
    { name: 'Instagram', icon: Instagram },
    { name: 'Twitter', icon: Twitter },
  ];

  return (
    <footer className="py-20 md:py-40">
      <Container>
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start">
              <ul className="list-inside list-disc space-y-8">
                {['Home', 'Classes', 'Facilities', 'Trainers', 'Membership', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-red-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <ul role="list" className="space-y-8">
                {socialIcons.map(({ name, icon: Icon }) => (
                  <li key={name}>
                    <a href="#" className="flex items-center space-x-3 transition hover:text-red-600">
                      <Icon className="w-5 h-5" />
                      <span>{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="m-auto mb-28 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left">
              <span className="block text-gray-500 dark:text-gray-400">
                Empowering you to achieve your fitness goals
              </span>

              <span className="block text-gray-500 dark:text-gray-400">
                Singh's Fitness Farm (S2F) &copy; {new Date().getFullYear()}
              </span>

              <span className="flex justify-between text-gray-600 dark:text-white">
                <a href="#" className="font-medium">
                  Terms of Service
                </a>
                <a href="#" className="font-medium">
                  Privacy Policy
                </a>
              </span>

              <span className="block text-gray-500 dark:text-gray-400">
                Questions?{' '}
                <a href="#" className="font-semibold text-gray-600 dark:text-white">
                  Contact Us
                </a>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;