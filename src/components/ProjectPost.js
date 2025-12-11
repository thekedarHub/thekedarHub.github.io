import React, { useState } from 'react';
import { ChevronUp, ChevronDown, User, Calendar } from 'lucide-react';
import MediaCarousel from './MediaCarousel';

const ProjectPost = ({ post }) => {
  const [votes, setVotes] = useState({ up: post.upvotes, down: post.downvotes });
  const [userVote, setUserVote] = useState(null);

  const handleVote = (type) => {
    if (userVote === type) {
      setUserVote(null);
      setVotes(prev => ({ ...prev, [type]: prev[type] - 1 }));
    } else {
      if (userVote) {
        setVotes(prev => ({ ...prev, [userVote]: prev[userVote] - 1 }));
      }
      setUserVote(type);
      setVotes(prev => ({ ...prev, [type]: prev[type] + 1 }));
    }
  };

  return (
    <div className="card" style={{ marginBottom: '16px' }}>
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px'
          }}>
            <User size={20} color="white" />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600', fontFamily: 'var(--font-heading-en)' }}>
              {post.contractor.name}
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text)', fontSize: '12px' }}>
              <Calendar size={12} style={{ marginRight: '4px' }} />
              {post.date}
            </div>
          </div>
        </div>

        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontFamily: 'var(--font-heading-en)' }}>{post.title}</h3>
        <p style={{ color: 'var(--color-text)', fontSize: '14px', marginBottom: '12px' }}>
          {post.description}
        </p>

        <div style={{ marginBottom: '12px' }}>
          {post.hashtags.map(tag => (
            <span key={tag} style={{
              background: '#e9ecef',
              color: 'var(--color-text)',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              marginRight: '8px',
              marginBottom: '4px',
              display: 'inline-block'
            }}>
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <MediaCarousel media={post.media} />

      <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onClick={() => handleVote('up')}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: userVote === 'up' ? '#28a745' : '#6c757d',
              cursor: 'pointer'
            }}
          >
            <ChevronUp size={16} />
            <span style={{ fontSize: '14px' }}>{votes.up}</span>
          </button>
          <button
            onClick={() => handleVote('down')}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: userVote === 'down' ? '#dc3545' : '#6c757d',
              cursor: 'pointer'
            }}
          >
            <ChevronDown size={16} />
            <span style={{ fontSize: '14px' }}>{votes.down}</span>
          </button>
        </div>

        <button className="btn btn-primary" style={{ fontSize: '14px', padding: '8px 16px' }}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ProjectPost;