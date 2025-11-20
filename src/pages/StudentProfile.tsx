import React, { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const StudentProfile = () => {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState('/backgrounds/user.png');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    username: 'johndoe123',
    email: 'john.doe@university.edu',
    mobile: '+94 77 123 4567',
    university: 'University of Peradeniya',
    homeAddress: '123 Main Street, Kandy, Sri Lanka',
    parentName: 'Jane Doe',
    parentPhone: '+94 77 987 6543',
    parentEmail: 'jane.doe@email.com'
  });

  const [profileRef, profileVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  useEffect(() => {
    // Load profile data from localStorage if exists
    const savedProfile = localStorage.getItem('studentProfile');
    if (savedProfile) {
      setProfileData(JSON.parse(savedProfile));
    }

    // Load profile image from localStorage if exists
    const savedImage = localStorage.getItem('studentProfileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleEditField = (field: string) => {
    setEditingField(field);
  };

  const handleSaveField = (field: string) => {
    setEditingField(null);
    // Save profile data and image to localStorage
    localStorage.setItem('studentProfile', JSON.stringify(profileData));
    localStorage.setItem('studentProfileImage', profileImage);
  };

  const handleCancelEdit = () => {
    setEditingField(null);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleImageError = () => {
    // If image fails to load, we'll show the avatar fallback
    setProfileImage('');
  };

  return (
    <div className="student-profile-page">
      <div className="dashboard-wrapper">
        {/* Profile Section */}
        <div ref={profileRef} className={`profile-section fade-up ${profileVisible ? 'visible' : ''}`}>
          <div className="profile-header">
            <h2 className="section-title">Student Profile</h2>
          </div>

          <div className="profile-content">
            <div className="profile-image-section">
              <div className="profile-image-container">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Student Profile"
                    className="profile-image"
                    onClick={handleImageClick}
                    onError={handleImageError}
                  />
                ) : (
                  <div className="profile-avatar" onClick={handleImageClick}>
                    <span className="avatar-initials">{getInitials(profileData.fullName)}</span>
                  </div>
                )}
                <div className="image-overlay" onClick={handleImageClick}>
                  <i className="fas fa-camera"></i>
                  <span>Change Photo</span>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
              </div>
              <h3 className="student-name">{profileData.fullName}</h3>
            </div>

            <div className="profile-details">
              <div className="info-section">
                <h4>Student Information</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <label>Full Name</label>
                    {editingField === 'fullName' ? (
                      <div className="edit-field">
                        <input
                          type="text"
                          value={profileData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                        />
                        <div className="field-actions">
                          <button className="save-field-btn" onClick={() => handleSaveField('fullName')}>
                            <i className="fas fa-check"></i>
                          </button>
                          <button className="cancel-field-btn" onClick={handleCancelEdit}>
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="display-field">
                        <span>{profileData.fullName}</span>
                        <button className="edit-field-btn" onClick={() => handleEditField('fullName')}>
                          <i className="fas fa-edit"></i>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="info-item">
                    <label>Username</label>
                    {editingField === 'username' ? (
                      <div className="edit-field">
                        <input
                          type="text"
                          value={profileData.username}
                          onChange={(e) => handleInputChange('username', e.target.value)}
                        />
                        <div className="field-actions">
                          <button className="save-field-btn" onClick={() => handleSaveField('username')}>
                            <i className="fas fa-check"></i>
                          </button>
                          <button className="cancel-field-btn" onClick={handleCancelEdit}>
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="display-field">
                        <span>{profileData.username}</span>
                        <button className="edit-field-btn" onClick={() => handleEditField('username')}>
                          <i className="fas fa-edit"></i>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="info-item">
                    <label>Email</label>
                    {editingField === 'email' ? (
                      <div className="edit-field">
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                        <div className="field-actions">
                          <button className="save-field-btn" onClick={() => handleSaveField('email')}>
                            <i className="fas fa-check"></i>
                          </button>
                          <button className="cancel-field-btn" onClick={handleCancelEdit}>
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="display-field">
                        <span>{profileData.email}</span>
                        <button className="edit-field-btn" onClick={() => handleEditField('email')}>
                          <i className="fas fa-edit"></i>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="info-item">
                    <label>Mobile Number</label>
                    {editingField === 'mobile' ? (
                      <div className="edit-field">
                        <input
                          type="tel"
                          value={profileData.mobile}
                          onChange={(e) => handleInputChange('mobile', e.target.value)}
                        />
                        <div className="field-actions">
                          <button className="save-field-btn" onClick={() => handleSaveField('mobile')}>
                            <i className="fas fa-check"></i>
                          </button>
                          <button className="cancel-field-btn" onClick={handleCancelEdit}>
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="display-field">
                        <span>{profileData.mobile}</span>
                        <button className="edit-field-btn" onClick={() => handleEditField('mobile')}>
                          <i className="fas fa-edit"></i>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="info-item">
                    <label>University</label>
                    {editingField === 'university' ? (
                      <div className="edit-field">
                        <input
                          type="text"
                          value={profileData.university}
                          onChange={(e) => handleInputChange('university', e.target.value)}
                        />
                        <div className="field-actions">
                          <button className="save-field-btn" onClick={() => handleSaveField('university')}>
                            <i className="fas fa-check"></i>
                          </button>
                          <button className="cancel-field-btn" onClick={handleCancelEdit}>
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="display-field">
                        <span>{profileData.university}</span>
                        <button className="edit-field-btn" onClick={() => handleEditField('university')}>
                          <i className="fas fa-edit"></i>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="info-item full-width">
                    <label>Home Address</label>
                    {editingField === 'homeAddress' ? (
                      <div className="edit-field">
                        <textarea
                          value={profileData.homeAddress}
                          onChange={(e) => handleInputChange('homeAddress', e.target.value)}
                          rows={3}
                        />
                        <div className="field-actions">
                          <button className="save-field-btn" onClick={() => handleSaveField('homeAddress')}>
                            <i className="fas fa-check"></i>
                          </button>
                          <button className="cancel-field-btn" onClick={handleCancelEdit}>
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="display-field">
                        <span>{profileData.homeAddress}</span>
                        <button className="edit-field-btn" onClick={() => handleEditField('homeAddress')}>
                          <i className="fas fa-edit"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h4>Parent/Guardian Information</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <label>Parent Name</label>
                    {editingField === 'parentName' ? (
                      <div className="edit-field">
                        <input
                          type="text"
                          value={profileData.parentName}
                          onChange={(e) => handleInputChange('parentName', e.target.value)}
                        />
                        <div className="field-actions">
                          <button className="save-field-btn" onClick={() => handleSaveField('parentName')}>
                            <i className="fas fa-check"></i>
                          </button>
                          <button className="cancel-field-btn" onClick={handleCancelEdit}>
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="display-field">
                        <span>{profileData.parentName}</span>
                        <button className="edit-field-btn" onClick={() => handleEditField('parentName')}>
                          <i className="fas fa-edit"></i>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="info-item">
                    <label>Parent Phone</label>
                    {editingField === 'parentPhone' ? (
                      <div className="edit-field">
                        <input
                          type="tel"
                          value={profileData.parentPhone}
                          onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                        />
                        <div className="field-actions">
                          <button className="save-field-btn" onClick={() => handleSaveField('parentPhone')}>
                            <i className="fas fa-check"></i>
                          </button>
                          <button className="cancel-field-btn" onClick={handleCancelEdit}>
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="display-field">
                        <span>{profileData.parentPhone}</span>
                        <button className="edit-field-btn" onClick={() => handleEditField('parentPhone')}>
                          <i className="fas fa-edit"></i>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="info-item">
                    <label>Parent Email</label>
                    {editingField === 'parentEmail' ? (
                      <div className="edit-field">
                        <input
                          type="email"
                          value={profileData.parentEmail}
                          onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                        />
                        <div className="field-actions">
                          <button className="save-field-btn" onClick={() => handleSaveField('parentEmail')}>
                            <i className="fas fa-check"></i>
                          </button>
                          <button className="cancel-field-btn" onClick={handleCancelEdit}>
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="display-field">
                        <span>{profileData.parentEmail}</span>
                        <button className="edit-field-btn" onClick={() => handleEditField('parentEmail')}>
                          <i className="fas fa-edit"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;