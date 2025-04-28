import profileImage from './IMG_0836.png';

function Introduction() {
    return (
        <section style={{ textAlign: 'center', padding: '50px 20px' }}>
            <img src={profileImage} style={{ width: '200px', height: '200px', borderRadius: '50%' }} alt="프로필" />

            <h1 style={{ fontSize: '60px' }}>Sieun Hong</h1>

            <p style={{ marginTop: '20px', fontSize: '18px', color: '#555' }}>
                디테일을 놓치지 않는 세심주의자이자, 세상을 깊이 이해하려는 개발자 지망생입니다!
            </p>

            <p style={{ marginTop: '10px', fontSize: '16px', color: '#777' }}>
                빠르게 배우고, 끝까지 해내는 힘을 믿습니다. 사람과 기술을 잇는 따뜻한 개발자가 되고 싶습니다.
            </p>
        </section>
    );
}

export default Introduction;
