function Experiences() {
    return (
        <section style={{ padding: '50px 20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Experiences</h2>

            {/* 경험 */}
            <div style={boxStyle}>
                <div style={{ marginBottom: '40px' }}>
                    <h3>👩🏻‍💻 멋쟁이사자처럼 (2025)</h3>
                    <p style={{ marginTop: '10px' }}>
                        <strong>Frontend Track</strong> 소속으로 활동 중이며,{' '}
                        <strong>HTML, CSS, JavaScript, React</strong>를 기반으로 한 웹 개발을 집중적으로 학습하고
                        있습니다.
                    </p>
                </div>

                {/* 공부중인 프로그램 */}
                <div>
                    <h3>📚 현재 공부 중인 기술</h3>
                    <ul style={{ marginTop: '10px', paddingLeft: '20px', textAlign: 'left' }}>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React.js</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
const boxStyle = {
    backgroundColor: '#f9f9f9',
    border: '1px',
    borderRadius: '12px',
    padding: '30px',
    marginBottom: '30px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
};
export default Experiences;
