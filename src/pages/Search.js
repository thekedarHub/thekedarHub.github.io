import React, { useState } from 'react';
import { Search as SearchIcon, Filter, MapPin, Star } from 'lucide-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [results, setResults] = useState([]);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'contractors', label: 'Contractors' },
    { id: 'projects', label: 'Projects' },
    { id: 'materials', label: 'Materials' }
  ];

  const mockResults = [
    {
      id: 1,
      type: 'contractor',
      name: 'Rajesh Kumar',
      specialty: 'Kitchen & Bathroom Renovation',
      rating: 4.8,
      reviews: 127,
      location: 'Mumbai, Maharashtra',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    },
    {
      id: 2,
      type: 'contractor',
      name: 'Amit Singh',
      specialty: 'Tile Work & Flooring',
      rating: 4.6,
      reviews: 89,
      location: 'Delhi, NCR',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
    },
    {
      id: 3,
      type: 'project',
      name: 'Modern Kitchen Design',
      category: 'Kitchen Renovation',
      price: '₹2,50,000',
      duration: '3-4 weeks',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100'
    }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setResults(mockResults);
    }
  };

  return (
    <div className="container" style={{ paddingTop: '20px' }}>
      <div style={{ marginBottom: '24px' }}>
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '16px',
          background: 'white',
          padding: '12px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            background: '#f8f9fa',
            borderRadius: '8px',
            padding: '0 12px'
          }}>
            <SearchIcon size={20} color="#6c757d" />
            <input
              type="text"
              placeholder="Search contractors, projects, materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              style={{
                border: 'none',
                background: 'none',
                padding: '12px 8px',
                flex: 1,
                outline: 'none',
                fontSize: '16px'
              }}
            />
          </div>
          <button
            onClick={handleSearch}
            className="btn btn-primary"
            style={{ padding: '12px 16px' }}
          >
            Search
          </button>
        </div>

        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '20px',
                background: activeFilter === filter.id ? 'var(--color-primary)' : '#e9ecef',
                color: activeFilter === filter.id ? 'white' : 'var(--color-text)',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {results.length > 0 && (
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
            Search Results
          </h3>

          {results.map(result => (
            <div key={result.id} className="card" style={{ marginBottom: '16px', padding: '16px' }}>
              {result.type === 'contractor' ? (
                <div style={{ display: 'flex', gap: '12px' }}>
                  <img
                    src={result.image}
                    alt={result.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>
                      {result.name}
                    </h4>
                    <p style={{ margin: '0 0 8px 0', color: '#6c757d', fontSize: '14px' }}>
                      {result.specialty}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Star size={12} fill="#ffc107" color="#ffc107" />
                        <span>{result.rating} ({result.reviews} reviews)</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6c757d' }}>
                        <MapPin size={12} />
                        <span>{result.location}</span>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary" style={{ fontSize: '14px', padding: '8px 16px' }}>
                    View Profile
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', gap: '12px' }}>
                  <img
                    src={result.image}
                    alt={result.name}
                    style={{
                      width: '80px',
                      height: '60px',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>
                      {result.name}
                    </h4>
                    <p style={{ margin: '0 0 8px 0', color: '#6c757d', fontSize: '14px' }}>
                      {result.category}
                    </p>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#6c757d' }}>
                      <span>Price: {result.price}</span>
                      <span>Duration: {result.duration}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {searchQuery && results.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: '#6c757d' }}>
          <SearchIcon size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
          <p>No results found for "{searchQuery}"</p>
          <p style={{ fontSize: '14px' }}>Try different keywords or check your spelling</p>
        </div>
      )}
    </div>
  );
};

export default Search;