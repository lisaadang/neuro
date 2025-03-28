import * as React from "react";
import { createRoot } from "react-dom/client";
import { SparkApp, Card, Button, Input, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@github/spark/components";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useKV } from "@github/spark/hooks";

// Event start date
const EVENT_START = new Date('2025-05-20T09:00:00');

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = React.useState(getTimeUntilEvent());

  function getTimeUntilEvent() {
    const now = new Date();
    const difference = EVENT_START - now;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilEvent());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-8 my-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-neutral-3 p-6 rounded-lg min-w-[100px]">
            <span className="text-4xl font-bold text-accent-11">{value}</span>
          </div>
          <div className="mt-2 text-neutral-11 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
};

// Registration Form Component
const RegistrationForm = () => {
  const [registered, setRegistered] = React.useState(false);
  const [email, setEmail] = React.useState("");
  
  React.useEffect(() => {
    // Load registration status on mount
    const checkRegistration = async () => {
      const status = await spark.kv.get("registered");
      if (status === "true") {
        setRegistered(true);
      }
    };
    checkRegistration();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await spark.kv.set("registered", "true");
    await spark.kv.set("email", email);
    setRegistered(true);
  };

  if (registered) {
    return (
      <Card className="text-center p-6">
        <p className="text-xl text-accent-11 mb-4">Thank you for registering!</p>
        <p className="text-neutral-11">We'll keep you updated about the event.</p>
      </Card>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" className="text-xl py-4 px-8">Register Now</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Register for Nanosummit</DialogTitle>
          <DialogDescription>Sign up to receive updates about the event</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" className="w-full">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Schedule Component
const Schedule = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  
  const scheduleData = [
    {
      day: "Day 1",
      events: [
        { time: "9:00 AM - 11:00 AM", description: "Arrival and Check-in" },
        { time: "2:00 PM - 4:00 PM", description: "Welcome Reception & Networking" },
        { time: "7:00 PM - 9:30 PM", description: "Opening Dinner at Parc Restaurant" }
      ]
    },
    {
      day: "Day 2",
      events: [
        { time: "9:00 AM - 12:00 PM", description: "Keynote Presentations" },
        { time: "1:30 PM - 5:00 PM", description: "Workshop Sessions & Studio Tours" },
        { time: "6:30 PM - 10:00 PM", description: "Networking Dinner at Talula's Garden" }
      ]
    },
    {
      day: "Day 3",
      events: [
        { time: "8:30 AM - 10:30 AM", description: "Farewell Breakfast at The Love" },
        { time: "11:00 AM - 2:00 PM", description: "Final Networking & Departure" }
      ]
    }
  ];

  return (
    <Card className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Schedule</h2>
      <div className="grid grid-cols-3 gap-0 mb-6">
        {scheduleData.map((day, index) => (
          <button
            key={day.day}
            className={`py-2 px-4 text-center border-b-2 ${
              activeTab === index 
                ? "border-accent-9 text-accent-11" 
                : "border-neutral-6 text-neutral-11 hover:text-neutral-12"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {day.day}
          </button>
        ))}
      </div>
      <div className="p-4">
        {scheduleData[activeTab].events.map((event, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h3 className="font-semibold text-accent-11">{event.time}</h3>
            <p className="text-neutral-11">{event.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

// FAQ Component
const FAQ = () => {
  const faqs = [
    {
      question: "What is included in the registration?",
      answer: "Registration includes access to all sessions, workshops, meals, and networking events over the three days."
    },
    {
      question: "Where will the event be held?",
      answer: "The event will take place at various venues across Philadelphia, with the main sessions at the Philadelphia Convention Center."
    },
    {
      question: "Is there a dress code?",
      answer: "Business casual is recommended for daytime sessions. Some evening events may be more formal."
    },
    {
      question: "Are accommodations included?",
      answer: "No, but we have secured special rates at partner hotels. Details will be sent after registration."
    }
  ];

  return (
    <Card className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group">
            <summary className="flex justify-between items-center cursor-pointer p-4 bg-neutral-3 rounded-lg">
              <span className="font-medium text-neutral-12">{faq.question}</span>
            </summary>
            <div className="p-4 text-neutral-11">{faq.answer}</div>
          </details>
        ))}
      </div>
    </Card>
  );
};

// Image Carousel Component
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088",
      caption: "Philadelphia Skyline"
    },
    {
      url: "https://images.unsplash.com/photo-1569761316261-9c66390e6b03",
      caption: "Liberty Bell"
    },
    {
      url: "https://images.unsplash.com/photo-1629819149884-373df37d4dac",
      caption: "Reading Terminal Market"
    }
  ];

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previous = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mb-12">
      <div className="aspect-video relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].caption}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-neutral-12/75 text-white">
          {images[currentIndex].caption}
        </div>
      </div>
      <button
        onClick={previous}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-neutral-12/75 rounded-full text-white"
      >
        <CaretLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-neutral-12/75 rounded-full text-white"
      >
        <CaretRight size={24} />
      </button>
    </div>
  );
};

// Who's Involved Section Component
const WhosInvolved = () => {
  const people = [
    {
      name: "Sarah Johnson",
      title: "Co-founder & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Emily Chen",
      title: "Co-founder & Event Curator",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    },
    {
      name: "Michael Torres",
      title: "Architecture Studio Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Rachel Williams",
      title: "Gallery Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      name: "David Park",
      title: "Design Principal",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      name: "Lisa Martinez",
      title: "Restaurant Owner",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
    }
  ];

  // For mobile view
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <Card className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Who's Involved</h2>
        <div className="relative">
          <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-4">
            <img
              src={people[currentIndex].image}
              alt={people[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mb-4">
            <h3 className="font-semibold text-lg">{people[currentIndex].name}</h3>
            <p className="text-neutral-11">{people[currentIndex].title}</p>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              variant="secondary"
              onClick={() => setCurrentIndex(prev => prev === 0 ? people.length - 1 : prev - 1)}
              icon={<CaretLeft />}
            />
            <Button
              variant="secondary"
              onClick={() => setCurrentIndex(prev => prev === people.length - 1 ? 0 : prev + 1)}
              icon={<CaretRight />}
            />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Who's Involved</h2>
      <div className="grid grid-cols-3 gap-6">
        {people.map((person, index) => (
          <div key={index} className="text-center">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-4">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg">{person.name}</h3>
            <p className="text-neutral-11">{person.title}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

// Main App Component
function App() {
  return (
    <SparkApp>
      <div className="min-h-screen bg-neutral-1 text-neutral-12 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-center mb-4">Nanosummit</h1>
          <p className="text-2xl text-center text-neutral-11 mb-8">
            May 20-21, 2025
          </p>
          <p className="text-xl text-center mb-8">
            Join us in Philadelphia for a curated weekend of art, architecture, food, and friendship.
          </p>
          
          <div className="text-center mb-8">
            <RegistrationForm />
          </div>
          
          <CountdownTimer />
          
          <ImageCarousel />
          
          <p className="text-lg text-center mb-12">
            Nanosummit is a three-day gathering of creative professionals, designers, and entrepreneurs
            coming together to share ideas, build connections, and explore the vibrant culture of Philadelphia.
          </p>
          
          <Schedule />
          
          <WhosInvolved />
          
          <FAQ />
        </div>
      </div>
    </SparkApp>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

