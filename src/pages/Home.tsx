import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Paper, 
    Box, 
    Typography, 
    Grid, 
    Button,
    Container
} from '@mui/material';
import { 
    Straighten as WallIcon, 
    Layers as CeilingIcon, 
    VolumeUp as SoundIcon,
    ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { fadeIn, fadeInLeft, fadeInRight, staggerContainer, scaleUp, bounce } from '../utils/animations';
import SEO from '../components/SEO';

const Home: React.FC = () => {
    const navigate = useNavigate();
    
    // Refs for animation sections
    const heroRef = useRef(null);
    const servicesRef = useRef(null);
    const featuresRef = useRef(null);
    const ctaRef = useRef(null);
    
    // Check if sections are in view
    const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
    const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
    const featuresInView = useInView(featuresRef, { once: true, amount: 0.1 });
    const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });
    
    const handleServiceClick = () => {
        navigate('/services');
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const handleContactClick = () => {
        navigate('/contact');
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <>
            <SEO 
                title="Начало" 
                description="Професионален монтаж на гипсокартон в Бургас и региона. Преградни стени, окачени тавани, предстенни обшивки и други услуги от опитни майстори."
                keywords="гипсокартон Бургас, монтаж гипсокартон, преградни стени, окачени тавани, предстенни обшивки, растерни тавани"
                schemaType="LocalBusiness"
                canonicalUrl="/"
            />
            {/* Hero Section */}
            <motion.section 
                ref={heroRef}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center"
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        variants={staggerContainer(0.2)}
                    >
                        <motion.div 
                            className="flex justify-center mb-6"
                            variants={fadeIn(0.1)}
                        >
                            {/* <img 
                                src={"https://i.ibb.co/LDPFCmqz/65c96ec3b9c1.png"} 
                                alt="GSK Logo" 
                                className="h-32 w-auto rounded-md shadow-lg" 
                            /> */}
                        </motion.div>
                        <motion.h1 
                            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                            variants={fadeIn(0.2)}
                        >
                            Професионален монтаж на гипсокартон
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            variants={fadeIn(0.4)}
                        >
                            Качество, прецизност и надеждност във всеки детайл
                        </motion.p>
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            variants={fadeIn(0.6)}
                        >
                            <Link 
                                to="/services" 
                                onClick={handleServiceClick} 
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                            >
                                Нашите услуги
                            </Link>
                            <Link 
                                to="/contact" 
                                onClick={handleContactClick} 
                                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                            >
                                Свържете се с нас
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Overview Section */}
            <motion.section 
                ref={servicesRef}
                className="py-20 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Container maxWidth="lg">
                    <motion.div 
                        className="text-center mb-16"
                        initial="hidden"
                        animate={servicesInView ? "visible" : "hidden"}
                        variants={staggerContainer(0.1)}
                    >
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                            variants={fadeIn(0.1)}
                        >
                            Нашите специализирани услуги
                        </motion.h2>
                        <motion.p 
                            className="text-lg text-gray-600 max-w-3xl mx-auto"
                            variants={fadeIn(0.2)}
                        >
                            Ние сме специализирана компания с фокус върху монтажа на гипсокартон върху конструкция – решение, което осигурява модерна визия, отлична звуко- и топлоизолация, както и перфектна основа за всеки интериор.
                        </motion.p>
                    </motion.div>
                    
                    <Grid container spacing={4} justifyContent="center">
                        <Grid xs={12} sm={6} md={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <Paper 
                                    elevation={2}
                                    onClick={handleServiceClick}
                                    sx={{ 
                                        p: 4, 
                                        textAlign: 'center', 
                                        height: '100%',
                                        borderRadius: 2,
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: 8,
                                            bgcolor: 'primary.light',
                                            '& .icon-container': {
                                                bgcolor: 'primary.main',
                                                color: 'white'
                                            },
                                            '& .service-title': {
                                                color: 'primary.dark'
                                            }
                                        }
                                    }}
                                >
                                <Box 
                                    className="icon-container"
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        bgcolor: 'primary.light',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 3,
                                        transition: 'all 0.3s ease',
                                        color: 'primary.dark'
                                    }}
                                >
                                    <WallIcon sx={{ fontSize: 40 }} />
                                </Box>
                                <Typography 
                                    variant="h5" 
                                    className="service-title"
                                    gutterBottom 
                                    sx={{ fontWeight: 'bold', transition: 'all 0.3s ease' }}
                                >
                                    Стени
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Преградни стени и предстенни обшивки – предлагат модерно, практично и гъвкаво решение за вътрешно оформление. Прикриват инсталации, изравняват неравни повърхности и позволяват интегриране на ниши, врати и осветление.
                                </Typography>
                            </Paper>
                            </motion.div>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Paper 
                                    elevation={2}
                                    onClick={handleServiceClick}
                                    sx={{ 
                                        p: 4, 
                                        textAlign: 'center',
                                        height: '100%',
                                        borderRadius: 2,
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: 8,
                                            bgcolor: 'secondary.light',
                                            '& .icon-container': {
                                                bgcolor: 'secondary.main',
                                                color: 'white'
                                            },
                                            '& .service-title': {
                                                color: 'secondary.dark'
                                            }
                                        }
                                    }}
                                >
                                    <Box 
                                        className="icon-container"
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            bgcolor: 'secondary.light',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mx: 'auto',
                                            mb: 3,
                                            transition: 'all 0.3s ease',
                                            color: 'secondary.dark'
                                        }}
                                    >
                                        <CeilingIcon sx={{ fontSize: 40 }} />
                                    </Box>
                                    <Typography 
                                        variant="h5" 
                                        className="service-title"
                                        gutterBottom 
                                        sx={{ fontWeight: 'bold', transition: 'all 0.3s ease' }}
                                    >
                                        Тавани
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Модерен и многофункционален избор - монтиран под основния таван, което позволява скриване на инсталации, както и придаване на модерен завършек на интериора.
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Paper 
                                    elevation={2}
                                    onClick={handleServiceClick}
                                    sx={{ 
                                        p: 4, 
                                        textAlign: 'center', 
                                        height: '100%',
                                        borderRadius: 2,
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: 8,
                                            bgcolor: 'info.light',
                                            '& .icon-container': {
                                                bgcolor: 'info.main',
                                                color: 'white'
                                            },
                                            '& .service-title': {
                                                color: 'info.dark'
                                            }
                                        }
                                    }}
                                >
                                <Box 
                                    className="icon-container"
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        bgcolor: 'info.light',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 3,
                                        transition: 'all 0.3s ease',
                                        color: 'info.dark'
                                    }}
                                >
                                    <SoundIcon sx={{ fontSize: 40 }} />
                                </Box>
                                <Typography 
                                    variant="h5" 
                                    className="service-title"
                                    gutterBottom 
                                    sx={{ fontWeight: 'bold', transition: 'all 0.3s ease' }}
                                >
                                    Звуко- и топлоизолация
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Подобряване на енергийната ефективност и акустичния комфорт на помещенията. Намаляване на външния шум, задържане надеждно на топлината през зимата и осигурява комфорт целогодишно.
                                </Typography>
                            </Paper>
                            </motion.div>
                        </Grid>
                    </Grid>

                    <Box sx={{ textAlign: 'center', mt: 8 }}>
                        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                            Искате да разгледате всички наши услуги и да видите повече детайли?
                        </Typography>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large"
                            component={Link}
                            to="/services"
                            onClick={handleServiceClick} 
                            endIcon={<ArrowForwardIcon />}
                            sx={{ 
                                py: 1.5, 
                                px: 4,
                                borderRadius: 2,
                                fontWeight: 'bold'
                            }}
                        >
                            Всички услуги
                        </Button>
                    </Box>
                </Container>
            </motion.section>

            {/* Why Choose Us Section */}
            <motion.section 
                ref={featuresRef}
                className="py-20 bg-gray-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial="hidden"
                        animate={featuresInView ? "visible" : "hidden"}
                        variants={staggerContainer(0.1)}
                    >
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                            variants={fadeIn(0.1)}
                        >
                            Защо да изберете нас?
                        </motion.h2>
                        <motion.p 
                            className="text-lg text-gray-600 max-w-3xl mx-auto"
                            variants={fadeIn(0.2)}
                        >
                            Ние вярваме, че добре свършената работа говори сама за себе си. Затова всеки наш проект е изпълнен с ангажираност, точност и стремеж към съвършенство.
                        </motion.p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <motion.div 
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                            variants={scaleUp(0.1)}
                            initial="hidden"
                            animate={featuresInView ? "visible" : "hidden"}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-3xl">
                                    ✅
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Прецизен монтаж</h3>
                            <p className="text-gray-600">Внимание към всеки детайл при изпълнението.</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                            variants={scaleUp(0.2)}
                            initial="hidden"
                            animate={featuresInView ? "visible" : "hidden"}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-3xl">
                                    ✅
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Съвременни системи</h3>
                            <p className="text-gray-600">Материали от доказани производители.</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                            variants={scaleUp(0.3)}
                            initial="hidden"
                            animate={featuresInView ? "visible" : "hidden"}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-3xl">
                                    ✅
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Бързи срокове</h3>
                            <p className="text-gray-600">Без компромис с качеството на изпълнение.</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                            variants={scaleUp(0.4)}
                            initial="hidden"
                            animate={featuresInView ? "visible" : "hidden"}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-3xl">
                                    ✅
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Индивидуален подход</h3>
                            <p className="text-gray-600">Персонално отношение към всеки клиент и проект.</p>
                        </motion.div>

                        <motion.div 
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                            variants={scaleUp(0.5)}
                            initial="hidden"
                            animate={featuresInView ? "visible" : "hidden"}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-3xl">
                                    ✅
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Конкурентни цени</h3>
                            <p className="text-gray-600">Прозрачна оферта без скрити разходи.</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section 
                ref={ctaRef}
                className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        animate={ctaInView ? "visible" : "hidden"}
                        variants={staggerContainer(0.1)}
                    >
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold mb-6"
                            variants={fadeIn(0.1)}
                        >
                            Свържи се с нас още днес
                        </motion.h2>
                        <motion.p 
                            className="text-xl mb-8 max-w-3xl mx-auto"
                            variants={fadeIn(0.2)}
                        >
                            Получи безплатна консултация и оферта, съобразена с твоите изисквания
                        </motion.p>
                        <motion.div
                            variants={fadeIn(0.3)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link 
                                onClick={handleContactClick} 
                                to="/contact" 
                                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-block text-lg shadow-md"
                            >
                                Поискай оферта
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default Home;