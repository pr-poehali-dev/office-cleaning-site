import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      icon: 'Building2',
      title: 'Уборка офисов',
      description: 'Комплексная уборка офисных помещений любой площади',
      features: ['Ежедневная уборка', 'Мытьё окон', 'Уборка санузлов', 'Вынос мусора']
    },
    {
      icon: 'Briefcase',
      title: 'Уборка бизнес-центров',
      description: 'Профессиональная уборка коммерческих зданий',
      features: ['Холлы и лестницы', 'Лифты', 'Парковки', 'Фасады зданий']
    },
    {
      icon: 'Users',
      title: 'Аутсорсинг клининга',
      description: 'Полное управление чистотой вашего бизнеса',
      features: ['Штат сотрудников', 'Оборудование', 'Контроль качества', 'Отчётность']
    }
  ];

  const prices = [
    { service: 'Ежедневная уборка офиса', area: 'до 100 м²', price: 'от 5 000 ₽' },
    { service: 'Ежедневная уборка офиса', area: '100-300 м²', price: 'от 12 000 ₽' },
    { service: 'Уборка бизнес-центра', area: 'от 1000 м²', price: 'от 40 000 ₽' },
    { service: 'Генеральная уборка', area: 'любая', price: 'от 150 ₽/м²' },
    { service: 'Мытьё окон', area: 'стандартное окно', price: 'от 250 ₽' },
    { service: 'Химчистка мебели', area: 'диван', price: 'от 3 000 ₽' }
  ];

  const portfolio = [
    { 
      title: 'Бизнес-центр "Альфа"', 
      area: '2500 м²', 
      duration: '12 месяцев',
      image: 'https://cdn.poehali.dev/projects/73f001ca-cf55-4829-8f94-d54b994d47c5/files/292338d4-7bb0-4afa-9bad-93d26345d063.jpg'
    },
    { 
      title: 'Офис IT-компании', 
      area: '450 м²', 
      duration: '24 месяца',
      image: 'https://cdn.poehali.dev/projects/73f001ca-cf55-4829-8f94-d54b994d47c5/files/61982b5d-9adb-4c89-bb4f-0a87b169218f.jpg'
    },
    { 
      title: 'Торговый центр', 
      area: '5000 м²', 
      duration: '18 месяцев',
      image: 'https://cdn.poehali.dev/projects/73f001ca-cf55-4829-8f94-d54b994d47c5/files/292338d4-7bb0-4afa-9bad-93d26345d063.jpg'
    },
    { 
      title: 'Офисный комплекс', 
      area: '1800 м²', 
      duration: '36 месяцев',
      image: 'https://cdn.poehali.dev/projects/73f001ca-cf55-4829-8f94-d54b994d47c5/files/4fa488bd-9481-4097-84f0-98c452527e61.jpg'
    }
  ];

  const faqs = [
    {
      q: 'Как часто проводится уборка?',
      a: 'Мы предлагаем гибкий график: ежедневная, через день, еженедельная уборка или разовые выезды. График составляется индивидуально под ваши потребности.'
    },
    {
      q: 'Предоставляете ли вы оборудование и средства?',
      a: 'Да, мы используем только профессиональное оборудование и сертифицированные чистящие средства. Всё необходимое предоставляется нашей компанией.'
    },
    {
      q: 'Как контролируется качество работы?',
      a: 'У нас есть система чек-листов и регулярные проверки супервайзерами. Также мы собираем обратную связь от клиентов после каждой уборки.'
    },
    {
      q: 'Можно ли заказать уборку в нерабочее время?',
      a: 'Конечно! Мы работаем 24/7 и можем проводить уборку в удобное для вас время, включая ночные часы и выходные дни.'
    },
    {
      q: 'Какой минимальный срок контракта?',
      a: 'Минимальный срок для аутсорсинга — 3 месяца. Для разовых уборок ограничений нет. Чем длиннее контракт, тем выгоднее условия.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-primary">ЧистоПро</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact">
              <Button>Связаться</Button>
            </a>
          </div>
          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Профессиональный клининг
            <span className="block text-primary mt-2">для вашего бизнеса</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up">
            Комплексная уборка офисов и бизнес-центров. Аутсорсинг клининга с полным управлением и контролем качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#contact">Получить расчёт</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#services">Узнать больше</a>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { icon: 'Award', text: '8 лет опыта' },
              { icon: 'Users', text: '200+ клиентов' },
              { icon: 'CheckCircle2', text: '99% качество' },
              { icon: 'Clock', text: '24/7 сервис' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                <Icon name={item.icon as any} size={40} className="text-primary" />
                <p className="font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр клининговых услуг для офисов и коммерческих помещений
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых платежей
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {prices.map((item, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardContent className="flex flex-col md:flex-row md:items-center justify-between p-6 gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.service}</h3>
                      <p className="text-muted-foreground">{item.area}</p>
                    </div>
                    <div className="text-2xl font-bold text-primary">{item.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" asChild>
                <a href="#contact">Запросить индивидуальный расчёт</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании ЧистоПро</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы специализируемся на профессиональном клининге офисов и бизнес-центров с 2016 года. 
                Наша миссия — обеспечить идеальную чистоту в вашем бизнесе, чтобы вы могли сосредоточиться на главном.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Предлагаем полный аутсорсинг клининга: от подбора персонала до контроля качества. 
                Работаем по современным стандартам с использованием профессионального оборудования и экологичных средств.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Icon name="Shield" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Застрахованы</h4>
                    <p className="text-sm text-muted-foreground">Полная ответственность за работу</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Свой штат</h4>
                    <p className="text-sm text-muted-foreground">Обученные специалисты</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Leaf" className="text-secondary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Эко-средства</h4>
                    <p className="text-sm text-muted-foreground">Безопасно для людей</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="FileCheck" className="text-secondary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Документы</h4>
                    <p className="text-sm text-muted-foreground">Все лицензии и сертификаты</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/73f001ca-cf55-4829-8f94-d54b994d47c5/files/61982b5d-9adb-4c89-bb4f-0a87b169218f.jpg" 
                alt="Чистый офис после уборки"
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Примеры реализованных проектов по клинингу
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((project, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Icon name="Square" size={16} className="text-muted-foreground" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Icon name="Calendar" size={16} className="text-muted-foreground" />
                      <span>{project.duration}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Вопросы и ответы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Ответы на часто задаваемые вопросы о наших услугах
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Связаться с нами</h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку и мы свяжемся с вами в течение 30 минут
          </p>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем объекте и требованиях к уборке"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Phone" className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Телефон</p>
                <p className="font-semibold">+7 (495) 123-45-67</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Mail" className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold">info@chistopro.ru</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="MapPin" className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Адрес</p>
                <p className="font-semibold">Москва, ул. Ленина 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <span className="text-xl font-bold">ЧистоПро</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональный клининг офисов и бизнес-центров с 2016 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Уборка офисов</li>
                <li>Уборка бизнес-центров</li>
                <li>Аутсорсинг клининга</li>
                <li>Генеральная уборка</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:opacity-100">О нас</a></li>
                <li><a href="#portfolio" className="hover:opacity-100">Портфолио</a></li>
                <li><a href="#faq" className="hover:opacity-100">FAQ</a></li>
                <li><a href="#contact" className="hover:opacity-100">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@chistopro.ru</li>
                <li>Москва, ул. Ленина 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
            © 2024 ЧистоПро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}