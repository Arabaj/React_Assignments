// src/SettingsForm.js
import React, { useState } from 'react';

const SettingsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    theme: 'light',
    notifications: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings updated: ' + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="settings-form-container">
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Theme:</label>
          <select
            name="theme"
            value={formData.theme}
            onChange={handleChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
            />
            Enable notifications
          </label>
        </div>

        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default SettingsForm;
