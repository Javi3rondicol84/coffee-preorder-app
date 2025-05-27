import './Footer.css';

export default function Footer() {


    return (
        <>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                <h3>Café del Sur</h3>
                <p>Vendemos café de especialidad para llevar. Hacés tu pedido online y lo retirás en nuestro local. Simple, rápido y delicioso.</p>
                </div>

                <div className="footer-section pickup">
                <h4>Retiro en el local</h4>
                <p>Dirección: Av. Corrientes 1234, Buenos Aires</p>
                <p>Horarios de retiro:</p>
                <ul>
                    <li>Lunes a Viernes: 8:00 – 18:00</li>
                    <li>Sábados: 9:00 – 13:00</li>
                </ul>
                </div>

                <div className="footer-section contact">
                <h4>Contacto</h4>
                <p>Email: pedidos@cafedelsur.com</p>
                <p>Teléfono: +54 9 11 1234 5678</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Café del Sur — Solo para llevar, siempre con la mejor! ☕</p>
            </div>
        </footer>

        </>
    );
}