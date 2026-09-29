import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { users } from '../data/usersData';
import {
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  Briefcase,
  Building,
  UserCheck,
  Clock,
  ChevronLeft,
  ChevronRight,
  UserX,
  Star,
  FolderGit2
} from 'lucide-react';

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Convert string param to integer
  const userId = parseInt(id, 10);
  const user = users.find(u => u.id === userId);

  // Helper pagination logic
  const totalUsers = users.length;
  const prevUserId = userId > 1 ? userId - 1 : null;
  const nextUserId = userId < totalUsers ? userId + 1 : null;

  // Render 404 state if user not found
  if (!user) {
    return (
      <div className="user-detail-container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <div className="stat-icon-wrapper" style={{ width: 70, height: 70 }}>
          <UserX size={36} />
        </div>
        <h1 style={{ fontSize: '2rem', margin: '1rem 0 0.5rem' }}>User Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          No user profile exists with the ID parameters <code>#{id}</code>.
        </p>
        <button onClick={() => navigate('/users')} className="btn btn-primary">
          <ArrowLeft size={18} />
          <span>Go Back to Users List</span>
        </button>
      </div>
    );
  }

  return (
    <div className="user-detail-container">
      {/* Detail Page Top Navigation Bar */}
      <div className="detail-nav-bar">
        <button onClick={() => navigate('/users')} className="btn btn-secondary btn-sm">
          <ArrowLeft size={16} />
          <span>Go Back to Users</span>
        </button>

        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          User Profile ID: #{user.id}
        </span>
      </div>

      {/* Main Profile Card */}
      <div className="detail-card">
        {/* Decorative Top Banner */}
        <div className="detail-banner" />

        <div className="detail-body">
          {/* Header section with avatar, title, and status */}
          <div className="detail-profile-header">
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem', flexWrap: 'wrap' }}>
              <img
                src={user.avatar}
                alt={user.name}
                className="detail-avatar"
              />
              <div className="detail-title-group">
                <h1>{user.name}</h1>
                <p className="detail-role">{user.role}</p>
              </div>
            </div>

            <span className={`badge ${user.status === 'Active' ? 'badge-active' : 'badge-leave'}`} style={{ fontSize: '0.9rem', padding: '0.4rem 1rem' }}>
              {user.status === 'Active' ? <UserCheck size={14} /> : <Clock size={14} />}
              {user.status}
            </span>
          </div>

          {/* Quick Metrics */}
          {user.stats && (
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>
                <FolderGit2 size={18} style={{ color: 'var(--accent-primary)' }} />
                <span>{user.stats.projects} Projects Completed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>
                <Star size={18} style={{ color: '#f59e0b' }} />
                <span>{user.stats.rating} Performance Rating</span>
              </div>
            </div>
          )}

          {/* Detailed Info Grid */}
          <div className="detail-info-grid">
            <div className="info-box">
              <label>Email Address</label>
              <p>
                <Mail size={16} className="text-muted" />
                <a href={`mailto:${user.email}`} style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>
                  {user.email}
                </a>
              </p>
            </div>

            <div className="info-box">
              <label>Phone Number</label>
              <p>
                <Phone size={16} className="text-muted" />
                {user.phone || 'N/A'}
              </p>
            </div>

            <div className="info-box">
              <label>Department</label>
              <p>
                <Building size={16} className="text-muted" />
                {user.department || 'General'}
              </p>
            </div>

            <div className="info-box">
              <label>Location</label>
              <p>
                <MapPin size={16} className="text-muted" />
                {user.location}
              </p>
            </div>
          </div>

          {/* Biography */}
          <div className="detail-section">
            <h3>Biography & Overview</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {user.bio}
            </p>
          </div>

          {/* Key Skills / Competencies */}
          {user.skills && (
            <div className="detail-section">
              <h3>Technical Competencies</h3>
              <div className="skills-tags">
                {user.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Dynamic Route Pagination Controls */}
          <div className="detail-pagination">
            {prevUserId ? (
              <Link to={`/users/${prevUserId}`} className="btn btn-secondary btn-sm">
                <ChevronLeft size={16} />
                <span>Previous User (#{prevUserId})</span>
              </Link>
            ) : (
              <div />
            )}

            {nextUserId ? (
              <Link to={`/users/${nextUserId}`} className="btn btn-secondary btn-sm">
                <span>Next User (#{nextUserId})</span>
                <ChevronRight size={16} />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
