import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Професионален монтаж на гипсокартон
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Качество, прецизност и надеждност във всеки детайл
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/services" 
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                            >
                                Нашите услуги
                            </Link>
                            <Link 
                                to="/contact" 
                                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                            >
                                Свържете се с нас
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Нашите специализирани услуги
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Ние сме специализирана компания с фокус върху монтажа на гипсокартон върху конструкция – решение, което осигурява модерна визия, отлична звуко- и топлоизолация, както и перфектна основа за всеки интериор.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🧱</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Преградни стени</h3>
                            <p className="text-gray-600">
                                Функционално вътрешно разпределение с помощта на гипсокартон за създаване на нови помещения.
                            </p>
                        </div>
                        
                        <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🧰</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Окачени тавани</h3>
                            <p className="text-gray-600">
                                Модерен и многофункционален избор, позволяващ скрито осветление и изолация.
                            </p>
                        </div>
                        
                        <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">�</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Звуко- и топлоизолация</h3>
                            <p className="text-gray-600">
                                Подобряване на енергийната ефективност и акустичния комфорт на помещенията.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Защо да изберете нас?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Ние вярваме, че добре свършената работа говори сама за себе си. Затова всеки наш проект е изпълнен с ангажираност, точност и стремеж към съвършенство.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-blue-600 text-3xl mb-4">✅</div>
                            <h3 className="text-xl font-semibold mb-2">Прецизен монтаж</h3>
                            <p className="text-gray-600">Внимание към всеки детайл при изпълнението.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-blue-600 text-3xl mb-4">✅</div>
                            <h3 className="text-xl font-semibold mb-2">Съвременни системи</h3>
                            <p className="text-gray-600">Материали от доказани производители.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-blue-600 text-3xl mb-4">✅</div>
                            <h3 className="text-xl font-semibold mb-2">Бързи срокове</h3>
                            <p className="text-gray-600">Без компромис с качеството на изпълнение.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-blue-600 text-3xl mb-4">✅</div>
                            <h3 className="text-xl font-semibold mb-2">Индивидуален подход</h3>
                            <p className="text-gray-600">Персонално отношение към всеки клиент и проект.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-blue-600 text-3xl mb-4">✅</div>
                            <h3 className="text-xl font-semibold mb-2">Конкурентни цени</h3>
                            <p className="text-gray-600">Прозрачна оферта без скрити разходи.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Свържи се с нас още днес
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Получи безплатна консултация и оферта, съобразена с твоите изисквания
                    </p>
                    <Link 
                        to="/contact" 
                        className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-block text-lg shadow-md"
                    >
                        Поискай оферта
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;