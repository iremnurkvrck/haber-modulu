// ─── ÖN DEĞERLENDİRME SORULARI ────────────────────────────────────────────────
export const preevalQs = [
  {
    id: "pe1",
    skill: "Hesap Tutarlılığı",
    text: "Bir haber paylaşımının daha önce o hesap tarafından yapılan diğer paylaşımlarla uyumlu olup olmadığını görmek istiyorsunuz. Ne yaparsınız?",
    opts: [
      "Hesabın profilini açıp önceki gönderilerine bakarım.",
      "Haberin yorumlarını okurum.",
      "Paylaşımın kaç kez beğenildiğini incelerim.",
      "Haberi farklı bir arkadaşa gönderirim.",
    ],
    correct: 0,
    fbok: "Doğru! Hesabın profilini açıp önceki paylaşımlarına bakmak, içerik tutarlılığını değerlendirmenin temel yoludur.",
    fberr:
      "Doğru yanıt A'dır. Hesap profilindeki geçmiş paylaşımlar, tutarlılığı anlamak için incelenmelidir.",
  },
  {
    id: "pe2",
    skill: "Tarayıcı Kullanımı",
    text: 'Bir haberde geçen "iklim değişikliği raporu" ifadesi hakkında daha fazla bilgi edinmek istiyorsunuz. Nasıl hareket edersiniz?',
    opts: [
      "İnternet tarayıcısında ilgili ifadeyi aratırım.",
      "Haberin devamındaki bilgileri okumakla yetinirim.",
      "Bu konuyla ilgili sosyal medya yorumlarını incelerim.",
      "Haberi paylaşan kişiye mesaj gönderip ne demek istediğini sorarım.",
    ],
    correct: 0,
    fbok: "Doğru! Tarayıcıda arama yapmak, konu hakkında bağımsız ve farklı kaynaklara ulaşmanızı sağlar.",
    fberr:
      "Doğru yanıt A'dır. Bir konu hakkında daha fazla bilgi edinmenin en etkili yolu ilgili ifadeyi arama motorunda araştırmaktır.",
  },
  {
    id: "pe3",
    skill: "Görsel Becerisi",
    text: "Telefonunuzdaki bir fotoğrafı kaydetmek veya paylaşmak istediğinizde aşağıdakilerden hangisini yaparsınız?",
    opts: [
      "Fotoğrafa dokunur veya uzun basarak seçenekleri açarım.",
      "Fotoğrafı büyütüp küçülterek paylaşma seçeneğini ararım.",
      "Fotoğrafın altındaki yorumları incelerim.",
      "Fotoğrafın ekran görüntüsünü alırım.",
    ],
    correct: 0,
    fbok: "Doğru! Görsele dokunmak veya uzun basmak, telefonda seçenekler menüsüne erişmenin yaygın yoludur.",
    fberr:
      "Doğru yanıt A'dır. Fotoğrafa dokunarak veya uzun basarak kaydetme, paylaşma gibi seçeneklere ulaşabilirsiniz.",
  },
  {
    id: "pe4",
    skill: "Haber İçeriğini Tanıma",
    text: "Aşağıdaki paylaşımlardan hangisi haber niteliği taşımaktadır?",
    opts: [
      "Meteoroloji Genel Müdürlüğü yarın için kuvvetli yağış uyarısı yaptı.",
      "Bu hafta sonu yağmur yağacakmış, şemsiyenizi unutmayın.",
      "Bugün işe giderken hava çok kötüydü.",
      "Yağmurlu havalarda kahve içmeyi çok seviyorum.",
    ],
    correct: 0,
    fbok: "Doğru! Resmi bir kurum tarafından yapılan ve kamuoyunu bilgilendiren açıklamalar haber niteliği taşır.",
    fberr:
      "Doğru yanıt A'dır. Resmi bir kurumun açıklamasına dayanan ve kamusal önemi olan bilgi haber niteliği taşır.",
  },
];

