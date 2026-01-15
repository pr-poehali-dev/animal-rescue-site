import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Animal {
  id: string;
  name: string;
  age: string;
  gender: string;
  size: string;
  breed: string;
  description: string;
  personality: string[];
  health: string;
  image: string;
}

const animalsData: Animal[] = [
  {
    id: "1",
    name: "Рекс",
    age: "3 года",
    gender: "Кобель",
    size: "Средний",
    breed: "Метис",
    description: "Добрый и игривый пёс, который ищет любящую семью. Рекс очень послушный и хорошо ладит с детьми.",
    personality: ["Дружелюбный", "Активный", "Послушный"],
    health: "Привит, стерилизован, здоров",
    image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/ee43725f-1156-41a2-b6a4-0a776c57f3b8.jpg"
  },
  {
    id: "2",
    name: "Мурка",
    age: "2 года",
    gender: "Кошка",
    size: "Маленький",
    breed: "Рыжая кошка",
    description: "Ласковая кошечка, которая любит тепло и уют. Мурка спокойная и любит сидеть на ручках.",
    personality: ["Ласковая", "Спокойная", "Игривая"],
    health: "Привита, стерилизована, здорова",
    image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/10a55517-1858-4cdb-8429-c65819b893c2.jpg"
  },
  {
    id: "3",
    name: "Бобик",
    age: "1 год",
    gender: "Кобель",
    size: "Средний",
    breed: "Щенок метиса",
    description: "Энергичный щенок, готовый дарить радость каждый день. Бобик обожает играть и учиться новому.",
    personality: ["Энергичный", "Умный", "Любопытный"],
    health: "Привит, готов к стерилизации",
    image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/a5a441c3-c206-466e-a206-56d677a48d0b.jpg"
  },
  {
    id: "4",
    name: "Барон",
    age: "4 года",
    gender: "Кобель",
    size: "Большой",
    breed: "Метис овчарки",
    description: "Благородный и умный пёс. Барон отлично подходит для охраны дома и будет преданным другом.",
    personality: ["Умный", "Преданный", "Спокойный"],
    health: "Привит, стерилизован, здоров",
    image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/0743b753-09ac-4462-b998-2c17e29613eb.jpg"
  },
  {
    id: "5",
    name: "Снежка",
    age: "1.5 года",
    gender: "Кошка",
    size: "Маленький",
    breed: "Белая пушистая кошка",
    description: "Нежная белоснежная красавица. Снежка очень чистоплотная и любит внимание.",
    personality: ["Нежная", "Чистоплотная", "Ласковая"],
    health: "Привита, стерилизована, здорова",
    image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/287d6056-10a9-42f1-b624-b7b873212212.jpg"
  },
  {
    id: "6",
    name: "Джек",
    age: "2.5 года",
    gender: "Кобель",
    size: "Средний",
    breed: "Бордер-колли метис",
    description: "Умный и энергичный пёс. Джек обожает активные прогулки и игры с мячом.",
    personality: ["Умный", "Активный", "Обучаемый"],
    health: "Привит, стерилизован, здоров",
    image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/65e6909f-a9ca-479b-9fcf-d0282b1ab460.jpg"
  },
  {
    id: "7",
    name: "Тишка",
    age: "6 месяцев",
    gender: "Кот",
    size: "Маленький",
    breed: "Серый полосатый котёнок",
    description: "Игривый котёнок, который подарит массу радости. Тишка любит исследовать всё вокруг.",
    personality: ["Игривый", "Любопытный", "Ласковый"],
    health: "Привит, готов к кастрации",
    image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/84cad932-f155-4423-b920-3447081242f2.jpg"
  },
  {
    id: "8",
    name: "Лаки",
    age: "8 месяцев",
    gender: "Кобель",
    size: "Средний",
    breed: "Щенок ретривера",
    description: "Солнечный и добрый щенок. Лаки идеально подходит для семей с детьми.",
    personality: ["Добрый", "Игривый", "Дружелюбный"],
    health: "Привит, готов к стерилизации",
    image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/3132f594-0bf3-4b1b-bf2b-8b7ae695f6a1.jpg"
  },
  {
    id: "9",
    name: "Багира",
    age: "3 года",
    gender: "Кошка",
    size: "Маленький",
    breed: "Чёрная кошка",
    description: "Грациозная и независимая кошка. Багира спокойная, но любит играть в свободное время.",
    personality: ["Независимая", "Спокойная", "Грациозная"],
    health: "Привита, стерилизована, здорова",
    image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/842286c4-5f91-4601-a005-855489ddb910.jpg"
  },
  {
    id: "10",
    name: "Шарик",
    age: "2 года",
    gender: "Кобель",
    size: "Маленький",
    breed: "Терьер метис",
    description: "Весёлый и энергичный малыш. Шарик любит прогулки и всегда поднимет настроение.",
    personality: ["Весёлый", "Энергичный", "Дружелюбный"],
    health: "Привит, стерилизован, здоров",
    image: "https://cdn.poehali.dev/projects/a2cc21bb-f1ec-43c3-b0b1-fcbd16aea613/files/a350cd41-8cd5-4991-bafd-46448860c113.jpg"
  }
];

const AnimalDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const animal = animalsData.find(a => a.id === id);

  if (!animal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Животное не найдено</h2>
          <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
              <Icon name="Pawprint" className="text-primary" size={28} />
              <span className="text-xl font-bold text-primary">Помощь животным</span>
            </div>
            <Button variant="outline" onClick={() => navigate("/")}>
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Назад
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <img 
                src={animal.image} 
                alt={animal.name}
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>

            <div className="animate-fade-in space-y-6">
              <div>
                <h1 className="text-5xl font-bold mb-4">{animal.name}</h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {animal.personality.map((trait, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Calendar" className="text-primary" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">Возраст</div>
                      <div className="font-semibold">{animal.age}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Icon name="User" className="text-primary" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">Пол</div>
                      <div className="font-semibold">{animal.gender}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Icon name="Ruler" className="text-primary" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">Размер</div>
                      <div className="font-semibold">{animal.size}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Icon name="Dog" className="text-primary" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">Порода</div>
                      <div className="font-semibold">{animal.breed}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Heart" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">Здоровье</div>
                      <div className="font-semibold">{animal.health}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">О питомце</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {animal.description}
                  </p>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Я хочу забрать домой
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Icon name="Share2" size={20} className="mr-2" />
                  Поделиться
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Другие питомцы</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {animalsData.filter(a => a.id !== id).slice(0, 4).map((otherAnimal) => (
                <Card 
                  key={otherAnimal.id}
                  className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => navigate(`/animal/${otherAnimal.id}`)}
                >
                  <img 
                    src={otherAnimal.image} 
                    alt={otherAnimal.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h4 className="font-bold text-lg mb-1">{otherAnimal.name}</h4>
                    <p className="text-sm text-muted-foreground">{otherAnimal.age}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimalDetail;
