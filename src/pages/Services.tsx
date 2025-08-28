import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { fadeIn, fadeInLeft, fadeInRight, staggerContainer, scaleUp } from '../utils/animations';
import SEO from '../components/SEO';

const Services: React.FC = () => {
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
                description="Професионален монтаж на гипсокартон в Бургас - преградни стени, окачени тавани, предстенни обшивки, акустични и растерни тавани. Топло и звукоизолация."
                keywords="услуги гипсокартон Бургас, преградни стени, окачени тавани, предстенни обшивки, растерни тавани, акустични тавани, топлоизолация, звукоизолация"
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
                        <VideoPlayer 
                            videoSrc={"https://www.youtube.com/watch?v=g42zVBIvMMQ"} 
                            thumbnailSrc={"https://i.ibb.co/qL4rnrSP/79c9b1923820.jpg"}
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
                        <Link 
                            to="/contact" 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
                        >
                            Свържете се с нас
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Services;

// Custom Video Player Component
const VideoPlayer: React.FC<{ videoSrc: string; thumbnailSrc: string }> = ({ videoSrc, thumbnailSrc }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            const isMobileDevice = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
            setIsMobile(isMobileDevice || window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    // Reset video when it ends
    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };
    
    // Handle play/pause
    const togglePlay = (e: React.MouseEvent) => {
        // Don't handle if using mobile native controls
        if (isMobile) return;
        
        // Don't toggle play if clicking on the fullscreen button
        if ((e.target as HTMLElement).closest('.fullscreen-button')) {
            return;
        }
        
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };
    
    // Handle fullscreen toggle
    const toggleFullscreen = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent video play/pause
        
        if (!videoContainerRef.current || !videoRef.current) return;
        
        if (!isFullscreen) {
            // Try to use the video element directly for better mobile support
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if ((videoRef.current as any).webkitEnterFullscreen) {
                // iOS Safari
                (videoRef.current as any).webkitEnterFullscreen();
            } else if ((videoRef.current as any).webkitRequestFullscreen) {
                // Chrome, Safari and Opera
                (videoRef.current as any).webkitRequestFullscreen();
            } else if ((videoRef.current as any).mozRequestFullScreen) {
                // Firefox
                (videoRef.current as any).mozRequestFullScreen();
            } else if ((videoRef.current as any).msRequestFullscreen) {
                // IE/Edge
                (videoRef.current as any).msRequestFullscreen();
            } else {
                // Fallback to container
                if (videoContainerRef.current.requestFullscreen) {
                    videoContainerRef.current.requestFullscreen();
                }
            }
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if ((document as any).webkitExitFullscreen) {
                (document as any).webkitExitFullscreen();
            } else if ((document as any).mozCancelFullScreen) {
                (document as any).mozCancelFullScreen();
            } else if ((document as any).msExitFullscreen) {
                (document as any).msExitFullscreen();
            }
            setIsFullscreen(false);
        }
    };
    
    // Listen for fullscreen change
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);
    
    // Listen for video play/pause events to update state
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        
        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);
        
        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, []);
    
    return (
        <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            onClick={togglePlay}
            ref={videoContainerRef}
        >
            {/* Video Container with Gradient Border */}
            <div className="relative p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl">
                <motion.video
                    ref={videoRef}
                    className="w-full rounded-lg shadow-2xl bg-black"
                    preload="metadata"
                    playsInline // Important for iOS
                    controls={isMobile ? true : false} // Native controls on mobile for better usability
                    style={{ aspectRatio: '16/9' }}
                    onEnded={handleVideoEnd}
                >
                    <source src={videoSrc} type="video/mp4" />
                    <source src={videoSrc} type="video/quicktime" />
                    Вашият браузър не поддържа видео елемента.
                </motion.video>
            </div>
            
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            {/* Thumbnail Overlay */}
            <AnimatePresence>
                {!isPlaying && (
                    <motion.div 
                        className="absolute inset-0 rounded-lg overflow-hidden"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isHovering ? 0 : 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative w-full h-full">
                            <img 
                                src={thumbnailSrc} 
                                alt="Video thumbnail" 
                                className="w-full h-full object-cover rounded-lg"
                                style={{ aspectRatio: '16/9' }}
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <motion.div
                                    className="bg-blue-600/70 backdrop-blur-sm rounded-full p-6 shadow-lg"
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
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Video Controls Overlay - Only show custom controls on non-mobile or when mobile controls are hidden */}
            {!isMobile && (
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovering ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Play/Pause Button */}
                    <motion.div
                        className="bg-blue-600/80 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-blue-700/80 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="w-12 h-12 flex items-center justify-center">
                            {isPlaying ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6" y="4" width="4" height="16" rx="1" fill="white" />
                                    <rect x="14" y="4" width="4" height="16" rx="1" fill="white" />
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5V19L19 12L8 5Z" fill="white" />
                                </svg>
                            )}
                        </div>
                    </motion.div>
                    
                    {/* Fullscreen Button - Larger and more visible */}
                    <div 
                        className="absolute bottom-4 right-4 fullscreen-button z-10"
                        onClick={toggleFullscreen}
                    >
                        <motion.div
                            className="bg-blue-600/80 backdrop-blur-sm rounded-lg p-3 shadow-lg cursor-pointer hover:bg-blue-700/80 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isFullscreen ? (
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path>
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 8V5h3v2H5v1H3zm2 9H3v-3h2v1h1v2zm8-3h-1v-1h3v3h-2v-2zm2-7h-1V5h-2V3h5v5h-2V7z"></path>
                                </svg>
                            )}
                        </motion.div>
                    </div>
                </motion.div>
            )}
            
            {/* Mobile-specific Fullscreen Button - Always visible on mobile */}
            {isMobile && !isPlaying && (
                <div 
                    className="absolute bottom-4 right-4 fullscreen-button z-20"
                    onClick={toggleFullscreen}
                >
                    <motion.div
                        className="bg-blue-600 rounded-lg p-3 shadow-lg cursor-pointer"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    >
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8V5h3v2H5v1H3zm2 9H3v-3h2v1h1v2zm8-3h-1v-1h3v3h-2v-2zm2-7h-1V5h-2V3h5v5h-2V7z"></path>
                        </svg>
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
};