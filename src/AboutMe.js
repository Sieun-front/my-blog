function AboutMe() {
    return (
        <section style={{ padding: '50px 20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>About Me</h2>

            <div style={boxStyle}>
                <p>
                    <span style={{ fontWeight: 'bold', fontSize: '25px' }}>Deeper_</span> <br />
                    저는 어떤 일이든 깊이 이해하려는 태도를 가장 중요하게 생각합니다. 표면만 보는 것을 넘어서, 근본적인
                    원리와 맥락을 파악하려는 노력을 꾸준히 이어가고 있습니다.
                </p>

                <p>
                    <span style={{ fontWeight: 'bold', fontSize: '25px' }}>Eager_</span> <br />
                    문제를 만나면 쉽게 포기하지 않습니다. 집요하게 파고들어 해결하는 과정을 즐기며, 어려운 문제일수록 더
                    성취감을 느낍니다.
                </p>

                <p>
                    <span style={{ fontWeight: 'bold', fontSize: '25px' }}>Better_</span> <br />
                    개발을 배우면서 느꼈던 가장 큰 매력은, 세상을 조금 더 효율적이고 의미있게 바꿀 수 있다는
                    가능성이었습니다. 기술을 통해 사람들의 삶을 더 편리하게 만드는 개발자가 되고 싶습니다.
                </p>
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

export default AboutMe;
