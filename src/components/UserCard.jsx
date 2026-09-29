import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, UserCheck, Clock } from 'lucide-react';

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <div>
        <div className="user-card-header">
          <img
            src={user.avatar}
            alt={user.name}
            className="user-avatar"
          />
          <div>
            <h3 className="user-name">{user.name}</h3>
            <span className="user-role">{user.role}</span>
          </div>
        </div>

        <div className="user-meta-list">
          <div className="meta-item">
            <Mail size={16} className="text-muted" />
            <span>{user.email}</span>
          </div>
          <div className="meta-item">
            <MapPin size={16} className="text-muted" />
            <span>{user.location}</span>
          </div>
        </div>
      </div>

      <div className="user-card-footer">
        <span className={`badge ${user.status === 'Active' ? 'badge-active' : 'badge-leave'}`}>
          {user.status === 'Active' ? <UserCheck size={12} /> : <Clock size={12} />}
          {user.status}
        </span>

        <Link to={`/users/${user.id}`} className="btn btn-secondary btn-sm">
          <span>View Profile</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
