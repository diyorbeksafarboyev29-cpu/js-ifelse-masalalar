//  darsdagi masalalar

// let son1 = 12;
// let son2 = 19;
// let max = (son2 > son1 && son2) || son1;
// console.log(max);

// let min = (son1 > son2 && son2) || son1;
// console.log(min);

// let son = 41;
// let son = 50;
// let son = 33;
// let son = 41;
// let son = 25;
// if (son % 3 == 0 && son % 5 == 0) {
//   console.log("fizzbuzz");
// } else if (son % 5 == 0) {
//   console.log("buzz");
// } else if (son % 3 == 0) {
//   console.log("fizz");
// } else if (son % 5 == 1 || son % 3 == 1) {
//   console.log("bunday son mavjud emas ");
// }

//=====================================================================================================================

// 1-masala. Imtihon natijasini aniqlash
// O‘quvchining bali score o‘zgaruvchisida berilgan.
// • 90–100 oralig‘ida: “A’lo”.
// • 70–89 oralig‘ida: “Yaxshi”.
// • 60–69 oralig‘ida: “Qoniqarli”.
// • 0–59 oralig‘ida: “Yiqildingiz”.
// • 0 dan kichik yoki 100 dan katta bo‘lsa: “Noto‘g‘ri ball kiritildi”.
// Shart: if, else if va else ishlatilsin.

// let natija = 95;
// let natija = 75;
// let natija = 20;
// let natija = -1;
// let natija = 59;
// if (natija < 0 || natija > 100) {
//   console.log("Noto'g'ri ball kiritildi");
// } else if (natija >= 90 && natija <= 100) {
//   console.log("A'lo");
// } else if (natija >= 70) {
//   console.log("Yaxshi");
// } else if (natija >= 60) {
//   console.log("Qoniqarli");
// } else {
//   console.log("Yiqildiz ");
// }

//===================================================================================================================

// 2-masala. Login va parol tekshiruvi
// Quyidagi o‘zgaruvchilar berilgan:
// let login = "admin";
// let password = "12345";
// let isBlocked = false;
// • Foydalanuvchi bloklangan bo‘lsa: “Hisobingiz bloklangan”.
// • Login va parol to‘g‘ri hamda foydalanuvchi bloklanmagan bo‘lsa: “Xush kelibsiz!”.
// • Login noto‘g‘ri bo‘lsa: “Login noto‘g‘ri”.
// • Login to‘g‘ri, parol noto‘g‘ri bo‘lsa: “Parol noto‘g‘ri”.
// Shart: &&, || va if / else if / else dan foydalaning. Shartlar ketma-ketligiga e’tibor bering.

// let login = "adim";
// let password = "12345";
// let isBlocked = false;

// let login = "admin";
// let password = "12345";
// let isBlocked = false;

// if (isBlocked == true) {
//   console.log("Foydalanuvchi bloklangan");
// } else if (login != "admin" || password != "12345") {
//   if (login != "admin") {
//     console.log("login xato");
//   } else {
//     console.log("parol xato");
//   }
// } else if (login == "admin" && password == "12345" && isBlocked == false) {
//   console.log("xush kelibsiz");
// }

//=========================================================================================================================================================

// 3-masala. Chegirmali xarid
// Do‘konda xaridorning xarid summasi va mijozlik maqomi berilgan:
// let total = 650000;
// let isMember = true;
// • Xarid summasi 1 000 000 so‘m yoki undan ko‘p bo‘lsa, 20% chegirma.
// • Xarid summasi 500 000 so‘m yoki undan ko‘p va mijoz a’zo bo‘lsa, 15% chegirma.
// • Xarid summasi 500 000 so‘m yoki undan ko‘p, lekin mijoz a’zo bo‘lmasa, 10% chegirma.
// • Xarid summasi 200 000 so‘m yoki undan ko‘p bo‘lsa, 5% chegirma.
// • Boshqa holatlarda chegirma berilmaydi.
// Yakuniy to‘lov miqdori va chegirma foizini chiqaring. Shart: && ishlating va chegirmalarni to‘g‘ri
// tartibda tekshiring

// let xarid = 600000;
// let mijozlik = true;

// let xarid = 30000;
// let mijozlik = false;

// let xarid = 300000;
// let mijozlik = true;

// let xarid = 500000;
// let mijozlik = false;

// let xarid = 1000000;
// let mijozlik = false;

