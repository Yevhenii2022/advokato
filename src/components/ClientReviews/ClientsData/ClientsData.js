import clientPhoto from "../../../assets/images/clients-section/clientPhoto.png";

const ClientsData = [
	
	{
		id: 1,
		name: "Олена Лаговська",
		role: "клієнт АК 'Статус'",
		image: clientPhoto,
		review:
			"“Чудовий фахівець. Залишилися задоволені. Завжди чітко й аргументовано дає відповіді на запитання. Особливо важлива якість - чесність в оцінці ситуації, ризиків і прогнозів!!! Наше питання було вирішено в терміни, легко і без зайвих хвилювань і сумнівів. Рекомендую!!! Спасибі, Аліна. “",
	},
	// {
	// 	id: 2,
	// 	name: "Андрій Юркевич",
	// 	role: "Директор ремонтно-будівельної компанії",
	// 	image: clientPhoto,
	// 	review:
	// 		"“Хлопці молодці, хороша команда, знають свою справу на 100%!!! Особлива подяка Бурдинському Сергію, розуміє поставлене завдання з півслова, результат не змусив себе довго чекати! Все вирішили на вищому рівні! Дякую, хлопці🤝 приємно мати з вами справу👍“",
	// },
	// {
	// 	id: 3,
	// 	name: "Олександра Сідоренко",
	// 	role: "клієнт АК “Статус“",
	// 	image: clientPhoto,
	// 	review:
	// 		"“Хотілося б висловити Аліні Леонідівні подяку за кваліфіковане надання юридичної допомоги, бездоганне знання законодавства, за чудову якість виконаної роботи, проявлену уважність і коректне ставлення!!!“",
	// },
	// {
	// 	id: 4,
	// 	name: "Олександр Віноградов",
	// 	role: "Засновник молодіжного центру Inspire та 42motions",
	// 	image: clientPhoto,
	// 	review:
	// 		"“Дуже хочу сказати велике спасибі Сергію Бурдинському - керівнику адвокатської компанії “Статус“, тому що непросте завдання було вирішене завдяки йому і його компанії. Він сприяв в цілому руху, і ми перемогли, не доводячи справу до суду. І найголовніше - це хороший, по-справжньому добрий, людський підхід. Дякуємо!“",
	// },
	// {
	// 	id: 5,
	// 	name: "Анна Сємєнєнко",
	// 	role: "клієнт АК “Статус“",
	// 	image: clientPhoto,
	// 	review:
	// 		"“Всім рекомендую звертатися до Аліни за вирішенням будь-яких юридичних питань. Висококомпетентний юрист.“",
	// },
	// {
	// 	id: 6,
	// 	name: "Софія Бірук",
	// 	role: "клієнт АК “Статус“",
	// 	image: clientPhoto,
	// 	review:
	// 		"“Дякую за швидке та якісне надання послуг адвоката.“",
	// },
	// {
	// 	id: 7,
	// 	name: "EVO Drive",
	// 	role: "",
	// 	image: clientPhoto,
	// 	review:
	// 		"“Звернулися за юридичною консультацією та допомогою до компанії Status. З нами працював грамотний юрист Максим. Все пояснив і почув наш запит, все було зроблено максимально швидко і грамотно. У компанії працюють фахівці своєї справи, які завжди відгукнуться на вашу проблему і вирішать її. З повагою, компанія Evodrive.“",
	// },
	// {
	// 	id: 8,
	// 	name: "Бірук Cофія",
	// 	role: "Автор ютуб-каналу «Клятий раціоналіст»",
	// 	image: clientPhoto,
	// 	review:
	// 		"“Юристи “Статуса“ консультутвали мене щодо юридичних питань, пов'язаних з youtube-діяльністю та займався оформленням моєї діяльності як фізичної особи-підприємця. Співпрацею задоволений, все дуже професійно і якісно.“",
	// },
	// {
	// 	id: 9,
	// 	name: "Гриненко Богдан",
	// 	role: "Чемпіон та призер Літніх Паралімпійских ігор в Бразилії",
	// 	image: clientPhoto,
	// 	review:
	// 		"“Поліцейські хотіли притягнути мене до адміністративної відповідальності без будь-яких підстав! Мені довелося звернутися по допомогу до кваліфікованих юристів Адвокатської компанії “СТАТУС“. Ми оскаржили постанову співробітників поліції, і в результаті - судом прийнято рішення про закриття провадження у справі! Дякую велике юристам зі “СТАТУСУ“ - справедливість існує!“",
	// },
	// {
	// 	id: 10,
	// 	name: "ViGrand",
	// 	role: "Компанія з виготовлення металопластикових виробів",
	// 	image: clientPhoto,
	// 	review:
	// 		"“Співпрацюємо вже більше 2х років, відчуваємо комплексний захист, а також надійну правову підтримку в будь-яких питаннях нашої галузі. АК “Статус“- це наш юридичний партнер.“",
	// },
	
	// {
	// 	id: 11,
	// 	name: "Стражидінова Єкатерина",
	// 	role: "Засновник MK Crossfit",
	// 	image: clientPhoto,
	// 	review:
	// 		"“Хлопці в “Статусі“ дуже відповідальні та надійні. Спочатку я отримала первинну консультацію від А до Я, далі процес дійсно відбувався “під ключ“, що нині рідкість. Я просто оплачувала рахунки, і це все, що від мене вимагалося. У мене був повний супровід у процесі, тобто я була в курсі, що відбувається. Мені надсилали звіти, квитанції, пояснення, відбувалася комунікація. Я дуже задоволена, рекомендую хлопців. Отже, якщо вам потрібно оформити торговельну марку - то дійсно робота “під ключ“, класно, я залишилася задоволена і рекомендую “Статус“.“",
	// },
];


export default ClientsData;
