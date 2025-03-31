import AboutSection from '../components/aboutsection';
import TeamMemberCard from '../components/teammembercard';

// Page content data
const aboutContent = {
  heading: "About Us",
  intro:
    "We’re dedicated to helping professionals grow in their careers. Whether you're just starting out or looking to advance, we offer tools and guidance to help you thrive.",
  sections: [
    {
      title: "Our Mission",
      text: "To make career development accessible, practical, and impactful for everyone — from students to seasoned professionals.",
    },
    {
      title: "What We Offer",
      text: "We provide coaching, skill-building workshops, resume reviews, and job interview practice tailored to real-world needs.",
    },
    {
      title: "Why Choose Us?",
      text: "Our team brings years of industry experience and a deep passion for helping people reach their goals.",
    },
  ],
};

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Career Coach",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Bob Smith",
    role: "Resume Expert",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Clara Lee",
    role: "Interview Specialist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Liam",
    role: "Developer",
    image: "",
  }
];

const About = (): JSX.Element => (
  <>
    {/* Hero Section */}
    <section className="bg-dark py-5 border-bottom text-center">
      <div className="container">
        <h1 className="display-5 text-white fw-bold">{aboutContent.heading}</h1>
        <p className="lead text-white-50">{aboutContent.intro}</p>
      </div>
    </section>

    {/* Info Sections as Cards */}
    <section className="container my-5">
      <div className="row g-4">
        {aboutContent.sections.map((section, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">{section.title}</h5>
                <p className="card-text text-muted">{section.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Team Section */}
    <section className="bg-light py-5 border-top">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, idx) => (
            <TeamMemberCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
