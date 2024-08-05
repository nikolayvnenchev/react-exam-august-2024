import styles from './About.module.css'


export default function About() {
    return (
        <div className="mt-20 px-6 py-12 lg:px-8">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <img
                    src="/images/logo.png" alt="logo"
                    style={{ width: 'auto', height: '400px' }}
                />
            </div>
            <div className="text-center mt-10 px-4 sm:px-10">
                <h3 className={styles['text-color']}>Our short story</h3>
                <p className="mt-1 max-w-xl mx-auto text-sm leading-6 text-gray-500">The company was founded by Nikolay Nenchev in the summer of 1991 in Sofia, Bulgaria. Nikolay was a professional basketball player. As a child, he also practiced football, kickboxing, boxing, wrestling, MMA and athletics. His endless love for sports pushed him to the step of starting his own business and creating the online platform THE SPORT SHOP. The main purpose of the platform is to help people from all over the world to trade all kinds of sports equipment and accessories.</p>
            </div>
        </div>
    )
}
