import React, { useState } from 'react';
import { Clock, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

const Jobs = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const mockJobs = {
    ongoing: [
      {
        id: 1,
        title: "Kitchen Renovation",
        contractor: "Rajesh Kumar",
        status: "In Progress",
        progress: 65,
        startDate: "2024-01-15",
        estimatedCompletion: "2024-02-15",
        totalAmount: "₹2,50,000",
        paidAmount: "₹1,50,000",
        nextPayment: "₹50,000",
        nextMilestone: "Electrical work completion"
      },
      {
        id: 2,
        title: "Bathroom Tile Work",
        contractor: "Amit Singh",
        status: "Material Pending",
        progress: 30,
        startDate: "2024-01-20",
        estimatedCompletion: "2024-02-10",
        totalAmount: "₹80,000",
        paidAmount: "₹20,000",
        nextPayment: "₹30,000",
        nextMilestone: "Tile delivery"
      }
    ],
    completed: [
      {
        id: 3,
        title: "Living Room Painting",
        contractor: "Priya Sharma",
        status: "Completed",
        completedDate: "2024-01-10",
        totalAmount: "₹45,000",
        paidAmount: "₹45,000",
        rating: 4.8
      }
    ],
    quotations: [
      {
        id: 4,
        title: "Balcony Renovation",
        contractor: "Vikram Patel",
        quotedAmount: "₹1,20,000",
        validUntil: "2024-02-01",
        description: "Complete balcony renovation with waterproofing and flooring",
        timeline: "3-4 weeks"
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'var(--color-primary)';
      case 'Material Pending': return 'var(--color-secondary)';
      case 'Completed': return 'var(--color-accent)';
      default: return 'var(--color-text)';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'In Progress': return <Clock size={16} />;
      case 'Material Pending': return <AlertCircle size={16} />;
      case 'Completed': return <CheckCircle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <div className="container" style={{ paddingTop: '20px' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
          My Jobs
        </h1>
        <p style={{ color: '#6c757d', fontSize: '14px' }}>
          Track your ongoing and completed projects
        </p>
      </header>

      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '24px',
        background: 'white',
        padding: '4px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        {[
          { id: 'ongoing', label: 'Ongoing', count: mockJobs.ongoing.length },
          { id: 'completed', label: 'Completed', count: mockJobs.completed.length },
          { id: 'quotations', label: 'Quotations', count: mockJobs.quotations.length }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '12px 8px',
              border: 'none',
              borderRadius: '8px',
              background: activeTab === tab.id ? 'var(--color-primary)' : 'transparent',
              color: activeTab === tab.id ? 'white' : 'var(--color-text)',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      <div>
        {activeTab === 'ongoing' && (
          <div>
            {mockJobs.ongoing.map(job => (
              <div key={job.id} className="card" style={{ marginBottom: '16px', padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>
                      {job.title}
                    </h3>
                    <p style={{ margin: 0, color: '#6c757d', fontSize: '14px' }}>
                      by {job.contractor}
                    </p>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: getStatusColor(job.status),
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {getStatusIcon(job.status)}
                    {job.status}
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '12px', color: '#6c757d' }}>Progress</span>
                    <span style={{ fontSize: '12px', fontWeight: '600' }}>{job.progress}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '6px',
                    background: '#e9ecef',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${job.progress}%`,
                      height: '100%',
                      background: 'var(--color-primary)',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '2px' }}>Total Amount</div>
                    <div style={{ fontSize: '14px', fontWeight: '600' }}>{job.totalAmount}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '2px' }}>Paid</div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#28a745' }}>{job.paidAmount}</div>
                  </div>
                </div>

                <div style={{
                  background: '#f8f9fa',
                  padding: '12px',
                  borderRadius: '8px',
                  marginBottom: '12px'
                }}>
                  <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '4px' }}>Next Milestone</div>
                  <div style={{ fontSize: '14px', fontWeight: '500' }}>{job.nextMilestone}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-primary)', marginTop: '4px' }}>
                    Next Payment: {job.nextPayment}
                  </div>
                </div>

                <button className="btn btn-primary" style={{ width: '100%', fontSize: '14px' }}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'completed' && (
          <div>
            {mockJobs.completed.map(job => (
              <div key={job.id} className="card" style={{ marginBottom: '16px', padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>
                      {job.title}
                    </h3>
                    <p style={{ margin: 0, color: '#6c757d', fontSize: '14px' }}>
                      by {job.contractor}
                    </p>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#28a745',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    <CheckCircle size={16} />
                    Completed
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '2px' }}>Completed On</div>
                    <div style={{ fontSize: '14px', fontWeight: '600' }}>{job.completedDate}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '2px' }}>Total Paid</div>
                    <div style={{ fontSize: '14px', fontWeight: '600' }}>{job.totalAmount}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn btn-secondary" style={{ flex: 1, fontSize: '14px' }}>
                    Rate & Review
                  </button>
                  <button className="btn btn-primary" style={{ flex: 1, fontSize: '14px' }}>
                    Book Again
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'quotations' && (
          <div>
            {mockJobs.quotations.map(quote => (
              <div key={quote.id} className="card" style={{ marginBottom: '16px', padding: '16px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>
                    {quote.title}
                  </h3>
                  <p style={{ margin: 0, color: '#6c757d', fontSize: '14px' }}>
                    by {quote.contractor}
                  </p>
                </div>

                <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#495057' }}>
                  {quote.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '2px' }}>Quoted Amount</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-primary)' }}>{quote.quotedAmount}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '2px' }}>Timeline</div>
                    <div style={{ fontSize: '14px', fontWeight: '600' }}>{quote.timeline}</div>
                  </div>
                </div>

                <div style={{
                  fontSize: '12px',
                  color: '#dc3545',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Calendar size={12} />
                  Valid until {quote.validUntil}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn btn-secondary" style={{ flex: 1, fontSize: '14px' }}>
                    Decline
                  </button>
                  <button className="btn btn-primary" style={{ flex: 1, fontSize: '14px' }}>
                    Accept Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;