import Image from "next/image";

const programs = [
  "茶道",
  "華道",
  "香道",
  "書道",
  "能・狂言",
  "落語",
  "講談",
  "浪曲",
  "坐禅",
  "ヨガ",
  "瞑想",
  "陶芸",
  "鎌倉彫",
  "講座・勉強会",
  "交流",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f6ec] text-stone-900">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
        <Image
          src="/images/ryuinan-hidden-approach.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 saturate-[0.78]"
        />
        <div className="absolute inset-0 bg-[#f7f6ec]/48" aria-hidden="true" />
        <div className="absolute inset-0 dragon-mist mix-blend-soft-light" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_36%,#f7f6ec_82%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 washi-texture opacity-80" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-1/2 h-[58vw] max-h-[640px] w-[58vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b8b06b]/25 opacity-55 blur-[1px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl text-center animate-breathe-in">
          <p className="mb-7 text-xs tracking-[0.72em] text-stone-500 sm:text-sm">
            RYUINAN
          </p>
          <h1 className="font-serif text-6xl font-light tracking-[0.18em] text-stone-950 sm:text-7xl md:text-8xl">
            龍隠庵
          </h1>
          <p className="mx-auto mt-12 max-w-2xl font-serif text-xl leading-[2.15] text-stone-600 sm:text-2xl">
            静けさが息づく場。
          </p>
        </div>
      </section>

      <section className="relative px-6 py-28 sm:py-36 lg:py-44">
        <div className="absolute inset-0 moss-wash" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="animate-fade-up">
            <p className="text-xs tracking-[0.45em] text-stone-400">
              ABOUT
            </p>
            <h2 className="mt-5 font-serif text-3xl font-light leading-relaxed tracking-[0.14em] text-stone-900 sm:text-4xl">
              龍隠庵について
            </h2>
          </div>

          <div className="space-y-14 font-serif text-stone-700">
            <article className="animate-fade-up space-y-6">
              <h3 className="text-xl font-light tracking-[0.16em] text-stone-900">
                十五世紀から続く小さな庵
              </h3>
              <p className="leading-[2.35]">
                龍隠庵の歴史は、十五世紀初頭に遡ります。当時の円覚寺任持であった宝印省菊禅師が、先師である大雅省音禅師の塔所として、長尾忠政を開基に「法珠院」を創建しました。その折、自らの寮舎として境内に建立した「龍隠軒」。それが、当庵のはじまりと伝えられています。
              </p>
              <p className="leading-[2.35]">
                その後、龍隠軒は独立した一寺となり、円覚寺の塔頭に連なりました。十六世紀初頭には、長尾氏ゆかりの幸春尼の外護によって再興を遂げます。江戸時代から十九世紀半ばにかけては移転と衰微を重ね、明治期以降には住職不在となり、廃寺同然の窮状に至った時期もありました。
              </p>
            </article>

            <article className="animate-fade-up space-y-6">
              <h3 className="text-xl font-light tracking-[0.16em] text-stone-900">
                文化人が集った静かな土地
              </h3>
              <p className="leading-[2.35]">
                一九九〇年代後半、現住職・太田周文和尚が復興の志を抱いて入寺し、五年の歳月をかけて現在の地へ移転しました。この境内地には、かつて日本勧業銀行総裁を務めた石井光雄氏（一八八一-一九六六）の居宅がありました。
              </p>
              <p className="leading-[2.35]">
                希少典籍を収めた「積翠軒文庫」、そして茶室「楽々庵」。この場所は、多くの文化人、学者、財界人が集う、静かな交流の場でもありました。石井氏没後も、仏教学者の古田紹欽氏、実業家の亀井要氏、茶人の藤澤寂仙氏らがこの地に住まわれました。龍隠庵の復興は、寺院としての再建であると同時に、この土地に宿っていた文化の気配を、もう一度ひらく営みでもあります。
              </p>
            </article>

            <article className="animate-fade-up space-y-6">
              <h3 className="text-xl font-light tracking-[0.16em] text-stone-900">
                復興への願い
              </h3>
              <p className="leading-[2.35]">
                平成十二年（二〇〇〇年）より、裏山の伐採や参道階段の造作など、基礎となる環境づくりが少しずつ進められてきました。東日本大震災、コロナ禍、そして長い時間の中で、本格的な建造物の再建はなお道半ばにあります。
              </p>
              <p className="leading-[2.35]">
                まずは文化施設としての「楽々庵」と「積翠軒文庫遺構」の修復・再建へ。ゆくゆくは大雅省音禅師を祀る開山堂、御本尊を祀る本堂の再興を見据えながら、伝統文化、芸能、禅文化、工芸、学びの場を育てていくこと。多様な文化活動を通じて、人々が交流し、親善を深める一助となること。それが、龍隠庵の願いです。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-28 sm:pb-36">
        <div className="absolute inset-x-0 top-10 h-64 bg-[linear-gradient(180deg,transparent,rgb(226_218_145_/_0.1),transparent)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <figure className="relative h-[360px] overflow-hidden sm:h-[500px]">
              <Image
                src="/images/ryuinan-flower-water.jpeg"
                alt="水面に浮かぶ淡い花のしつらえ"
                fill
                sizes="(min-width: 1024px) 704px, 100vw"
                className="object-cover opacity-92 saturate-[0.82]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#f7f6ec]/10 via-transparent to-[#f7f6ec]/20"
                aria-hidden="true"
              />
            </figure>

            <figure className="relative h-[360px] overflow-hidden sm:h-[500px]">
              <Image
                src="/images/ryuinan-calligraphy.jpeg"
                alt="龍隠起雲と記された書"
                fill
                sizes="(min-width: 1024px) 424px, 100vw"
                className="object-cover object-center opacity-90 saturate-[0.72]"
              />
              <div
                className="absolute inset-0 bg-[#f7f6ec]/10"
                aria-hidden="true"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200/70 bg-white/42 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs tracking-[0.45em] text-stone-400">
              VISION
            </p>
            <h2 className="mt-5 font-serif text-3xl font-light tracking-[0.14em] text-stone-900 sm:text-4xl">
              今後の構想
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px bg-stone-200/70 sm:grid-cols-3 lg:grid-cols-5">
            {programs.map((program) => (
              <div
                key={program}
                className="group flex min-h-36 items-center justify-center bg-[#fbfaf6] px-5 py-10 transition duration-500 hover:bg-white"
              >
                <p className="font-serif text-lg font-light tracking-[0.18em] text-stone-700 transition duration-500 group-hover:text-stone-950">
                  {program}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-32 sm:py-44">
        <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-stone-300/70 to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center animate-fade-up">
          <p className="text-xs tracking-[0.45em] text-stone-400">
            PHILOSOPHY
          </p>
          <h2 className="mt-7 font-serif text-4xl font-light tracking-[0.2em] text-stone-950 sm:text-5xl">
            怨親平等
          </h2>
          <p className="mx-auto mt-10 max-w-2xl font-serif text-lg leading-[2.35] text-stone-600">
            親しいものも、遠いものも、敵も味方も、ひとしく弔い、祈ること。円覚寺は、鎌倉幕府第八代執権・北条時宗により、元寇による戦没者を敵味方の区別なく弔う「怨親平等」の理念のもと、弘安五年（一二八二年）に創建されました。その精神を受け継ぎ、龍隠庵は分け隔ての心をほどく文化と祈りの場を目指します。
          </p>
        </div>
      </section>

      <footer className="border-t border-stone-200/80 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs tracking-[0.28em] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>龍隠庵</p>
          <p>RYUINAN RESTORATION</p>
        </div>
      </footer>
    </main>
  );
}
