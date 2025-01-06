import React from "react";

const events = [
  {
    imgSrc: "public/1.jpg",
    title: "Green Energy Workshop",
    date: "December 15, 2024",
    time: "10:00 AM - 4:00 PM",
    venue: "Main Auditorium, IIT BHU",
    description:
      "A hands-on workshop on harnessing green energy sources like solar and wind. Learn from industry experts and build your own mini-solar panel!",
  },
  {
    imgSrc: "public/2.jpg",
    title: "Green Energy Workshop",
    date: "December 15, 2024",
    time: "10:00 AM - 4:00 PM",
    venue: "Main Auditorium, IIT BHU",
    description:
      "A hands-on workshop on harnessing green energy sources like solar and wind. Learn from industry experts and build your own mini-solar panel!",
  },
  {
    imgSrc: "public/3.jpg",
    title: "Green Energy Workshop",
    date: "December 15, 2024",
    time: "10:00 AM - 4:00 PM",
    venue: "Main Auditorium, IIT BHU",
    description:
      "A hands-on workshop on harnessing green energy sources like solar and wind. Learn from industry experts and build your own mini-solar panel!",
  },
  {
    imgSrc: "public/4.jpg",
    title: "Green Energy Workshop",
    date: "December 15, 2024",
    time: "10:00 AM - 4:00 PM",
    venue: "Main Auditorium, IIT BHU",
    description:
      "A hands-on workshop on harnessing green energy sources like solar and wind. Learn from industry experts and build your own mini-solar panel!",
  },
  {
    imgSrc: "public/5.jpg",
    title: "Green Energy Workshop",
    date: "December 15, 2024",
    time: "10:00 AM - 4:00 PM",
    venue: "Main Auditorium, IIT BHU",
    description:
      "A hands-on workshop on harnessing green energy sources like solar and wind. Learn from industry experts and build your own mini-solar panel!",
  },
];

const Events = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <header className="bg-green-500 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Events</h1>
      </header>
      <div className="timeline relative max-w-5xl mx-auto my-12">
        {/* Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>
        {events.map((event, index) => (
          <div
            key={index}
            className={`container relative ${
              index % 2 === 0 ? "left-container" : "right-container"
            }`}
          >
            <img
              src={event.imgSrc}
              alt={event.title}
              className={`absolute w-16 h-16 object-cover rounded-full top-8 ${
                index % 2 === 0 ? "right-[-2rem]" : "left-[-2rem]"
              }`}
            />
            <div
              className={`text-box relative bg-white p-6 rounded-lg shadow-lg ${
                index % 2 === 0
                  ? "ml-auto left-0 w-[calc(50%-1rem)]"
                  : "mr-auto right-0 w-[calc(50%-1rem)]"
              }`}
            >
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Venue:</strong> {event.venue}
              </p>
              <p>
                <strong>Description:</strong> {event.description}
              </p>
              <a
                href="#"
                className="inline-block mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              >
                Register Now
              </a>
              {/* Arrow */}
              <div
                className={`arrow absolute top-1/2 transform -translate-y-1/2 ${
                  index % 2 === 0
                    ? "right-[-0.75rem] border-t-[15px] border-b-[15px] border-l-[15px] border-transparent border-l-white"
                    : "left-[-0.75rem] border-t-[15px] border-b-[15px] border-r-[15px] border-transparent border-r-white"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
