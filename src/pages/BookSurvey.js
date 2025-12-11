import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Camera, FileText, ArrowRight } from 'lucide-react';

const BookSurvey = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    description: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    budget: '',
    urgency: 'normal'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const projectTypes = [
    'Kitchen Renovation',
    'Bathroom Renovation',
    'Living Room Design',
    'Bedroom Makeover',
    'Flooring',
    'Painting',
    'Electrical Work',
    'Plumbing',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,50,000',
    '₹2,50,000 - ₹5,00,000',
    'Above ₹5,00,000'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Survey booking submitted:', formData);
    alert('Survey booked successfully! We will contact you soon.');
  };

  return (
    <div className="container" style={{ paddingTop: '20px' }}>
      <header style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
          Book Free Survey
        </h1>
        <p style={{ color: '#6c757d', fontSize: '14px' }}>
          Get accurate quotes from verified contractors
        </p>
      </header>

      {/* Progress Bar */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          {[1, 2, 3].map(step => (
            <div
              key={step}
              style={{
                width: '30%',
                height: '4px',
                borderRadius: '2px',
                background: step <= currentStep ? 'var(--color-primary)' : '#e9ecef'
              }}
            />
          ))}
        </div>
        <div style={{ textAlign: 'center', fontSize: '12px', color: '#6c757d' }}>
          Step {currentStep} of {totalSteps}
        </div>
      </div>

      <div className="card" style={{ padding: '24px' }}>
        {currentStep === 1 && (
          <div>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600' }}>
              Project Details
            </h3>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                Project Type *
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                {projectTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => handleInputChange('projectType', type)}
                    style={{
                      padding: '12px 8px',
                      border: '2px solid',
                      borderColor: formData.projectType === type ? 'var(--color-primary)' : '#e9ecef',
                      borderRadius: '8px',
                      background: formData.projectType === type ? '#f8f9ff' : 'white',
                      color: formData.projectType === type ? 'var(--color-primary)' : '#495057',
                      fontSize: '12px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                Project Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe your project requirements in detail..."
                style={{
                  width: '100%',
                  minHeight: '100px',
                  padding: '12px',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '14px',
                  resize: 'vertical',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                Budget Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              >
                <option value="">Select budget range</option>
                {budgetRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600' }}>
              Location & Schedule
            </h3>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                <MapPin size={16} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                Project Address *
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Enter complete address with landmark..."
                style={{
                  width: '100%',
                  minHeight: '80px',
                  padding: '12px',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '14px',
                  resize: 'vertical',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                  <Calendar size={16} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                  <Clock size={16} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  Preferred Time
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                >
                  <option value="">Select time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 7 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                Urgency Level
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  { value: 'low', label: 'Low', color: '#28a745' },
                  { value: 'normal', label: 'Normal', color: '#ffc107' },
                  { value: 'high', label: 'High', color: '#dc3545' }
                ].map(urgency => (
                  <button
                    key={urgency.value}
                    onClick={() => handleInputChange('urgency', urgency.value)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      border: '2px solid',
                      borderColor: formData.urgency === urgency.value ? urgency.color : '#e9ecef',
                      borderRadius: '8px',
                      background: formData.urgency === urgency.value ? `${urgency.color}20` : 'white',
                      color: formData.urgency === urgency.value ? urgency.color : '#495057',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    {urgency.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600' }}>
              Review & Submit
            </h3>

            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>
                Survey Summary
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                <div><strong>Project:</strong> {formData.projectType}</div>
                <div><strong>Budget:</strong> {formData.budget || 'Not specified'}</div>
                <div><strong>Date:</strong> {formData.preferredDate || 'Flexible'}</div>
                <div><strong>Time:</strong> {formData.preferredTime || 'Flexible'}</div>
                <div><strong>Urgency:</strong> {formData.urgency}</div>
              </div>
            </div>

            <div style={{
              background: '#e7f3ff',
              border: '1px solid #b3d9ff',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: 'var(--color-primary)' }}>
                What happens next?
              </h4>
              <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: 'var(--color-primary)' }}>
                <li>We'll contact you within 2 hours</li>
                <li>3-5 verified contractors will visit for free survey</li>
                <li>You'll receive detailed quotes within 24 hours</li>
                <li>Choose the best contractor and start your project</li>
              </ul>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              color: '#6c757d',
              marginBottom: '20px'
            }}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the Terms & Conditions and Privacy Policy
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="btn btn-secondary"
            style={{
              opacity: currentStep === 1 ? 0.5 : 1,
              cursor: currentStep === 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={nextStep}
              className="btn btn-primary"
              disabled={
                (currentStep === 1 && (!formData.projectType || !formData.description)) ||
                (currentStep === 2 && !formData.address)
              }
            >
              Next
              <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Book Free Survey
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookSurvey;