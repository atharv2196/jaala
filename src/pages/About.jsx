import { motion } from 'framer-motion'

export default function About() {
    return (
        <section className="page-section about-page">
            <div className="container">
                <motion.div
                    className="about-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="section-title">About Jaala</h1>
                    <p className="about-tagline">Where Heritage Meets Contemporary Luxury</p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Our Story</h2>
                        <p>
                            Founded with a vision to celebrate India's rich textile heritage, Jaala represents the perfect fusion of traditional craftsmanship and modern design sensibilities. Each piece in our collection tells a story of artisans who have perfected their craft over generations.
                        </p>
                        <p>
                            We believe that luxury is not just about exclusivity—it's about authenticity, quality, and the stories woven into every thread. From the silk weavers of Banaras to the embroiderers of Lucknow, we work directly with master craftspeople to bring you garments that are truly one-of-a-kind.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2>Our Philosophy</h2>
                        <p>
                            At Jaala, we don't just create clothing—we craft experiences. Every garment is designed to make you feel confident, elegant, and connected to a legacy of excellence. We believe in:
                        </p>
                        <ul className="philosophy-list">
                            <li><strong>Timeless Design:</strong> Creating pieces that transcend trends and seasons</li>
                            <li><strong>Artisan Partnerships:</strong> Supporting traditional craftspeople and preserving heritage techniques</li>
                            <li><strong>Sustainable Luxury:</strong> Using ethically sourced materials and responsible production methods</li>
                            <li><strong>Personalized Service:</strong> Offering bespoke tailoring and customization for the perfect fit</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="about-section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2>The Jaala Experience</h2>
                        <p>
                            As a Jaala member, you're not just purchasing clothing—you're joining an exclusive community of discerning individuals who appreciate the finer things in life. Enjoy:
                        </p>
                        <ul className="benefits-list">
                            <li>Private shopping appointments and trunk shows</li>
                            <li>Access to limited edition collections</li>
                            <li>Bespoke tailoring and customization services</li>
                            <li>Invitations to exclusive events and fashion galas</li>
                            <li>Priority access to new arrivals and special offers</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="about-cta"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2>Join Our Journey</h2>
                        <p>
                            Experience the art of luxury fashion crafted with passion, precision, and respect for tradition.
                        </p>
                        <div className="cta-buttons">
                            <a href="/products" className="btn btn-primary">Explore Collections</a>
                            <a href="/contact" className="btn btn-ghost">Get in Touch</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
