import React, { useState } from 'react';
import { Search, Home, MapPin, BedDouble, Maximize, Phone, Mail, CheckCircle2, Menu, X, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const ApartmentCard = ({ apartment }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300 border border-gray-100">
    <div className="relative h-64">
      <img src={apartment.image} alt={apartment.title} className="w-full h-full object-cover" />
      <div className={`absolute top-4 left-4 text-white px-3 py-1 rounded-full text-sm font-medium ${apartment.type === 'Продажа' ? 'bg-green-600' : 'bg-blue-600'}`}>
        {apartment.type}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{apartment.title}</h3>
      <p className="text-gray-500 flex items-center gap-1 mb-4">
        <MapPin size={16} /> {apartment.location}
      </p>
      <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 mb-4 text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <BedDouble size={18} className="text-blue-600" /> {apartment.rooms} комн.
        </div>
        <div className="flex items-center gap-2">
          <Maximize size={18} className="text-blue-600" /> {apartment.area} м²
        </div>
        <div className="flex items-center gap-2">
          <Home size={18} className="text-blue-600" /> {apartment.floor} эт.
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-blue-700">{apartment.price} ₽</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Подробнее
        </button>
      </div>
    </div>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filter, setFilter] = useState('Все');

  const apartments = [
    {
      id: 1,
      title: "Студия в ЖК 'Москва-Сити'",
      location: "Пресненская наб., Сити",
      price: "45 000 000",
      area: 42,
      rooms: 1,
      floor: 45,
      type: "Продажа",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "3-комн. квартира в Хамовниках",
      location: "ул. Фрунзе, Хамовники",
      price: "120 000 000",
      area: 115,
      rooms: 3,
      floor: 5,
      type: "Продажа",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7b28?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Дизайнерская квартира",
      location: "ЦАО, ул. Тверская",
      price: "15 000 000 / мес",
      area: 85,
      rooms: 2,
      floor: 3,
      type: "Аренда",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Евро-двушка в ЖК 'Сердце Столицы'",
      location: "Район Арбата",
      price: "68 000 000",
      area: 64,
      rooms: 2,
      floor: 12,
      type: "Продажа",
      image: "https://images.unsplash.com/photo-1484154218962-a7577eef7e7f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Уютная квартира для студента",
      location: "Район МГУ",
      price: "8 000 000 / мес",
      area: 38,
      rooms: 1,
      floor: 8,
      type: "Аренда",
      image: "https://images.unsplash.com/photo-1536376074417-661f6ee7935c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Пентхаус с террасой",
      location: "Пресненский район",
      price: "320 000 000",
      area: 240,
      rooms: 4,
      floor: 60,
      type: "Продажа",
      image: "https://images.unsplash.com/photo-1600607687940-c52477b7785f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredApartments = filter === 'Все'
    ? apartments
    : apartments.filter(a => a.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Home className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-900">APART<span className="text-blue-600">EXPERT</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
              <a href="#catalog" className="hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#services" className="hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#contacts" className="hover:text-blue-600 transition-colors">Контакты</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Оставить заявку
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4 animate-in fade-in slide-in-from-top-4">
            <a href="#catalog" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Каталог</a>
            <a href="#services" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Услуги</a>
            <a href="#contacts" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-medium">Оставить заявку</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover opacity-20"
            alt="Moscow Apartments"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Купите или сдайте <br />
            <span className="text-blue-600">квартиру в Москве</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Профессиональный сервис по купле-продаже и аренде жилой недвижимости. <br className="hidden md:block" />
            Помогаем найти идеальный вариант или выгодно реализовать вашу недвижимость.
          </p>

          <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100 gap-3">
              <Search className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Район, метро или ЖК..."
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100 gap-3">
              <Maximize className="text-gray-400" size={20} />
              <select className="w-full outline-none text-gray-700 bg-transparent appearance-none cursor-pointer">
                <option>Любая площадь</option>
                <option>до 40 м²</option>
                <option>40-80 м²</option>
                <option>80+ м²</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Поиск
            </button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Актуальные объекты</h2>
              <div className="flex gap-2 mb-4">
                {['Все', 'Продажа', 'Аренда'].map(t => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === t ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Все объявления <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApartments.map(apt => (
              <ApartmentCard key={apt.id} apartment={apt} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Комплексный подход к операциям с недвижимостью любой сложности</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Покупка квартиры",
                desc: "Подбор объекта по вашим критериям, организация просмотров и торги за лучшую цену.",
                icon: <ArrowDownLeft className="text-blue-600" size={32} />
              },
              {
                title: "Продажа объекта",
                desc: "Профессиональный маркетинг, фотосессия объекта и поиск проверенного покупателя.",
                icon: <ArrowUpRight className="text-blue-600" size={32} />
              },
              {
                title: "Юридический аудит",
                desc: "Полная проверка документов, сопровождение сделки и безопасный расчет через аккредитив.",
                icon: <CheckCircle2 className="text-blue-600" size={32} />
              }
            ].map((feat, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors group">
                <div className="mb-6 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Бесплатная консультация</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Хотите купить, продать или сдать квартиру? Наши эксперты помогут сделать это максимально выгодно и безопасно.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Электронная почта"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
                <textarea
                  placeholder="Напишите, какая квартира вас интересует..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                ></textarea>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                  Отправить заявку
                </button>
              </form>
            </div>

            <div className="bg-gray-100 p-10 lg:p-16 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Телефон</p>
                    <p className="text-xl font-bold">+7 (495) 000-00-00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Email</p>
                    <p className="text-xl font-bold">info@apart-expert.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Офис</p>
                    <p className="text-xl font-bold">г. Москва, ул. Тверская, 12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-blue-600 p-1.5 rounded-md">
              <Home className="text-white" size={20} />
            </div>
            <span className="text-xl font-black tracking-tight text-white">APART<span className="text-blue-600">EXPERT</span></span>
          </div>
          <p className="mb-8">© 2026 ApartExpert — Продажа и аренда квартир в Москве</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