// ─── ÖN TEST SORULARI ─────────────────────────────────────────────────────────
export const pretestQs = [
  {
    id: "pt1",
    hedef: "Hedef 1 – Yayıncı Analizi ve Değerlendirmesi",
    senaryoGorsel: "./images/ontest1.png",
    gorev:
      "Her hesap için güvenilir olup olmadığına karar verin ve kararınızı en az 2 somut kanıta dayandırarak açıklayın.",
  },
  {
    id: "pt2",
    hedef: "Hedef 2 – Haberde Sunulan Kaynağı Doğrulama",
    senaryoGorsel: "./images/ontest2.png",
    gorev:
      "Bu haberde kaynak var mı? Varsa yeterli mi? Gerekçenizi yazın ve bu haberi doğrulamak için ne yapardınız?",
  },
  {
    id: "pt3",
    hedef: "Hedef 3 – Başlık ile İçerik Arasındaki Uyumu Analiz Etme",
    senaryoGorsel: "./images/ontest3.png",
    gorev:
      "Bu haberi nasıl değerlendirirsiniz? Başlık ile içerik arasındaki farkı ve duygusal dil kullanımını açıklayın.",
  },
  {
    id: "pt4",
    hedef: "Hedef 4 – Haberdeki Görseli Sorgulama",
    senaryoGorsel: "./images/ontest4.png",

    gorev:
      "Bu görseli ters görsel arama yöntemiyle nasıl inceleyeceğinizi adım adım açıklayın ve şu soruları yanıtlayın: Bu görsel daha önce nerede kullanılmış olabilir? Orijinal bağlamını nasıl tespit edersiniz?",
  },
  {
    id: "pt5",
    hedef: "Hedef 5 – Haberi Bağımsız Kaynaklarla Karşılaştırma",
    senaryoGorsel: "./images/ontest5.png",
    gorev:
      "Bu haber başlığını en az iki farklı kaynakta aratın ve bulduğunuz sonuçları karşılaştırın. Bu haberi doğrulayabildiniz mi? Hangi kaynaklara ulaştınız ve sonuçlar birbiriyle tutarlı mıydı? Açıklayın.",
  },
];

// ─── SON TEST SORULARI ─────────────────────────────────────────────────────────
export const posttestQs = [
  {
    id: "post1",
    hedef: "Hedef 1 – Yayıncı Analizi ve Değerlendirmesi",
    senaryo: "Önünüzde aşağıdaki üç sosyal medya hesabı var:",
    senaryoGorsel: "./images/sontest1.png",
    gorev:
      "Her hesap için güvenilir olup olmadığına karar verin ve kararınızı en az 2 somut kanıta dayandırarak açıklayın.",
  },
  {
    id: "post2",
    hedef: "Hedef 2 – Haberde Sunulan Kaynağı Doğrulama",
    senaryo: '"Araştırmaya göre 1 milyardan fazla insan sağır olabilir"',
    senaryoGorsel: "./images/sontest2.png",
    link: "https://www.ensonhaber.com/arastirmaya-gore-1-milyardan-fazla-insan-sagir-olabilir-h11071316",
    gorev:
      "Bu haberde kaynak var mı? Varsa yeterli mi? Gerekçenizi sözel olarak belirtiniz ve bu haberi doğrulamak için hangi adımları atarsınız?",
  },
  {
    id: "post3",
    hedef: "Hedef 3 – Başlık ile İçerik Arasındaki Uyumu Analiz Etme",
    senaryo:
      "Tükettiğiniz anda kalın bağırsağı bitiriyor! Bu 4 besin iç organların sessiz katili",
    senaryoGorsel: "./images/sontest3.png",
    link: "https://www.sabah.com.tr/roza/galeri/saglik/tukettiginiz-anda-kalin-bagirsagi-bitiriyor-bu-4-besin-ic-organlarin-sessiz-katili",
    gorev:
      "Bu haberi nasıl değerlendirirsiniz? Başlık ile içerik arasındaki farkı ve duygusal dil kullanımını örnekleriyle açıklayın.",
  },
  {
    id: "post4",
    hedef: "Hedef 4 – Haberdeki Görseli Sorgulama",
    senaryoGorsel: "./images/sontest4.png",

    senaryo:
      "Adana yine erken kutladı! Şehirde 2024 yılbaşı dekorasyonları kuruldu, tüm dünyadan önce yeni yıla geçtiler!",
    link: "https://www.ensonhaber.com/adanada-2023-yerine-2024-yili-kutlandi-h916317",
    gorev:
      "Haberde yer alan görseli ters görsel arama yöntemiyle nasıl sorgulayacağınızı adım adım açıklayın. Aramanın sonucunda neye dikkat edersiniz? Görselin gerçekliğini nasıl değerlendirirsiniz?",
  },
  {
    id: "post5",
    hedef: "Hedef 5 – Haberi Bağımsız Kaynaklarla Karşılaştırma",
    senaryo:
      'Sosyal medyada şu başlıklı bir haber hızla yayılıyor:\n\n"Deprem uzmanı Prof. Dr. Cenk Yaltırak 6 Şubat depreminin ardından açıkladı: "İstanbul da 2026 ya kadar deprem olacak! Paylaşın, herkes hazırlıklı olsun!"',
    senaryoGorsel: "./images/sontest5.png",
    gorev:
      "Bu haber başlığını en az iki farklı kaynakta aratın ve sonuçları karşılaştırın. Bu haberi doğrulayabildiniz mi? Hangi kaynaklara ulaştınız? Sonuçlar birbiriyle tutarlı mıydı? Gerekçeli olarak açıklayın.",
  },
];

