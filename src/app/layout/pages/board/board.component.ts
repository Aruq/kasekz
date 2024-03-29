import { Component, OnInit } from '@angular/core';

interface budget{
name:string,
post?:string,
job?:string,
info:string
}
interface internal_audit{
  name:string,
post?:string,
job?:string,
info?:string
}
interface listing{
  name:string,
post?:string,
job?:string,
info?:string
}

interface staff{
  name:string,
post?:string,
job?:string,
info?:string
}
interface issuer{
  name:string,
post?:string,
job?:string,
info?:string
}
interface conflict{
  name:string,
post?:string,
job?:string,
info?:string
}
interface index{
  name:string,
post?:string,
job?:string,
info?:string
}
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public pathTree = [
    {
      name: 'О Бирже',
      link:'/about-us'
    },
    {
      name: 'Комитеты и комиссии'
    },
    {name2:'Участие в профессиональных организациях',
link:'/participation'
}
  ]
  budgets:budget[]=[
    {
      name:"Елемесов Аскар Раушанулы",
      post:"Независимый Директор KASE",
      job:'Председатель Комитета',
      info:'Независимый директор ДБ АО "Сбербанк", АО "SkyBridge Invest", АО "Казахстанская Жилищная Компания", АО "Единый накопительный пенсионный фонд"'

  },
  {
    name:"Абдразаков Ельдар Советович",
   
    info:'Председатель Совета директоров АО "Сентрас Секьюритиз" (лицо, имеющее право замещать председателя Комитета в случае его отсутствия или возникновения у него конфликта интересов)'

},
{
  name:"Айнабаева Шолпан Рахманкуловна",
  job:'Эксперт',
  info:'Председатель Правления, член Совета директоров АО "SkyBridge Invest"'

},
{
  name:"Алдамберген Алина Өтемісқызы",
  info:'Председатель Правления KASE'

},
{
  name:"Виллемс Ян",
  post:"Независимый Директор KASE",
  info:'Исполнительный Директор, руководитель Отдела продуктов мировых рынков Clearstream Banking, Люксембург'

},
{
  name:"Дронин Александр Владимирович",
  info:'Заместитель Председателя Правления АО "BCC Invest" - дочерняя организация АО "Банк ЦентрКредит"'

},
{
  name:"Израэли Дорон",
  post:"Независимый Директор KASE",
  info:'Профессор Arison School of Business, IDC Herzliya, Профессор высшей школы бизнеса, Назарбаев университет'

},
{
  name:"Марич Игорь Леонидович",
  post:"Независимый Директор KASE",
  info:'Член Совета директоров – независимый директор KASE, член Правления, Член Правления – управляющий директор по продажам и развитию бизнеса ПАО "Московская Биржа ММВБ-РТС"'

},
{
  name:"Афанасьев Павел Андреевич",
  job:'Эксперт',
  info:'Директор Департамента рынка ценных бумаг Агентства Республики Казахстан по регулированию и развитию финансового рынка'

},
{
  name:"Сердюк Иван Вячеславович",

  job:'Эксперт',
  info:'Заместитель директора Департамента монетарных операций Национального Банка Республики Казахстан'

},

]
audits:internal_audit[]=[{
  name:'Израэли Дорон',
  post:'Независимый Директор KASE ',
  job:'Председатель Комитета',
  info:'Профессор Arison School of Business, IDC Herzliya, Профессор высшей школы бизнеса, Назарбаев университет'
},{
  name:'Дронин Александр Владимирович',
  info:'заместитель Председателя Правления АО "BCC Invest" - дочерняя организация АО "Банк ЦентрКредит"'
},{
  name:'Салимов Ертай Исмаилович  ',
  info:'заместитель Председателя Правления АО "Народный Банк Казахстана"'
}]

