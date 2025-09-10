import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { fadeIn, fadeInLeft, fadeInRight, staggerContainer, scaleUp } from '../utils/animations';
import SEO from '../components/SEO';

const Services: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Refs for scroll animations
    const servicesRef = useRef(null);
    const insulationRef = useRef(null);
    const demonstrationRef = useRef(null);
    const ctaRef = useRef(null);
    
    // InView states for scroll-triggered animations
    const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
    const insulationInView = useInView(insulationRef, { once: true, amount: 0.2 });
    const demonstrationInView = useInView(demonstrationRef, { once: true, amount: 0.2 });
    const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });

    // Handle navigation with smooth scroll to top
    const handleNavigation = (path: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        
        // If we're already on the same page, just scroll to top smoothly
        if (location.pathname === path) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Otherwise navigate to the new page and then scroll to top
            navigate(path);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    const services = [
        {
            title: 'Преградни стени',
            description: 'Функционално вътрешно разпределение с помощта на гипсокартон',
            imageSrc: "https://i.ibb.co/yFs7M2TY/7c8120a55556.jpg",
            imageFolder: 'PregradniSteni',
            detailContent: {
                icon: '🧱',
                title: 'Преградни стени от гипсокартон',
                subtitle: 'Функционално вътрешно разпределение с помощта на гипсокартон',
                description: 'Преградните стени от гипсокартон предлагат бърз, чист и ефективен начин за създаване на нови помещения или обособяване на зони в дадено пространство. Монтирани върху здрава метална конструкция, те осигуряват отлична звукоизолация и устойчивост, като в същото време позволяват лесна интеграция на електро- и ВиК инсталации.',
                features: [
                    'Подходящи за жилища, офиси, магазини и обществени сгради',
                    'Възможност за допълнителна изолация (вата)',
                    'Перфектна основа за боядисване или облицоване',
                    'Бърз монтаж с минимално замърсяване'
                ]
            }
        },
        {
            title: 'Предстенни обшивки',
            description: 'Изправяне и изолиране на вътрешни стени с гипсокартон',
            imageSrc: "https://i.ibb.co/FkBss5gy/0384b11692d6.jpg",
            imageFolder: 'PredStenni',
            detailContent: {
                icon: '🧱',
                title: 'Предстенни обшивки',
                subtitle: 'Изправяне и изолиране на вътрешни стени с гипсокартон',
                description: 'Предстенните обшивки са отлично решение при неравни или повредени стени. Те се монтират върху метална конструкция на разстояние от съществуващата стена, което позволява поставяне на изолация, скрито прокарване на кабели и постигане на перфектна геометрия.',
                features: [
                    'Изравняване на стени без къртене',
                    'Интеграция на топло- и звукоизолация',
                    'Скриване на инсталации',
                    'Идеално решение за ремонт или реновация'
                ]
            }
        },
        {
            title: 'Обшивки и облицовки',
            description: 'Решения за скриване на тръби, колони, греди и инсталации',
            imageSrc: "https://i.ibb.co/N6mRW52W/e1703c40efb3.jpg",
            imageFolder: 'Oblicovki',
            detailContent: {
                icon: '🧱',
                title: 'Обшивки и облицовки',
                subtitle: 'Решения за скриване на тръби, колони, греди и инсталации',
                description: 'Обшивките с гипсокартон се използват за декоративно или функционално прикриване на елементи като тръби, колони, греди или вентилационни шахти. Това позволява създаване на изчистена визия и постигане на модерен интериорен дизайн.',
                features: [
                    'Дискретно и естетично скриване на нежелани елементи',
                    'Лесен достъп при нужда от сервиз',
                    'Възможност за индивидуални дизайнерски решения',
                    'Стабилна и лесна за обработка конструкция'
                ]
            }
        },
        {
            title: 'Окачени тавани от гипсокартон',
            description: 'Модерен и многофункционален избор за всеки интериор',
            imageSrc: "https://i.ibb.co/qL4rnrSP/79c9b1923820.jpg",
            imageFolder: 'OkacheniTavani',
            detailContent: {
                icon: '🧰',
                title: 'Окачени тавани от гипсокартон',
                subtitle: 'Модерен и многофункционален избор за всеки интериор',
                description: 'Окачените тавани от гипсокартон съчетават естетика и практичност. Те позволяват скриване на инсталации, поставяне на скрито LED осветление, подобряване на акустиката и визуално оформяне на пространството.',
                features: [
                    'Гладки повърхности без фуги',
                    'Възможност за различни форми и нива',
                    'Скрито осветление, вентилация и озвучаване',
                    'Подобрена звуко- и топлоизолация'
                ]
            }
        },
        {
            title: 'Окачени PVC тавани',
            description: 'Бързо, хигиенично и влагоустойчиво решение',
            imageSrc: "https://i.ibb.co/Rk1BmZZq/79347d2decea.jpg",
            imageFolder: 'PVCtavani',
            detailContent: {
                icon: '🧰',
                title: 'Окачени PVC тавани',
                subtitle: 'Бързо, хигиенично и влагоустойчиво решение',
                description: 'PVC таваните са отличен избор за помещения с висока влажност, като бани, кухни, перални, мазета и санитарни възли. Те са лесни за поддръжка, влагонепроницаеми и устойчиви на мухъл.',
                features: [
                    'Лесен монтаж без мокри процеси',
                    'Водоустойчиви и издръжливи',
                    'Богат избор от цветове и дизайни',
                    'Лесна поддръжка и почистване'
                ]
            }
        },
        {
            title: 'Растерни тавани',
            description: 'Функционално и лесно достъпно решение за офиси и търговски обекти',
            imageSrc: "https://i.ibb.co/RkMSTXyf/bba876ba30fb.jpg",
            imageFolder: 'RasterniTavani',
            detailContent: {
                icon: '🧱',
                title: 'Растерни тавани',
                subtitle: 'Функционално и лесно достъпно решение за офиси и търговски обекти',
                description: 'Растерните тавани, изградени от модулни пана (обикновено 60х60 см), се използват основно в административни, търговски и индустриални сгради. Те позволяват бърз достъп до инсталациите над тях и лесна подмяна на отделни елементи при нужда.',
                features: [
                    'Бърз и сух монтаж',
                    'Подходящи за осветителни тела, вентилация и озвучаване',
                    'Лесна поддръжка и подмяна',
                    'Добра шумоизолация'
                ]
            }
        }
    ];

    return (
        <motion.div 
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <SEO 
                title="Услуги" 
                description="Професионален монтаж на гипсокартон в Бургас - преградни стени, окачени тавани, предстенни обшивки, акустични и растерни тавани. Топло и звукоизолация. Professional drywall installation services in Burgas."
                keywords="услуги гипсокартон бургас, uslugi gipskarton burgas, монтаж на гипсокартон бургас, montaj na gipskarton burgas, преградни стени бургас, pregradni steni burgas, окачени тавани бургас, okacheni tavani burgas, предстенни обшивки, predstенni obshivki, растерни тавани, rasterni tavani, акустични тавани, akustichni tavani, топлоизолация, toploizolacia, звукоизолация, zvukoizolacia, гипсокартон услуги бургас, gipskarton uslugi burgas"
                schemaType="Service"
                canonicalUrl="/services"
                imageUrl="https://i.ibb.co/yFs7M2TY/7c8120a55556.jpg"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Нашите услуги
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Специализирани решения с гипсокартон – прецизно, ефективно и по мярка
                    </motion.p>
                    <motion.p 
                        className="text-lg text-gray-600 max-w-3xl mx-auto mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Предлагаме цялостна гама от услуги, свързани с монтаж на гипсокартон върху конструкция. 
                        Всеки проект, независимо от мащаба му, се изпълнява с внимание към детайла, техническа точност и качествени материали.
                    </motion.p>
                    <motion.p 
                        className="text-md text-gray-600 max-w-3xl mx-auto mt-4 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{ 
                                repeat: Infinity, 
                                repeatType: "loop", 
                                duration: 1.5,
                                repeatDelay: 0.5
                            }}
                            className="inline-block"
                        >
                            👇
                        </motion.span> Натиснете върху услугата, за да научите повече
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
                            variants={scaleUp(0.1 * (index % 3))}
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                imageSrc={service.imageSrc}
                                imageFolder={service.imageFolder}
                                detailContent={service.detailContent}
                            />
                        </motion.div>
                    ))}
                </motion.div>

             
                {/* Demonstrations Section */}
                <motion.div 
                    ref={demonstrationRef}
                    className="mt-20"
                    initial="hidden"
                    animate={demonstrationInView ? "visible" : "hidden"}
                    variants={staggerContainer(0.2)}
                >
                    <motion.div 
                        className="flex items-center justify-center text-center mb-6"
                        variants={fadeIn(0)}
                    >
                        <motion.span 
                            className="text-4xl mr-3"
                            variants={scaleUp(0.1)}
                            animate={{ 
                                scale: [1, 1.1, 1],
                                rotateZ: [0, -5, 5, -5, 0] 
                            }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                repeatDelay: 3 
                            }}
                        >
                            🎥
                        </motion.span>
                        <motion.h2 
                            className="text-3xl font-bold text-gray-900"
                            variants={fadeIn(0.2)}
                        >
                            Демонстрации от реални обекти
                        </motion.h2>
                    </motion.div>
                    <motion.h3 
                        className="text-xl text-center text-gray-700 mb-6"
                        variants={fadeIn(0.3)}
                    >
                        Погледнете как работим – чисто, прецизно и с внимание към детайла
                    </motion.h3>
                    
                    <motion.p 
                        className="text-gray-700 mb-8 max-w-4xl mx-auto"
                        variants={fadeIn(0.4)}
                    >
                        Доверието се печели с реална работа. Затова ви показваме откъси от обекти, на които сме работили – от монтажа
                        на конструкцията до финалната шпакловка и завършения интериор.
                        Видеата представят процеса в реални условия, с реални предизвикателства и реални резултати.
                    </motion.p>
                    
                    {/* Video Demonstration */}
                    <motion.div 
                        className="max-w-4xl mx-auto mb-8"
                        variants={fadeIn(0.5)}
                    >
                        <YouTubeEmbed 
                            videoId="g42zVBIvMMQ"
                            thumbnailSrc="https://i.ibb.co/qL4rnrSP/79c9b1923820.jpg"
                        />
                        
                        <motion.p 
                            className="text-center text-sm text-gray-500 mt-4 font-medium"
                            variants={fadeIn(0.6)}
                        >
                            🎬 Демонстрация на нашата работа - от започване до завършване на проекта
                        </motion.p>
                    </motion.div>
                    
                    <motion.p 
                        className="text-center text-gray-700 mt-6 max-w-4xl mx-auto"
                        variants={fadeIn(0.7)}
                    >
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                            className="inline-block"
                        >
                            🎯
                        </motion.span> Всеки проект е различен – но стандартът ни на работа винаги е висок.
                        Разгледайте и се уверете сами.
                    </motion.p>
                </motion.div>
   {/* Insulation Section */}
                <motion.div 
                    ref={insulationRef}
                    className="mt-20 bg-gray-50 rounded-lg p-8"
                    initial="hidden"
                    animate={insulationInView ? "visible" : "hidden"}
                    variants={staggerContainer(0.2)}
                >
                    <motion.div 
                        className="flex items-center justify-center text-center mb-6"
                        variants={fadeIn(0)}
                    >
                        <motion.span 
                            className="text-4xl mr-3"
                            variants={scaleUp(0.1)}
                            whileHover={{ rotate: [0, -10, 10, -10, 10, 0], scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            🔇
                        </motion.span>
                        <motion.h2 
                            className="text-3xl font-bold text-gray-900"
                            variants={fadeIn(0.2)}
                        >
                            Звуко- и топлоизолация
                        </motion.h2>
                    </motion.div>
                    <motion.h3 
                        className="text-xl text-center text-gray-700 mb-6"
                        variants={fadeIn(0.3)}
                    >
                        Комфорт и ефективност във всяко помещение
                    </motion.h3>
                    
                    <motion.p 
                        className="text-gray-700 mb-6 max-w-4xl mx-auto"
                        variants={fadeIn(0.4)}
                    >
                        Комбинацията от гипсокартон и висококачествени изолационни материали (каменна вата, минерална вата и др.) 
                        подобрява значително енергийната ефективност на сградата и осигурява шумоизолация. 
                        Това води до по-ниски разходи за отопление и по-добър акустичен комфорт.
                    </motion.p>
                    
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                        variants={staggerContainer(0.1)}
                    >
                        <motion.div 
                            className="flex items-start gap-3"
                            variants={fadeInLeft(0.1)}
                        >
                            <div className="flex-shrink-0 text-green-600 mt-1">✔</div>
                            <p className="text-gray-700">Подобрена термоизолация през зимата и лятото</p>
                        </motion.div>
                        
                        <motion.div 
                            className="flex items-start gap-3"
                            variants={fadeInRight(0.2)}
                        >
                            <div className="flex-shrink-0 text-green-600 mt-1">✔</div>
                            <p className="text-gray-700">Намаляване на шума между помещения</p>
                        </motion.div>
                        
                        <motion.div 
                            className="flex items-start gap-3"
                            variants={fadeInLeft(0.3)}
                        >
                            <div className="flex-shrink-0 text-green-600 mt-1">✔</div>
                            <p className="text-gray-700">Екологични и устойчиви материали</p>
                        </motion.div>
                        
                        <motion.div 
                            className="flex items-start gap-3"
                            variants={fadeInRight(0.4)}
                        >
                            <div className="flex-shrink-0 text-green-600 mt-1">✔</div>
                            <p className="text-gray-700">Подходящи за жилищни и обществени сгради</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    ref={ctaRef}
                    className="text-center mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-12"
                    initial="hidden"
                    animate={ctaInView ? "visible" : "hidden"}
                    variants={staggerContainer(0.2)}
                >
                    <motion.h2 
                        className="text-3xl font-bold text-gray-900 mb-4"
                        variants={fadeIn(0.1)}
                    >
                        Имате проект? Ние имаме решението.
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 mb-8"
                        variants={fadeIn(0.3)}
                    >
                        Не се колебайте да се свържете с нас за оферта, консултация или въпроси относно нашите услуги. 
                        Работим бързо, чисто и професионално – както трябва.
                    </motion.p>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8"
                        variants={staggerContainer(0.1)}
                    >
                        <motion.div 
                            className="flex items-center justify-center gap-2"
                            variants={fadeIn(0.4)}
                        >
                            <span className="text-green-600">✅</span>
                            <p className="text-gray-700">Безплатна консултация</p>
                        </motion.div>
                        <motion.div 
                            className="flex items-center justify-center gap-2"
                            variants={fadeIn(0.5)}
                        >
                            <span className="text-green-600">✅</span>
                            <p className="text-gray-700">Индивидуален подход към всеки клиент</p>
                        </motion.div>
                        <motion.div 
                            className="flex items-center justify-center gap-2"
                            variants={fadeIn(0.6)}
                        >
                            <span className="text-green-600">✅</span>
                            <p className="text-gray-700">Реално време за изпълнение и точни цени</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={scaleUp(0.7)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button 
                            onClick={handleNavigation('/contact')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block cursor-pointer"
                        >
                            Свържете се с нас
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Services;

// Custom YouTube Embed Component
const YouTubeEmbed: React.FC<{ videoId: string; thumbnailSrc?: string }> = ({ videoId, thumbnailSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Video Container with Gradient Border */}
            <div className="relative p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl">
                <div className="relative w-full rounded-lg shadow-2xl bg-black" style={{ aspectRatio: '16/9' }}>
                    {!isPlaying ? (
                        <div 
                            className="relative w-full h-full cursor-pointer group"
                            onClick={handlePlay}
                        >
                            <img 
                                src={thumbnailSrc || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                alt="Video thumbnail"
                                className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                                <motion.div
                                    className="bg-red-600/80 backdrop-blur-sm rounded-full p-6 shadow-lg transition-all duration-300 group-hover:bg-red-700/80"
                                    animate={{ 
                                        scale: [1, 1.05, 1],
                                        boxShadow: [
                                            "0 4px 6px rgba(0, 0, 0, 0.1)", 
                                            "0 10px 15px rgba(0, 0, 0, 0.2)", 
                                            "0 4px 6px rgba(0, 0, 0, 0.1)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 5V19L19 12L8 5Z" fill="white" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ) : (
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                        />
                    )}
                </div>
            </div>
            
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </motion.div>
    );
};