// ─── ÖĞRETİM ADIM VERİLERİ ───────────────────────────────────────────────────
export const learnSteps = [
  {
    id: 1,
    label: "Adım 1",
    title: "Kaynağı Tanıyın: Bu Hesabın Arkasında Kim Var?",
    duration: "~10 dk",
    subskills: [
      "Hesabın ne kadar süredir aktif olduğunu inceler",
      "Takipçi ve etkileşim düzeyini değerlendirir",
      "Profil bilgilerini kontrol eder",
      "Geçmiş paylaşımları gözden geçirir",
      "Doğrulanmış hesapları ayırt eder",
    ],
    info: "Sosyal medyada karşımıza çıkan her bilgi doğru olmayabilir. Bu nedenle ilk adım, bilgiyi paylaşan hesabı tanımaktır.\n\nDikkat etmeniz gereken noktalar:\n\n📅 Hesap Ne Zaman Açılmış?\nYeni açılmış hesaplar bazen yanıltıcı içerikler yaymak için kullanılabilir.\n\n✔️ Doğrulama Rozeti Var mı?\nResmi kurumlar, gazeteciler ve tanınmış kişiler genellikle doğrulanmış hesap kullanır.\n\n👤 Profil Bilgileri Güven Veriyor mu?\nProfil fotoğrafı, biyografi ve kullanıcı adı birbiriyle uyumlu olmalıdır.\n\n📰 Daha Önce Neler Paylaşmış?\nHesabın geçmiş paylaşımlarına göz atın. Sürekli aynı konuda ve tutarlı içerikler paylaşması güvenilirlik açısından önemlidir.",
    example:
      "Bir haberi gördüğünüzde hemen paylaşır mıydınız?\n\nHesap A:\n• 3 hafta önce açılmış\n• Profil fotoğrafı belirsiz\n• Sadece sansasyonel haberler paylaşıyor\n\nHesap B:\n• 8 yıldır aktif\n• Doğrulanmış hesap\n• Resmi bir kuruma bağlı\n• Düzenli ve tutarlı içerikler paylaşıyor\n\nSizce hangisine daha çok güvenirsiniz? Kararınızı hangi göstergelere dayanarak verdiğinizi düşünün.",
    image: "./images/uygulama1.png",
    chips: [],
  },
  {
    id: 2,
    label: "Adım 2",
    title: "Haberde Sunulan Kaynağı Doğrulama",
    duration: "~10 dk",
    subskills: [
      "Kaynak belirtilip belirtilmediğini tespit eder",
      "Muğlak ifadeleri tanır",
      "Bağlantıya tıklayarak kontrol eder",
      "Kaynak-haber uyumunu değerlendirir",
      "Şüpheli kaynakları fark eder",
    ],
    info: 'Güvenilir kaynak: "Türkiye İstatistik Kurumu\'nun Mart 2024 raporuna göre…"\nMuğlak kaynak: "Uzmanlar açıkladı…", "Araştırmacılara göre…"\n\nMuğlak ifadeler yetersiz kaynaklara işaret eder. Bağlantıya tıklayın: Kaynak gerçekten var mı? İddia ile uyumlu mu?',
    example:
      '"Uzmanlar açıkladı: Günde 1 bardak bu içeceği içenler kanserden korunuyor." – Bu haberde hangi uzmanlar? Nerede çalışıyorlar? Araştırma nerede yayımlandı? Bunların yanıtsız kalması haberi şüpheli yapar.\n\nAdım adım: Bağlantıya tıkla → İçeriği oku → İddia ile karşılaştır.',
    image: "./images/uygulama2.png",

    chips: [],
  },
  {
    id: 3,
    label: "Adım 3",
    title: "Başlık ile İçerik Arasındaki Uyumu Analiz Et",
    duration: "~10 dk",
    subskills: [
      "Başlık-içerik anlam uyumunu karşılaştırır",
      "Abartıyı değerlendirir",
      "Duygusal tetikleyici kelimeleri tespit eder",
      "Tek taraflılığı fark eder",
    ],
    info: "Manipülatif başlıklarda sıkça kullanılan tetikleyici ifadelere dikkat edin. Bu kelimeler okuyucuda acele ve panik duygusu yaratarak eleştirel düşünmeyi engeller.",
    example:
      '"FLAŞ! Türkiye\'de içme suları tehlikeli seviyelerde kirlenmiş, milyonlarca kişi risk altında!" – Haberin içeriğinde ise yalnızca "bazı şehirlerde su kalitesinin denetleneceği" yazıyor.\n\n"FLAŞ", büyük harf ve "milyonlarca kişi risk altında" okuyucuda panik yaratmak için kullanılmıştır. ',
    image: "./images/uygulama3.png",
    chips: [
      "FLAŞ",
      "ACİL",
      "ŞOK",
      "HEMEN PAYLAŞ",
      "İnanılmaz",
      "Herkes Biliyor",
      "Sakın Kaçırmayın",
    ],
  },
  {
    id: 4,
    label: "Adım 4",
    title: "Haberdeki Görseli Sorgulama",
    duration: "~20 dk",
    subskills: [
      "Ters görsel arama seçeneğine ulaşır",
      "Google Görseller ile ters arama yapar",
      "Manipülasyonları fark eder",
      "Görsel-içerik uyumunu değerlendirir",
    ],
    info: 'Ters görsel arama nedir? Bir görselin internette daha önce nerede kullanıldığını bulmanızı sağlar.\n\nNasıl yapılır?\n① Görsele uzun basın\n② "Görseli ara" veya "Google\'da ara" seçeneğini seçin\n③ Sonuçları inceleyin: Görsel başka bir bağlamdan mı alınmış?',
    example:
      "WhatsApp'ta paylaşılan bir deprem haberindeki görsel üzerinde ters görsel arama yapıldığında aynı görselin 5 yıl önce başka bir ülkedeki farklı bir felakette kullanıldığı ortaya çıkabilir. Görsel bağlamı tamamen farklı – bu dezenformasyonun en yaygın yöntemidir.",
    image: "./images/uygulama4.png",

    chips: [],
  },
  {
    id: 5,
    label: "Adım 5",
    title: "Haberi Bağımsız Kaynaklarla Karşılaştırma",
    duration: "~10 dk",
    subskills: [
      "Anahtar kelimelerle arama yapar",
      "Kaynak çeşitliliğini değerlendirir",
      "Yalnızca belirli sitelerde çıkan haberleri fark eder",
      "Birden fazla kaynaktan bilgi karşılaştırır",
    ],
    info: "Gerçek bir haber genellikle birden fazla bağımsız kaynakta yer alır.\n\n• Haber yalnızca belirli ideolojik sitelerde mi çıkıyor?\n• Ana akım medya ve resmi kurumlar da haberden söz ediyor mu?\n\nArama tüyosu: Başlıktan 3-4 anahtar kelime seçip tarayıcıda aratın.",
    example:
      '"Türkiye\'de öğretmen maaşları yüzde elli artırılacak" aratıldığında haber yalnızca 2 bilinmeyen sitede çıkıyor, resmi kurumlarda bu açıklama yok, ana akım medyada yer almıyor. Bu durum haberin büyük olasılıkla yanlış bilgi içerdiğini gösterir.',
    image: "./images/uygulama5.png",

    chips: [],
  },
];