listings:listing[]=[{
  name:'Салимов Ертай Исмаилович',
  job:'Председатель Листинговой комиссии',
  info:'Заместитель Председателя Правления АО "Народный Банк Казахстана"'
},{
  name:'Бурабаев Ерлан Омурзакович',
  info:'управляющий директор аналитического центра ОЮЛ "Ассоциация финансистов Казахстана" (в случае его отсутствия – Кушнарева И. А., Первый заместитель Председателя Совета ОЮЛ "Ассоциация финансовых организаций Казахстана"  '
},{
  name:'Дронин Александр Владимирович',
  info:'Заместитель Председателя Правления АО "BCC Invest" - дочерняя организация АО "Банк ЦентрКредит"'
},{
  name:'Хорошевская Наталья Юрьевна',
  info:'заместитель Председателя Правления KASE,в случае ее отсутствия или возникновения конфликта интересов – Мажекенов  Е.Б'
},{
  name:'Дәулетбақ Айдын Бақытқанұлы',
  info:'представитель Агентства Республики Казахстан по регулированию и развитию финансового рынка, в случае его отсутствия или возникновения конфликта интересов – Жумабаева З.С.'
}]
staffs:staff[]=[{
  name:'Елемесов Аскар Раушанулы',
  post:'Независимый Директор KASE',
  job:'Председатель Комитета',
  info:'независимый директор ДБ АО "Сбербанк", АО "SkyBridge Invest", АО "Казахстанская Жилищная Компания", АО "Единый накопительный пенсионный фонд"'
},{
  name:'Абдразаков Ельдар Советович',
  info:'председатель Совета директоров АО "Сентрас Секьюритиз" (лицо, имеющее право замещать председателя Комитета в случае его отсутствия или возникновения у него конфликта интересов)'
},{
  name:'Алдамберген Алина Өтемісқызы',
  info:'Председатель Правления KASE'
},{
  name:'Салимов Ертай Исмаилович',
  info:'заместитель Председателя Правления АО "Народный Банк Казахстана"'
}]
issuers:issuer[]=[{
  name:'Салимов Ертай Исмаилович',
  job:'Председатель Комитета',
  info:'Заместитель Председателя Правления АО "Народный Банк Казахстана", в случае его отсутствия или возникновения конфликта интересов – Елемесов  А.Р.'
},{
  name:'Дәулетбақ Айдын Бақытқанұлы',
  info:'представитель Агентства Республики Казахстан по регулированию и развитию финансового рынка, в случае его отсутствия или возникновения конфликта интересов – Жумабаева З.С.'
},{
  name:'Хорошевская Наталья Юрьевна',
  info:'заместитель Председателя Правления KASE, в случае ее отсутствия или возникновения конфликта интересов – иной член Правления KASE в соответствии с установленным порядком взаимозамещения членов Правления KASE в случае их отсутствия'
},{
  name:'Малецкая Алла Геннадьевна',
  info:'директор Департамента листинга KASE, в случае ее отсутствия или возникновения конфликта – иной работник KASE, исполняющий ее обязанности'
},{
  name:'Литвинов Виктор Сергеевич',
  info:'директор Департамента мониторинга KASE, в случае его отсутствия или возникновения конфликта интересов – иной работник KASE, исполняющий его обязанности'
}]
conflicts:conflict[]=[{
  name:'Елемесов Аскар Раушанулы',
  post:'Независимый Директор KASE ',
  job:'Председатель комиссии по разрешению споров и конфликтов',
  info:'независимый директор ДБ АО "Сбербанк", АО "SkyBridge Invest", АО "Казахстанская Жилищная Компания", АО "Единый накопительный пенсионный фонд"'
},{
  name:'Абдразаков Ельдар Советович',
  info:'председатель Совета директоров АО "Сентрас Секьюритиз" (лицо, имеющее право замещать председателя Комиссии в случае его отсутствия или возникновения конфликта интересов)'
},{
  name:'Саржаков Жайнар Наурзбаевич',
  info:'заместитель Председателя Правления KASE'
}]
indexes:index[]=[{
  name:'Хорошевская Наталья Юрьевна',
  job:'председатель Комитета',
  info:'заместитель Председателя Правления KASE (в случае ее отсутствия Цалюк А.Ю., заместитель Председателя Правления)'
},{
  name:'Цалюк Андрей Юрьевич',
  info:'заместитель Председателя Правления KASE'
},{
  name:'Асильбеков Роман Джумабаевич',
  info:'член Правления, заместитель Председателя Правления АО "ДО "Народного Банка Казахстана "Halyk Finance"'
},{
  name:'Сон Алексей Леонидович',
  info:'управляющий директор, директор Департамента торгов KASE (в случае его отсутствия Ерзина Р.К., начальник отдела организации и проведения торгов Департамента торгов)'
},{
  name:'Ямбаева Алла Валерьевна',
  info:'директор Клиринговой палаты KASE (в случае ее отсутствия Қапатай Ж.Е.,главный специалист Отдела рисков центрального контрагента Клиринговой палаты )'
},{
  name:'Литвинов Виктор Сергеевич',
  info:'директор Департамента мониторинга эмитентов и членов Биржи (в случае его отсутствия Юсупова Е.М., заместитель директора Департамента мониторинга эмитентов и членов биржи)'
},{
  name:'Лысенко Елена Георгиевна',
  info:"начальник Отдела индексов Департамента информации и статистики (в случае ее отсутствия Игрунова В.Б., заместитель директора, начальник Отдела информации Департамента информации и статистики)"
},{
  name:'Сұлтанбай Ақерке Сауранқызы',
  job:'секретарь Комитета',
  info:'специалист Отдела индексов Департамента информации и статистики (в случае ее отсутствия Лысенко Е.Г., начальник Отдела индексов Департамента информации и статистики)'
}]
  
  viewMode: string | undefined;
        ngOnInit() {
    this.viewMode = "tab1";
    console.log(this.viewMode);
  }

}


