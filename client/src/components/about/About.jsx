import styles from './About.module.css'


export default function About() {
    return (
        <div className="mt-20 px-6 py-12 lg:px-8">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <img
                    src="https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/311292841_649907736583974_6624674619523619269_n.png?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=y9ZN42uKKUoQ7kNvgGnN-u2&_nc_ht=scontent-sof1-1.xx&oh=00_AYBrxByAr1A9kGEJOhDBXzELWFPXZVkw2BefQ7Qn8fJlSQ&oe=66A40CAD" alt="logo"
                    style={{ width: 'auto', height: '400px' }}
                />
            </div>
            <div className="text-center mt-10 px-4 sm:px-10">
                <h3 className={styles['text-color']}>Our short story</h3>
                <p className="mt-1 max-w-xl mx-auto text-sm leading-6 text-gray-500">The company was founded by Nikolay Nenchev in the summer of 1993 in Plovdiv, Bulgaria. Nikolay was a professional basketball player from Targovishte, Bulgaria. As a child, he also practiced football, kickboxing, boxing, wrestling, MMA and athletics. His endless love for sports pushed him to the step of starting his own business and creating the online platform THE SPORT SHOP. The main purpose of the platform is to help people from all over the world to trade all kinds of sports equipment and accessories.</p>
            </div>
        </div>
    )
}
