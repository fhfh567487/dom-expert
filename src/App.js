import React, { useState } from 'react';
import { Search, Home, MapPin, BedDouble, Maximize, Phone, Mail, CheckCircle2, Menu, X, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const ApartmentCard = ({ apartment }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:scale-[1.02] duration-500 border border-gray-100 group">
    <div className="relative h-80 overflow-hidden">
      <img src={apartment.image} alt={apartment.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className={`absolute top-4 left-4 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${apartment.type === 'Продажа' ? 'bg-emerald-600' : 'bg-amber-600'}`}>
        {apartment.type}
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{apartment.title}</h3>
      <p className="text-gray-500 flex items-center gap-2 mb-6 font-light">
        <MapPin size={18} className="text-emerald-600" /> {apartment.location}
      </p>
      <div className="grid grid-cols-2 gap-y-4 py-6 border-y border-gray-100 mb-6 text-gray-600">
        <div className="flex items-center gap-3">
          <Maximize size={20} className="text-emerald-600" /> <span>Участок: {apartment.land} сот.</span>
        </div>
        <div className="flex items-center gap-3">
          <Home size={20} className="text-emerald-600" /> <span>Площадь: {apartment.area} м²</span>
        </div>
        <div className="flex items-center gap-3">
          <BedDouble size={20} className="text-emerald-600" /> <span>Спален: {apartment.rooms}</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 size={20} className="text-emerald-600" /> <span>{apartment.feature}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-serif font-bold text-emerald-800">{apartment.price} ₽</span>
        <button className="bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-100">
          Детали
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
      title: "Резиденция 'Зеленый Рай'",
      location: "Барвиха, КП 'Лесные Дали'",
      price: "450 000 000",
      area: 850,
      land: 25,
      rooms: 7,
      feature: "Бассейн, SPA",
      type: "Продажа",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Шале в Альпийском стиле",
      location: "Новая Рига, КП 'Кедры'",
      price: "280 000 000",
      area: 420,
      land: 15,
      rooms: 5,
      feature: "Кинотеатр, Винотека",
      type: "Продажа",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Усадьба 'Белый Клевер'",
      location: "Рублево-Архангельское",
      price: "120 000 000 / мес",
      area: 600,
      land: 30,
      rooms: 6,
      feature: "Охрана 24/7, Сад",
      type: "Аренда",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Модернистская Вилла",
      location: "Истринское водохранилище",
      price: "190 000 000",
      area: 350,
      land: 12,
      rooms: 4,
      feature: "Панорамное остекление",
      type: "Продажа",
      image: "https://images.unsplash.com/photo-1600596542815-5832575a96d4?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Классический Особняк",
      location: "КП 'Святогор'",
      price: "60 000 000 / мес",
      area: 400,
      land: 20,
      rooms: 5,
      feature: "Бильярдная, Терраса",
      type: "Аренда",
      image: "https://images.unsplash.com/photo-1580587771525-78475756635d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Дворец 'Золотой Век'",
      location: "Подмосковье, Элитный сектор",
      price: "890 000 000",
      area: 1200,
      land: 50,
      rooms: 12,
      feature: "Вертолетная площадка",
      type: "Продажа",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b37f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredApartments = filter === 'Все'
    ? apartments
    : apartments.filter(a => a.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-lg border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="bg-emerald-800 p-2 rounded-lg shadow-lg shadow-emerald-200">
                <Home className="text-white" size={28} />
              </div>
              <span className="text-2xl font-serif font-black tracking-tight text-gray-900 uppercase">Dom<span className="text-emerald-700">Expert</span> <span className="text-sm font-light text-emerald-600 ml-1 italic">Luxe</span></span>
            </div>

            <div className="hidden md:flex items-center gap-10 font-medium text-gray-600">
              <a href="#catalog" className="hover:text-emerald-700 transition-colors tracking-wide">Каталог резиденций</a>
              <a href="#services" className="hover:text-emerald-700 transition-colors tracking-wide">Консьерж-сервис</a>
              <a href="#contacts" className="hover:text-emerald-700 transition-colors tracking-wide">Контакты</a>
              <button className="bg-emerald-800 text-white px-8 py-3 rounded-full hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-200 font-semibold tracking-wide">
                Записаться на просмотр
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
          <div className="md:hidden bg-white border-b border-emerald-100 p-4 space-y-4 animate-in fade-in slide-in-from-top-4">
            <a href="#catalog" className="block px-4 py-2 text-gray-600 hover:bg-emerald-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Каталог резиденций</a>
            <a href="#services" className="block px-4 py-2 text-gray-600 hover:bg-emerald-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Консьерж-сервис</a>
            <a href="#contacts" className="block px-4 py-2 text-gray-600 hover:bg-emerald-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            <button className="w-full bg-emerald-800 text-white px-6 py-3 rounded-xl font-medium">Записаться на просмотр</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1600596542815-5832575a96d4?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover opacity-30"
            alt="Luxury Estate"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl lg:text-8xl font-serif font-black text-gray-900 mb-8 leading-tight">
            Искусство жить <br />
            <span className="text-emerald-800 italic">совершенно</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Эксклюзивный доступ к самым престижным загородным резиденциям Москвы и области. <br className="hidden md:block" />
            Мы подбираем не просто дом, а наследие для вашего будущего.
          </p>

          <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md p-3 rounded-3xl shadow-2xl border border-emerald-100 flex flex-col md:flex-row gap-3">
            <div className="flex-1 flex items-center px-6 py-4 border-b md:border-b-0 md:border-r border-emerald-100 gap-4">
              <Search className="text-emerald-600" size={22} />
              <input
                type="text"
                placeholder="Локация, КП или пожелания..."
                className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
            </div>
            <div className="flex-1 flex items-center px-6 py-4 border-b md:border-b-0 md:border-r border-emerald-100 gap-4">
              <Maximize className="text-emerald-600" size={22} />
              <select className="w-full outline-none text-gray-700 bg-transparent appearance-none cursor-pointer">
                <option>Любая площадь участка</option>
                <option>до 10 соток</option>
                <option>10-30 соток</option>
                <option>30+ соток</option>
              </select>
            </div>
            <button className="bg-emerald-800 text-white px-12 py-5 rounded-2xl font-bold hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-200">
              Найти резиденцию
            </button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Коллекция резиденций</h2>
              <div className="flex gap-3 mb-4">
                {['Все', 'Продажа', 'Аренда'].map(t => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === t ? 'bg-emerald-800 text-white shadow-lg shadow-emerald-200' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <button className="text-emerald-800 font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              Смотреть весь каталог <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredApartments.map(apt => (
              <ApartmentCard key={apt.id} apartment={apt} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Привилегии DomExpert Luxe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">Персонализированный подход к каждой детали вашего комфорта</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Подбор резиденции",
                desc: "Поиск объектов из закрытых баз данных, которые не представлены на открытом рынке.",
                icon: <ArrowDownLeft className="text-emerald-700" size={36} />
              },
              {
                title: "Управление объектом",
                desc: "Полный цикл управления вашим имением: от клининга и охраны до ландшафтного дизайна.",
                icon: <ArrowUpRight className="text-emerald-700" size={36} />
              },
              {
                title: "Юридический эксклюзив",
                desc: "Конфиденциальное сопровождение сделок любой сложности с гарантией полной безопасности.",
                icon: <CheckCircle2 className="text-emerald-700" size={36} />
              }
            ].map((feat, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-emerald-200 transition-all group hover:shadow-xl hover:shadow-emerald-50">
                <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-md group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{feat.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-24 bg-emerald-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-800/50 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-8 text-gray-900">Персональная консультация</h2>
              <p className="text-gray-600 mb-12 text-lg leading-relaxed font-light">
                Оставьте заявку, чтобы получить доступ к закрытому каталогу резиденций и назначить встречу с ведущим экспертом.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all bg-gray-50"
                  />
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all bg-gray-50"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Электронная почта"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all bg-gray-50"
                />
                <textarea
                  placeholder="Опишите ваши пожелания к идеальной резиденции..."
                  rows="4"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all bg-gray-50"
                ></textarea>
                <button className="w-full bg-emerald-800 text-white py-5 rounded-2xl font-bold text-xl hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-200">
                  Отправить запрос
                </button>
              </form>
            </div>

            <div className="bg-gray-50 p-12 lg:p-20 flex flex-col justify-center border-l border-gray-100">
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-emerald-700">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Телефон</p>
                    <p className="text-2xl font-serif font-bold text-gray-900">+7 (495) 000-00-00</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-emerald-700">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Email</p>
                    <p className="text-2xl font-serif font-bold text-gray-900">vip@dom-expert.luxe</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-emerald-700">
                    <MapPin size={28} />
                    <div className="hidden"></div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Офис</p>
                    <p className="text-2xl font-serif font-bold text-gray-900">г. Москва, ул. Тверская, 12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-emerald-800 p-2 rounded-lg">
              <Home className="text-white" size={24} />
            </div>
            <span className="text-2xl font-serif font-black tracking-tight text-white uppercase">Dom<span className="text-emerald-600">Expert</span> <span className="text-sm font-light text-emerald-600 ml-1 italic">Luxe</span></span>
          </div>
          <p className="mb-10 font-light">© 2026 DomExpert Luxe — Эксперты в мире элитной загородной недвижимости</p>
          <div className="flex justify-center gap-10 text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-white transition-colors">Соглашение</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