// if (xarid >= 1000000) {
//   console.log("To'lov = ", (xarid * 20) / 100, "so'm", " 20% chegirma  ");
// } else if (xarid >= 500000 && mijozlik == true) {
//   console.log("To'lov =", (xarid * 15) / 100, "so'm", "15% chegirma");
// } else if (xarid >= 500000 && mijozlik == false) {
//   console.log("To'lov =", (xarid * 10) / 100, "so'm", "10% chegirma ");
// } else if (xarid > 200000) {
//   console.log("To'lov = ", (xarid * 5) / 100, "so'm", "5% chegirma ");
// } else {
//   console.log("To'lov = ", xarid, "so'm ", "0% chegirma ");
// }

//===================================================================================================================================

//     4-masala. Uchburchak mavjudligini tekshirish
// Uchta tomon berilgan:
// let a = 5;
// let b = 7;
// let c = 9;
// • Tomonlardan biri 0 yoki manfiy bo‘lsa: “Tomonlar noto‘g‘ri”.
// • Uchta tomon uchburchak hosil qila olsa: “Uchburchak mavjud”.
// • Aks holda: “Uchburchak mavjud emas”.
// Uchburchak hosil bo‘lishi uchun istalgan ikki tomon yig‘indisi uchinchi tomondan katta bo‘lishi
// kerak. Uchta taqqoslashni && bilan tekshiring.

// let a = 3;
// let b = 2;
// let c = 9;

// let a = -1;
// let b = 2;
// let c = 1;

// let a = 5;
// let b = 4;
// let c = 3;

// if (a <= 0 || b <= 0 || c <= 0) {
//   console.log("Tamonlar noto'g'ri");
// } else if ((a + b > c) & (b + c > a) && c + a > b) {
//   console.log("Uchburchak mavjud");
// } else {
//   console.log("Uchburchak mavjud emas");
// }

//====================================================================================================================================

// 5-masala. Yetkazib berish narxi
// Buyurtma summasi va yetkazib berish hududi berilgan:
// let orderPrice = 180000;
// let region = "tashkent";
// let isExpress = true;
// • Toshkentda buyurtma 200 000 so‘m yoki undan ko‘p bo‘lsa, oddiy yetkazib berish bepul.
// • Toshkentda 200 000 so‘mdan kam bo‘lsa, oddiy yetkazib berish 15 000 so‘m.
// • Boshqa hududlarda oddiy yetkazib berish 25 000 so‘m.
// • Tezkor yetkazib berish (isExpress = true) tanlansa, asosiy yetkazib berish narxiga qo‘shimcha
// 20 000 so‘m qo‘shiladi.
// Buyurtma va yetkazib berishning umumiy narxini chiqaring. Hudud, summa va yetkazib berish
// turini birgalikda tekshiring.

// let summasi = 300000;
// let viloyat = "Toshkent";
// let tezkoryet = true;
// let oddiyyettosh = 15000;
// let boshqaoddiyyet = 25000;

// let summasi = 90000;
// let viloyat = "samarqand";
// let tezkoryet = true;
// let oddiyyettosh = 15000;
// let boshqaoddiyyet = 25000;

// if (summasi >= 200000 && viloyat == "Toshkent" && tezkoryet == false) {
//   console.log("Umumiy narx:", summasi, "so'm", "oddiy yetkazib berish");
// } else if (summasi < 200000 && viloyat == "Toshkent" && tezkoryet == false) {
//   console.log(
//     viloyat,
//     "oddiy yetkazib berish",
//     "Umumiy narx:",
//     summasi + oddiyyettosh,
//     "so'm",
//   );
// } else if (viloyat != "Toshkent" && tezkoryet == false) {
//   console.log(
//     viloyat,
//     "oddiy yetkazib berish",

//     "Umumiy narx:",
//     summasi + boshqaoddiyyet,
//     "so'm",
//   );
// } else if (viloyat == "Toshkent" && tezkoryet == true && summasi >= 200000) {
//   console.log(
//     viloyat,
//     "tezkor yetkazib berish",
//     "Umumiy narx:",
//     summasi + 20000,
//     "so'm",
//   );
// } else if (viloyat == "Toshkent" && tezkoryet == true && summasi < 200000) {
//   console.log(
//     viloyat,
//     "tezkor yetzakib berish",
//     "Umumiy narx:",
//     summasi + oddiyyettosh + 20000,
//     "so'm",
//   );
// } else if (viloyat != "Toshkent" && tezkoryet == true) {
//   console.log(
//     viloyat,
//     "tezkor yetkazib berish ",
//     "Umumiy narx:",
//     summasi + boshqaoddiyyet + 20000,
//     "so'm",
//   );
// }

