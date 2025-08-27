import React, { useRef } from 'react';
import ContactForm from '../components/ContactForm';
import { Box, Container, Typography, Link, Paper, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { motion, useInView } from 'framer-motion';
import { fadeIn, fadeInLeft, fadeInRight, staggerContainer, scaleUp, bounce } from '../utils/animations';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
    // Refs for animation sections
    const headerRef = useRef(null);
    const infoRef = useRef(null);
    const formRef = useRef(null);
    
    // Check if sections are in view
    const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
    const infoInView = useInView(infoRef, { once: true, amount: 0.2 });
    const formInView = useInView(formRef, { once: true, amount: 0.2 });

    return (
        <motion.div 
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SEO 
                title="Контакти" 
                description="Свържете се с ГСК за професионален монтаж на гипсокартон в Бургас. Телефон, имейл и адрес за връзка. Безплатни консултации и оферти."
                keywords="контакти гипсокартон Бургас, телефон ГСК, адрес ГСК Бургас, безплатна оферта гипсокартон, консултация монтаж гипсокартон"
                schemaType="LocalBusiness"
                canonicalUrl="/contact"
            />
            <Container maxWidth="lg">
                {/* Header Section */}
                <motion.div 
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? "visible" : "hidden"}
                    variants={staggerContainer(0.1)}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeIn(0.1)}>
                        <Typography 
                            variant="h2" 
                            component="h1" 
                            fontWeight="bold" 
                            color="text.primary"
                            mb={2}
                            className="text-4xl md:text-5xl"
                        >
                            Свържете се с нас
                        </Typography>
                    </motion.div>
                    <motion.div variants={fadeIn(0.2)}>
                        <Typography 
                            variant="h6" 
                            color="text.secondary" 
                            maxWidth="700px" 
                            mx="auto"
                            className="text-xl"
                        >
                            Ние сме на ваше разположение за всички ваши въпроси и проекти
                        </Typography>
                    </motion.div>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div 
                    ref={infoRef}
                    initial="hidden"
                    animate={infoInView ? "visible" : "hidden"}
                    variants={staggerContainer(0.1)}
                    className="mb-16"
                >
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <motion.div variants={scaleUp(0.1)} whileHover={{ y: -5 }}>
                                <Card elevation={2} className="h-full">
                                    <CardContent className="text-center p-6">
                                        <motion.div variants={bounce(0.1)}>
                                            <EmailIcon color="primary" fontSize="large" className="mb-4" />
                                        </motion.div>
                                        <Typography variant="h6" gutterBottom>
                                            Имейл
                                        </Typography>
                                        <Link 
                                            href="mailto:office@gsk-build.bg" 
                                            underline="hover" 
                                            color="text.primary"
                                            className="hover:text-blue-600 transition-colors"
                                        >
                                            georgikalpakchiev056@gmail.com
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md={3}>
                            <motion.div variants={scaleUp(0.2)} whileHover={{ y: -5 }}>
                                <Card elevation={2} className="h-full">
                                    <CardContent className="text-center p-6">
                                        <motion.div variants={bounce(0.2)}>
                                            <PhoneIcon color="primary" fontSize="large" className="mb-4" />
                                        </motion.div>
                                        <Typography variant="h6" gutterBottom>
                                            Телефон
                                        </Typography>
                                        <Link 
                                            href="tel:0899368419" 
                                            underline="hover" 
                                            color="text.primary"
                                            className="hover:text-blue-600 transition-colors"
                                        >
                                            089 936 8419
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md={3}>
                            <motion.div variants={scaleUp(0.3)} whileHover={{ y: -5 }}>
                                <Card elevation={2} className="h-full">
                                    <CardContent className="text-center p-6">
                                        <motion.div variants={bounce(0.3)}>
                                            <LocationOnIcon color="primary" fontSize="large" className="mb-4" />
                                        </motion.div>
                                        <Typography variant="h6" gutterBottom>
                                            Адрес
                                        </Typography>
                                        <Typography color="text.secondary">
                                            Бургас, България
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md={3}>
                            <motion.div variants={scaleUp(0.4)} whileHover={{ y: -5 }}>
                                <Card elevation={2} className="h-full">
                                    <CardContent className="text-center p-6">
                                        <motion.div variants={bounce(0.4)}>
                                            <AccessTimeIcon color="primary" fontSize="large" className="mb-4" />
                                        </motion.div>
                                        <Typography variant="h6" gutterBottom>
                                            Работно време
                                        </Typography>
                                        <Typography color="text.secondary">
                                          8:00 - 17:00
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>

                {/* Contact Form Section */}
                <motion.div 
                    ref={formRef}
                    initial="hidden"
                    animate={formInView ? "visible" : "hidden"}
                    variants={fadeIn(0.3)}
                    className="max-w-4xl mx-auto px-4"
                >
                    <Paper elevation={3} className="p-6 md:p-8 rounded-lg bg-white">
                        <Typography 
                            variant="h5" 
                            component="h2" 
                            className="text-center mb-6 font-semibold bg-gray-100 rounded-md border-gray-300 p-4 text-gray-800"
                        >
                            Изпратете ни съобщение
                        </Typography>
                        <ContactForm />
                    </Paper>
                </motion.div>
            </Container>
        </motion.div>
    );
};

export default Contact;
