//components
import { Link, NavLink } from "react-router-dom";
import { SwipperHero, Image, Card, Input } from "../components";

//masonry
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import useAxios from "../hooks/useAxios";

//uuid
import { v4 as uuidv4 } from "uuid";

function Home() {
  const {
    data: contactData,
    error: errorContact,
    loading: errorLoading,
  } = useAxios(`${BASE_URL}/footers`);
  let phones, address, email, phone1, phone2;
  if (contactData && contactData.length > 0) {
    ({
      phones: [phone1, phone2],
      email,
      address,
    } = contactData[0]);
  }

  const {
    data: productsData,
    error: productsError,
    loading: productsLoading,
  } = useAxios(`${BASE_URL}/products/paginate?page=1&limit=10`);
  // console.log(productsData.rows);

  const {
    data: partnersData,
    loading: loadingPartners,
    error: errorsPartners,
  } = useAxios(`${BASE_URL}/partners`);

  const {
    data: galleryData,
    loading: loadingGallery,
    error: errorsGallery,
  } = useAxios(`${BASE_URL}/photo-medias`);

  const {
    data: chooseData,
    error: chooseError,
    loading: chooseLoading,
  } = useAxios(`${BASE_URL}/why-choose-uses`);

  let benefits, chooseTitle, chooseDesc;
  let benefist1, benefist2, benefist3, benefist4, benefist5, benefist6;

  if (chooseData && chooseData.length > 0) {
    ({ benefits, title: chooseTitle, desc: chooseDesc } = chooseData[0]);

    [benefist1, benefist2, benefist3, benefist4, benefist5, benefist6] =
      benefits;
  }

  return (
    <>
      <section>
        <SwipperHero />
      </section>
      <section className="py-20 md:py-28 lg:py-36">
        <Image logos={partnersData} />
      </section>
      <section>
        <div className="align-elements mb-14 text-center">
          <h2 className="mb-5 text-[40px] font-semibold md:mb-6 lg:mb-7">
            Isitish tizimingiz uchun eng yaxshi tanlov
          </h2>
          <p className="text-[#898989]">
            Sochiq relslari, gidro kollektor va gidro strelkalar uchun
            o‘rnatish, sozlash va texnik xizmat ko‘rsatamiz. Tejamkor va qulay
            isitish tizimi yaratishda bizga ishoning.
          </p>
        </div>

        <div className="mb-9 flex flex-wrap items-start justify-center gap-4">
          <NavLink
            className={({ isActive }) =>
              `border-b-4 border-b-transparent pb-2 text-[20px] font-semibold ${isActive ? "border-b-hoverIcon text-hoverIcon" : ""}`
            }
            href=""
          >
            Sochiq relslar
          </NavLink>
          <NavLink
            className="text-[20px] font-semibold"
            // className={({ isActive }) =>
            //   `border-b-4 border-b-transparent pb-2 text-[20px] font-semibold ${isActive ? "border-b-hoverIcon text-hoverIcon" : ""}`
            // }
            href="#"
          >
            Gidro kollektorlar
          </NavLink>
          <NavLink
            className="text-[20px] font-semibold"
            // className={({ isActive }) =>
            //   `border-b-4 border-b-transparent pb-2 text-[20px] font-semibold ${isActive ? "border-b-hoverIcon text-hoverIcon" : ""}`
            // }
            href="#"
          >
            Gidro strelkalar
          </NavLink>
        </div>
      </section>
      <section className="pb-[140px]">
        <div className="flex flex-wrap justify-center">
          {productsData &&
            productsData?.rows.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
        </div>
        <a
          href="#"
          className="mx-auto mt-14 flex w-[219px] items-center justify-between border-[2px] border-black px-4 py-5"
        >
          <span> Barcha Mahsulotlar</span>
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17 17 7m0 0H7m10 0v10"
              stroke="#121212"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>
      <section className="pb-[200px] md:pb-[140px]">
        <h2 className="mb-7 text-center text-[40px] font-semibold">
          Isitish Tizimingiz uchun Professional Xizmatlar
        </h2>
        <p className="mx-auto mb-10 max-w-[995px] text-center">
          Sochiq relslari, gidro kollektor va gidro strelkalar uchun o‘rnatish,
          sozlash va texnik xizmat ko‘rsatamiz. Tejamkor va qulay isitish tizimi
          yaratishda bizga ishoning.
        </p>
        <div className="relative md:flex md:flex-col lg:flex-row">
          <div className="relative h-[586px] w-full bg-[#001475] lg:w-[50%]">
            <img
              className="absolute top-0 md:bottom-0 md:left-0"
              src="/images/png/99.png"
              alt=""
            />
            <div className="absolute left-5 top-[100px] flex flex-col gap-8">
              <span className="text-borderColor">
                Sochiq relslari o'rnatish va sozlash
              </span>
              <h4 className="text-[36px] font-semibold text-white">
                Gidro kollektorlarni o'rnatish
              </h4>
              <span className="text-borderColor">
                Gidro strelkalarni montaj qilish
              </span>
              <span className="text-borderColor">
                Isitish tizimini loyihalash
              </span>
              <span className="text-borderColor">
                Uskunalarni ta'mirlash va texnik xizmat ko'rsatish
              </span>
              <span className="text-borderColor">
                Energiya tejamkor yechimlar bo'yicha maslahatlar
              </span>
            </div>
            <div className="f-full absolute bottom-[-100px] left-1/2 z-10 w-[280px] -translate-x-1/2 overflow-hidden md:hidden">
              <img
                className="object-cover lg:h-[586px]"
                src="/images/png/img123.png"
                alt=""
              />
            </div>
          </div>
          <div className="hidden md:block md:w-full lg:w-[50%]">
            <img
              className="w-full md:h-[586px]"
              src="/images/png/img123.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="align-elements pb-[100px] lg:pb-[140px]">
        <div className="mb-[80px] flex flex-col items-center">
          <h2 className="mb-7 text-center text-[40px] font-semibold">
            {chooseTitle}
          </h2>
          <p className="max-w-[947px] px-3 text-center text-[16px] leading-[1.5] text-[#898989] md:px-0">
            {chooseDesc}
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-10">
            {" "}
            <div className="flex items-center gap-6">
              <img
                src={benefist1?.photo}
                crossOrigin="anonymous"
                alt="yuqori sifatni anglatuvchi icon"
              />
              <p className="text-[#898989]">
                <b className="text-black">{benefist1?.title}</b> -
                {benefist1?.desc}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <img
                crossOrigin="anonymous"
                src={benefist2?.photo}
                alt="zamonaviy design anglatuvchi icon"
              />
              <p className="text-[#898989]">
                <b className="text-black">{benefist2?.title}</b> -
                {benefist2?.desc}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <img
                crossOrigin="anonymous"
                src={benefist3?.photo}
                alt="energiya tejamkorligi anglatuvchi icon"
              />
              <p className="text-[#898989]">
                <b className="text-black">{benefist3?.title}</b> -
                {benefist3?.desc}
              </p>
            </div>
          </div>
          <div className="md:mx-auto">
            <img src="/images/png/reels.png" alt="sochiq reels" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-row-reverse items-center gap-6">
              <img
                crossOrigin="anonymous"
                src={benefist4?.photo}
                alt="tez va ishonchli yetkazib berishni anglatuvchi icon"
              />
              <p className="text-right text-[#898989]">
                <b className="text-black"> {benefist4?.title}</b>-{" "}
                {benefist4?.desc}
              </p>
            </div>
            <div className="flex flex-row-reverse items-center gap-6">
              <img
                crossOrigin="anonymous"
                src={benefist5?.photo}
                alt="kafolatli qollab quvvatlash anglatuvchi icon"
              />
              <p className="text-right text-[#898989]">
                <b className="text-black"> {benefist5?.title}</b>-{" "}
                {benefist5?.desc}
              </p>
            </div>
            <div className="flex flex-row-reverse items-center gap-6">
              <img
                crossOrigin="anonymous"
                src={benefist6?.photo}
                alt="mijozlarga individual yondashuv anglatuvchi icon"
              />
              <p className="text-right text-[#898989]">
                <b className="text-black"> {benefist6?.title}</b> –{" "}
                {benefist6?.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* galery section */}
      <section className="align-elements pb-[140px]">
        <div className="mb-[80px] flex flex-col items-center">
          <h2 className="mb-5 text-center text-[40px] font-semibold">
            Bizning Mahsulotlar Galereyasi
          </h2>
          <p className="max-w-[947px] px-3 text-center text-[16px] leading-[1.5] text-[#898989] md:px-0">
            Sochiq relslari, gidro kollektor va gidro strelkalarimizning
            zamonaviy dizaynlari va sifatini ko‘ring. Galereyamizdan o‘zingizga
            mos variantni tanlang va uyingizga qulaylik qo‘shing
          </p>
        </div>

        <div>
          <div className="mb-14 flex justify-center gap-10">
            <button className="gallery-btn">Fotogalareya</button>
            <button className="gallery-btn">Videoglareya</button>
          </div>

          <div className="align-elements flex items-center gap-10">
            <button className="hidden md:block">
              <img src="/images/icons/left-arrow.svg" alt="" />
            </button>
            <div className="mx-auto w-full max-w-[1374px]">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
                gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "16px" }}
              >
                <Masonry>
                  {galleryData &&
                    galleryData.map((image) => {
                      return (
                        <img
                          key={image.id}
                          crossOrigin="anonymous"
                          src={image.photo}
                          alt="foto galery"
                        />
                      );
                    })}
                </Masonry>
              </ResponsiveMasonry>
            </div>
            <button className="hidden md:block">
              <img
                className="rotate-180"
                src="/images/icons/left-arrow.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </section>

      <section className="hidden lg:block lg:pb-[140px]">
        <div className="bg-[url('/images/png/section-bg.png')] bg-cover bg-center bg-no-repeat">
          <div className="align-elements flex justify-around py-[126px]">
            <p className="flex flex-col items-center text-white">
              <span className="text-[64px] font-semibold">5+</span>
              <span className="text-[32px]">Yillik tajriba</span>
            </p>
            <p className="flex flex-col items-center text-white">
              <span className="text-[64px] font-semibold">120+</span>
              <span className="text-[32px]">Mijozlarimiz</span>
            </p>
            <p className="flex flex-col items-center text-white">
              <span className="text-[64px] font-semibold">5+</span>
              <span className="text-[32px]">Mahsulot turlari</span>
            </p>
          </div>
        </div>
      </section>

      <section className="align-elements pb-[100px] md:pb-[120px] lg:pb-[140px]">
        <div className="flex items-center justify-between">
          <div className="mb-10">
            <h2 className="mb-7 text-center text-[40px] font-semibold md:text-left">
              So‘nggi Yangiliklar va Foydali Maqolalar
            </h2>
            <p className="max-w-[673px] text-center font-semibold text-[#595959] md:text-left">
              Sochiq relslari va isitish tizimlaridagi yangiliklar bilan
              tanishing. Foydali maslahatlar va yangiliklar bizning sahifamizda
            </p>
          </div>
          <div className="hidden lg:block">
            <button className="mr-6">
              <img src="/images/icons/left-ar2.svg" alt="" />
            </button>
            <button>
              <img src="/images/icons/rigth-ar2.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:mx-auto lg:flex-row lg:justify-between">
          {/* //card1 */}
          <div className="relative h-[408px] border-2 bg-[url('/images/png/image.png')] lg:w-[597px] xl:max-w-[597px]">
            <div className="p-[10px absolute left-[55px] top-0 w-[68px] bg-hoverIcon text-center text-white">
              <span className="block leading-5">8</span>
              <span className="leading-5">Yanvar</span>
            </div>

            <div className="hover-card">
              <h2 className="mb-3 text-center text-[20px] font-bold leading-[130%] md:text-left">
                Yangi Energiya Tejamkor Suv Isitiladigan Sochiq Relsi
              </h2>
              <p className="hidden text-[15px] leading-[130%] md:block">
                Yangi modelimiz yordamida isitish tizimingizni yanada samarali
                va energiya tejamkor qilish mumkin. Yangi sochiq relsi yuqori
                sifatli materiallardan
              </p>
            </div>
          </div>
          {/* //card2 */}
          <div className="relative h-[408px] border-2 bg-[url('/images/png/image7.png')] lg:w-[597px] xl:max-w-[597px]">
            <div className="p-[10px absolute left-[55px] top-0 w-[68px] bg-hoverIcon text-center text-white">
              <span className="block leading-5">8</span>
              <span className="leading-5">Yanvar</span>
            </div>

            <div className="hover-card">
              <h2 className="mb-3 text-center text-[20px] font-bold leading-[130%] md:text-left">
                Yangi Energiya Tejamkor Suv Isitiladigan Sochiq Relsi
              </h2>
              <p className="hidden text-[15px] leading-[130%] md:block">
                Yangi modelimiz yordamida isitish tizimingizni yanada samarali
                va energiya tejamkor qilish mumkin. Yangi sochiq relsi yuqori
                sifatli materiallardan
              </p>
            </div>
          </div>
          {/* //card3 */}
          <div className="relative h-[408px] border-2 bg-[url('/images/png/image-4.png')] lg:w-[597px] xl:max-w-[597px]">
            <div className="p-[10px absolute left-[55px] top-0 w-[68px] bg-hoverIcon text-center text-white">
              <span className="block leading-5">8</span>
              <span className="leading-5">Yanvar</span>
            </div>

            <div className="hover-card">
              <h2 className="mb-3 text-center text-[20px] font-bold leading-[130%] md:text-left">
                Yangi Energiya Tejamkor Suv Isitiladigan Sochiq Relsi
              </h2>
              <p className="hidden text-[15px] leading-[130%] md:block">
                Yangi modelimiz yordamida isitish tizimingizni yanada samarali
                va energiya tejamkor qilish mumkin. Yangi sochiq relsi yuqori
                sifatli materiallardan
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:hidden">
          <button className="mr-6">
            <img src="/images/icons/left-ar2.svg" alt="" />
          </button>
          <button>
            <img src="/images/icons/rigth-ar2.svg" alt="" />
          </button>
        </div>

        <a
          href="#"
          className="mx-auto mt-14 flex w-[219px] items-center justify-between border-[2px] border-black px-4 py-5"
        >
          <span> Barcha Mahsulotlar</span>
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17 17 7m0 0H7m10 0v10"
              stroke="#121212"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      {/* sectio contact */}
      <section className="align-elements mb-[100px] lg:hidden">
        <div className="mb-10">
          <h2 className="mb-5 text-[32px] font-semibold leading-[100%] md:text-[40px] md:leading-[120%]">
            Biz bilan bog‘laning
          </h2>
          <p>
            Savollaringiz bo‘lsa, biz bilan bog‘laning. Tez orada javob beramiz
            va yordam ko‘rsatamiz
          </p>
        </div>

        <div className="mb-10 flex flex-col gap-10">
          <div>
            <p className="mb-2 font-semibold text-[#8f8f8f]">Manzil</p>
            <strong>{address}</strong>
          </div>

          <div>
            <p className="mb-2 font-semibold text-[#8f8f8f]">Telefon</p>
            <a className="block" to={`tel: +998 ${phone1}`}>
              <strong>+998 {phone1}</strong>
            </a>
            <a className="" to={`tel: +998 ${phone2}`}>
              <strong>+998 {phone2}</strong>
            </a>
          </div>

          <div>
            <p className="mb-2 font-semibold text-[#8f8f8f]">Email</p>
            <Link to={`mailto:${email}`}>
              <strong>{email}</strong>
            </Link>
          </div>
        </div>

        <div className="bg-[#f3f3f3] px-5 py-10">
          <div className="mb-8 text-center">
            <h2 className="mb-5 text-[32px] font-semibold leading-[100%] md:text-[40px] md:leading-[120%]">
              Bepul konsultatsiya oling!
            </h2>
            <p className="mb-2 font-semibold text-[#8f8f8f]">
              Ma’lumotlaringizni qoldiring va biz sizga aloqaga chiqamiz!
            </p>
          </div>

          <form className="flex flex-col">
            <label className="mb-8 flex flex-col gap-[10px]">
              <b>Ism</b>
              <Input type="text" placeholder="Ismingizni yozing" />
            </label>
            <label className="mb-8 flex flex-col gap-[10px]">
              <b>Telefon raqam</b>
              <Input type="tel" placeholder="+998 00 000 00 00" />
            </label>

            <button className="w-full border-2 bg-hoverIcon py-5 font-semibold text-white">
              Yuborish
            </button>
          </form>
        </div>
      </section>

      <section className="relative hidden gap-[60px] pb-[240px] lg:flex">
        <div className="h-[559px] w-[948px] flex-shrink-0 bg-[url('/images/png/ambient.png')] bg-cover bg-center bg-no-repeat"></div>

        <div>
          <div className="mb-10">
            <h2 className="mb-5 font-semibold leading-[100%] md:text-[40px]">
              Biz bilan bog‘laning
            </h2>
            <p>
              Savollaringiz bo‘lsa, biz bilan bog‘laning. Tez orada javob
              beramiz va yordam ko‘rsatamiz
            </p>
          </div>

          <div className="absolute right-1 flex gap-[60px] bg-white p-6 2xl:right-[30px]">
            <div className="w-[573px] bg-[#f3f3f3] p-[60px]">
              <div className="mb-8">
                <h2 className="mb-5 whitespace-nowrap font-semibold leading-[100%] md:text-[28px]">
                  Bepul konsultatsiya oling!
                </h2>
                <p className="mb-2 font-semibold text-[#8f8f8f]">
                  Ma’lumotlaringizni qoldiring va biz sizga aloqaga chiqamiz!
                </p>
              </div>
              <form className="flex flex-col">
                <label className="mb-8 flex flex-col gap-[10px]">
                  <b>Ism</b>
                  <Input type="text" placeholder="Ismingizni yozing" />
                </label>
                <label className="mb-8 flex flex-col gap-[10px]">
                  <b>Telefon raqam</b>
                  <Input type="tel" placeholder="+998 00 000 00 00" />
                </label>

                <button className="w-full border-2 bg-hoverIcon py-5 font-semibold text-white">
                  Yuborish
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-[51px]">
              <div>
                <p className="mb-2 font-semibold text-[#8f8f8f]">Manzil</p>
                <strong>{address}</strong>
              </div>

              <div>
                <p className="mb-2 font-semibold text-[#8f8f8f]">Telefon</p>
                <Link to={`tel: +998 ${phone1}`} className="block">
                  <strong>+998 90 000 00 00</strong>
                </Link>
                <Link className="" to={`tel: +998 ${phone2}`}>
                  <strong>+998 {phone2}</strong>
                </Link>
              </div>

              <div>
                <p className="mb-2 font-semibold text-[#8f8f8f]">Email</p>
                <Link to={`mailto:${email}`}>
                  <strong>{email}</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
