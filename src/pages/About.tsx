import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        За нас
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Вашият доверен партньор в монтажа на гипсокартон
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Нашата компания</h2>
                        <p className="text-gray-600 mb-4">
                            Ние сме екип от професионалисти с богат опит в монтажа на гипсокартон на конструкция – работа, която изисква прецизност, 
                            технически познания и усещане за детайл.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Създадохме нашата компания, водени от желанието да предложим надеждно, качествено и 
                            дълготрайно решение за всеки интериорен проект – от малки ремонти до мащабни строителни обекти.
                        </p>
                        <p className="text-gray-600">
                            През годините сме натрупали солидна практика както в частния, така и в корпоративния сектор. Работим с най-добрите материали на 
                            пазара и прилагаме съвременни технологии и системи, за да гарантираме отлично изпълнение и дълготраен резултат.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Нашите ценности</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">🛠</span>
                                <span><strong>Професионализъм</strong> – във всяка стъпка от процеса</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">🤝</span>
                                <span><strong>Коректност</strong> – ясна комуникация, прозрачни условия</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">📏</span>
                                <span><strong>Прецизност</strong> – внимание към детайлите</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">🧱</span>
                                <span><strong>Стабилност</strong> – устойчивост във времето и резултатите</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">👷‍♂️</span>
                                <span><strong>Екипна работа</strong> – синхрон между майстори, проектанти и клиенти</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Нашата мисия</h2>
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-xl text-gray-700 mb-8">
                            Да превръщаме идеите на клиентите си в реалност чрез качествен монтаж, точност и уважение към сроковете и бюджета.
                        </p>
                        <p className="text-lg text-gray-600">
                            Независимо дали става въпрос за изграждане на преградни стени, окачени тавани или цялостна реконструкция на помещение – подхождаме с 
                            еднаква отдаденост и отговорност.
                        </p>
                        <div className="mt-8 inline-block bg-blue-100 px-6 py-4 rounded-lg">
                            <p className="text-lg text-blue-800">
                                <span className="font-bold">🎯 Нашата цел</span> не е просто да завършим проект – а да оставим след себе си пространство, с което клиентите ни да се гордеят.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Имате проект за реализация?</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                        Свържете се с нас за безплатна консултация и оферта, съобразена с вашите изисквания.
                    </p>
                    <Link 
                        to="/contact" 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
                    >
                        Свържете се с нас
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;