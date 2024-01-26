/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import s from "./page.module.css";
import LinkSymbol from "./components/LinkSymbol";
import GmailIcon from "./components/icons/Gmail";
import IconWrapper from "./components/IconWrapper";
import WhatsAppIcon from "./components/icons/WhatsApp";
import PhoneIcon from "./components/icons/Phone";

export default function Home() {
  return (
    <main className={s.main}>
      <section className={s.titleSection}>
        <div className={s.portraitContainer}>
          <Image
            alt="Портрет"
            src="/portrait.jpg"
            fill
            sizes="min(400px, 90vw)"
            style={{ objectFit: "contain" }}
          />
        </div>
        <h1>Ательє Мод</h1>
        <span>Професійне пошиття жіночого одягу</span>
      </section>

      <section className={s.services} id="services">
        <a className={s.service} href="#sewing">
          <div className={s.serviceIconContainer}>
            <Image alt="" src="/portrait.jpg" width={150} height={150} />
          </div>
          <div className={s.serviceText}>
            Пошиття нового одягу&nbsp;{<LinkSymbol />}
          </div>
        </a>
        <a className={s.service} href="#wedding-dresses">
          <div className={s.serviceIconContainer}>
            <Image alt="" src="/portrait.jpg" width={150} height={150} />
          </div>
          <div className={s.serviceText}>
            Весільні сукні&nbsp;{<LinkSymbol />}
          </div>
        </a>
        <a className={s.service} href="#repair">
          <div className={s.serviceIconContainer}>
            <Image alt="" src="/portrait.jpg" width={150} height={150} />
          </div>
          <div className={s.serviceText}>
            Ремонт одягу&nbsp;{<LinkSymbol />}
          </div>
        </a>
        <a className={s.service} href="#cloth">
          <div className={s.serviceIconContainer}>
            <Image alt="" src="/portrait.jpg" width={150} height={150} />
          </div>
          <div className={s.serviceText}>
            Продаж тканини&nbsp;{<LinkSymbol />}
          </div>
        </a>
      </section>

      <section className={s.about} id="about">
        <div className={s.infoContainer}>
          <h2>Про Ательє Мод</h2>
          <div>
            Світлий затишний салон в кількох хвилинах від міста Йена. Вас тепло
            приймуть, вислухають ваші побажання і якісно пошиють ваші речі. Ми
            шиємо одяг дуже хорошої якості, тому здобули багато вдячних
            клієнтів. Звертаючись в наше Ательє Мод, ви точно отримаєте
            унікальний готовий одяг, пошитий на замовлення за вашими
            побажаннями. Більш того, ви самі можете намалювати ескізи, уточнити
            тканини, кольори та фурнітуру для майбутнього виробу.
          </div>
          <a className={s.showMapLink} href="#map">
            <button type="button" className={s.button}>
              Показати на мапі {<LinkSymbol />}
            </button>
          </a>
        </div>
        <div className={s.reviews}>
          <div className={s.review}>
            <p className={s.reviewText}>
              Дуже сподобалось ательє! Світле, чисте та затишне. Приємний,
              ввічливий та уважний персонал допоможе з вибором тканини та
              фасону. Чудова якість роботи! Обов'язково прийду ще раз.
              Рекомендую!
            </p>
            <span className={s.reviewAuthor}>Інна Д.</span>
          </div>
          <div className={s.review}>
            <p className={s.reviewText}>
              Талановита майстриня. Шила мені багато чого. Я дуже задоволена.
              Всі її роботи високої якості, тому що вона любить свою роботу.
              Всім, хто хоче виглядати розкішно — рекомендую!
            </p>
            <span className={s.reviewAuthor}>Ліза В.</span>
          </div>
          <div className={s.review}>
            <p className={s.reviewText}>
              Вчора відвідала ательє в місті Кала. Відчуття наче ти вдома й тобі
              тут раді. Професійний підхід і ввічливе, по особливому уважне до
              потреб відвідувачів, ставлення, з боку власника Любові, залишає
              хороше, приємне враження. Рекомендую!
            </p>
            <span className={s.reviewAuthor}>Наталія В.</span>
          </div>
        </div>
      </section>
      <section className={s.mapSection} id="map">
        <h2>Де нас знайти</h2>
        <iframe
          className={s.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvS4py6StpkcRFFTF-f6nVps&key=AIzaSyDTOaQORSKAU2oLXpfi70MCQKs3tohJ_hs"
          title="map"
        />
        <p>Bahnhofstraße 18, 07768 Kahla</p>
      </section>
      <section className={s.contact} id="contact">
        <h2>Контакт</h2>
        <form
          className={s.contactForm}
          action="https://formspree.io/f/xpzkroqj"
          method="post"
        >
          <input
            className={s.input}
            placeholder="Ім'я"
            name="name"
            type="text"
            required
          />
          <input
            className={s.input}
            placeholder="Електронна адреса"
            name="email"
            type="email"
            required
          />
          <textarea
            className={s.textarea}
            rows={11}
            name="message"
            placeholder="Текст"
            required
          />
          <button className={s.button} type="submit">
            Надіслати
          </button>
        </form>
        <h2>—</h2>
        <div className={s.contactIcons}>
          <a href="mailto:test@test.com" title="mail">
            <IconWrapper>
              <GmailIcon />
            </IconWrapper>
          </a>
          <a href="https://wa.me/+4915906446200" title="WhatsApp">
            <IconWrapper>
              <WhatsAppIcon />
            </IconWrapper>
          </a>
          <a href="tel:+49-1590-6446200" title="call">
            <IconWrapper>
              <PhoneIcon />
            </IconWrapper>
          </a>
        </div>
      </section>
    </main>
  );
}
