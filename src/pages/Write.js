// pages/Write.js
import { useState } from 'react';

export default function Write() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('🖋️등록되었습니다!');
        setTitle('');
        setContent(''); // 미래의 나에게 - 여기 두 줄은 등록된 후에 박스 안 내용 초기화 해주는 것~~!
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h1>✍️ 글 작성</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: '100%', marginBottom: '1rem' }}
                />
                <br />
                <textarea
                    placeholder="내용"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{ width: '100%', height: '150px', marginBottom: '1rem' }}
                />
                <br />
                <button type="submit">등록</button>
            </form>
        </div>
    );
}
