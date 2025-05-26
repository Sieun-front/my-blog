export default function Posts() {
    return (
        <div style={{ padding: '1rem' }}>
            <h1>🖇️ 게시글 목록</h1>

            <div
                style={{
                    border: '1px solid #ccc',
                    padding: '1rem',
                    marginBottom: '1rem',
                    borderRadius: '8px',
                }}
            >
                <strong>첫번째 글</strong>
                <br />
                <small>2025.05.25</small>
            </div>

            <div
                style={{
                    border: '1px solid #ccc',
                    padding: '1rem',
                    marginBottom: '1rem',
                    borderRadius: '8px',
                }}
            >
                <strong>우와</strong>
                <br />
                <small>2025.05.26</small>
            </div>

            <div
                style={{
                    border: '1px solid #ccc',
                    padding: '1rem',
                    marginBottom: '1rem',
                    borderRadius: '8px',
                }}
            >
                <strong>신기하다</strong>
                <br />
                <small>2025.05.27</small>
            </div>
        </div>
    );
}
