import React, { useState } from 'react';
import { Search, Home, MapPin, BedDouble, Maximize, Phone, Mail, CheckCircle2, Menu, X } from 'lucide-react';

const HouseCard = ({ house }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300 border border-gray-100">
    <div className="relative h-64">
      <img src={house.image} alt={house.title} className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
        {house.type}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{house.title}</h3>
      <p className="text-gray-500 flex items-center gap-1 mb-4">
        <MapPin size={16} /> {house.location}
      </p>
      <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 mb-4 text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <BedDouble size={18} className="text-blue-600" /> {house.beds} спален
        </div>
        <div className="flex items-center gap-2">
          <Maximize size={18} className="text-blue-600" /> {house.area} м²
        </div>
        <div className="flex items-center gap-2">
          <Home size={18} className="text-blue-600" /> {house.floors} эт.
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-blue-700">{house.price} ₽</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Подробнее
        </button>
      </div>
    </div>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const houses = [
    {
      id: 1,
      title: "Вилла 'Золотой Берег'",
      location: "Новая Рига, КП 'Аликонтово'",
      price: "125 000 000",
      area: 450,
      beds: 5,
      floors: 2,
      type: "Элитная",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Шале в сосновом бору",
      location: "Рублево-Днистровское ш.",
      price: "89 000 000",
      area: 320,
      beds: 4,
      floors: 2,
      type: "Премиум",
      image: "https://images.unsplash.com/photo-1580587771525-784757537a7d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Современный коттедж",
      location: "Дмитровское шоссе",
      price: "45 000 000",
      area: 210,
      beds: 3,
      floors: 1,
      type: "Комфорт",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Особняк с бассейном",
      location: "Киевское шоссе",
      price: "210 000 000",
      area: 680,
      beds: 7,
      floors: 3,
      type: "Люкс",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Уютный семейный дом",
      location: "Калужское шоссе",
      price: "32 000 000",
      area: 150,
      beds: 3,
      floors: 2,
      type: "Комфорт",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Архитектурный шедевр",
      location: "Новая Рига",
      price: "158 000 000",
      area: 520,
      beds: 6,
      floors: 2,
      type: "Элитная",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
    }
  ];

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
              <span className="text-2xl font-black tracking-tight text-gray-900">DOM<span className="text-blue-600">EXPERT</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
              <a href="#catalog" className="hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#features" className="hover:text-blue-600 transition-colors">Преимущества</a>
              <a href="#contacts" className="hover:text-blue-600 transition-colors">Контакты</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Подобрать дом
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
            <a href="#features" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Преимущества</a>
            <a href="#contacts" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-medium">Подобрать дом</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover opacity-20"
            alt="Luxury Home"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Найдите дом своей <br />
            <span className="text-blue-600">мечты в Москве</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Эксклюзивная коллекция элитной недвижимости в лучших районах Москвы и Подмосковья. <br className="hidden md:block" />
            Профессиональный подбор и полное юридическое сопровождение.
          </p>

          <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100 gap-3">
              <Search className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Район или название КП..."
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100 gap-3">
              <Maximize className="text-gray-400" size={20} />
              <select className="w-full outline-none text-gray-700 bg-transparent appearance-none cursor-pointer">
                <option>Любая площадь</option>
                <option>100-200 м²</option>
                <option>200-400 м²</option>
                <option>400+ м²</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Найти дом
            </button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Лучшие предложения</h2>
              <p className="text-gray-600 max-w-xl">Мы отобрали самые интересные объекты с лучшим соотношением цены и качества</p>
            </div>
            <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Смотреть весь каталог <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houses.map(house => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Почему выбирают DomExpert</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Мы создаем новый стандарт сервиса в сфере элитной загородной недвижимости</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Полная проверка",
                desc: "Проверяем каждый объект по 45 пунктам: от юридической чистоты до качества фундамента.",
                icon: <CheckCircle2 className="text-blue-600" size={32} />
              },
              {
                title: "Эксклюзивный доступ",
                desc: "Доступ к объектам, которые не представлены на открытых площадках (Off-market).",
                icon: <Home className="text-blue-600" size={32} />
              },
              {
                title: "Подбор под ключ",
                desc: "Берем на себя всё: от первичного отбора до сопровождения сделки в банке.",
                icon: <Phone className="text-blue-600" size={32} />
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Оставить заявку</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Запишитесь на бесплатную консультацию с экспертом. Мы подберем идеальный вариант под ваши требования за 24 часа.
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
                  placeholder="Ваши пожелания к дому..."
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
                    <p className="text-xl font-bold">info@dom-expert.ru</p>
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
            <span className="text-xl font-black tracking-tight text-white">DOM<span className="text-blue-600">EXPERT</span></span>
          </div>
          <p className="mb-8">© 2026 DomExpert — Продажа элитной недвижимости в Москве и области</p>
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
