import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, Edit, Settings, Star, Award } from 'lucide-react';

const Profile = () => {
  const [user] = useState({
    name: "Arjun Patel",
    email: "arjun.patel@email.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    joinDate: "January 2024",
    completedProjects: 5,
    totalSpent: "₹4,85,000",
    averageRating: 4.6
  });

  const recentProjects = [
    {
      id: 1,
      title: "Kitchen Renovation",
      contractor: "Rajesh Kumar",
      date: "Jan 2024",
      amount: "₹2,50,000",
      status: "Completed",
      rating: 5
    },
    {
      id: 2,
      title: "Bathroom Tile Work",
      contractor: "Amit Singh",
      date: "Dec 2023",
      amount: "₹80,000",
      status: "Completed",
      rating: 4
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '20px' }}>
      {/* Profile Header */}
      <div className="card" style={{ marginBottom: '20px', padding: '20px', textAlign: 'center' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px auto'
        }}>
          <User size={32} color="white" />
        </div>

        <h2 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '700' }}>
          {user.name}
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', color: '#6c757d', fontSize: '14px', marginBottom: '16px' }}>
          <MapPin size={14} />
          {user.location}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-primary)' }}>
              {user.completedProjects}
            </div>
            <div style={{ fontSize: '12px', color: '#6c757d' }}>Projects</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-primary)' }}>
              {user.totalSpent}
            </div>
            <div style={{ fontSize: '12px', color: '#6c757d' }}>Total Spent</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center' }}>
              <Star size={16} fill="#ffc107" color="#ffc107" />
              {user.averageRating}
            </div>
            <div style={{ fontSize: '12px', color: '#6c757d' }}>Rating</div>
          </div>
        </div>

        <button className="btn btn-primary" style={{ fontSize: '14px' }}>
          <Edit size={16} style={{ marginRight: '8px' }} />
          Edit Profile
        </button>
      </div>

      {/* Contact Information */}
      <div className="card" style={{ marginBottom: '20px', padding: '20px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Contact Information
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Mail size={16} color="#6c757d" />
            <span style={{ fontSize: '14px' }}>{user.email}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Phone size={16} color="#6c757d" />
            <span style={{ fontSize: '14px' }}>{user.phone}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <MapPin size={16} color="#6c757d" />
            <span style={{ fontSize: '14px' }}>{user.location}</span>
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="card" style={{ marginBottom: '20px', padding: '20px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Recent Projects
        </h3>

        {recentProjects.map(project => (
          <div key={project.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 0',
            borderBottom: '1px solid #e9ecef'
          }}>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600' }}>
                {project.title}
              </h4>
              <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: '#6c757d' }}>
                by {project.contractor} • {project.date}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < project.rating ? "#ffc107" : "none"}
                    color={i < project.rating ? "#ffc107" : "#e9ecef"}
                  />
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>{project.amount}</div>
              <div style={{
                fontSize: '12px',
                color: '#28a745',
                background: '#d4edda',
                padding: '2px 8px',
                borderRadius: '12px',
                marginTop: '4px'
              }}>
                {project.status}
              </div>
            </div>
          </div>
        ))}

        <button className="btn btn-secondary" style={{ width: '100%', marginTop: '16px', fontSize: '14px' }}>
          View All Projects
        </button>
      </div>

      {/* Quick Actions */}
      <div className="card" style={{ marginBottom: '20px', padding: '20px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Quick Actions
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <button className="btn btn-secondary" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            padding: '16px',
            fontSize: '14px'
          }}>
            <Award size={20} />
            Achievements
          </button>
          <button className="btn btn-secondary" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            padding: '16px',
            fontSize: '14px'
          }}>
            <Settings size={20} />
            Settings
          </button>
        </div>
      </div>

      {/* Member Since */}
      <div style={{
        textAlign: 'center',
        color: '#6c757d',
        fontSize: '12px',
        marginBottom: '20px'
      }}>
        Member since {user.joinDate}
      </div>
    </div>
  );
};

export default Profile;