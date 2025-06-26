import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { fadeIn, fadeInLeft, fadeInRight, staggerContainer, scaleUp } from '../utils/animations';

const Gallery: React.FC = () => {
    const servicesRef = useRef(null);
    const statsRef = useRef(null);
    
    const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
    const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

    const services = [
        {
            title: 'Преградни стени',
            imageSrc: '/assets/Images/PregradniSteni/PregradniSteniMain.jpg',
            link: '/gallery/PregradniSteni'
        },
        {
            title: 'Предстенни обшивки',
            imageSrc: '/assets/Images/PredStenni/PredStenniMain.jpg',
            link: '/gallery/PredStenni'
        },
        {
            title: 'Обшивки и облицовки',
            imageSrc: '/assets/Images/Oblicovki/OblicovkiMain.jpg',
            link: '/gallery/Oblicovki'
        },
        {
            title: 'Окачени тавани от гипсокартон',
            imageSrc: '/assets/Images/OkacheniTavani/OkacheniTavaniMain.JPEG',
            link: '/gallery/OkacheniTavani'
        },
        {
            title: 'Окачени PVC тавани',
            imageSrc: '/assets/Images/PVCtavani/PVCtavaniMain.jpg',
            link: '/gallery/PVCtavani'
        },
        {
            title: 'Растерни тавани',
            imageSrc: '/assets/Images/RasterniTavani/RasterniTavaniMain.jpg',
            link: '/gallery/RasterniTavani'
        }
    ];

    return (
        <motion.div 
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Нашите проекти
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Разгледайте някои от нашите проекти за всеки тип услуга
                    </motion.p>
                </motion.div>

                <motion.div 
                    ref={servicesRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate={servicesInView ? "visible" : "hidden"}
                    variants={staggerContainer(0.1)}
                >
                    {services.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className="group relative"
                            variants={scaleUp(0.1 * index % 0.5)}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link 
                                to={service.link}
                                className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
                            >
                                <div className="relative pb-[75%] overflow-hidden">
                                    <img
                                        src={service.imageSrc}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.onerror = null;
                                            target.src = '/assets/default-service.jpg';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                        <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="mr-2">Разгледай повече</span>
                                            <motion.svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                className="h-5 w-5" 
                                                viewBox="0 0 20 20" 
                                                fill="currentColor"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ 
                                                    repeat: Infinity, 
                                                    repeatType: "loop", 
                                                    duration: 1.5,
                                                    repeatDelay: 0.5
                                                }}
                                            >
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </motion.svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                    ref={statsRef}
                    className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-12"
                    initial="hidden"
                    animate={statsInView ? "visible" : "hidden"}
                    variants={staggerContainer(0.2)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <motion.div variants={fadeInLeft(0.1)}>
                            <motion.div 
                                className="text-3xl font-bold text-blue-600 mb-2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.3,
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                100+
                            </motion.div>
                            <motion.div 
                                className="text-gray-600"
                                variants={fadeIn(0.2)}
                            >
                                Завършени проекти
                            </motion.div>
                        </motion.div>
                        <motion.div variants={fadeIn(0.3)}>
                            <motion.div 
                                className="text-3xl font-bold text-blue-600 mb-2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.5,
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                10+
                            </motion.div>
                            <motion.div 
                                className="text-gray-600"
                                variants={fadeIn(0.4)}
                            >
                                Години опит
                            </motion.div>
                        </motion.div>
                        <motion.div variants={fadeInRight(0.5)}>
                            <motion.div 
                                className="text-3xl font-bold text-blue-600 mb-2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.7,
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                100%
                            </motion.div>
                            <motion.div 
                                className="text-gray-600"
                                variants={fadeIn(0.6)}
                            >
                                Качество на изпълнение
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Gallery;