import React, { useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

// Leaflet icon setup
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapEvents = () => {
  useMapEvents({
    scroll: (e) => {
      e.originalEvent.preventDefault();
    },
  });
  return null;
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', number: '', message: '' });
  const position = [23.279671, 77.3432286]; // Coordinates for Singh's Fitness Farm (S2F) in Bhopal
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const openGoogleMaps = useCallback(() => {
    const url = `https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`;
    window.open(url, '_blank');
  }, [position]);

  return (
    <div className="flex flex-col md:flex-row h-[90vh]">
      {/* Map and Contact Details (70% width on larger screens) */}
      <div className="w-full md:w-[70%] h-[50vh] md:h-full relative">
        <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <div>
                <h3 className="font-bold">Singh's Fitness Farm (S2F)</h3>
                <p>Bhopal, Madhya Pradesh</p>
                <button 
                  onClick={openGoogleMaps}
                  className="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Open in Google Maps
                </button>
              </div>
            </Popup>
          </Marker>
          <MapEvents />
        </MapContainer>
        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md z-[700] ">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p className="flex items-center text-sm mb-2"><MapPin size={16} className="mr-2" /> Singh's Fitness Farm (S2F), Bhopal, MP, India</p>
          <p className="flex items-center text-sm mb-2"><Phone size={16} className="mr-2" /> +91 1234567890</p>
          <p className="flex items-center text-sm mb-2"><Mail size={16} className="mr-2" /> info@singhsfitnessfarm.com</p>
          <p className="flex items-center text-sm mb-2"><Clock size={16} className="mr-2" /> Mon-Sat: 6.30 AM-10.30 PM, Sun: 8AM-8PM</p>
        </div>
      </div>

      {/* Contact Form and Gym Details (30% width on larger screens) */}
      <div className="w-full md:w-[30%] bg-cyan-100 px-4 md:px-8 py-12 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-6">Discover our innovative approach to fitness and wellness. Fill in your details below to arrange a call back.</p>
        
        {/* <h3 className="text-2xl font-semibold mb-4">About Our Gym</h3>
        <p className="mb-4">Singh's Fitness Farm (S2F) is a state-of-the-art fitness center in Bhopal, offering:</p>
        <ul className="list-disc pl-5 mb-6">
          <li>Modern equipment</li>
          <li>Expert trainers</li>
          <li>Diverse classes including yoga and HIIT</li>
          <li>Nutritional counseling</li>
          <li>Spacious workout areas</li>
        </ul> */}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="tel"
            name="number"
            placeholder="Number"
            value={formData.number}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 flex items-center justify-center"
          >
            <Send className="mr-2" size={18} />
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;