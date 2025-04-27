import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function PostSkeleton() {
  return (
    <div style={{
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px'
    }}>
      <h2>
        <Skeleton width="60%" height={20} />
      </h2>
      <p style={{ marginTop: '8px' }}>
        <Skeleton width="40%" height={14} />
      </p>
      <div style={{ marginTop: '16px' }}>
        <Skeleton count={3} height={12} style={{ marginBottom: '10px' }} />
      </div>
    </div>
  );
}