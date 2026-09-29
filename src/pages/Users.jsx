import React, { useState } from 'react';
import { users as initialUsers } from '../data/usersData';
import UserCard from '../components/UserCard';
import { Search, Users as UsersIcon, Filter } from 'lucide-react';

export default function Users() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Filter users based on search input and status dropdown
  const filteredUsers = initialUsers.filter(user => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'All' || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="users-page">
      {/* Header Bar */}
      <div className="users-header-bar">
        <div>
          <div className="hero-pill" style={{ marginBottom: '0.5rem' }}>
            <UsersIcon size={16} />
            <span>Team Directory</span>
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Users List</h1>
        </div>

        {/* Search & Filter Controls */}
        <div className="search-filter-controls">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, email, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div style={{ position: 'relative' }}>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="search-input"
              style={{ paddingLeft: '2.5rem', width: 'auto', cursor: 'pointer' }}
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="On Leave">On Leave</option>
            </select>
            <Filter size={16} className="search-icon" style={{ left: '0.85rem' }} />
          </div>
        </div>
      </div>

      {/* Users Count Summary */}
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontWeight: 500 }}>
        Showing {filteredUsers.length} of {initialUsers.length} user profiles
      </p>

      {/* Users Grid */}
      {filteredUsers.length > 0 ? (
        <div className="users-grid">
          {filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)'
          }}
        >
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No users match your criteria</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Try clearing your search query or filter settings.</p>
          <button
            className="btn btn-secondary btn-sm"
            style={{ marginTop: '1rem' }}
            onClick={() => { setSearchTerm(''); setStatusFilter('All'); }}
          >
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
}
