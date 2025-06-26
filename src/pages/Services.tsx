import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { motion, useInView } from 'framer-motion';
import { fadeIn, fadeInLeft, fadeInRight, staggerContainer, scaleUp } from '../utils/animations';

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
            imageSrc: '/assets/Images/PregradniSteni/PregradniSteniMain.jpg',
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
            imageSrc: '/assets/Images/PredStenni/PredStenniMain.jpg',
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
            imageSrc: '/assets/Images/Oblicovki/OblicovkiMain.jpg',
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
            imageSrc: '/assets/Images/OkacheniTavani/OkacheniTavaniMain.JPEG',
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
            imageSrc: '/assets/Images/PVCtavani/PVCtavaniMain.jpg',
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
            imageSrc: '/assets/Images/RasterniTavani/RasterniTavaniMain.jpg',
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
                    
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                        variants={staggerContainer(0.1)}
                    >
                        <motion.div 
                            className="flex items-start gap-3"
                            variants={fadeInLeft(0.1)}
                            whileHover={{ x: 5 }}
                        >
                            <div className="flex-shrink-0 text-blue-600 mt-1">📌</div>
                            <p className="text-gray-700">Монтаж на преградни стени</p>
                        </motion.div>
                        
                        <motion.div 
                            className="flex items-start gap-3"
                            variants={fadeInRight(0.2)}
                            whileHover={{ x: 5 }}
                        >
                            <div className="flex-shrink-0 text-blue-600 mt-1">📌</div>
                            <p className="text-gray-700">Обшивка на тръби и шахти</p>
                        </motion.div>
                        
                        <motion.div 
                            className="flex items-start gap-3"
                            variants={fadeInLeft(0.3)}
                            whileHover={{ x: 5 }}
                        >
                            <div className="flex-shrink-0 text-blue-600 mt-1">📌</div>
                            <p className="text-gray-700">Изграждане на окачени тавани</p>
                        </motion.div>
                        
                        <motion.div 
                            className="flex items-start gap-3"
                            variants={fadeInRight(0.4)}
                            whileHover={{ x: 5 }}
                        >
                            <div className="flex-shrink-0 text-blue-600 mt-1">📌</div>
                            <p className="text-gray-700">Изолация и довършителни работи</p>
                        </motion.div>
                        
                        <motion.div 
                            className="flex items-start gap-3"
                            variants={fadeInLeft(0.5)}
                            whileHover={{ x: 5 }}
                        >
                            <div className="flex-shrink-0 text-blue-600 mt-1">📌</div>
                            <p className="text-gray-700">Преди и след изпълнение</p>
                        </motion.div>
                    </motion.div>
                    
                    <motion.p 
                        className="text-center text-gray-700 mt-6 max-w-4xl mx-auto"
                        variants={fadeIn(0.6)}
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