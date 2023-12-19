const trivialQuestions = [
  {id: 1, trivial: "If you could have any superpower, what would it be?"},
  {id: 2, trivial: "What's your favorite season and why?"},
  {
    id: 3,
    trivial: "If you could travel anywhere in the world, where would you go?",
  },
  {id: 4, trivial: "What's your go-to comfort food?"},
  {
    id: 5,
    trivial:
      "If you could have dinner with any historical figure, who would it be?",
  },
  {id: 6, trivial: "What's your favorite book or book series?"},
  {
    id: 7,
    trivial:
      "If you could be any fictional character for a day, who would it be?",
  },
  {id: 8, trivial: "What's the most unusual talent you have?"},
  {id: 9, trivial: "Coffee or tea?"},
  {
    id: 10,
    trivial:
      "If you could time travel, would you go to the past or the future?",
  },
  {id: 11, trivial: "What's your favorite childhood memory?"},
  {
    id: 12,
    trivial:
      "If you were stranded on a deserted island, what three things would you want with you?",
  },
  {id: 13, trivial: "What's the last TV show you binge-watched?"},
  {id: 14, trivial: "Cats or dogs?"},
  {
    id: 15,
    trivial: "If you could learn any new skill instantly, what would it be?",
  },
  {id: 16, trivial: "What's your favorite type of music?"},
  {id: 17, trivial: "Beach vacation or mountain retreat?"},
  {id: 18, trivial: "What's the weirdest food you've ever tried?"},
  {id: 19, trivial: "If you could have any animal as a pet, what would it be?"},
  {id: 20, trivial: "What's your favorite board game or card game?"},
  {id: 21, trivial: "What's your signature dance move?"},
  {
    id: 22,
    trivial:
      "If you could have dinner with any fictional character, who would it be?",
  },
  {id: 23, trivial: "What's the most interesting place you've ever visited?"},
  {id: 24, trivial: "What's your favorite way to relax after a long day?"},
  {
    id: 25,
    trivial: "If you could witness any historical event, what would it be?",
  },
  {id: 26, trivial: "What's your favorite app on your phone?"},
  {
    id: 27,
    trivial:
      "If you had a time machine, would you rather visit the past or the future?",
  },
  {id: 28, trivial: "What's your favorite movie of all time?"},
  {id: 29, trivial: "If you could have any job for a day, what would it be?"},
  {id: 30, trivial: "What's your favorite quote or motto?"},
  {id: 31, trivial: "Pancakes or waffles?"},
  {id: 32, trivial: "What's the best piece of advice you've ever received?"},
  {
    id: 33,
    trivial:
      "If you could have a dinner party with any three people (dead or alive), who would they be?",
  },
  {id: 34, trivial: "What's your favorite outdoor activity?"},
  {id: 35, trivial: "What's your spirit animal?"},
  {
    id: 36,
    trivial: "If you could master any instrument, which one would it be?",
  },
  {id: 37, trivial: "What's your favorite way to exercise?"},
  {
    id: 38,
    trivial: "If you could be a character in any movie, who would you be?",
  },
  {id: 39, trivial: "What's the most spontaneous thing you've ever done?"},
  {id: 40, trivial: "What's your favorite childhood TV show?"},
  {
    id: 41,
    trivial:
      "If you could meet any fictional character in real life, who would it be?",
  },
  {id: 42, trivial: "What's the most beautiful place you've ever been?"},
  {id: 43, trivial: "What's the last thing you watched on Netflix?"},
  {
    id: 44,
    trivial:
      "If you could have any famous person over for dinner, who would it be?",
  },
  {id: 45, trivial: "What's your favorite type of cuisine?"},
  {id: 46, trivial: "What's your biggest pet peeve?"},
  {
    id: 47,
    trivial:
      "If you could have any job in the world for a week, what would it be?",
  },
  {id: 48, trivial: "What's your favorite holiday?"},
  {
    id: 49,
    trivial: "If you could have any dessert right now, what would it be?",
  },
  {id: 50, trivial: "What's your favorite childhood game?"},
  {
    id: 51,
    trivial: "If you could live in any era of history, which one would it be?",
  },
  {id: 52, trivial: "What's your favorite way to spend a Saturday?"},
  {id: 53, trivial: "If you could have any car, what would it be?"},
  {id: 54, trivial: "What's your favorite social media platform?"},
  {
    id: 55,
    trivial:
      "If you could have any fictional technology from a movie or TV show, what would it be?",
  },
  {id: 56, trivial: "What's your favorite way to de-stress?"},
  {
    id: 57,
    trivial: "If you could be any fictional creature, what would it be?",
  },
  {id: 58, trivial: "What's your favorite type of weather?"},
  {id: 59, trivial: "What's the most interesting fact you know?"},
  {
    id: 60,
    trivial: "If you could be a character in a video game, who would you be?",
  },
  {id: 61, trivial: "What's your favorite childhood toy?"},
  {id: 62, trivial: "If you could have any exotic pet, what would it be?"},
  {id: 63, trivial: "What's your favorite way to start the day?"},
  {
    id: 64,
    trivial:
      "If you could have any job in the world, no qualifications needed, what would it be?",
  },
  {id: 65, trivial: "What's the most unique skill you possess?"},
  {id: 66, trivial: "What's your favorite type of exercise?"},
  {
    id: 67,
    trivial:
      "If you could have any historical figure as a mentor, who would it be?",
  },
  {id: 68, trivial: "What's your favorite way to spend a rainy day?"},
  {
    id: 69,
    trivial: "If you could have any animal's ability, which one would it be?",
  },
  {id: 70, trivial: "What's the most unusual place you've ever visited?"},
  {id: 71, trivial: "What's your favorite childhood song?"},
  {
    id: 72,
    trivial: "If you could have any view from your window, what would it be?",
  },
  {id: 73, trivial: "What's your favorite way to show appreciation to others?"},
  {id: 74, trivial: "If you could have any job in the arts, what would it be?"},
  {id: 75, trivial: "What's the most adventurous thing you've ever done?"},
  {id: 76, trivial: "If you could have any magical ability, what would it be?"},
  {id: 77, trivial: "What's your favorite way to learn something new?"},
  {id: 78, trivial: "If you could be famous for one thing, what would it be?"},
  {id: 79, trivial: "What's your favorite thing about the city you live in?"},
  {
    id: 80,
    trivial:
      "If you could have any type of pet, mythical or not, what would it be?",
  },
  {id: 81, trivial: "What's your favorite way to spend a Sunday afternoon?"},
  {
    id: 82,
    trivial:
      "If you could have dinner with any living person, who would it be?",
  },
  {id: 83, trivial: "What's your favorite childhood book?"},
  {
    id: 84,
    trivial:
      "If you could have any talent, artistic or otherwise, what would it be?",
  },
  {id: 85, trivial: "What's the most beautiful piece of art you've ever seen?"},
  {
    id: 86,
    trivial:
      "If you could have any job in the world for a year, what would it be?",
  },
  {id: 87, trivial: "What's your favorite way to celebrate achievements?"},
  {
    id: 88,
    trivial: "If you could have any type of home, what would it look like?",
  },
  {id: 89, trivial: "What's your favorite thing about your job?"},
  {
    id: 90,
    trivial: "If you could have any fictional vehicle, what would it be?",
  },
  {id: 91, trivial: "What's your favorite way to spend a summer day?"},
  {
    id: 92,
    trivial: "If you could have any view from your office, what would it be?",
  },
  {id: 93, trivial: "What's your favorite way to stay organized?"},
  {
    id: 94,
    trivial: "If you could have any exotic food right now, what would it be?",
  },
  {
    id: 95,
    trivial: "What's the most interesting documentary you've ever watched?",
  },
  {
    id: 96,
    trivial:
      "If you could have any famous person's wardrobe, whose would it be?",
  },
  {id: 97, trivial: "What's your favorite thing about the place you grew up?"},
  {
    id: 98,
    trivial: "If you could have any historical artifact, what would it be?",
  },
  {id: 99, trivial: "What's your favorite way to give back to the community?"},
  {id: 100, trivial: "If you could have any type of party, what would it be?"},
]

const techDiscussions = [
  {id: 1, discussion: "The impact of WebAssembly on frontend development."},
  {id: 2, discussion: "Responsive design trends in 2023."},
  {id: 3, discussion: "Exploring the role of Progressive Web Apps (PWAs)."},
  {
    id: 4,
    discussion:
      "State management in modern frontend frameworks (React, Vue, Angular).",
  },
  {id: 5, discussion: "Best practices for optimizing web performance."},
  {
    id: 6,
    discussion: "The rise of serverless architecture in frontend development.",
  },
  {id: 7, discussion: "Web accessibility: Ensuring inclusive design."},
  {id: 8, discussion: "Comparing CSS-in-JS solutions for styling in React."},
  {
    id: 9,
    discussion: "The future of JavaScript: ECMAScript proposals and features.",
  },
  {id: 10, discussion: "Integrating Web Components into your frontend stack."},
  {
    id: 11,
    discussion:
      "Discussing the importance of web security in frontend development.",
  },
  {id: 12, discussion: "Exploring the impact of Web3 on frontend development."},
  {
    id: 13,
    discussion: "Microservices architecture vs. monolithic architecture.",
  },
  {
    id: 14,
    discussion: "Choosing the right database for your backend: SQL vs. NoSQL.",
  },
  {id: 15, discussion: "The role of GraphQL in modern API development."},
  {id: 16, discussion: "Serverless computing: Advantages and challenges."},
  {id: 17, discussion: "Container orchestration with Kubernetes."},
  {id: 18, discussion: "Event-driven architecture for scalable backends."},
  {
    id: 19,
    discussion: "Building RESTful APIs: Best practices and common pitfalls.",
  },
  {id: 20, discussion: "Exploring the world of backend as a service (BaaS)."},
  {id: 21, discussion: "Server-side rendering vs. client-side rendering."},
  {
    id: 22,
    discussion: "The evolution of backend languages: Rust, Go, and beyond.",
  },
  {
    id: 23,
    discussion: "Managing dependencies and versioning in backend projects.",
  },
  {
    id: 24,
    discussion:
      "Implementing authentication and authorization in backend systems.",
  },
  {id: 25, discussion: "Cross-platform vs. native development: Pros and cons."},
  {id: 26, discussion: "The impact of 5G on mobile app development."},
  {
    id: 27,
    discussion:
      "Swift vs. Kotlin: A comparison of iOS and Android development.",
  },
  {id: 28, discussion: "Mobile app testing strategies for 2023."},
  {id: 29, discussion: "Building offline-first mobile applications."},
  {id: 30, discussion: "Integrating augmented reality (AR) in mobile apps."},
  {id: 31, discussion: "Mobile app monetization trends."},
  {id: 32, discussion: "The role of mobile analytics in app optimization."},
  {id: 33, discussion: "Progressive Web Apps (PWAs) in the mobile landscape."},
  {
    id: 34,
    discussion: "Exploring the potential of foldable and dual-screen devices.",
  },
  {
    id: 35,
    discussion: "Continuous integration and delivery in mobile development.",
  },
  {
    id: 36,
    discussion: "The future of mobile app design: Gesture-based interfaces.",
  },
  {
    id: 37,
    discussion: "Ethics in AI: Addressing bias and responsible AI development.",
  },
  {id: 38, discussion: "Reinforcement learning: Applications and challenges."},
  {
    id: 39,
    discussion: "Natural Language Processing (NLP) advancements in 2023.",
  },
  {id: 40, discussion: "Transfer learning in machine learning models."},
  {
    id: 41,
    discussion:
      "Explainable AI: Making machine learning models more transparent.",
  },
  {
    id: 42,
    discussion: "AI in healthcare: Diagnostics and personalized medicine.",
  },
  {
    id: 43,
    discussion: "Generative models: GANs and their creative applications.",
  },
  {id: 44, discussion: "Edge AI vs. Cloud AI: Choosing the right deployment."},
  {
    id: 45,
    discussion: "AI for cybersecurity: Threat detection and prevention.",
  },
  {
    id: 46,
    discussion:
      "AI in autonomous vehicles: Current challenges and future prospects.",
  },
  {id: 47, discussion: "The role of AI in customer service and chatbots."},
  {id: 48, discussion: "Quantum computing and its potential impact on AI."},
  {id: 49, discussion: "DeFi (Decentralized Finance) trends and innovations."},
  {id: 50, discussion: "NFTs (Non-Fungible Tokens): Beyond digital art."},
  {
    id: 51,
    discussion: "Smart contracts: Use cases and development challenges.",
  },
  {id: 52, discussion: "Interoperability in blockchain ecosystems."},
  {
    id: 53,
    discussion: "Centralized vs. decentralized exchanges: Pros and cons.",
  },
  {
    id: 54,
    discussion:
      "The environmental impact of blockchain and sustainability solutions.",
  },
  {id: 55, discussion: "Governance models in blockchain networks."},
  {
    id: 56,
    discussion: "Tokenomics: Designing sustainable economic models for tokens.",
  },
  {id: 57, discussion: "Blockchain in supply chain management: Case studies."},
  {
    id: 58,
    discussion: "Cross-border payments and remittances using blockchain.",
  },
  {
    id: 59,
    discussion:
      "The role of oracles in connecting smart contracts with real-world data.",
  },
  {id: 60, discussion: "Security considerations in blockchain development."},
]
module.exports = {
  techDiscussions,
  trivialQuestions,
}
