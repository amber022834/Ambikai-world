import "./Footer.scss";
// import { useNavigate } from 'react-router-dom';

function Footer() {
    // const navigate = useNavigate();

    return (
        <section id="footer">

            <button
                className="Back-to-top-button"
                onClick={() => {
                    const root = document.getElementById('root');
                    if (root) {
                        root.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }}
                style={{ cursor: 'pointer' }}
            >
                <div className="chatbubble">
                    <span>回頂部！</span>
                </div>
            </button>

            <div className="footerwrapper"


            >
                <div className="footer-overlaytext">
                    <div className="footer-columntext">


                        <div className="aboutus">
                            <h4>Explore</h4>
                            <p>關於我</p>
                            <p>作品集</p>
                            <p>線上課程</p>
                        </div>

                        <div className="Joinus">
                            <h4>Join</h4>
                            <p>會員登入</p>
                            <p>訂閱說明</p>
                        </div>

                        <div className="Terms">
                            <h4>Terms and Conditions</h4>
                            <p>隱私權和cookies</p>
                            <p>訂閱說明</p>
                        </div>
                    </div>

                    <div className="copyright">Copyright © 2025Ambikai</div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