//=======================================================================================================================================

// 6-masala. Ishga qabul qilish
// Nomzodning ma’lumotlari berilgan:
// let age = 22;
// let experience = 2;
// let englishLevel = "B2";
// let hasCertificate = true;
// • Yoshi 18 dan kichik bo‘lsa: “Yosh talabiga mos emas”.
// • Yoshi kamida 18, tajribasi kamida 2 yil va ingliz tili darajasi B2 yoki C1 bo‘lsa: “Suhbatga taklif
// qilindi”.
// • Tajribasi kamida 1 yil va sertifikati mavjud bo‘lsa: “Qo‘shimcha ko‘rib chiqiladi”.
// • Qolgan holatlarda: “Talablarga mos emas”.
// Shart: &&, || va else if dan foydalaning. Bir nechta talabni bir vaqtda tekshiring.

// let yosh = 19;
// let tajriba = 2;
// let inglizdaraja = "C1";
// let sertifikat = false;

// if (yosh < 18) {
//   console.log("talabga mos emas");
// } else if (
//   (yosh >= 18 && tajriba == 2 && inglizdaraja == "B2") ||
//   inglizdaraja == "C1"
// ) {
//   console.log("Suhbatga taklif etildi");
// } else if (tajriba == 1 && sertifikat == true) {
//   console.log("Qo'shimcha ko'rib chiqiladi");
// } else {
//   console.log("Talablarga mos emas ");
// }

//=======================================================================================================================================================

// 7-masala. Bankomatdan pul yechish
// Bank hisobidagi mablag‘, yechmoqchi bo‘lgan summa va karta holati berilgan:
// let balance = 850000;
// let amount = 300000;
// let cardBlocked = false;
// • Karta bloklangan bo‘lsa: “Karta bloklangan”.
// • Yechiladigan summa 0 yoki undan kichik bo‘lsa: “Summa noto‘g‘ri”.
// • Summa 1 000 000 so‘mdan katta bo‘lsa: “Kunlik limitdan oshdi”.
// • Hisobdagi mablag‘ yetarli bo‘lmasa: “Mablag‘ yetarli emas”.
// • Barcha shartlar bajarilsa, pul yechilsin va qolgan balans chiqarilsin.
// Shart: holatlarni to‘g‘ri ketma-ketlikda yozing.

// let mablag = 850000;
// let yechmoqchiman = 300000;
// let kartaholati = true;

// let mablag = 85000;
// let yechmoqchiman = 300000;
// let kartaholati = false;

// let mablag = 85;
// let yechmoqchiman = 300000;
// let kartaholati = true;

// let mablag = 850000;
// let yechmoqchiman = 0000;
// let kartaholati = true;

// if (kartaholati == false) {
//   console.log("karta bloklangan");
// } else if (yechmoqchiman <= 0) {
//   console.log("noto'g'ri summa");
// } else if (yechmoqchiman >= 1000000) {
//   console.log("Kunlik limit to'lgan");
// } else if (mablag < yechmoqchiman) {
//   console.log("Mablag' yetarli emas");
// } else {
//   console.log(
//     "yechilgan summa = ",
//     yechmoqchiman,
//     "so'm",
//     "qolgam summa = ",
//     mablag - yechmoqchiman,
//     "so'm",
//   );
// }

//============================================================================================================================

// 8-masala. Sonlarni tahlil qilish
// Uchta son berilgan:
// let a = 12;
// let b = 12;
// let c = 5;
// • Uchala son teng bo‘lsa: “Barcha sonlar teng”.
// • Faqat ikkita son teng bo‘lsa: “Ikkita son teng”.
// • Uchala son har xil bo‘lsa: “Barcha sonlar har xil”.
// • Agar kamida bittasi manfiy bo‘lsa, “Manfiy son mavjud” holatini ham hisobga oling.
// Shart: &&, || va else if ishlatilsin. Manfiy son holati boshqa natijalarga qanday ta’sir qilishini
// o‘zingiz hal qiling va shartlar tartibini izohlang

// let a = 12;
// let b = 12;
// let c = 5;

// let a = 34;
// let b = -7;
// let c = -7;

