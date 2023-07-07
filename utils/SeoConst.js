export const HOST = 'https://www.nisheetabajaj.com'; // your domain name

export const CommonSeo = {
  DEFAULT_TITLE:
    'Nisheeta Bajaj - Executive Coach and Leadership Expert | Empowering CEOs and Business Leaders for Success',
  DEFAULT_DESCRIPTION:
    "Discover Nisheeta Bajaj, an esteemed executive coach and leadership expert dedicated to empowering CEOs and business leaders. Join her transformative coaching programs and unlock your true leadership potential for success in today's dynamic business landscape.",
};

function defaultSeoGenerator(title, description) {
  return {
    title,
    description,
  };
}

export const SEO = {
  aboutUsSeo: defaultSeoGenerator(
    'About Nisheeta Bajaj - Executive Coach and Leadership Expert',
    'Discover Nisheeta Bajaj, an executive coach and leadership expert dedicated to empowering CEOs and business leaders. With extensive experience coaching global CEOs and top teams, Nisheeta helps individuals become versatile, effective, and prepared for larger roles. Explore her unique approach, thought leadership, and cutting-edge strategies for leadership excellence and personal growth.'
  ),
  termsAndConditions: defaultSeoGenerator(
    'Nisheeta Bajaj - Terms and Conditions',
    "Read the terms and conditions of Nisheeta Bajaj's services to understand the guidelines for working with her as an executive coach and leadership expert. Discover the policies for engagements, confidentiality, and professional conduct. Engage in our coaching programs with confidence and clarity."
  ),
  pricing: defaultSeoGenerator(
    `Nisheeta Bajaj | Executive Coaching Services | Prices & Packages`,
    `Discover the benefits of executive coaching with Nisheeta Bajaj. Our coaching programs are designed to enhance your leadership skills, drive success, and unlock your full potential. Explore our pricing options for individual and group coaching sessions. Start your transformative journey with Nisheeta today!`
  ),
};
