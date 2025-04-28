function Footer() {
    return (
        <footer style={footerStyle}>
            {/* 이메일 */}
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
                📧 Email:{' '}
                <a href="mailto:030107hse@naver.com" style={linkStyle}>
                    030107hse@naver.com
                </a>
            </p>

            {/* 깃허브 */}
            <p style={{ fontSize: '16px' }}>
                🐙 GitHub:{' '}
                <a href="https://github.com/Sieun-front" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    github.com/Sieun-front
                </a>
            </p>
        </footer>
    );
}
const footerStyle = {
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: '30px 0',
    textAlign: 'center',
    fontSize: '14px',
    color: '#555',
    marginTop: '0',
    marginBottom: '0',
    borderTop: '1px solid #eee',
};
const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
};
export default Footer;
