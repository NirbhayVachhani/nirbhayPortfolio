import React, { useState } from 'react';
import { Experience as ExperienceType } from '../data/portfolio';

interface ExperienceProps {
  experiences: ExperienceType[];
  highlightedSkill?: string;
}

// Simple styles
const styles = {
  card: {
    backgroundColor: '#1f2937',
    borderRadius: '8px',
    border: '1px solid #374151',
    marginBottom: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 20px',
    backgroundColor: '#111827',
    borderBottom: '1px solid #374151',
    cursor: 'pointer'
  },
  jobTitle: {
    color: '#f9fafb',
    fontWeight: 'bold',
    fontSize: '18px'
  },
  company: {
    color: '#14b8a6',
    fontSize: '16px'
  },
  period: {
    color: '#9ca3af',
    fontSize: '14px'
  },
  details: {
    padding: '15px 20px'
  },
  detailItem: {
    marginBottom: '10px',
    display: 'flex'
  },
  detailLabel: {
    color: '#14b8a6',
    width: '120px',
    flexShrink: 0
  },
  detailValue: {
    color: '#d1d5db'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '10px 0'
  },
  listItem: {
    color: '#d1d5db',
    marginBottom: '8px',
    display: 'flex'
  },
  bullet: {
    color: '#14b8a6',
    marginRight: '10px'
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '10px'
  },
  skill: {
    backgroundColor: '#374151',
    color: '#5eead4',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '12px'
  },
  highlightedSkill: {
    backgroundColor: '#14b8a6',
    color: 'white'
  }
};

const ExperienceBackup: React.FC<ExperienceProps> = ({ experiences, highlightedSkill }) => {
  // Sort experiences by start date in descending order (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const aDate = a.startDate === "Present" ? new Date() : new Date(a.startDate);
    const bDate = b.startDate === "Present" ? new Date() : new Date(b.startDate);
    return bDate.getTime() - aDate.getTime();
  });
  
  // State to track expanded nodes
  const [expandedNodes, setExpandedNodes] = useState<Record<number, boolean>>(
    sortedExperiences.reduce((acc, exp) => ({...acc, [exp.id]: true}), {})
  );
  
  // Toggle node expansion
  const toggleNode = (id: number) => {
    setExpandedNodes(prev => ({...prev, [id]: !prev[id]}));
  };
  
  return (
    <div>
      <div style={{ 
        backgroundColor: '#1e293b', 
        borderRadius: '12px', 
        padding: '20px',
        marginBottom: '40px'
      }}>
        <div style={{ 
          color: '#94a3b8', 
          fontFamily: 'monospace', 
          marginBottom: '15px'
        }}>
          $ career_explorer --view-timeline --sort-by=recent
        </div>
        
        {sortedExperiences.map((experience) => (
          <div key={experience.id} style={styles.card}>
            <div 
              style={styles.cardHeader}
              onClick={() => toggleNode(experience.id)}
            >
              <div>
                <div style={styles.jobTitle}>{experience.role}</div>
                <div style={styles.company}>{experience.company}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={styles.period}>{experience.period}</div>
                <div style={styles.period}>{experience.location}</div>
              </div>
            </div>
            
            {expandedNodes[experience.id] && (
              <div style={styles.details}>
                <div style={styles.detailItem}>
                  <div style={styles.detailLabel}>Responsibilities:</div>
                </div>
                
                <ul style={styles.list}>
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} style={styles.listItem}>
                      <span style={styles.bullet}>›</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div style={styles.detailItem}>
                  <div style={styles.detailLabel}>Skills:</div>
                </div>
                
                <div style={styles.skillsContainer}>
                  {experience.skills.map((skill) => (
                    <span 
                      key={skill} 
                      style={{
                        ...styles.skill,
                        ...(skill === highlightedSkill ? styles.highlightedSkill : {})
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        
        <div style={{ 
          color: '#94a3b8', 
          fontFamily: 'monospace', 
          marginTop: '20px',
          borderTop: '1px solid #334155',
          paddingTop: '15px'
        }}>
          $ Timeline loaded successfully. Found {sortedExperiences.length} positions.
        </div>
      </div>
    </div>
  );
};

export default ExperienceBackup;