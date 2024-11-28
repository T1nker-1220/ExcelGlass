# Excel Glass, Inc. Website Development Roadmap

## Project Overview

Building a modern, responsive website for Excel Glass, Inc. using Next.js with focus on impressive UI/UX design and easy contact accessibility.

## Tech Stack

- Frontend: Next.js 14
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Heroicons/Phosphor Icons
- Contact Form: React Hook Form
- Email Service: EmailJS/SendGrid
- Social Media Integration
- Maps Integration: Google Maps API

## Project Structure

### 1. Core Pages

- `pages/`
  - `index.js` (Home)
  - `about.js`
  - `services.js`
  - `portfolio.js`
  - `contact.js`

### 2. Components Structure

- `components/`
  - `layout/`
    - Header
    - Footer
    - Navigation
  - `ui/`
    - Button
    - Card
    - Modal
  - `sections/`
    - Hero
    - Services
    - About
    - ContactForm
    - SocialLinks
    - Map

## Design Elements

### 1. Color Scheme

- Primary: #4B79BE (Excel Glass Blue)
- Secondary: #FFD700 (Yellow from logo)
- Neutral:
  - #FFFFFF (White)
  - #F8F9FA (Light Gray)
  - #343A40 (Dark Gray)

### 2. Typography

- Headings: Playfair Display (Elegant serif font)
- Body: Inter (Modern sans-serif)

## Page-Specific Features

### Home Page

- Hero section with glass-effect background
- Animated company introduction
- Featured services with hover effects
- Client testimonials carousel
- Achievement counters (28 years of service)
- Latest works gallery

### Contact Page Features

1. Multi-Channel Contact Options:

   - Interactive contact form
   - Direct email links
   - Click-to-call phone numbers
   - Social media quick links
   - WhatsApp business integration

2. Contact Information Display:

   - Address with interactive map
   - Business hours
   - Response time expectations
   - Emergency contact options

3. Social Proof Section:
   - Client testimonials
   - Trust badges
   - Years in business highlight
   - Service area coverage

## Development Phases

### Phase 1: Setup & Foundation (Week 1)

- [ ] Project initialization with Next.js
- [ ] Setup Tailwind CSS
- [ ] Create basic component structure
- [ ] Implement responsive layout

### Phase 2: Core Pages (Week 2)

- [ ] Develop Home page
- [ ] Create About section
- [ ] Build Services showcase
- [ ] Design Portfolio gallery

### Phase 3: Contact Integration (Week 3)

- [ ] Build contact form
- [ ] Integrate email service
- [ ] Setup social media links
- [ ] Implement maps

### Phase 4: Enhancement & Testing (Week 4)

- [ ] Add animations
- [ ] Optimize performance
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] SEO optimization

## Contact Page Technical Implementation

```javascript
// Contact form features
- Form validation
- Real-time feedback
- Auto-complete suggestions
- File attachment for inquiries
- Multi-step form process
- Success/Error handling
- Auto-response system
```

## Performance Goals

- Lighthouse Score > 90
- Page Load Time < 3s
- Mobile-First Design
- SEO Optimized
- Accessibility Compliance

## Post-Launch

- Analytics setup
- Regular content updates
- Performance monitoring
- User feedback collection
- Regular security updates

---

# Now you need to set up EmailJS to make the contact form functional. Here are the steps:

Go to https://www.emailjs.com/ and create a free account
Create an Email Service (e.g., Gmail, Outlook, etc.)
Create an Email Template with the following variables:
from_name
from_email
from_phone
subject
message
to_name
Get your EmailJS credentials and update them in the contact form:
Replace "YOUR_PUBLIC_KEY" with your EmailJS public key
Replace "YOUR_SERVICE_ID" with your EmailJS service ID
Replace "YOUR_TEMPLATE_ID" with your EmailJS template ID
