import React from 'react';
import { Card, CardContent } from "./ui/Card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/Carousel"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar"
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Aman Singh",
    role: "Mobile Developer",
    avatar: "/api/placeholder/100/100",
    content: "Joining Singh's Fitness Farm has transformed my life! The supportive community and expert trainers have helped me achieve my fitness goals beyond what I thought possible."
  },
  {
    name: "Priya Sharma",
    role: "Marketing Specialist",
    avatar: "/api/placeholder/100/100",
    content: "The atmosphere at S2F is incredible! The trainers are knowledgeable and always encouraging. I've never felt more motivated to work out!"
  },
  {
    name: "Ravi Kumar",
    role: "Software Engineer",
    avatar: "/api/placeholder/100/100",
    content: "S2F is more than just a gym; it's a community. I've made lifelong friends and improved my health tremendously. Highly recommend!"
  },
  {
    name: "Neha Patel",
    role: "UX Designer",
    avatar: "/api/placeholder/100/100",
    content: "Singh's Fitness Farm keeps me motivated with its diverse class options. The friendly community and dedicated trainers create an amazing workout environment. I'm constantly challenged and inspired to reach new fitness goals."
  },
  {
    name: "Vikram Singh",
    role: "Project Manager",
    avatar: "/api/placeholder/100/100",
    content: "I've seen amazing results since joining S2F. The trainers are always there to guide you, and the community keeps you accountable. It's more than just a gym; it's a supportive environment that helps you reach your full potential."
  },
  {
    name: "Sita Devi",
    role: "Data Analyst",
    avatar: "/api/placeholder/100/100",
    content: "The supportive environment at Singh's Fitness Farm is unmatched. I feel empowered and inspired every time I step through the doors!"
  }
];

const TestimonialCard = ({ name, role, avatar, content }) => (
  <Card className="bg-white dark:bg-gray-800 h-full">
    <CardContent className="p-6 flex flex-col h-full">
      <Quote className="text-primary mb-4" size={40} />
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{content}</p>
      <div className="flex items-center mt-auto">
        <Avatar className="h-10 w-10 mr-4">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            What Our Members Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real stories from real people who have transformed their lives at Singh's Fitness Farm.
          </p>
        </div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <TestimonialCard {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;