// let a = 1;
// let b = 8;
// let c = 8;

// let a = 12;
// let b = 12;
// let c = 12;

// if (a < 0 || b < 0 || c < 0) {
//   console.log("Manfiy son mavjud");
// } else if (a == b && b == c) {
//   console.log("Barcha sonlar teng");
// } else if (a == b || a == c || b == c) {
//   console.log("Ikkita son teng");
// } else {
//   console.log("Barcha sonlar har xil");
// }

//===================================================================================================================================================

// 9-masala. Talabaning stipendiyasi
// Talabaning o‘rtacha bali, davomati va intizom holati berilgan:
// let averageScore = 88;
// let attendance = 92;
// let hasWarning = false;
// • O‘rtacha bali 90 yoki undan yuqori, davomati kamida 90% va ogohlantirishi bo‘lmasa: “Yuqori
// stipendiya”.
// • O‘rtacha bali 75 yoki undan yuqori, davomati kamida 80% va ogohlantirishi bo‘lmasa: “Oddiy
// stipendiya”.
// • Davomati 60% dan past bo‘lsa yoki intizomiy ogohlantirish mavjud bo‘lsa: “Stipendiya
// berilmaydi”.
// • Boshqa holatlarda: “Talablar bajarilmadi”.
// Shart: && va || dan foydalaning. Ustuvor shartlarni birinchi tekshiring.

// let ortachaballi = 30;
// let davomat = 90;
// let ogohlantirish = true;

// let ortachaballi = 40;
// let davomat = 90;
// let ogohlantirish = false;

// if (ortachaballi >= 90 && davomat >= 90 && ogohlantirish == false) {
//   console.log("Yuqori stipendiya");
// } else if (ortachaballi >= 75 || (davomat >= 80 && ogohlantirish == false)) {
//   console.log("Oddiy stipendiya");
// } else if (davomat < 60 || ogohlantirish == true) {
//   console.log("Stipendiya berilmaydi");
// } else {
//   console.log("talablarga mos emas ");
// }

//=====================================================================================================================================================

// 10-masala. Onlayn imtihonga kirish
// O‘quvchining imtihonga kirish ma’lumotlari berilgan:
// let isRegistered = true;
// let hasPaid = true;
// let isBanned = false;
// let examScore = 0;
// • Ro‘yxatdan o‘tmagan bo‘lsa: “Avval ro‘yxatdan o‘ting”.
// • To‘lov qilinmagan bo‘lsa: “To‘lovni amalga oshiring”.
// • Bloklangan bo‘lsa: “Imtihonga kirish taqiqlangan”.
// • Yuqoridagi talablar bajarilgan va imtihon bali hali 0 bo‘lsa: “Imtihonni boshlashingiz mumkin”.
// • Bali 0 dan katta va 60 dan kichik bo‘lsa: “Imtihondan o‘tmadingiz”.
// • Bali 60 yoki undan yuqori bo‘lsa: “Imtihondan muvaffaqiyatli o‘tdingiz”.
// • Bali 100 dan katta yoki manfiy bo‘lsa: “Noto‘g‘ri natija”.
// Shart: if, else if, else, && va || ishlating. Barcha holatlarda to‘g‘ri natija chiqishi uchun shartlar
// tartibini o‘ylab ko‘ring

// let royxat = true;
// let tolov = false;
// let bloklangan = false;
// let imtihonballi = 0;

// let royxat = false;
// let tolov = false;
// let bloklangan = false;
// let imtihonballi = 0;

// let royxat = true;
// let tolov = true;
// let bloklangan = false;
// let imtihonballi = 1;

// let royxat = true;
// let tolov = true;
// let bloklangan = false;
// let imtihonballi = 100;

if (royxat == false) {
  console.log("Avval ro'yxat o'ting");
} else if (tolov == false) {
  console.log("To'lovni amalga oshiring");
} else if (bloklangan == true) {
  console.log("Imtihonga kirish taqiqlanadi ");
} else if (imtihonballi == 0) {
  console.log("Imtihonni boshlashingiz mumkin");
} else if (imtihonballi >= 0 && imtihonballi < 60) {
  console.log("Imtihondan o'tmadiz");
} else if (imtihonballi >= 60) {
  console.log("Imtihondan o'tiz");
} else if (imtihonballi < 0 || imtihonballi > 100) {
  console.log("Noto'g'ri natija ");
}
