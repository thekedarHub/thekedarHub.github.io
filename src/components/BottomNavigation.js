import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Briefcase, User } from 'lucide-react';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/search', icon: Search, label: 'Search' },
    { path: '/jobs', icon: Briefcase, label: 'Jobs' },
    { path: '/profile', icon: User, label: 'Profile' }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(({ path, icon: Icon, label }) => (
        <Link
          key={path}
          to={path}
          className={`nav-item ${location.pathname === path ? 'active' : ''}`}
        >
          <Icon size={20} />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;