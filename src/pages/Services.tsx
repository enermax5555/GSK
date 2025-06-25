import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
    const services = [
        {
            title: 'Преградни стени',
            description: 'Функционално вътрешно разпределение с помощта на гипсокартон',
            icon: '🧱',
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
            icon: '🧱',
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
            icon: '🧱',
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
            icon: '🧰',
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
            icon: '🧰',
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
            icon: '🧱',
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
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Нашите услуги
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Специализирани решения с гипсокартон – прецизно, ефективно и по мярка
                    </p>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        Предлагаме цялостна гама от услуги, свързани с монтаж на гипсокартон върху конструкция. 
                        Всеки проект, независимо от мащаба му, се изпълнява с внимание към детайла, техническа точност и качествени материали.
                    </p>
                    <p className="text-md text-gray-600 max-w-3xl mx-auto mt-4 font-medium">
                        👇 Натиснете върху услугата, за да научите повече
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            detailContent={service.detailContent}
                        />
                    ))}
                </div>

                {/* Insulation Section */}
                <div className="mt-20 bg-gray-50 rounded-lg p-8">
                    <div className="flex items-center justify-center text-center mb-6">
                        <span className="text-4xl mr-3">🔇</span>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Звуко- и топлоизолация
                        </h2>
                    </div>
                    <h3 className="text-xl text-center text-gray-700 mb-6">Комфорт и ефективност във всяко помещение</h3>
                    
                    <p className="text-gray-700 mb-6 max-w-4xl mx-auto">
                        Комбинацията от гипсокартон и висококачествени изолационни материали (каменна вата, стъклена вата и др.) 
                        подобрява значително енергийната ефективност на сградата и осигурява шумоизолация. 
                        Това води до по-ниски разходи за отопление и по-добър акустичен комфорт.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 text-green-600 mt-1">✔</div>
                            <p className="text-gray-700">Подобрена термоизолация през зимата и лятото</p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 text-green-600 mt-1">✔</div>
                            <p className="text-gray-700">Намаляване на шума между помещения</p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 text-green-600 mt-1">✔</div>
                            <p className="text-gray-700">Екологични и устойчиви материали</p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 text-green-600 mt-1">✔</div>
                            <p className="text-gray-700">Подходящи за жилищни и обществени сгради</p>
                        </div>
                    </div>
                </div>

                {/* Demonstrations Section */}
                <div className="mt-20">
                    <div className="flex items-center justify-center text-center mb-6">
                        <span className="text-4xl mr-3">🎥</span>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Демонстрации от реални обекти
                        </h2>
                    </div>
                    <h3 className="text-xl text-center text-gray-700 mb-6">Погледнете как работим – чисто, прецизно и с внимание към детайла</h3>
                    
                    <p className="text-gray-700 mb-8 max-w-4xl mx-auto">
                        Доверието се печели с реална работа. Затова ви показваме откъси от обекти, на които сме работили – от монтажа
                        на конструкцията до финалната шпакловка и завършения интериор.
                        Видеата представят процеса в реални условия, с реални предизвикателства и реални резултати.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 text-blue-600 mt-1">📌</div>
                            <p className="text-gray-700">Монтаж на преградни стени</p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 text-blue-600 mt-1">📌</div>
                            <p className="text-gray-700">Обшивка на тръби и шахти</p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 text-blue-600 mt-1">📌</div>
                            <p className="text-gray-700">Изграждане на окачени тавани</p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 text-blue-600 mt-1">📌</div>
                            <p className="text-gray-700">Изолация и довършителни работи</p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 text-blue-600 mt-1">📌</div>
                            <p className="text-gray-700">Преди и след изпълнение</p>
                        </div>
                    </div>
                    
                    <p className="text-center text-gray-700 mt-6 max-w-4xl mx-auto">
                        🎯 Всеки проект е различен – но стандартът ни на работа винаги е висок.
                        Разгледайте и се уверете сами.
                    </p>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Имате проект? Ние имаме решението.
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Не се колебайте да се свържете с нас за оферта, консултация или въпроси относно нашите услуги. 
                        Работим бързо, чисто и професионално – както трябва.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-green-600">✅</span>
                            <p className="text-gray-700">Безплатна консултация</p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-green-600">✅</span>
                            <p className="text-gray-700">Индивидуален подход към всеки клиент</p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-green-600">✅</span>
                            <p className="text-gray-700">Реално време за изпълнение и точни цени</p>
                        </div>
                    </div>
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

export default Services;