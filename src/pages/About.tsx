import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { fadeIn, fadeInLeft, fadeInRight, staggerContainer, scaleUp } from '../utils/animations';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const navigate = useNavigate();
  
  // Refs for animation sections
  const headerRef = useRef(null);
  const companyRef = useRef(null);
  const missionRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Check if sections are in view
  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
  const companyInView = useInView(companyRef, { once: true, amount: 0.2 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });
  
  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
    return (
        <motion.div 
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SEO 
                title="За нас" 
                description="ГСК е екип от професионалисти с богат опит в монтажа на гипсокартон на конструкция в Бургас и региона. Нашите ценности включват професионализъм, коректност и внимание към детайла. GSK is a team of professionals with extensive experience in drywall installation in Burgas."
                keywords="за нас гск бургас, za nas gsk burgas, гипсокартон бургас, gipskarton burgas, гск бургас, gsk burgas, опитни майстори бургас, opitni maistori burgas, професионален монтаж гипсокартон, profesionalen montaj gipskarton, строителна фирма бургас, stroitelna firma burgas, екип гипсокартон, ekip gipskarton"
                schemaType="Organization"
                canonicalUrl="/about"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    ref={headerRef}
                    className="text-center mb-16"
                    initial="hidden"
                    animate={headerInView ? "visible" : "hidden"}
                    variants={staggerContainer(0.1)}
                >
                    <motion.div 
                        className="flex justify-center items-center mb-6"
                        variants={fadeIn(0.1)}
                    >
                        {/* <img 
                            src={"https://i.ibb.co/LDPFCmqz/65c96ec3b9c1.png"} 
                            alt="GSK Logo" 
                            className="h-24 w-auto rounded-md shadow-md" 
                        /> */}
                    </motion.div>
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        variants={fadeIn(0.2)}
                    >
                        За нас
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        variants={fadeIn(0.3)}
                    >
                        Вашият доверен партньор в монтажа на гипсокартон
                    </motion.p>
                </motion.div>

                <motion.div 
                    ref={companyRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
                    initial="hidden"
                    animate={companyInView ? "visible" : "hidden"}
                    variants={staggerContainer(0.1)}
                >
                    <motion.div variants={fadeInLeft(0.2)}>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Нашата компания</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Ние сме екип от професионалисти с богат опит в монтажа на гипсокартон на конструкция – работа, която изисква прецизност, 
                            технически познания и усещане за детайл.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Създадохме нашата компания, водени от желанието да предложим надеждно, качествено и 
                            дълготрайно решение за всеки интериорен проект – от малки ремонти до мащабни строителни обекти.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            През годините сме натрупали солидна практика както в частния, така и в корпоративния сектор. Работим с най-добрите материали на 
                            пазара и прилагаме съвременни технологии и системи, за да гарантираме отлично изпълнение и дълготраен резултат.
                        </p>
                    </motion.div>
                    <motion.div 
                        variants={fadeInRight(0.3)}
                        className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg shadow-md"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-blue-200 pb-2">Нашите ценности</h3>
                        <ul className="space-y-5 text-gray-600">
                            <motion.li 
                                className="flex items-start transform transition duration-300 hover:translate-x-1"
                                variants={scaleUp(0.1)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className="text-blue-600 mr-3 mt-1 text-xl">🛠</span>
                                <span><strong className="font-semibold">Професионализъм</strong> – във всяка стъпка от процеса</span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start transform transition duration-300 hover:translate-x-1"
                                variants={scaleUp(0.2)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className="text-blue-600 mr-3 mt-1 text-xl">🤝</span>
                                <span><strong className="font-semibold">Коректност</strong> – ясна комуникация, прозрачни условия</span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start transform transition duration-300 hover:translate-x-1"
                                variants={scaleUp(0.3)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className="text-blue-600 mr-3 mt-1 text-xl">📏</span>
                                <span><strong className="font-semibold">Прецизност</strong> – внимание към детайлите</span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start transform transition duration-300 hover:translate-x-1"
                                variants={scaleUp(0.4)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className="text-blue-600 mr-3 mt-1 text-xl">🧱</span>
                                <span><strong className="font-semibold">Стабилност</strong> – устойчивост във времето и резултатите</span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start transform transition duration-300 hover:translate-x-1"
                                variants={scaleUp(0.5)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className="text-blue-600 mr-3 mt-1 text-xl">👷‍♂️</span>
                                <span><strong className="font-semibold">Екипна работа</strong> – синхрон между майстори, проектанти и клиенти</span>
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div 
                    ref={missionRef}
                    className="bg-gray-50 rounded-lg p-10 mb-16 shadow-md"
                    initial="hidden"
                    animate={missionInView ? "visible" : "hidden"}
                    variants={staggerContainer(0.1)}
                >
                    <motion.h2 
                        className="text-3xl font-bold text-gray-900 mb-8 text-center"
                        variants={fadeIn(0.1)}
                    >
                        Нашата мисия
                    </motion.h2>
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.p 
                            className="text-xl text-gray-700 mb-8 leading-relaxed"
                            variants={fadeIn(0.2)}
                        >
                            Да превръщаме идеите на клиентите си в реалност чрез качествен монтаж, точност и уважение към сроковете и бюджета.
                        </motion.p>
                        <motion.p 
                            className="text-lg text-gray-600 leading-relaxed"
                            variants={fadeIn(0.3)}
                        >
                            Независимо дали става въпрос за изграждане на преградни стени, окачени тавани или цялостна реконструкция на помещение – подхождаме с 
                            еднаква отдаденост и отговорност.
                        </motion.p>
                        <motion.div 
                            className="mt-10 inline-block bg-blue-100 px-8 py-5 rounded-lg shadow-sm"
                            variants={scaleUp(0.4)}
                            whileHover={{ scale: 1.03 }}
                        >
                            <p className="text-lg text-blue-800 font-medium">
                                <span className="font-bold">🎯 Нашата цел</span> не е просто да завършим проект – а да оставим след себе си пространство, с което клиентите ни да се гордеят.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div 
                    ref={ctaRef}
                    className="text-center"
                    initial="hidden"
                    animate={ctaInView ? "visible" : "hidden"}
                    variants={staggerContainer(0.1)}
                >
                    <motion.h2 
                        className="text-3xl font-bold text-gray-900 mb-6"
                        variants={fadeIn(0.1)}
                    >
                        Имате проект за реализация?
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                        variants={fadeIn(0.2)}
                    >
                        Свържете се с нас за безплатна консултация и оферта, съобразена с вашите изисквания.
                    </motion.p>
                    <motion.div
                        variants={fadeIn(0.3)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link 
                            to="/contact" 
                            onClick={handleContactClick} 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block shadow-md"
                        >
                            Свържете се с нас
                        </Link>
                    </motion.div>
                </motion.div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500">
                        Или се свържете с нас на телефон: 
                        <a href="tel:0899368419" className="text-blue-600 hover:underline">089 936 8419</a>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;