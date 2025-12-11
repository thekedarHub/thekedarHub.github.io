# Thekedar Hub

A mobile-friendly web application for connecting homeowners with contractors for home improvement projects.

## Features

### Core Features
- **Instagram-style Home Feed**: Scroll through recent projects with images, contractor profiles, and booking options
- **Smart Search**: Find contractors, projects, and materials with filtering capabilities
- **Job Management**: Track ongoing projects, view quotations, and manage completed work
- **User Profiles**: Comprehensive user profiles with project history and ratings
- **Free Survey Booking**: Multi-step form to book contractor surveys

### Key Highlights
- Mobile-first responsive design
- Reddit-style voting system for projects
- Media carousel with zoom functionality
- Progress tracking for ongoing jobs
- Payment status monitoring
- AI-optimized contractor profiles (planned)

## Tech Stack

- **Frontend**: React 18, React Router
- **Styling**: CSS-in-JS with mobile-first approach
- **Icons**: Lucide React
- **Animations**: Framer Motion (planned)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd thekedar-hub
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Project Structure

```
src/
├── components/
│   ├── BottomNavigation.js    # Mobile navigation
│   ├── ProjectPost.js         # Instagram-style post component
│   └── MediaCarousel.js       # Image/video carousel with zoom
├── pages/
│   ├── Home.js               # Main feed page
│   ├── Search.js             # Search and filtering
│   ├── Jobs.js               # Job management
│   ├── Profile.js            # User profile
│   └── BookSurvey.js         # Survey booking form
├── styles/
│   └── index.css             # Global styles
└── App.js                    # Main app component
```

## Pages Overview

### Home
- Instagram-style scrolling feed
- Project posts with media carousels
- Contractor information and booking CTAs
- Upvote/downvote system
- Hashtag-based categorization

### Search
- Multi-category search (contractors, projects, materials)
- Filter-based results
- Contractor profiles with ratings and reviews
- Location-based filtering

### Jobs
- Three-tab interface: Ongoing, Completed, Quotations
- Progress tracking with visual indicators
- Payment status monitoring
- Quotation management with accept/decline options

### Profile
- User statistics and achievements
- Contact information management
- Recent project history
- Quick action buttons

### Book Survey
- Multi-step form (3 steps)
- Project type selection
- Location and scheduling
- Review and confirmation
- Progress indicator

## Mobile-First Design

The application is designed with mobile users as the primary focus:
- Touch-friendly interface elements
- Optimized for thumb navigation
- Responsive grid layouts
- Bottom navigation for easy access
- Swipe-friendly carousels

## Future Enhancements (v2)

- Supply Shop integration
- AI-optimized contractor profiles
- Real-time chat functionality
- Push notifications
- Offline support
- Advanced filtering options
- Payment gateway integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on mobile devices
5. Submit a pull request

## License

This project is licensed under the MIT License.