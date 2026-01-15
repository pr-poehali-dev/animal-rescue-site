import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const animals = [
    {
      name: "Рекс",
      age: "3 года",
      description: "Добрый и игривый пёс, который ищет любящую семью",
      image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/ee43725f-1156-41a2-b6a4-0a776c57f3b8.jpg"
    },
    {
      name: "Мурка",
      age: "2 года",
      description: "Ласковая кошечка, которая любит тепло и уют",
      image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/10a55517-1858-4cdb-8429-c65819b893c2.jpg"
    },
    {
      name: "Бобик",
      age: "1 год",
      description: "Энергичный щенок, готовый дарить радость каждый день",
      image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/a5a441c3-c206-466e-a206-56d677a48d0b.jpg"
    }
  ];

  const ways = [
    { icon: "Heart", title: "Стать опекуном", description: "Возьмите питомца под опеку и помогайте ему ежемесячно" },
    { icon: "HandCoins", title: "Финансовая помощь", description: "Любая сумма поможет нам накормить и вылечить животных" },
    { icon: "Truck", title: "Волонтёрство", description: "Помогите нам выгуливать животных и ухаживать за приютом" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Pawprint" className="text-primary" size={28} />
              <span className="text-xl font-bold text-primary">Помощь животным</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#animals" className="text-foreground hover:text-primary transition-colors">Животные</a>
              <a href="#help" className="text-foreground hover:text-primary transition-colors">Помощь</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Дайте второй шанс бездомным животным
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Каждое животное заслуживает любовь и заботу. Помогите нам сделать их жизнь лучше.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Помочь сейчас
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/ee43725f-1156-41a2-b6a4-0a776c57f3b8.jpg" 
                alt="Hero"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">О нашей миссии</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы — команда неравнодушных людей, которые посвятили свою жизнь спасению бездомных животных. 
              За 10 лет работы мы помогли найти дом более чем 2000 питомцам и продолжаем нашу миссию каждый день.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">2000+</div>
                <div className="text-muted-foreground">Спасённых животных</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary mb-2">10</div>
                <div className="text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">150+</div>
                <div className="text-muted-foreground">Волонтёров</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="animals" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши подопечные</h2>
            <p className="text-lg text-muted-foreground">
              Познакомьтесь с животными, которые ждут своего дома
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {animals.map((animal, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in">
                <img 
                  src={animal.image} 
                  alt={animal.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{animal.name}</h3>
                  <p className="text-primary font-semibold mb-3">{animal.age}</p>
                  <p className="text-muted-foreground mb-4">{animal.description}</p>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Познакомиться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="help" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Как вы можете помочь</h2>
            <p className="text-lg text-muted-foreground">
              Есть много способов поддержать бездомных животных
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ways.map((way, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow animate-fade-in">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={way.icon} className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{way.title}</h3>
                <p className="text-muted-foreground">{way.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Мы всегда рады ответить на ваши вопросы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="MapPin" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">ул. Примерная, д. 123, Москва</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Phone" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">help@animals.ru</p>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <h3 className="font-bold mb-4">Напишите нам</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea 
                  placeholder="Сообщение" 
                  rows={4}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Pawprint" size={28} />
              <span className="text-xl font-bold">Помощь животным</span>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://vk.com/public123456789" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                aria-label="ВКонтакте"
              >
                <Icon name="Facebook" size={24} />
              </a>
              <a 
                href="https://instagram.com/help_animals_org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a 
                href="https://t.me/help_animals_channel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                aria-label="Telegram"
              >
                <Icon name="Send" size={24} />
              </a>
              <a 
                href="https://youtube.com/@HelpAnimals" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                aria-label="YouTube"
              >
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 opacity-80">
            © 2024 Помощь животным. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;