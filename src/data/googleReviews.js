// Google reviews shown on surgeon profiles, keyed by BOS profile slug.
// Each surgeon's reviews come from their own Google Business Profile, or,
// when they have none, from their clinic's listing (`shared: true`), where
// only reviews that name the surgeon are kept. Reviews that name another
// doctor are left out. Text is exactly as written on Google; `date` is
// estimated from Google's relative age ("3 months ago") on the capture day.
// First six profiles captured 2026-10-09, the rest 2026-10-10.
export const GOOGLE_REVIEWS_CAPTURED_AT = "2026-10-10";

export const googleReviews = {
  "ryan-du-sart": {
    "listings": [
      {
        "key": "ryan-du-sart",
        "name": "Dr Ryan Du Sart",
        "address": "6 Higgins St, Bunbury WA 6230, Australia",
        "rating": 4.9,
        "reviewCount": 31,
        "url": "https://share.google/dtgRzbQ1qB9aV3ds8",
        "primary": true
      }
    ],
    "reviews": [
      {
        "id": "ryan-du-sart-charmaine-collins",
        "author": "Charmaine Collins",
        "rating": 5,
        "date": "2026-09-09",
        "listing": "ryan-du-sart",
        "text": "This is my second procedure with Dr Ryan Dusart. As with the first, the outcome has been excellent. I highly recommend him for hip & knee replacements."
      },
      {
        "id": "ryan-du-sart-paula-patane",
        "author": "Paula Patane",
        "rating": 5,
        "date": "2026-09-09",
        "listing": "ryan-du-sart",
        "text": "I am now 6 weeks post opp from a knee replacement. Looks so much better than my other knee that was done 5 years ago. I went to the pool this morning and managed 45 minutes of exercise. Thanks so much."
      },
      {
        "id": "ryan-du-sart-marion-knott",
        "author": "Marion Knott",
        "rating": 5,
        "date": "2026-08-09",
        "listing": "ryan-du-sart",
        "text": "Dr Du Sart recently performed a reverse shoulder replacement on me.\nBefore and after care was so professional and caring. Everything thing explained fully.\nAn amazing surgeon .\nWould highly recommend\nA Big thankyou"
      },
      {
        "id": "ryan-du-sart-kevin-mcdonald",
        "author": "Kevin McDonald",
        "rating": 5,
        "date": "2026-07-09",
        "listing": "ryan-du-sart",
        "text": "Dr Ryan Du Sart's bedside manner and skill is second to none. When he is consulting, you will never feel rushed and he will answer all your questions. You may feel like you're he's only patient! Additionally, he talks in layman's terms, explains what the X-ray and MRI results mean, and will never operate if not required.\nHe recently completed a partial knee replacement for me, which was robot assisted. Five weeks post surgery, and I'm back playing bowls and golf, plus I have full range of movement."
      },
      {
        "id": "ryan-du-sart-mel-ann",
        "author": "Mel Ann",
        "rating": 5,
        "date": "2026-06-09",
        "listing": "ryan-du-sart",
        "text": "I recently had MCL knee reconstruction, and Dr Ryan Du Sart and his team were absolutely amazing. Dr Ryan Du Sart was so caring, and every member of his team was polite, professional, and incredibly calming throughout the whole experience.\n\nWhen I entered theatre, I was feeling nervous and anxious, but they all made me feel at ease straight away with their kindness and reassurance.\n\nAfter surgery, once I was out of recovery, Dr Ryan Du Sart personally came to check on me, explain all the details of my surgery, and make sure I was doing okay. That level of care and personal communication with his patients is truly above the rest.\n\nOther than the normal discomfort that comes with surgery, I feel amazing and am beyond thankful for the care, compassion, and professionalism shown to me.\n\nThank you so much for your incredible work and for genuinely caring for your patients."
      },
      {
        "id": "ryan-du-sart-glenda-ruby",
        "author": "Glenda Ruby",
        "rating": 5,
        "date": "2026-02-09",
        "listing": "ryan-du-sart",
        "text": "After being in pain for years, it was so very nice finding a surgeon who listened and understood. After surgery, the relief from pain was immediate. I cannot fault the aftercare, all staff were absolutely lovely."
      },
      {
        "id": "ryan-du-sart-dave",
        "author": "Dave",
        "rating": 5,
        "date": "2025-12-09",
        "listing": "ryan-du-sart",
        "text": "Thank you so much for giving my mobility back and my life\nSounds dramatic but very true\nDr Du Sart and his team , helpful and professional from start to finish\nLeft hip replacement\nCheers Dave Ley 👍"
      },
      {
        "id": "ryan-du-sart-kaye-ellem",
        "author": "Kaye Ellem",
        "rating": 5,
        "date": "2025-11-09",
        "listing": "ryan-du-sart",
        "text": "Dr Ryan Du Sart preformed both my Total Knee Replacements along with my ankle fusion. I am so happy with the outcome. The scaring is minimal on my knees and you need a magnifying glass to see the one on my ankle. He understood the need to have it done and didn’t hesitate. Amazing surgeon, amazing team that works with him. Couldn’t have been in better hands. I even flew down from Darwin, NT to have the 2nd knee replacement done because let’s face it, if you find a good surgeon, you keep him."
      },
      {
        "id": "ryan-du-sart-doobie-s-den",
        "author": "Doobie's Den",
        "rating": 5,
        "date": "2025-11-09",
        "listing": "ryan-du-sart",
        "text": "Outstanding work, very professional. I was able to walk out straight after knee surgery. Highly recommend 👌 👍"
      },
      {
        "id": "ryan-du-sart-william-miller",
        "author": "William Miller",
        "rating": 5,
        "date": "2025-11-09",
        "listing": "ryan-du-sart",
        "text": "Very happy with everything and super happy with the fantastic result would highly recommend dr du sart"
      },
      {
        "id": "ryan-du-sart-paul-garratt",
        "author": "Paul Garratt",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "ryan-du-sart",
        "text": "Great job! Dr Du Sart has fixed my ankle and I suffer no pain or discomfort immediately after the surgery or during my recovery. I would recommend Ryan for any type of orthopaedic treatment. I thank you and your team."
      },
      {
        "id": "ryan-du-sart-rocco-guzzomi",
        "author": "Rocco Guzzomi",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "ryan-du-sart",
        "text": "Dr Ryan Du Sart provide excellent care and advice with my recent ankle surgery. Still recovering but has been extremely helpful throughout the surgery and recovery."
      },
      {
        "id": "ryan-du-sart-chris-matson",
        "author": "Chris Matson",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "ryan-du-sart",
        "text": "Had significant foot surgery 10 weeks ago, between Dr Ryan Du Sart and the anaesthetist I suffer no pain or discomfort immediately after the surgery or during my convalescence. In fact after the first 12 hours I did not need the prescribed pain management. I could not recommend Ryan highly enough for any type of orthopaedic treatment.\nChris Matson"
      },
      {
        "id": "ryan-du-sart-jamey-lee-bridges",
        "author": "Jamey-Lee Bridges",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "ryan-du-sart",
        "text": "Dr Ryan Du Sart has done 7 successful operations he is the reason I can still walk and I gave up smoking. He is an unbelievably talented surgeon and his staff are just amazing .\nThankyou 😎"
      },
      {
        "id": "ryan-du-sart-susan-o-connor",
        "author": "Susan O'Connor",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "ryan-du-sart",
        "text": "Thank you Dr Du Sart and team I am in awe of the recent results of my Hip Replacement Surgery - 7 weeks on and I am back to work and feeling great - 🙏🌻"
      },
      {
        "id": "ryan-du-sart-belinda-thomson",
        "author": "Belinda Thomson",
        "rating": 4,
        "date": "2025-10-09",
        "listing": "ryan-du-sart",
        "text": "Ryan is an amazing surgeon ' his operative skills are to a perfection ' Ryan generally shows he cares' and is very helpful .."
      },
      {
        "id": "ryan-du-sart-fiona-lineham",
        "author": "Fiona Lineham",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "ryan-du-sart",
        "text": "Very professional well organised the best experience I've had for a procedure All staff all the way through were amazing"
      },
      {
        "id": "ryan-du-sart-coralie-cargill",
        "author": "Coralie Cargill",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "ryan-du-sart",
        "text": "Dr du Sart operated on my shattered right elbow and broken wrist. It was emergency surgery after a two and a half day wait in the emergency department at BRH. He did an amazing repair under difficult circumstances given the extent of the damage. I am grateful that he stepped in to undertake the surgery and most importantly, I have regained 99% use of my elbow and 100% use of my wrist. I can not thank him enough for his skill, expertise and care."
      },
      {
        "id": "ryan-du-sart-aussie-building-specialists-and-geotech",
        "author": "Aussie Building Specialists and Geotech",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "ryan-du-sart",
        "text": "We feel extremely fortunate to have chosen, Dr Ryan Du Sart for my mums total right knee replacement surgery.\nInitially we consulted a Ortho Surgeon in Perth but somehow, my mother didn't feel connected . We decided to go to Dr. Ryan Du Sart and my mum immediately felt connected due to his exceptional skills in building Dr -patient relationship.\nHis active listening skills along with empathy and assurance of support both pre op and post op is a rare trait one finds in Surgeons of this high calliber.\nDr. Ryan explained everything in a laymans language to my mum and also explained the associated risks given her age.\nToday she is 6 weeks post op and from a situation where my mother would cry from knee joint pain to where she is now extremely comfortable, the credit goes to the Amazing Orthopaedic Surgeon who performed a successful surgery using the best available technology.\nI have great amount of respect for the amount of research and training Dr Ryan has done in this speciality. We are very lucky to have a competent Surgeon in Bunbury.\n\nIt would be unfair to not give credit to the reception staff who have been brilliant in communicating everything well in advance.\n\nThanks alot for all you have done for my mother.\n\nBest wishes from\nShah"
      },
      {
        "id": "ryan-du-sart-alexa-tunmer",
        "author": "Alexa Tunmer",
        "rating": 4,
        "date": "2023-10-09",
        "listing": "ryan-du-sart",
        "text": "I am happy with the treatment I received from Dr Du Sart. I presented in emergency with a badly broken collarbone and through his expertise as a surgeon I recovered with full shoulder range restored. I didn’t get to choose my surgeon going through the public system, so count myself lucky."
      },
      {
        "id": "ryan-du-sart-barry-hales",
        "author": "Barry Hales",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "ryan-du-sart",
        "text": "Very skilled and caring surgeon. has an awesome team behind him very professional. (also has a laugh) I was very honoured having him perform my surgery, and I would highly recommend Dr Du Sart. Thankyou."
      },
      {
        "id": "ryan-du-sart-janitha-sara",
        "author": "Janitha Sara",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "ryan-du-sart",
        "text": "Dr Ryan , one of best surgeon.we are lucky have you in South West. And his team ⭐️⭐️⭐️⭐️⭐️"
      },
      {
        "id": "ryan-du-sart-bradley-daws",
        "author": "Bradley Daws",
        "rating": 5,
        "date": "2021-10-09",
        "listing": "ryan-du-sart",
        "text": "My hip replacement has left me with a new lease on life . A big thankyou to Dr Du Sart and the staff at Busselton hospital for this new adventure"
      },
      {
        "id": "ryan-du-sart-meralyn-simpson",
        "author": "Meralyn Simpson",
        "rating": 5,
        "date": "2020-10-09",
        "listing": "ryan-du-sart",
        "text": "Thankyou Dr Du Sart\nOne spiral fracture of the ankle and 2 total knee replacements and I am so pleased that I had such a great Dr\nA very caring person and a complete Gentleman...not to mention he is also an excellent surgeon\nI would thoroughly recommend Ryan and his team"
      },
      {
        "id": "ryan-du-sart-angus-currie",
        "author": "Angus Currie",
        "rating": 5,
        "date": "2019-10-09",
        "listing": "ryan-du-sart",
        "text": "Awesome surgeon an team......two full knee replacements within a year. So pleased with my new abilities. Thank you very much keep up with the professional skills 🤗🦄🕊👍👌"
      },
      {
        "id": "ryan-du-sart-seaton-field",
        "author": "Seaton Field",
        "rating": 5,
        "date": "2018-10-09",
        "listing": "ryan-du-sart",
        "text": "Incredibly skilled and caring surgeon. I was very luck to have him available to fix my broken leg! Thank you Dr Ryan!!!!"
      },
      {
        "id": "ryan-du-sart-jordan",
        "author": "Jordan",
        "rating": 5,
        "date": "2018-10-09",
        "listing": "ryan-du-sart",
        "text": "He is a great surgeon and I would highly recommend Dr du Sart to anyone in search of a orthopedic surgeon in Bunbury"
      }
    ]
  },
  "rhys-clark": {
    "listings": [
      {
        "key": "rhys-clark",
        "name": "Dr Rhys Clark - Orthopaedic Hip & Knee Surgeon",
        "address": "Ste 10/100 Murdoch Dr, Murdoch WA 6150, Australia",
        "rating": 4.9,
        "reviewCount": 62,
        "url": "https://share.google/6iRWyMatQsuyXOvKB",
        "primary": true
      }
    ],
    "reviews": [
      {
        "id": "rhys-clark-steven-mackenzie",
        "author": "Steven Mackenzie",
        "rating": 5,
        "date": "2026-09-09",
        "listing": "rhys-clark",
        "text": "Dr Rhys Clark is an incredibly talented surgeon and i could not recommend him more highly. The surgical outcome was exceptional , and the entire team supported me every step of the way. If you need the absolute best in this field, look no further."
      },
      {
        "id": "rhys-clark-sam-licastro",
        "author": "Sam Licastro",
        "rating": 5,
        "date": "2026-08-09",
        "listing": "rhys-clark",
        "text": "Rhys has helped me with an ACL reconstruction after my physio recommended him to me. Could not be happier with the results, the nurse explained scarring was some of the smallest and best she’d seen, physio explained recovery so far had been one of the best he’s had. Thank you so much!"
      },
      {
        "id": "rhys-clark-ritu-singh",
        "author": "RITU Singh",
        "rating": 5,
        "date": "2026-08-09",
        "listing": "rhys-clark",
        "text": "I cannot thank Dr. Rhys Clark enough for the exceptional care, expertise and skill he demonstrated throughout my hip replacement journey. I had a screw in my left hip from a previous surgery almost 30 years ago, which made my case more complex. Dr. Clark successfully removed the old screw and performed an absolutely immaculate hip replacement operation. One of my biggest concerns was my leg length, and I am incredibly grateful that he was able to restore and level my leg length to match my original leg. The precision, professionalism and care shown by Dr. Clark throughout the entire process have been exceptional. I am extremely happy with the outcome and the way my recovery is progressing. I would highly recommend Dr. Rhys Clark to anyone considering hip replacement surgery. Thank you, Dr. Clark, for your outstanding work, for giving me confidence in my mobility again, and for making such a positive difference to my life. I will always be truly grateful."
      },
      {
        "id": "rhys-clark-julieta-chittleborough",
        "author": "Julieta Chittleborough",
        "rating": 5,
        "date": "2026-06-09",
        "listing": "rhys-clark",
        "text": "3 years ago my husband had his left hip replacement. He is highly recommended and now we need to go back to replace his right hip."
      },
      {
        "id": "rhys-clark-karen-hardy",
        "author": "Karen Hardy",
        "rating": 5,
        "date": "2026-05-09",
        "listing": "rhys-clark",
        "text": "I am now a month into my recovery from my left hip replacement and all is going well. Previously had my right hip replacement in Nov 2024 . I found Dr Rhys Clark from my first appointment to be friendly and professional and his lovely admin ladies were so helpful which made my journey to 'my new hips' to be a smooth, informative and stress free journey. I thoroughly recommend Dr Rhys Clark if you are considering hip replacement surgery."
      },
      {
        "id": "rhys-clark-saz",
        "author": "Saz",
        "rating": 5,
        "date": "2026-04-09",
        "listing": "rhys-clark",
        "text": "I cannot thank Mr. Rhys Clark enough or recommend him more highly. Don't expect small talk . What you’ll get is a complete explanation of what to expect, then a seamless, professional operation that will change and improve your life. It’s now 4 weeks post op and already I'm walking pain free and unaided. 👏🏻"
      },
      {
        "id": "rhys-clark-julie-connelly",
        "author": "julie connelly",
        "rating": 5,
        "date": "2026-04-09",
        "listing": "rhys-clark",
        "text": "Huge thankyou to Rhys Clark & staff who took over my care & after extensive scans & tests on my poor old 18 year old knee replacement,it was decided i needed a new one,from surgery to rehab,it has been exceptionally smooth with a great outcome,i have my life back,highly recommened👌"
      },
      {
        "id": "rhys-clark-marcelle-warner-aussiegirlonamission2",
        "author": "Marcelle Warner (Aussiegirlonamission2)",
        "rating": 5,
        "date": "2026-04-09",
        "listing": "rhys-clark",
        "text": "Dr Rhys Clark is an incredible surgeon who has given me back my life. Thank you so much from the bottom of my heart."
      },
      {
        "id": "rhys-clark-pam-westphal",
        "author": "Pam Westphal",
        "rating": 5,
        "date": "2025-12-09",
        "listing": "rhys-clark",
        "text": "I am writing this review nine weeks post surgery. I had a hip replacement a year ago and total knee replacement this September performed by Mr. Rhys Clark. Both procedures were positive experiences in every way. Mr. Clark is a no gap provider which pleasingly limits the unexpected expenses. Everything about the procedures is clearly communicated through an excellent handbook that is provided and his wonderful admin staff, who are extremely reassuring and answer questions comprehensively. I was particularly apprehensive about the knee replacement as I had heard of so many negative experiences first hand. My knee replacement went so smoothly. I came around from the anaesthetic so well, felt little pain but was expecting that to wear off. At worst I have had some swelling, stiffness and minor discomfort! Mr. Clark contacted me the day before surgery, phoned my husband when the surgery was completed and phoned just after I arrived home. The care that he provided was faultless. The patient also bears some responsibility in getting the most out of this amazing surgery. I spent a year before each surgery maximising my physical condition in a rehab gym and have also been guided by a fabulous physiotherapist. I am currently working on my strength in the rehab gym again.I am so grateful to Mr. Clark and everyone else involved for my successful recovery."
      },
      {
        "id": "rhys-clark-nicky-adams",
        "author": "Nicky Adams",
        "rating": 5,
        "date": "2025-12-09",
        "listing": "rhys-clark",
        "text": "I cannot thank Dr Rhys Clark nor his wonderful staff enough for fixing up my knee and giving me back quality of life without pain after my torn meniscus kept me in excruciating pain for Months. I hope I don't ever need your services ever again - but if I do I won't hesitate to come back and will recommend you to others! Thank you ever so much."
      },
      {
        "id": "rhys-clark-bart-coomer",
        "author": "Bart Coomer",
        "rating": 5,
        "date": "2025-12-09",
        "listing": "rhys-clark",
        "text": "What a life changing meeting Mr Clarke and the wonderful ladies in his office they could not help me enough the whole process from start to end nothing was to much trouble and the surgery was so easy I had my hip replaced and had instant relief from the pain I have been putting up with for a long time seven weeks later back at work climbing in and out of trucks with no pain getting into excavators with no pain and not walking with a limp anymore would not hesitate to recommend Mr Clarke"
      },
      {
        "id": "rhys-clark-v-t",
        "author": "V T",
        "rating": 5,
        "date": "2025-12-09",
        "listing": "rhys-clark",
        "text": "Excellent communicator and a Specialist in his field. I highly recommend this Specialist."
      },
      {
        "id": "rhys-clark-bronwen-dimer",
        "author": "Bronwen Dimer",
        "rating": 5,
        "date": "2025-11-09",
        "listing": "rhys-clark",
        "text": "Highly recommend Dr Clark. He did my right total knee replacement 7 weeks ago and I feel amazing and feel it can only get better. Thank you"
      },
      {
        "id": "rhys-clark-taleulah14",
        "author": "taleulah14",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "Rhys Clark is a no nonsense dr. He tells you how it is, and I found that refreshing. I had a total knee replacement. He explained everything to me clearly, making sure I understood what was happening. I was very happy with his work. My scar healed nicely, and he was always available to me if i had any questions. Checking in via emails after the op was nice too. His admin staff are also wonderful. I was unsure of some appts with the hospital but they reassured me each time I rang them. It is a scary experience for anyone but him and his team were very easy to deal with. Absolutely recommend Rhys Clark 100%."
      },
      {
        "id": "rhys-clark-vanessa",
        "author": "Vanessa",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "Dr. Rhys Clark is an outstanding doctor – professional, knowledgeable, and genuinely caring. He takes the time to listen, explains everything clearly in easy to understand terminology, and makes you feel completely at ease. His expertise and compassionate approach give you real confidence that you’re in the best hands. Highly recommend him to anyone looking for excellent medical care."
      },
      {
        "id": "rhys-clark-kristine-chase-dunlop",
        "author": "Kristine Chase-Dunlop",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "My whole experience of having hip replacement surgery by Dr Rhys Clark, has been amazing, from my initial appointment until the final one. I was given all relevant information, email updates of pre and post surgery progress and surgery results beyond my expectations. I would highly recommend Dr Clark to anyone looking for a highly skilled surgeon who runs a very professional surgery and just happens to be a very approachable, nice person as well."
      },
      {
        "id": "rhys-clark-tania-bertoli",
        "author": "Tania Bertoli",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "I had a total left knee replacement done by Dr Rhys Clark almost 8 weeks ago. The whole process was amazing. 100% recommend anyone to use Dr Clark as your surgeon. Recovery has been excellent and all his staff are lovely. Fantastic surgeon"
      },
      {
        "id": "rhys-clark-lyn-perrigo",
        "author": "Lyn Perrigo",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "I cannot express enough my gratitude to Mr Clark for his brilliant work replacing my hip. I was amazed that he would take the time, before & after surgery, to communicate through email/text to put me at ease, inform and encourage me. Having been a teacher of technology in schools for decades, I was ‘wowed’ by the digital modelling that Rhys sent me the day before surgery. It went to plan perfectly, I had no incision pain and my recovery has been very pleasing. Thanks so much Rhys."
      },
      {
        "id": "rhys-clark-malcolm-tucker",
        "author": "Malcolm Tucker",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "Dr Rhys Clark has recently performed knee replacements on my left and right knees with a gap of 10 weeks in between each procedure. I was in St. John of God Murdoch Hospital for three nights for the first operation and the second I was in for just two nights. Dr Rhys Clark and his team were very professional, caring and kept me informed during the whole procedure. My recovery from both knee replacements has been excellent and made a big difference to my daily life. I would not hesitate to recommend Dr Rhys Clark and his team to carry out these procedures."
      },
      {
        "id": "rhys-clark-jan",
        "author": "Jan",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "8 weeks ago I had a (Mako Knee replacement) done by Rhys Clark. It has been amazing, very little pain, no need for crutches and walking on the beach approximately a week and a bit later. Rhys Clark explains the process very clearly and you are given a lot of very professional documentation to refer to. I have been back at the gym now for 2 weeks and apart from a little muscle tightness's above the knee I don't feel like I have had major surgery. I highly recommend Rhys if you are contemplating total knee replacement."
      },
      {
        "id": "rhys-clark-carol-lister",
        "author": "carol lister",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "Dr Clark was upfront about everything concerning my knee & my knee surgery. Lovely ladies on reception were amazing. I found the whole process easy, very informative and Dr Clark listened & was easy to talk to."
      },
      {
        "id": "rhys-clark-big-al",
        "author": "Big Al",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "I recently had a complex hip revision done by Dr Clark. I have had many operations in my life, many interactions with doctors and specialists, and never have I had a Doctor who has been as approachable and personable as I have found Dr Clark. I cannot recommend him highly enough."
      },
      {
        "id": "rhys-clark-helen-hancock",
        "author": "Helen Hancock",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "Total right knee replacement. Amazing, it has given me my life back. And, I have been lucky to have had a great/speedy recovery. Dr Clarke comes highly recommended by me."
      },
      {
        "id": "rhys-clark-pauline-smith",
        "author": "Pauline Smith",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "I can not thank Dr Clark enough for his brilliant work replacing my Lt hip. I was amazed that he would take the time to send emails before and after surgery. Thank you so much Dr Clark."
      },
      {
        "id": "rhys-clark-john-haast",
        "author": "John Haast",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "Dr Rhys Clark performed a left hip replacement. Very informative prior to and post procedure, recovery has gone very well and great to have the pain gone and mobility back. Thank you"
      },
      {
        "id": "rhys-clark-tracy-taggart",
        "author": "Tracy Taggart",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "Saw Rhys for my hips and left knee over the last couple of years. I've gotten amazing results and will recommend Rhys to anyone needing a new hip/knee. Cheers 😁"
      },
      {
        "id": "rhys-clark-gordon-rogers",
        "author": "Gordon Rogers",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "Never met a surgeon with such professionalism. His pre surgery care, bed side manner, and post surgery care were second to none. We were always kept fully informed and made everything easy. Would highly recommend."
      },
      {
        "id": "rhys-clark-lyn-wilson",
        "author": "Lyn Wilson",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "So glad I chose Dr Rhys Clark, he did a tremendous job on both hip replacements, very skilled dr."
      },
      {
        "id": "rhys-clark-liz-tropiano",
        "author": "Liz Tropiano",
        "rating": 1,
        "date": "2025-10-09",
        "listing": "rhys-clark",
        "text": "No bedside manner"
      },
      {
        "id": "rhys-clark-danny-epiha",
        "author": "Danny Epiha",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "rhys-clark",
        "text": "I am a new Man.. 2 new knees.. 1st Op was March 2023.."
      },
      {
        "id": "rhys-clark-donna-gannaway",
        "author": "Donna Gannaway",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "rhys-clark",
        "text": "In my experience, Dr Rhys Clark is the best surgeon for TKR. From the very first appointment, right up to post surgery appointments of a Total Knee Joint. Kind, compassionate and highly skilled. I could not recommend him or his team highly enough. Dr Rhys's Administration team, also are fantastic. SJOG Murdoch, was great. I'm a 52 Female, and was not expecting a TKR at this time in my life, but simply, there was no other option. I am so very grateful to have found Dr Rhys Clark and have him as my surgeon. Outstanding!!!!"
      },
      {
        "id": "rhys-clark-karenna-roman",
        "author": "Karenna Roman",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "rhys-clark",
        "text": "From the first phone call to reception speaking to Linda and post surgery I can HIGHLY recommend Rhys Clark and his team. I am 61yrs and had to have a 2nd hip revision after my stem snapped in half, something that surprised me no end. The X-ray Dr rang Rhys who called me in between surgeries, I was fitted in very quickly and within 6 days I was in surgery which thankfully went incredibly well. Rhys messaged me after surgery to say he was happy with how it went, he messaged me the first day I was home (5 days in hospital) to see how I was and to let me know that I could reach out if I had any concerns, he emailed me X-rays and to check in, NEVER have I had a surgeon who took the time, who treated his patients like they were family and who was so caring and compassionate. I am 9weeks post and doing very well, I have a much longer stem now, walking without a limp, something I was terrified of and NO pain. My biggest thanks to Rhys his reception staff who are simply gorgeous and as accommodating as they could possibly be. Do yourself a favour go and see this guy, super glad I followed the 5 star reviews because I can add to that now too. 😄😄"
      },
      {
        "id": "rhys-clark-ian-mansfield",
        "author": "Ian Mansfield",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "rhys-clark",
        "text": "2 total knee replacements 8 weeks apart. Simply everything from the expertise and caring of Rhys, by example, my wife Linda was contacted on both occasions within minutes of me leaving theatre. To the caring office, nursing and physio team, anaesthetist re- assurance. Both experiences were excellent. Thank you. Highly recommend Rhys and his team. Congratulations to all. Ian/Linda."
      },
      {
        "id": "rhys-clark-scott-elkovich",
        "author": "scott elkovich",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "rhys-clark",
        "text": "I had a total hip replacement from Dr Clark almost 12 months ago. The guy is a legend and a leader in his field. After being turned away from another surgeon because I was “too young” to have this surgery Rhys simply said “your life and your kids are far too important to go wasting 10 years waiting in pain to essentially have this surgery down the track”. The anterior approach is so patient and recovery friendly and his use of technology ensures he gets it absolutely spot on. I’m pain free and am up and about with my family like I was before my accident. I was walking that night, one crutch after 4 days and no crutches after 8 days (he won’t want to hear that). This comment he made stuck with me and it sums up his attitude and approach entirely. When I asked him about another surgeon objecting to use the anterior approach because it’s too hard to see what you’re doing he replied with “there are two ways to do this surgery, easier for me but harder for you and your recovery (posterior approach) or harder for me and takes a little longer but much better for you in all regards both short and long term (anterior approach) and I think it’s better for the patient to get the better deal”. Thank you Rhys."
      },
      {
        "id": "rhys-clark-pat-lowe",
        "author": "Pat Lowe",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "rhys-clark",
        "text": "I found Dr Clark to be very approachable, professional, down to earth and honest at all times. He answered all questions in a way i could process and understand. He kept a check on me whilst in hospital and once home, and the surgery and recovery have been text-book. As a retired nurse, i have felt completely at ease and comfortable in his hands, and would happily recommend Dr Clark to anybody."
      },
      {
        "id": "rhys-clark-bev-hill",
        "author": "Bev Hill",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "rhys-clark",
        "text": "Dr Clark is absolutely fabulous. I had a hip replacement 3 months ago and I am fully recovered doing full workouts at the gym again. Thank you Rhys….job very well done..Bev👍👍"
      },
      {
        "id": "rhys-clark-daniel-dunnet",
        "author": "Daniel Dunnet",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "rhys-clark",
        "text": "Review by Anne-Marie Dunnet Dr Rhys Clark and his team have been amazing throughout my treatment. Would absolutely recommend him with no reservations!"
      },
      {
        "id": "rhys-clark-oz-bloke",
        "author": "Oz Bloke",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "rhys-clark",
        "text": "Everything from first consultation through operation and after care and communication throughout was first rate. Happy with result and would highly recommend Dr Rhys Clark."
      },
      {
        "id": "rhys-clark-ian-white",
        "author": "Ian White",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "rhys-clark",
        "text": "Can't speak highly enough of Rhys, all over a great experience"
      },
      {
        "id": "rhys-clark-debbie-wildbore",
        "author": "Debbie Wildbore",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "rhys-clark",
        "text": "Absolutely the best experience. Dr Clark did the anterior approach hip replacement and my recovery has been amazing. I had regular check ins from Dr Clark following my surgery and I am just over 5 weeks post op and almost back to life as normal. I would definitely recommend using Dr Clark. I had the other hip replaced by a different surgeon which was the posterior approach, whilst the final outcome is the same in the long term, the recovery with the posterior approach was prolonged and painful with higher risk of dislocation and limitations on movement and sleeping during recovery, all of which are not applicable with the anterior approach practiced by Dr Clark. I would recommend a consult with Dr Clark if you require a hip replacement and can speak from experience when I say the anterior approach as undertaken by Dr Clark is much better in terms of recovery than the posterior approach."
      },
      {
        "id": "rhys-clark-bill-hurst",
        "author": "Bill Hurst",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "rhys-clark",
        "text": "My wife Lu needed a hip replacement operation. Dr Clark is a very warm and compassionate surgeon and most importantly an extremely capable one. All Lu's pre-op concerns were managed with sensitivity and reassurance. Lu is now recovering well, and the outcome has far exceeded her own expectations. Lu is very thankful to Dr Clark, his team and St John of God hospital at Murdoch and we have no hesitation in recommending them to anyone requiring similar surgery."
      },
      {
        "id": "rhys-clark-anthea-fitzhardinge",
        "author": "Anthea Fitzhardinge",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "rhys-clark",
        "text": "Dr Clark goes above and beyond with his patient care and follow up after surgery. He did a great job on my overdue total knee replacement, after 6 weeks l was back at work. Can not recommend him enough."
      },
      {
        "id": "rhys-clark-natalie-madden",
        "author": "Natalie Madden",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "rhys-clark",
        "text": "I hate hospitals and doctors being a usually fit healthy 58 yo woman. Rhys explains the surgery, pain levels and outcomes clearly and calmed me. I trust him completely and will book my second total hip replacement surgery in 12 months. Thanks Rhys and Lynda too🙏"
      },
      {
        "id": "rhys-clark-ron-buiks",
        "author": "Ron Buiks",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "rhys-clark",
        "text": "I can't thank Dr Clark and his team enough. My knee replacement couldn't have gone better from my initial consultation , my surgery , hospital stay and recovery. Would recommend to all ."
      },
      {
        "id": "rhys-clark-gayle-monck",
        "author": "Gayle Monck",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "rhys-clark",
        "text": "I could not recommend Rhys Clark highly enough. His professionalism, skill as an Orthopaedic Surgeon and care of his patients is second to none. Norm Monck"
      },
      {
        "id": "rhys-clark-trevor-clune",
        "author": "trevor clune",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "rhys-clark",
        "text": "from reception to DR Rhys Clark and anethasist , five star service ,\n\nlast year my wife had a knee replacement with Dr clark and she was super impressed with the service , so i decided to see him for my knee replacement and once again he went above and beyond both from his bed side manner and after care ,therefore i would highly recommend him to any person needing to see an orthopaedic surgeon"
      },
      {
        "id": "rhys-clark-peter-lim",
        "author": "Peter Lim",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "rhys-clark",
        "text": "Apart from being a surgeon who leaves a neat job done on my knee, his manners and modesty is impeccable. My whole hearted thanks to you Dr. Rhys Clark."
      },
      {
        "id": "rhys-clark-beverley-davidson",
        "author": "Beverley Davidson",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "rhys-clark",
        "text": "Is an amazing surgeon. Cannot see the scaring. I highly recommend him"
      },
      {
        "id": "rhys-clark-nicolle-randall",
        "author": "Nicolle Randall",
        "rating": 5,
        "date": "2022-10-09",
        "listing": "rhys-clark",
        "text": "I have been seeing Rhys for 2 years regarding Right Hip pain and we decided that 2022 was the right time to do a Total Hip Replacement after trying many options to make the pain livable. During the last 2 years Rhys and his team have been fantastic, professional and helpful to assist my unique journey. I had my THR 2 weeks ago and it has been the best decision as the pain I was feeling has gone. Leading up to they surgery I was a tad nervous but the entire process was seamless, the staff at the hospital and anesthetist all contributed to calming the nerves. I was in hospital for 2 nights and after coming home I was only on crutches for 1 week and at my 2 week follow up I am completely free of crutches! I'm amazed at how quick I am up and walking again. Rhys takes the time to check in on you whilst your recovering at home which is so reassuring knowing he is only a text/call away if you need him. Due to my unique journey Rhys has to have me as a patient for a bit longer yet but all I can say is, Thank you for giving me a new lease on life. I am only 46 and work full time, have 2 kids under 10 and I am super active so being able to walk and stand pain free is absolutely brilliant. So, if you need any Orthopaedic surgeon my advise to you is ...pick up the phone and book in to see Rhys today. I can't recommend him higher!"
      },
      {
        "id": "rhys-clark-paul-dooley",
        "author": "Paul Dooley",
        "rating": 5,
        "date": "2022-10-09",
        "listing": "rhys-clark",
        "text": "My wife was in real pain. Hip injections just didn't work. After speaking to her GP, my wife went to see Dr. Rhys Clark. What a kind and understanding man! A new x-ray revealed that my wife needed urgent surgery. In spite of his very busy schedule, Dr. Clark operated on my wife on a Saturday. Right after the surgery, she stood up. The next day, after only one night in hospital, she was walking with one crutch and was able to go home. It's been four weeks now and my wife is walking really well and doesn't need the crutch anymore around the home. In fact, I have to tell her to 'slow down'. She hasn't needed any pain killers for two weeks. Wow! From total pain to no pain! What an amazing transformation. If you, like my wife, are in pain and need a hip replacement - don't wait! See Dr. Rhys Clark - he'll have you walking again within a few hours!"
      },
      {
        "id": "rhys-clark-helen-davies",
        "author": "Helen Davies",
        "rating": 5,
        "date": "2022-10-09",
        "listing": "rhys-clark",
        "text": "Where do I start. Dr Clark and his wonderful team are so professional. I recently had a total knee replacement with Dr Clark and could not be happier. Within days I was not experiencing much pain and as I am highly allergic to all pain killers and opiates was only on Panadol I was amazed. I have barely a scar and my progress is amazing. I was not out of pocket after my fund with my anaesthetic or Dr Clark and was quoted $1500 out of pocket with another specialist. Dr Clark visits Mandurah ever 2 weeks which was also a help. Linda his practise manager is so helpful also. All I can say is if you need a hip or knee operation he is the go to orthopaedic specialist. Very happy patient"
      },
      {
        "id": "rhys-clark-david-kindred",
        "author": "David Kindred",
        "rating": 5,
        "date": "2022-10-09",
        "listing": "rhys-clark",
        "text": "I extend my utmost appreciation to Dr Rhys Clark who performed a anterior full left hip replacement for me. Having had an MRI which revealed significant osteo-arthritus in my left hip I contacted Dr Clark at StJohn of God Murdoch whose credentials I had read and his experience on the anterior hip replacement method encouraged me to utilise his skills. I underwent the surgery on the 19th July 2021 and had my final follow up appointment today. 16th October some 12 weeks later. I had 10 days rehab at Attadale Private Hospital. I arrived home following that stay and not once did I need to use the crutches, walking stick or rollater from that day. I was aware of the fact the risk of falling was always at the back of my mind however I was confident and patient in my movements and these aids I felt at ease not using them. Would be different to others with more complications than mine. The most important part of my rehab was ensuing all exercises prescribed were facilitated as best I could without shirking the issue. Over the 12 weeks I built up strength in my calf, hamstring muscles etc that were required to support my new hip etc. Also it was important to take all the prescribed 💊 medications for relief of pain associated with the surgery. I am now walking the best I have done for years and things like putting socks on and picking things up off the floor are now able to be done with ease. I thank Dr Clark and all his capable staff for giving me a new lease of life at 75 and have no hesitation in recommending him for any consultation on hips or surgery that may be recommended to follow. David Kindred Mandurah WA"
      },
      {
        "id": "rhys-clark-astro",
        "author": "Astro",
        "rating": 5,
        "date": "2021-10-09",
        "listing": "rhys-clark",
        "text": "A wonderful surgeon with a highly professional team!"
      }
    ]
  },
  "peter-dalessandro": {
    "listings": [
      {
        "key": "peter-dalessandro",
        "name": "A/Prof Peter D’Alessandro",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010, Australia",
        "rating": 4.5,
        "reviewCount": 22,
        "url": "https://share.google/VKE8wkD21qXqfNMdq",
        "primary": true
      }
    ],
    "reviews": [
      {
        "id": "peter-dalessandro-david-ferguson",
        "author": "David Ferguson",
        "rating": 5,
        "date": "2026-07-09",
        "listing": "peter-dalessandro",
        "text": "Saw Peter with a frozen knee due to a bucket handle tear almost four years ago. I really appreciated the information provided on his webpage prior to surgery, and the time he took to explain the procedure. The op went well, he found me a great physio near my place for recovery, and he gave me the advice I needed to avoid future interventions. Made it to my hundredth Parkrun today..."
      },
      {
        "id": "peter-dalessandro-jacqui-needham",
        "author": "Jacqui Needham",
        "rating": 5,
        "date": "2026-03-09",
        "listing": "peter-dalessandro",
        "text": "I am currently 6 weeks out from meniscus surgery with Dr Peter D’Alessandro, and my recovery has been seamless. It was always going to be Pete that I trusted above anyone else to fix my knee injury, based on the positive outcomes I have had from previous surgeries with him. He truly understands how much I value sport for both my physical and mental health.\n\nEven though he’s renowned for treating high-profile athletes, he never made me feel like \"just\" a broken patient in my 50s. My movement goals and love of sport were clearly just as important to him as anyone else’s. Because of that, he went above and beyond to preserve as much of my meniscus as possible, which had me up and about and meeting all my rehab targets in great time.\n\nThe communication between Pete, myself and my physiotherapist has been completely in sync the whole time. Even down to his pre-op letter, outlining my options and procedure details, which ended with the genuine offer to reach out if I had any questions or concerns. Before the operation, I did have few last-minute questions, and he got back to me straight away. Knowing he was that available and present with my case, was incredibly reassuring and showed how invested he is in patient care.\n\nFollowing on from Pete’s incredible expertise with my surgery and guiding my physiotherapist in my rehab, I’m so excited to be doing the work and feeling strong heading into the upcoming hockey season. I can’t thank Pete and his Coastal Orthopedics team enough for the exceptional care I have received throughout this entire process.\n\nReview from 2021:\n\nI would like to acknowledge the exceptional care I received from Dr Peter D'Alessandro and the team at Coastal Orthopaedics. My three surgical experiences with Dr D’Alessandro have proven him to be a highly skilled, compassionate doctor, whose excellent surgical knowledge is matched by his post-operative follow up, clinical care and compassionate manner.\n\nI suffered an ACL rupture playing netball and after consultation with Dr D'Alessandro, I had ACLR surgery which was a complete success. My recovery went smoothly and I reached all of my milestones and goals.\n\nUnfortunately a few weeks after surgery, a traumatic workplace incident to my surgical knee caused complications. I was in a great deal of pain and upset that I had re-injured my knee. Dr D’Alessandro didn’t hesitate to see me immediately, reassure me and operate a second time, to repair the damage. Luckily my ACL was still intact. Post-operative care was exceptional and even though this was a huge setback to my ACL rehab, I never once felt on my own during my recovery. He was always present and available through emails and phone calls to answer any questions or concerns.\n\nAfter intense physiotherapy, continual follow ups and close monitoring of my progress he could see I was still struggling with flexion and extension. Scar tissue had set in and even though there were risks of more scar tissue returning, being best possible outcome driven, he offered me a third surgery MUA to regain my range of motion. This last surgery gave me my mobility and my life back.\n\nHis strong belief in a better outcome for me, has inspired me to work hard with my rehab, to achieve my movement goals, to the point where I am fitter and stronger than I have been for 20 years. I am forever grateful to him for making that happen. His encouragement and positivity has helped me stay focused on getting back to my active lifestyle and overcome any setback.\n\nIt’s not just his expertise of fixing my knee or the complexity of my surgeries– it’s much more. Dr D’Alessandro has been completely invested in all aspects of my health, well-being and lengthy recovery. His high level of professionalism and close monitoring builds complete trust and his genuine holistic care, strives to heal both the body and mind.\n\nThank you for your exceptional care!"
      },
      {
        "id": "peter-dalessandro-ellie-clark",
        "author": "Ellie Clark",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "peter-dalessandro",
        "text": "A huge thank you to Dr Pete De'Alessandro and his team! After rupturing three ligaments in my knee and fracturing my tibia, Pete performed a multi-ligament knee reconstruction. From the very beginning, both Pete and Jo were incredibly professional, supportive, and easy to talk to. They made a really tough time feel much more manageable. Less than a year later I have regained the strength in my leg and I'm back running and playing golf again. I’m so grateful for their care and expertise!"
      },
      {
        "id": "peter-dalessandro-clare-groarke",
        "author": "Clare Groarke",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "peter-dalessandro",
        "text": "Dr D’Alessandro operated on my shoulder four and a half years ago and was nothing but professional. My surgery and recovery was a total success. Unfortunately in May “24” I had a work place incident resulting in a complete meniscus tear. Dr D’Alessandro and his team were outstanding,Bronwyn was amazing in organising an MRI and fitting me in to see the Professor. I have nothing but praise and gratitude for Peter and his team.\n\nGerry Groarke"
      },
      {
        "id": "peter-dalessandro-angela-gray",
        "author": "Angela Gray",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "peter-dalessandro",
        "text": "We can't thank Pete enough for his care and expertise. We were referred to Pete by another surgeon, and his knowledge and experience with Osteochondritis Dissecans is world class. Thank you Pete."
      },
      {
        "id": "peter-dalessandro-juanito-ryder",
        "author": "Juanito ryder",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "peter-dalessandro",
        "text": "I had completely torn off my acl and pcl and countless other things damaged in my knee the future looked very grim, i had been told not many surgeons would be willing to take this on because of the complexity of it, that’s where dr Peter d’alessandro and his team stepped in, long story short it’s now been 5 months since the surgery and I am living a normal life having nearly fully recovered I can’t thank him and his team enough"
      },
      {
        "id": "peter-dalessandro-jimmy-christie",
        "author": "Jimmy Christie",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "peter-dalessandro",
        "text": "Amazing surgeon- Thanks for the diligence and expertise!"
      },
      {
        "id": "peter-dalessandro-george-miliovski",
        "author": "George Miliovski",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "peter-dalessandro",
        "text": "I've had an amazing experience with Dr Peter D'Alessandro. I'm at 5 month post Shoulder Stabilization and Remplissage and my shoulder is significantly more stable than before the surgery. I'm not worried about dislocations when it's in vulnerable positions and my mobility and strength are almost fully back. Way more satisfied than expected thanks to Pete's amazing surgeon skills, and great Physio recommendations. I would recommend Pete to anyone that's on the fence about getting this surgery."
      },
      {
        "id": "peter-dalessandro-daele-dobson",
        "author": "Daele Dobson",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "peter-dalessandro",
        "text": "Completed ACL repair surgeries to both knees for my son to allow a successful return to sport. Shows genuine care, fantastic bed-side manner, great communicator and has excellent networks to assist recovery. Highly recommend"
      },
      {
        "id": "peter-dalessandro-jason-walker",
        "author": "Jason Walker",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "peter-dalessandro",
        "text": "Outstanding care with Pete. Explains everything in easy to understand terminology and really cares about the best result for your patient. A great marker for Pete is everyone you talk to that has dealt with him does nothing but rave about him. It should definitely be your first port of call."
      },
      {
        "id": "peter-dalessandro-david-garland",
        "author": "David Garland",
        "rating": 5,
        "date": "2021-10-09",
        "listing": "peter-dalessandro",
        "text": "I tore my left pec (musculotendinous junction) in late may this year while bench pressing.\n\nI then started researching the internet for pec tear specialists and found a number of very good reviews of Peter D'Alessandro from Coastal Orthopaedics and how he had carried out successful repairs for this difficult injury.I met with Peter shortly afterwards and was very impressed with his experience and his passion in getting you back to doing the activities and sports you enjoy. Peter recommended surgery to repair my pec,which he carried out early june this year.\n\nI can not thank Peter enough for the surgery he performed ,currently i am gradually returning back to lifting weights and other sports and getting phiso to get back full range of motion. Also i am an older guy and very active. Peter has given me back my mobility.\n\nOne of the reasons i wanted to write this review, is so others with pec tears can locate Peter as i was able to do after researching the internet.\n\nKind Regards\n\nDave"
      },
      {
        "id": "peter-dalessandro-kim-bianchini",
        "author": "Kim Bianchini",
        "rating": 1,
        "date": "2021-10-09",
        "listing": "peter-dalessandro",
        "text": "I had an appointment which was made 6 months ago. I waited 1 hour in the reception area, moved to the doctors room only to wait another 1/2 hour. There was no explanation of where the doctor was . Further investigation found he was in surgery, whilst I was waiting in the waiting room I did notice Peter strolling past me , which I may add was half an hour after my proposed appointment. I have never felt so worthless. Thought that I may have got a call from the surgery to try and reschedule. … I obviously am not an important enough patient to be seen. So disappointed and saddened. Not sure what to do from here as my referral came from my surgeon which will now take several months to get an appointment with him to get another referral…, 😔😔😔😔"
      },
      {
        "id": "peter-dalessandro-s-mason",
        "author": "S Mason",
        "rating": 5,
        "date": "2021-10-09",
        "listing": "peter-dalessandro",
        "text": "I had a knee replacement with Coastal Orthapaedics My surgeon was Dr Perth D’Alessandro. He is a kind, compassionate person and a brilliant surgeon. I am thrilled with the results and this operation has restored my confidence."
      },
      {
        "id": "peter-dalessandro-stefan-del-pizzo",
        "author": "Stefan Del Pizzo",
        "rating": 5,
        "date": "2019-10-09",
        "listing": "peter-dalessandro",
        "text": "I am not able to recommend Peter D'Alessandro and the Coastal Orthopaedics team enough.\n\nAfter seeing him you will always feel like you are completely informed with what is required always makes sure his patients are at ease.\n\nPeter is also always happy take time out of his busy schedule to answer questions or assist. In my opinion there is no other orthopaedic surgeon I would trust more."
      },
      {
        "id": "peter-dalessandro-lost-and-found",
        "author": "Lost And Found",
        "rating": 5,
        "date": "2019-10-09",
        "listing": "peter-dalessandro",
        "text": "As a case, I was complicated, I FIFO Internationally, short periods off, and carried rotator cuff tendon damage to both shoulders over 10 years, perhaps longer as 01 had separated completely.\n\nI selected Dr. Peter through his positive reviews, his willingness to first consult by SKYPE which was a major bonus since I was in Russia, scheduling to support my rotations and the fees meeting HBF schedule.\n\n2 operations over 15 months, 01st major as the original tendon on 01 shoulder had retracted so far into my back it could not be recovered.\n\nDr. Peter solution to the lost tendon was innovative and an excellent result (frankly better than the standard solution applied to the other shoulder).\n\n6 months after the 02nd operation I have no pain in either shoulder, full flexibility in the 01st major tear, and 85% improving in the other.\n\nSo good, I recommend a rotator-cuff tear just to have Dr. Peter fix it ......... great professional, great guy.\n\nGrant j Wilson"
      },
      {
        "id": "peter-dalessandro-tim-edgar",
        "author": "Tim Edgar",
        "rating": 5,
        "date": "2019-10-09",
        "listing": "peter-dalessandro",
        "text": "Doctor D’Alessandro gave me excellent advice and showed extraordinary care when I my badly injured my knee in a cycling accident. I am now recovered and am very grateful to him."
      },
      {
        "id": "peter-dalessandro-limp-biscuit",
        "author": "Limp Biscuit",
        "rating": 5,
        "date": "2018-10-09",
        "listing": "peter-dalessandro",
        "text": "Following a near fatal motorcycle accident in 2015, I have undergone multiple operations including a total hip replacement and spinal surgery. These procedures were performed by different surgeons at different hospitals around Perth.\n\nMost recently I was referred to Dr Peter D’Alessandro as he specialises in ligament repair etc. I was advised that I would require multi ligament knee reconstruction (all 4 ligaments!) which is quite a large procedure, so I’ve learned.\n\nIt has been a long healing process, made even longer by a femur break (after a fall) 1/2 way through recovery but as I heal it is becoming more and more apparent what an amazing job Peter has done. Dr D’Alessandro has been absolutely fantastic from the beginning. He is a very pleasant down to earth guy that is extremely knowledgeable in his field. He made me feel comfortable while being totally honest about the risks associated with such a procedure. As I mentioned above, I am no stranger to the operating theatre and can honestly say, I would have absolutely no hesitation in recommending Peter to anybody that is considering utilising his service. I cannot speak highly enough about him.\n\nThank you for fixing what seemed like an unfixable knee, Peter. I am extremely greatful!\n\nRegards,\n\nSteve. B."
      },
      {
        "id": "peter-dalessandro-jake-opperman",
        "author": "Jake Opperman",
        "rating": 5,
        "date": "2018-10-09",
        "listing": "peter-dalessandro",
        "text": "I do powerlifting and gym is my life,\n\nI tore my right pectorial muscle off the lateral head attachment and dr Peter D’Alessandro was willing to operate and fix it for me he explained it might be a dificult operation and he cant garantee anything but if it all goes to plan he said that i would be likely to have a full recovery and that i should be just as strong as i was before (bare in mind mine was a special case as my muscle ripped of my tendon which is very dificult to fix, it wasnt just a tore tendon.)\n\n10 weeks down the track, i got full range of motions back, no pain, feel 110 % and even the cut he made to do the operation is neat, small, straight and hidden under the singlet line..\n\nI cant thank him enough, one thing il add aswell: obviously operations are scary and i might have been 5000 times more scared then other people but he took this into consideration and put me to sleep before they moved me onto the surgical bed etc which made me feel alot less scared.\n\nId recomend Dr Peter D’Alessandro to anyone but aspecialy if you need your body to function at peak again.\n\nThanks You Dr :)"
      },
      {
        "id": "peter-dalessandro-joseph-martino",
        "author": "Joseph Martino",
        "rating": 5,
        "date": "2018-10-09",
        "listing": "peter-dalessandro",
        "text": "After consultation with Dr. Peter D'Alessandro, he was able to understand my concerns very well and rather than rush to surgery he was able to solve my problem due to therapy prescribed by Dr. Peter D'Alessandro.\n\nThis was quite a big relieve that he took the time to seek alternative ways to resolve my problem\n\nThanks Peter\n\nKindest Regards."
      },
      {
        "id": "peter-dalessandro-chloe-theodore-s",
        "author": "Chloe Theodore S",
        "rating": 1,
        "date": "2018-10-09",
        "listing": "peter-dalessandro",
        "text": "Extremely poor surgeon with poor ethics. My father had a broken arm and he refused to see my father."
      },
      {
        "id": "peter-dalessandro-dragan-miljevic",
        "author": "Dragan Miljevic",
        "rating": 5,
        "date": "2017-10-09",
        "listing": "peter-dalessandro",
        "text": "I was diagnosed with a torn left pectoral last August as a result of bench pressing a heavy load without warming up.\n\nPrior to meeting Dr D'Alessandro I was originally told that due to the location and type of tear (sternal muscle head & tendon) surgery would not be an option.\n\nThen I met Dr D'Alessandro and explained my situation to him. He examined the tear and after a few questions and some thought, decided he was prepared to book me in for surgery. He booked me in for 2 weeks later however explained there was a 50% chance things may not go as planned, making me sign a dislaimer to acknowledge that the end result may be an 'exploration' without any actual repair being done.\n\nEverything went as planned however and he really couldn't have done a better job. While the first few months were tough, Dr D'Alessandro referred me to a fantastic physio by the name of Scott Garvey and 9 months later I've regained all range of motion. I've also regained nearly all strength and size, and am heading towards a full recovery in the next 3 months.\n\nI couldn't thank Dr D'Alessandro enough for what he's done, as without him I'm very doubtful things would've turned out the way they did. I know where I'll be sending anyone I know if they ever need orthopaedic surgery.\n\nDragan"
      }
    ]
  },
  "riaz-jk-khan": {
    "listings": [
      {
        "key": "riaz-khan",
        "name": "RIAZ JK KHAN",
        "address": "Hollywood Medical Centre, 85 Monash Ave, Nedlands WA 6009, Australia",
        "rating": 4.6,
        "reviewCount": 23,
        "url": "https://share.google/e7aRws1SzMquOnngW",
        "primary": true
      },
      {
        "key": "joint-studio",
        "name": "The Joint Studio",
        "address": "Suite 1/85 Monash Ave, Nedlands WA 6009, Australia",
        "rating": 5,
        "reviewCount": 78,
        "url": "https://maps.google.com/?cid=9899099098364151033",
        "primary": false
      }
    ],
    "reviews": [
      {
        "id": "joint-studio-peter-dickerson",
        "author": "Peter Dickerson",
        "rating": 5,
        "date": "2026-09-09",
        "listing": "joint-studio",
        "text": "Riaz executed and managed my hip replacement perfectly. I am so happy with how well everything went. I do highly recommend Riaz and The Joint Studio team."
      },
      {
        "id": "joint-studio-tricia-guthrie",
        "author": "Tricia Guthrie",
        "rating": 5,
        "date": "2026-08-09",
        "listing": "joint-studio",
        "text": "This was my second total knee replacement with Prof Khan and as usual it all went smoothly, even though I have had this procedure before I really appreciated the daily information before and after surgery. Prof Khan is very easy to talk to and freely gives you his time as does the rest of his team. Highly recommend."
      },
      {
        "id": "joint-studio-jenny-pickett",
        "author": "Jenny Pickett",
        "rating": 5,
        "date": "2026-08-09",
        "listing": "joint-studio",
        "text": "I had the best experience with having my knee done by Dr Khan and the office ladies explained everything very thoroughly as well. The office at the hospital is easy to get to. He explained everything that I needed to know about the operation and I was in excruciating pain the day I went in for the operation. I have not looked back and wished I had it done years earlier."
      },
      {
        "id": "joint-studio-natalie-v",
        "author": "Natalie V",
        "rating": 5,
        "date": "2026-08-09",
        "listing": "joint-studio",
        "text": "Initial 'time poor' hesitancy led to delayed knee replacement and reduced quality & quantity of participation in 'life activities', but I am now so very thankful for Professor Khan's suggestions, subsequent surgery and genuine joy at having a 'straight leg' after so many years. Initial progress was slow, but I am now so very thankful for my life changing 'bionic knee'-coupled with a great physio'.... Still a work in progress. Sincere thanks."
      },
      {
        "id": "joint-studio-matt-glyzewski",
        "author": "MATT Glyzewski",
        "rating": 5,
        "date": "2026-07-09",
        "listing": "joint-studio",
        "text": "Professor Riaz Khan is a true professional & is supported by a first class team. I recently had both my hips replaced at the same time & am feeling great now compared to prior to the surgery. Thanks again"
      },
      {
        "id": "joint-studio-gwenda-giraudo",
        "author": "Gwenda Giraudo",
        "rating": 5,
        "date": "2026-07-09",
        "listing": "joint-studio",
        "text": "I'm 87 yrs old and had much trepidation about having a Hip Replacement. But with expert skills of Professor Khan and his thorough and friendly explanation of the procedure everything went perfectly. Went home with no pain and was walking unaided in under two weeks. Would totally recommend Professor Khan to anyone requiring Orthopaedic Surgery. Gwenda Giraudo"
      },
      {
        "id": "joint-studio-jenny-gregory",
        "author": "Jenny Gregory",
        "rating": 5,
        "date": "2026-07-09",
        "listing": "joint-studio",
        "text": "I have had a L hip revision, a R hip replacement and a L knee replacement undertaken by Riaz Khan. In each case the pre op, operation, and post op treatment were excellent and he and his team are expert, helpful and caring. Highly recommended."
      },
      {
        "id": "joint-studio-barry-potter",
        "author": "Barry Potter",
        "rating": 5,
        "date": "2026-06-09",
        "listing": "joint-studio",
        "text": "Over a two year period I had both knee joints replaced, I can’t say the months after each replacement was enjoyable far from it. What I can say is it is well worth it, I’m back golfing riding my bike and living pretty much pain free for the first time in ten years. The team at the Joint Studio have been very helpful professional and lovely to deal with. Professor Raiz is amazing his energy and enthusiasm makes you feel safe that all will be well, not to mention his a bloody good surgeon. Thanks Team its life changing Barry Potter"
      },
      {
        "id": "joint-studio-peter-gardiner",
        "author": "Peter Gardiner",
        "rating": 5,
        "date": "2026-06-09",
        "listing": "joint-studio",
        "text": "Professor Riaz is absolute class of a surgeon and person, performed a full knee replacement on me and my recovery is going well, wonderful, professional man with precision skills and actually cares about his patients. thank you for your skills and support."
      },
      {
        "id": "joint-studio-kevin-sleight",
        "author": "Kevin Sleight",
        "rating": 5,
        "date": "2026-03-09",
        "listing": "joint-studio",
        "text": "The total experience with the team at The Joint Studio was \"excellent\". Professor Khan made me feel totally at ease from the first time I met with him and throughtout the surgery and aftercare. I highly recommend this practice."
      },
      {
        "id": "joint-studio-john-hilhorst",
        "author": "John Hilhorst",
        "rating": 5,
        "date": "2026-02-09",
        "listing": "joint-studio",
        "text": "Dr Riaz Khan replaced my right hip 3 months ago. Apart from being a top-notch orthopaedic surgeon, Dr Riaz is a wonderful man, easy to talk to, very knowledgeable, very thorough and overall an absolute pleasure to deal with. I will soon be needing knee surgery and after dealing with Dr Riaz I wouldn’t consider going to anyone else. Highly recommended."
      },
      {
        "id": "joint-studio-robin-stott",
        "author": "Robin Stott",
        "rating": 5,
        "date": "2025-11-09",
        "listing": "joint-studio",
        "text": "Very caring and understanding of needs is dear Riaz and his staff. This was my second knee replacement (left) by Riaz and he realised that the first one (right), even though 9 years old, was/is exactly the same as the new one. The daily messages were very encouraging and motivating. Thank you for them."
      },
      {
        "id": "riaz-khan-luxury-addict-65",
        "author": "Luxury -addict 65",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "riaz-khan",
        "text": "Dr Riaz khan I’ve never met anyone like him so kind compassionate ready to help me and he did he’s a man that has being brought up correctly he’s manners impeccable he makes u feel like you really are important where other drs fail .i won’t forget he’s kindness obviously we don’t ever really know our drs in life but he was so realistic and helped in every way making it all about you’re needs I feel like god sent him to me to get my legs sorted .and I’m grateful everyday for dr Riaz khan he a wonderful human"
      },
      {
        "id": "joint-studio-tania-millar",
        "author": "Tania Millar",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "I’m extremely happy with my knee replacement and can’t express my thanks enough to Rhiaz and his team for doing such a great job. Both my sisters have had knee replacements and I was very anxious about going through the procedure but I feel very lucky as my experience was totally different I had very little to no pain and recovery went well, I was up and walking without crutches in 3 weeks but I must say physiotherapy is important and you have to be patient (I certainly had my moments) but 3 months on I’m not limping and able to walk my dogs without pain - life changing experience. I would recommend Prof Khan to anyone who asks"
      },
      {
        "id": "joint-studio-jackie-daw",
        "author": "Jackie Daw",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "The Joint Studio were brilliant. Riaz did an amazing total knee replacement for me, and if you follow the instructions post op, you get the best outcome! Thank you. I would also like to thank the reception staff, who were so helpful at every stage, and answered my queries quickly and nothing was too much trouble. Thank you all."
      },
      {
        "id": "joint-studio-clare",
        "author": "Clare",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "I recently had a total hip replacement performed by Riaz Khan . His communication is both professional and kind and understanding. I always felt he had time for me , answering all my questions and putting me at ease. He has an excellent team around him and they all performed their roles to the highest standards. As a result my experience was very straightforward, virtually pain free and my recovery has been rapid. I highly recommend him and will not hesitate to use his services again if required."
      },
      {
        "id": "joint-studio-terry-walton",
        "author": "Terry Walton",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "What an amazing experience, what an amazing surgeon. I did not think it would be possible to undergo major surgery without significant apprehension but Riaz put me at ease from the very first consultation and gave me complete confidence in his ability to reconstruct my knees. He has put together a team of first class professionals who got me back on my feet within a few weeks and I am now enjoying walking again - something I had almost forgotten. I would unreservedly recommend Riaz Khan and the Joint Studio team to anyone who is thinking of undergoing knee surgery."
      },
      {
        "id": "joint-studio-mark-rae",
        "author": "Mark Rae",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "Riaz and the team were amazing from my first appointment onwards. After being missed diagnosed by other orthopaedic surgeons for approx 4years, telling me it was my knee and I need a knee replacement. Riaz diagnosed me as I need a hip replacement not a knee replacement. I owe so much to him and his team for helping me through this and getting my life back on track. Everything was so smooth from pre surgery to my recovery. I can’t Thankyou enough. Cheers Mark"
      },
      {
        "id": "joint-studio-selina-mcarthur",
        "author": "SELINA MCARTHUR",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "My referral to the Joint Studio, I met with Prof Riaz Khan was back in Sept 2024 but due to my medical insurance this cover didn’t kick in until May 2025 so i soldiered on at work with my bone on bone left hip awaiting a hip replacement & the time frame. Prior to the date coming up I again met with Prof Riaz Khan to arrange date of operation and his reassurance on the procedure and what to expect after, due to suffering all this time was that it couldn’t of come fast enough. From admission to hospital, entering theatre and recovery, all went smoothly. My expectation was next level, from the referred doctor looking after me on daily checkups to seeing Prof Riaz Khan daily was so reassuring of my recovery. Even the little things like contacting admin at the Joint Studio, I found them very helpful with any questions I needed answering. Thank you Ladies and a big shout out to the Joint Studio as of today 7 weeks after my Orthopaedic Journey I am back at work on full duties."
      },
      {
        "id": "joint-studio-stephen-guest",
        "author": "Stephen Guest",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "From the very first consultation through to surgery and post-operative care, Professor Riaz Khan and his team were exceptional. Their expertise, professionalism, and compassionate approach made every step of the process seamless. I couldn’t recommend Professor Khan and his team highly enough—truly outstanding care."
      },
      {
        "id": "joint-studio-nigel-harding",
        "author": "Nigel Harding",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "My name is Nigel Harding and I recently had a TKR of my right knee on the 27th of March 2025. This is my second TKR as Riaz performed the surgery on my left knee in 2019. The main difference between the first and this TKR is the fact that you are encouraged to rest the knee and do gentle exrecises. I was walikng without cructches 3.5 weeks post op. It is now nearly 9 weeks post op and yes I do get some pain still (not too bad), but the recovery is a marathon, not a sprint. I must say this, it is a total package of care you are given by the whole team at The Joint Studio, from the first time you hobble in, to when you walk out after your post op appoinment with Riaz. I love my music and I think the lines below from a Beatles song, best sum up my TKR journey. Roll up roll up for the Mystery Tour The Magical Mystery Tour Is waiting to take you away Waiting to take you away. Thank you Riaz and all your wonderful team, I can't thank you enough."
      },
      {
        "id": "joint-studio-brian-green",
        "author": "Brian Green",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "Professor Riaz Khan performed a full right knee replacement 21/11/2024. I am very pleased with the result and very impressed by the professional standards displayed. Treatment was with high care, understanding and encouragement. A very professional team. I may have waited too long in putting up with my old knee. Yours (not limping) Brian."
      },
      {
        "id": "joint-studio-andrew-lynch",
        "author": "andrew lynch",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "I have know Riaz professional and personally for over 16 years, having countless surgeries over the years due to a long sporting career and work, l think first surgery was a double knee clean out back in 2012 going on to having 5 more over the years, then 2019 first big surgery of a hip replacement and 3 months later full knee replacement, recovery wasn't easy but final outcome was excellent, and recently in march 2024 had another hip and full knee replacement done together this time, having gone through 2 hip and 2 full knee replacements first time separately and 2nd time both together l would recommend getting both together. Looking forward to getting back on the golf soon.\n\nI could not recommend Riaz and his staff highly enough, caring, sincere , helpful, trusting and an outstanding surgeon.\n\nFollow up l was back playing golf in July, 4 months after surgery l found recovery easier 2nd time around, for those undecided if you should have a replacement or put it off, get it done sooner"
      },
      {
        "id": "joint-studio-peter-linehan",
        "author": "Peter Linehan",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "Could not imagine things working out better. Had my left hip replaced, I was pretty much reliant on walking aids, fair bit of pain involved, couldn't work. Pre-op care was great, surgery was a breeze, obviously a bit of discomfort in the recovery weeks, but Riaz and his staff were always available for a chat if I had questions. Would, and have, personally recommend Riaz if you're need a new hip. Don't put it off, you won't know yourself a few weeks later."
      },
      {
        "id": "joint-studio-bernadette-pilkington",
        "author": "Bernadette Pilkington",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "Dr Riaz Khan is a very empathetic, professional and skilled surgeon. I was back playing lawn bowls within 6weeks. You could not be in better hands. I would thoroughly recommend the Joint Studio to look after you in all respects."
      },
      {
        "id": "joint-studio-chris",
        "author": "Chris",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "I had a knee replacement last year and Riaz and his colleagues from the Joint Studio were brilliant. Everyone was really helpful, nothing was too much trouble and Prof Riaz is so passionate about what he does. The pain management was excellent throughout. Thank you"
      },
      {
        "id": "joint-studio-julie-norton",
        "author": "Julie Norton",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "Riaz Khan is an excellent orthopaedic surgeon. The help and personalised services provided by Riaz and his team was excellent. Pre and post operative care was ongoing and simply the best! I have had both hip replacements done by Riaz Khan, his bedside manner is incredibly caring, the follow up appointments informative and helpful, impossible to fault. I would very highly recommend Riaz to all."
      },
      {
        "id": "joint-studio-david-joske",
        "author": "David Joske",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "I was a little worried going into a knee replacement, as the results aren't guaranteed as with a hip. But I am delighted with the operation, the post-op care and the result (9 weeks out). I am walking far better than pre-op. Have done two hillly 4km walks this week. Dr Khan calling my wife immediately after the op was really appreciated and he has done a great job."
      },
      {
        "id": "joint-studio-matt-moore",
        "author": "Matt Moore",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "I went in for a right knee replacement. Can say the service provided by all at the Joint Studio from the ladies at the front desk all the way to Dr Riaz, and the pain management team has been nothing short of extraordinary. 6 weeks after surgery, I am walking as per normal. My pain is minimal and really more of a discomfort than anything. If you need a knee or hip done, I would recommend the Joint Studio hands down. Thank Dr All the best Matt"
      },
      {
        "id": "joint-studio-debbie-dowden",
        "author": "Debbie Dowden",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "Thanks Riaz and team, I had a trouble free operation and a textbook recovery. I was well looked after well before and after the surgery. I'm so pleased I had my total knee replacement done with the Joint Studio team."
      },
      {
        "id": "joint-studio-trevor-thompson",
        "author": "Trevor Thompson",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "I had a knee reconstruction by the team at Joint Studio. The whole process from start to finish was very professional with excellent results. I would recommend anyone considering a joint reconstruction or replacement to make an appointment with Professor Riaz Khan."
      },
      {
        "id": "joint-studio-scott-pavy",
        "author": "Scott Pavy",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "Excellent service . Riaz is a fantastic surgeon and has helped with my knee issues to the point that I travel to Perth from my east coast home to have my surgery. Thanks for everything."
      },
      {
        "id": "joint-studio-sylvia-baatard",
        "author": "Sylvia Baatard",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "Professor Riaz Khan and the team at The joint Studio are highly professional, supportive, understanding, and thorough. I totally recommend them. Thank you!"
      },
      {
        "id": "joint-studio-terry-healy",
        "author": "Terry Healy",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "Fantastic skill and knowledge. Ready for my third procedure with Riaz, and couldn't think of a better Team to carry it out."
      },
      {
        "id": "joint-studio-angelina-calver",
        "author": "Angelina Calver",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "Professor Khan and his team from the Joint Studio have been amazing to deal with, they are very friendly and their follow up service is excellent would highly recommend them to anyone require this type of surgery"
      },
      {
        "id": "joint-studio-philipp-lamprecht",
        "author": "Philipp Lamprecht",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "joint-studio",
        "text": "Dr Khan is an excellent surgeon, can't thank him enough for fixing my knee! I was back on the court two weeks later :)"
      },
      {
        "id": "riaz-khan-suzi-baker",
        "author": "Suzi Baker",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "riaz-khan",
        "text": "I would like to express my gratitude for the fantastic experience by Eleni (your receptionist) call to your rooms. From the first call, I was advised by Eleni, that she would call me back with an appointment day and time. I was very cynical as the medical field now is so challenging for everyone in the Medical Industry, and is full of promises and no delivery. I must say this is the VERY FIRST TIME that a receptionist has promised a call and delivered, so I would like to say thank you for choosing such amazing professionals to complement your business. As I was waiting for the Surgery Coordinator (Sheridan), I could not help notice the way that Eleni spoke to each and every one of your patients as I was waiting, was absolutely beautiful as many of them were elderly and I am sure she would have made their day, as each patient was made to feel that he was the only important person. Then I met your hospital Sheridan (Hospital Coordinator) which only complimented Professor Khan and Eleni. Sheridan’s soft, precise and gentle nature makes you feel at ease, from start to finish everything was explained in extremely precise detail and nothing left to question or query after I had left, and again this is also a first. As a real estate professional, communication and client service is essential. Congratulations on a fantastic experience yesterday and special thanks to Eleni and Sheridan which was the icing on the cake. Leadership comes from the top Professor Khan, and from this experience I would have no hesitation in recommending your surgery as I know that I will be well looked after and cared for emotionally and physically. I feel that I was a very lucky patient to be referred to this practice. Thank you Suzi Baker"
      },
      {
        "id": "riaz-khan-chez-canning",
        "author": "Chez Canning",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "riaz-khan",
        "text": "My husband Ross had a partial knee replacement. Instant relief and a very quick recovery time. Prof Riaz Khan was wonderful from Ross’s first apt mid July this year to his 6 week checkup end September. 3nights in hospital and off crutches in 3-4weeks with minimal pain and very light medication for sleeping. A big thank you to you and your wonderful team Riaz and your name has been passed on to many as a miracle surgeon. Best wishes for your future in robotic surgery too. Ross and Chez"
      },
      {
        "id": "riaz-khan-peter-jasinski",
        "author": "Peter Jasinski",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "riaz-khan",
        "text": "Dr Khan has operated on both my knees both times up and walking and back working on the boat as a fisherman after four weeks no problems he is a legend"
      },
      {
        "id": "joint-studio-gary-bentel",
        "author": "Gary Bentel",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "joint-studio",
        "text": "Riaz not only were you and your team highly professional and compassionate throughout but having given me wonderful advice 13 years ago to delay my hip replacement, you have now given me a wonderfully pain-free life with hugely positive goals of getting back to walking, running, swimming and biking. I didn't know what to expect after surgery even though Riaz did reassure me that I'd sail through it because I was fit and healthy weight (the right preparation makes a big difference). But my family and I were totally gobsmacked at the how easily and quickly I have recovered back to doing the things I love and being out there with such confidence -all with no prescription pain medication or anti-inflammatories (inflammation managed by icing). I am so glad that I chose Riaz as my surgeon, and that he has put together such a great team to support him in managing each individual patient's specific risks. Riaz you are a wonderful person, and I will be forever grateful to you and your team for helping me get my life back on track."
      },
      {
        "id": "joint-studio-anne-blades",
        "author": "Anne Blades",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "joint-studio",
        "text": "Five-star surgeon! Prof Khan is an excellent surgeon; he genuinely cares for his patients with a beautiful bedside manner. I am very happy with my hip replacement and enjoying life pain free with a range of movement I forgot was possible. I can't recommend Prof Khan at The Joint Studio highly enough."
      },
      {
        "id": "joint-studio-emily-larkin",
        "author": "Emily Larkin",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "joint-studio",
        "text": "Dr Riaz Khan was super helpful and saved me a lot of hassle and possible wasted time trying to deal with the public system for the complications of my ankle fracture. I am so grateful for his amazing service, he really put my mind at ease and I will definitely be recommending to anyone who asks."
      },
      {
        "id": "joint-studio-rodney-ware",
        "author": "Rodney Ware",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "joint-studio",
        "text": "I can not fault the service of professor Khan and his team at the Joint Studio."
      },
      {
        "id": "riaz-khan-elsie-evans",
        "author": "Elsie Evans",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "riaz-khan",
        "text": "I would like to thank Professor Riaz Khan for a wonderful knee replacement. From beginning to end there was a great display of competence and care. I would highly recommend Riaz and his team to anyone."
      },
      {
        "id": "joint-studio-rafay-nabeel",
        "author": "Rafay Nabeel",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "joint-studio",
        "text": "Dr Riaz did my ACL and meniscus tear surgery 5 months ago. I already feel my knee being fully recovered so can't wait for full 1 year (recommended time) to be in the squash court again. I found him very professional, caring and skillful. I hope no body ever needs to go through knee surgery but if you have to, then I highly recommend him."
      },
      {
        "id": "joint-studio-gerhard-van-biljon",
        "author": "Gerhard van Biljon",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "joint-studio",
        "text": "I underwent a total knee replacement operation during middle of October 2022 with Prof Riaz Khan. He advised that I would 'hate' him until 3 months after the operation and then appreciate him. You were wrong Prof Khan. I appreciated you 6 weeks after the operation. Prof Khan did a brilliant job. Now 3 months after the operation I have no pain. I am walking normally without a limb and one can barely see the scar. Prof Khan and his team have done an excellent job. I highly recommend Prof Khan as your surgeon. His confidence and caring nature put you at ease right from the word go and then he lets his skill do the talking. The entire process was well managed and support was always available. Thank you Prof Khan. I shall be back for my other knee replacement in no time."
      },
      {
        "id": "joint-studio-philip-blatch",
        "author": "Philip Blatch",
        "rating": 5,
        "date": "2023-10-09",
        "listing": "joint-studio",
        "text": "I would like to thank all the staff at the joint studio for a wonderful experience , I really enjoyed working with you, I would like to say a big thank you to my fantastic surgeon Riaz khan, not only is a great man he’s a great surgeon!!!!, I can’t thank you enough for my experience, after my ACL Reconstruction now I’m moving again, with out any trouble nice job team👍👍 I would recommend to anyone who is in need. Regards Phill"
      },
      {
        "id": "riaz-khan-matthew-spicer",
        "author": "Matthew Spicer",
        "rating": 1,
        "date": "2022-10-09",
        "listing": "riaz-khan",
        "text": "My mothers experience with Dr Kahn was not a productive one. She was told nothing but what she already new and was offered an injection should their be any pain to which was the whole reason she was their in the first place. His lack of interest and no suggested follow up was disappointing. My mother felt very dismissed. After a second opinion it has been found that she needs a knee replacement, to which Dr Kahn boasted is his speciality. All in all her experience with Joint Studio was not a pleasant one."
      },
      {
        "id": "riaz-khan-philipp-lamprecht",
        "author": "Philipp Lamprecht",
        "rating": 5,
        "date": "2022-10-09",
        "listing": "riaz-khan",
        "text": "I had two meniscus surgeries with Dr Khan and would highly recommend him. He's an empathetic, relatable doctor who makes you feel at ease and an outstanding surgeon. Thanks Riaz and team 👍🏽"
      },
      {
        "id": "riaz-khan-tony-bostin",
        "author": "Tony Bostin",
        "rating": 1,
        "date": "2022-10-09",
        "listing": "riaz-khan",
        "text": "I had ACL surgery on 1/7/2020 in holiwood hospital in Perth.that’s private hospital.at first the kick me out straight a way out after surgery and went home by Uber also surgery wasn’t goes well and I’m having another surgery 19/92022 in st George hospital in Sydney.but they keep me to stay for night bcz they care if u are living alone,opposite Perth hospital.please watch up to chose ur surgeon.I was suffering for two years and I’m going to suffer more than that.bcz my surgery didn’t goes well and my surgeon wasn’t honest to me to say that."
      },
      {
        "id": "joint-studio-hiba-n",
        "author": "Hiba N",
        "rating": 5,
        "date": "2022-10-09",
        "listing": "joint-studio",
        "text": "I saw Dr Khan 4 yrs ago, he did my hip replacement surgery. My life changed for the better since then! He knows what he is doing, Can't thank him enough! Definitely recommend him"
      },
      {
        "id": "joint-studio-alan-potts",
        "author": "Alan Potts",
        "rating": 5,
        "date": "2021-10-09",
        "listing": "joint-studio",
        "text": "I would like to just write about my excellent experience with Dr Riaz Khan who performed a menisectomy on me 6 weeks ago\nTo say i was very hesitant is an understatement as my research via Dr Google assured me it would be a waste of time due to my age being 50(i will not be consulting Dr Google again)\nAfter viewing all my scans Dr Khan assured me it would be fine 2 visits later and numerous emails and phone calls back and forth i went ahead with the procedure.\nIt has all gone extremely well and the recovery has gone exactly how Dr Khan said it would.\nHis patience and caring attitude prior during and after the operation has been very comforting.\nI'm not one to write a lot of reviews but feel compelled to show my appreciation for the wonderful service i received and would have no hesitation recommending Dr Khan and the Joint Studio."
      },
      {
        "id": "riaz-khan-bernard-hughes",
        "author": "Bernard Hughes",
        "rating": 5,
        "date": "2020-10-09",
        "listing": "riaz-khan",
        "text": "It gives me great pleasure to write this review. I extend my gratitude and appreciation to Professor Riaz Khan for the hip resurfacing surgery he performed in May 2020. Right from the initial consultation I knew I was going to be in good hands and today I am free from pain and have full mobility once again. Riaz is an outstanding surgeon, a very caring individual and the entire experience was uniquely uplifting. I would happily recommend his outstanding service!"
      },
      {
        "id": "riaz-khan-wendy-walsh",
        "author": "Wendy Walsh",
        "rating": 5,
        "date": "2020-10-09",
        "listing": "riaz-khan",
        "text": "I have had Professor Riaz Khan Twice now he is amazing his bedside manner his work he is simply the best After my THR I was walking on my own by day 8 my scar is hardly noticeable. I am so glad my doctor referred me to Riaz. I’ve gone from hardly able to walk to doing gym 2days a week.at 67 yrs of age I think I’m doing well.also I have to thank Better FX physio Shane Troy has been amazing . Anyone needing a total hip replacement or knee I recommend you see Riaz Khan .i was pain free with surgeons like this you do not need to worry you will be at ease and looked after from your very first visit. I can only highly recommend this surgeon I have two friends who have been else where and had a terrible time which turned me off going through this surgery but there is nothing to fear a great surgeon is all you need Thankyou Riaz And the team you are all simply amazing. Wendy walsh."
      },
      {
        "id": "riaz-khan-dagmar-mucina",
        "author": "Dagmar Mucina",
        "rating": 5,
        "date": "2020-10-09",
        "listing": "riaz-khan",
        "text": "Can't be happier after my both partial knee replacement, even the scars are almost invisible - a big thank you Prof Riaz Khan"
      },
      {
        "id": "joint-studio-vinny-mac",
        "author": "Vinny Mac",
        "rating": 5,
        "date": "2020-10-09",
        "listing": "joint-studio",
        "text": "Checked out of hospital after 1.5 days. Full hip replacement by riaz khan. Pain free within hours. Nearly 3 years down the track not one problem. These guys are the best anywhere. In the words of Molly meldrum do yourself a favour and call here first."
      },
      {
        "id": "joint-studio-john-collins",
        "author": "john Collins",
        "rating": 5,
        "date": "2019-10-09",
        "listing": "joint-studio",
        "text": "I had my left hip resurfaced 2 years ago and started running again after 3 months , I have now completed 4 marathons without any problems. I have just had surgery on my right knee and am hoping to be able to run the Singapore marathon in December. I would recommend professor Khan to anyone who needs a brilliant surgeon who understood what I wanted from my surgery and did the best he could to make it happen."
      },
      {
        "id": "riaz-khan-sharon-cook",
        "author": "Sharon Cook",
        "rating": 5,
        "date": "2018-10-09",
        "listing": "riaz-khan",
        "text": "I had severe white coat syndrome before visiting Prof Riaz Khan. I felt at ease on my first visit learning that I needed a total hip replacement. Prof Riaz Khan and his team have turned my life around not only am I pain free but I no longer have white coat syndrome. The level of care and his understanding of my phobias was amazing. Very caring gentleman and surgeon. I have no hesitation in recommending Prof Riaz Khan, his team and Hollywood hospital."
      },
      {
        "id": "riaz-khan-lorenzo-lad72",
        "author": "Lorenzo “Lad72”",
        "rating": 5,
        "date": "2018-10-09",
        "listing": "riaz-khan",
        "text": "Professor Khan performed partial knee replacement on both left and right knees back in November of 2016. My goal was to be able to summit Mount Kilimanjaro in Tanzania, one year later. On 30th January 2018, our team summited Kilimanjaro. I had absolutely no problems with my knees. A huge thank you to Dr Khan and his team."
      },
      {
        "id": "riaz-khan-leigh-warnick",
        "author": "Leigh Warnick",
        "rating": 5,
        "date": "2018-10-09",
        "listing": "riaz-khan",
        "text": "Found the whole experience really good and Dr Khan is very kind and caring with his patients which puts you at ease. Operation was a success and my life is much better now my knee is better."
      },
      {
        "id": "joint-studio-kai-werner",
        "author": "Kai Werner",
        "rating": 5,
        "date": "2018-10-09",
        "listing": "joint-studio",
        "text": "What can I say but thank you Dr Khan! Mum has had her second hip replacement from you and it has given her another chance to enjoy her active lifestyle. Not just an incredible surgeon but a great, friendly, caring gentleman. If you're contemplating this type of operation look no further. Have a chat to Dr Khan and he will have you walking normally in 6 Months! Amazing!"
      },
      {
        "id": "joint-studio-morgan-cooper",
        "author": "Morgan Cooper",
        "rating": 5,
        "date": "2018-10-09",
        "listing": "joint-studio",
        "text": "Cannot speak highly enough of professor khan and his staff. He goes above and beyond in what he does. I came and saw him after complications from another surgeon and i didnt think that i would be where i am now only 7 weeks post ACL reconstruction. If you are looking for a surgeon who actually cares about his patients then i would highly recommend professor khan"
      }
    ]
  },
  "antony-liddell": {
    "listings": [
      {
        "key": "antony-liddell",
        "name": "Dr Antony Liddell - Perth Orthopaedic Surgeon",
        "address": "Perth Orthopaedic & Sports Medicine Centre, Level 1/1 Havelock St, West Perth WA 6005, Australia",
        "rating": 5,
        "reviewCount": 21,
        "url": "https://share.google/faEwweG4DVvXo1Fg6",
        "primary": true
      }
    ],
    "reviews": [
      {
        "id": "antony-liddell-sam-watson",
        "author": "Sam Watson",
        "rating": 5,
        "date": "2026-10-03",
        "listing": "antony-liddell",
        "text": "Root tear repair and knee meniscus cleanup. Very happy with both procedures"
      },
      {
        "id": "antony-liddell-akasha-jayde",
        "author": "akasha jayde",
        "rating": 5,
        "date": "2026-05-09",
        "listing": "antony-liddell",
        "text": "Dr. Ant Liddell has been nothing short of amazing - his surgery on my knee corrected a lifelong deformity with a combination of a TTT, MPFL, and re-alignment which has now given me a completely new lease on life! I could not recommend Dr. Liddell enough for any ortho-related surgeries. His secretary Meg has also been a delight both pre and post-op, answering any questions I have had!"
      },
      {
        "id": "antony-liddell-damion-lomman",
        "author": "Damion Lomman",
        "rating": 5,
        "date": "2026-05-09",
        "listing": "antony-liddell",
        "text": "DR Liddell, repaired my shoulder to netter than new... great surgeon."
      },
      {
        "id": "antony-liddell-jody-matthews",
        "author": "Jody Matthews",
        "rating": 5,
        "date": "2026-01-09",
        "listing": "antony-liddell",
        "text": "I have had a previous surgery - osteotomy with Dr Liddell and are now going back for the next one, with the first I was more than nervous, and had put if off for way too long ,but Dr Liddell has an abundance of knowledge and is excellent at putting you at ease , he is never rushed and always approachable, as is all his staff, they are always happy to explain, or find an answer even if I have forgotten and have to ask twice! although I am nervous heading into my second op ( lucky I only have 2 legs ), I know that having both legs fixed means I get my life back! PRICELESS!! I am confident in the outcome because I have absolute faith in Dr Liddell and have already done this with him before. I can't wait till rehab is over."
      },
      {
        "id": "antony-liddell-carli-t",
        "author": "Carli T",
        "rating": 5,
        "date": "2025-12-09",
        "listing": "antony-liddell",
        "text": "Dr Antony Liddell is truly one of the best, I had an osteotomy and have now recovered and finally back to running! The whole team including the fabulous Meg, look after you all the way through the process. Highly recommend Dr Liddell."
      },
      {
        "id": "antony-liddell-simon-hibben",
        "author": "Simon Hibben",
        "rating": 5,
        "date": "2025-11-09",
        "listing": "antony-liddell",
        "text": "I just had a High Tibial Osteotomy performed by Dr Liddell. From the first consultation right through to the post operative consultation, I have had no complaints. Dr Liddell and his awesome PA Meg are approachable and nothing seems to be too much trouble. 100% recommend Dr Liddell if you require knee surgery."
      },
      {
        "id": "antony-liddell-christine-marsack",
        "author": "Christine Marsack",
        "rating": 5,
        "date": "2025-11-09",
        "listing": "antony-liddell",
        "text": "I was so impressed by the wonderful treatment I received, not only from Dr Liddell but also from his fabulous receptionist, Meg. Both bent over backwards to achieve a fantastic outcome for me, in terms of MRI appointment time, discussing the results and providing a treatment plan within days. Both are true professionals - caring, compassionate and very skilled at what they do."
      },
      {
        "id": "antony-liddell-naveena-s",
        "author": "Naveena S",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "antony-liddell",
        "text": "Amazing Orthopaedic Surgeon. Hands down, the best in WA! He operated on my hubby and the care from day 1 and after care has been phenomenal. Dr Liddell knows everything in his field and made our surgery process and transition very smooth! His assistant Meg has been amazing and had been very supportive! We are very grateful to you and your team. Many thanks."
      },
      {
        "id": "antony-liddell-judy-wellbeloved",
        "author": "Judy Wellbeloved",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "antony-liddell",
        "text": "2 full knee replacements in 3 months. Great surgeon who cares about his patients. Very professional, excellent outcome after surgery, and always ready to listen and offer advice. Thank you, Ant. we really appreciate your care."
      },
      {
        "id": "antony-liddell-lauren-conlon",
        "author": "LAUREN CONLON",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "antony-liddell",
        "text": "Cannot speak highly enough of Dr Liddell. As well as being an outstanding surgeon, he has a great bedside manner and is an all round good guy. I am so happy with my new knee which is now two years old. I was back playing tennis after 41/2 months and I am more active now than before. Highly recommend Dr Liddell."
      },
      {
        "id": "antony-liddell-david-cooper",
        "author": "David Cooper",
        "rating": 5,
        "date": "2021-10-09",
        "listing": "antony-liddell",
        "text": "Acromioplasty of both shoulders in 2014 on separate occasions. Quickly diagnosed and booked in for surgery. Fast recovery allowing me to use my shoulders for light household duties just one week after surgery. Excellent surgeon!"
      },
      {
        "id": "antony-liddell-trevor-hodder",
        "author": "Trevor Hodder",
        "rating": 5,
        "date": "2020-10-09",
        "listing": "antony-liddell",
        "text": "Shoulder rotator cuff surgery. Large supraspinatus repair and bicep tenodesed tear all operated and seemingly on the road to full recovery. Thanks for providing your operating expertise. 12 months on and all recovered. A wonderful surgeon"
      },
      {
        "id": "antony-liddell-lester-gaebler",
        "author": "Lester Gaebler",
        "rating": 5,
        "date": "2018-10-09",
        "listing": "antony-liddell",
        "text": "Single knee replacement excellent result"
      },
      {
        "id": "antony-liddell-stuart-day",
        "author": "stuart day",
        "rating": 5,
        "date": "2017-10-09",
        "listing": "antony-liddell",
        "text": "Excellent proffessional service with adequate documentation. Bilateral knee replacement has been painful but successful in improving posture, gait and reducing hip pain."
      }
    ]
  },
  "abhijit-ghoshal": {
    "listings": [
      {
        "key": "abhijit-ghoshal",
        "name": "Dr Abhijeet Ghoshal",
        "address": "Suite 13, Wexford Medical Centre, 3 Barry Marshall Parade, Murdoch WA 6150, Australia",
        "rating": 4.2,
        "reviewCount": 5,
        "url": "https://share.google/T7B5pEYoSZ5obWfGs",
        "primary": true
      }
    ],
    "reviews": [
      {
        "id": "abhijit-ghoshal-kianu",
        "author": "Kianu",
        "rating": 5,
        "date": "2025-12-09",
        "listing": "abhijit-ghoshal",
        "text": "He done 2 x Laminectomy & decompression in 2024-2025, the best Neurosurgeon in Perth. Very kind & professional."
      },
      {
        "id": "abhijit-ghoshal-patricia-hamilton",
        "author": "Patricia Hamilton",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "abhijit-ghoshal",
        "text": "I saw Dr Ghoshal on 10/6/25 for numbness on my arms and nerves pain on my left leg. Dr Ghoshal is very good n he really listened to how I explained all those problems attentively. He then explained what causes those pain n numbness n show me the computed 3D photos of those affected areas. I am not keen to have an operation n he gave me referrals for cortisone injections. Pray it will help me relieve my pain. My HCF insurance is only effective from 26/11/25 n he is very kind to bill me as a public patient . Leanne n Reception staff are friendly n good . Many thanks again Dr Ghoshal best regards Patricia Hamilton"
      },
      {
        "id": "abhijit-ghoshal-michelle-gibson",
        "author": "Michelle Gibson",
        "rating": 5,
        "date": "2025-10-09",
        "listing": "abhijit-ghoshal",
        "text": "I have been treated by Dr Goshal for the last three years, I have found him to be professional and friendly, explaining everything to me in an easy to understand manner. He always discussed options with me with surgery being the last option. When I did have surgery it solved the issue and was a success. I have recently been back to Dr Goshal due to other issues separate to what I originally saw him for two years ago, and he only bulked billed me. I would highly recommend Dr Ghoshal."
      },
      {
        "id": "abhijit-ghoshal-jo-mo",
        "author": "Jo Mo",
        "rating": 5,
        "date": "2024-10-09",
        "listing": "abhijit-ghoshal",
        "text": "Dr Ghoshal was friendly and helpful. He did not rush into surgery but gave me a chance to try out an injection around my L5 nerve. It worked for a while but then pain came back. He then advised surgery, my pain has gone completely and I have my life back again. Skilled and superb surgeon"
      },
      {
        "id": "abhijit-ghoshal-kevin-enright",
        "author": "Kevin Enright",
        "rating": 1,
        "date": "2024-10-09",
        "listing": "abhijit-ghoshal",
        "text": "Was referred by another surgeon who had ceased taking public patients. Ghosh was advised on surgery to be performed. Totally disregarded original surgeons instructions, was unable to make decision on his own and had to consult fellow surgeons before deciding on totally different course of action. Referred me to RPH where I waited months. Finally called RPH only to be told I was in line for a pain education course after which I would then have to wait again to see another spinal surgeon Complete waste of time and money and ultimately I doubt as to whether he is a capable surgeon as he merely palmed me off to someone else Highly recommend avoiding as it seems he just sees patients for the consult fee with no Intention of actually providing treatment or making his own decisions"
      }
    ]
  },
  "satyen-gohil": {
    "listings": [
      {
        "key": "/g/11bwp1ldqd",
        "name": "Orthopaedics WA Wexford",
        "address": "Murdoch Square, Suite 205, Level 2 Tower C/44 Barry Marshall Parade, Murdoch WA 6150",
        "rating": 4.4,
        "reviewCount": 19,
        "url": "https://maps.google.com/?cid=7142503008708506801",
        "primary": true,
        "shared": true
      }
    ],
    "reviews": [
      {
        "id": "g11bwp1ldqd-ZMjdITlJBEAE",
        "author": "Ben Bowden",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11bwp1ldqd",
        "text": "I had a surfing injury with my shoulder and would highly recommend Satyen Gohil for anyone looking for a good orthopaedic surgeon. He was extremely knowledgeable and guided me through the entire healing process along with recommending a great physio. I'm now back in the water with a shoulder that feels as good as new! Thanks so much Sat!!"
      }
    ]
  },
  "sheldon-moniz": {
    "listings": [
      {
        "key": "/g/11bwp1ldqd",
        "name": "Orthopaedics WA Wexford",
        "address": "Murdoch Square, Suite 205, Level 2 Tower C/44 Barry Marshall Parade, Murdoch WA 6150",
        "rating": 4.4,
        "reviewCount": 19,
        "url": "https://maps.google.com/?cid=7142503008708506801",
        "primary": true,
        "shared": true
      }
    ],
    "reviews": [
      {
        "id": "g11bwp1ldqd-ZDIxeWIyYxAB",
        "author": "Janelle Sepkus",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11bwp1ldqd",
        "text": "I recently had hand surgery ( after a skiing injury) with Dr Moniz and whilst I am still in the recovery stage I must say Dr Moniz and His absolutely gorgeous office manager Ash far exceeded my expectations with their care and service for their patients. I have had a lot of medical procedures in the past and this is the first time I have felt genuinely cared about not just another number rather an equal. It’s early days but thanks Ash, Dr Moniz and team for your exceptional service and care. Could not recommend highly enough."
      }
    ]
  },
  "daniel-marshall": {
    "listings": [
      {
        "key": "/g/11bwp1ldqd",
        "name": "Orthopaedics WA Wexford",
        "address": "Murdoch Square, Suite 205, Level 2 Tower C/44 Barry Marshall Parade, Murdoch WA 6150",
        "rating": 4.4,
        "reviewCount": 19,
        "url": "https://maps.google.com/?cid=7142503008708506801",
        "primary": true,
        "shared": true
      }
    ],
    "reviews": [
      {
        "id": "g11bwp1ldqd-ZDFKVlZWRRAB",
        "author": "Malcolm Smartt",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11bwp1ldqd",
        "text": "I have had ankle problems for many years and had an ankle fusion on my right ankle and due to the loss of movement those close to me state I now have a club foot – no pain but lack of movement is an issue. I then needed something done on my left ankle and chose a replacement and Dan Marshall was recommended and how right they were. A particularly pleasant no nonsense person and a very talented surgeon. I am now some 10 weeks post surgery back in normal shoes and have had limited pain throughout.\nI cannot provide enough complimentary adjectives for Dan and would highly recommend him to anyone and at the same time recommend an ankle replacement versus a fusion.\n\nIn addition, Tiana in reception was helpful, most efficient and made admin matters easy.\n\nThank you Dan\nCheers\nMal Smartt"
      }
    ]
  },
  "thomas-bucher": {
    "listings": [
      {
        "key": "/g/11bwp1ldqd",
        "name": "Orthopaedics WA Wexford",
        "address": "Murdoch Square, Suite 205, Level 2 Tower C/44 Barry Marshall Parade, Murdoch WA 6150",
        "rating": 4.4,
        "reviewCount": 19,
        "url": "https://maps.google.com/?cid=7142503008708506801",
        "primary": true,
        "shared": true
      }
    ],
    "reviews": [
      {
        "id": "g11bwp1ldqd-nanJDc1hnEAE",
        "author": "Chris Mould",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11bwp1ldqd",
        "text": "I had a hip replacement done by Dr Bucher in May 24. He had to also break my femur to straighten my leg so the new implant could be put in, this was a seriously complex operation. Dr Bucher did an excellent job the scar was lengthy but looks great. My recovery has been long but I am getting better everyday and best of all no more excruciating pain. I finally have legs almost the same length after 30 years of being an inch short on the Rhs. I highly recommend Dr Bucher he has given me a new lease on life."
      },
      {
        "id": "g11bwp1ldqd-3bXNEblRnEAE",
        "author": "Victoria Edwards",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11bwp1ldqd",
        "text": "I highly recommend Dr Thomas Bucher “The man who can”!\nI had a hip replacement last year (2023) which, unfortunately didn’t go according to plan. So I was referred to Dr Bucher who is extremely experienced in revision hip surgery.\nHe managed to put everything back into place and a year on I am back to total mobility.\nI can’t thank this guy enough - he pretty much saved my leg! And such a nice guy, he treats you like a real person, not just a patient. 😊😊👍🏻👍🏻👍🏻"
      },
      {
        "id": "g11bwp1ldqd-1MGY3dWFnEAE",
        "author": "Neil Todd",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11bwp1ldqd",
        "text": "Just had a total knee replacement done by Thomas Bucher.I can't thank him enough. I am usually a very stressed person but at no time after the admission did i feel stressed. The staff at murdoch hospial are fantastic .All the nurses at st roses ward were very friendly and good at their job.So a very big thankyou to Mr Thomas Bucher and murdoch hopital and medibank for paying for it"
      }
    ]
  },
  "simon-wall": {
    "listings": [
      {
        "key": "/g/11bwp1ldqd",
        "name": "Orthopaedics WA Wexford",
        "address": "Murdoch Square, Suite 205, Level 2 Tower C/44 Barry Marshall Parade, Murdoch WA 6150",
        "rating": 4.4,
        "reviewCount": 19,
        "url": "https://maps.google.com/?cid=7142503008708506801",
        "primary": true,
        "shared": true
      }
    ],
    "reviews": [
      {
        "id": "g11bwp1ldqd-ZFRSQkxYYxAB",
        "author": "Mel Reyn",
        "rating": 1,
        "date": "2026-09-12",
        "listing": "/g/11bwp1ldqd",
        "text": "Dr wall had no intention of trying to save my leg ,all he was interested in was amputating my leg because of the cost being I was in a public hospital.So happy I ignored him as I still have 2 legs,"
      },
      {
        "id": "g11bwp1ldqd-UkhOU1NVRRAB",
        "author": "Sangita Kumar",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11bwp1ldqd",
        "text": "Dr Simon wall did my surgery on my leg. He repaired my acl and meniscus back in 2023. I can run again and do various physical movements. He is a brilliant doctor and very kind. 🌻😃"
      }
    ]
  },
  "christopher-w-jones": {
    "listings": [
      {
        "key": "/g/11bwp1ldqd",
        "name": "Orthopaedics WA Wexford",
        "address": "Murdoch Square, Suite 205, Level 2 Tower C/44 Barry Marshall Parade, Murdoch WA 6150",
        "rating": 4.4,
        "reviewCount": 19,
        "url": "https://maps.google.com/?cid=7142503008708506801",
        "primary": true,
        "shared": true
      }
    ],
    "reviews": [
      {
        "id": "g11bwp1ldqd-Tm5aR1JHYxAB",
        "author": "Jeremy Noble",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11bwp1ldqd",
        "text": "I have had 4 different knee surgeries and various other orthopaedic surgeries on different broken bones and injuries due to various sporting injuries. Dr Chris Jones is by far the most professional and accomplished surgeon I have heard of or come across.\n\nHe took the time to call me in advance of my surgery and had conducted a team meeting with colleagues in the lead up to my operation. He thoroughly explained every step of the procedure and added a facet to the surgery that had not been considered previously that was dynamic and extremely effective.\n\nAfter surgery not only did he come and see me twice before I was discharged but also called my next of kin and explained in full detail everything that had been done and the prognosis moving forward.\n\nI have private insurance and chose Chris after receiving a glowing review from a friend.\n\nThis would have been a 10 star review had they been allowed. Cannot recommend Chris enough."
      },
      {
        "id": "g11bwp1ldqd-YTFsQk1XYxAB",
        "author": "Robyn Edmondstone",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11bwp1ldqd",
        "text": "Dr Chris Jones,\nWhat a legend this man is ,from the first appointment I felt at ease and after 2 hip replacements & a knee arthroscopy operation I can honestly say his knowledge,caring, professional nature and understanding are fantastic as is his communication skills and post surgery care he treats you like a person and not just a number like some do.\nHe is a very knowledgeable man and will answer any questions you have and help you to understand the procedure he is going to do on you. I wouldn’t hesitate to recommend him to anyone wanting a professional fantastic surgeon."
      },
      {
        "id": "g11bwp1ldqd-VlVjd1dGRRAB",
        "author": "Trevor Clay",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11bwp1ldqd",
        "text": "I could not fault my Orthopaedic Surgeon Mr Chris Jones’ full hip replacement surgery. The attention to detail and the precision with which the surgery was carried out resulted in a perfect outcome. Every interaction with Chris and his assistant from the pre-surgery, surgery and to the postoperative care was without fault."
      },
      {
        "id": "g11bwp1ldqd-KNUxLbEh3EAE",
        "author": "Susan Halse",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11bwp1ldqd",
        "text": "CHRISTOPHER JONES WAS WONDERFUL. CARING, KOWLEDGABLE, ABLE. WOULD GLADLY RECOMMEND HIM."
      }
    ]
  },
  "andrew-mattin": {
    "listings": [
      {
        "key": "/g/11bwp1ldqd",
        "name": "Orthopaedics WA Wexford",
        "address": "Murdoch Square, Suite 205, Level 2 Tower C/44 Barry Marshall Parade, Murdoch WA 6150",
        "rating": 4.4,
        "reviewCount": 19,
        "url": "https://maps.google.com/?cid=7142503008708506801",
        "primary": true,
        "shared": true
      }
    ],
    "reviews": [
      {
        "id": "g11bwp1ldqd-ZEVaTE9YYxAB",
        "author": "Frank Gucciardi",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11bwp1ldqd",
        "text": "I was highly recommended Dr Andrew Mattin\nWhich my left arm i was so much pain that I needed surgery\nI was Diagnosis Cubital Tunnel Release and Excision of Ganglion, and surgery was November 2025\nDr Andrew Mattin did a fantastic job, and my pain is easing\nAlso bed side manner was great\nThe reception staff were really helpful and friendly and especially Julie she was very helpful before the surgery\nI would recommend Dr Andrew Mattin to anyone\nThank You"
      },
      {
        "id": "g11bwp1ldqd-YWpCM05rRRAB",
        "author": "Dean Carrabin",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11bwp1ldqd",
        "text": "Dr Mattin did a rotator cuff repair on my left shoulder and did a fantastic job. The reception staff were really helpful and friendly and I couldn’t fault any part of the process"
      },
      {
        "id": "g11bwp1ldqd-ROXA3Nk5BEAE",
        "author": "Aidan Cowdery",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11bwp1ldqd",
        "text": "Andrew Mattin operated on both my shoulder successfully. Very professional and gap free!"
      }
    ]
  }
};
