import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav
            style={{
                backgroundColor: '#f4f4f4',
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #ddd',
            }}
        >
            <h2 style={{ margin: 0 }}>Sieun's Blog</h2>
            <div>
                <Link to="/" style={{ marginRight: '1rem', color: '#181617' }}>
                    Home
                </Link>
                <Link to="/posts" style={{ marginRight: '1rem', color: '#181617' }}>
                    Posts
                </Link>
                <Link to="/write" style={{ marginRight: '1rem', color: '#181617' }}>
                    Write
                </Link>
            </div>
        </nav>
    );
}
