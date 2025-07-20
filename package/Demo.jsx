import React, { useState } from 'react';
import { Button, Input } from '../index.js';

const Demo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    website: '',
    newsletter: false,
    gender: '',
    volume: 50
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
    alert('Form submitted! Check console for data.');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Zero UI Demo</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
          <Button variant="outline">Outline</Button>
        </div>
        
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Inputs</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Input
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <Input
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            helperText="We'll never share your email"
          />

          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <Input
            type="number"
            label="Age"
            placeholder="Enter your age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            min="18"
            max="100"
          />

          <Input
            type="text"
            label="Website"
            placeholder="example"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            prefix="https://"
            suffix=".com"
          />

          <div>
            <Input
              type="checkbox"
              label="Subscribe to newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <p style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>Gender:</p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Input
                type="radio"
                label="Male"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
              />
              <Input
                type="radio"
                label="Female"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}
              />
              <Input
                type="radio"
                label="Other"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <Input
            type="range"
            label={`Volume: ${formData.volume}%`}
            name="volume"
            value={formData.volume}
            onChange={handleInputChange}
            min="0"
            max="100"
            step="1"
          />

          <Input
            type="file"
            label="Upload Profile Picture"
            accept="image/*"
          />
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Button variant="primary" size="large" onClick={handleSubmit}>
          Submit Form
        </Button>
      </div>
    </div>
  );
};

export default Demo;
