interface Metadata {
  title: string;
  description: string;
  keywords: string[];
}

interface PageMetadata {
  [page: string]: Metadata;
}

const metaData: PageMetadata = {
  home: {
    title: "Salient Startup - Igniting Innovation for a Bright Tomorrow",
    description:
      "Welcome to Salient Startup, where innovation and ambition meet. Discover how we're shaping the future with cutting-edge ideas and solutions. Join us in our journey towards excellence.",
    keywords: [
      "Welcome, innovation, ambition, Salient Startup, shaping the future, cutting-edge ideas, solutions, excellence",
    ],
  },
  about: {
    title: "About Salient Startup - Our Story, Vision, and Values",
    description:
      "Learn about the heart and soul of Salient Startup. Explore our story, vision, and the core values that drive us. Discover the passionate team behind our commitment to innovation",
    keywords: [
      "About Salient Startup, story, vision, values, passionate team, innovation",
    ],
  },
  contact: {
    title: "Contact Salient Startup - Let's Connect for Collaborative Success",
    description:
      "Get in touch with Salient Startup and explore collaboration opportunities. Reach out to us through our Contact Us page and let's work together to achieve remarkable results. Your success is our priority.",
    keywords: [
      "Contact Salient Startup, connect, collaboration opportunities, reach out, remarkable results, success",
    ],
  },
};