// ─── UYGULAMA VERİLERİ ────────────────────────────────────────────────────────
export const practiceItems = [
  {
    stepId: 1,
    title: "Hedef 1 – Yayıncı Analizi Uygulaması",
    image: "./images/degerlendirme1.png",
    senaryo:
      "Aşağıdaki görselde iki farklı sosyal medya hesabı yer almaktadır. Her hesabın profil bilgilerini, takipçi sayısını ve paylaşım geçmişini inceleyin.",
    gorev:
      'Her iki hesap için "güvenilir" veya "güvenilir değil" kararı verin ve kararınızı en az 2 somut kanıta dayandırarak açıklayın.',
  },
  {
    stepId: 2,
    title: "Hedef 2 – Kaynak Doğrulama Uygulaması",
    senaryo:
      "Aşağıda forum.donanimhaber.com sitesinden alınmış bir haberin içeriğini görüntülüyorsunuz.",
    image: "./images/degerlendirme2.png",

    link: "https://forum.donanimhaber.com/nasa-gunes-e-sempanze-gonderecek--125052694",

    gorev:
      "Bu haberde kaynak var mı? Varsa yeterli mi? Gerekçenizi sesli olarak belirtiniz ve bu haberi doğrulamak için ne yapardınız?",
  },
  {
    stepId: 3,
    title: "Hedef 3 – Başlık-İçerik Analizi Uygulaması",
    senaryo:
      'Aşağıda sizinle "sabah.com.tr" haber sitesi üzerinden paylaşılan bir haberin içeriği verilmiştir. Haberin detaylı içeriğine linke tıklayarak erişebilirsiniz.',
    image: "./images/degerlendirme3.png",
    link: " https://www.sabah.com.tr/roza/galeri/aile/bebek-kahkahasinin-ardinda-yatan-sir-cozuldu-uzmanlar-acikladi-beyin-gelisiminin-en-onemli-sinyali",
    gorev:
      "Bu haberi nasıl değerlendirirsiniz? Başlık ile içerik arasındaki farkı ve duygusal dil kullanımını açıklayın.",
  },
  {
    stepId: 4,
    title: "Hedef 4 – Ters Görsel Arama Uygulaması",
    senaryo:
      "Sosyal medya üzerinde paylaşılan ve herkes tarafından büyük bir tepki alan içerik sizinle paylaşılmıştır.",
    gorev:
      "Bu görsele ters görsel arama uygulayın. Aramanın her adımını söyleyin ve şu soruları yanıtlayın:\n• Bu görsel daha önce nerede kullanılmış?\n• Orijinal bağlamı nedir?\n• Mevcut haberle uyumlu mu?\n•Haber doğruluğu nedir?",
    image: "./images/degerlendirme4.png",
    link: "https://x.com/Recepsamuncu1/status/1829793488025600478",
  },
  {
    stepId: 5,
    title: "Hedef 5 – Bağımsız Karşılaştırma Uygulaması",
    senaryo:
      '"Müjde! Hükümet kararını verdi: 2000-2008 yılları arasında işe başlayan herkes artık yaşa bakılmaksızın emekli olabilecek! Sosyal medyada herkes paylaşıyor, arkadaşlarına da ilet!" Mesajda "emeklimujde.net" adlı bir siteden alınan haber bağlantısı da bulunmaktadır.',
    gorev:
      "Bu haberi en az iki farklı kaynakta aratın ve bulduğunuz sonuçları karşılaştırın:\n• Haberi doğrulayabildiniz mi?\n• Hangi kaynaklara ulaştınız?\n• Sonuçlar birbiriyle tutarlı mıydı?",
  },
];

export const PHASE_ORDER = [
  "preeval",
  "pretest",
  "learn",
  "practice",
  "posttest",
  "attitude",
  "final",
];

export const PHASE_LABELS = {
  preeval: "Ön Değerlendirme",
  pretest: "Ön Test",
  learn: "Öğretim",
  practice: "Uygulama",
  posttest: "Son Test",
  attitude: "Tutum Ölçeği",
  final: "Tamamlandı",
};
