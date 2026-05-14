import Image from "next/image";

const contactEmail = "ryuinan1@gmail.com";
const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
  "龍隠庵復興についての問い合わせ",
)}`;

const programs = [
  "茶道",
  "華道",
  "香道",
  "書道",
  "能・狂言",
  "坐禅",
  "鎌倉彫",
  "学び",
  "交流",
];

const histories = [
  {
    era: "応永二十六年（一四一九）頃",
    text: "円覚寺百三十七世・芳隠省菊禅師が、長尾忠政の外護を得て、先師・百二世大雅省音禅師の塔所「龍隠軒」を開創。",
  },
  {
    era: "応永三十三年（一四二六）",
    text: "法珠院の衰退にともない独立し、円覚寺塔頭列に加わる。「龍隠庵」と改称。",
  },
  {
    era: "永正六年（一五〇九）",
    text: "長尾顕忠の妻・幸春尼の外護により再興。以後、火災や移転を経ながら法灯をつなぐ。",
  },
  {
    era: "近代から平成へ",
    text: "石井光雄氏、藤沢寂仙氏、亀井要氏、古田紹欽博士らがこの地に縁を結び、平成十一年（一九九九）に現在地へ移転・復興。",
  },
];

const relatedPeople = [
  {
    name: "大雅省音禅師",
    role: "円覚寺百二世",
    connection: "龍隠庵は、大雅省音禅師の塔所として開創された。",
  },
  {
    name: "芳隠省菊禅師",
    role: "円覚寺百三十七世",
    connection: "先師・大雅省音禅師の法を継ぎ、龍隠軒を開創した。",
  },
  {
    name: "長尾忠政",
    role: "開基の檀越",
    connection: "山内上杉家の家宰として関東管領を支え、禅門への帰依のもと建立を外護した。",
  },
  {
    name: "長尾顕忠・幸春尼",
    role: "再興の外護者",
    connection: "永正六年（一五〇九）、幸春尼の外護により龍隠庵は再興を遂げた。",
  },
  {
    name: "石井光雄氏",
    role: "銀行家",
    connection: "日本勧業銀行総裁を務め、晩年に現在の龍隠庵の地に居を構えた。",
  },
  {
    name: "鈴木大拙",
    role: "仏教学者",
    connection: "禅を世界に紹介した思想家。龍隠庵の地にも学びの縁を結んだ。",
  },
  {
    name: "古田紹欽博士",
    role: "仏教学者",
    connection: "鈴木大拙に師事し、禅と茶の精神を探究。晩年をこの庵で過ごした。",
  },
  {
    name: "藤沢寂仙氏",
    role: "茶道宗匠",
    connection: "楽々庵に住まい、茶の湯とともにこの場所の精神を体現した。",
  },
  {
    name: "亀井要氏",
    role: "実業家",
    connection: "三省堂社長として出版文化を支え、この地に身を置いた。",
  },
  {
    name: "太田周文和尚",
    role: "現住職",
    connection: "平成十一年（一九九九）に現在地へ移転・復興し、龍隠庵の再興を進めている。",
  },
];

const supportPathways = [
  {
    title: "復興支援",
    text: "楽々庵、積翠軒文庫遺構、参道や境内環境の整備に関するご支援の相談窓口。",
  },
  {
    title: "場づくり",
    text: "日々の作務を重ねながら、茶の湯、書、芸能、坐禅、工芸などが静かに息づく場を整えていきます。",
  },
  {
    title: "見学・取材",
    text: "復興の歩み、由緒、写真・記録、文化施設としての構想に関する問い合わせ窓口。",
  },
];

const contactTopics = [
  "復興支援・寄進のご相談",
  "楽々庵・積翠軒文庫遺構の修復について",
  "場づくりに関するご相談",
  "見学・取材のお問い合わせ",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f6ec] text-stone-900">
      <section id="top" className="relative flex min-h-screen items-center justify-center px-6 py-24">
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
        <nav className="absolute inset-x-6 top-6 z-10 mx-auto flex max-w-6xl items-center justify-between text-[11px] tracking-[0.28em] text-stone-500 sm:text-xs">
          <a href="#top" className="transition hover:text-stone-900">
            龍隠庵
          </a>
          <div className="flex items-center gap-5 sm:gap-8">
            <a href="#about" className="transition hover:text-stone-900">
              沿革
            </a>
            <a href="#vision" className="transition hover:text-stone-900">
              構想
            </a>
            <a href="#people" className="transition hover:text-stone-900">
              人物
            </a>
            <a href="#contact" className="transition hover:text-stone-900">
              問合
            </a>
          </div>
        </nav>
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
          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="border border-stone-400/50 px-7 py-3 text-xs tracking-[0.32em] text-stone-700 transition hover:border-stone-700 hover:bg-white/35 hover:text-stone-950"
            >
              復興へのお問い合わせ
            </a>
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

      <section id="about" className="relative px-6 py-28 sm:py-36 lg:py-44">
        <div className="absolute inset-0 moss-wash" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.42fr_1.58fr] lg:gap-16">
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
                龍隠庵の歴史は、室町時代初頭の応永二十六年（一四一九）頃に遡ります。円覚寺百三十七世・芳隠省菊禅師が、長尾忠政の外護を得て、先師である百二世・大雅省音禅師の塔所として「龍隠軒」を開創しました。それが、当庵のはじまりと伝えられています。
              </p>
              <p className="leading-[2.35]">
                応永三十三年（一四二六）、龍隠軒は独立した一寺となり、円覚寺の塔頭列に加わって「龍隠庵」と改称しました。永正六年（一五〇九）には、長尾顕忠の妻・幸春尼の外護によって再興を遂げます。以後、火災や移転、衰微を重ねながらも、その法灯は静かにつながれてきました。
              </p>
            </article>

            <article className="animate-fade-up space-y-6">
              <h3 className="text-xl font-light tracking-[0.16em] text-stone-900">
                文化人が集った静かな土地
              </h3>
              <p className="leading-[2.35]">
                平成十一年（一九九九）、現住職・太田周文和尚が復興の志を抱いて現在地へ移転し、住職に就任しました。この境内地には、かつて日本勧業銀行総裁を務めた石井光雄氏（一八八一-一九六六）の居宅がありました。
              </p>
              <p className="leading-[2.35]">
                希少典籍を収めた「積翠軒文庫」、そして茶室「楽々庵」。この場所は、多くの文化人、学者、財界人が集う、静かな交流の場でもありました。石井氏没後も、禅を世界に紹介した鈴木大拙がこの地で学び、仏教学者の古田紹欽博士は鈴木大拙に師事して禅と茶の精神を探究し、晩年をこの庵で過ごしました。龍隠庵の復興は、寺院としての再建であると同時に、この土地に宿っていた文化の気配を、もう一度ひらく営みでもあります。
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
                かの鈴木大拙が学んだ「積翠軒文庫遺構」と、茶の湯の精神が交わる「楽々庵」の修復・再建へ。ゆくゆくは大雅省音禅師を祀る開山堂、御本尊を祀る本堂の再興を見据えながら、まずは日々の作務を重ねること。その営みの縁の中で、伝統文化、芸能、禅文化、工芸、学びの場が静かに育ち、人々が交流し、親善を深める一助となること。それが、龍隠庵の願いです。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 sm:pb-36">
        <div className="mx-auto max-w-6xl border-y border-stone-200/80 py-16">
          <div className="grid gap-12 lg:grid-cols-[0.42fr_1.58fr] lg:gap-16">
            <div className="animate-fade-up">
              <p className="text-xs tracking-[0.45em] text-stone-400">
                HISTORY
              </p>
              <h2 className="mt-5 font-serif text-3xl font-light leading-relaxed tracking-[0.14em] text-stone-900">
                由緒の記憶
              </h2>
            </div>
            <div className="divide-y divide-stone-200/80 font-serif">
              {histories.map((history) => (
                <article
                  key={history.era}
                  className="grid gap-4 py-7 first:pt-0 last:pb-0 md:grid-cols-[14rem_1fr] md:gap-12"
                >
                  <p className="text-sm leading-loose tracking-[0.1em] text-stone-500 md:whitespace-nowrap">
                    {history.era}
                  </p>
                  <p className="max-w-2xl leading-[2.1] text-stone-700">
                    {history.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="people" className="px-6 pb-28 sm:pb-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.42fr_1.58fr] lg:gap-16">
            <div className="animate-fade-up">
              <p className="text-xs tracking-[0.45em] text-stone-400">
                PEOPLE
              </p>
              <h2 className="mt-5 font-serif text-3xl font-light leading-relaxed tracking-[0.14em] text-stone-900">
                関連する人物
              </h2>
            </div>
            <div className="overflow-hidden border-y border-stone-200/80 font-serif">
              {relatedPeople.map((person, index) => (
                <article
                  key={person.name}
                  className="grid gap-4 border-b border-stone-200/70 py-6 last:border-b-0 md:grid-cols-[3rem_13rem_8rem_1fr] md:gap-8"
                >
                  <p className="text-xs leading-loose tracking-[0.2em] text-stone-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-light leading-loose tracking-[0.12em] text-stone-900">
                    {person.name}
                  </h3>
                  <p className="text-sm leading-loose tracking-[0.08em] text-stone-500">
                    {person.role}
                  </p>
                  <p className="leading-[2.05] text-stone-700">
                    {person.connection}
                  </p>
                </article>
              ))}
            </div>
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
                className="object-cover object-[center_35%] opacity-92 saturate-[0.82]"
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

      <section id="vision" className="border-y border-stone-200/70 bg-white/42 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.42fr_1.58fr] lg:gap-16">
            <div className="animate-fade-up">
            <p className="text-xs tracking-[0.45em] text-stone-400">
              VISION
            </p>
            <h2 className="mt-5 font-serif text-3xl font-light tracking-[0.14em] text-stone-900 sm:text-4xl">
              今後の構想
            </h2>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px bg-stone-200/70 sm:grid-cols-3">
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

          <div className="mt-20 grid gap-px bg-stone-200/70 lg:grid-cols-3">
            {supportPathways.map((pathway) => (
              <a
                key={pathway.title}
                href={contactHref}
                className="group bg-[#fbfaf6] px-7 py-8 transition duration-500 hover:bg-white"
              >
                <p className="font-serif text-xl font-light tracking-[0.16em] text-stone-900">
                  {pathway.title}
                </p>
                <p className="mt-5 font-serif leading-[2.05] text-stone-600">
                  {pathway.text}
                </p>
                <p className="mt-7 text-xs tracking-[0.28em] text-stone-400 transition group-hover:text-stone-700">
                  CONTACT
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-y border-stone-200/80 bg-[#fbfaf6]/70 px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.42fr_1.58fr] lg:gap-16">
          <div className="animate-fade-up">
            <p className="text-xs tracking-[0.45em] text-stone-500">
              CONTACT
            </p>
            <h2 className="mt-5 font-serif text-3xl font-light tracking-[0.14em] text-stone-950 sm:text-4xl">
              復興へのお問い合わせ
            </h2>
          </div>

          <div className="animate-fade-up font-serif text-stone-700">
            <p className="max-w-2xl leading-[2.25]">
              龍隠庵の復興、作務を中心とした場づくり、見学・取材に関するご連絡は、下記メールアドレスまでお寄せください。内容を確認のうえ、順次ご返信いたします。
            </p>
            <div className="mt-10 grid gap-px bg-stone-200/70 sm:grid-cols-2">
              {contactTopics.map((topic) => (
                <div key={topic} className="bg-[#f7f6ec] px-6 py-6">
                  <p className="text-sm leading-relaxed tracking-[0.08em] text-stone-700">
                    {topic}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={contactHref}
              className="mt-10 inline-flex border border-stone-500/60 px-7 py-4 text-sm tracking-[0.18em] text-stone-800 transition hover:border-stone-900 hover:bg-white hover:text-stone-950"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200/80 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs tracking-[0.28em] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>龍隠庵</p>
          <a href={contactHref} className="transition hover:text-stone-700">
            RYUINAN RESTORATION
          </a>
        </div>
      </footer>
    </main>
  );
}
