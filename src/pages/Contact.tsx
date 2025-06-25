import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Свържете се с нас
                    </h1>
                    <p className="text-xl text-gray-600">
                        Ние сме на ваше разположение за всички ваши въпроси и проекти
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Контакти</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <span className="text-2xl">📧</span>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Имейл</h3>
                                    <p className="text-gray-600">office@gsk-build.bg</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Телефон</h3>
                                    <p className="text-gray-600">+359 888 123 456</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <span className="text-2xl">📍</span>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Офис</h3>
                                    <p className="text-gray-600">
                                        гр. София<br />
                                        ул. "Строителна" 25<br />
                                        Бизнес център "Строй", офис 304
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <span className="text-2xl">🕒</span>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900">Работно време</h3>
                                    <p className="text-gray-600">
                                        Понеделник - Петък: 9:00 - 18:00<br />
                                        Събота: 10:00 - 14:00<br />
                                        Неделя: Почивен ден
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map or Image */}
                        <div className="mt-8">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Нашето местоположение</h3>
                            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                                <p className="text-gray-600">Карта на местоположението</p>
                                {/* You can replace this with an actual Google Map integration */}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Изпратете ни съобщение</h2>
                        <ContactForm />
                        <div className="mt-6 text-sm text-gray-500">
                            <p>* Всички полета са задължителни</p>
                            <p className="mt-2">Ще се свържем с вас в рамките на 24 часа след получаване на вашето запитване.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
