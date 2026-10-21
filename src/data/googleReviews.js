// Google reviews shown on surgeon profiles, keyed by BOS profile slug.
// Each surgeon's reviews come from their own Google Business Profile, or,
// when they have none, from their clinic's listing (`shared: true`), where
// only reviews that name the surgeon are kept. Reviews that name another
// doctor are left out, and every kept review was read by hand: a few that are
// not about the surgeon's care, or that contain abuse, allegations of
// dishonesty or a self-harm statement, were also left out. Ordinary negative
// reviews are kept. Text is exactly as written on Google; `date` is
// estimated from Google's relative age ("3 months ago") on the capture day.
// First six profiles captured 2026-10-09, the rest 2026-10-10. Every listing
// with a Maps CID was checked against Google on 2026-10-10: the place name,
// CID and knowledge graph ID match, and `reviewsUrl` is Google's own reviews
// page for that Place ID, where visitors can verify each review.
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
        "primary": false,
        "placeId": "ChIJI90xPfykMioR-YRiqi6qYIk",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJI90xPfykMioR-YRiqi6qYIk"
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
        "shared": true,
        "placeId": "ChIJqyBOHrSiMioRsbQ60aREH2M",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJqyBOHrSiMioRsbQ60aREH2M"
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
        "shared": true,
        "placeId": "ChIJqyBOHrSiMioRsbQ60aREH2M",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJqyBOHrSiMioRsbQ60aREH2M"
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
        "key": "/g/11vq391db_",
        "name": "Dr Dan Marshall - Perth Orthopaedic Surgeon",
        "address": "Wexford Medical Centre St John of God Hospital, Orthopaedics WA, Unit 15/3 Barry Marshall Parade, Murdoch WA 6150",
        "rating": 4.4,
        "reviewCount": 13,
        "url": "https://maps.google.com/?cid=14260533166251416364",
        "primary": true,
        "placeId": "ChIJ9zTgpCujMioRLJsX8luX58U",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJ9zTgpCujMioRLJsX8luX58U"
      }
    ],
    "reviews": [
      {
        "id": "g11vq391db_-T1dsaVNsRRAB",
        "author": "Ash",
        "rating": 1,
        "date": "2026-10-07",
        "listing": "/g/11vq391db_",
        "text": "I was extremely disappointed with the way I was treated by Dr Marshall.\n\nI had a suspected torn Achilles tendon and sent through my referral and ultrasound report to his office. After waiting a couple of days, I contacted the office myself and was told that I should do physiotherapy for three months and, if I was still having problems after that, the doctor would then see me.\n\nI was very uncomfortable with that advice, so I decided to seek a second opinion. The second doctor actually saw me, arranged an MRI and, unfortunately, it confirmed that I had a complete rupture of my Achilles tendon. The two ends of the tendon were significantly separated and were not in a position to heal properly on their own. I required surgery to repair the tendon.\n\nThankfully, I sought a second opinion before following the original advice. Had I simply gone ahead with three months of physiotherapy, I could have potentially spent months unable to work properly and still ultimately required surgery.\n\nWhat concerns me most is that I was never actually examined by Dr Marshall before this advice was given. I understand that doctors can have different approaches to treatment, but in my situation I feel an in person assessment and further investigation would have been appropriate before recommending three months of physiotherapy\n\nI also have a good friend who recently suffered a very similar Achilles injury and tells me they were given the same advice by Dr Marshall, which makes my experience even more concerning\n\nI would not personally recommend a doctor where the initial assessment of an injury as serious as a suspected Achilles rupture is made without the patient being physically examined\n\nI’m self employed and simply don’t have months to sit around unable to work, only to potentially end up needing surgery anyway. I’m very glad I sought a second opinion and had my injury properly investigated."
      },
      {
        "id": "g11vq391db_-VlhwU1owRRAB",
        "author": "cameron brown",
        "rating": 5,
        "date": "2026-10-07",
        "listing": "/g/11vq391db_",
        "text": "Excellent service with someone who has superb technical and non technical skills. Really appreciate his help. Thanks Dan."
      },
      {
        "id": "g11vq391db_-VFRkUlpFRRAB",
        "author": "Dave Walsh",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11vq391db_",
        "text": "Just had my 12 month review with Dan after a total knee replacement last January. I must say l'm really pleased with results. My bend is now up to 130 degrees, l can walk without pain (or a limp) and l've resumed playing football, even if it is only the walking version.\nI was aware of the possible outcomes of TKR surgery so l've worked hard with the rehab, but the results so far have surpassed my expectations. Thanks so much Dan."
      },
      {
        "id": "g11vq391db_-TFRKVlVtYxAB",
        "author": "Elaine Matthews",
        "rating": 1,
        "date": "2026-02-10",
        "listing": "/g/11vq391db_",
        "text": "I have my reasons after being under his team at fsh. I was asked twice if I wanted to go private and I said no. I did end up going private with someone else after being told surgery wasn’t necessary and to mobilise. I had a ct (private) which showed my foot was still fractured and dislocated. The X-ray I had done at fsh also pointed out malalignment. I am left wondering that if I had said yes to going private then would I have had the surgery which was necessary. I didn’t have a problem going private but I was getting good care from the team in the plaster room. To say I was left feeling disappointed is an understatement"
      },
      {
        "id": "g11vq391db_-UTJkS1lXYxAB",
        "author": "Helen Robinson",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/11vq391db_",
        "text": "Dan Marshall is a bloody awesome specialist. He sorted my ankle which i had torn ligaments both sides. I had torn ligaments 5 previous times playing netball over the years and the last surgeon stuffed it. I wouldnt go anywhere else!!"
      },
      {
        "id": "g11vq391db_-ZFhOM2ExRRAB",
        "author": "Anita Dunning",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11vq391db_",
        "text": "Absolute legend. Recently had surgery with Dr Dan and will have another one in the coming months and I'm very happy with the process from consult to surgery. The process and procedure was explained to me in detail that was easily understood and his energy made me feel confident and safe throughout. Would recommend him to anyone needing Ortho surgery. Dr Dan is your man."
      },
      {
        "id": "g11vq391db_-VjA5bU1VRRAB",
        "author": "Chris Benton",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11vq391db_",
        "text": "Great experience, as much as surgery could be. I'm going back for another matter. Very happy with the services provided, recommended."
      },
      {
        "id": "g11vq391db_-zZ0pxNVd3EAE",
        "author": "Maree Lawson",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11vq391db_",
        "text": "Dan was approachable, explained everything so clearly and did a fantastic job on my husband’s knee after a car accident . Highly recommend him!!!!"
      },
      {
        "id": "g11vq391db_-dEx6UTNnRRAB",
        "author": "Dianne",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11vq391db_",
        "text": "Most genuine Dr I have ever met. Very caring, easy to talk to & went out of his way to help with my hip replacements. I couldn’t recommend him highly enough. A+++ experience. I thank you so much & I will never forget you!"
      },
      {
        "id": "g11vq391db_-Yc016U2VnEAE",
        "author": "Michelle Fraser",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11vq391db_",
        "text": "If you need ankle surgery, Dan is your man!! I was fortunate to have him put me back together after a rather nasty Trimalleolar fracture with tendon damage. Good news 8 months later walking without a limp and started a light jog this week. Thanks Dan was so lucky to have you working when I had my tumble."
      },
      {
        "id": "g11vq391db_-cnFmZHp3RRAB",
        "author": "Paul S",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11vq391db_",
        "text": "Dr Dan Marshall is a life saver. He performed a Ankle replacement for me and i am so very grateful. Dr Dan is the most kind and thoughtful Surgeon i have ever met. i tried to get many surgeons to look at my situation and they all were not very helpful at all.\nThen i met Dr Dan and my life changed all for the better. Dr Dan was so kind and understanding when i met him and throughout the whole journey.\nDr Dan has been the ultimate gentleman, with a great passion for his work and to me as a person. There are not enough words i can say to let everyone know how truly FANTASTIC Dr Dan Marshall truly is.\nI would highly recommend Dr Dan to all my Friends, Family, and anyone is this world who wants the finest and best of care from an amazing guy who will look after you as he looked after me. Once again a BIG thank you To Dr Dan Marshall and his wonderful team involved in making my life wonderful again.\nA Thousand GOLD Stars to you all !!!"
      },
      {
        "id": "g11vq391db_-ZWxoTlRIYxAB",
        "author": "Andre Bronwyn Kriegler",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11vq391db_",
        "text": "Dan Marshall is a champion in his orthopaedic field. From my first meeting to my 12 week post operative appointment, Dan has been the most relatable and supportive surgeon I have ever met. Dan explained my surgery thoroughly, generously gave his time for my myriad of questions and made me feel supported and comfortable at each appointment. My foot surgery was very complex\nrequiring four hours of surgery and long term recovery. Dan and his wonderful medical receptionist Tiana, were there with me all the way and the results have been fantastic. Pain free at last! Would highly recommend Doctor Dan’s services to anyone. Well worthy of five plus stars!"
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
        "shared": true,
        "placeId": "ChIJqyBOHrSiMioRsbQ60aREH2M",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJqyBOHrSiMioRsbQ60aREH2M"
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
        "shared": true,
        "placeId": "ChIJqyBOHrSiMioRsbQ60aREH2M",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJqyBOHrSiMioRsbQ60aREH2M"
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
        "shared": true,
        "placeId": "ChIJqyBOHrSiMioRsbQ60aREH2M",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJqyBOHrSiMioRsbQ60aREH2M"
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
        "shared": true,
        "placeId": "ChIJqyBOHrSiMioRsbQ60aREH2M",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJqyBOHrSiMioRsbQ60aREH2M"
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
  },
  "murray-blythe": {
    "listings": [
      {
        "key": "/g/11hz2lfnrr",
        "name": "Dr. Murray Blythe",
        "address": "4/77 Grand Blvd, Joondalup WA 6027",
        "rating": 4.8,
        "reviewCount": 122,
        "url": "https://maps.google.com/?cid=1976313448120123521",
        "primary": true,
        "placeId": "ChIJq6rOjmhTzSsRgQAHMJxGbRs",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJq6rOjmhTzSsRgQAHMJxGbRs"
      }
    ],
    "reviews": [
      {
        "id": "g11hz2lfnrr-VVZWQmNtYxAB",
        "author": "Elaine knight",
        "rating": 5,
        "date": "2026-10-09",
        "listing": "/g/11hz2lfnrr",
        "text": "I had Meniscus surgery and was very happy with the results. Dr Murray Blythe did such a good job. I was back to normal within a week. Would highly recommend him and he’s actually quite funny 😁"
      },
      {
        "id": "g11hz2lfnrr-YmsxclpIYxAB",
        "author": "Sian Edwards",
        "rating": 5,
        "date": "2026-10-03",
        "listing": "/g/11hz2lfnrr",
        "text": "I highly recommend Dr. Murray! He took the time during my visits to listen to and understand my pain and concerns and made sure I received the treatment best suited to me. From appointments to procedures, the entire experience was professional, comfortable, and reassuring. I’m very grateful to Dr. Murray and his team for the care and treatment I received."
      },
      {
        "id": "g11hz2lfnrr-UkdoWWFVRRAB",
        "author": "Steve",
        "rating": 5,
        "date": "2026-09-26",
        "listing": "/g/11hz2lfnrr",
        "text": "My experience with Dr Blythe and his staff was excellent. Dr Blythe is very good at what he does, and it is obvious he is passionate about his speciality. He is honest and candid, explains everything well, very personable, and he did a great job with my foot. The results from the surgery exceeded the expectations.\nHaving never organised any kind of surgery previously, they made the whole process effortless for me. Allison organised their side completely and took the time to answer questions for me that really had nothing to do with them in regards to private health, hospital etc.\nDr Blythe was recommended to me by another doctor and I’m very glad they did.\nI can’t thank them enough."
      },
      {
        "id": "g11hz2lfnrr-WHpkSFFsRRAB",
        "author": "James McStravick",
        "rating": 5,
        "date": "2026-09-26",
        "listing": "/g/11hz2lfnrr",
        "text": "I saw Dr Blythe to remove sea urchin spines from my foot, souvenirs from a holiday overseas.\nHe booked me in for an operation under anaesthesia to remove two spines and now I am walking around pain free and without limping for the first time in months.\nI wish I’d seen him sooner.\nDr Blythe is clearly very knowledgeable and highly skilled in his field but he is also very easy to talk to, good natured and a gentleman with it.\nI highly recommend Dr Blythe."
      },
      {
        "id": "g11hz2lfnrr-TlV4Uk5IYxAB",
        "author": "Dawn Errington",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Amazing surgeon! Excellent service,\nCouldn’t fault Dr Blyth all the way through my Mums hip replacement journey. It’s only 7 weeks post op and she’s doing amazing. Thank you to Alison for being so helpful."
      },
      {
        "id": "g11hz2lfnrr-Ym1Rd2MyYxAB",
        "author": "Suzanne Sutherland",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Murray Blythe is a fantastic orthopaedic surgeon. He instantly relieved months of pain by performing a hip replacement. Within a few weeks I was back walking normally and going about my daily routine. He is thorough and listen to any concerns.\nThankyou Murray"
      },
      {
        "id": "g11hz2lfnrr-U213Mk1tYxAB",
        "author": "Diane Hallworth",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Hi I’m posting this on my wife’s account. I had double knee replacement surgery, 1 full replacement on my left and a partial on my right on the same date 11/6/2026 at Mt Lawley hospital.\nDr Blythe was recommended by my local Dr. I have nothing but praise for pre and post surgery, Dr Blythe was very informative and made me aware that ultimately it was my choice for surgery on both knees. After being in considerable discomfort for some time I chose to have both knees done at the same time which was right for me. Surgery was 6 weeks after first consultation this was due to my level of health cover and could have been sooner but for a 2week delay getting in for ultrasounds and X-rays.\nThroughly recommend Dr Blythe 6 weeks post op and walking unaided with no pain.\nCheers Joe. 55yrs."
      },
      {
        "id": "g11hz2lfnrr-VEhGaWJYYxAB",
        "author": "Maddison Smith",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I had an excellent experience with Dr. Murray Blythe. From my very first appointment, they took the time to thoroughly explain my diagnosis and discuss all of my treatment options in a way that was easy to understand.\n\nTheir professionalism, knowledge, and genuine care made me feel confident that I was in good hands throughout my surgery/treatment. They were patient in answering my questions and always made me feel heard rather than rushed.\n\nI would highly recommend them to anyone looking for an orthopaedic specialist who is not only highly knowledgeable but also\ndown-to-earth and compassionate."
      },
      {
        "id": "g11hz2lfnrr-WTFCM1JuYxAB",
        "author": "Ned Leithhead",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Absolutely fantastic. No fuss, no beating around the bush, just honesty and integrity. 100% recommend. (Full hip replacement)"
      },
      {
        "id": "g11hz2lfnrr-WVdSNFlrRRAB",
        "author": "Chris Saunders",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11hz2lfnrr",
        "text": "It's been a year since Murray Blythe replaced my left hip. I never imagined I would ever be pain free again. Fantastic surgeon, who explained everything clearly and showed such care and support right from the start I'll never be able to thank Murray enough. A big thanks also to Ally on the administration side. Best Wishes Mandi Saunders xxxxxx"
      },
      {
        "id": "g11hz2lfnrr-Y2xGdk0wRRAB",
        "author": "Melissa Knight",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I would highly recommend Dr Blythe. He is professional and meticulous from the first appointment through to surgery and as well as with follow up. Dr Blythe performed a bilateral total hip replacement for me in March this year and the results are perfect and life changing. He has completely changed my quality of life and I am forever grateful for this amazing surgery. Dr Blythe also came highly recommended to me through a number of contacts in and around the medical field. Thankyou so much Dr Blythe"
      },
      {
        "id": "g11hz2lfnrr-YW1WMFltYxAB",
        "author": "Jacqui Ball",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11hz2lfnrr",
        "text": "MY HERO!\nAfter 2 years of other orthopaedic surgeons unable to identify exactly why I was experiencing excruciating pain in my left knee, I finally met Dr Murray Blythe after a friend recommended that I see him. Dr Blythe identified the problem immediately and was able to discuss both the problem (being my left hip) and the solution (being the need for a total hip replacement). At the initial appointment (which was extremely thorough) Dr Blythe showed me one of the many scans taken previously and even I could plainly see the problem with my left hip !\nI was so relieved to discover what the problem was and couldn't understand why other specialists couldn't identify it! Long (and extremely painful) story short, I had my total hip replacement (left hip) on 3 February 2026. It's now mid-May and I am pleased to report that the surgery was a huge success and I am totally pain free in my left leg. I am now out of the wheelchair (pre-surgery) and walking on my own without any walking aids at all. In fact, within 2 weeks after surgery I was able to move and function more than I had been able to do0 for the 2 years previously. At my 6 week post-op appointment, Murray was amazed at the difference in me physically and mentally.... I called him MY HERO from that day on and still do.\nI highly recommend Dr Murray Blythe not only for his outstanding surgical skills but for his ability to make you feel comfortable and to explain and discuss with you what the problem is and what is the solution using language that you are able to understand.\nThanks to Dr Blythe, I now have my life back...... I am only 64 years old and will be walking (unaided) down the aisle on Saturday 30 May 2026 to marry my partner of 5 years. Thanks to Dr Murray Blythe."
      },
      {
        "id": "g11hz2lfnrr-Umtoek5IYxAB",
        "author": "Mira Dishon",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I recently had a right hip replacement with Dr Blythe and I'm so happy with the result and the after-care from both Dr Blythe and his secretary Ally. I would and will highly recommend him to friends and family. Thanks Murray 😊"
      },
      {
        "id": "g11hz2lfnrr-WjE4elNuYxAB",
        "author": "Aerostone Mouldings",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I would like to thank Dr. Murray Blyth and all associated staff for the professional manner, that they showed me in my procedure and after care. I am 65 years of age and had a Right Hip replacement. Since my initial consultation Murray was polite, concise and clear in his explanation of the procedure. My wife was particularly appreciative of the time taken by Murray to call and advise on the outcome after the operation. I found Murray to be very down to earth, and I would not hesitate to refer his services.\nThank you once again,\nBruno Staltari"
      },
      {
        "id": "g11hz2lfnrr-YTNKNlNrRRAB",
        "author": "Chantal",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/11hz2lfnrr",
        "text": "As someone that works in the healthcare industry I don’t give out reviews lightly. When making decisions about your health it’s important to ensure you research all aspects from the surgical technique, to the prostheses used, cost and hospital. To me bedside manner is not a necessity just a bonus, so patients get a big bonus Murray Blythe. Murray did my first left hip replacement 8 years ago when anterior approach was less common and a fantastic outcome that hasn’t missed a step. I am now 2 weeks post op following my right hip replacement and although it might seem early to provide a review, its warranted. I gave up the crutches by day 5 and am now walking around with mild discomfort. If you are looking for a surgeon (for any procedure) make sure they can rationalise their choices due to clinical outcomes putting the patient first, like Murray. Behind every good surgeon is a fantastic team and Ally is all of that. Hopefully that is my last visit! But I will happily refer family, friends and colleagues to Dr Murray Blythe"
      },
      {
        "id": "g11hz2lfnrr-VEZSUVNWRRAB",
        "author": "John Anastasiu",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11hz2lfnrr",
        "text": "DR Murray Blythe Thank you so much for you great work\nI have never walked better being pain free now\nAn awesome surgery explained what was going to happen all the way though and made me feel comfortable during and after the surgery\nHighly recommend"
      },
      {
        "id": "g11hz2lfnrr-WXpoNmEyYxAB",
        "author": "Skinny Sean",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I had a hip replacement 6 weeks ago and I'm super impressed with my recovery, Murray and Ally are very easy to get along with and talked and explained stuff in a language i understood, Murray also has a good sense of humour which suited me as I try not to take things to serious,highly recommended ❤️❤️"
      },
      {
        "id": "g11hz2lfnrr-VTFsb1pHYxAB",
        "author": "Josh McIntyre",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I had my meniscus tear treated by Murray Blythe just 2 weeks ago and couldn’t be happier with the experience. He did a fantastic job very professional, relatable, and down to earth. From start to finish, the whole process was comfortable, easy, and smooth. Highly recommend."
      },
      {
        "id": "g11hz2lfnrr-WjNBMVdWRRAB",
        "author": "Ruth Kennedy",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11hz2lfnrr",
        "text": "This is the second surgery I have had with Dr Murray Blythe. This one was a total knee replacement. From the moment I walked into his office, I felt seen and heard. His manner is friendly and I never felt pressured into making a decision on the spot going for such a major surgical intervention.\nAli, Dr Blythe’s secretary is lovely and she knows so much. Always had an answer when I telephoned.\nSo, recovery still in process but I chose the right surgeon, no regrets."
      },
      {
        "id": "g11hz2lfnrr-YkhOQ2FGRRAB",
        "author": "Dianne Keyes",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I recently had a total knee replacement with Murray Blythe and I could not be happier . From my first visit he was professional and warm making me feel confident that the whole process would go well . I was off the heavy meds after 10 days , driving at 2 weeks and back to yoga at 4 weeks post op. Ally in his office was also great making sure I was happy with the process and was always available if I had questions ."
      },
      {
        "id": "g11hz2lfnrr-Wm1sRmJWRRAB",
        "author": "rich h",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Professional, respectful, compassionate, responsible are a few words to describe Murray , Ally and staff. Many thanks."
      },
      {
        "id": "g11hz2lfnrr-TlZndFZtYxAB",
        "author": "Jenny Robinson",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Blyth is the best orthopaedic surgeon! I recently had my right hip replaced and I would highly recommend Dr Blyth he is so humble and really puts you at ease before surgery !\nAlso I would like to say, his receptionist Ally is so helpful and knowledgeable regarding getting things booked and answering any questions before and after surgery\nThankyou Dr Blyth for my new hip ! 😊"
      },
      {
        "id": "g11hz2lfnrr-WkRsMGNrRRAB",
        "author": "glen",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I've recently had a total knee replacement surgery which I am totally over the moon with. Murray Blythe has given me my life back . Can't thank him enough and I'm so grateful and lucky to have been one of his patients. I'm extremely pleased with the results of the surgery and the expertise and skill of my surgeon"
      },
      {
        "id": "g11hz2lfnrr-TTFsa05IYxAB",
        "author": "Vincent Connor",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Very successful operations for plantar fasciitis and meniscus tear of knee. Highly recommend. Thank you, Dr Blythe."
      },
      {
        "id": "g11hz2lfnrr-Y1UxaVIzYxAB",
        "author": "Bones Wilton",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Murry and ally are so welcoming make you at ease from the moment you walk in I would definitely recommend Murry to people who need surgery he makes it so clear what he is going to do from your first visit to the operation table thank you for helping me with my ankle surgery 3 weeks ago"
      },
      {
        "id": "g11hz2lfnrr-VG1sMmNuYxAB",
        "author": "Carol Martell",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/11hz2lfnrr",
        "text": "My husband and I can't thank Murray enough for our new hips.\nTotally professional. Thankyou also to Ally and nursing staff at Joondalup Hospital.\nWe would recommend you to anyone Murray."
      },
      {
        "id": "g11hz2lfnrr-YTJGbGFtYxAB",
        "author": "Heather Brown",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Murry Blythe straightened my toes and removed a mortons neuroma, he is an excellent siurgeon and would recomment him to anyone"
      },
      {
        "id": "g11hz2lfnrr-TjFGWVZVRRAB",
        "author": "Bev Arthur",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Blythe was professional at all times, attended to all questions and reassured me. I received excellent care from Dr Blythe and his team and the surgery resulted in pain free movement. A great result for me."
      },
      {
        "id": "g11hz2lfnrr-Wms5YVNGRRAB",
        "author": "Gaylene and Rob Godfrey (Arkfiles)",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Great experience with Murray. Left anterior hip replacement and it was a straightforward process even with my complex back issues. The whole team was professional and friendly. Murray is a great surgeon with a friendly bedside manner."
      },
      {
        "id": "g11hz2lfnrr-UzBRelkyYxAB",
        "author": "Kirsty Lees",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I just recently underwent my 3rd surgery performed by Dr Blythe. Having had a THR and ankle fusion previously, it was a no brainer who I would prefer to go to to complete the trifecta with a TKR. As with all my surgeries with Murray, he explained thoroughly what I would be in store for, benefits & risks of each op and success expectations, especially with my knee replacement due to the arthritic damage to my knee. His relaxed and human bedside manner gives you confidence that you know that you are in the right hands and have made the right choice of surgeon. I was never pushed into surgery, actually the opposite due to my young age (that always makes me laugh.) and was given alternatives to try before operating as a last resort.\nI am now 6 weeks post surgery and what a true Wizard and Master Surgeon he is. I am walking unaided albeit slower but walking just the same. I have not been met with any unforeseen issues at all and I can't THANK Murray enough for making me feel human again. The trust I have in Dr Blythe as a Surgeon and as a caring Human Being I can only attest to by being a frequent flyer to his surgery and operating table for repair with his compassion & care before, during and after.\nThank you also to Ally for organising everything from beginning to end. Nothing is ever any drama or hassle. I know you're the brains in the outfit. You work as a team and that is evident from the moment you walk through the door.\nMy final recommendation for Murray and his team - 100%"
      },
      {
        "id": "g11hz2lfnrr-U0c5VGVrRRAB",
        "author": "Tim Daly",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I recently underwent a hip replacement with Dr Murray Blythe six weeks ago and couldn’t be more pleased with the results. His professionalism, attention to detail, and calm, reassuring manner made the entire process seamless from consultation through to recovery. The surgery was a complete success, recovery has been remarkably smooth, and I’m now walking comfortably with no pain. Dr Blythe and his team provided exceptional care throughout — I highly recommend him to anyone considering hip surgery."
      },
      {
        "id": "g11hz2lfnrr-RcF9QMEdnEAE",
        "author": "Louise Hoare",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Amazing 🤩 Amazing 🤩 Amazing. - not all\nHero’s wear capes."
      },
      {
        "id": "g11hz2lfnrr-3ck82Z1J3EAE",
        "author": "Nev Kent",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I cannot recommend more highly Dr Murray. Down to earth Surgeon who is brilliant at his job. Two knees thanks to Dr Blythe and his marvellous staff."
      },
      {
        "id": "g11hz2lfnrr-alktRm9nRRAB",
        "author": "Ann Watson",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Professional easy to converse with. Explains the procedure in easy to understand terms and what the after care will entail.\nI would definitely recommend this surgeon every went very smoothly, no stress.\nAlly on the front desk is very helpful.\nThe best thing ever is I was first on the list 🙂\nThankyou Dr Blythe"
      },
      {
        "id": "g11hz2lfnrr-MzRXSi13RRAB",
        "author": "Marnie Utley",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Ok it’s a long story. So back in June this year 2024 I had bursitis in my left hip. 2 weeks later I’ve a broken hip. It’s called osteoncrosis my blood supply died around my bone I know right.I been living on painkillers Tapendadol not really knowing how bad they are. My GP recommend Dr Blythe and from the moment I walked or wobbled in the impression was Fantastic. I can’t thank you enough for my new hip Dr Murray. I never thought. I was terrified this man whom I’ve met twice is going to help me.You are such a Brilliant Surgeon I can’t even put a bandaid on straight lol.You are absolutely incredible and so is Alley she’s your right hand man.woman I know.6 weeks in I actually can’t believe it. Xxx♥️🌷🌺💕🌸"
      },
      {
        "id": "g11hz2lfnrr-QOXRHbWZREAE",
        "author": "Ricci Mardon",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Was very impressed by Murrays approach, friendly ,informative and business like. And even more impressed 7 weeks down the track. Wouldn't hesitate to recommend him to Family and Friends. The lovely Ally made the whole journey so easy, efficiency personified!"
      },
      {
        "id": "g11hz2lfnrr-fMk11ZExREAE",
        "author": "Lee Kelley",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Had a total hip replacement with Dr Blythe in October after suffering for many years.\nFrom the start of my visits, I found Dr Blythe to be very compassionate, helpful and humorous, which helped me feel at ease .\nI am very happy with the surgery and feel like I have a new lease of life.\nThanks again highly recommended 👍"
      },
      {
        "id": "g11hz2lfnrr-bXRLWnhnRRAB",
        "author": "Pamela Chase",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Thank you so much Dr Blythe for you excellent treatment, as an 85yr old, you gave me confidence to go ahead with my total knee replacement and thanks to your expertise I am looking forward to pain free walking. You were caring, friendly fully outlined every detail of my procedure, answered my questions. You are the best.\nA special thank you to Alison your friendly receptionist."
      },
      {
        "id": "g11hz2lfnrr-ncXFhTFV3EAE",
        "author": "Terry",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "In 2015, I was referred to Dr. Blythe by my GP after suffering a meniscal tear in my right knee. Having never undergone surgery before, I was understandably nervous. However, Dr. Blythe took the time to thoroughly explain why surgery was the best option for my specific situation. There was never any pressure to go ahead with the procedure, and the entire process was clearly outlined, which helped alleviate my fears. After surgery, I was up and walking the same day, and within two weeks, I was back at work.\n\nFast forward to 2025, and I found myself dealing with what I believed to be a meniscal tear in my left knee. Given the excellent care I received from Dr. Blythe in 2015, I didn’t hesitate to seek his services again. After a smooth and virtually pain-free surgery, I made a full recovery in just 10 days and couldn’t be happier with the results.\n\nI’d also like to extend my gratitude to Dr. Blythe’s admin team for their prompt and helpful responses to all my inquiries and emails.\n\nI highly recommend Dr. Blythe for anyone needing orthopaedic care."
      },
      {
        "id": "g11hz2lfnrr-OFlqbDRnRRAB",
        "author": "Janette",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I have had 2 hip replacements 2019 & 2024\nBoth done by Dr Murray Blythe Joondalup.\nDr Blythe is very friendly, kind & caring. From start to finish on both surgeries I was looked after & given all the information I needed for surgery. Both hip replacements were without any issues at all. I would highly recommend\nDr Blythe\nI would like to mention Ally at reception. Ally has mastered the art of anything & everything that’s needed to get you on the operating table & then further appointments & Xrays etc for post op appointments. She has a busy job. & she does it well. Thankyou Dr Blythe & Ally\nJan"
      },
      {
        "id": "g11hz2lfnrr-fX0lMT09nEAE",
        "author": "Doug Riddle",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I had a Total Hip Replacement in November 2024, and would like to thank Dr Blythe for his excellent work and professionalism. Every part of my experience has been marked by kindness and efficiency. The staff in his Rooms and the staff at St John of God, Mt Lawley, have excelled in making my recovery quick and achievable.\nI would recommend and thank Dr Blythe and his team for their excellent treatment."
      },
      {
        "id": "g11hz2lfnrr-a1BlTTFnRRAB",
        "author": "Stan",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I rate Dr Blythe very highly. My right knee replacement surgery was performed by him with the greatest of care and there were no complications and there was very little pain if any. I now have more bend in my knee than before the surgery. I also previously had a broken femur and later a leg lengthening procedure as the result of a motor cycle accident that had resulted in the formation of bone callus around the break. Dr Blythe dealt with this irregular bone formation and because of this the operation was not a of a routine nature and took longer than normal. The result was a very successful operation and a straightening of what was previously a bowed leg and I am now walking without pain with my new knee joint replacement."
      },
      {
        "id": "g11hz2lfnrr-nX28tUUZ3EAE",
        "author": "james williams",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I had a total hip replacement performed by Dr. Murray Blythe, January 2025. I received outstanding care and post op follow up for which I am very grateful.\nObviously recuperation varies from patient to patient but after five weeks I am now able to return to work.\nI would not hesitate to recommend Dr. Blythe and his Administrator Ally. They are simply the best."
      },
      {
        "id": "g11hz2lfnrr-WWpkcGMwRRAB",
        "author": "Sonney Andela",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I had A knee replacement, it is now week 6, i can say I'm like brand new. I highly recommend doctor Murray Blythe and his team. I'd like like to say how professional they are from the receptionist to the surgery and especially looking after me. Thank you so much team. Sonney Andela"
      },
      {
        "id": "g11hz2lfnrr-V2pWcWRWRRAB",
        "author": "Western Australian Honey Pty Ltd Fewsters Farm",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "After 15 years living with worn out hips, Dr Blythe performed 2 hip replacements . The result is amazing. My once active life has been completely restored. Thank you to Murray , Ally and all the surgery team ."
      },
      {
        "id": "g11hz2lfnrr-3OUoyZlN3EAE",
        "author": "Dave",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Things are starting to catch up to me, so I decided to get some servicing done.\n\nBone spurs and clawed toes on one foot were my issues.\n\nMy feelings on the interaction with Murray are, he gives you all options available and takes time to make sure you completely understand the dynamics of the operation and are comfortable with the agreed decision made by both parties on the path to be taken.\n\nHis team is great. Ally on the front desk is polite and helpful, hospital staff were great.\n\nWe are very fortunate to live in Aus and have access to this level of healthcare.\n\nI would not hesitate to recommend him to anyone requiring a skilled orthopaedic surgeon."
      },
      {
        "id": "g11hz2lfnrr-Uc2FpTFhBEAE",
        "author": "Bob Bullen",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Here I am, at 72 years old, 6 weeks post op with two brand new knees and things could not be better for me. I have no pain, no restrictions on my activities and just a bit of stiffness to get past, albeit I'm just a smidge slower than I used to be. Murray is a great surgeon and has given me a new outlook on my life with his easy manner, sense of humor and of course skill in the theatre. Understandably the first two weeks were hard going but I turned the corner in week three and since week 4 have had almost no restrictions on what I wanted to challenge myself to do. Thank you very much Murray and I have been and will continue to recommend you to my friends for the ortho surgeries that you do"
      },
      {
        "id": "g11hz2lfnrr-M0tPRDJRRRAB",
        "author": "Ann Marie Potts",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Murray Blythe will always be my 1st choice of orthopaedic surgeon, I had my bunions operated on, before surgery he explained the whole process, pre and post op care. Took into account my fitness level and my work. Gave me time to think it out before proceeding. (Which didn't take me long as I had full confidence in him!) I proceeded with better results than I expected. Dr Blythe is very Jovial, compassionate, professional and reassuring Surgeon. I have since recommended him to my friends who required surgery for knee replacements with the same experience as I had 100% happy patients. A Brilliant Surgeon. Not forgetting g his Reception Tea. Who go out of there way to help you in any way they can. Very patient Team.\nThank you Dr Murray Blythe and your Wonderful Team.\nAnn Marie Potts"
      },
      {
        "id": "g11hz2lfnrr-JM0pXRlZ3EAE",
        "author": "Henley Steeps",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "From Vicky …. Surgery 18/2/2025. Total Knee Replacement\n\nAfter suffering for the last few years with chronic Arthritis to my right knee Dr Murray Blythe performed knee surgery (Right Total Knee) February this year (2025). I am now 6 weeks post op and almost pain free, only take Targin when needed and with physio. My pain levels have improved so much.\n\nI would highly recommend Dr Murray Blythe to anyone reading this, Family and friends…. I can’t thank him enough. Excellent and professional service from day one.\n\nSo, Thank you Dr Murray Blythe and of course Ally (Dr Blythe Secretary). You both do an outstanding job….\n\nThanks again…. Vicky"
      },
      {
        "id": "g11hz2lfnrr-2X3YtQ0d3EAE",
        "author": "Robert Biddle",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "After 14 previous knee operations, I'm on my last changes as far as what can be done. I was recommended to see Dr Murray Blythe for a revision of a knee replacement received elsewhere in 2020 and I'm so glad that i did. Mine has always been a complex injury and Dr Blythe and his staff worked with me to obtain what I believe to be the best outcome that I could ask for. Dr Blythe is meticulous and thorough in his procedures and his service and aftercare is second to none. I definitely recommend his services!!!"
      },
      {
        "id": "g11hz2lfnrr-YVdKSFYzYxAB",
        "author": "Jamie Brace",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr. Murray Blythe is an absolutely amazing surgeon. I was dealing with severe pain from arthritis, and thanks to him, I’ve now had successful fusion surgeries on both my feet , my left foot recently . He truly is a master craftsman – the results have been life-changing, and I couldn’t be more grateful for his skill and care.\n\nThe whole experience has been made even better by the fantastic Alison on reception absolutely outstanding – she keeps everything running smoothly, from booking appointments to follow-ups, always with a friendly and professional approach.\n\nI can’t recommend Dr. Blythe and his team highly enough. If you’re looking for an expert in orthopaedic care, this is the clinic to go to"
      },
      {
        "id": "g11hz2lfnrr-TldOelJYYxAB",
        "author": "Amanda Sommer",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Blythe was recommended by my GP.\nThe whole process ran smoothly from the first time I walked into the clinic to walking out today. I can’t Thank Murray Blythe and his team enough for the friendly and professional conduct. My recovery went without a hitch and minimal pain. I truly have a new lease on life again! 😊"
      },
      {
        "id": "g11hz2lfnrr-3b1p1Vkx3EAE",
        "author": "Carol Hunter",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Murray Blythe is an amazing surgeon, he is confident and positive, extremely easy to talk to and explained the process for the THR surgery and recovery in a way that gave me the confidence to go ahead with the operation. I am so grateful to my GP for referring me to his practice for my total hip replacement and I would not hesitate for a moment in recommending Dr Blythe and Ally for their support and efficiency."
      },
      {
        "id": "g11hz2lfnrr-UTFSWVQyYxAB",
        "author": "Caroline Warde",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "What can I say Dr Murray Blythe is an exceedingly excellent knee replacement surgeon, I love his old fashioned bed side manner he is always happy and explains everything to you about the operation. His follow up post op appointments are also a pleasure to attend. I would highly recomend Dr Blythe for a knee replacement."
      },
      {
        "id": "g11hz2lfnrr-UTBSRmNrRRAB",
        "author": "Mel Davey",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "My wife recently had a total knee replacement with Murray. The pre and post operative interactions with him and his team have been excellent and her recovery has been nothing short of brilliant. We would recommend his expertise to anyone contemplating orthopaedic surgery."
      },
      {
        "id": "g11hz2lfnrr-ZERoR00xRRAB",
        "author": "Jo-Anne Orbuck",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I went for my 6 week post-op appointment today following Total knee replacement surgery.\nI first saw Dr Blythe around 5 years ago and was advised I needed a TKR. By my own choice I delayed having surgery.\nSince recontacting Dr Blythe’s rooms this year it has been a very smooth process. The staff are all very helpful and professional.\nDr Blythe has a very calm friendly demeanor and a sense of humor. I felt listened to every step of the way and had a clear understanding of what to expect on the day of and following the surgery.\nI can honestly say that I couldn’t be happier with the treatment I received or the results. I wish I had gone ahead with it 5 years ago!\nThank you so much Dr Blythe."
      },
      {
        "id": "g11hz2lfnrr-dDlYUnZnRRAB",
        "author": "Mike Lowrey",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Could not have asked for a better Surgeon. Very jovial and very helpful, make you comfortable from the first consultation.\nGreat service from his team. My wife had a full knee replacement two months ago and what an awesome job he has done.\nDr Blythe is a true professional, down to earth, easy to talk to and caring. I would highly recommend Dr Murray, without any hesitation. Thanks again Dr Murray ."
      },
      {
        "id": "g11hz2lfnrr-Vm5kb2NrRRAB",
        "author": "Dianne Pries",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "From my first visit with Murray to my last yesterday for 12 months, I have to say I enjoyed each and every visit.\nMurray made me feel at ease with his jovial manner and open honest opinions.\nI am now 6 weeks out from TLKR and extremely happy with my results.\nEvery step of my procedure was explained fully, no questions were left unanswered.\nBedside manner was a breath of fresh air from Murray and his team.\nAllison at reception was always helpful with any request made by me.\nThank you so much for all your care."
      },
      {
        "id": "g11hz2lfnrr-TXpoSFpuYxAB",
        "author": "Smott",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Surgery 24/6/2025 Joondalup Hospital\nI had my knee replacement surgery with Dr Blythe, I am 6 weeks post operation. When I originally went to see him, he discussed all options, including pain management. I was so impressed that he didn't push me towards surgery on the first visit, I respected that and it gave me time to be sure of my final decision to go ahead with surgery. Being my first time, it was a daunting process but Dr Blythe was reassuring, professional, very efficient and had a sense of humour, which suited my personality. I felt I was in good hands, I was never in much pain, my fast recovery has been amazing. I put that down to a fantastic surgeon, who knows his stuff. I'm very thankful to him and his team, especially Ali, who is super effecient and patient, nothing is too much trouble. I would highly recommend Dr Blythe"
      },
      {
        "id": "g11hz2lfnrr-IX2FiRmJREAE",
        "author": "Susan Winnall",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Blythe provided expert knowledge and kindness at a time of need. Thank you!"
      },
      {
        "id": "g11hz2lfnrr-WenBMZEZ3EAE",
        "author": "penelope williams",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I could not have asked for a better surgeon. Murray did a brilliant job on my hip replacement. I have a life again."
      },
      {
        "id": "g11hz2lfnrr-WdExmSlp3EAE",
        "author": "Sharon Stewart",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Murray Blythe is a wonderful surgeon he recently operated on my knee repair to meliscus I’ll be staying in touch with him for future knee replacement"
      },
      {
        "id": "g11hz2lfnrr-yNElHNWFBEAE",
        "author": "Edmund Arawi",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Had a total hib replacement opperation with Dr Blyth now six weeks after and very happy with the results."
      },
      {
        "id": "g11hz2lfnrr-eTlUTG1BRRAB",
        "author": "Judith Borkowskis",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Blythe is a fantastic orthopaedic surgeon. A great bedside manner and thurough. Well recommended."
      },
      {
        "id": "g11hz2lfnrr-enM2UjF3RRAB",
        "author": "Victor de roo",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Thank you Murray Blythe for taking such good care of me, after extensive damage to my ankle, Murray was able to get me walking again, it's a slow recovery, but your professionalism as a orthopedic surgeon, bedside manner and sense of humor has got me through the worst, today was my last visit 5 months of care, and always welcome to contact you if I have issues with the ankle down the track👌thanks to Ali too, you are a very good receptionist, 👌its a great team\nSandra de Roo"
      },
      {
        "id": "g11hz2lfnrr-OX3JlU0tnEAE",
        "author": "Alex Moran",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "My wife has had a bunion and two toes operated on by Dr Blythe and she could not be more satisfied with his Bedside manner and his show of respect for her, I would highly recommend Dr Murray Blythe to anyone ."
      },
      {
        "id": "g11hz2lfnrr-WMkp5QVNnEAE",
        "author": "Graeme Malatesta",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "My knee replacement was a success. It has allowed me to have a normal life. I can even chase my grandkids and back to playing Softball. Thanks to Dr Murray"
      },
      {
        "id": "g11hz2lfnrr-qLUszNWZBEAE",
        "author": "Georgie B",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "My father had a very damaged hip through bone degradation and we have been very happy with Dr Blythe’s manner, the way he kept us informed, the outstanding work he did on a difficult operation and his dedication to ensuring the hospital supported his vision of giving my father a pain free life.\nVery grateful to Murray"
      },
      {
        "id": "g11hz2lfnrr-aUozMl93RRAB",
        "author": "dale thompson",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Fantastic personable surgeon with equally brilliant staff. Ally the practice manager epitomises effective communication and has a sunny personality. The results of my total hip replacement have given me back my life. I can't thank Murray and his team enough."
      },
      {
        "id": "g11hz2lfnrr-NVBQZ3dnRRAB",
        "author": "Mark Curtin",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Just had Dr Blyth carry out Arthroscopic knee surgery and have to admit his explanation was comforting and post surgery my knee had never been better. Also his receptionist Alison was very helpful with booking appointments and hospital bookings. Have already recommended him to other people."
      },
      {
        "id": "g11hz2lfnrr-NGZPY3NRRRAB",
        "author": "m t",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I found the administration staff both courteous and instructive; all information regarding admission was prompt and accurate.\nDr Blythe was very professional while maintaining an excellent rapport. His explanations were very reassuring and I felt I was included with respect in every part of the process.\nPost operative care was comprehensive and the outcome was a much greater range of mobility than I had hoped for. Highest recommendation."
      },
      {
        "id": "g11hz2lfnrr-N2JlU213RRAB",
        "author": "Coral Cato",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "My husband had his knee replacement surgery in October 2022.\n12 months on he is going great.\nMurray Blythe's surgery has made both our lives so much better. Considering he is in his 80's and not complaining about the pain.\nThank you so much 👍"
      },
      {
        "id": "g11hz2lfnrr-al9LSzJnRRAB",
        "author": "Dave Scammell",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "My sincere thanks to an excellent surgeon. Murray is not only an excellent surgeon but a true personable gentleman who genuinely cares about his patients. My revision TKR is responding well and in a most timely manner.\nAlso thanks to a highly efficient And delightful all-rounder receptionist and office manager in Ally makes the experience so professional."
      },
      {
        "id": "g11hz2lfnrr-KaDk2ZU5BEAE",
        "author": "lesley lee",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Blythe is down to earth, easy to talk to, professional and caring. His receptionist Allison is so competant and organised and helped things run smoothly. I had a hip replacement and was quite anxious but Murray and his team at Joondalup Health Campus were amazing and made the whole experience very smooth and their care was second to none. Within the hospital everyone had a very high regard towards Dr Blythe which was also reassuring when you are having major surgery. I had a second surgery that Dr Blythe also did. Exceptional treatment."
      },
      {
        "id": "g11hz2lfnrr-yaUszaUlnEAE",
        "author": "Rafah Rifaat",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I recently underwent Morton Neuroma surgery with Dr. Murray Blythe, and I couldn't be more pleased with the entire experience. From the initial consultation to the post-operative care, Dr. Blythe is exceptional.\n\nDr. Blythe demonstrated a high level of expertise and professionalism. He took the time to thoroughly explain the procedure, address all my concerns, and ensure I was comfortable every step of the way. He made me feel confident and at ease with the surgery.\n\nThe surgery itself was a success, and my recovery has been smooth. Dr. Blythe's skill and precision are evident in the results, and I am already experiencing significant relief from the pain I had been enduring for so long.\n\nI highly recommend Dr. Murray Blythe to anyone in need of an Orthopaedic Surgeon. His dedication to patient care and his surgical expertise are truly outstanding. Thank you, Dr. Blythe, for giving me my mobility and quality of life back!\n\n-RAFAH RIFAAT\n13-07-2024"
      },
      {
        "id": "g11hz2lfnrr-LU0zRDNBRRAB",
        "author": "Janet Durrant",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I had my first hip replaced by Dr Murray Blythe in 2017 & the 2nd hip 8 weeks ago.\nBoth total pain free success stories.\nThe whole process was informative & efficient with care & great follow up.\nDr Blythe was recommended to me by a fellow dancer 💃🏻 who advised me he was up to date using the newer frontal incision technique… with less muscle damage & quicker healing.\nDr Blythe is not only a great surgeon, he is also personable & treats you like you really matter.\nThe first hip was scary but he put me at ease with his friendly manner.\nThsnkyou for giving me my pain free life back DrBlythe."
      },
      {
        "id": "g11hz2lfnrr-WbnQ3clJnEAE",
        "author": "Kym Isaacson",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Murray Blythe is the real deal, he exudes confidence and I knew from 2 minutes into our first meeting that he was the right choice for my hip replacement. I like his direct manner and banter and Alison his Office manager is the same, which is why the practice works so well. I have just seen Murray for my post op 3 month follow up. I am going great, back at work - pain free and not limping about and very greatful for his skills and persona. I am also equally greatful to Alison who allows Murray to do his orthapedic Magic by dealing with the \" Office stuff \" scheduling etc. 200 percent recommend Team Murray Blythe"
      },
      {
        "id": "g11hz2lfnrr-UdzRMT2V3EAE",
        "author": "T D",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "My husband has just had his 12 month review with Dr. Blythe after successful double knee replacement . There's no guarantee with any surgery but having all the facts, a competent personable surgeon and kind caring team has given him a pain free retirement. He listened to the pre and post op advice did what was asked and the results speak for themselves. You realise after this type of surgery the calibre of the surgeon, thank you Dr. Blythe."
      },
      {
        "id": "g11hz2lfnrr-UdlAzMWNREAE",
        "author": "Vicky",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I recently had ankle surgery with Dr Murray Blythe Orthopaedic Surgeon at Joondalup Health Campus and am extremely happy with the outcome. I have minimal pain at Day 14 and at post op, Day 10 Dr Blythe explained everything he had done surgically and showed me photos of the treated areas. I have found Dr Blythe to be extremely professional at all times and he has a warmth and friendliness that allows you to ask all the questions without feeling pressured. I can highly recommend him to anyone who requires foot and ankle orthopaedic surgery. Also his Secretary Ally is amazing and very efficient. Thank you both."
      },
      {
        "id": "g11hz2lfnrr-5bmRQY0NnEAE",
        "author": "Debbie Pendle",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "My sincere thanks go out to Dr Murray Blythe for the awesome job he has done on both my hips. I was so impressed with my out come that I have highly recommended him to a few of my friends who needed their hips or knees done. Many thanks Murray you’re one hell of a surgeon and you make your patients feel at ease.\nI would also like to thank Allison the secretary for always being so friendly when ever I have been to the consult room."
      },
      {
        "id": "g11hz2lfnrr-WdHFIdWJBEAE",
        "author": "Shaun Prescott",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I have had two hip replacements with Dr Murray Blythe over the past two years and have been very, very happy with the whole process and the outcome that it has achieved. I am very grateful that I am no longer in any pain in either hip.\nI would not hesitate to recommend Dr Blythe and his surgery to anyone and in fact I have recommended Dr Blythe to my brother who also needs a hip replacement."
      },
      {
        "id": "g11hz2lfnrr-WaFp2OE13EAE",
        "author": "Jocelyne RICHARD",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I have just had my three months check-up for a total hip replacement by Dr Murray Blythe. I could not be more grateful with absolutely every aspect of this procedure... I am back to my previous level of fitness, which I had not thought possible six months ago.\nDr Blythe had been highly recommended by my GP; not only did he do an excellent surgical job, but I found him to be a very easy-going person, quite approachable and very clear and thorough when explaining the procedure. I have no hesitation in recommending Dr Blythe.\nHis secretary Ally was also very efficient and helpful with the administrative side and attended to our needs in a very professional manner."
      },
      {
        "id": "g11hz2lfnrr-M2E2X3RRRRAB",
        "author": "Vic Ingram",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I am very happy and pleased with results of my hip surgery. After only a few days I was up and moving with no arthritic pain. I have just reached the 3 month mark and I am out walking free, on occasions trotting some 30 metres or so. At 79 years of age I was carrying my right hip from accomodating the pain - not now.\nI have no hesitation in recommending Dr. Murray Blythe for hip surgery. A very relaxed, communicative person who obviously loves his profession. He is thorough with his explanation of the surgery procedure, reassuring my needs. A very pleasant man who has a very thorough receptionist lady on the front desk.\nThank you doctor and your team of professionals for the manner in which you dealt with my surgery.\nNo hesitation in recommending Dr. Murray Blythe."
      },
      {
        "id": "g11hz2lfnrr-1cE9LblZ3EAE",
        "author": "ian secomb",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "We found Murray to be a completely down to earth, compassionate, and knowledgeable in finding that I had arterial problems and had this not been detected and referred on, my ankle fusion would not have been successful. Also because of the intense pain I was experiencing, Murray was able to expedite my surgery. His follow up appointments have been informative and enjoyable. 6 months down the track I am completely pain free, and full weight bearing. I could not recommend Dr. Murray Blythe highly enough for any procedure that would he would recommend."
      },
      {
        "id": "g11hz2lfnrr-MzZtRV9RRRAB",
        "author": "debbie hendriks",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I had knee replacement surgery with Murray Blythe 6 weeks ago after he was highly recommended by my GP. I was delighted with his friendly demeaner and down to earth attitude. He has a great beside manner that immediately put me at ease, while keeping me well informed of my surgery details and recovery timeline.\n\nMy surgery was scheduled for January, however I contracted covid and was unable to keep my original date. Nothing was too difficult for Ally, his receptionist, as she worked around an already busy surgery schedule and my holiday commitments, to rebook my surgery. I was incredibly grateful she managed to find a timely alternative date.\n\nMurray’s theatre team were brilliant, and I felt very relaxed before my procedure. His visit after surgery made me feel comfortable that I’d made the correct decision and he let me know my surgery was textbook, and what I could expect in the next few weeks. 6 weeks on, I’m so happy with my recovery and Murray’s can do, positive attitude which suits my proactive return to my exercise regime and activities. I believe he reads his patients very well.\n\nI wouldn’t hesitate to recommend Murray to friends and family, and if I needed further surgery, I’d definitely return to Murray."
      },
      {
        "id": "g11hz2lfnrr-6OU0tNFpBEAE",
        "author": "Gloria Evans",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Murray Blythe did an amazing Total Hip Replacement surgery, on my right hip, 7 weeks ago. My recovery has been excellent, way better than my expectations, so I am very thankful. I was walking without my walker, 2 weeks after surgery, & now I am walking normally, & completely pain free,...for the first time in years. From my first consult with Dr Blythe, I was made to feel very comfortable, & confident in his suggested surgery, which he explained to me in \"easy to understand\" language, which put me at ease. I can't recommend him highly enough,.....& I will definitely be going back to him,...for my left hip replacement."
      },
      {
        "id": "g11hz2lfnrr-cUlLM2pRRRAB",
        "author": "Vie",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Good surgeon and office staff were very helpful"
      },
      {
        "id": "g11hz2lfnrr-d0xMSmtBRRAB",
        "author": "Kyuree Kim",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I wouldn't reccommend this one for anyone. Don't get extra stress when you need proper treatments and supports by choosing this doctor."
      },
      {
        "id": "g11hz2lfnrr-SM3VXT1p3EAE",
        "author": "Des Byrne",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I had hip replacement surgery 3 weeks ago and I am over the moon with the results thank you to to everyone involved in my surgery and my recovery ❤️‍🩹"
      },
      {
        "id": "g11hz2lfnrr-aWZfLW1nRRAB",
        "author": "Dolores jones",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I was well look after from start to finish with my Knee Surgery he answered all my questions even the silly ones and I must say all his staff were lovely and very helpful"
      },
      {
        "id": "g11hz2lfnrr-KMHJYNUFREAE",
        "author": "George Paton",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "had left hip replacement Tuesday.. sitting at home Thursday full weight bearing and amazed at technology Dr Blythe uses Highy recommended for expertise and care..Allison his PS is awesome"
      },
      {
        "id": "g11hz2lfnrr-dmNlRDZnRRAB",
        "author": "Dorothy Rankin",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I found Dr Murray Blyth to be such pleasant down to earth person,\nThe care I had before during and after my operation to replace my left hip was first class and of course all of his team,\nDr Murray went out of his way to make sure I was well cared for , I would not hesitate to recommend him as I have done to friends and family,\nOnce again Dr Blyth thank you so much for making my life pain free."
      },
      {
        "id": "g11hz2lfnrr-X3VDajB3RRAB",
        "author": "Winifred Saxby",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Had plate put in my big toe to straighten it and hammertoe fixed was pleased with the surgery.Murray explained everything to detail before the operation ,was pleased with the results.Told Murray I will be back to see him next year with my knee replacement."
      },
      {
        "id": "g11hz2lfnrr-4eGFfU0R3EAE",
        "author": "Robert McDonald",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I am not Dr. Murry Blythe's patient, my wife is.\nThank you Murry for the kind, compassionate care you have shown my wife. In the recent past she has been in incredible pain and unable to sit in a car. 11 out of 10 pain levels, if you have ever sat with your wife while she screams and writhes in pain you will know why I am so grateful to Murry.\nThanks to you and your receptionists caring nature and treatment we can again have a liveable life.\nI can never repay to you for that which you have given us."
      },
      {
        "id": "g11hz2lfnrr-odUplOU1BEAE",
        "author": "Elisabeth Bernadette",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "How can a professional like Dr Blythe, suggest to us to find another Surgeon to our face, purely based on one sided complaint from his staff instead of considering my husband as his patient, half way under his care, due to his medical condition and needing the 2nd stage surgery to be completed by him??\n\nDr Blythe didnt even ask our side of story first about what happened? He just decided to accuse us based on the staff complain and start telling us if we dont like his service, we can find another surgeon, just out of the blue? We didnt even have any intention of looking elsewhere nor did we give him any complaints whatsoever. He put us in place!\n\nWowwwww, what is going on here??\n\nSeems like Humanity and Professionalism has gone out the window?!\n\nAs in previous reviews on this page (not from us), we have to agree that it is about time that Dr Blythe's receptionist should find another job. In saying this, this is a healthcare setting where you need to have lots of compassion in dealing with people / clients that have different needs and circumstances. You would expect someone as a receptionist to be capable of showing some empathy and respect towards the clients, rather than giving you a look of disgust at the workplace when she is not interested in your requirements, and cant accept any input / discussions.\n\nWe definitely WOULD NOT RECOMMEND this practice to anyone !!!\n\nEventhough we are in need of his help, only half way treated, it doesn't mean they can just devalue and belittle us like this! We have self-pride.\n\nAlso confident of a good solution out of my husband's condition elsewhere.\n\nIn our opinion, there must be plenty of other more ethical and professional Orthopaedic Surgeons in Perth that we / other people can go to."
      },
      {
        "id": "g11hz2lfnrr-dkp6LWh3RRAB",
        "author": "Peter McCloy",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Firstly I was under the care of different Orthopaedic-Surgeon; I had RTHR surgery on 23rd Aug 2022 with him, unfortunately was having infection 3 weeks post-op. Then got 2 clean-up surgeries with no luck, as I was still infected. So I decided to try another Surgeon and found Dr Blythe to help me to reach the end of this long journey. To make it clear, Dr Blythe agreed to take on my case from my Request NOT the request of my previous Surgeon. Things started pleasingly, he advised that 2 stages of revision surgery was required.\n\nLong story short, 1st surgery to remove the infected hip was done in Nov 2022. Left me with no right hip, a spacer only (non weight bearing) for these last 3 months. It is definitely has its own struggle to my daily life activities, continuous pain, heaps of pain medications, no income, and mental battle too.\n\nFast forward to 21st February, 2023: supposed to be the final surgery day! But at last minute, the surgery got cancelled due to a rash (Had done my pre-op prep and was ready to be wheeled to the surgery room). Of course I was devastated with this unexpected moment, and instead of him giving little time to explain things to me (when I was down), didnt understand a rash could cancel the surgery that I have been hoping for, I was wondering what's next, what to do, where we go from here etc etc, he just gave me a pat on the back and left.\n\nI decided to call his receptionist asking if I can see him for further information before I left the hospital. But I was told that he was busy whole day that day and told me to just go home.\nI insisted to the hospital staff that I will not leave until I can see and talk to him, he finally saw me a couple of hours later.\n\nSaw him next on 28th Feb, 2023 to discuss about my rash, planning things related to my rash and to find out how the surgery could be rebooked.\n\nSeems to me I was asking too many questions?? because He told me: He has spent too much time talking to me explaining things related to my case, and telling me that I am not his only client and all this time spent with me was Rubbish, WOW !! As far as I know, I thought you suppose to ask questions that you are not sure about, during your consultation right? Including time frame etc. Considering I also been having a long and rough journey. Is it Rubbish?\n\nHe may say I am not his only client, but at that moment, I decided: He is NOT the only Surgeon !!\n\nAdding to this, I found the receptionist to be patronising in attitude, zero compassion &\nquite rude. Even when requesting a letter for my Employer and or to my Insurance company, seemed to be a major issue for her, when finally she emailed them to me, they were always only an attachment with no body letter / correspondence manner to explain things whatsoever.\n\nThrough this case, I definitely believe when people say:\nEmotional Intelligence (EQ) is a way of recognizing, understanding and choosing how we think, feel and act. In other words, IQ is nothing without EQ. And Not All of Us Has the EQ -"
      },
      {
        "id": "g11hz2lfnrr-d0pMQjJBRRAB",
        "author": "Yohana Mccloy",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "You need to work on showing better compassion to patients, and please check in on how your reception have been treating your patients. Absolutely terrible. I am very sure there are other professional Orthopaedic Surgeon teams in Perth that would be more empathetic and care of your needs as a patient."
      },
      {
        "id": "g11hz2lfnrr-eTRueHpBRRAB",
        "author": "Sam Pintaudi",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I was referred to Dr Blythe by a friend of a work colleague who is a podiatrist. I presented to Dr Blythe with an arthritic big toe on my left foot. He offered a few suggestions, one of which was a new procedure whereby he inserts a washer (cativa) between the joint to replace the worn cartilage.\nAs both my toes were affected, I asked to have the procedure on both toes at the same time. He refused stating that it would hinder my recouperation.\nTwo years ago, I returned to have a full knee replacement. Before the procedure he referred me to other alternatives. Partial knee replacement and cortisone injections. I opted for a full knee operation.\nThe operation went as planned and much to everyone’s surprise, including myself, I was released from hospital with 48 hours of the procedure.\nI recently returned (9 weeks ago) to have my other toes repaired.\nDr Blythe has always been professional and brutally honest with his assessment. He has an almost comical bedside manner which can detract from his exemplary surgical skill set.\nI would thoroughly endorse Dr Blythe and his team for any orthopaedic procedure and have nothing but praise for them."
      },
      {
        "id": "g11hz2lfnrr-NEo3YnhnRRAB",
        "author": "Andrew Beecroft",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Fantastic surgeon, my foot was basically hanging off and 2.5mnths after Murray put me back together I was walking around without crutches. He was very direct with what to expect and I expect the people putting in bad reviews ( not that there's many) are just difficult clients, I honestly think it's disgusting that these brats act like victims and talk negatively about a man who literally fixes people for a living."
      },
      {
        "id": "g11hz2lfnrr-COWRxQVBREAE",
        "author": "Dean Allison",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Blythe’s receptionist has taken more than 8 days to provide an appointment for an initial consultation with Dr Blythe. At the time of writing this review, I’m still without an appointment for my injury. Either this guy earns too much money, or his receptionist needs to look for a new job. It’s a shame because my GP highly recommend Dr Blythe to me, but I’m yet to work out why??\n\n6/2/23 - received a telephone call by appointment by Dr Blythe stating he could not provide surgery advice due to this review being posted and that I pose too much of a risk as I’m likely to complain in the event that surgery doesn’t go as planned. To say this is disappointing is an understatement.\n\nPerth has plenty of great orthopaedic surgeons, I wouldn’t recommend this one."
      },
      {
        "id": "g11hz2lfnrr-a3IyMW93RRAB",
        "author": "Steeve",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Very comfortable to recommend Dr Blythe. I saw two specialists for guidance on recommended course of action before deciding who and how to proceed. Dr Blythe provided a good level of detail on the procedure, including any complications – of which there was none.\n\nPicture included with this feedback of the operation undertaken.\n\nMy recovery is 4+ weeks ahead of schedule. This could be attributed to the quality of the procedure and guidance on post operative care.\n\nPricing for the initial consultation, operation, and follow up has been competitive. Flexibility in location for the operation and any differences in costs was greatly appreciated.\n\nThank you."
      },
      {
        "id": "g11hz2lfnrr-OTg2S3BRRRAB",
        "author": "Gavin Little",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I recently had knee Surgery and through the process of consultation and the Surgery I found Dr Blythe asked all the right questions and gave me a huge amount of information that would help me through the process. Dr Blythe gave a reassuring confidence through knowledge and yes.. some humour!\nA great outcome was achieved !\nThankyou Dr Blythe and your team for a job well done."
      },
      {
        "id": "g11hz2lfnrr-eGVYdGlRRRAB",
        "author": "Jim Clare",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "My wife was first referred to Dr Blythe about 61/2 yrs ago by our GP for her hips. At that time her right hip was giving a lot of pain. X-Ray showed her left was worse but no pain. Had her right hip done in Joondalup. Recovery was very quick with no problems. Found Dr Blythe and team very friendly and helpful no complaints.\n6 yrs later have just had her left hip done as it was painful. This time in Hollywood. Can not believe how quickly she recovered this time. Walking with a “stick” after 4 days. She is very very happy with the end result. A friend in seeing this is now getting his hip seen to by Dr Blythe.\nAgain Dr Blythe and receptionist (Alison) where very helpful and friendly.\nWould recommend Dr Blythe to friends."
      },
      {
        "id": "g11hz2lfnrr-4eV8zN2JnEAE",
        "author": "Karin Nitzsche",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "The first time I had contact with Murray Blythe was a few years back when my mother (then in her late 80s) had an emergency repair of her knee replacement, which had come totally apart. Murray went to great length investigating what would be the best solution, contacting my mother`s former surgeon and discussing it with other collegues. He even rang me from theater to inform me that the operation had been successful.\nA few years later I needed a hip replacement and had been referred to another orthopedic surgeon. That surgeon (not Murray) placed me on a waiting list (I am a public patient), where I hung around for almost 3 years (Covid also happened in the meantime). My GP then referred me to Murray Blythe and the healing in many ways started. Firstly he promised to operate as soon as \"Covid\" would make it possible and then I experienced being cared for in the best way possible. There were some minor complications in hospital (not Murray`s fault) where he helped more then I could have hoped for. The after-care was thorough and faultless. I travelled soon after overseas and enjoyed my new hip climbing mountains and stairs with no problems whatsoever.\nI know Murray as caring, polite, humerous and professional surgeon and would not hesitate to recommend him any time.\nHis secretary, Alison, is a lovely person, who made me always feel welcome and looked after. She is polite, friendly and also very efficient, which I personally appreciate a lot.\nFor me they are a team I have always been looking forward to see and be cared for."
      },
      {
        "id": "g11hz2lfnrr-c0w3cHdBRRAB",
        "author": "Keith Love",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "After many years of pain, which affected my mobility, I had a right knee (total replacement) back in August 2022, then left knee (total replacement) in March 2023. I would highly recommend Murray Blythe to anyone considering this type of surgery. Murray was very professional in all my dealings with him. He is easy to communicate with and listens to any concerns with empathy and understanding. His secretary Ali has been a pleasure to deal with, always going that extra mile to make things happen. Thankyou to both Murray and Ali for helping me to keep doing the things I enjoy in my retirement years."
      },
      {
        "id": "g11hz2lfnrr-aF83SGhRRRAB",
        "author": "Gail Dobe",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr Blythe did a knee replacement for my husband three months ago and the results are amazing. He has full movement again and little or no pain. The whole process was made easier as Dr Blythe and his team are both professional and caring. Dr Blythe is very easy to talk to and answers all your questions in a friendly and straightforward manner. We would highly recommend Dr Blythe to anyone requiring an orthopaedic surgeon."
      },
      {
        "id": "g11hz2lfnrr-OWJqMHBRRRAB",
        "author": "Therese Obern",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "In March 2023 I had a hip replacement performed by Dr. Murray Blythe and I cannot speak highly enough about the level of his professionalism and easy caring manner. From the initial consultation to the post-operative follow-up, every aspect of my experience was excellent.\n\nA shoutout also goes to Ally at the front desk who did a wonderful job organising the admin side of things. Her efficiency made the process seamless.\n\nI highly recommend Dr Blythe to anyone in need of an Orthopaedic Surgeon and thanks to him I’m now back to a pain free active life."
      },
      {
        "id": "g11hz2lfnrr-1MkphOFJBEAE",
        "author": "Mike Scott",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I had a full knee replacement 3 months ago, and am very happy with the outcome.\nI found Murray to be very personable, and more relatable and down to earth than many specialists I have dealt with. I would strongly recommend him to anyone considering this operation.\nI also found his receptionist Alison was always helpful and efficient."
      },
      {
        "id": "g11hz2lfnrr-MTYtWmxBRRAB",
        "author": "Ray Mooney",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I had the good fortune to be referred to Murray Blythe for a total knee replacement.A better or more professional experience or outcome i could not have wished for .The knee ,which is the star of the show, is fantastic, full movement walking normally and this after 6 weeks .I was however off crutches after 10 days! A scar barely noticeable .Murray and his staff are total professionals and you can be sure that I will be returning to have the second replacement in the future ."
      },
      {
        "id": "g11hz2lfnrr-MHN2a2x3RRAB",
        "author": "Anne Elam",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I would highly recommend Murray. He is an excellent orthopaedic surgeon and has a warm, personable manner. From my first consultation to theatre to post op. I felt in safe hands, reassured and relaxed. I like details to be explained to me and they were, and my questions were all answered clearly and fully. I've also been impressed by Murray's staff who are highly competent and friendly professionals and the interaction between them and Murray shows a happy and a strong team.\n."
      },
      {
        "id": "g11hz2lfnrr-SczltVExnEAE",
        "author": "Marilyn Lantzke",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "In 2018 I thought I needed a knee replacement but after seeing Dr Murray Blythe he advised me to wait and with carefully guided injections I managed to stave it off until March 2023. I only waited one week for my first appointment followed by xrays and an MRI very soon after. I nominated my own operation date as March 23rd. 3 days later I was discharged then after another 3 days I fell landing full weight on my operated leg. Dr Blythe saw me immediately and sent me for an xray and results were already waiting when I returned straight after to his office. Except for jarring and severe bruising there was no damage to the new knee. Dr Blythe's receptionist Alison is very dedicated to her job and is extremely efficient. I found her to be very friendly and helpful on all of my visits. Today I had my 6 weeks check up and all appears to be normal and on track for this stage. I would recommend anyone contemplating a knee replacement to consider using Dr Murray Blythe who is not only well experienced but also has an amazing bedside manner. He is always friendly and willing to listen. A pleasure to have used him for my orthopaedic surgeon and I would certainly use him again should I need to."
      },
      {
        "id": "g11hz2lfnrr-odGVpSFVBEAE",
        "author": "Brian Bowyer",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I have been dealing with Murray Blythe for approx 5 months awaiting to have a complete knee replacement this eventually took place 4 weeks ago.\n\nI have to say that he and his staff have been excellent since day one, the information that has been given to me has always been both timely, informative and professional\n\nMy knee, post operation has been good and is healing well and I am still receiving post OP appointments with Murray and updates from his reception staff.\n\nSincere thanks to all at the practice and special thanks to you Mr Blythe."
      },
      {
        "id": "g11hz2lfnrr-cFpTR3FRRRAB",
        "author": "Jennifer McDonald",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Dr. Murray Blythe replaced my right hip over 12 mths ago & I couldn't be happier.\nHe was thorough with all the information & even delivered it with a touch of humour, which really put me at ease.\nThe surgery went well & I was back living my best life in no time.\n\nI recently had to return to see Murray with an unrelated problem & Murray was wonderful arranging treatment that has improved my pain immensely, he then contacted me days later to check on my progress.\nIf you're looking for a great surgeon, look no further than Murray Blythe.\nI highly recommend him."
      },
      {
        "id": "g11hz2lfnrr-Sdk1mWE1nEAE",
        "author": "Lee-Ann Clements",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "I have had two surgeries performed by Murray & can honestly say, he was a Godsend to me. First was in layman's terms, a foot reconstruction, no other surgeon wanted to touch it. Murray warned it would never be perfect but the pain I was in meant I would try absolutely anything. This surgery was done in June 2020 & fast forward to today, the foot is at a minimum, 80% better. A success in my mind.\nNext time I saw Murray was August 2021 about my knee. Being 50 at the time, we discussed whether a full knee replacement was a viable option as I am considered a bit on the young side for this surgery. I spent a few months deliberating it & in January 2022 went back to Murray & asked for him to do it.\nThe following month, I was in hospital and the operation was done. A year later & I am a completely new person - mobile, pain free & incredibly happy.\nI have referred my daughter to Murray & as I am an aged care case manager, I have had the pleasure of referring my clients to Murray also.\nEvery encounter with Murray has been a pleasant one. He has a great sense of humor, always happy to listen, remembers personal details, is encouraging & supportive & makes me feel comfortable & safe.\nAs for the reception staff, Ally is lovely, has empathy & has never made me feel anything other than welcome. Perhaps her efficiency has people misjudging her for being rude?? I don't see that though.\nIf ever I need orthopedic advise or surgery, I won't hesitate going back to see Murray."
      },
      {
        "id": "g11hz2lfnrr-eEwzczdnRRAB",
        "author": "lee garrett",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "Super happy with Murray! Thank you so much for making my surgery run smoothly. Excellent care and information from start to finish.\nThe care i received before during and after my procedure, was excellent.\nAbsolutely delighted with your service, Murray is approachable and relaxed, professional and sensible , giving realistic advise to match my lifestyle.\nAlso thank you to Alison running front of house with professionalism, efficiency and a caring attitude, helping us with our back to work plan.\nNothing was too much trouble, really grateful would highly recommend ."
      },
      {
        "id": "g11hz2lfnrr-ak5IaV93RRAB",
        "author": "Kris Dickson",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "A top professional with the right dosage of the human-being element for understanding, compassion & confidence through some tough times. Highly recommended."
      },
      {
        "id": "g11hz2lfnrr-bjhqdGdBRRAB",
        "author": "Olasoji Falohun (Ray)",
        "rating": 1,
        "date": "2022-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "He does a good job but lacks medical ethics. Bad experiences will chase clients away from you. It's 2022, Murray. Evolve along with the world."
      },
      {
        "id": "g11hz2lfnrr-hdkwzSFp3EAE",
        "author": "Angus McGuigan",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11hz2lfnrr",
        "text": "A great surgeon with great bedside manner, who goes the extra mile, with a thorough breakdown of the procedure to be done, along with side effects that can occur, as Murray is on the mark with follow up on how the procedure went"
      }
    ]
  },
  "david-wysocki": {
    "listings": [
      {
        "key": "/g/11w27qpds9",
        "name": "Dr David Wysocki - Perth Orthopaedic Surgeon",
        "address": "Perth Orthopaedic & Sports Medicine Centre, Level 1/1 Havelock St, West Perth WA 6005",
        "rating": 5,
        "reviewCount": 74,
        "url": "https://maps.google.com/?cid=9746042254589530622",
        "primary": true,
        "placeId": "ChIJjcwCiFelMioR_pHBNsvlQIc",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJjcwCiFelMioR_pHBNsvlQIc"
      },
      {
        "key": "/g/1td_7gmd",
        "name": "Perth Orthopaedic & Sports Medicine Centre",
        "address": "Level 1/1 Havelock St, West Perth WA 6005",
        "rating": 4.4,
        "reviewCount": 62,
        "url": "https://maps.google.com/?cid=13779430128870790906",
        "primary": false,
        "shared": true,
        "placeId": "ChIJ--4GSyWlMioR-paoFrJeOr8",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJ--4GSyWlMioR-paoFrJeOr8"
      }
    ],
    "reviews": [
      {
        "id": "g11w27qpds9-UjNCRk1VRRAB",
        "author": "Andrew Ballam",
        "rating": 5,
        "date": "2026-10-03",
        "listing": "/g/11w27qpds9",
        "text": "I had a hip replacement in April of this year and honestly David and his team could not have done a better job. The entire process was well managed and the surgical results were exceptional! I would have absolutely no hesitation in thoroughly recommending Dr Wysocki or any orthopedic surgery!"
      },
      {
        "id": "g1td_7gmd-UTIxZlpXYxAB",
        "author": "Mark Norton",
        "rating": 5,
        "date": "2026-09-19",
        "listing": "/g/1td_7gmd",
        "text": "Dr Wysocki performed a DDA robot assisted total hip replacement on my left hip in April 2026. From initial consultation through to surgery, Dr Wysocki was thoroughly professional being very informative and patient over 2 years whilst I got comfortable with the idea of surgery. Post surgery I experienced negligible pain and following David’s strong emphasis on a planned recovery has led to total movement and feeling strong within 3 months.\nNeedless to say, I’m extremely satisfied with the surgery."
      },
      {
        "id": "g11w27qpds9-YTB4cVVtYxAB",
        "author": "Cheryl Rubidge",
        "rating": 5,
        "date": "2026-09-12",
        "listing": "/g/11w27qpds9",
        "text": "I cannot recommend Dr David Wysocki highly enough. He recently performed my knee revision surgery, and the experience was exceptional. From the start, he was absolutely amazing. He explained the entire complex process clearly and kept me informed every single step of the way.What truly set him apart was his deep empathy. He was genuinely concerned about all of my worries, took the time to address every single one, and reassured me many times over.It was the most incredible operation—I had hardly any pain afterward and my recovery progress has been amazing. I followed all of his post-op instructions to a T, and the results speak for themselves.Additionally, his practice staff at the Perth Orthopaedic & Sports Medicine Centre are absolutely phenomenal and incredibly understanding. If you need a highly skilled orthopaedic surgeon who combines brilliant expertise with genuine care, Dr Wysocki and his team are the absolute best."
      },
      {
        "id": "g11w27qpds9-VEhkeFMzYxAB",
        "author": "Justin Stephenson",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11w27qpds9",
        "text": "Really appreciated Dave's direct, friendly and professional approach when it came to dealing with a large loose body removal from my knee. Thanks to Him and his Admin Team, they were great to deal with."
      },
      {
        "id": "g11w27qpds9-YkZCVFFrRRAB",
        "author": "Mark Peters",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11w27qpds9",
        "text": "Dr David Wysocki did my hip replacement, and I’m really appreciative for the care I received. He was easy to talk to from the start and explained everything in a way that made me feel at ease and confident about having the surgery.\n\nHe did a fantastic job, and my recovery has gone really well. I’ve noticed a big improvement in my mobility and everyday comfort. Dr Wysocki is not only an excellent surgeon, but he is also very personable, caring and approachable. I would happily recommend him to anyone needing a hip replacement."
      },
      {
        "id": "g11w27qpds9-WlhaM1QwRRAB",
        "author": "Chris Olney",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11w27qpds9",
        "text": "David Wysocki painted a grim picture of how I might feel after my knee replacement surgery. He was wrong. It was brilliant, up walking next day; six months on I’m back at Pilates and walking with no pain. Wish I had done it years ago!"
      },
      {
        "id": "g11w27qpds9-VEV4S1NIYxAB",
        "author": "Phyllis Harwood",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11w27qpds9",
        "text": "Living with an ongoing problem with my right knee for a number of years I eventually found myself unable to do the activities I enjoyed. Several friends had recommended I see David and from my first appointment I felt very at ease . David explained having a total knee replacement and answered all my questions about the whole process including the recovery very clearly. The surgery was carried out November 2025 and I have for some time now been able to return to gardening, palates and bike riding. I would highly recommend David and his team. Phyllis Harwood"
      },
      {
        "id": "g11w27qpds9-UW1ONFExRRAB",
        "author": "Ashley James",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/11w27qpds9",
        "text": "Fantastic, professional care and treatment throughout my total journey."
      },
      {
        "id": "g11w27qpds9-WmprMFNuYxAB",
        "author": "Antonio",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/11w27qpds9",
        "text": "David is a true professional and I would have no hesitation recommending him. My hip replacement was a breeze because of David's expertise and knowledge. His confidence in his abilities put my mind at ease and without a doubt will be heading back to his office when my next hip replacement is needed. Thank you David and team."
      },
      {
        "id": "g11w27qpds9-TFZNNU9FRRAB",
        "author": "John Whitehand",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/11w27qpds9",
        "text": "My experience with a left hip replacement has been excellent in all aspects of Dr Whysocki’s care. His advice prior to the operation was clear and concise. The operation went smoothly and I was out of hospital the following day. Dr Whysocki‘s physiotherapist’s advice was also clear and concise. Pain management was easy with nothing other than Panadol after day three. After my four week review I began swimming and after the eight week review I was almost back to normal. I was very happy with the whole process."
      },
      {
        "id": "g11w27qpds9-Y1dzNVVYYxAB",
        "author": "Graham Cooper",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11w27qpds9",
        "text": "David did everything that was possible before advising that a TKR was the best option.\nHe explained everything in a manner that was understandable. I also watched several YouTube videos to assist my understanding.\nDavid's assistant, Alicia and the physio were both very professional."
      },
      {
        "id": "g11w27qpds9-V1VaNWEwRRAB",
        "author": "Colin Cross",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11w27qpds9",
        "text": "In my opinion, Dr. David Wysocki is the most ethical Doctor and best Hip Surgeon you will ever come across. Look no further BUT if you need anything more. He is an Eagle Supporter. My wife, my daughter and my Grand Daughter all fell in love with him. Colin Cross"
      },
      {
        "id": "g11w27qpds9-U1VOT1dsRRAB",
        "author": "Karen Street",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11w27qpds9",
        "text": "I have had both my hips replaced by Dr Wysocki. I honestly cant fault David, Alicia and Lucy. They made the journey easier than i ever thought it could be. Dr Wysocki has a fabulous personality and bedside manner. I would highly recommend this office to friends family or strangers. Thank you guys so much. X"
      },
      {
        "id": "g11w27qpds9-YVVSQ1dYYxAB",
        "author": "Lynley Fewster",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11w27qpds9",
        "text": "I came to Dr Wysocki after two failed left knee menisectomys. He advised and performed a full knee replacement and my knee is like new. Always felt confident and relaxed with Dr Wysocki who has a lovely bedside manner. Have recommended to all my friends and family."
      },
      {
        "id": "g11w27qpds9-UTIxemFsRRAB",
        "author": "jim riddle",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11w27qpds9",
        "text": "My experience with David Wysocki was excellent. I found David very professional and no nonsense, explaining clearly what was required and the procedures.\nI had both hips replaced, the first being the worst, and because of the excellent outcome I had no hesitation in requesting the second operation. The second proved to be better experience.\nThe aftercare was also excellent, with Physio Lucy providing clear instructions for rehab. Alicia, Personal Assistant, was exceptional in making arrangements and keeping me informed at all times.\nAltogether highly recommended."
      },
      {
        "id": "g11w27qpds9-YVVab1FsRRAB",
        "author": "David Stribley",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11w27qpds9",
        "text": "I recently had my second knee replacement by David Wysocki, a year after he had replaced the other. Once again David and all his team were fantastic with their service & communication before during and after the surgery. Their honest approach and positive attitude certainly contributed to the my trouble free recovery. Thank you!!"
      },
      {
        "id": "g11w27qpds9-ZVU1RU5XYxAB",
        "author": "Chris Bellingham",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11w27qpds9",
        "text": "Wow what a legend. I went in for surgery completely hopeless. I was in so much pain and couldn't do things with my family. I was bringing my family down. 5 months now since a left hip replacement and I'm getting there. I can now do walks and take my son out to the park. I thank you so much for changing my life. Forever in debt to you.\n\nP.s your staff are all so amazing as well."
      },
      {
        "id": "g11w27qpds9-WVVGa1FVRRAB",
        "author": "Elizabeth Alexander",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11w27qpds9",
        "text": "Very efficient and welcoming service. All questions were clearly and respectfully dealt with. I really appreciated the way that there was cohesive teamwork and that both post and pre operatively there was strong encouragement to be in touch with any questions that came up.\nI recovered very well and am most appreciative of the very positive changes I have experienced.\nDr. Wysocki is an excellent surgeon whom I would recommend 100% and the after care was excellent.\nI would also suggest that personal prehab. is very important for a good recovery as is following the post surgical exercise plan to the best of one's ability."
      },
      {
        "id": "g11w27qpds9-U21GR04xRRAB",
        "author": "Jenny Dunham",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/11w27qpds9",
        "text": "I was very impressed with the outcome of my knee replacement. Dr Wysocki and his team before and after surgery were brilliant"
      },
      {
        "id": "g11w27qpds9-WVZOelZVRRAB",
        "author": "Dinah Lang",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/11w27qpds9",
        "text": "Dr David Wysocki was brilliant in every way. So professional and caring I could not have wished for a better specialist. Both my hips are brilliant again👏👏👍👍💕"
      },
      {
        "id": "g11w27qpds9-VHpGTlRWRRAB",
        "author": "Penelope I",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/11w27qpds9",
        "text": "Total hip replacement October 2025.\nNothing but praise and gratitude for the amazing Dr David Wysocki and his incredible team. I was impressed throughout the entire process from the initial consult in the rooms, the pre-surgery investigations, expert surgery and follow up. I was pain free and walking on the day of the operation. Dr Wysocki took time to explain the procedure and answer all my questions. I was so reassured when he came to see me every day I was in hospital after the surgery. Thank you for your care."
      },
      {
        "id": "g11w27qpds9-ZWxkNE5HYxAB",
        "author": "simon gauntlett",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11w27qpds9",
        "text": "Excellent care and results for hip replacement"
      },
      {
        "id": "g11w27qpds9-VUVOSFNtYxAB",
        "author": "Penny Hearne",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11w27qpds9",
        "text": "Excellent care, very informative, great bedside manner. Very useful physiotherapy support. I could not be happier. (Knee replacement July 2025. )"
      },
      {
        "id": "g11w27qpds9-Wkd3M01IYxAB",
        "author": "June Mckenzie",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11w27qpds9",
        "text": "I have nothing but praise for the outstanding service I received with regards to my hip replacement from Perth Orthopaedic & Sport medicine centre. With special thankyou to Alicia Bridges (Admin) and Surgeon Dr David Wysocki thankyou."
      },
      {
        "id": "g11w27qpds9-Ym5od2JsRRAB",
        "author": "Bek Ervin",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11w27qpds9",
        "text": "Excellent surgeon. I would not go to anyone else. He has undertaken both my full knee replacements and performed them with superior service and wonderful pre and post surgery care. His staff are amazing and truly care about the patients journey."
      },
      {
        "id": "g11w27qpds9-UlRObFZYYxAB",
        "author": "Matt Duxbury",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11w27qpds9",
        "text": "David Takes time to talk and explain, clear and direct, support staff efficient. Great team. The hip replacement went perfectly, same great communication in hospital. Good follow up after op. Clean run from start to finish. Thanks David and team."
      },
      {
        "id": "g11w27qpds9-UVhaWlUxRRAB",
        "author": "Maryann Corbellini",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11w27qpds9",
        "text": "Having suffered from osteoarthritis in both knees for a number of years I finally (after getting a positive referral from a friend) I had Dr Wysoki performed my first knee replacement in June 25. From my initial consult I found David to be very personable and professional with a great sense of humour.\nDavid was upfront with what to expect after the surgery and the subsequent recovery period.\nDavid was well thought of and respected by all the staff on the orthopaedic ward at the hospital. In summary I have rated David and his support staff a perfect 10 out of 10.\nI have my other knee scheduled for February and have no qualms with David's ability to achieve a similar outcome.\nFrank"
      },
      {
        "id": "g11w27qpds9-YlhGQlJtYxAB",
        "author": "Lynda Galloway",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11w27qpds9",
        "text": "Dr. Wysocki performed a total knee replacement in July 2025.\nIt is 4 months since the operation, and I couldn't be more happy with the results. I am 74 years old, and I am already back riding horses. Which gives you an idea how successful the surgery was.\nThe secret is to be totally prepared prior to surgery, keeping as active as you can, keeping a healthy diet, and cutting out any alcohol for a couple of weeks. (I know, I missed my Prosecco in the evening too)\nPost surgery...it is important that we do as we are told, so I diligently kept up with the exercises given to me by Lily, Dr Wysockis' physio, and I know that is why my recovery was successful\nDr Wysocki and his team at his clinic and at the hospital were brilliant.\nI'm so grateful, thank you.\nLynda Galloway"
      },
      {
        "id": "g11w27qpds9-Vm1OaWJFRRAB",
        "author": "David Wyatt",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11w27qpds9",
        "text": "Dr Wysocki has now performed 2 surgeries on me. He was very straight forward & knowledgeable, explained everything clearly & easy to understand. His follow up after surgery was excellent, as were the surgeries. Dr Wysocki was very proffesional & put my mind at ease. My recoveries were better than I expected. Dr Wysocki's personal assistant Alicia was also proffesional & very helpful.\nI would recommend Dr Wysocki to anybody needing hip or knee surgery."
      },
      {
        "id": "g11w27qpds9-Ykhkc01rRRAB",
        "author": "Rita Smith",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11w27qpds9",
        "text": "Good human as well as surgeon"
      },
      {
        "id": "g11w27qpds9-YkU1VlZHYxAB",
        "author": "Leslie Sleep",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11w27qpds9",
        "text": "The quality of care I recieved from Dr Wysocki and all involved with my knee replacement surgery was excellent . I look back over the last few years and realise how difficult doing normal every day things were and how much my life has improved. Cannot express how safe and confident I felt in entrusting Dr Wysocki with my surgery\nLeslie Sleep"
      },
      {
        "id": "g11w27qpds9-amZHUXNRRRAB",
        "author": "Christopher",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "The place to be for knees & hips & booms-a- daisy. Veery good"
      },
      {
        "id": "g11w27qpds9-TFhoUmRrRRAB",
        "author": "Shelly Scott",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "David is a great surgeon and very happy with my operation I’ve healed well"
      },
      {
        "id": "g11w27qpds9-WjBWRFRuYxAB",
        "author": "fiona eggleston",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Fabulous team , headed by Mr Wysocki, care amazing and information accurate to my recovery time lines. Thank you"
      },
      {
        "id": "g11w27qpds9-fcXE3RmJ3EAE",
        "author": "Terry Haupt",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Had total knee replacement 3 months ago absolutely great service from Alicia in the office to Dave Wysocki in surgery no pain great movement wish I had not waited so long .Getting second one done in April would totally recommend thank you for such a positive experience.Terry"
      },
      {
        "id": "g11w27qpds9-fNnBhZ1l3EAE",
        "author": "Jan Korff",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Dr Wysocki and his marvelous team were amazing, the op and recovery of my hip operation exceeded my expectations, the care was excellent, and, I have my life back. So very happy."
      },
      {
        "id": "g11w27qpds9-fdE9tcFZ3EAE",
        "author": "Mandy Pollock",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "From my first appointment Dr Wysocki had me at ease from telling exactly how much pain I would be in and how I would be feeling and all my emotions that would follow my operation my follow up appointment have been all conducted with ease from all his staff I will be recommending Dr Wysocki to anyone that needs a replacement joint operation my Dr said he was the best and I know first hand Dr Wysocki is the best and I'm very thankful"
      },
      {
        "id": "g11w27qpds9-aE5UM2pnRRAB",
        "author": "Kevin Rennie",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Dr David Wysocki is very good at explaining all aspects of my right hip Operation. David made me feel very comfortable with my decision to have the operation. Thanks David."
      },
      {
        "id": "g11w27qpds9-VFRKSlEyYxAB",
        "author": "Haydn Bramich",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "I was very nervous about having my hip replaced but after a consultation with Dr Dave I was more than comfortable to go ahead and I am pleased I did. The operation went perfectly and I have had no pain no problems and no hesitation to recommend Dave and am not worried if the other hip goes knowing Dave is available 😇"
      },
      {
        "id": "g11w27qpds9-dW82Q2pBRRAB",
        "author": "Tina Jezzard",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Dr Wysocki replaced both my knees and I was very happy with both procedures. I felt very well looked after before and after the operation. I wouldn't hesitate to recommend him."
      },
      {
        "id": "g11w27qpds9-eFBqMDFnRRAB",
        "author": "Gerard Neesham",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "My whole experience with Dr Dave Wysocki and his team was fantastic. I have had two hip replacements and they have been perfect in their function, painless at operation level and post op with all associated pain relieved. I would highly recommend this team to anyone with knee or hip issues."
      },
      {
        "id": "g11w27qpds9-c29uMDhnRRAB",
        "author": "John Campbell",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "A massive thank you to David and team! Two knee replacements about a year apart and what a difference to my quality of life.\nI can’t recommend you enough, from the first consult through two surgeries all I can say is I am very happy with the outcome."
      },
      {
        "id": "g11w27qpds9-dGJER2h3RRAB",
        "author": "Helen Tudge",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "I was thoroughly briefed about what to expect from my knee replacement surgery. The operation and in-hospital experience was excellent. The staff and surgeon were caring and considerate throughout the whole process and my follow-up care from Ramsay Health was also excellent.\nHaving had previous knee replacement surgery, this whole experience was far superior."
      },
      {
        "id": "g11w27qpds9-cWUyVzNRRRAB",
        "author": "Ann Nelli",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Outstanding care and attention to my wellbeing. The whole process from the first consultation was a positive one, from reception through to post operative care . Dr Wysocki was very approachable and instilled confidence in his professional practice while maintaining a gentle sense of humour. Highly recommend him as a surgeon . He and his staff are amazing people."
      },
      {
        "id": "g11w27qpds9-JLW9XNFFREAE",
        "author": "David Stribley",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "From first consult for knee replacement through the op and rehab David and the team were nothing but professional, honest and efficient. The op went well and I was back golfing in 3 months with no issues. Booked for the next one as soon as I could. Awesome work!"
      },
      {
        "id": "g11w27qpds9-BMmR6bkl3EAE",
        "author": "Anna Uitdenbogerd",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "I had a total hip replacement five months ago, performed by David. So glad I had the operation. He did a fantastic job and I am recovering well, but very important to continue with the exercises to restore strength in my leg muscles. Also a big thankyou to the very prefessional staff. Knee replacement coming up with the next few months and am very happy for Dr Wysocki to perform this operation"
      },
      {
        "id": "g11w27qpds9-Z3NUMTlBRRAB",
        "author": "Coppelia Tingley",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Wow . What a beautiful human and out of this world Surgeon !\nAfter visiting two other surgeons over two years whom I decided not to go with for their brusque let’s get it over with manner , I heard about David Wysoki . I’m so glad I did, I never felt hurried or felt like I was asking stupid questions. From first meeting to last visit he was amazing . I’d like to say the whole experience was painless !!! But thanks to David and his team it was as painless as possibly could be as knee replacements go !\nBrilliant hardly any scar and I’m swimming breaststroke after 4 months !!\nI can wait for my hip to be done 🤣\nThank you to David and his wonderful team of caring staff ."
      },
      {
        "id": "g11w27qpds9-MWR1dzhRRRAB",
        "author": "Pritinder Kaur",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Dr Wysocki performed bilateral knee replacement on my ailing arthritic knee joints a year ago and I was truly grateful to have him as my surgeon. It was a scary prospect at first but he walked me through the procedure answering all my questions with honesty and integrity. He has a sharp mind and a big heart - a truly formidable combination! Thankyou Dr Wysocki for your awesome surgical skills, great bedside manner and post-op care. Your entire surgical team and Alecia were kind and professional."
      },
      {
        "id": "g11w27qpds9-OGNMaGd3RRAB",
        "author": "Susan Walker",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "I had chronic knee pain in both knees …I was on a wait list just short of two years to have my left knee replaced first as it was the worst out of my knees, it was a very positive experience. Fast recovery. No issues whatsoever so ever. To be pain free in my left knee was great. I had my right knee replaced 10 weeks ago, the second knee was fantastic no issues back at work week five. I can’t sing Dr Wysoki’s praises loud enough. Thank you it was a pleasure from start to finish …living pain free has given me a spark back ..no stopping me . Regards Susan Walker forever grateful"
      },
      {
        "id": "g11w27qpds9-VWpObGNrRRAB",
        "author": "Dianne Viscarde",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Dr Wysocki is an amazing and personable surgeon. I have had two knee replacements with him over the past 5 yrs. Not an easy operation or rehab but he and his wonderful team make it as comfortable and easy as they can for you."
      },
      {
        "id": "g11w27qpds9-NGRyTjBnRRAB",
        "author": "Paul Leopardi",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "I wrestled with knee problems for 20 plus years until my knees were too painful to put up with anymore. It’s crazy how much arthritic pain and poor mobility you deal with for a prolonged time.\n\nI consequently received a referral from my doctor for a consultation with Dr David Wysocki. I met with him at Perth Orthopaedics & Sports Medicine Centre where he genuinely explained the ins and outs, before, during and after, of a knee replacement. Of course, he then turned me away, insisting that I came back when I was ready… And that I did.\n\nFrom everything explained, I considered that the short-term rehabilitation and discomfort was going to be manageable and outweighed my current pain and immobility by a long shot, and consequently, very happy to say that my left knee is recovering extremely well. So much so that Dr David Wysocki went on further to successfully replace my right knee 6 months later.\n\nI found Dr David Wysocki to be a highly successful Orthopaedic Surgeon who is confident, honest, and precise about his procedures, but I then went on to find him and his team concerns for a patience wellbeing especially comforting. I confidently recommend Dr David Wysocki at Perth Orthopaedics & Sports Medicine Centre for your orthopaedic needs."
      },
      {
        "id": "g11w27qpds9-LXN5ZWtBRRAB",
        "author": "Lorraine Rees",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Dave Wysocki and his amazing staff especially Alicia are great team delivering the best experience they possibly can. Dave is a fabulous surgeon with a caring nature. I was in the pool 3 weeks after operation and in Europe on holiday in 6mths with no pain. It's a painful had journey and to having these caring people certainly helped me. I'm having right knee done in April, I wouldn't consider going to anyone else. Thank you so much for making me at ease and answering all my questions."
      },
      {
        "id": "g11w27qpds9-OW9DVXJ3RRAB",
        "author": "Олена Юхимец",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "I am Yukhymets Olena.\nI first met Dr. Wysocki about 18 months ago when I was unable to walk for more than 5-10 minutes and was in constant pain, whether standing, sitting, or lying down. My journey to recovery began with Dr. Wysocki, who was professional, knowledgeable, and incredibly patient. He provided honest and detailed answers to my numerous questions and did his best to ensure I felt as confident and comfortable as possible about the upcoming surgery.\n\nThe team was very supportive at every stage of the process helping me feel less nervous leading up to the surgery.\nJust a few hours after the surgery, I was able to get up and take my first steps with my new joint. The recovery period was smooth and mostly painless, thanks to Dr. Wysocki's detailed instructions on what to do and what to avoid.\n\nThree months post-surgery, I can now walk painlessly for up to 4 kilometers! I am currently preparing for my other hip replacement.\nI couldn't have asked for a better experience.\nDr. Wysocki not only restored my mobility, he dramatically improved my quality of life allowing me to feel active, capable and independent again.\n\nI would highly recommend Dr Wysocki to anyone requiring a joint replacement.\n\nThank you very much!"
      },
      {
        "id": "g11w27qpds9-ZWs5bVFYYxAB",
        "author": "Mary Hervey",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Thank you Dr Wysocki and team who were amazing.Dr Wysocki operated on my rt hip 4 months ago. I’m now able to do things I love, walking and gardening etc without any pain. The recovery was much easier than I expected."
      },
      {
        "id": "g11w27qpds9-V1dwNUxVRRAB",
        "author": "GREGORY PHILLIPS",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "David replaced my right hip a few days ago and I am absolutely amazed at how well I am feeling.\n4 days after surgery, I can walk unaided, no limp, no pain other than some post op swelling and bruising.\nI am incredibly impressed with David’s bedside manner and professionalism.\nIf you need hip replacement, he is your man!"
      },
      {
        "id": "g11w27qpds9-UlVaNlduYxAB",
        "author": "Vicki S",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11w27qpds9",
        "text": "I have been very happy with my total knee replacement performed by David. I found him very approachable and his friendly manner put me at ease when my surgery was being planned. I liked his approach to rehabilitation also. It was consistent but not over the top and I have reached an excellent result without all the pain I hear other people go through with their surgery rehab. From my experience I would definitely recommend Dr David Wysocki ."
      },
      {
        "id": "g11w27qpds9-IejZpd1pnEAE",
        "author": "Brian Leonard",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Brilliant experience, negligible pain and fast full recovery."
      },
      {
        "id": "g11w27qpds9-cE9YbnlnRRAB",
        "author": "Barry Leonard",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Practical. Succinct. Great result with good function. 1 year post operative"
      },
      {
        "id": "g11w27qpds9-NHZpZzJ3RRAB",
        "author": "Mikaella Jo",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "He has done such a neat job, I was not in any pain whatsoever. My legs are straight. Hardly any scars. He is a gentleman and the staff are fantastic.\nGeoffrey Elmer"
      },
      {
        "id": "g11w27qpds9-d3JHXzJBRRAB",
        "author": "Alan Pratt",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Everything was explained and the operation went very well. Excersice after is the key, I was out prospecting after 5 weeks, getting my other knee done next year. Would highly recommend."
      },
      {
        "id": "g11w27qpds9-dC15bi1RRRAB",
        "author": "Ron Alexander",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "David’s the ultimate professional.\nMost importantly he’s very good at what he does.\nUp to date with the latest information.\nOperates only when necessary\nGreat communicator.\nGreat result post operation.\nGood follow up.\nHappy walking.\nAll the best\nRon Alexander AM"
      },
      {
        "id": "g11w27qpds9-NjhTOG9RRRAB",
        "author": "Matt Haggs",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "I have been under Dr Wysocki’s care for the past 5 years in the lead up to a very complex knee replacement and he was very professional and re assuring the whole way through. He constantly explored different options prior to surgery and collaborated with numerous other specialists to ensure the best outcome for myself. Forever grateful for finding a doctor that really cares about his patients outcomes and strives for perfection.\n\nThank you and Regards,\nMatthew Haggerty"
      },
      {
        "id": "g11w27qpds9-Iai1UOFZREAE",
        "author": "Karen",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "A caring and to the point orthopaedic surgeon. David is very approachable and will advise the best course of action required.\nHe tells it as it is and what to expect post surgery from the beginning. He also listens to your concerns and will discuss what you would prefer for a good outcome.\nI have no issue with returning to see David for further surgery."
      },
      {
        "id": "g11w27qpds9-MUtUTTlnRRAB",
        "author": "Wayne GREGSON",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Dr David Wysocki is an amazing surgeon. I had a full hip replacement by him and i am now fitter than ever. No issues. I already know i will need my other hip doing at some point into the future but i know where i will be going with confidence: Dr Wysocki."
      },
      {
        "id": "g11w27qpds9-OFlfR3hRRRAB",
        "author": "Jules Westlake",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "Could not ask for better care, knowledge, kindness and time.\nFrom the first phone call with Alicia to post surgery with Dave and Physio Lucy, I was made to feel calm, listened to, and assured of the best possible outcome.\nThe team explained everything extremely thoroughly at every stage. Kind. Compassionate. Knowledgeable. Sense of humour. Best of all, I’m walking without pain 💪🏼"
      },
      {
        "id": "g11w27qpds9-NzVET3dnRRAB",
        "author": "Leigh Haupt",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "My experience throughout my surgery and aftercare was second to none\nDr Wysocki and all his team (especially Alicia in the office ) were so forthcoming with all information and it was never to much trouble to answer and explain any questions I had regarding everything from start to finish . I had first hip replacement in June 2023 and second in April 2024 outcome of both has been amazing.My husband is booked in for a full knee replacement in a few weeks and is totally confident it will also be a great outcome 😄 I would highly recommend Dr Wysocki to any one considering joint replacement ."
      },
      {
        "id": "g11w27qpds9-uNExuUWJREAE",
        "author": "Elisabeth Tuckwell",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "I had a total right knee replacement last September 2023 with an amazing surgeon Dr. David Wysocki and his assistant Alicia always so helpful.\nMy recovery was fast and I healed quickly, I worked hard on my physical health with exercise, Pilates and swimming so I’m doing all and better than previously.\nMany thanks on an amazing surgical job I’m for ever grateful.\nElisabeth"
      },
      {
        "id": "g11w27qpds9-IcjlPUU93EAE",
        "author": "Bernadette Hooper",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "David and his team are absolutely amazing. Having my very painful knees replaced was a very scary prospect. Until I met David who explained everything thoroughly from surgery to recovery and what to expect, what to do and what not to do. I had a million questions which he answered honestly and with great care. I now walk (and dance) pain-free six months post op! I must also mention David's medical team and admin team too (Alicia). A fantastic cohesive professional team. Thank you from my heart (and my knees) for everything ❤️"
      },
      {
        "id": "g11w27qpds9-b0tqaW5nRRAB",
        "author": "Christina Halvorsen",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11w27qpds9",
        "text": "I had been recommended Dr David Wysocki and am so glad to have had my total knee replacement done by him. Everything was explained in terms we understood, at no time was I rushed through any appointment and his personable approach made the whole experience more manageable.\nAll patients recover at different rates but with the clear guidance I received it was so much better than I expected. 6 months post op now and good as new. Definitely recommend David Wysocki and also his team, Alycia is brilliant on front desk, very knowledgeable and prompt in getting back to me at any time I was uncertain on anything.\nIf and when my left one needs doing, I know who to go to!"
      },
      {
        "id": "g1td_7gmd-cmMzdmdnRRAB",
        "author": "TurnStyle",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Had a total hip replacement performed by Dr Wysocki last March.\nNot only can I not thank him enough for getting me back to a pain free life, but the entire process thanks to him and Alicia was friendly, professional and stress free.\nCouldn't recommend them/Perth Orthopaedics enough.\nThank you so much!"
      },
      {
        "id": "g1td_7gmd-cWRURm9BRRAB",
        "author": "Aaltje de Vos",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1td_7gmd",
        "text": "I recently had a total hip replacement done by Dr. David Wysocki. I can highly recommend this surgeon. He took time to explain in easy to understand language about the procedure, the expected outcome and the necessary after care. He is very enthusiastic and passionate about what he is doing. I couldn't be happier with the outcome."
      },
      {
        "id": "g1td_7gmd-1bUl5cmV3EAE",
        "author": "Karyn Western",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Dr David Wysocki. Did my hip replacement 18 months ago.. From the moment I woke up after surgery I felt wonderful, when they got me out off bed I walk with crutches fantastically,only used crutches because hospital made me.. left less than 24 hours later from hospital and had to go home by car 600 klms. Had no problems at all, heal great also not much bruising ...Still no problems at all."
      },
      {
        "id": "g1td_7gmd-NVBEWjZnRRAB",
        "author": "daz howes",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Had knee replaced by Daid Wysocki! Absolutely great service by all staff involved! Dr Wysocki could not have been anymore helpful!"
      },
      {
        "id": "g1td_7gmd-zeEpISklREAE",
        "author": "Krysta Barwick",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Mr wysocki did tkr on my badly damag3d po.io knee. I am 3xtremly and for the fist time in many years i am pain free. 5hank you david"
      },
      {
        "id": "g1td_7gmd-JN09xY0NnEAE",
        "author": "Michael Beckett",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1td_7gmd",
        "text": "I cannot recommend Dr David Wysocki highly enough. He did a fantastic job replacing both of my father-in-law's knees, and I send all my hip & knee patients to him with excellent outcomes every time. A true professional."
      },
      {
        "id": "g1td_7gmd-aDVIdHVBRRAB",
        "author": "dave marcon",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Dr David Wysocki was fantastic. I could not have been happier with the surgery. He operated on my left knee. He kept me very well informed, he is very relatable and had very good bed side manner. I would recommend anyone with a knee issue to go in and see what he has to say."
      },
      {
        "id": "g1td_7gmd-BNE5ETVFnEAE",
        "author": "Tavia H",
        "rating": 1,
        "date": "2018-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Wouldn't recommend Dr Wysocki."
      }
    ]
  },
  "daniel-fick": {
    "listings": [
      {
        "key": "/g/1tlzrp_g",
        "name": "Dr Daniel Fick",
        "address": "Ste 63A/85 Monash Ave, Nedlands WA 6009",
        "rating": 4.9,
        "reviewCount": 54,
        "url": "https://maps.google.com/?cid=6867545506425497790",
        "primary": true,
        "placeId": "ChIJa5wuGvykMioRvmhSlUBsTl8",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJa5wuGvykMioRvmhSlUBsTl8"
      }
    ],
    "reviews": [
      {
        "id": "g1tlzrp_g-UkVaMlQyYxAB",
        "author": "Heather Shortland",
        "rating": 5,
        "date": "2026-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Awesome surgeon , fantastic team. Highly recommend"
      },
      {
        "id": "g1tlzrp_g-YVZaWk1sRRAB",
        "author": "Joyce Edmonds",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/1tlzrp_g",
        "text": "I could not fault Mr Dan Fick and his team for their skill and care during the course of my knee replacement surgery. The only problems encountered related to my sensitivity to the pain medication; but the team did their best to mitigate my adverse reaction to them. These guys are Quality all the way. Even the stitches were the best my GP had ever seen. I definitely recommend them.."
      },
      {
        "id": "g1tlzrp_g-VmtrMWFXYxAB",
        "author": "Geoff Hourn",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/1tlzrp_g",
        "text": "To Whom It May Concern\n\nDr Fick is a very talented orthopaedic surgeon who I relied on to fix my broken hip 11 years ago.\n\nI therefore had no hesitation in returning to his care when I required a total left knee replacement, in November 2025, and a total right knee replacement, in May 2026.\n\nOver the years, Dan has also successfully provided a total knee replacement for my mother-in-law and successfully repaired my wife's broken leg and ankle. Both are grateful for his skill and his care.\n\nDan Fick is a charming gentleman who has assembled a very efficient and professional support team.\n\nI have no hesitation in warmly recommending Dr Fick. His skill and care, and that of his team, is superb.\n\nYours sincerely,\nGeoff Hourn AM"
      },
      {
        "id": "g1tlzrp_g-V0RWcVoyYxAB",
        "author": "Mara Epis",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/1tlzrp_g",
        "text": "Daniel did both my knees about 10 months apart.\nWould recommend 💯%"
      },
      {
        "id": "g1tlzrp_g-WkRGU2IyYxAB",
        "author": "Merrylyn Braden",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/1tlzrp_g",
        "text": "This is the second knee replacement I have received by the expert hands of Assoc/Prof Daniel Fick. It is my humble opinion that this Orthopaedic Surgeon is one of the VERY BEST in the Southern Hemisphere. In the course of my recovery I witnessed some operations that had certainly not been anywhere close to my experience. If you receive an influx of new inquiries, I would be so bold to say \"I recommended your good self to many who were still experiencing pain and suffering\". It was my suggestion that perhaps more research would have revealed your track record of success and try to get an appointment sooner rather than go thru years of pain.\n\nDaniel you should be held in the highest regard by all who travel this knee replacement surgery with you. I have to say in all honesty that this time around I had trained \"like a warrior going to war\". I religiously followed the pre-op book and the daily SMS messages as suggested and this made me operation ready!\n\nThank you for giving me back my ability to crawl, walk, run and maybe in a few weeks time, will be able to kick a soccer ball with my new Great Grandson Franco in early May 2026 ... let the games begin! Aquinas here we come (again!!). Perhaps I will become Bionic Woman with two (2) Titanium knees!\n\nI look forward to an in person appointment when one becomes available in the near future? There are stories yet untold! Your patient MB."
      },
      {
        "id": "g1tlzrp_g-YcWVuM0dBEAE",
        "author": "Brett Jones",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Thanks to Dr Fick and his team I am walking not limping and pain free.\nThanks again"
      },
      {
        "id": "g1tlzrp_g-WXpWaWNHYxAB",
        "author": "Ann Edwards",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Knee replacement botched. The worst was lying to me after and saying it went fine. Revision surgeon was horrified at the poor work."
      },
      {
        "id": "g1tlzrp_g-3LVk3cWZ3EAE",
        "author": "Taryn",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "I absolutely love the beautiful ladies that work so tirelessly to support Dan Fick and the clients. Always so lovely, kind, welcoming and supportive 💖 thank you so much for making it easy xxx"
      },
      {
        "id": "g1tlzrp_g-fdXJPWVNnEAE",
        "author": "Amanda",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Dan and his team are exceptional. They provide great care and information pre - and post surgery. He is an amazing surgeon, and I highly recommend it."
      },
      {
        "id": "g1tlzrp_g-UkhOblgwRRAB",
        "author": "daniel de goede",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "If you want an experienced ,compassionate and thorough Surgeon,Dr Fick is the one .I went in for knee arthroscopic ,bakers cyst repair and mennintus .I had lots of questions and concerns and every question was answered in depth and with so much patience.I had been ringing around for months to find a surgeon that wasnt (Stuck up ) for lack of a better term .Honestly could not refer Dr Fick enough .Thank you Daniel de Goede"
      },
      {
        "id": "g1tlzrp_g-2cmM2NklBEAE",
        "author": "Thomas Batchelor",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Dan and his team are first class. He made sure all the boxes got ticked before surgery. My operation went well and I'm very grateful 🙏 Thanks Dan.\nLeft knee arthroscope."
      },
      {
        "id": "g1tlzrp_g-VUdkeE1FRRAB",
        "author": "Ben Viljoen",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Thanks so much to Dan and his team who did my ACL reconstruction. The team are so helpful and quick to get you sorted. The team were awesome to deal with and the surgery went great!!! Awesome team and thanks Dan!!!"
      },
      {
        "id": "g1tlzrp_g-VEVzeVpuYxAB",
        "author": "jim garbin",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Had a hip replacement 7 years ago with Dan.\nNo feeling in half my foot since the operation , can’t lift my leg more than about 30cm.\nThat’s the risk you take I suppose. Glad for the people that had a successful operation"
      },
      {
        "id": "g1tlzrp_g-VjNOaldGRRAB",
        "author": "David Young (Ollie)",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Dan and his team got me back on track with an issue that was ruining my life, Dan's communication both explaining and listening was reassuring and gave me some hope in recovery. Guided me in the right direction, everyone you deal with is really friendly and helpful. Even the people dan refers you to are really great."
      },
      {
        "id": "g1tlzrp_g-YVhjelEwRRAB",
        "author": "Wally Fonda",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "I have just had my second full knee replacement carried out by Dan and couldn't be happier. The level of care and professionalism shown by Dan and his team was second to none. Fully mobile now after just 4 weeks. Thanks to the Fick team. Highly recommend."
      },
      {
        "id": "g1tlzrp_g-U2sxTGFWRRAB",
        "author": "Mark Brabazon",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Speaking on behalf of some of Dan's patients who come through my sports physiotherapy clinic for rehabilitation, they truly sing his praises. From his professionalism, bed side mannerism, his precision and expertise with procedures and his after care, it is always a pleasure listening to the experiences of patients under his care. Surgery is a big commitment, so Dan and his entire team make patients feel empowered pre and post-surgery, and it goes a long way to bring about a great outcome!"
      },
      {
        "id": "g1tlzrp_g-eElHZnZRRRAB",
        "author": "Sharron Ettridge",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Very professional and organised. Lovely mannerisms."
      },
      {
        "id": "g1tlzrp_g-saWN2M0x3EAE",
        "author": "Gay Little",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Wonderful bedside manner and the surgery went extremely well. Very grateful for the new knee"
      },
      {
        "id": "g1tlzrp_g-1aWUySFFnEAE",
        "author": "Ben Devenish",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Mr Fick handled my hip re-surfacing and I could not be happier with the incredible pain free outcome. The care and attention across his whole team was quiet amazing and I would highly recommend his services to anyone needing this kind of diagnosis and treatment."
      },
      {
        "id": "g1tlzrp_g-X3QzVGdBRRAB",
        "author": "Lorin Oatley",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "There is no better orthopaedic surgeon than Dan Fick. His care and skills are outstanding. His team are so friendly and helpful. I am so grateful for all the care I received."
      },
      {
        "id": "g1tlzrp_g-blBfNzFBRRAB",
        "author": "Arlene Falkson",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Amazing surgeon with wonderful people skills. I was able to walk shortly after my surgery pain free after months of chronic pain. The whole experience cannot be faulted."
      },
      {
        "id": "g1tlzrp_g-MXFHNWdRRRAB",
        "author": "Kerim Serin",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Daniel Fick is an amazing surgeon. I had ACL reconstruction surgery 6 weeks ago, and my god I did not expect to be doing this well already. All this was thanks to Dan and his amazing knowledge when it comes to procedures like this. He is one of the most kind and caring person I’ve met and I would highly recommend Dan and his team for anyone in need of a procedure he can help with"
      },
      {
        "id": "g1tlzrp_g-qdXJpSVFnEAE",
        "author": "Karen Ridley",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Daniel Fick is an amazing surgeon. He is not only professional he is also a very caring person and takes the time to get to know you. I had a full knee replacement 5 weeks ago. I am now mobile and my scar is so minimal - I couldn’t be happier. I knew I was in the best hands with Dan and his team who look after you so well during the whole process from the time you decide to have surgery to hospital and rehabilitation.\n\nThank you Dan and thank you to your wonderful team!!"
      },
      {
        "id": "g1tlzrp_g-4NzREY1R3EAE",
        "author": "shirley winstanley",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Mr Fick and his nurse Penny are extremely caring and skilled professionals. highly"
      },
      {
        "id": "g1tlzrp_g-MHJQSG5BRRAB",
        "author": "Jeanette demar",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "I had a full knee replacement and a left rotar cuff shoulder repair in the last six months by Dr Fick and I am so happy with the results. He is an excellent surgeon and highly recommended. 👍🤩"
      },
      {
        "id": "g1tlzrp_g-LW9ueDNRRRAB",
        "author": "Tina De Bruyn",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Dan took my case on which was complicated by the fact that the injury had not been treated for 8 years previously - Dan was kind, empathetic, set me at ease and just an all round Great Guy. He gave me a new lease on life for which I am eternally grateful. I refer everyone I can to him as he goes above and beyond. Great Surgeon, Great Team, Great People and even now I feel I can reach out if I need anything - Thanks Dan You're a legend!!!!"
      },
      {
        "id": "g1tlzrp_g-OTZDYm1nRRAB",
        "author": "Toni Glucina",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "I have been a patient of Dr Fick for 5 years. I have had 3 surgeries. Hip replacement, hip revision (not originally performed by Dr Dan) and more recently total knee replacement. My experience with Dr Dans entire team was excellent. Extremely professional, knowledgeable but perhaps most importantly welcoming and caring. I would have no hesitation recommending team fick for your orthopaedic needs."
      },
      {
        "id": "g1tlzrp_g-aGE2RXVRRRAB",
        "author": "Amanda T",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "I had an overwhelmingly positive and seamless experience with team Fick. Dan is a wonderful, caring, passionate, highly experienced and professional surgeon. I bounced back so quickly after my hip replacement and the scar is so neat and minimal. Everyone in the team is amazing (Joanna, Janice, Penny, Oscar) and I couldn't have had a better experience and outcome. Highly recommend Dan and his team! Thank you for giving me my life back, I will be forever grateful!"
      },
      {
        "id": "g1tlzrp_g-MXNpMDZRRRAB",
        "author": "jason manning",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Dr Fick did my operation, highly recommend him. Wonderful bedside manner, made me feel very comfortable and eased any fear I had. The follow up text messages are great, very handy. Hopefully I never need another operation, but if I do, he will be my \"go to\" specialist. A big thank you to you and your team"
      },
      {
        "id": "g1tlzrp_g-1cC1hZFhREAE",
        "author": "dbigfella70",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Dan It seems like a “THANK YOU” just isn’t enough to say for this gentleman ( a god) for everything you have done for me, from the first time you walk into his surgery all his beautiful helpful staff always smiling always welcoming always answered any question we had ( Joanna thank you for always returning my calls and everything, the professionalism from all this team is just amazing,thank you, I first met Dan Fick after he had performed knee surgery on my mum, I had previously had both my hips and both my knees done through another orthopaedic surgeon who wouldn’t listen to me when I kept telling him that none of my joints he’d replaced felt right, I was still suffering with pain,walking and constant falls, I asked Dan if he’d have a look at me while in hospital for something else and dan sending me to have a EOS scan that everything turned to horror, it wasn’t just a imagination in my head, I was actually lucky to be walking, dan showed me and my wife everything that was wrong from my hips to my knees, dan could see that it not only affected me but my whole family, he was so supportive and he spoke to us like normal people, he reassured me and my wife that he would be there for us and he always is and has been there for us.I think I became the first person in Australia if not the world to have the type of surgery that dan had done on me, we call it the landcruiser heavy duty upgrade, Dan didn’t just jump into the surgery,he explained to me from day dot how complicated and invasive the following surgeries would be, and it would be something that would take time to fix, he did all his homework first before touching me and he made sure that he explained everything that he would be doing nothing was ever a dumb question and nothing was ever to hard, he made sure that he explained everything to both my wife and myself, he had to make sure that he had what he calls the A Team, Dan had to make sure that he only had the best Anaethatists, best infectious disease doctor, best general physician, heart cardiologist,best Physio therapist,everything and everyone had to be what he needed, he got everyone involved and made sure they were all the best of the best, and he did it in a very good time frame as well, he always rang my wife after he’d preformed surgery on me to let her know that everything had gone well and it was successful he explained to her if he ever had to do something extra on me, poor bloke none of my surgeries were easy ones for him, it’s been a long journey for us all since 2018/2019 up till today 31/8/2022 my last surgery was performed last Wednesday. We have with all the A Team became more like family then anything else. I can’t thank Dan and the A team enough. It’s still going to be a journey but I couldn’t of have done it without any of this A Team and especially my beautiful loving caring wife 🙏🏻🙏🏻❤️❤️ Once again THANK YOU, THANK YOU to each and everyone one of you. Love DBIGFELLA (DON) 😂"
      },
      {
        "id": "g1tlzrp_g-HcXZMc0NnEAE",
        "author": "Patsy Putelli",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Dan Fick is the most amazing surgeon with the most wonderful bedside manner and gorgeous personality! 6 months since my knee replacement and I feel fantastic, I cannot speak highly of Dan and all his team !!!"
      },
      {
        "id": "g1tlzrp_g-ek83XzhRRRAB",
        "author": "Adrian Lolev",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Just recently I had my second hip replacement with Daniel and knee replacement 8 years prior. Excellent sergeant and caring human being, he gave me my life back. I recommend Dr Fick to anyone looking for either hip or knee surgery. He is simply the best! Adrian Lolev"
      },
      {
        "id": "g1tlzrp_g-tNnRlOUJ3EAE",
        "author": "Vicki Johnson",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Dr Fick did my partial knee replacement surgery mid December. I couldn't have asked for a better surgeon. Dr Fick was amazing as a person and as a professional surgeon. A couple of days before surgery, I had an appointment where he explained everything to me and reassured me that I would have the best recovery team afterwards.\nOn the day of surgery, I saw him briefly and he saw that I was nervous. He once again reassured me and had the best bed side manners.\nAfter surgery, he was so right about having the best recovery team. Dr Fick saw me during my 2 day stay in hospital. He even suggested a tattoo for me scar.\nI joined his Joint Journey and looked forward to receiving the texts every day. The first few days at home were hard and each text seemed to relate to my feelings and what I should be doing. The messages are so encouraging and full of helpful tips and advice..\nTomorrow is week 6 since surgery. My recovery has been amazing. My scar is hardly noticeable and I have comments from my Physio team and others of how neat the scar is..\nI highly recommended Dr Fick. Thankyou for everything you have done to help me. I am so positive that this op is going to change my lifestyle. Your team is amazing and so are you."
      },
      {
        "id": "g1tlzrp_g-lNXRMOER3EAE",
        "author": "Paula Jones",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "I had problems after the surgery on my left leg, which was to be expected as the knee was in a dreadful state by the time I managed to scheduled in my surgery. I phoned Daniel whose beautiful bedside manner shone through and gave me great confidence we wold together get the problem sorted.\nDaniel has operated on both my knees and when the time comes to have my hips done, I will be going straight to Daniel, as I have told faith and confidence in his skill.\nIf you are looking for a Dr that treats you like a human being and not a text book, who explains what and why he is doing a procedure, Daniel is your man. If you want someone who is up to date with the latest procedures and who is there every step of the way, with great little video's to explain the process, yes, Daniel is your man.\nI can't recommend this Specialist more, he is a great person, excellent and caring surgeon, what more could you ask for,"
      },
      {
        "id": "g1tlzrp_g-Hc0o3TldREAE",
        "author": "Ritchie Collins",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "As l write this brief review it has been 6 weeks since my total hip replacement surgery. I have not fully recovered as yet but my progress is beyond my expectation . From the very first consultation with Dan until today l have felt totally cared for . The system , surgical skill & genuine care l have experienced l simply cannot fault. I want to particularly mention the daily text message service which commenced prior to going to hospital & has continued until today - this helped me understand why l felt the way l did at the time & importantly to me l knew l was not alone . Thanks to you Dan & your staff for giving me such a painless , caring & successful experience . Ritchie Collins"
      },
      {
        "id": "g1tlzrp_g-XeE1uWlVREAE",
        "author": "Mick Kennedy",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Dr Fick (Dan to everyone) is a magician. He was understanding right from the very beginning of my journey. From the scans to the cortisone injection to the magnificent physio team that prepared me for the surgery and now the follow up post-surgery.\nI had a partial knee replacement on the 11th of January 2022, and I was back at work 3 weeks later (Light duties) to now post 6 weeks and feeling fantastic. It was a lot of work with the fantastic physio team, but the results speak for themselves.\nIf you are unsure all I will say is talk to Dan. He will listen to you and give you his opinion on the best way forward to get your life back.\nThank you, Dan and all of your team."
      },
      {
        "id": "g1tlzrp_g-cTd5amdnRRAB",
        "author": "Debra Pearce",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Daniel Fick is not only very professional and top notch in his expertise, he is extremely easy to talk to and speaks to you on a personal level, he is extremely friendly and put my mind at ease right from the start\nHis team are absolutely amazing and greet you every time with friendly faces and warm hearts, in his rooms and during my hospital stay.\nI couldn't be happier with my results and my progress! I noticed a huge improvement immediately after my surgery!\nA great big thank you to you Dan and your amazing team!!!"
      },
      {
        "id": "g1tlzrp_g-czVuRHN3RRAB",
        "author": "Margaret Kot",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "There are not enough stars. Professor Fick is incredible.I recently injured me knee and ended up in hospital,. Professor Fick was on holidays. While on holidays , he took time to look into my injuries, my MRI . Who knows a doctor who does this on holidays,,,,.? Then we went into lockdown,,,, Despite the fact I ended up in St John Of God, and not Hollywood ( transfer from emergency department), he consulted with me and prescribed treatment and advised on best action for my injuries. I am now walking and healing well. I have no words .\nProfessor Fick, Is , without doubt, specialist with highest skills, a very knowledgeable orthopaedic surgeon who seeks new ways to help people. He also possess compassion and understanding.\nThere are medical professionals who treat people purely to make money, and there are medical professionals who treat and heal humans because they simply ,,,love to heal.Professor Fick belongs to group of doctors who love to heal, and really help people.\nThank you Professor Fick, and thank you Joanne for all your help."
      },
      {
        "id": "g1tlzrp_g-NkpDQ2tRRRAB",
        "author": "Graham Joyce",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Its 10 weeks today since I had my Bilateral TKR and I could not have been in better hands. The Joint Studio pre and post op care is outstanding and went well beyond my expectations. While I still have a little way to go in my recovery I know without their guidance and caring manner my post op recovery would have been much longer and more difficult. They certainly have everything covered are are highly recommended."
      },
      {
        "id": "g1tlzrp_g-5LTh2T1FBEAE",
        "author": "Jane Fievez",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Over 70years and now 10 weeks and a few days since the surgery for my 2nd knee replacement, I am very happy with the progress which I believe has been even better than the first one, 3 1/2 years ago. The many medical checks required pre surgery, gave great confidence in the Covid environment. This was despite an unexpected medical procedure which further delayed the knee surgery. I felt I was always in the safest possible environment and knew that Prof Fick would be able to adjust the fit of various components of his plan, if he found things inside my joint were a little different to expected, which they were.\nPain was my biggest fear as I seem to have a few allergies and I did not look forward to removal of the pain pump! However all was managed and not as bad as imagined. Using the CPM machine and the Game Ready Ice Machine that we hired at home for 3 weeks, helped get me through the days whilst getting back flexibility and confidence, without the drugs. A few Panadol were needed during the night.\nI never used my crutches after leaving hospital, was back doing rehab at HFRC and Promotion Physio Claremont, after a few weeks. The pay off for all the work done in this area prior to the surgery I believe helped my mobility enormously. I can now comfortably go to the beach for a swim , walk a couple of kms - not fast and constantly looking at the ground to ensure I don't trip! Then there is the bonus of looking forward to going on holiday again, in comfort, with my wonderful husband and family in the not too distant future. Very special thanks to all the team at The Joint Studio for their support, the wonderful surgical team and of course Prof Dan Fick himself, for making my dreams possible.\nps. I feel I should add that the streamed messages I signed up for, gave me lots of laughs \"when needed\" and if I received $100 for every time I wished I could give that delightful Robot, a personal knee replacement, I would have been a millionaire! It's quite an adjustment, which you do get on and deal with on a daily basis, but the \"Hang in there\" comment probably best described the many frustrations in the early stages. However its all worth it, being mobile, fit and comfortable."
      },
      {
        "id": "g1tlzrp_g-5dmRHOVZBEAE",
        "author": "Geoff Ansell",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "I am now 1 yr post op. I am a very active 74 yr old who had a problem with an auto-immune disease and major joint surgery posed a heightened risk of infection.\nI was initially struck by the friendly, professional preparation for my surgery which included additional measures due to my compromised immune system.\nAfter surgery, I was mobile within a day, suffered little pain but naturally had a fair amount of bruising. Home after 2 days and the rehab went smoothly. Within 3 weeks I was only using a stick after ditching the crutches and after another 2 weeks I was able to be confident without walking aids.\nWithin 3 months I was no seldom aware of the replaced joint and now I am unable to tell that I am walking with the aid of an internal prosthesis.\nThe care, attention and the excellent surgery have all contributed to the excellent outcome. So to Daniel and the team, thank you very much indeed."
      },
      {
        "id": "g1tlzrp_g-emVxMDdBRRAB",
        "author": "Tom Downs",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "I would like to thank Professor Daniel Fick and his team at the Joint Studio, for helping me through my total knee replacement. The operation took place on 4th May 2021 at Hollywood hospital. I found Dan's text messages sent to me daily during my recovery period were very encouraging. I looked forward to reading them each day. My goal was to walk without a limp, to my birthday party on 6th June. The photo shows how straight my knee is, I am so happy with the results. I would highly recomend Daniel and his team, to anyone contemplating this operation. Kind regards...Tom Downs"
      },
      {
        "id": "g1tlzrp_g-dGZDV3l3RRAB",
        "author": "Richard Mulligan",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Had a operation on my shoulder a couple years ago by mr fick. I was in a lot of pain and had seen some specialist before him who said they could not figure out what wrong with me. When I seen mr fick it only took him 10 minutes to figure out what was wrong with me. I would highly recommend him"
      },
      {
        "id": "g1tlzrp_g-MnN1ZjZRRRAB",
        "author": "Peter Andree",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Like most people contemplating a TKR when they are not crippled by pain, you want to postpone it as long as possible - mostly due to fear of the end result.\nMy first appointment with Dan was like meeting an old mate. He put me at ease immediately and knew exactly what my knee was like before I’d entered the room.\nMy MRI was explained so clearly by Dan and I was advised to have the operation due to the wear and tear of my previous 28 year old ACL repair and osteo-arthritis.\nHe advised me of the significant importance of prehab and rehab if I was to have a successful result. Never a truer word was spoken - you only get out what you put in!\nDan is a wonderful man and a brilliant surgeon. Thanks to him and his team, I am playing my beloved golf 9 weeks post surgery.\nThank you so much Dan!"
      },
      {
        "id": "g1tlzrp_g-vaDh2N1h3EAE",
        "author": "Charmaine Trezona",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "DR Fick did my operation and i must say he is the nicest specialist I've hard. He's very caring and understanding towards my needs.\nMy knee had a complex replacement with a few issues but i am hoping with time and rehabilitation i will get stronger. He was very good and explained the problem i had after the operation was over which i did appreciate.\nThanks to Dr Fick and his wonderful team.\nC.Trezona"
      },
      {
        "id": "g1tlzrp_g-ME1yeTFRRRAB",
        "author": "Ben Hunter (chillibenny)",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1tlzrp_g",
        "text": "Without doubt, he has to be not only the nicest doctor I've ever had the pleasure of dealing with, but maybe one of the nicest people I've ever met!!\nExplains everything you need to know before you have an operation but in simple and easy terms that us 'Non-Doctor' types can easily understand.\nThanks Dan."
      }
    ]
  },
  "david-colvin": {
    "listings": [
      {
        "key": "/g/1ptvwwctf",
        "name": "Dr David Colvin - Knee & Shoulder Surgeon",
        "address": "Ste 213/25 McCourt St, Subiaco WA 6008",
        "rating": 4.9,
        "reviewCount": 50,
        "url": "https://maps.google.com/?cid=1304016348628022264",
        "primary": true,
        "placeId": "ChIJTQ4KjbaiMioR-HNGyfXLGBI",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJTQ4KjbaiMioR-HNGyfXLGBI"
      }
    ],
    "reviews": [
      {
        "id": "g1ptvwwctf-V2xWS01GRRAB",
        "author": "Graeme Thomas",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/1ptvwwctf",
        "text": "Had my knee repaired with the best easy experience I could have imagined"
      },
      {
        "id": "g1ptvwwctf-TXpBMVNGRRAB",
        "author": "Hamid Jahani",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/1ptvwwctf",
        "text": "We are very grateful to Dr. Colvin for the excellent care during my wife’s tendon repair surgery. The procedure was successful, and the professionalism, skill, and support throughout the process were outstanding. Fully functional shoulder now, two months after surgery.\nHighly recommended."
      },
      {
        "id": "g1ptvwwctf-TVU1NGNHYxAB",
        "author": "Regan Preston",
        "rating": 1,
        "date": "2026-02-10",
        "listing": "/g/1ptvwwctf",
        "text": "I attended an appointment for a second opinion and was left speechless. The interaction was marked by a condescending and arrogant manner, representing a disappointing example of patient-centred care."
      },
      {
        "id": "g1ptvwwctf-V1VSNmJGRRAB",
        "author": "Jason Rickersey",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/1ptvwwctf",
        "text": "I injured myself running earlier this year, with scans revealing I had torn the meniscus of my left knee. This led me to see David Colvin for a second opinion on my options. I’m glad I did, as I found David to be very easy going and approachable. Plus, he gives very practical advice and really wants to help people get back to where they were pre-injury.\n\nAfter seeing David for an opinion, I booked in to have an arthroscopy and meniscectomy. The surgery was done at the end of August this year. I’m now pretty close to being fully recovered, having recently completed a structured rehabilitation program.\n\nOn the day of my surgery, David was great, as was his surgical team. He even came to see me after my surgery to give me a run-down of how things went and to highlight any key points. The post-op visit was a pleasant surprise for me, as this didn’t happen for a previous knee surgery with a different surgeon. For me, David taking the time to do a post-op visit made for a great overall experience.\n\nWhat I really like about David’s approach is that he has a tailored, integrated rehabilitation program for you to do post-surgery. The program has several stages and is available online. That said, I printed mine out so I had a visual reminder as a prompt. The exercises start off relatively gently and gradually increase in nature and complexity. They also include stretching and strengthening exercises, so you can tell a lot of effort has been put into the program’s design. By the end of the program, I was doing Lunges to Bulgarian split squats using a chair – a very good exercise for building strength! David also encourages pool work/hydrotherapy, so he’s very holistic in his approach.\n\nI also liked the standard of patient care David’s team provided. I recall going in to have my wound checked a week or so after surgery. During this appointment, the nurse told me that – even though I had a follow up appointment booked for 3 months post-surgery – I could get in touch and come in before then if I had any concerns or questions. To have this flexibility is not only practical – it’s also really reassuring.\n\nDavid also gives you the option to work with a physio for your rehab, but this is only a recommendation. You can go with your own physio if you prefer. Either way, it’s refreshing to see someone take a holistic approach to post-surgical recovery and rehabilitation.\n\nThe team at David’s rooms at St John of God Subiaco are all nice people who are really friendly and easy to deal with too. This makes for a really good experience overall.\n\nWith that, I am happy to recommend David’s services."
      },
      {
        "id": "g1ptvwwctf-ZzdlUWlnRRAB",
        "author": "Adam Hitchens",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Excellent surgeon with a pleasant bedside manner. Very professional and always returns calls in relation to any concerns post surgery. Thanks David for everything.😎"
      },
      {
        "id": "g1ptvwwctf-oNGFhX2JnEAE",
        "author": "Nevin Watson",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "I could not be happier with Dr.Colvin, SJOG and his team. My left knee arthroscopy involved partial meniscectomies in both lateral and medial, and joint debridement. Dr Colvin encourages patients to be active in their rehabilitation- stretching, exercises and weight loss if overweight.\nI’m 2 weeks post operation and have been following the 3 recommendations above. My progress has been better than I’d hoped for, now walking pain free ( not requiring any painkillers)\nand digging in my garden.\nDr. Colvin is an excellent orthopaedic surgeon. I would recommend his services to everyone."
      },
      {
        "id": "g1ptvwwctf-akotV3BRRRAB",
        "author": "jared scrimgeour",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "I recently attended Dr Colvins Practice, after having been to 2 other specialists. I wish I saw him first!\nThe other 2 doctors who will remain anonymous both suggested i required partial knee replacement. Dr Colvin suggested otherwise and put me on a program to continue without surgery and go back to work. His friendly demeanour and empathy brought me back into high spirits.\nAs for his staff, they were also amazing and helpful with any requests I had.\nThanks Dr Colvin, I certainly will recommend you to anyone who's not just looking for a qualified diagnosis, but assurance and comfort."
      },
      {
        "id": "g1ptvwwctf-TW5OUFlXYxAB",
        "author": "Kim “Thomo” Thompson",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "I was in pain for 18 months with bad impingement. My physio was reluctant for surgery due to two previous surgeries for unrelated conditions which is a reasonable concern. Surgery was a gamble but an educated one and I bit the bullet. Noticed as soon as I was allowed to move the arm that the target pain was gone, and from then on it was recovering from the surgery itself. I’m now three months post op and it went text book. Feels much better. As for Dave and his lovely receptionists they are simply good humans and you don’t feel like a number. Always punctual and welcoming. Kim"
      },
      {
        "id": "g1ptvwwctf-TVd4NWJsRRAB",
        "author": "norton6059",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "My experience with my shoulder op with David was just superb from start to finish. His friendly manner and re-assurance at my first visit, his wonderful work in the theatre on what was a major tear and his team’s support in recovery including the wonderful resources on his website.\nI cannot recommend David and his teams support more highly and you can be sure you will be in great hands and made to feel important at all times in the process. Thank you David for a wonderful outcome on my shoulder and for your super bedside manner and humour."
      },
      {
        "id": "g1ptvwwctf-3aTZ5V0tBEAE",
        "author": "mary ruth cruz",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "He took good care of my daughter really well. Such a gentle soul. Explains things clearly. Really well versed in his field."
      },
      {
        "id": "g1ptvwwctf-qamVLNU9nEAE",
        "author": "Aubrey Monie",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "A small group of Physiotherapists and I have referred to Mr. Colvin over the years. We appreciate his expert advice and excellent work. We strongly recommend his service."
      },
      {
        "id": "g1ptvwwctf-qa28zR0JnEAE",
        "author": "Dale Morrissy",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Dr. Colvin was incredibly professional and provided me with simple yet comprehensive information about my shoulder procedure. His team, including the friendly and caring nurses Jenny and Janet, were fantastic. I am now two weeks post-operation, experiencing little to no pain, and have plenty of resources to guide me through my recovery journey. Thanks to the whole team! :)"
      },
      {
        "id": "g1ptvwwctf-iME4zSVhREAE",
        "author": "mark brennan",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Dr Colvin worked his magic on my shoulder just over a week ago and already the sling is off with close to 75% range of movement comfortably achievable.\n\nI was fully informed about the surgery and the post-surgical recovery in a way that was easily understood and having the information also available online is brilliant.\n\nWhile there will not be any heavy lifting for a while I on my way back to at least being able to lift without pain and weird noises from my shoulder joint.\n\nThe highest recommendation that I can give is that David's magic hands and skill were so good that I will be back next year for the other shoulder.\n\nSee you next year for the other shoulder kind sir!"
      },
      {
        "id": "g1ptvwwctf-CMlBhM0xnEAE",
        "author": "Prowst",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Great surgeon, very professional staff"
      },
      {
        "id": "g1ptvwwctf-eHVqNGhRRRAB",
        "author": "kerry Ault",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Amazing Dr that listens to his patients\nAmazing care\nIf you need a Dr that cares about YOU here he is\nThank you for listening to me when others wouldn’t\n10 ⭐️ to ALL his amazing team\nYour in the right hands with Dr Colvin and his team\n\nKerry Ault"
      },
      {
        "id": "g1ptvwwctf-CME1PcFlREAE",
        "author": "Dylan Bagnall",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Has been an excellent experience laterjet procedure all round Dr Colvin has been very knowledgeable and put all my concerns at ease, his staff have also been very helpful and informative."
      },
      {
        "id": "g1ptvwwctf-KbTdlNURREAE",
        "author": "Marine Fields Olive grove",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Have had the unfortunate pleasure of being cared for by Dr Colvin and his amazing team on numerous times.\nBoth for knee and shoulder\nrecons and can’t recommend them highly enough.\nThank you for helping me move forward and giving me the best care 🩷🩷🩷"
      },
      {
        "id": "g1ptvwwctf-Nzh6emdBRRAB",
        "author": "Kane G",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "I was impressed with Dr Colvin and his staff throughout my whole minor knee operation process.\n\nI felt at ease and had full trust in his skills and post op procedures.\n\nThank you Dr Colvin, 3 weeks later and I’m progressing very well!"
      },
      {
        "id": "g1ptvwwctf-dnUtUV9BRRAB",
        "author": "e! K",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Amazing duty of care, professional advice and most importantly for me, a successful surgery."
      },
      {
        "id": "g1ptvwwctf-LS1HZ3hnRRAB",
        "author": "Daniel Daley",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Dr Colvin has been awesome all the way through the process.\nI had very little after surgery pain compared to other people with the same op from someone else.\nHighly recommend David for all your shoulder and knee requirements."
      },
      {
        "id": "g1ptvwwctf-dXBpSnJnRRAB",
        "author": "Daniel",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Dr Colvin provided great post-op education and advice."
      },
      {
        "id": "g1ptvwwctf-dXVpWDFBRRAB",
        "author": "James McNally",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "I highly recommend Dr David Colvin. Very professional and knowledgeable!"
      },
      {
        "id": "g1ptvwwctf-dXBpcV9RRRAB",
        "author": "Chris Chen",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Great surgeon, wouldn't go to anyone else for surgery on my knee."
      },
      {
        "id": "g1ptvwwctf-dXVqcHB3RRAB",
        "author": "Katie Lintott",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Great Surgeon! Provides great post-op rehab and knows his stuff."
      },
      {
        "id": "g1ptvwwctf-dXVqVGxnRRAB",
        "author": "Daniel D'Avoine",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Very personable and provides clear information on expectations and best options available. Great service all round."
      },
      {
        "id": "g1ptvwwctf-dXBqenRRRRAB",
        "author": "Joel Skinner",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Had a workers comp injury for my knee. Surgery performed by Dr Colvin. Back to work with no issues"
      },
      {
        "id": "g1ptvwwctf-pdXVpSE93EAE",
        "author": "Michael Andrews",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "David Colvin is highly professional and patient focused. Would highly recommend his services."
      },
      {
        "id": "g1ptvwwctf-dXVpWF9BRRAB",
        "author": "Aaron McErlaine",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Had a fantastic experience with David Colvin. Extremely professional, personable and answered all my questions in language that I could understand. I would strongly recommend David Colvin"
      },
      {
        "id": "g1ptvwwctf-dXBqSWpRRRAB",
        "author": "Eddy Daccache",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "A very positive experience with Dr Colvin, he's a proactive surgeon who communicates well with his patients."
      },
      {
        "id": "g1ptvwwctf-pX3Fyak5REAE",
        "author": "Carol martinez",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Extremely happy with the result of my right knee, pain is gone and the scar are invisible\nReady to go in two weeks to fix my left knee.\nAmazing doctor!"
      },
      {
        "id": "g1ptvwwctf-pdXRpbElnEAE",
        "author": "Michael Buswell",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Very encouraging, caring and people first. No operation needed for my injury but he taught me what I can do with Exercise Rehabilitation to speed up my recovery! Would highly recommend"
      },
      {
        "id": "g1ptvwwctf-pdXBqVU5REAE",
        "author": "Leigh Ashmore",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "I highly recommend Dr Colvin's services, he's a professional surgeon who cares for his patients and is proactive in his approach. He has great outcomes and does a fantastic job!"
      },
      {
        "id": "g1ptvwwctf-aXBUeDZ3RRAB",
        "author": "Ryan O'Connor",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Great surgeon, practical advice and firm believer in exercise for rehab. Can't recommend enough!"
      },
      {
        "id": "g1ptvwwctf-dXVpZXR3RRAB",
        "author": "Taylor Mucciarone",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Good with providing education and care's about post surgical exercise rehabilitation to get better outcomes. If you need to see him quickly he is happy to accommodate and change his schedule to fit you in."
      },
      {
        "id": "g1ptvwwctf-dXBqMndBRRAB",
        "author": "Channai Buller",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Great surgeon with a world of knowledge. A huge believer in the use of exercise rehabilitation post surgery which is great to see! Would definitely recommend Dr Colvin."
      },
      {
        "id": "g1ptvwwctf-dXVqUzVRRRAB",
        "author": "Alixe Marion",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Excellent surgeon, very knowledgeable on all knee and shoulder issues and explains the injury very well in an easy to understand way. Would definitely recommend Dr Colvin to anyone needing an opinion for a knee or shoulder injury."
      },
      {
        "id": "g1ptvwwctf-NbzdhdEZREAE",
        "author": "Marianne Annereau",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Fixed my shoulder bursitis and impingement. Feels great. Enthusiastic bedside manner."
      },
      {
        "id": "g1ptvwwctf-Ddk9tcExnEAE",
        "author": "Graeme Mckenna",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "This orthopaedic surgeon is very good at his profession. He explains in language that you can understand, and is a good guy to deal with."
      },
      {
        "id": "g1ptvwwctf-ZcEl2ZEF3EAE",
        "author": "Jenny Kilcline",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "I had great professional service from Dr Colvin and his team\nEveryone was helpful and friendly\nThey explained what to expect at each stage of my surgery and recovery\nThe were available to answer any questions that I asked considerately and informatively\nI would recommend them 👍\nACL reconstruction"
      },
      {
        "id": "g1ptvwwctf-dWNUcTZBRRAB",
        "author": "Bryan Molnar",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "I was referred to Mr Colvin by my Osteo for investigation into my left shoulder. He organised my MRI and scans then recommended injections rather than surgery. Great attitude."
      },
      {
        "id": "g1ptvwwctf-JM2NPVVRnEAE",
        "author": "alan nelson",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Recently had rotator cuff and bicep tendon surgery. His staff and process was seamless and professional. Recovery taking longer than I expected but then everyone thinks you'll be the one that recovers quickly. Did a lot of research to find a surgeon I would be comfortable with and have not been disappointed. Good manner/style/approach and no gaps ( except for anesthetist) Thanks"
      },
      {
        "id": "g1ptvwwctf-ellMeHJnRRAB",
        "author": "Christina Marie Giuffre",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Dr Colvin conducted my double knee surgery (TTT) and I've had an exceptional result with minimal scarring. He is a professional and expert in his field promising no gap with health funds. I highly recommend Dr Colvin. It's also worth noting that a huge part of success from this type of surgery is rehab and physio. Dr Colvin has excellent rehab exercise plans and ideally your second partner for surgery is a good physio."
      },
      {
        "id": "g1ptvwwctf-aXRxTjhBRRAB",
        "author": "Tim de Grussa",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "For years I lived with an inflamed right knee following any excessive load, usually from cycling and running. After the physiotherapy path was unsuccessful, I consulted and took Mr Colvins advise to undergo a diagnostic arthroscopy and lateral release of my right knee. After an overnight stay at Berthesta hospital and a follow up session with David and in-house physios I was able to walk out of the surgery (did not need crouches). Inflation took about 2 months to fully subside. After 3 months I was back on the bike and 12 months later I am running and cycling pain free under heavy training loads. David is an excellent surgeon, very approachable and communicates clearly and frequently throughout the process, and is supported by a world class team. Thank you David and co."
      },
      {
        "id": "g1ptvwwctf-enBhTXhnRRAB",
        "author": "Janet Tayler",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "As a result of a horrible car crash I had shoulder surgery by dr Colvin he did an excellent surgery and my recovery has gone so well. He also sent me to a Physio at st John God hospital Subiaco. The Physio was so educational and the Physio certainly helped my healing process."
      },
      {
        "id": "g1ptvwwctf-ak5tNHZ3RRAB",
        "author": "Karen Cole",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "I had such a positive experience with Dr Colvin. He has excellant communication skills and shows empathy and kindness towards his patients. Post operative service was great and professional. His nurse Jenny was also very helpful and caring. Administration was very quick and efficient. I would highly recommend him."
      },
      {
        "id": "g1ptvwwctf-X0w2XzZRRRAB",
        "author": "Sharlie",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Best knee surgeon highly recommend David Colvin he reconstructed my PCL and did an incredible job.\nThankyou so much"
      },
      {
        "id": "g1ptvwwctf-BdW96OEpBEAE",
        "author": "Jamie Stewart",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1ptvwwctf",
        "text": "Dr David Colvin is an excellent surgoen, David done a knee reconstruction on my knee. I am ever so greatful. Even after i was released from hospital David let me borrow his personal CPM machine. Highly recommend David to anyone."
      }
    ]
  },
  "murilo-leie": {
    "listings": [
      {
        "key": "/g/11v0sdzqpd",
        "name": "Dr Murilo Leie",
        "address": "Joondalup Private Hospital, Suite 20, Level 2/60 Shenton Ave, Joondalup WA 6027",
        "rating": 4.9,
        "reviewCount": 39,
        "url": "https://maps.google.com/?cid=17449772784668791521",
        "primary": true,
        "placeId": "ChIJhUTANOBTzSsR4VJ2EeULKvI",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJhUTANOBTzSsR4VJ2EeULKvI"
      }
    ],
    "reviews": [
      {
        "id": "g11v0sdzqpd-YkZoM1pIYxAB",
        "author": "Roy",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11v0sdzqpd",
        "text": "The surgery on replacing both knees was a great success that has given me back total mobility. I will be forever grateful to the team in achieving this."
      },
      {
        "id": "g11v0sdzqpd-V0Uxek5sRRAB",
        "author": "Felps Villela",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Murilo is a great professional. He’s done my ACL reconstruction and meniscus about four months ago. I strongly recommend him."
      },
      {
        "id": "g11v0sdzqpd-UWtONWFFRRAB",
        "author": "Grant Peace",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Massively successful major meniscus surgery.\nOne year on and I have absolutely no pain and complete mobility.\n\nI can recommended Dr Murilo Lee to anyone. 🙏"
      },
      {
        "id": "g11v0sdzqpd-aFpLeWlRRRAB",
        "author": "Belinda Lister",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Excellent surgeon , made the whole experience so easy"
      },
      {
        "id": "g11v0sdzqpd-cVlTVnBBRRAB",
        "author": "Yodati O Connor",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Excellent doctor - look after the patient after op very well. Thank you Dr. Leie"
      },
      {
        "id": "g11v0sdzqpd-TTBzM1VsRRAB",
        "author": "damon noy",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Amazing experiance, everything went really smooth. Thanks to everyone for helping to get my knee back on track."
      },
      {
        "id": "g11v0sdzqpd-cU1qNnRBRRAB",
        "author": "Awad Bafaraj",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Excellent service by Dr. leie and team, i was in severe pain with my knee helped me when i needed the most. thanks again. highly recommend"
      },
      {
        "id": "g11v0sdzqpd-TFRWV04yYxAB",
        "author": "Chris Knight",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr Leie is a magician , completely made my knee pain disappear. Highly recommended"
      },
      {
        "id": "g11v0sdzqpd-ZVVab05IYxAB",
        "author": "Clintstar81",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Thank you Dr Leie\nI suffered a bad knee injury ACL,MCL,LCL Tibia plateau fracture\nHad to have full open knee surgery\nHe took over my operation and I felt so comfortable and everything was explained in detail\nSurgery was a great success, no issues at all\nMy rehab went well\nThe healing and strength I have back again is unbelievable\nNot one bit of pain after it healing\nU sir are a true hero\nI thank you and your staff for everything you did for me\nI highly recommend Dr Murilo\nGod bless you"
      },
      {
        "id": "g11v0sdzqpd-cjZUU3hRRRAB",
        "author": "Michael Amos",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "I recently underwent knee reconstruction surgery for my PCL and MCL, and I couldn’t be happier with the results. The entire process, from pre-surgery consultations to post-operative care, was seamless. A big thank to Dr Murillo Leie and the surgical team, they were highly skilled and made me feel confident and informed every step of the way. Recovery has been smooth, and I’m already noticing significant improvement in stability and mobility. I’m grateful for the expertise and care that went into this procedure truly life changing!”"
      },
      {
        "id": "g11v0sdzqpd-cTdDMHhnRRAB",
        "author": "Bruce N",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "I broke my femur and had it repaired, but unfortunately, I broke it again while on holiday and needed another surgery. Dr. Leie took over my case for the second operation, and his work was exceptional. He braced my leg so well that it’s even stronger than before, and this time I healed up smoothly without any infection issues. At over 70 years old, I’m now walking comfortably again, which I didn’t think would be possible. I'm very grateful for Dr. Leie's expertise and highly recommend him."
      },
      {
        "id": "g11v0sdzqpd-WHpFM2FIYxAB",
        "author": "Denise Davies",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "I've recently had knee surgery with Dr Murillo Leie.From my 1st consult through to my post surgery Dr Leie has been outstanding. Has a wonderful bedside manner made me feel completely at ease.Very professional manner 10 out of 10 .couldn't be happier with my care throughout the whole procedure.Thanks also to the lovely reception staff.Fran .Stephanie Jennifer very helpful and friendly 😊"
      },
      {
        "id": "g11v0sdzqpd-fOU9hdVZREAE",
        "author": "Yesim Atila",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr Murillo Leie is an amazing, passionate for what he does, highly skilled and caring surgeon who did medial meniscus tear repair surgery on my knee 3 months ago. It was a great success and I absolutely recommend him to anyone who needs knee surgery."
      },
      {
        "id": "g11v0sdzqpd-vc3JLV0pREAE",
        "author": "Popy Kkl",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "I can’t speak highly enough of my experience with Dr Murillo Leie and the entire team. I had a severe tibial plateau fracture followed by multi-ligament reconstruction, with surgeries six months apart. From the very beginning, I had complete confidence in his hands, and that never wavered. His skill, professionalism, and genuine care made a difficult and daunting recovery process so much easier to face. I’ve never had any doubts throughout the journey, and I always felt like I was in the best possible care. He and his team are truly outstanding—thank you for everything!"
      },
      {
        "id": "g11v0sdzqpd-T1RkNlIzYxAB",
        "author": "Elizabeth",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "I could not have had a better person than Mr Leie and his team to do my hip replacement. I had been referred to another surgeon at another hospital who would not even put me on the waiting list due to my weight. I lost 21kg, but unfortunately my hip gave out and I ended up in JHC emergency. Still I could not have surgery due to not \"breaking\" my hip. Enter Mr Murilo Leie. After discussing the usual risks with me went ahead and replaced my hip. I am now 10 days post surgery and moving around better than ever. Murillo is professional and caring. Passionate about what he does and explains every thing to you and listened to all my concerns. I could not have higher praise for him and his staff.\nThank you Mr Leie."
      },
      {
        "id": "g11v0sdzqpd-yaHMycU53EAE",
        "author": "Michele Rene-Howson",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Very helpful and professional"
      },
      {
        "id": "g11v0sdzqpd-a3JEVTdnRRAB",
        "author": "Jennifer Gardiner",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Very impressed with my surgery and outcome"
      },
      {
        "id": "g11v0sdzqpd-ybDRId1F3EAE",
        "author": "james hall",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Very professional and pleasure to deal with. Highly recommended"
      },
      {
        "id": "g11v0sdzqpd-azhQZnZnRRAB",
        "author": "El Lipman",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr Murilo Leie gave me back my life at 81 my hips were completely bone on bone I can’t thank him enough"
      },
      {
        "id": "g11v0sdzqpd-sLS16SE5nEAE",
        "author": "roger turner",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr. Leie and all of his support staff were magnificent, his skill with hip replacement on me was second to none, his follow up and general management was superb and I could not recommend him more highly."
      },
      {
        "id": "g11v0sdzqpd-MVBMM2l3RRAB",
        "author": "den dewson",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr Murillo Leie, Is a fantastic Dr/Surgeon, The most wonderful bedside manner and made me feel more calm as everything was explained in detail and I must thank him for a wonderful job on my hip , THANK You Dr Murillo."
      },
      {
        "id": "g11v0sdzqpd-dU95VjlRRRAB",
        "author": "Ronald Johnson",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Absolutely the best experience I have had my knee is so good since the operation. It is 12 months now and it is so great.highly recommend Dr Leie."
      },
      {
        "id": "g11v0sdzqpd-eXNIYl9nRRAB",
        "author": "Kevin Washer",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr Leie did a very good job on my wife’s knee. She had 3 ligaments replaced and is much better now. Very grateful, thank you"
      },
      {
        "id": "g11v0sdzqpd-bGFYRDJBRRAB",
        "author": "Glennis Hill",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Good morning\nHaving recently had Orthapedic surgery I found the staff & Dr Murilo’s team to be friendly & helpful with any queries I had . Thank you very much Dr Leie for getting me in earlier than I expected\nI found the Joondalup Health campus from receptionist to nurses all excellent\nKeep up the great team work\n\nKind regards\n\nGlennis Hill"
      },
      {
        "id": "g11v0sdzqpd-eWJDRDF3RRAB",
        "author": "SAM DE SILVA",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "I have done the Acl surgery about 3 months ago , i feel great so far.I found the staff & Dr Murilo’s team to be friendly & helpful with any queries I had . Thank you very much Dr Leie for getting me in earlier than I expected\nI found the Joondalup Health campus from receptionist to nurses all excellent\nKeep up the great team work\n\nKind regards\nSam"
      },
      {
        "id": "g11v0sdzqpd-iel8zaFZBEAE",
        "author": "S R",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr Leie and his team are professional and caring. Dr. Leie listens well and explains procedures and outcomes in a clear and precise manner. Highly recommend him as a surgeon."
      },
      {
        "id": "g11v0sdzqpd-ycHFqd1dnEAE",
        "author": "Vu Le",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Great Doctor,great services,friendly staff always.\nThank you so much Dr. Leie for your great care and surgery. You are the best surgeon who bring me back the quality of my life perfectly with my new knee."
      },
      {
        "id": "g11v0sdzqpd-cHVMbnZnRRAB",
        "author": "Ali Aryan",
        "rating": 1,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Warning: Stay Away from Dr. Murilo Leie\n\nI am writing this review to warn anyone considering Dr. Murilo Leie for orthopedic surgery to RUN in the opposite direction. My experience with him was nothing short of a nightmare. After a reputed ACL injury, I trusted Dr. Leie to perform necessary surgery, but instead, he subjected me to an unnecessary HTO procedure.\n\nHis negligence didn't end there. The surgery area became infected, leading to excruciating pain, prolonged recovery, and mounting financial burdens. Not only did Dr. Leie ruin my life physically, but he also caused immense emotional distress and financial losses.\n\nMy advice: steer clear of Dr. Murilo Leie unless you want your life turned upside down. Don't let his incompetence ruin your health and finances like it did mine. Spread the word and spare others from the agony I endured under his care."
      },
      {
        "id": "g11v0sdzqpd-OFpqMDNnRRAB",
        "author": "Jacqueline Aldersea",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr Murilo Leie is an excellent surgeon with a lovely bedside manner. Dr Leie performed emergency surgery on both of my arms. It is evident that Dr Leie wants the best outcomes for his patients and he went above and beyond to ensure that I recovered to my full potential. I'd highly recommend Dr Leie and his team."
      },
      {
        "id": "g11v0sdzqpd-iejQ2Mk5nEAE",
        "author": "Clayton Arrah",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr. Leie is a great bloke, very knowledgeable in his craft with great character. Throughout my experience and surgery with Dr. Leie I found swift recovery times and no further and ongoing issues. Dr. Leie has enabled me to continue on with my life as if my surgery had never occurred. I highly recommend Dr. Leie."
      },
      {
        "id": "g11v0sdzqpd-dWR6ZnlBRRAB",
        "author": "Natasha Hudson",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr Leie is amazing! I had an uncommon hip injury which required THR and bone graft, Dr Leie performed this procedure successfully and with utmost confidence, which eased my worries greatly! Dr Leie, is very professional, his confidence and smile made my journey from first appointment to post surgery check up/s a lot less stressful and I would absolutely recommend him! Thanks Doc!"
      },
      {
        "id": "g11v0sdzqpd-idWJPak5nEAE",
        "author": "Josephine Potts",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "12 months post op from a total knee replacement and I could not be happier with the result. Doctor Leie's skill as a surgeon is exemplary. He kept me informed and updated every step of the way. I would not hesitate to recommend him."
      },
      {
        "id": "g11v0sdzqpd-ya2FLQlNnEAE",
        "author": "Gill Gore",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr Murilo Leie performed robotic, bilateral knee surgery on me at the end of May this year. I highly recommend Dr Leie and his team for the respect and understanding shown prior, during and since my operation.\n\nI was provided full explanation of what to expect before my procedure; any questions were promptly answered via email, or a phone call, plus reassurance was provided.\n\nNaturally, on the day of my procedure, I was quite anxious; on entering the theatre, my nervousness soon disappeared when I was greeted by all the team with music playing too! What more could you ask for :)\n\nThank you Dr Leie and team for providing me with a positive experience!\n\nGill Gore"
      },
      {
        "id": "g11v0sdzqpd-WeXVEZWN3EAE",
        "author": "Mer Th",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr Leie was my Orthopaedic Surgeon when I had bilateral hip replacement in September 2022. I found him to be very thorough, informative, and supportive. He gave full information about the process and what I could expect and guided my decisions. He answered my questions and helped me understand. And post surgery he was always on hand to monitor and support my healing. He is not just a Doctor or Surgeon, he is a Healer, good medicine for his patients. He was there for me during my journey with well-timed and appropriately placed humour and support. He genuinely cares about his patients and does everything humanly possible to improve their prospects of a return to normal functioning. I’m grateful to have benefited from his elite knowledge and skills as a healing practitioner. I have no qualms at all about recommending him to anyone who might require the services of an Orthopaedic Surgeon. Thank you to Dr Leie and his staff and the staff at Joondalup Private Hospital for making my experience a positive one."
      },
      {
        "id": "g11v0sdzqpd-cHNLQ3ZRRRAB",
        "author": "Christine Savage",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr Leie has made an amazing difference to my life with the right knee replacement he gave me! I healed well and quickly! At 3 months post replacement my knee is like new, no pain, no limp, no restrictions! Thank you from the bottom of my heart for the amazing deal!!"
      },
      {
        "id": "g11v0sdzqpd-ycHVYWllBEAE",
        "author": "Jill Pattison",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11v0sdzqpd",
        "text": "Dr Leie did both of my knee replacements in 2023 and has done an excellent job. He was always happy to explain things that I didn't fully understand. The post op pain was very manageable with both knees and I was off the strong meds after 4 weeks. I was able to start using stairs within 4 weeks and also walk for a good 20 minutes on level ground around the same time. I would definitely see him again if necessary."
      }
    ]
  },
  "jeffrey-ecker": {
    "listings": [
      {
        "key": "/g/1pv5tkkt7",
        "name": "Dr. Jeff Ecker",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.6,
        "reviewCount": 36,
        "url": "https://maps.google.com/?cid=2121781980767984409",
        "primary": true,
        "placeId": "ChIJvw2ZeKqlMioRGRuARngVch0",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJvw2ZeKqlMioRGRuARngVch0"
      }
    ],
    "reviews": [
      {
        "id": "g1pv5tkkt7-ZFMxelRIYxAB",
        "author": "Aviva Ofri",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Dr Ecker is truely an amazing surgeon. He helped me restore the use of my hand after years of pain and deterioration. I never thought I would be able to get my strength back and be able to function daily.\nHe was patient with me to explain the procedure of my surgery and answer all my questions.\nHe is the best hand surgeon in WA. 100% recommended."
      },
      {
        "id": "g1pv5tkkt7-V1RGa1YzYxAB",
        "author": "FIDO EXPEDITIONS",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Hands down the best Orthopaedic surgeon in town(pun intended). He is friendly, competent, and reasonably priced. Very happy with the outcome of my surgery."
      },
      {
        "id": "g1pv5tkkt7-VkV0U1RVRRAB",
        "author": "Arian Wilson",
        "rating": 1,
        "date": "2026-02-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Was recently referred here by my GP for trouble with an old injury. I tried calling 3 times to book my initial consultation, just to be left on hold for over an hour and never being spoken to. Next, I tried booking online and never received a conformation call or email. So I went in person just to be told that Dr Ecker only sees private healthcare patients, despite advertising mixed billing on their website. Now I have no clue what to do or where to go with my injured wrist, it just feels like I'm being ping-ponged around and no one wants to help me out."
      },
      {
        "id": "g1pv5tkkt7-maWRIWkN3EAE",
        "author": "Gordon Bird",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Best wrist surgeon in Wa , found therapists in HULC very professional ."
      },
      {
        "id": "g1pv5tkkt7-QMDhidVhBEAE",
        "author": "Ben Davis",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "In 2006 I had a massive mining accident to my left hand been crushed badly I was taken to the hospital where Jeff was,Jeff had just came back from a conference in America,he operated on my hand and I still have full use of the hand today"
      },
      {
        "id": "g1pv5tkkt7-RN3JQcUFREAE",
        "author": "David Farquhar",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Hi Dr Ecker you probably won't remember me my name is David Farquhar you where working in royal Perth hospital 1989 I was 22 yrs old I had a very bad car accident and the options where to amputate my right arm or try to save it well you saved it you are a brilliant dr and as remember just a really nice bloke you treated me as a person not a number as some doctors can do I would love to speak to you and tell you that thank you so much 😀"
      },
      {
        "id": "g1pv5tkkt7-cWZ6RHl3RRAB",
        "author": "Lavinia Vaz",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "From the get go, his team are professional. I almost wanted to adopt him, he is so caring and perceptive. A brilliant surgeon and a good person. Can't speak highly enough of him and his team's approach to care. Thank you:)"
      },
      {
        "id": "g1pv5tkkt7-RNmUzd1FREAE",
        "author": "Fleur Challen",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Jeff Ecker is not only a brilliant surgeon, he has been so much more than that in terms of seeing me as a whole person , and understanding with great empathy , just what impact my severe injury has had , and will have upon my whole life .\nHe achieved the impossible by giving me far greater use of my left hand than imaginable . Whilst I’ll never be able to return to my profession as a concert violinist , I will be eternally grateful for his expertise in giving me the best chance at moving forward with my life , and for his compassion knowing just how difficult that road will be.\nI must thank the amazing team at HULC Bethesda as well , for their encouragement , patience and expertise , in collaboration with Jeff , for giving me function well beyond all my expectations ."
      },
      {
        "id": "g1pv5tkkt7-YlhvelFrRRAB",
        "author": "Wayne Wheeler",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Long story short, I had a motor bike accident 56 years ago. At that time my left wrist was badly broken and a nail inserted to my elbow.\n\nThis year 2025 I was experiencing pain etc so I had 3 opinions. Two surgeons advised after X-ray & examination I should have my wrist fused.\nThen I met with Jeff, glad I did. He dug deeper. The only surgeon ordering scans of my wrist.\n\nWe met again this morning to discuss.\nAs it turns out my major pain is coming from my arm not my wrist, so if I went ahead with a wrist fusion I would still have pain in my arm.\n\nDon’t get me wrong, he advised my wrist has severe issues as well as my arm. However this was explained in more detail this morning than my previous two consults with other surgeons\n\nThe Outcome\nJeff advised he can do the surgery on the wrist issue and also on the arm issue. I am confident I found the best arm wrist guy in this country, probably on this planet.\nAnd most refreshing he was genuine & sincere while suggesting I should only get the surgery done when I feel your ready (he said I would know when😂) but not when a Doctor suggests it should be done.\n\nNice guy, my wife & I were impressed with his car & time spent this morning going into the fine details.\n\nNo guesses why he is the guru in this field"
      },
      {
        "id": "g1pv5tkkt7-cFk3bGx3RRAB",
        "author": "Craig Anderson",
        "rating": 2,
        "date": "2024-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "No doubt that Jeff Ecker is meant to be one of the best hand/wrist surgeons in Perth. He is let down by the lack of organisation by his front office team and that he takes in too many \"walk in\" emergencies when he has patients booked in. My Wife has had her tests and scans lost 3 times and has had to request them to be re-sent to his rooms 3 times. Today they called on the morning of her appointment as they couldn't find her scan results, you would think when the confirmation sms goes out that they check then that they have everything, so for a 3rd time she had to chase her up results and get them emailed to the clinic reception. My wife took the morning off work using sick leave to travel up from Mandurah to see him, on arrival for a 10:40 am appointment a lady that was booked at 9:10am was still waiting to be seen! My Wife couldn't wait the 1.5- 2 hours to be seen as she had to go to work so had to leave and re-book for another day. You would have thought that while the front desk was on the phone regarding the lost test results they would have mentioned that he was already running behind even though it was early in the day. It was only when there were people all over the place in Reception that she went to ask if he was running on time and was then told he has 5 patients to see before her. Between myself and my Wife we have both had multiple surgeries (10+) with various surgeons and have never experienced such chaos and poor time management. Patients with appointments shouldn't be pushed back and made to wait for walk ins. The diary management should change so time is blocked out for emergencies or those clients should go to ER! On both visits my Wife has witnessed emergencies walk in expecting to jump the queue (and they did). It's a nice demonstration of his compassion to not want to turn people away but it's not acceptable to expect clients to wait for so long and one man can only do so much, as wonderful as he may be."
      },
      {
        "id": "g1pv5tkkt7-Kd3ZIdmRnEAE",
        "author": "Thomas Jewell",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "The best"
      },
      {
        "id": "g1pv5tkkt7-CbmI3Z1J3EAE",
        "author": "Carol Briody",
        "rating": 3,
        "date": "2023-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Excellent Surgeon but needs to work on time management. Wait Time in Clinic is unacceptable."
      },
      {
        "id": "g1pv5tkkt7-LUl2VThBRRAB",
        "author": "Leigh",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "If I could rate Jeff and his team higher I would, 5 stars isn't enough..\nNot only is he the best surgeon I've ever had dealings with he's a good bloke and goes above and beyond to see whatever the problem is through till the end.\nThankyou to the team!"
      },
      {
        "id": "g1pv5tkkt7-HMlp2VE93EAE",
        "author": "Beau Jessett",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Hes the best out there!"
      },
      {
        "id": "g1pv5tkkt7-dGRiR2h3RRAB",
        "author": "Catherine Beccari",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "35 yrs ago I was in a car accident and was taken to royal Perth hospital by ambulance,my right arm was in a bad state,2 broken bones big chunk of my arm missing,my lower arm was hanging on by a small piece of skin,Dr jeff ecker just happened to be there at the right time.he did a full reconstructive surgery(big surgery),connecting everything back up and using a muscle from my back,nerves from my leg and skin graft from my leg.i am so glad I chose to keep my arm and not have it amputated as dr ecker did a fantastic job,I will never have proper us of my right arm but I couldn't have gotten a better surgeon,so grateful for all he has done for me,now I am back to see him to fix my left hand from years of over use .the best hand surgeon in the world,forever grateful"
      },
      {
        "id": "g1pv5tkkt7-peGFHMmFREAE",
        "author": "Owen George",
        "rating": 3,
        "date": "2021-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Dr Ecker did an excellent job on the surgery, however the follow up appointments were always running behind schedule, on average 45 minutes late with no prior warnings and minimal apologies for the constant delays."
      },
      {
        "id": "g1pv5tkkt7-2eU1UV09nEAE",
        "author": "Sheryl Horsman",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "I have never been to any specialist in my life and felt more relaxed and cared for. Dr Ecker and his staff are so professional and caring that you leave his rooms feeling so at ease. Thank you to all the team for a wonderful experience."
      },
      {
        "id": "g1pv5tkkt7-pX0tDT0t3EAE",
        "author": "Wade Barron",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "I was lucky enough to have Dr. Ecker do the reconstructive surgery on my left middle finger after a work accident. His skill and experience ensured that the damage done was kept to a minimum and the loss of function was pretty much contained. My sincere thanks to him and the staff of HULC in South Perth."
      },
      {
        "id": "g1pv5tkkt7-5NTVQelZBEAE",
        "author": "F C",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "After rupturing my tendon to my thumb and this happening during a period with COVID.\nI have been treated so well, the level of medical efforts with surgery and recovery have been outstanding. I cannot thank Dr Ecker enough and his staff and OT’s for their wonderful caring in helping me in my road to recovery. I would highly recommend Jeff and his team and so grateful that I was referred to such awesome practice.. Thank you all very much. Regards Frank"
      },
      {
        "id": "g1pv5tkkt7-ci03WW5RRRAB",
        "author": "Brett D",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Best wrist surgeon in WA hands down."
      },
      {
        "id": "g1pv5tkkt7-a01hb3VRRRAB",
        "author": "Sharon Vincent",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Husband William was sent to Jeff ecker after a badly effected cut finger and Jeff ecker went beyond and above his duty to do surgery after hours which I am very grateful for and also recommend the hospital his based at in Claremont for all they had done for me I will never forget the care that was given and shown to me."
      },
      {
        "id": "g1pv5tkkt7-NOWNhWFFnEAE",
        "author": "Jyoti Parmar",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "I have pain in my hand and right elbow and Jeff was pleasant to talk to you. He gave me a very honest opinion about going for a surgery. You have to wait a bit longer for your appointment but is worth it. Highly recommend"
      },
      {
        "id": "g1pv5tkkt7-jOHRXZ2FREAE",
        "author": "Carmen Sanchez",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Jeff Ecker is an absolute master in his craft. There is nothing I would of changed about my experience with him and his staff. My wrist is without a doubt better and if it weren't for him and his amazing therapists I don't know if I could say that. 100% recommended."
      },
      {
        "id": "g1pv5tkkt7-dV9YVjdRRRAB",
        "author": "Michael Zusman",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Extremely happy with the result of my recent Carpal Tunnel Surgery\nAbsolutely no pain post op and problem has been solved\nA brilliant surgeon"
      },
      {
        "id": "g1pv5tkkt7-a2EycmhBRRAB",
        "author": "Leigh Anderson",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Cannot speak highly enough of this wonderful Surgeon and his staff. Thank you Jeff for your exceptional care and superb surgery."
      },
      {
        "id": "g1pv5tkkt7-rcTQyR0VREAE",
        "author": "Scott Fraser",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "I was lucky enough to be referred to Jeff and yes sometimes you have to wait a little longer for your appointment but once you have had a appointment with Jeff and how meticulous he is through diagrams you understand why. Thank you very much for taking the time to explain everything thing. Also thank you for your amazing staff."
      },
      {
        "id": "g1pv5tkkt7-JbW82LUJ3EAE",
        "author": "TOM CANNON",
        "rating": 2,
        "date": "2019-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "I had thumb ligament repair surgery by Jeff but doesn't get better. He is a good guy but clinic was always mess when I was there. 6 months post surgery rehab with therapists are not great. Therapists work for Jeff but unprofessional and helpless. I tried to see other hand surgeons after 6 months surgery but other surgeons don't want to see me as 2nd opinions. So basically no treatment options in WA. Which is sad. However, Jeff has good reputation in WA. I am pretty sure he is good at some surgeries."
      },
      {
        "id": "g1pv5tkkt7-OFpXNHdRRRAB",
        "author": "Rozalyn Veersma",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Dr Ecker operated on my thumb 7 years ago and I had a great experience & successful outcome, so when I recently broke a bone in my hand from a motorcycle accident, I called his office and got an appointment within 24 hours! Suffice to say, again I’ve had a fantastic outcome. His experience in this field is top notch and I did not have to have any unnecessary surgery which was the best outcome ever! His support team is also high experienced and the custom plastic brace they fabricated was so comfortable compared to the heavy plaster cast the hospital made for my injury. My hands are in the best possible hands with Dr Ecker! :-)"
      },
      {
        "id": "g1pv5tkkt7-3LVBPTkp3EAE",
        "author": "Ronald Minney",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Happy"
      },
      {
        "id": "g1pv5tkkt7-RMXJhY2ZREAE",
        "author": "Joel Newman",
        "rating": 3,
        "date": "2018-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Great service, expect to wait at least an hour longer than appointment time though"
      },
      {
        "id": "g1pv5tkkt7-LVpPQi13RRAB",
        "author": "Fern De Sousa",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Hi\nThank you for working on my Hand\nIt was such a mess after my accident at work I lost count of how many operations I had on it you are an awesome guy and I love you very much Jeff thank you Fernanda De Sousa"
      },
      {
        "id": "g1pv5tkkt7-Ni1MX3BnRRAB",
        "author": "Brett Davies",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Only surgeon (out of 4) to find the proper issue with my wrist. Highly recommended by physios as one of the top 2 surgeons in Perth."
      },
      {
        "id": "g1pv5tkkt7-M3FPczJRRRAB",
        "author": "Bindy M",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1pv5tkkt7",
        "text": "Jeff is by far the most amazing surgeon & human being. His ethos, his passion for cutting edge practice, his contribution to the scientific community, his generosity & compassion, his high tech equipment..... I count myself an amazingly blessed past patient. I have my movement back & I am pain free. Exceptional surgeon & service. I have a friend with a lifelong disability I am going to recommend see Jeff. I believe he can make his life better, like he did mine.\n\nThanks Jeff, you showed me the greatest kindness & you fixed my wrist so beautifully. And I love your appreciation for colour & patterns & unlikely combinations. You always had time for appreciating those colours & patterns that inspire me, too."
      }
    ]
  },
  "lorcan-mcgonagle": {
    "listings": [
      {
        "key": "/g/11gvsl71y8",
        "name": "Dr Lorcan McGonagle, Orthopaedic Surgeon",
        "address": "12 Hermitage St, Geraldton WA 6530",
        "rating": 4.8,
        "reviewCount": 34,
        "url": "https://maps.google.com/?cid=16049772195396442633",
        "primary": true,
        "placeId": "ChIJc73J7uhH2isRCdqLwMY-vN4",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJc73J7uhH2isRCdqLwMY-vN4"
      }
    ],
    "reviews": [
      {
        "id": "g11gvsl71y8-T0VVM1MyYxAB",
        "author": "Brent “Al” Allen-Hauser",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/11gvsl71y8",
        "text": "I’ve had multiple procedures through Lorcan McGonacle now including two carpal tunnel releases, 3 trigger finger ops and moving a nerve in the elbow.\n\nAll have been explained well operated on effectively and have improved my quality of life immeasurably.\n\nSo good to have somebody in Geraldton of this calibre."
      },
      {
        "id": "g11gvsl71y8-TlUxTFNHYxAB",
        "author": "Robin Jennings",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11gvsl71y8",
        "text": "A very big thank you to Lorcan. I fell off a ladder and seriously injured my shoulder. One year later I’m back in business thanks to this gentleman. Highly recommend if you have a similar experience. Thank you Lorcan."
      },
      {
        "id": "g11gvsl71y8-VTBnM1VVRRAB",
        "author": "Helga Goerigk",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11gvsl71y8",
        "text": "He tries to find the best solution to your problem.\nHis motto is he is there to serve you. Does not rush you into a decision , explains the procedure in question. His staff is welcoming and efficient."
      },
      {
        "id": "g11gvsl71y8-tLWE3SldREAE",
        "author": "Mark Testrow",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "Dr McGonagle fixed my right Radius. Great surgeon. As we say in Liverpool 'Ta Larr!'👍"
      },
      {
        "id": "g11gvsl71y8-1b0t2QlN3EAE",
        "author": "Leendert Den Exter",
        "rating": 1,
        "date": "2022-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "Right hip replacement. Leg 13 mm+ sorter den before, No explanation!\nLeft hip replacement. i can now stand up strait. made the leg sorter.\nI now have 3 motor bikes for sale. [can not lift left or right leg hi enough to get on]\nI now have a boat for sale. [can not lift left or right leg hi enough to get in]"
      },
      {
        "id": "g11gvsl71y8-a3NPSzhRRRAB",
        "author": "Bruce MacKenzie",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "Dr McGonagle was very proffesional & performed an excellent operation on my wrist."
      },
      {
        "id": "g11gvsl71y8-pc1B5ZWFREAE",
        "author": "Roslyn Kavcic",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "Lorcan's care and professionalism is beyond reproach. Having recurring Morton's Neuromas I appreciate his expertise in this field."
      },
      {
        "id": "g11gvsl71y8-pMGVpYlRnEAE",
        "author": "Ross Mitchell",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "Have only been for a assessment and waiting for a operation date as yet , my limited time at my one appointment was good And was treated courteously by the staff and Dr Mconagle I have confidence in the attending staff ."
      },
      {
        "id": "g11gvsl71y8-pa3V6N1p3EAE",
        "author": "Craig Marsden",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "My experience with Dr McGonagall for a full hip replacement was awesome no fuss no muss . Up and about just like new in no time"
      },
      {
        "id": "g11gvsl71y8-eTdmbXRBRRAB",
        "author": "Caroline Horsham",
        "rating": 4,
        "date": "2021-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "Dr McGonagle was very thorough, explaining everything clearly and answering all my questions. I like that surgery was not his first go to and all options were discussed"
      },
      {
        "id": "g11gvsl71y8-DcTZLZ1VBEAE",
        "author": "Dave Hill",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "Had a hip replacement and it went great. No more pain and y quick recovery. Very professional yet friendly manner. Would very highly recommend."
      },
      {
        "id": "g11gvsl71y8-peTc3WFBBEAE",
        "author": "Allan Pelkowitz",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "Dr McGonagle is warm and friendly. He listens to the patient perspective and presents options for consideration without pushing his view"
      },
      {
        "id": "g11gvsl71y8-pOE43TFRREAE",
        "author": "Rhonda Kelly",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "Had a Knee replacement 17 months ago, never looked back, staff very professional and more than helpful, Doc McGonagle what can I say\nI can walk with out limping, don’t fall over no more pain. Recommend to anyone without\nAny hesitation at all."
      },
      {
        "id": "g11gvsl71y8-cjZ5VDlnRRAB",
        "author": "Graeme Hopkins",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "Dr McGonagle has been very attentive throughout my attendance to his practice. Dealing with him and his staff has been a pleasure. I highly recommend for your treatment."
      },
      {
        "id": "g11gvsl71y8-DdC1HQWJnEAE",
        "author": "Megan Croswell",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "I would 100% if ever needing an ortho surgeon guarantee Dr McGonagle he is so professional and takes such pride in his work, he has a big heart and cares for his patients. I have 2 knee surgeries with Dr McGonagle and has always replied immediately if I've needed him . Thankyou so much for your special support and treatment God bless you . Kind Regards Megan Croswell."
      },
      {
        "id": "g11gvsl71y8-pX2R6VlNREAE",
        "author": "Kathleen Mahony",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "My knee op surgery was handled very professionally, I was treated with respect and care under Mr McGonagle's supervision. My post op care was EXCELLENT. I had a complication with an infection in the skin 6/7 days following surgery, this was dealt with very expediently by Mr McGonagle, cultures were taken to ascertain that it was not in the joint and every care was taken by the team under Mr McGonagle's authority to heal the wound completely before being discharged from hospital. The need, on my part, for post op exercises and expectations was discussed prior to surgery and I was strongly advised to follow through with physios advice. It has been 6 months since surgery and I have absolutely no pain! I would highly recommend Mr McGonagle for any orthopaedic surgery. I have had both hips and a foot operation by other surgeons but Mr McGonagle has been the most thorough in every respect\nKathleen Mahony"
      },
      {
        "id": "g11gvsl71y8-pOEl6SGVBEAE",
        "author": "Johanna Jumelet Aitken",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "The absolute best of diligent, expert and friendly care. Every step of my hip replacement from initial consultation to admission and after care were faultless. A very positive experience and now recovering well, which I credit to the superb skills of Dr McGonagle and his team, along with St John of God Hospital staff in Geraldton. Delighted!"
      },
      {
        "id": "g11gvsl71y8-DaXNlQUhBEAE",
        "author": "Susan D",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "Fantastic experience, and service"
      },
      {
        "id": "g11gvsl71y8-NzhuaXZRRRAB",
        "author": "Jeanette Brown",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "I’m very happy with the treatment I received and have had no problems, very good surgeon highly recommend"
      },
      {
        "id": "g11gvsl71y8-DbXZXOUxBEAE",
        "author": "Paul Devine",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11gvsl71y8",
        "text": "I was very happy with every aspect of the surgery, which was performed by Dr. McGonagle. I would highly recommend him as a very competent surgeon."
      }
    ]
  },
  "farhaan-altaf": {
    "listings": [
      {
        "key": "/g/11s40txmfb",
        "name": "Dr Farhaan Altaf",
        "address": "Unit 312/91 Monash Ave, Nedlands WA 6009",
        "rating": 4.5,
        "reviewCount": 32,
        "url": "https://maps.google.com/?cid=14769141493948633994",
        "primary": true,
        "placeId": "ChIJXfxzpTelMioRilNKQPCH9sw",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJXfxzpTelMioRilNKQPCH9sw"
      }
    ],
    "reviews": [
      {
        "id": "g11s40txmfb-Ym1GeWVFRRAB",
        "author": "Elizabeth Male",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11s40txmfb",
        "text": "Had a very good experience all the team very caring Dr altaf has kept me walking and pain free thank you"
      },
      {
        "id": "g11s40txmfb-YTB4T1gxRRAB",
        "author": "Jen Robinson",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11s40txmfb",
        "text": "I attended Dr Altaf’s consulting centre via referral from my GP when it was noted that I had severe spinal stenosis. After the consultation I was booked in for surgery and two weeks on from this cannot thank Dr Alraf and his team enough for the dramatic change this has already made to my life. I am still recovering but can already note so many changes for the better after living with this for so long. Like we all say “should’ve done it sooner”. Thank you Dr Altaf and team!!"
      },
      {
        "id": "g11s40txmfb-VFhOc1lXYxAB",
        "author": "Steve H",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11s40txmfb",
        "text": "Both Dr Altaf and Maria are always a please to see."
      },
      {
        "id": "g11s40txmfb-UVVWaVZXYxAB",
        "author": "Forza Motorsport here",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11s40txmfb",
        "text": "Very Professional Consultant 👏 from the Reception with Marie! To the operation Table with Dr Farhaan Altal ⭐️⭐️⭐️⭐️⭐️"
      },
      {
        "id": "g11s40txmfb-UkhWeU5YYxAB",
        "author": "Krystie Gledhill",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11s40txmfb",
        "text": "Highly recommend – truly outstanding care\nI’ve been incredibly impressed with the service every single time I’ve visited. The entire team is amazing – from the friendly reception staff to the surgeons and support team, everyone is genuinely warm, helpful, and professional.\nThey go out of their way to be accommodating, always making sure I feel heard, comfortable, and well-informed about my treatment and next steps. In what can be a stressful and painful time dealing with spinal issues, their caring approach and excellent communication have made a huge difference.\nThank you to the whole team for providing such consistently high-quality care. I wouldn’t hesitate to recommend them to anyone needing spinal expertise."
      },
      {
        "id": "g11s40txmfb-ZFVaamVFRRAB",
        "author": "Lyn Cattle",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/11s40txmfb",
        "text": "Maria, a very helpful and friendly receptionist.\nDr Altaf friendly and very knowledgeable. Comfortable atmosphere to asking questions and if my condition requires it, more than happy to return to Dr Altaf."
      },
      {
        "id": "g11s40txmfb-VDBsb1kxRRAB",
        "author": "Hayley",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11s40txmfb",
        "text": "Dr Farhaan and his wonderful staff at the Hollywood Consulting rooms have been nothing but amazing. Going above and beyond to help me with my surgery and recovery. Can't thank them enough. Maria behind the desk is a god send.\nThank you both so much\nHayley Orr"
      },
      {
        "id": "g11s40txmfb-V1ZoZlYxRRAB",
        "author": "Glenn",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11s40txmfb",
        "text": "Just had my 3 month review after L3 L4 laminctamy discectomy surgery . Cannot be happier . Dr Altaf was clear precise and most of all accurate in his diagnosis and surgery . Highly recomended ."
      },
      {
        "id": "g11s40txmfb-WDIxbVNWRRAB",
        "author": "Ame Kate",
        "rating": 1,
        "date": "2026-04-10",
        "listing": "/g/11s40txmfb",
        "text": "i had a spinal fusion of T10-L4 in the beginning of june 2025, i’m currently 9 months post op and i have seen him once since the day of my surgery, i was having possible nerve issues where i could hardly walk for about 2 months and my appointments kept getting rescheduled and didn’t end up having my first post op appointment til october, and when i had eventually seen him he didn’t know i haven’t been seen and was very dismissive. this has made these past 9 months very difficult"
      },
      {
        "id": "g11s40txmfb-WjI5akxVRRAB",
        "author": "Danny Gilbert",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11s40txmfb",
        "text": "In 2024, had issues with Lumbar area of the spine that at it's worst limited movement due to pain in the back and shooting pains down the back of both legs. It was an ongoing thing for a year with a couple epidural injections that helped but didn't solve the issue.\n\nFinally got in to see Dr. Altaf to see his opinion and he could see an issue around the L4/L5 area and what could get worse with the L1/L2 area. After a chat, a Double Laminectomy to cover both areas was planned and after getting approval to help pay for the surgery costs, I had the surgery in October 2025.\n\nJust over five months on now and any issues prior to the surgery have gone. The area around the back does ache from time to time if I'm up for too long, but anything like that was to be expected and ongoing physio/rehab will help with that.\n\nDealing with Dr. Altaf and the wonderful team at Hollywood Consulting Centre was tremendous and at any time I had a question or needed documents filled out, they were all willing to help out."
      },
      {
        "id": "g11s40txmfb-VjBSbE0xRRAB",
        "author": "Brendan Blatcher",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11s40txmfb",
        "text": "Brilliant, from start to almost finish. My whole experience so far from early consultation, to surgery and currently Post Surgery has been fantastic, such a professional and warm Doctor, made me feel very at ease while explaining the surgical procedure I required. Hopefully I’ll be back to work soon. Also, Maria the Receptionist, a very warm lady and very communicative, booked my scans, blood works that I required pre surgery. She just made everything easier for me.\nI’m a very happy patient!"
      },
      {
        "id": "g11s40txmfb-UkdaS2RFRRAB",
        "author": "Michael Moss",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11s40txmfb",
        "text": "Jan 2026 I had surgery on my lower back to release pressure on nerves to my left leg.\nDr Altaf performed this procedure.\nFrom the first consult he was extremely thorough and clearly explained the injury and resulting pain implications, which I must admit were servere.\nWith resulting scans he clearly pointed out the injury sites and explained what he was going to do surgery wise. The operation went extremely well and awesome post surgery care at Hollywood.\nNot only was Dr Altaf fantastic, I would have struggled without the awesome friendly, happy assistance from Maria to make it all happen seamlessly.\nI highly recommend Dr Altaf and team for spinal nerve issues and matters in his fields of specially."
      },
      {
        "id": "g11s40txmfb-U0ZJd01GRRAB",
        "author": "Fred Turco",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11s40txmfb",
        "text": "Had a Titanium brace insisted at C4 C5, three weeks ago. Absolutely amazed with results. No more tingling or deliberating nerve pain to deal with. From the moment I stepped into Dr. Altaf office, I was meet by a friendly, helpful and supportive staff.\nDr. Altaf is clearly a first class surgeon, very supportive, pre and post procedure.\nQuick recovery with no complications, which is very important to me, seeing that I'm 12 years post heart transplant.\nThank you very much Dr. Altaf and office staff.\nFred Turco 9/3/2026"
      },
      {
        "id": "g11s40txmfb-T0ZSWGJFRRAB",
        "author": "Tim Richards",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/11s40txmfb",
        "text": "Excellent all round - I am 8 weeks post fusion lumbar surgery at both L4/5 and L5/S1 (two cages, bolts and screws, incisions front, side and back - a massive surgery) and I couldn’t be happier with how everything’s gone. Dr Altaf strikes a great balance between options and surgery and then the actual surgery has been highly successful. I am already walking 5km to 6km without the nerve pain I was experiencing down my leg. Admin staff are also great - overall a first class experience. Would highly recommend."
      },
      {
        "id": "g11s40txmfb-VTNveE0wRRAB",
        "author": "Tshv",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11s40txmfb",
        "text": "Pleasant atmosphere\nFriendly professional service by receptionist\nDr Altaf is the best"
      },
      {
        "id": "g11s40txmfb-ZVRneGMwRRAB",
        "author": "Jill McVee",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11s40txmfb",
        "text": "Very happy with Dr Altaf. He was very easy to talk to, explained my procedure and after care well and has been very good in his follow up post-op."
      },
      {
        "id": "g11s40txmfb-UzBWRFowRRAB",
        "author": "Pamel Bush",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11s40txmfb",
        "text": "I came to Dr Altaf a few months ago looking for help, as I had a disc bulge sitting in my nerve and it was causing me immense pain. I could barely walk and I was losing my quality of life. As soon as I saw Dr Altaf he was all hands on desk sending me to specialists and scans to see what could be done. He saw me through the whole process up until we decided to go with surgery. I’m now 1 weeks post op from a spinal fusion and I feel better than I did pre op. Dr Altaf did an amazing job and even visited everyday whilst I was in hospital which was a suprise but also greatly appreciated. Even now he is still managing me post op with check ups and tests to make sure everything is going smoothly. I could not recommend him or his staff more , they were the best medical personal I have ever met and been helped by. Thank you"
      },
      {
        "id": "g11s40txmfb-Y25oUk1IYxAB",
        "author": "H B",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11s40txmfb",
        "text": "It’s been just over two weeks since my lumbar spinal fusion surgery, and I am truly amazed by the results so far!\n\nBefore surgery I could barely walk for more than 5 minutes due to severe nerve pain in one of my legs - but now I’m walking again!\n\nI am incredibly grateful for my choice of spinal surgeon, Dr Altaf. The procedure went smoothly, and I was able to begin my exercise program the very next day.\n\nLooking at spinal surgery as an option can be a daunting experience, but sometimes it is necessary when conservative treatments no longer provide lasting relief.\nI can wholeheartedly recommend Dr Altaf who is kind and genuinely patient focussed\nHank"
      },
      {
        "id": "g11s40txmfb-YzB0NVlrRRAB",
        "author": "Jessica Brydon",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11s40txmfb",
        "text": "Highly recommend."
      },
      {
        "id": "g11s40txmfb-ZWswMlkxRRAB",
        "author": "Shiann Bradshaw (Shi Shi)",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/11s40txmfb",
        "text": "Medical negligence!! Appalling."
      },
      {
        "id": "g11s40txmfb-UWtWcVozYxAB",
        "author": "B “Oody's Mum” Kim",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11s40txmfb",
        "text": "Great bedside manner - would highly recommend!"
      },
      {
        "id": "g11s40txmfb-VTFodWFFRRAB",
        "author": "Roseanne Humphreys",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11s40txmfb",
        "text": "Thank for the excellent advice and surgery… very pleased with the results"
      },
      {
        "id": "g11s40txmfb-ZUhGSmVXYxAB",
        "author": "Shane Furlonger",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11s40txmfb",
        "text": "The surgery went exactly to plan and the post operative care was terrific."
      },
      {
        "id": "g11s40txmfb-UzIxZmNYYxAB",
        "author": "Chris Bekkers",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/11s40txmfb",
        "text": "Have completely stuffed my back. When trying to get in contact was ignored left with no medication for 6 weeks over Christmas. Back still has a slipped disc and the scar tissue is overlapping my nerve. Disgusting surgery"
      },
      {
        "id": "g11s40txmfb-YVhvNVduYxAB",
        "author": "Bana “banaj2020” DSena",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11s40txmfb",
        "text": "The staff are professional yet welcoming and friendly. Dr Altaf is the best surgeon if looking for someone that not only will fix your back issues but also listens to you"
      },
      {
        "id": "g11s40txmfb-Uld4NlZVRRAB",
        "author": "Judi Mcalpine",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/11s40txmfb",
        "text": "I was disappointed with Dr. Altaf, I’m a public patient but paid to see him privately 4 times. I was finally transferred to Royal Perth under him. I had the same tests 2 years running to be told he didn’t want to touch me, as could make me worse. Pffft. I’m getting worse by the day. 2 years of my life I’ll never get back. I expected more from him, so now look at him as incompetent."
      },
      {
        "id": "g11s40txmfb-ZVhFd1dHYxAB",
        "author": "Herve Kelly",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11s40txmfb",
        "text": "Dr. Farhaan Altaf did my back surgery and I’m very pleased with the results. He was kind, patient, and explained everything clearly. The surgery went smoothly and my recovery has been great. I highly recommend him!"
      },
      {
        "id": "g11s40txmfb-YjFkZlFVRRAB",
        "author": "Vandana Katyal",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11s40txmfb",
        "text": "I cannot speak highly enough of Dr Farhaan as an orthopaedic surgeon. From my very first consultation, he demonstrated not only outstanding clinical expertise but also a rare level of compassion and genuine care for his patients. He took the time to listen attentively to my concerns, explained my diagnosis clearly, and offered me treatment options with thorough, evidence-based reasoning.\n\nWhat truly sets Dr Farhaan apart is his calm, reassuring manner and his ability to instil complete trust and confidence. Surgery is never an easy decision, but in Dr Farhaan’s capable hands, I felt informed, supported, and safe every step of the way. My procedure and recovery were smoother than I could have ever imagined — a true testament to his surgical precision and post-operative management.\n\nThe follow-up care was equally impressive. Dr Farhaan was attentive, approachable, and always available to answer questions, no matter how minor. I felt like more than just a patient — I felt genuinely cared for.\n\nI wholeheartedly recommend Dr Farhaan to anyone seeking expert orthopaedic care. He is a brilliant surgeon, a wonderful human being, and a true credit to the medical profession."
      },
      {
        "id": "g11s40txmfb-d3JqcXVBRRAB",
        "author": "Lyn Bertram",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11s40txmfb",
        "text": "Great recovery from spinal fusion surgery.\nConfidence in all treatment and visits from Dr Altaf."
      }
    ]
  },
  "geoff-cooper": {
    "listings": [
      {
        "key": "/g/12qgl2pvy",
        "name": "North Coast Orthopaedics - Dr. Geoff Cooper",
        "address": "25/56 Grand Blvd, Joondalup WA 6027",
        "rating": 4.3,
        "reviewCount": 32,
        "url": "https://maps.google.com/?cid=11514880423804914889",
        "primary": true,
        "placeId": "ChIJ6ag0oGhTzSsRycz9q7wSzZ8",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJ6ag0oGhTzSsRycz9q7wSzZ8"
      }
    ],
    "reviews": [
      {
        "id": "g12qgl2pvy-ZEZrNVJtYxAB",
        "author": "Bernie. AV Technician",
        "rating": 5,
        "date": "2026-10-09",
        "listing": "/g/12qgl2pvy",
        "text": "Before I went to Dr. Cooper I had a hard time sleeping and after he took an angle grinder and fixed my meniscus, I could lay horizontal without pain."
      },
      {
        "id": "g12qgl2pvy-T0dzd2VtYxAB",
        "author": "Peter Legg",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/12qgl2pvy",
        "text": "By early 2025 my Right Hip was absolutely shot. I had initially tried The Public Hospital system to get surgery, but that was as expected a trail leading to the far distance. By this time I was basically crippled. So my local Doctor referred me to Geoff Cooper. Geoff pushed me through asap for surgery. Geoff and the surgery team were the best of the best, could never have asked for better any where. So a very big thank you to Geoff Cooper for giving me my life back, very much appreciated."
      },
      {
        "id": "g12qgl2pvy-TFc5ek1rRRAB",
        "author": "Cousin Mitchell",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/12qgl2pvy",
        "text": "Great Doctor and the staff are very friendly and helpful"
      },
      {
        "id": "g12qgl2pvy-MLWFTTkNnEAE",
        "author": "Cecilia Fox",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I'm extremely happy with my experience with Geoffrey Cooper. I liked his mannerisms and to the point of explanation of my prognosis.\nI have had a Total knee replacement on my left knee, and only have positive responses to the surgery, and after. Fantastic explanations.\nI need another total knee replacement for my right knee and I am very confident that this will be as good as the first one. A great team at Joondalup Hospital, and fantastic reception staff.\nMany thanks all\nI have now had the second Total knee replacement, and have recovered very well from this one too. Lots of hard work and rehabilitation, and hydrotherapy. I have great movement and no more pain. I have my life back again. Thank Geoff, and thankyou to your wonderful staff."
      },
      {
        "id": "g12qgl2pvy-NlBLRzR3RRAB",
        "author": "Dawn Bone",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "Geoff cooper first saw my 88 year old mother when she was at her lowest and worst due to chronic pain in her hip. This had all occurred very suddenly over the year. The first appointment mum was very anxious. He listened patiently to mum, and after an examination, he explained everything in layman's terms. He was extremely thorough and compassionate. His reception staff were fantastic and so supportive.\nOnce a new Xray, etc was re-done. He operated within the month.\nSince that day, mum has had NO pain at all.\nMum was very anxious and overwhelmed with it all proceeding so quickly. JHC ward staff were so kind and caring. Five weeks post op and Mum is nearly back to being independent again.\nThank you Geoff Cooper for giving Mum her quality of life back. We will be forever grateful."
      },
      {
        "id": "g12qgl2pvy-ZFVsWVIwRRAB",
        "author": "Jan Maldero",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I was referred to Geoff Cooper with chronic hip pain and was put at ease straight away with his friendly manner, after viewing my xrays and examination he recommended hip replacement surgery, explaining the procedure and the types hip replacement implants used.\nAfter the surgery the pain the just disappeared.\nI was surprised how fast the recovery was\nwithin weeks you are getting back to your life.\nPAIN FREE\n\nThank you Geoff and your lovely team"
      },
      {
        "id": "g12qgl2pvy-UW1SdU5FRRAB",
        "author": "Mary Carter",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I wish to say how extremely happy I am with my total knee replacement . I was 89yrs 7 months old at the time & Geoff was amazing . Explained everything very well before & after & was caring, & considerate . Also his staff were fantastic. This was two years ago and it’s still terrific.Many many thanks"
      },
      {
        "id": "g12qgl2pvy-YbzZyN2JBEAE",
        "author": "Melissa Warren",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I met Mr Cooper 18 months ago when I was first referred to him for trouble with my right knee.\n\nIt has been a long recovery process after having TTT surgery performed.\n\nBut overall, the service I have received from him and his team has been second to none.\n\nI am now embarking on surgery on my left knee which Mr Cooper will be undertaking.\n\nMr Cooper is definitely a no-nonsense Doctor who tells you what you need to hear without the technical terms that you can't understand.\n\nI have no issue in recommending him to other people who need surgery.\n\nOne of the best surgeons in Perth if not the best."
      },
      {
        "id": "g12qgl2pvy-WDNOdVNuYxAB",
        "author": "Sharon",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I am glad that I was referred to Geoff Cooper. He is professional, kind, straightforward as to what I needed which was a total hip replacement. Although I was petrified I felt confident in him.\nGeoff and Mark the anaesthetist made me feel confident prior to going into surgery. At the follow up visits he was caring and explained recovery over the next few weeks. I highly recommend Dr Cooper."
      },
      {
        "id": "g12qgl2pvy-qaUtUYVpnEAE",
        "author": "alan Cross",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I would like to thank Mr Cooper and his team for making my wifes TNR surgery as easy as possible for us.The whole thing was far easier than we thought it would be .Alan Cross"
      },
      {
        "id": "g12qgl2pvy-eF9HWDZRRRAB",
        "author": "Jody Bartle",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "Dr Geoff Cooper was extremely thorough, thoughtful and professional, I can’t recommend him enough. My experience and outcome has been extremely positive. Office staff are also very welcoming and patient, thank you."
      },
      {
        "id": "g12qgl2pvy-qamZDQVF3EAE",
        "author": "Angie Redman",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "Mr Cooper recently carried out an arthroscopy on my left knee, tidying up my torn meniscus and scoping the OA. From the first consult, he was explanative, assuring, pleasant and understanding. I found his conduct to be one of ease yet professional. Totally comfortable with this surgeon. Highly recommended."
      },
      {
        "id": "g12qgl2pvy-eTVfbDNBRRAB",
        "author": "vivien daniels",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "Dr Cooper has guided me through a total knee replacement in a professional, easy to understand and friendly manner. Apart from the actual procedure, after care has been second to none. His no nonsense manner ensured visits were informative and I felt that I played a part in all decisions. Thank you Dr Cooper and the support staff in this practice\nI will not be stressed about having a second TKR when the time comes."
      },
      {
        "id": "g12qgl2pvy-aNzRqeld3EAE",
        "author": "E W",
        "rating": 2,
        "date": "2023-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "Rude, arrogant abrupt, uncaring.\nGo elsewhere."
      },
      {
        "id": "g12qgl2pvy-SbS1uS0NREAE",
        "author": "Jackie McKiernan",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I really rate Dr Cooper. He's direct and what I'd call a wysiwyg. I warmed to him. He knows his stuff, explains procedures very well and has a terrific sense of humour. I'm happy that he's my surgeon of choice. I am really baffled with the negative reviews ."
      },
      {
        "id": "g12qgl2pvy-tcTVfSlNREAE",
        "author": "Dionne Penfold",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I'm not sure if I saw Dr Cooper on a bad day but I have never in my 54 years met such a rude, sarcastic, uncompassionate person in my life! I felt completed belittled by his rude answers to my questions. It's really very sad when you visit a Doctor whom is meant to be in a caring profession and you come out in floods of tears!\nI thank his wonderful reception staff Shirley\nAnn & Trish who went above and beyond to help me but I will never return to any follow up appointments."
      },
      {
        "id": "g12qgl2pvy-XbWNiRmJnEAE",
        "author": "Dave Lammy (Davo 1)",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I am a little startled at the negative comments, I had a very bad torn shoulder muscle. Mr. Cooper was friendly, knowledgeable and I felt comfortable with him. Yes, he does not mince his words but for me, he is the type of doctor I appreciate."
      },
      {
        "id": "g12qgl2pvy-PcEs2aGZ3EAE",
        "author": "Sue&Ray",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I definitely agree with all those 5 star reviews for Dr Geoff Cooper. I attended with a torn meniscus, and Dr Cooper was very caring and informed with his examination. Explaining clearly, what my problem was, and what he could do to fix it. I've had my surgery now, and my follow up appointment is today. I feel my doctor's choice of surgeon was a good one. Found out later he also replaced my aunt's hip, she was very happy with that outcome too."
      },
      {
        "id": "g12qgl2pvy-dEoyVnRRRRAB",
        "author": "Bev Kemp",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "Knee replacment. Extremely happy with the procedure and the result.\nDr Cooper explains exactly what your options are."
      },
      {
        "id": "g12qgl2pvy-MzR5Q21RRRAB",
        "author": "DJ Munro",
        "rating": 1,
        "date": "2021-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "Very disappointing experience with Mr Geoff Cooper during my consultation. I found him very unprofessional, confusing and a complete waste of my time and money."
      },
      {
        "id": "g12qgl2pvy-xMk9HTFVREAE",
        "author": "celina “Cel” haig",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "DR Cooper saw me after months of shoulder pain\nHe is fantastic with his approach towards your problems and my shoulder has been fantastic after he operated on it .\nThank you"
      },
      {
        "id": "g12qgl2pvy-OTk2endRRRAB",
        "author": "Sam Thorpe-rigby",
        "rating": 1,
        "date": "2021-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I found him the most arrogant and rude doctor I have ever met. He has no compassion for people . Would never go to him again or recommend him to anybody"
      },
      {
        "id": "g12qgl2pvy-dHF5VHhRRRAB",
        "author": "Ben Boylan",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "Dr Cooper was just the type of person I was hoping to see. Very knowledgeable and explained my daughter's knee issues clearly and put our minds at ease. We now know what the issue is, how we can manage the symptoms, how to make improvements and what to do if things change. Very pleased."
      },
      {
        "id": "g12qgl2pvy-cnNTeGhRRRAB",
        "author": "Karen Gant",
        "rating": 1,
        "date": "2020-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I hold the opinion that if you have nothing nice to say, don’t say anything at all.\n\nSuffice it to say I would not recommend him at all. It comes to something when you’re more nervous about appointments with him than you are having the surgery.\n\nI suffer with anxiety and depression and on my appointment days my anxiety went into overdrive. He made me feel belittled and dishonest in his demeanour which is a shame because his reception staff are wonderful."
      },
      {
        "id": "g12qgl2pvy-dnB6ZW53RRAB",
        "author": "Dean McIntyre",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "thanks to u Geoffery i know have some fath that both my knees will be good again"
      },
      {
        "id": "g12qgl2pvy-BcXZYdk93EAE",
        "author": "ian parry",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "Not a problem with Geoff Cooper\nStraight to the point\nBlacks black Whites white no grey areas with him"
      },
      {
        "id": "g12qgl2pvy-ndGZESWZ3EAE",
        "author": "Samantha Gulliver",
        "rating": 3,
        "date": "2018-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I visited Mr Cooper on Wednesday 2nd May at his offices in Joondalup.\n\nI had chosen to visit Mr Cooper after doing some research and finding that he was trained in using the latest robotic technology which had been recently introduced to Perth. I am currently suffering from problem with my right knee and after having an MRI an X-ray done I had been informed by the doctor via my report that the cartilage had worn away at the back of my patella.\n\nUpon initially meeting with Mr Cooper, I found him to be confident and friendly I explained the background to my problem stating that I play sport at a high level and have done for the past 15 years, and my aim was to try and maintain playing at the level I am doing at the moment. I also explained that I had in fact had previous surgery 12 years ago on the same knee for an tibial osteotomy back in the UK. His response to this was “well we sometimes can’t continue to do what we want to do as we get older!” I found this remark to be sarcastic and that he wasn’t listening to what I was saying.\n\nHe gave me a thorough examination which I thought was extremely good. We then started to discuss the problem in more depth and he was focussing more on the surgery I had 12 years ago, with him stating that he wouldn’t have done it that way and he would have done it this way, and that I would have been up and walking within 4-6 weeks unlike the 12 weeks I was completely off my feet for. I found him to come across as arrogant at this statement. He then stated that the knee was in good condition and I had no signs of arthritis, which started to confuse me further as my report from my MRI and X-ray stated that I have signs of Mild OA behind my patella. I then realised that he was only looking at the films and not the report that showed what the findings were on the films. He then began talking about having to do another Osteotomy to correct the alignment of my leg as the first one hadn’t worked. I was surprised to hear this as I hadn’t really had any pain in my knee for the last 11 years, other than when I was 6 months into the soccer season and doing 6 hours plus of soccer a week, which is understandable given the trauma my leg had been through and the fact I am 30. At this point I became very confused and asked the question of “so if we were to do this would that stop the pain I am getting behind my knee”. He then became very aggressive and arrogant by saying the following “You are not listening to what I am saying, and you have only picked out what you want to hear from what I have said to fit with what you want the end result to be” To say I was shocked at how I was spoken to was an understatement. I felt that my question was a question that any normal person would say, and to receive the response he gave left me feeling extremely upset, intimated at how dare I ask any questions. At this point I just remained quiet, feeling like I just wanted to get out of there. He then stated that I needed to go and get further xrays of both of my legs along with a CT scan and to come back as we had spent a lot of time discussing things and on the 2nd appointment he could discuss it further. He then stated that if I was his sister that he wouldn’t recommend for me to have the procedure mentioned and that I may be able to get an injection from him as an alternative option!\nI felt he was just trying to make as much money out of me as possible as I was none the wiser of a way of going forward then when I entered his office 10 minutes prior. I felt ripped off of paying the $200.\n\nAlthough Mr cooper came across as very knowledgeable I felt he had no bed side manner and was very confusing. I would not recommend him."
      },
      {
        "id": "g12qgl2pvy-NnViT2lnRRAB",
        "author": "Stan Forbes",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/12qgl2pvy",
        "text": "I saw Dr Geoff. Cooper in 2014 when I was experiencing acute pain in both knee joints, MRI scans showed that both knee joints had identical cartilage wear.\nHe asked which knee I wanted replaced, I said that I wanted both done together, at first he refused but eventually relented.\nI have never looked back, at age eighty I still play badminton and take part in seniors exercise classes for an hour twice per week, importantly I have no knee joint pain.\nDr Cooper has a very off putting manner, he is a man of few words and they are not always the words we want to hear but he is an excellent surgeon and I would recommend him to anyone considering knee joint replacement."
      }
    ]
  },
  "benjamin-hewitt": {
    "listings": [
      {
        "key": "/g/11b88qxjpw",
        "name": "Dr Benjamin Hewitt",
        "address": "47 Stirling Hwy, Nedlands WA 6009",
        "rating": 4.7,
        "reviewCount": 30,
        "url": "https://maps.google.com/?cid=13286289280252595481",
        "primary": true,
        "placeId": "ChIJj_64SiWlMioRGU2J5LRhYrg",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJj_64SiWlMioRGU2J5LRhYrg"
      }
    ],
    "reviews": [
      {
        "id": "g11b88qxjpw-U3pCV1pYYxAB",
        "author": "Craig Wanatall",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11b88qxjpw",
        "text": "It’s a challenging and important. decision to select yr orthopedic surgeon. After much research I selected Doctor Hewitt, is approachable, friendly and knowledgeable. Having now completed two successful hip surgeries, I strongly recommend his services, happy to field any queries."
      },
      {
        "id": "g11b88qxjpw-TkVKV01sRRAB",
        "author": "Sally Lewis",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11b88qxjpw",
        "text": "From the initial consultation I received exceptional support and communication from the team and Dr Hewitt.\nHonest and transparent information was given regarding my hip replacement, and the procedure went smoothly along the follow up information and consultation during recovery.\nThank you for your expertise and skill in performing what seems like a pretty intense task.\nI am extremely grateful that I was able to be back on my feet and back at work doing what I love thanks to you and your team of professionals."
      },
      {
        "id": "g11b88qxjpw-WVhKRk5GRRAB",
        "author": "Chris",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "I had my acl surgery a few weeks back and Dr Hewitt did an amazing job he is really a great surgeon"
      },
      {
        "id": "g11b88qxjpw-Zb01qUVZ3EAE",
        "author": "John Bulfer",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "I have just completed my second knee reconstruction with Dr Hewitt. I am extremely pleased with the results and the professionalism of the office staff.\nBen has great communication skills that will make you comfortable with the procedure and the after care that you require.\n\nThanks again."
      },
      {
        "id": "g11b88qxjpw-DbG9fNll3EAE",
        "author": "Ann Smart",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "I had to have an unexpected knee replacement and didn't have a clue where or who to go to. I was recommended to Dr. Hewitt and he was amazing. Dr. Hewitt and the team in the office were so well organised and professional that I felt immediately relaxed. My knee surgery has been a huge success and I am not in any way conscience that I have a replacement. Thank you Dr. Hewitt and the team."
      },
      {
        "id": "g11b88qxjpw-cl82MV9RRRAB",
        "author": "Alex Marazul",
        "rating": 1,
        "date": "2024-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "This review is based on my experience with Dr Benjamin Hewitt.\nComments to follow at the right time."
      },
      {
        "id": "g11b88qxjpw-bnUzbXlnRRAB",
        "author": "Nick Carter",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Came highly recommended by my GP. I've had 2 knee arthroscopies through Dr. Hewitt and was very happy with the results both times. He does a great job of explaining the issue(s) and the required procedure."
      },
      {
        "id": "g11b88qxjpw-iMDhqTVdnEAE",
        "author": "Our_salty_life",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Whilst travelling Australia and enjoying our first few months of retirement I was unfortunate enough to injure my knee between Adelaide and Perth. An MRI confirmed I needed surgery and Ben was recommended to me by another travelling family. I’ve had a lot of referrals to surgeons in the past and none have been like my experience with Ben. He was able to see me within two weeks and operated next day. His willingness to offer solutions to make it easier for me showed his understanding of and empathy for my situation of travelling full time. He is able to explain the surgery in layman’s terms, he talks with you, not at you. I’d like to thank him and his team for their care. Several months later I’m on the road to full recovery and have even been able to have a couple of sneaky surfs which I thought would be not been achievable at this point. Thanks again Benjamin. Darren Perryman"
      },
      {
        "id": "g11b88qxjpw-dUppZGx3RRAB",
        "author": "John Spears",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Absolutely fantastic Surgeon! Really happy I chose Dr Hewitt, great person and bed side manner, easy to talk to and great location for visiting his rooms. My knee after the operation is pain free and I feel fantastic! Thanks team Hewitt."
      },
      {
        "id": "g11b88qxjpw-MWJYZGtBRRAB",
        "author": "todd flanagan",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Thoroughly recommend. After some months of back and forth between different medical personnel, I aporoached Ben. He indicated exactly what I had, informed me of what I needed to do. Within 3-6 months, shoulder completly sorted."
      },
      {
        "id": "g11b88qxjpw-MjQ2dC1BRRAB",
        "author": "Danny Green",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Good surgery is more about decisions than incisions.\nBen has an excellent bedside manner and is thorough and considered. Highly recommend."
      },
      {
        "id": "g11b88qxjpw-M0k2Z2tRRRAB",
        "author": "Jeff Feltham",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Did an excellent full ACL reco a ski post accident, was able to fix up cartilage damage during the same operation. Followed up to make sure it got rehabbed properly and didn’t hesitate to get in touch with good medical advice when I asked on how to return to sport safely. Top surgeon and top post op care."
      },
      {
        "id": "g11b88qxjpw-a2NEVzh3RRAB",
        "author": "James Mclennan",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Doctor Ben Hewitt recently conducted surgery on my right shoulder. The incision points were barely noticeable a few weeks later. Ben removed some spurs and bursitis as well as checked for other damage. Ben was very precise as already stated and two weeks later my shoulder is less painful than a previous knee surgery. Ben explained the surgery in detail in the post surgery appointment which was very informative and reassuring as I was a little confused/ anxious after surgery about what had been conducted and why after reading the post surgery report right after waking up I’m not sure why I’d asked to read the report lol. Ben is detailed, precise and efficient. The shoulder has caused me issues for a long period of time so I’m optimistic some of that will be relieved.\nThank you Doctor Hewitt your service is appreciated."
      },
      {
        "id": "g11b88qxjpw-SekxHM1NnEAE",
        "author": "Allan Gell",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Saw Dr Hewitt 15 years after my initial surgery for a similar injury. He provides excellent orthopaedic care from understanding your injury to providing the best possible recommendations whether it be surgery, injections, or physical rehabilitation.\nGiven my location the admin team and Shelley the receptionist provided excellent communication with a variety of booking options and times to suit my flights in and back from Perth. Thanks again! I feel I wish I could attend more ....but I also don't want to be injured!!"
      },
      {
        "id": "g11b88qxjpw-bUo3OTdBRRAB",
        "author": "Ashleigh Mouttet",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Dr Hewitt is terrific in both his personal skills and his professionalism. The receptionist Cherie is always kind and helpful. I have very impressively small scarring from my knee surgery.\n\nI have appreciated that he always respects my life balance and trying to get me back to activities I love.\n\nThanks again. I am very appreciative to have my knee back to being pain free! I’d highly recommend Dr Hewitt and his team to anyone that has orthopaedic issues within his specialities."
      },
      {
        "id": "g11b88qxjpw-N183bTZ3RRAB",
        "author": "Conor Prout",
        "rating": 1,
        "date": "2022-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "The receptionist was rude and disrespectful over the phone. Went somewhere else."
      },
      {
        "id": "g11b88qxjpw-Ta3QyWEJ3EAE",
        "author": "Terry Stanley-Smith",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Ben is a excellent surgeon would highly recommend.\nAppreciate your time & work. (knee Arthroscopy)\n\nTerry Stanley-Smith"
      },
      {
        "id": "g11b88qxjpw-DbHBlSk1BEAE",
        "author": "Nick Di Carlo",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "I've had the unfortunate luck of requiring three ACL injuries and after seeing Dr. Hewitt for my first surgery there wasn't anyone else I considered seeing for my revisions. Dr. Hewitt is professional and makes you feel relaxed and calm during discussions around surgery options and follow up post-operatively. Would recommend to anyone who wants the best overall care for knee or shoulder surgery."
      },
      {
        "id": "g11b88qxjpw-vb04zZFh3EAE",
        "author": "Carl Meyers",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "one of my daughters and myself have required surgery and Ben was professional and informative all the way"
      },
      {
        "id": "g11b88qxjpw-OGNlM2tRRRAB",
        "author": "donna markovic",
        "rating": 4,
        "date": "2019-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "In January I had a knee Arthroscopy to smooth a meniscal tear performed by Dr Benjamin Hewitt. It took time to heal but I am very pleased with the results so far. I would highly recommend Dr Hewitt"
      },
      {
        "id": "g11b88qxjpw-JNTRPd2NREAE",
        "author": "Stender Dental Studio",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Im writing this day 0 after an arthroscopy. I highly recommend Dr Hewitt. I think he could be in the future THE surgeon everyone will say must go to.... he is honest, willing to spend time to explain things, cares, attention to detail doing things to the book which is particularly important, great apple macs in the rooms and everyone obviously ends up wind surfing, paddling or cycling afterwards when you look at the photos....at least one goes to surgery feeling there will be hope to be that little closer to this. I would recommend Dr Hewitt if one wants quality care, working with quality anaethetists and a lovely support team, and focussed on the right and best care for his patients as his priority."
      },
      {
        "id": "g11b88qxjpw-cXFmNTJBRRAB",
        "author": "Terri Hawkins",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "I have been under Dr Hewitt for a meniscus tear and then a stress fracture for a few months now. Today I was cleared. From the time I walked in the ladies at reception were all so lovely and Dr Hewitt was the best surgeon during and after so thankyou everyone."
      },
      {
        "id": "g11b88qxjpw-JOGN5ZlZBEAE",
        "author": "Melanie Eggleston",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "I recently underwent a shoulder operation with Ben Hewitt. He has been absolutely fabulous from start to finish. He listened carefully to what I had to say, and immediately initiated a clear and straightforward plan. Two days after my MRI he had me booked in for surgery, his receptionists and the entire team at Bethesda hospital were compassionate and efficient. You could not ask for better care or service. If my children ever need an orthopaedic surgeon, Ben and his team would be my first choice."
      },
      {
        "id": "g11b88qxjpw-NDgzcDV3RRAB",
        "author": "Matthew Greenland",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "I have had a knee ACL recon with Dr Hewitt and just recently a Laterjet shoulder recon and both experiences had been a pleasure. Both procedures were absolutely seamless with no complications or mishaps of any-kind and with perfect recovery. Dr Hewitt is great with people (unlike other medical professionals who lack people skills), he can easily describe is procedures in laments terms and communicate on a personal level which provides much needed comfort. The hospital he operates out of (Bethesda Hospital) is beautiful and very comfortable, so are the staff. On top of the whole lot most of the costs were cover by my private health leaving me about $200 - $300 out of pocket. Not one single bad experience or improvement recommendation to give."
      },
      {
        "id": "g11b88qxjpw-dFlPYjNRRRAB",
        "author": "Jaime Bowler",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "I have seen Dr Benjamin Hewitt many times for various injuries. He has always been professional and caring, providing the best quality treatment and aftercare. I cannot recommend him highly enough."
      },
      {
        "id": "g11b88qxjpw-NS0tMW5nRRAB",
        "author": "Stephen Kernutt",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Dr Hewitt is an exceptional surgeon who provides honest feedback on your injury and what is required to rectify the issue. His post operative care is also excellent. I would refer any person I know to him."
      },
      {
        "id": "g11b88qxjpw-M3NhNGh3RRAB",
        "author": "Jez Doney",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11b88qxjpw",
        "text": "Dr Hewitt treated me for a shoulder injury I sustained snowboarding in New Zealand. Ben and his team were accessible whilst I was overseas and the advice he provided was 'to the point' and reassuring. The surgery went well and the post operative care has been superb. Ben is very outgoing person and I would highly recommend him to anyone looking for an orthopedic surgeon."
      }
    ]
  },
  "edward-baddour": {
    "listings": [
      {
        "key": "/g/11f62_cl8w",
        "name": "Dr Edward Baddour",
        "address": "144 Churchill Ave, Subiaco WA 6008",
        "rating": 4.9,
        "reviewCount": 25,
        "url": "https://maps.google.com/?cid=9185550113134437922",
        "primary": true,
        "placeId": "ChIJ1XnjrzmlMioRImbtJymheX8",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJ1XnjrzmlMioRImbtJymheX8"
      }
    ],
    "reviews": [
      {
        "id": "g11f62_cl8w-Tm1nMlZWRRAB",
        "author": "Jimbo Slice",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11f62_cl8w",
        "text": "Absolutely changed my life. I couldn’t be happier with everyone involved. Start to finish I had all of the information and reassurance needed. Would recommend to anyone."
      },
      {
        "id": "g11f62_cl8w-YzFGV1RIYxAB",
        "author": "Murray Kester",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11f62_cl8w",
        "text": "I have nothing but praise for Doctor Baddour since he performed a spinal fusion on me a week ago today. His calm demeanor instills confidence and is well deserved. I have progressed recovery much faster than I thought I would and so far all is well. I asked him if the reason for the requirement to not drive for 6 weeks post surgery was to ensure I had recovered sufficiently to survive an accident, or did it have to do with making sure I was fit to drive. He gave the wrong answer. He told me it was to give myself enough time to fully recover."
      },
      {
        "id": "g11f62_cl8w-TWtsUlZVRRAB",
        "author": "mathew gurney",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11f62_cl8w",
        "text": "I have no words to express the gratitude i owe to this Doctor. I spent 4 years in excruciating pain with bitter and depressed personality trying to get through life and one surgery later i am completely pain free and can see a future i look forward to once again.\n\nThankyou Dr Baddour, you gave my life back to me."
      },
      {
        "id": "g11f62_cl8w-WW10a2IzYxAB",
        "author": "Neil Mullally",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/11f62_cl8w",
        "text": "Great surgeon who reassures you as a parent and patient all the way through the journey. Couldn’t be happier with the outcome. Highly recommend.."
      },
      {
        "id": "g11f62_cl8w-WTFCTVRVRRAB",
        "author": "Celia Joyce",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/11f62_cl8w",
        "text": "I have undergone three spinal surgeries with Dr. Edward Baddour over the past few years, and the results have been excellent. He is highly professional, attentive, and always willing to explain any questions I had in detail. His expertise and patient-centered approach gave me confidence throughout the process. I highly recommend Dr. Baddour to anyone seeking exceptional spinal care. Thank you.\nCelia"
      },
      {
        "id": "g11f62_cl8w-VFdzMlpVRRAB",
        "author": "Merryn Cullen",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11f62_cl8w",
        "text": "Wonderful surgeon, professional, great sense of humour . Thank you Dr Baddour for a pain free recovery. Merryn"
      },
      {
        "id": "g11f62_cl8w-cXVYTF9RRRAB",
        "author": "Harriet Ogburn",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "Thankfully, Dr Baddour has referred me to a physio who can me with back pain. I am grateful for this."
      },
      {
        "id": "g11f62_cl8w-vbzkzSGFBEAE",
        "author": "B F",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "Dr Baddour been looking after my son for about 10 years now for his scoliosis and did surgery on him. Dr Baddour is an angel sent from above. Very grateful for what he did🙏🏻."
      },
      {
        "id": "g11f62_cl8w-eE95cGl3RRAB",
        "author": "Katie Taylor",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "After 11 weeks of severe nerve pain from a prolapsed disc, I was lucky enough to be referred to Dr Edward Baddour for a lumbar microdiscectomy. I can't say how grateful I am to Dr Baddour for how quickly he organised surgery for me, only a week after consultation. The surgery resulted in instant relief. Dr Baddour how can I ever thank you enough for your professionalism, care and getting my life back on track and pain free. Thank you so much !"
      },
      {
        "id": "g11f62_cl8w-5Nlp2ZFRBEAE",
        "author": "Yelena Hoppe",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "Brilliant surgeon and beautiful person"
      },
      {
        "id": "g11f62_cl8w-3NEtiYllREAE",
        "author": "Greg Jones",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "The entire experience was beyond reproach I could not recommend Dr Baddour highly enough"
      },
      {
        "id": "g11f62_cl8w-5LUlMWEtnEAE",
        "author": "Barbara",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "Dr Baddour is by far one of kindest and caring surgeons around, it is a pleasure knowing him"
      },
      {
        "id": "g11f62_cl8w-cjRDbjJ3RRAB",
        "author": "Kylie Bampton",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "This man is sent by God I swear it. He's given me back 20years and I'm only 40. I appreciate his beautiful demeaner and absolute skill! Su in reception is a Gem. Thanks so much guys you've literally saved my life!"
      },
      {
        "id": "g11f62_cl8w-aktmMzdBRRAB",
        "author": "Jo Healy",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "After 16 months of suffering I decided to have the fusion I needed. I woke from surgery without that pain & 6 wks on feeling a million dollars in comparison to pre surgery. Very happy patient here. 😊"
      },
      {
        "id": "g11f62_cl8w-OaXRtLWRBEAE",
        "author": "Chipo Mahachi",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "Dr Baddour is an excellent surgeon. He did my daughter’s scoliosis surgery.\nHe is knowledgeable, listens to your concerns and does his best to explain the surgery to lessen your worries."
      },
      {
        "id": "g11f62_cl8w-OeGY2VVRREAE",
        "author": "Greg Scott",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "In late December 2023 I had a bulging disc. the pain became unbearable so my Doctor refer me to a surgeon who could not see me until late January. My wife noticed I was getting worse by the day and eventually I couldn't stand, walk or even lay down as I was in so much pain. My wife found out about Dr Baddour from a friend so she rang the extremely helpful ladies at the clinic and explained the situation I was in. Dr Baddour called me on the 18th of December after seeing my MRI and agreed to operate and perform a Microdiscectomy few days later as the last procedure for the year on the 22nd of December. Seriously what a legend! my procedure done and instant relief, no pain and now back to work and back on track. Cant recommend Dr Baddour enough he really cares about his patients well being. Dr Baddour is best in class."
      },
      {
        "id": "g11f62_cl8w-CODhuX2V3EAE",
        "author": "June Seow",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "Recently I had a cervical spinal surgery which was performed by Mr. Ed Baddour at SJOG Subiaco. I am of the opinion he is an excellent spinal surgeon. He is also kind and very supportive and has a gentle professional manner. I had a prophylactic procedure and on reflection and with his advice I am so grateful I made the decision to have the operation. Much appreciated."
      },
      {
        "id": "g11f62_cl8w-2bFpLZ0xREAE",
        "author": "Pete",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "My wife was extremely nervous about the possibility of undergoing surgery. Dr Baddour was able to calm all of her fears with a level of professionalism that put both our minds at rest. Four months have now passed since my wife's surgery, and we are still being supported in her recovery. We simply could not recommend Dr Baddour and his team highly enough. Thank you!"
      },
      {
        "id": "g11f62_cl8w-4NG9iM2VREAE",
        "author": "Ryan Evans",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "This Dr has a very calm, wonderful bedside manner. He operated on my spine, it was a complete success and his incision was so neat and small, beautiful work . Fantastic"
      },
      {
        "id": "g11f62_cl8w-zNE9uMVZREAE",
        "author": "Mark Cornish",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "What an excellent service Dr “Ed” provides. He is at the top of his field, incredibly personable and most importantly efficient and such a skilled surgeon. I’m thoroughly impressed and was lucky enough to be operated on the day after my consult which itself was brought forward a week due to a cancellation. I would highly recommend to all family and friends in the event they suffer from acute or chronic back pain that cannot be solved by other methods. Su at reception is lovely and takes a genuine interest in each patient and their situation (MRI details) and empathetic toward their pain. Keep up your hard work Ed and Su - you are a great team."
      },
      {
        "id": "g11f62_cl8w-NWFtZDdRRRAB",
        "author": "Dylan Hislop",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "Ed Baddour is the best doctor and surgeon I have met to date! He takes care in his patients and listens to their concerns his surgical skills are fantastic with the incisions being so neat and tidy that any scarring is negligible. He has a great feel about him as a person and on top of it all he handles ICWA cases which is an extreme struggle to find surgeons who do this. This man is legendary and I highly HIGHLY recommend him."
      },
      {
        "id": "g11f62_cl8w-BcTdPYmRnEAE",
        "author": "Lyn Williams",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11f62_cl8w",
        "text": "Dr Baddour stopped and listened to me as well as looking at the diagnostic tools. It was encouraging to me that a Dr takes what you say into consideration. I was operated on and I have my life back again. I am a nurse and I can tell you he is very particular with his operation procedure and post op care. I would so recommend Dr Edward Baddour if you require back surgery."
      }
    ]
  },
  "mark-hurworth": {
    "listings": [
      {
        "key": "/g/11c43hybtn",
        "name": "Mr Mark Hurworth | Orthopaedic Surgeon Perth",
        "address": "Ste 10/100 Murdoch Dr, Murdoch WA 6150",
        "rating": 4.6,
        "reviewCount": 25,
        "url": "https://maps.google.com/?cid=16840673623806588823",
        "primary": true,
        "placeId": "ChIJle95kraiMioRlzdIZW8Xtuk",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJle95kraiMioRlzdIZW8Xtuk"
      }
    ],
    "reviews": [
      {
        "id": "g11c43hybtn-WjFocWRWRRAB",
        "author": "Jenny Liedermoy",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11c43hybtn",
        "text": "I would like to express my sincere gratitude to Mr Hurworth for the exceptional care and support provided throughout my treatment journey. From the professionalism of the office staff to the dedication of the nursing and physiotherapy teams, every aspect of my care was delivered to the highest standard.\n\nHe ensured that I was well informed and actively involved in all decisions regarding my surgery and recovery, providing clear information, guidance, and valuable resources at every stage. His expertise, compassion, and commitment gave me confidence and reassurance throughout the process.\n\nI highly recommend his services and extend my heartfelt thanks for the outstanding care and professionalism I received."
      },
      {
        "id": "g11c43hybtn-VlRZeWQxRRAB",
        "author": "John Rogers",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11c43hybtn",
        "text": "Top Surgeon. Great staff."
      },
      {
        "id": "g11c43hybtn-YlZkNWIzYxAB",
        "author": "Craig Morley",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11c43hybtn",
        "text": "Very nice doctor doesn’t sugar coat it tells you how it is"
      },
      {
        "id": "g11c43hybtn-YkdvNGJGRRAB",
        "author": "Louis Doyle",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/11c43hybtn",
        "text": "I had two hip replacements by Mr Hurworth and can say with absolute confidence what a wonderful surgeon he is. He explained everything to me and his follow up was excellent not only after the surgery but when I went back for my 5 year check up. He even had the 'Thank You' Comic framed picture I gave him after my operation on his shelf. If you want the best person for the job in hand. then he is your Surgeon to do it. Thank you Mr Hurworth."
      },
      {
        "id": "g11c43hybtn-VG1scGNWRRAB",
        "author": "Cindy Henderson",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11c43hybtn",
        "text": "Great job fixing grade 3 hamstring rupture. Caring, kind and informative. His staff are also incredible."
      },
      {
        "id": "g11c43hybtn-VG5RNWNYYxAB",
        "author": "Andrew",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11c43hybtn",
        "text": "Mr Hurworth is an amazing surgeon. He is very patient and caring. He replaced both of my hips for me and gave me my life back. I cant express my gratitude enough. Thankyou."
      },
      {
        "id": "g11c43hybtn-WlU1elpXYxAB",
        "author": "Barry McNamara",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11c43hybtn",
        "text": "Mark is \"Simply The Best\" - plus lovely guy to deal with."
      },
      {
        "id": "g11c43hybtn-ZUZGaGQyYxAB",
        "author": "Rick Gowland",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11c43hybtn",
        "text": "Mark did a shoulder replacement on my wife.\nHe did a fantastic job..\nShe recovered ahead of time..\nWe are very pleased with the outcome...so thank you again Mark from both of us...\nWe give you 10 ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️"
      },
      {
        "id": "g11c43hybtn-YdGZuVEZnEAE",
        "author": "Fay D",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11c43hybtn",
        "text": "I highly recommend Dr Mark Hurworth. Very professional, great surgeon, and very pleasant to deal with. Additionally, his reception staff are very friendly and helpful. The whole process from initial consultations, to shoulder surgery, to follow-up appmt, was very smooth and hassle free."
      },
      {
        "id": "g11c43hybtn-YlhKT2JsRRAB",
        "author": "Jenny Pond",
        "rating": 4,
        "date": "2025-10-10",
        "listing": "/g/11c43hybtn",
        "text": "I have had problems with my shoulder, Mr Hurworth has been very caring. Professional & pleasant. Highly recommend him."
      },
      {
        "id": "g11c43hybtn-ZDFBeGJVRRAB",
        "author": "Wayne S",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11c43hybtn",
        "text": "Excellent experience yet again with Dr Hurworth and his team. 3 surgeries over 12 months,.very easy processes with excellent communication. I would highly recommend Dr Hurworth."
      },
      {
        "id": "g11c43hybtn-3c3M2WFl3EAE",
        "author": "wayne reeves",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11c43hybtn",
        "text": "Great surgeon..new hip was easy as with this skilful doctor. Highly recommend."
      },
      {
        "id": "g11c43hybtn-SNkxLOE9BEAE",
        "author": "Ian Wilkins",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11c43hybtn",
        "text": "Highly recommend him, very thorough. He had to repair what a so called associate professor knee surgeon did to my already bad sports knee during a routine meniscus clean-up which ruined it and gave it an 11° outward angle on my lower leg. He consulted with the other surgeons there regarding my case as I still wanted to continue martial arts training. Now 95% painless and leg is dead straight after the Osteotomy and clean-up which was 6 years ago. Still training, but not running, and won't need a full replacement for many years yet. He also cleaned up my other knee perfectly."
      },
      {
        "id": "g11c43hybtn-dG8zOHRnRRAB",
        "author": "Steve Noa",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11c43hybtn",
        "text": "Cannot recommend Dr Hurworth enough. Skipped out of hospital twice for knee cleanouts with very quick recovery times."
      },
      {
        "id": "g11c43hybtn-pdU9uY0lnEAE",
        "author": "Anna Holmes",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11c43hybtn",
        "text": "Dr Hurworth is a gifted surgeon who cares about his patients before, during and after surgery. All I can say is thank you."
      },
      {
        "id": "g11c43hybtn-aTR5MTV3RRAB",
        "author": "Andrew PCS",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11c43hybtn",
        "text": "A friendly professional for a change."
      },
      {
        "id": "g11c43hybtn-eXZicXlnRRAB",
        "author": "Neil Bowman",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11c43hybtn",
        "text": "Cannot rate this guy high enough, I've had over 30 surgeries that required general anesthesia so I know what I'm talking about as a patient. This man said how he would fix me, did what said he'd do and always had time to explain what would happen. Seriously nice guy working wonders."
      },
      {
        "id": "g11c43hybtn-cFlhLWpBRRAB",
        "author": "Jeff Tapper",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11c43hybtn",
        "text": "Awesome surgeon, nice guy. 21 days after total hip replacement took my first steps unaided. 90 odd days after surgery I am having the other one done. ⭐️⭐️⭐️⭐️⭐️"
      },
      {
        "id": "g11c43hybtn-b0lTYTRnRRAB",
        "author": "Adam Kerslake",
        "rating": 1,
        "date": "2018-10-10",
        "listing": "/g/11c43hybtn",
        "text": "I am disgusted by Mark’s lack of people skills, lack of concern, care and interest in my situation post surgery. He avoids talking about procedures, complications and expectations. If my initial surgery wasn’t so urgent I definitely would have shopped around for a better person to deal with. Carpenters have more appreciation for a piece of wood than Mark does for his patients."
      },
      {
        "id": "g11c43hybtn-BbkszVlBnEAE",
        "author": "Barbara Simon",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11c43hybtn",
        "text": "Here is a copy of a post I sent to a friend who is having surgery at the same hospital as myself, Armadale. The post speaks for itself. Mr Hurworth did my 1st shoulder at Geraldton Hospital with 100% success. Just had my other one done & already improvement with more movement than before.\n\nG'DAY, op getting close now. Thinking of you. I'm sure all will go well. I have more movement back in my shoulder now than I've had for ages. Can scratch the top of my head again lol lol. Pain still off & on. 6 weeks in sling? It will be 6wks on Thurs, been totally out of it now for 2weeks. Must add, I live in remote area. Have had no physio. Have done as with other shoulder, used common sense (don't laugh, have some) & gradually & persistently inceased on from original exercises. Doc is going to be surprised when I see him today for only 2nd time since op. This is the result you can get when you have a good surgeon. Well done & thank you to Mr (Dr) MARK HURWORTH. A well deserved 5 ☆☆☆☆☆ from me. Let me know how you go - - -, all the best from Barb."
      },
      {
        "id": "g11c43hybtn-RdWNLRUlREAE",
        "author": "Sarah L",
        "rating": 1,
        "date": "2017-10-10",
        "listing": "/g/11c43hybtn",
        "text": "Does not seem to care about his patients and doesn't explain the operation / time after operation before commencing. Also mumbles a lot."
      },
      {
        "id": "g11c43hybtn-nNVBHX1VnEAE",
        "author": "Matthew Donkin",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11c43hybtn",
        "text": "Thank so much Mr Hurworth for my operation yesterday on both my knees. You are a very gifted surgeon sir, I have a 1 out of 10 pain level have not had to take any pain killers and don't need the crutches. What a great result, Thank you again.\nMatthew Donkin"
      }
    ]
  },
  "gerald-lim": {
    "listings": [
      {
        "key": "/g/1pwftkf81",
        "name": "Dr Gerald Lim",
        "address": "100 Murdoch Dr, Murdoch WA 6150",
        "rating": 4.8,
        "reviewCount": 24,
        "url": "https://maps.google.com/?cid=3051316589085810420",
        "primary": true,
        "placeId": "ChIJTQ4KjbaiMioR9F63bUV0WCo",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJTQ4KjbaiMioR9F63bUV0WCo"
      }
    ],
    "reviews": [
      {
        "id": "g1pwftkf81-VDNWS1JHYxAB",
        "author": "Roxana Noble",
        "rating": 4,
        "date": "2026-09-26",
        "listing": "/g/1pwftkf81",
        "text": "There was lot of construction so was not easy to follow."
      },
      {
        "id": "g1pwftkf81-WlVaRmFrRRAB",
        "author": "Dominic de Souza",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Very conscientious and patient focussed surgeon."
      },
      {
        "id": "g1pwftkf81-2dFozMkJBEAE",
        "author": "Doug Gray",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Gerald did both my knees the same morning after he considered I was fit enough for him to do them late Nov about 4 yrs ago, now at 85, my knees are given some pretty hard work still and respond beautifully to stair climbing, bike riding, swimming walking & thru water as well, I certainly cannot complain, well done Gerald & nurses, cheers all, & have a great festive season. Doug Gray"
      },
      {
        "id": "g1pwftkf81-M29tUzF3RRAB",
        "author": "Stephen Guilfoyle",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Can only say to anyone thinking of useing gerald is dont. He dosnt do robotic any more and ime in month 4 and still in pain all day and nite. I just met a guy whos in weel 2 and he said theres no pain. I saw him get into his car and was able to lift his leg into his car with assistance from his arms. I still cant. Forget lim and look elsware. He has offered no solutions either. 🤨"
      },
      {
        "id": "g1pwftkf81-UmpaVVRrRRAB",
        "author": "Anna Martin",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Had knee replacement with Dr Lim last year. He is very caring and very professional. Would highly recommend him"
      },
      {
        "id": "g1pwftkf81-QeUxUdE1nEAE",
        "author": "Chris Hartnett",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pwftkf81",
        "text": "At the 10 week mark, I am walking relatively pain free. Everyone who sees my scar and sees my progress have commented on how well I am doing. I would recommend Dr Lim to anybody considering this surgery. I also know a lot of people who have had their knees repaired by Dr Lim and they all speak so highly of him."
      },
      {
        "id": "g1pwftkf81-neXBlT0tBEAE",
        "author": "Yolette Inskip",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pwftkf81",
        "text": "I underwent arthroscopic meniscectomy in 2020 with another surgeon, shortly after tearing my meniscus. However, even though I religiously followed exercises given to me by a variety of professionals, after 2 years I realised that another op was required as not enough was done in the original.\n\nDr Gerald Lim was the third post-operation surgeon I approached. The other 2 suggested surgery as a last alternative, as they would need to remove all of my meniscius, resulting in a knee replacement later in life.\n\nGerald Lim was differrent. He listened more than he spoke. He was the only surgeon prepared to stitch what he could and trim what he couldn't. His humble, professional and caring approach was also evident in both my follow-up appointments.\n\nThanks to Doctor Lim, I have my life back! Recently I completed 13 hours of hiking in Nepal, over 2 days, on the Poon Hill trek. Additionally, I was able to obtain my long desired goal of changing professions and becoming an operator on the mines. Without Dr Lim's skill, these and more would not have been possible. Thank you!"
      },
      {
        "id": "g1pwftkf81-OWY3Z3NnRRAB",
        "author": "Heather Clark",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Very caring Doctor.\nHe won't do surgery unnecessarily.\nWould highly recommend"
      },
      {
        "id": "g1pwftkf81-McXZPOU9BEAE",
        "author": "Teresa Boyes",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1pwftkf81",
        "text": "I had a complete hip replacement, Gerald Lim and his team were wonderful, everything explained fully. It’s amazing no pain. Murdoch hospital the staff were wonderful and very caring. Highly recommend Gerald Lim and Murdoch hospital."
      },
      {
        "id": "g1pwftkf81-0cUpfZlZ3EAE",
        "author": "Jaya Parmar",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1pwftkf81",
        "text": "I've recently had both my knee surgeries with Dr Lim. He is very knowledgeable, confident and professional. I now have 2 new knees to keep up with my granddaughter!"
      },
      {
        "id": "g1pwftkf81-aDdqZHN3RRAB",
        "author": "allan Blair",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Dr Lim gave me a full replacement on my left knee which was ongoing pain and difficult to walk for years and years Docter Lim explained everything about my procedure and took extra care and performing this operation. I am very grateful for his service passionate caring person The Doctor is . thank you for Making my life a lot easier walking good now . Making my life a lot easier walking good now very little pain giving me a better life. Kind regards Allan Blair"
      },
      {
        "id": "g1pwftkf81-eXJPNWl3RRAB",
        "author": "Pieta O'Shaughnessy",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Mr Lim is kind and caring and the very top of his profession in my opinion. I sailed through my knee transplant thanks to Mr Lim."
      },
      {
        "id": "g1pwftkf81-eC11UTRRRRAB",
        "author": "Valerie Barton",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Cannot speak highly enough of Dr Lim. He has done both my hips. I cannot thank him enough for giving me back my mobility."
      },
      {
        "id": "g1pwftkf81-eU9hdzNRRRAB",
        "author": "Brian Evans",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Thanks Dr Lim you are the perfect dr\nBedside manner caring and understanding\nI can’t believe right hip total replacement afternoon 25 March and recovered and allowed to go home morning 27 March So excited and I hope you are pleased with your fantastic perfect operation procedure\nGreat results thanks\nRegards Brian Evans 🙏🙏👍"
      },
      {
        "id": "g1pwftkf81-LamQ2NkhBEAE",
        "author": "Kathy Reynolds",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Dr Lim operated on both my knees\nTotal knee construction\nHe is the most gentle caring person and I would not fail in recommending him to anyone who needs knee surgery."
      },
      {
        "id": "g1pwftkf81-DMVp5U2JREAE",
        "author": "wendy Connelly",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Gerald is very good and very caring."
      },
      {
        "id": "g1pwftkf81-4MXZhd1JnEAE",
        "author": "Glenn Gomes",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Amazing surgeon, extremely pleased with his kind and caring manner. Highly recommended."
      },
      {
        "id": "g1pwftkf81-4aXNMTGN3EAE",
        "author": "Peter",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1pwftkf81",
        "text": "I can not speak more highly about Dr Lim's professionalism compassion and the confidence he gave me in my procedure. He has given me two new knees and a new lease on life. He is brilliant."
      },
      {
        "id": "g1pwftkf81-ZeE5fbE13EAE",
        "author": "Tacky Gummer",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1pwftkf81",
        "text": "What Kavisanth said is all true!"
      },
      {
        "id": "g1pwftkf81-vc2QycEh3EAE",
        "author": "Mary Ellen Purnell",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Can't wait to get my second knee done. Excellent result with the first"
      },
      {
        "id": "g1pwftkf81-MklycjRnRRAB",
        "author": "Benjamin Kane",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1pwftkf81",
        "text": "Extremely good bedside manners and had a speedy recovery after ACL reconstruction/ damaged meniscus. Much quicker recovery than originally anticipated."
      }
    ]
  },
  "jens-ulrich-buelow": {
    "listings": [
      {
        "key": "/g/1q5ggzh6p",
        "name": "Buelow Jens-Ulrich DR",
        "address": "1 Havelock St, West Perth WA 6005",
        "rating": 4.7,
        "reviewCount": 24,
        "url": "https://maps.google.com/?cid=10431583534411295631",
        "primary": true,
        "placeId": "ChIJg_64SiWlMioRjytmpfRtxJA",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJg_64SiWlMioRjytmpfRtxJA"
      }
    ],
    "reviews": [
      {
        "id": "g1q5ggzh6p-eTZ6UzZnRRAB",
        "author": "Hayley Green",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Consultation to surgery in 3 days!\nRemoval of calcific tendinitis and bursitis in shoulder joint. Pain free by day 4. Amazing surgeon. Thoroughly recommended!"
      },
      {
        "id": "g1q5ggzh6p-3enN2WlF3EAE",
        "author": "Melissa Brown",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "I was referred to Dr. Jens Buelow in 2021 for left TTT surgery, and just recently had my right knee done in January of this year. I’m incredibly grateful for Dr. Buelow’s expertise and his conservative approach to treatment. Thanks to his skill and care, I now have a new lease on life—pain-free, with restored mobility, and able to enjoy daily activities without discomfort.\n\nThe entire team was wonderful! A kind, professional, and supportive team throughout both journeys. I felt truly taken care of from start to finish, and the results speak for themselves.\n\nDr. Buelow has made a significant impact on my life, and I highly recommend him to anyone in need of knee surgery. Thank you, Dr. Buelow"
      },
      {
        "id": "g1q5ggzh6p-M2RueG93RRAB",
        "author": "Luca crypto",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Great surgeon, highly recommend. Pre and post op has been fantastic."
      },
      {
        "id": "g1q5ggzh6p-qNnEyY2NREAE",
        "author": "Jenni Venders",
        "rating": 1,
        "date": "2024-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "What an AWFUL EXPERIENCE from Mr Buelow who has no carefactor whatsoever. The alarm bells should have gone off at my first consultation. Jens seemed irritated when I asked any questions about what to expect before and after surgery. He said even though I had bone on bone in my knee I was too young to operate on so \"we just clean it out\". After the op there was no follow up from him or to tell me how the operation went. I phoned to say I had lost sensation in parts of my knee and there was an indentation in my leg..his answer was \"this sometimes happens\"\nJens could not care less. 8 months later I am still in agony and secured an appointment (througha recommendation) with another surgeon who is fantastic. He showed me detailed footage of my recent mris, showing me things I never knew I had. Taking time, care and having a wonderful sense of humour.\nI have booked to have my knee replacement with Jules.\nPlease do your research don't touch Dr Beaulow with a bargepole because that's the attention and service he will give you."
      },
      {
        "id": "g1q5ggzh6p-WNG9XQ0d3EAE",
        "author": "Nick Clayton",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Came with glowing recommendations and the whole process of a full knee replacement from first meet to operation, only took a week.\nConsummate professional who is a great communicator and has a very calming manner to calm any nerves.\n\nAn added bonus he teams up with an anaesthetic of similar talent in his field\n\nAs I’ve had this procedure 7 years ago I have a benchmark to compare with. Last time I was literally black n blue on my whole lower torso . Not a single mark this time\n\nHighly recommended"
      },
      {
        "id": "g1q5ggzh6p-cDVxRzhRRRAB",
        "author": "F KASIR",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "My operation made things worst for me which was worsened further by the surgeon's cryogenic lack of compassion and empathy!"
      },
      {
        "id": "g1q5ggzh6p-wb09Xa01REAE",
        "author": "Jeff Wall",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Dr Buelow operated on my knee doing an arthroscopy. Best decision I ever made, back to full training and strength 2 years later with no worries.\n\nHighly recommend him."
      },
      {
        "id": "g1q5ggzh6p-HMjQtWGFBEAE",
        "author": "Michael English",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Had a right ACL rupture with a tear in my meniscus, MCL, LCL. Previous surgeons when speaking to filled me with fear about the whole process and recovery. Jens was amazing, explained everything with confidence and actually put me at ease about the process. The scaring left after the surgery is minimal and far less than most others I've seen and the ACL itself is healing perfectly. Even the after care service has been amazing. Would highly recommend"
      },
      {
        "id": "g1q5ggzh6p-heHFtVWFREAE",
        "author": "susan sait",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Very approachable and friendly. Very happy with my knee surgery... see you when I need new ones Dr Buelow 😁"
      },
      {
        "id": "g1q5ggzh6p-cUluOG5RRRAB",
        "author": "Paul Hitchins",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Jens is a very professional, helpful and experienced surgeon. i'm very happy with his surgery on my right knee and have nothing but good things to say about him. Highly recommended health professional.\nThank you and your staff for the excellent way you have helped me back to good health. Danke."
      },
      {
        "id": "g1q5ggzh6p-xaDY3aVJnEAE",
        "author": "tyson cable",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Dr Buelow is a bloody legend. Clearly he's at the top of this game. I've had both knees operated on using key hole. One serious, one less so. Both times I was able to get in and out of day surgery within 5hrs. And walk out! By Monday I was waking normally for the serious injury (large meniscus flap tear) and walk normally from straight after surgery, no swelling, pain etc from the second less serious meniscus tear. Absolutely brilliant, absolute bloody legend! Thoroughly recommend him as one of the best, maybe THE best option for his kind of work."
      },
      {
        "id": "g1q5ggzh6p-jdGRiUERREAE",
        "author": "Mike Wrenn",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "He is a really nice person who cares about the patient and his work."
      },
      {
        "id": "g1q5ggzh6p-OWZhc2d3RRAB",
        "author": "Jyoti Parmar",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Dr buelow operated on my shoulder twice and had a knee surgery done couple of months ago and I have recovered fully no pain in my shoulder or knee. Up and running. The best surgeon!!"
      },
      {
        "id": "g1q5ggzh6p-JNDZHaVpREAE",
        "author": "Josef Hebiton",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Ultimate professional! Would recommend to anyone that needs knee surgery"
      },
      {
        "id": "g1q5ggzh6p-NWNLX3lRRRAB",
        "author": "Florian M.",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Excellent surgeon. Speaks german too! Saved my holiday."
      },
      {
        "id": "g1q5ggzh6p-bWV5c2dRRRAB",
        "author": "Alicia Stienstra",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "A true and utter professional! I highly recommend trusting Dr. Buelow to get you back to 100%!"
      },
      {
        "id": "g1q5ggzh6p-MHFYVzhRRRAB",
        "author": "Bruno Lamberti",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Excellent surgeon, he saved my R knee despite my numerous recent and very old injuries. Thanks to him I didn't need a knee replacement and I can now fully enjoy my sports."
      },
      {
        "id": "g1q5ggzh6p-dHZXMGhnRRAB",
        "author": "Rhys Thorley",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Went due to a torn MPFL in knee. Was able to get in to see Dr Buelow very quickly and he was patient in answering all my concerns and fears. Operation went well and now in the final stages of physio. Would absolutely recommend."
      },
      {
        "id": "g1q5ggzh6p-ejdHOGlBRRAB",
        "author": "Rose Bowers",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Had my rotator cuff tear done almost 3 years ago now ( around my 60th birthday )and there has been no problems what so ever if anything its a lot stronger than my other shoulder. Thanks to Dr Jenus Buelow I had a speedy recovery and was back at work in 4 weeks on light duties ( working in retail ) Rose"
      },
      {
        "id": "g1q5ggzh6p-3djZIU0ZBEAE",
        "author": "Michell Strawbridge",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Dr Buelow is an absolute Genius! He has helped me get my life back after an accident left me requiring shoulder and knee surgery.\nHe is a very kind and compassionate Doctor who I cannot thank enough!\nFantastic bedside manor! Explains everything very clearly and answers all your questions.\nHis office staff were extremely helpful with making the Hospital bookings and all 3 procedures went perfectly!\nHe is \"The Man\" to see !!\nThank you Dr Buelow :)"
      },
      {
        "id": "g1q5ggzh6p-d1l6ejB3RRAB",
        "author": "Darren White",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Dr Buelow operated on my shoulder 1 week ago. So far so good!!!! A talented and kind Dr."
      },
      {
        "id": "g1q5ggzh6p-RNkxYcUNREAE",
        "author": "Davld Larkman",
        "rating": 5,
        "date": "2016-10-10",
        "listing": "/g/1q5ggzh6p",
        "text": "Dr Buelow replaced my right knee on 9/02/16. I can not praise his work high enough. I had no pain and was up and walking around within two days. He came and visited me every day whilst I was in hospital, answered all my questions in clear and concise manner. After leaving hospital there were a couple of small issues, his assistant Linda (also excellent) never hesitated to contact him and he always contacted me in a timely fashion. A fantastic Doctor a true Gentleman."
      }
    ]
  },
  "michael-anderson": {
    "listings": [
      {
        "key": "/g/1tg57xb7",
        "name": "Mr Michael Anderson",
        "address": "St John of God Murdoch Medical Clinic, Ste 10/100 Murdoch Dr, Murdoch WA 6150",
        "rating": 3.9,
        "reviewCount": 24,
        "url": "https://maps.google.com/?cid=15777249068729305439",
        "primary": true,
        "placeId": "ChIJEyMf87aiMioRXwl5wm8M9No",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJEyMf87aiMioRXwl5wm8M9No"
      }
    ],
    "reviews": [
      {
        "id": "g1tg57xb7-Tm1GUFNXYxAB",
        "author": "L Young",
        "rating": 1,
        "date": "2026-06-10",
        "listing": "/g/1tg57xb7",
        "text": "I have been to Mr Anderson twice over a number of years. Basically unless you need a total hip replacement he is not interested in helping people. He expects patients to live with pain if you are not bad enough for a hip replacement. No hip arthroscopy treatments to clean up cartilage or ligaments that are torn.\nHe repeatedly told the story of a 90+ patient who sprayed her hip with WD40 each day and she swore this fixed her hip. Basically if a 90+ patient with severe hip issues can deal with it so should you. Basically get over it. If your not bad enough for a total hip replacement cant help you. Extremely condescending. He at no time offered any suggestions on how to deal with the excruciating pain on suffered with constantly because of torn ligaments, inflammation etc."
      },
      {
        "id": "g1tg57xb7-U1hkdlFtYxAB",
        "author": "Greg Henderer",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/1tg57xb7",
        "text": "I had a very hard decision to make on who was going to do my knee replacement my wife had one done in Bunbury and has nothing but issues with it nerve and tendan damage there are some good surgeons in Bunbury but I have met with Dr Michael Anderson years before and was very trueful and said leave it till there is no other choice I have got a bout 5 more years and only had it done because I had a injury at work that sped everything up staff and anaesthetist could not folt them very polite and caring and Dr Michael Anderson was the most lovely and caring and spoke to you as a person and explained everything I couldn't of made a better decision if I tried and staff at st john of gods Murdoch could not speak more highly enough for what they do to myself and other patients nothing was or is to hard so a very big thankyou to Mr Michael Anderson and his team I can't thank you enough.🦵🚑 15/9/2025"
      },
      {
        "id": "g1tg57xb7-WWxjMVltYxAB",
        "author": "Denise Boden",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/1tg57xb7",
        "text": "I had my first surgery with Michael Anderson in 1990s, arthroscope.. then years later in 2018 left hip replacement, 2019, right hip replacement and then 2022 left knee replacement. Unfortunately osteo arthritis runs in my family ;). Michael Anderson was amazing with all and his reception staff and I found the anaesthetists he uses are lovely. Would highly recommend 👌"
      },
      {
        "id": "g1tg57xb7-M3FTUnlBRRAB",
        "author": "Mr Ed.",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tg57xb7",
        "text": "Dr Andreson was my hip surgeon in 1990. For the past 35 years, I've mostly worked as a tradie for all those years. Hard, physical work. The hip lasted until now. I'm impressed, after being advised that I could expect a maximum of 10 years."
      },
      {
        "id": "g1tg57xb7-ZFVFNVRGRRAB",
        "author": "dave sylvester",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tg57xb7",
        "text": "I Genuinely couldn’t be any happier with Mr Anderson, he has done an outstanding job on my hip surgery and even more than that he listened to me and saw the severe pain I was in and went above and beyond to get my surgery done asap.\nA Doctor who really seems to stands by the Hippocratic Oath and does all he can for a patient.\nThank you so so much Mr Anderson, Emma, Archie and all of your fantastic team involved with the surgery.\nPretty much changed my life, I couldn’t have stood another year with the pain and probably also saved my Liver and Kidneys from being destroyed by all the pain killers and other medications I was taking.\nThank You so much totally recommend and trust you."
      },
      {
        "id": "g1tg57xb7-YTBVMWRFRRAB",
        "author": "Susan June",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tg57xb7",
        "text": "I had my left knee replaced 9 years ago but that surgeon was now retired. Mr Anderson was recommended by an aunt so I went to see him for my right knee replacement.\nFrom making the appointment, to reception and our first consult to surgery, recovery and post op consult, I felt that everyone was invested in my full recovery. My recovery was even faster than the previous replacement.\nMr Anderson is very down to earth, draws diagrams, showed me the parts and answered every question and concern. I cannot recommend him and his team more highly."
      },
      {
        "id": "g1tg57xb7-5cXZxRUd3EAE",
        "author": "Kym-anne Keeler",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tg57xb7",
        "text": "On behalf of my wife, Kym, no longer in pain. Thank you MR Anderson. You are friendly and very comfortable to approach. Staff great too 👍"
      },
      {
        "id": "g1tg57xb7-kOF9iSU93EAE",
        "author": "David Gateley",
        "rating": 1,
        "date": "2024-10-10",
        "listing": "/g/1tg57xb7",
        "text": "My wife had a knee replaced by this Surgeon in excess of 12 years ago. She was feeling pain and discomfort months after the procedure. She went back to see Mr. Anderson, he just told her to get on with it. Yes she has had it replaced by another surgeon, also had the second knee replaced. Everything is good.\n\nThankyou for your reply Emma.\nIn short if you digest my review, you will notice I said in excess of 12 years. Believe me I am not confused. If you continue with my review you will also note that that she had it rectified by another Surgeon. Hence you have not seen her again. Kind regards.\nDavid."
      },
      {
        "id": "g1tg57xb7-MHZYRzJRRRAB",
        "author": "Sue Macpherson",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tg57xb7",
        "text": "Mr Michael Anderson replaced my knee in 2003 and since then I have had no trouble whatsoever. I found him to be very pleasant, very knowledgeable and easy to talk to. I would recommend him to anyone who has knee or hip problems. He's the best!!!"
      },
      {
        "id": "g1tg57xb7-bjRTM29BRRAB",
        "author": "Janette Moss",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tg57xb7",
        "text": "I had to have a knee arthroscopy recently with Mr Anderson. He explained everything to me and I found him to be a lovely man. He doesn't overcharge and I would highly recommend him to anyone needing an orthopaedic surgeon. The whole experience with the staff at the Surgicentre, and Mr Anderson was wonderful."
      },
      {
        "id": "g1tg57xb7-dWMzb2dBRRAB",
        "author": "Michelle Power",
        "rating": 1,
        "date": "2022-10-10",
        "listing": "/g/1tg57xb7",
        "text": "This doctor operated on my hip in 2006, it was a disaster. I've since had another 11 operations to correct his work, which was a mess from the moment I woke up. His bedside manner was appalling. I couldn't walk for 7 years. I'm actually lucky to have a leg at all. Thankfully I found another doctor who never gave up on me. But I will forever be disabled."
      },
      {
        "id": "g1tg57xb7-XMTRPM0d3EAE",
        "author": "Daniel Boyd",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tg57xb7",
        "text": "Dr Anderson is a very good surgeon, four days after knee arthroscopy I have no pain and my knee feels more stable. Dr Anderson’s secretary Emma is very pleasant and accomodating. My gratitude and thanks to you both."
      },
      {
        "id": "g1tg57xb7-dU42bTRnRRAB",
        "author": "Tony Smith",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tg57xb7",
        "text": "Dr Anderson is amazing, he took me on as I had allergies to metal and found me a substitute prosthesis, when no one else was really too interested and put me in the too hard basket, he is a lovely man, and so easy to talk to, his receptionist/theatre nurse Emma is delightfull, I would recommend this practice to anyone and have done. If I could give more than five stars i would.....Vicky Smith"
      },
      {
        "id": "g1tg57xb7-4cThtU1JREAE",
        "author": "Neville Greenwood",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1tg57xb7",
        "text": "Fantastic doctor, very friendly, very knowledgeable"
      },
      {
        "id": "g1tg57xb7-DdnFxZUpBEAE",
        "author": "pamela grove",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1tg57xb7",
        "text": "SImply the best can’t speak more highly my conditions were severe but he had my back all the way both knees replaced and getting my life back in total awe of this man will remember him with good thoughts forever. Thank you"
      },
      {
        "id": "g1tg57xb7-b3FUTjZnRRAB",
        "author": "Patsy",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1tg57xb7",
        "text": "This doctor was recommended by an O.R room nurse (can't say fairer that that!) and he was everything she said he'd be, wonderful! Of course you must meet him half-way to get best results : get as fit, as positive, and as thin as poss pre-surgery and do the work afterwards."
      },
      {
        "id": "g1tg57xb7-eE9UTTZRRRAB",
        "author": "Christine Bowden",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1tg57xb7",
        "text": "I recently had an an appointment with Mr Michael Anderson and found him to be caring and professional. The receptionist, Karen, had an excellent telephone manner and was cheerful and accommodating when I requested an urgent appointment for a trauma injury. I was very satisfied with my consultation."
      },
      {
        "id": "g1tg57xb7-ZNU9QamVBEAE",
        "author": "Morgan Jenner",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1tg57xb7",
        "text": "Michael perfomed a knee arthroscopy and tidied up the cartilage, I am walking without pain for the first time in a year. Michael was no nonsense, real and thorough, a genuine and experienced professional. Thanks Michael."
      },
      {
        "id": "g1tg57xb7-dVptZnd3RRAB",
        "author": "Lucien De Vere",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1tg57xb7",
        "text": "I cannot understand the negative reviews posted about Mr. Anderson. I have nothing but praise for the fellow. I’ve had my right hip replaced back in October 2018 and I’ve made a full recovery. He’s very personable and I’ve found his staff very helpful and courteous. I approached another surgeon before discovering Mr. Anderson (someone with an Irish last name beginning with C) and his GAP charges were probably worse than the pain my hip was producing. I didn’t care for his direct “I’m the doctor, you’re the patient and I know best approach”. That didn’t work for me. My knees may need surgery at some stage and there’s no way I’m going elsewhere. Thank you so much Michael. I’m so glad I found you."
      },
      {
        "id": "g1tg57xb7-dF9mZnR3RRAB",
        "author": "TemplateGMZ",
        "rating": 1,
        "date": "2018-10-10",
        "listing": "/g/1tg57xb7",
        "text": "Dodgy hip replacement"
      },
      {
        "id": "g1tg57xb7-naHBYWUlREAE",
        "author": "Martin Foster",
        "rating": 2,
        "date": "2018-10-10",
        "listing": "/g/1tg57xb7",
        "text": "Yes the women on the front counter need to bit a bit more diplomatic.They are aggressive personallitys.\nThey not very tactful"
      },
      {
        "id": "g1tg57xb7-BdDdpdklnEAE",
        "author": "Trevor & Diane Haddrill",
        "rating": 1,
        "date": "2017-10-10",
        "listing": "/g/1tg57xb7",
        "text": "Lovely surgeon"
      },
      {
        "id": "g1tg57xb7-RLVl6MlN3EAE",
        "author": "Stan Strahan",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1tg57xb7",
        "text": "Michael , has replaced both my knees and my right hip and I have never had any probelms .left knee possible 15yrs. next 10 yrs. knee a little later . I was told thar if I did exercise I wouldn't have any troubles which I did , there was a bit of pain but it was worth it . Thanks Michael Stan Strahan"
      }
    ]
  },
  "matthew-lawson-smith": {
    "listings": [
      {
        "key": "/g/11gxxr6kms",
        "name": "Mr. Matthew Lawson-Smith",
        "address": "100 Murdoch Dr, Murdoch WA 6150",
        "rating": 4.7,
        "reviewCount": 20,
        "url": "https://maps.google.com/?cid=5688712555570182685",
        "primary": true,
        "placeId": "ChIJIyv6DvulMioRHboQ4O1d8k4",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJIyv6DvulMioRHboQ4O1d8k4"
      }
    ],
    "reviews": [
      {
        "id": "g11gxxr6kms-VjFCVGQzYxAB",
        "author": "Henish Sookun",
        "rating": 5,
        "date": "2026-10-05",
        "listing": "/g/11gxxr6kms",
        "text": "Best surgeon in Australia,once you will got in his office u will saw his certification hanging on the wall all over already seams highlight specific traits like reliability, integrity, high standards, and work ethic."
      },
      {
        "id": "g11gxxr6kms-YVc4NFZVRRAB",
        "author": "Jacky Wilcox",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/11gxxr6kms",
        "text": "I have the utmost respect for Dr Lawson! He has done multiple surgeries on me, and the out come has been nothing less than great. Bedside manner is great, and he's very approachable and down to earth. Wouldnt go to any one else!"
      },
      {
        "id": "g11gxxr6kms-ZGxCRkxYYxAB",
        "author": "Karl Hoban",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11gxxr6kms",
        "text": "Matthew done both hands about a month apart, Carpel tunnel decompression. Can't fault Matthew or his staff, everything was handled and taken care of with no drama at all and first surgery was only about a week after initial appointment. Recovery takes a while but back to 100%. Thank you very much Matthew and his team."
      },
      {
        "id": "g11gxxr6kms-4eTVQT2VnEAE",
        "author": "Faye B",
        "rating": 2,
        "date": "2023-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "Was not able to obtain an appointment as I don't have private health insurance even though I am prepared to pay for ALL costs myself. It's a shame because he has good reviews otherwise."
      },
      {
        "id": "g11gxxr6kms-ScWFhNldBEAE",
        "author": "Debbie Sharp",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "I had both hands operated on by Dr Matthew Lawson-Smith\nI had carpal tunnel released on both hands\nI can't speak highly enough of the care I received from him, the care from his Nurse who took out my stitches to the lovely ladies at his reception desk\nOverall my experience was 10 out of 10\nI would definitely recommend him\nThey explained everything so well"
      },
      {
        "id": "g11gxxr6kms-4alA2T0F3EAE",
        "author": "Liam Taylor",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "This Dr helped me with my carpel tunnel within 3 days of initial appointment I was in surgery.\n\nSurgery went smoothly wouldn't even know you had it if it wasn't for the pink arm and big bandage.\n\nStill got a few weeks of recovery but so far I'm impressed.\n\nThanks for helping me"
      },
      {
        "id": "g11gxxr6kms-HX28ybFR3EAE",
        "author": "Meril Wells",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "I would highly recommend Dr Lawson-Smith. I found him very friendly, caring and easy to talk to. He answered all my questions and explained fully."
      },
      {
        "id": "g11gxxr6kms-cU1yNzF3RRAB",
        "author": "Lisa Manning",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "Well deserved 5 star rating, Matthew is a very knowledgeable surgeon who has his patient's wellbeing at heart when dealing with their treatment. He is patient, and if necessary will wait and let nature take it course, rather than rushing in and performing surgery. His staff are wonderful and obviously think the world of Matthew, which is always a good sign. Without hesitation I would recommend Matthew, as you would be in excellent hands."
      },
      {
        "id": "g11gxxr6kms-PZ3FyTERBEAE",
        "author": "Quinn Toohey",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "Amazing work done on my broken thumb by Mr. Lawson-Smith. Am back to a fully functioning hand and never had any complications. Was back at work in my normal role in a timely manner. Very caring and considerate surgeon. Highly recommended."
      },
      {
        "id": "g11gxxr6kms-cjVUNWtBRRAB",
        "author": "Margaret Sharpe",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "I would highly recommend Dr Lawson -Smith to anyone needing hand surgery.\nThe care and attention l was given with recent hand surgery is reflected in my 'text book' recovery.\nI couldn't have been referred to any one better."
      },
      {
        "id": "g11gxxr6kms-HcUpEUE9nEAE",
        "author": "Anne Becker",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "Following a bicycle collision at Rottnest Island I was required to seek a surgeon for a fracture of distal ulnar styloid & torn ligament (broken wrist). Being a musician, it was crucial that I found the right person to ensure that my right bowing wrist would be considered in the treatment. I have friends who, following wrist surgery, things did not go so wellI. Therefore, I conducted my own researched and checked in with medical acquaintances and was very pleased to come across Dr Matthew Lawson-Smith. I found Matthew to be very transparent, open, kind and warm. What impressed me most was that just prior to surgery he explained that as my wrist injury was less common, he had consulted with two other surgeons before making a decision. Currently at the half way point, things are going well so far in recovery. I recommend Matthew as a skilled, much experienced and professional surgeon who is also honest and kind."
      },
      {
        "id": "g11gxxr6kms-eTc3RHBRRRAB",
        "author": "uksmoothie",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "About 16 months ago my GP referred me to a plastic surgeon to have my left hand carpal tunnel constriction relieved. It was painful and unsuccessful. About 6 months ago a friend had the same op done by Matthew with an excellent result so I obtained a referral to him. Nerve conduction studies showed that both hands had severe median nerve compression with the left being worse than it was before the plastic surgeon’s operation. Matthew did my right hand and a few weeks later he redid my left hand. Both results are fantastic. No pain, only one Panadol after each. No more being woken up at night with a dead hand, no more having to shake my hand while driving. At last I can go back to playing my ukulele."
      },
      {
        "id": "g11gxxr6kms-Ha3BUbkxnEAE",
        "author": "Kay Chan",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "Dr Lawson Smith recently operated on my trigger finger which had been painful and uncomfortable for months. At my initial consultation he was friendly and easy to talk to. He gave me written information about my condition and explained my options. I had the surgery three weeks ago and my hand is almost 100% back to normal. Very happy to recommend him. His staff are also very efficient and friendly. Thanks team."
      },
      {
        "id": "g11gxxr6kms-dXZ5cy1nRRAB",
        "author": "Patrick O'Connell",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "Dr Lawson-Smith performed a carpal tunnel decompression on my left hand on 11 November 2021. The procedure went very well, I experienced very little pain or discomfort over the next two weeks and the sutures were removed 25 November 2021.\nI cannot speak highly enough of Dr Lawson-Smith as a highly skilled orthopaedic surgeon, whose personal manner is friendly, understanding and invoking trust.\nFrom my very first consultation, I felt totally at ease and confident that this is a person who knows his job very well."
      },
      {
        "id": "g11gxxr6kms-aHNfLThBRRAB",
        "author": "s B",
        "rating": 1,
        "date": "2021-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "$200 fee to get given 2 referals to go somewhere else to get treatment ...\n\ni thought seeing and paying for a specialist they would actually do the injections there and then or supply the splints they want you to try\n......NUP..."
      },
      {
        "id": "g11gxxr6kms-2N1o2OURREAE",
        "author": "Mike M",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "Mathew did a top job with the operations to both my hands for Dupuytren's recently. His clinic is conveniently located at Murdoch and his staff are helpful and friendly. Thankyou!"
      },
      {
        "id": "g11gxxr6kms-4NWJtb2J3EAE",
        "author": "Losalio Leota",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11gxxr6kms",
        "text": "Clinic was a little hard to find (Uber) but very clean and sufficient. Admin was friendly and very helpful. Dr Lawson is very straight forward and to the point and bery profressional! Anyone need a Ortho... He's the one to see!!"
      }
    ]
  },
  "aman-singh": {
    "listings": [
      {
        "key": "/g/11b7hllhbq",
        "name": "Midwest Orthopaedics - Dr Aman Singh",
        "address": "8 Hermitage St, Geraldton WA 6530",
        "rating": 4.7,
        "reviewCount": 18,
        "url": "https://maps.google.com/?cid=4988574173464928228",
        "primary": true,
        "placeId": "ChIJZcyMrp9G2isR5J8Qucf5OkU",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJZcyMrp9G2isR5J8Qucf5OkU"
      }
    ],
    "reviews": [
      {
        "id": "g11b7hllhbq-nMGFfbENBEAE",
        "author": "Charmaine Trezona",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11b7hllhbq",
        "text": "I am so thankful for Dr Snign .\nHe is such a wonderful person and made me feel so relaxed and happy about my knee operation outcome. All great.👍 news.\nThanks.😊 for your help and seeing me so soon.\nAll the staff at St Johns hospital Geraldton are just beautiful people."
      },
      {
        "id": "g11b7hllhbq-3d1ltbFJnEAE",
        "author": "chris",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "Dr Singh has competed total hip replacements on both\nhips. Both have been highly successful. He is a highly skilled surgeon on all aspects of orthopaedics and continues to apply innovative technology and techniques to his practice , and in my opinion his Dr Singh and and his practice being one of the best in the country. The man himself is a cheerful person with a good sense of humour and the ability to put you at ease by explaining the procedure in a straightforward and honest way. His staff and and practice are friendly and efficient with the staff at SJOG hospital just great and the food superb. Geraldton is lucky to have a orthopaedic surgeon of this calibre and highly recommended. Go the Mustang."
      },
      {
        "id": "g11b7hllhbq-MloyQnFRRRAB",
        "author": "Judy Austin",
        "rating": 4,
        "date": "2024-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "I had an op for Dupuytrens contracture over 8 months ago. I have had prolonged Occupational Therapy since then.\nMy hand is in the same position as it was before surgery, only now I have extensive scars and pain. I don’t think another op on this finger is a good idea.\n\nI have another finger with this problem but won’t be having any surgery. I don’t believe it will work.\n\nA Few Months Later….\nWell, I’m surprised to say my hand is improving. The palm is flat, which is a massive improvement and the pain has gone! My finger is still the same as pre-op, but quite honestly, all in all, flat palm wins 😁\n\nSo. Apologies for my previous review, I didn’t wait long enough for results. I do think the result now is good.\nPatience is a virtue ay."
      },
      {
        "id": "g11b7hllhbq-0dTl2T0VREAE",
        "author": "Dugarme Tassi-e",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "I am really grateful to Dr Singh and his staff and surgical team and the wonderful staff and nurses at St John Of God Hospital in Geraldton\nDay three am on crutches and organising to go back to Carnarvon\nThe pain management has been excellent and really amazing at how well my knee surgery went"
      },
      {
        "id": "g11b7hllhbq-obHNfMlZ3EAE",
        "author": "Dave Wesley",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "Dr Singh was a breath of fresh air compared to a previous experience. From Dr Singh to the ladies in the office and the rest of the team at the hospital. I had a perfect experience and would advise anyone to go to his practice."
      },
      {
        "id": "g11b7hllhbq-NV9xNjF3RRAB",
        "author": "yves lindecker",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "The best👍"
      },
      {
        "id": "g11b7hllhbq-aTQyVTZ3RRAB",
        "author": "sunil reddy",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "Great team led by Dr Singh. A lot of attention to detail and patient satisfaction."
      },
      {
        "id": "g11b7hllhbq-djhQbTBnRRAB",
        "author": "Westrac Geraldton",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "Absolutely stoked with the efforts and outcome from Dr. Singh. A very dedicated man with great knowledge. wouldn't go to anyone else."
      },
      {
        "id": "g11b7hllhbq-LbF9HLUJnEAE",
        "author": "Bernadette Byron",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "Thank you so much. Had full knee replacement on both knees and feel great. Dr Singh and his staff looked after me extreamly well."
      },
      {
        "id": "g11b7hllhbq-LbjhpOFF3EAE",
        "author": "Gemma Green",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "From the incredibly skilled Dr Singh to the efficient, warm and friendly reception ladies - Gemma and Baz - our experience was top notch. We are so lucky to have this amazing team here in Geraldton. Thankyou Dr Singh for making my daughter feel confident and empowered going into her procedure. I'm so grateful that she was treated so quickly and brilliantly. If I could rate your work higher I would!"
      },
      {
        "id": "g11b7hllhbq-NcGEzc1lnEAE",
        "author": "Matthew Cable",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "Excellent practice from Dr Singh and team."
      },
      {
        "id": "g11b7hllhbq-dE56VHhBRRAB",
        "author": "Gavin Pearson",
        "rating": 1,
        "date": "2019-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "Terrible service, do not tell you waits are over one and a half hours to see the surgeon when you check in for your appointment. They tell you you are the first patient of the day then the surgeon calls another patient. Truly terrible practice I would recommend trying some where else first."
      },
      {
        "id": "g11b7hllhbq-vaUluNldBEAE",
        "author": "Victoria Morgan",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "This Clinic is wonderful , so caring they explain what they are about to do & also take time to listen to any concerns you have.\nI have had 2 knee replacements by them & am happy with the results."
      },
      {
        "id": "g11b7hllhbq-JeW95WVl3EAE",
        "author": "Elaine Taylor",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "My son has had to see Dr Singh regarding a couple of sporting injuries from Bmx racing sustained over the last 2years including surgery. Honestly Dr Singh was amazing and a very talented surgeon. He was always very thorough with explaining the best treatment for the best outcome and I trust him 100% if ever needed in the future. Also the ladies at the front desk are absolutely lovely (especially Jo) and even made me a cuppa when Dr Singh was running a little late. Great to get quality treatment in Geraldton."
      },
      {
        "id": "g11b7hllhbq-RdW9mWVJnEAE",
        "author": "Mick Steffan",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "Best experience and nice people doing a very professional job. Glad to know that there is a good alternative here than having to go to Perth Thanks heaps!"
      },
      {
        "id": "g11b7hllhbq-bExhVTJBRRAB",
        "author": "Shanell Fisher",
        "rating": 5,
        "date": "2016-10-10",
        "listing": "/g/11b7hllhbq",
        "text": "I cannot speak highly enough of Dr Singh. Not only is he an incredibly talented surgeon, he is an absolutely lovely man. He performed a double knee arthroscopy to remove loose fragments of bone and cartilage on myself; I was walking unaided 5 days post-op, I healed beautifully without infection and I've regained full movement in both knees (4 weeks post-op) - something I haven't been able to do without pain for a very long time. Thank you."
      }
    ]
  },
  "daniel-meyerkort": {
    "listings": [
      {
        "key": "/g/11p543xbzj",
        "name": "Dr Daniel Meyerkort - Perth Orthopaedic & Sports Medicine",
        "address": "Level 1/1 Havelock St, West Perth WA 6005",
        "rating": 5,
        "reviewCount": 16,
        "url": "https://maps.google.com/?cid=2030593902969678668",
        "primary": true,
        "placeId": "ChIJcV7fk1mlMioRTOuUbWUeLhw",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJcV7fk1mlMioRTOuUbWUeLhw"
      }
    ],
    "reviews": [
      {
        "id": "g11p543xbzj-Y2tGcWJXYxAB",
        "author": "Jessicah Hobbs",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11p543xbzj",
        "text": "Dr Daniel Meyerkort did my ankle reconstruction 2 days ago. Everything went perfectly and he was so kind, calm and did a wonderful job! I also can’t thank his beautiful receptionist Renata enough for her kindness and assistance with everything! Definitely a 20/10 from me! Thank you Dr Meyerkort 🙏🏻"
      },
      {
        "id": "g11p543xbzj-WlV4S1JVRRAB",
        "author": "Adrian",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11p543xbzj",
        "text": "A big thanks to Dr Daniel Meyerkort who performed my ACL Reconstruction.\n\nExplained things clearly and treated me with highest level of care and respect any patient could hope for.\n\nAside from the above I would also like to say Daniel's office staff were kind and wonderful towards me aswell.\n\nHighly recommend"
      },
      {
        "id": "g11p543xbzj-UkRocmJFRRAB",
        "author": "Cassandra “Cassie” Lyon",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11p543xbzj",
        "text": "Dr Meyerkort has been amazing through my journey with my troublesome ankle. He has operated twice over the past five years due to an osteochondral lesion of the talus. His care and bedside manner are amazing and follow up care is exceptionally helpful as well."
      },
      {
        "id": "g11p543xbzj-VjBwR1MxRRAB",
        "author": "Dee Fontaine",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11p543xbzj",
        "text": "I can’t speak highly enough of Dr. Meyerkort and his wonderful secretary, Renata. Dr. Meyerkort performed my surgery after I fully ruptured my Achilles tendon, and the entire process — from the operation itself to the follow-up care — has been exceptional. His attention to detail, professionalism, and reassuring manner made a difficult time much easier to navigate.\n\nA special thank you also to Renata, who has been incredibly caring and helpful throughout. What stood out most was her personal touch — when I called with a concern, she immediately recognised me by name and warmly asked how I was doing. Despite it being late in the day, she didn’t hesitate to reach out to Dr. Meyerkort and ensure my issue was addressed promptly. That level of genuine care and dedication is rare and very much appreciated.\n\nHighly recommend Dr. Meyerkort and his team."
      },
      {
        "id": "g11p543xbzj-dFBEcWpnRRAB",
        "author": "Ka Ng",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11p543xbzj",
        "text": "I’m 33 years old now and got a hip replacement 2 years ago by Dr Daniel Meyerkort. Although my English is not good at that time. Dr Daniel still tried to explain to me patiently. I’m very happy I can go back to playing sports without pain. Dr Daniel is an excellent doctor. I highly recommend Dr Daniel."
      },
      {
        "id": "g11p543xbzj-CbnJmSmFBEAE",
        "author": "Jennifer Klingmann",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11p543xbzj",
        "text": "Dr Meyerkort is an excellent surgeon. I can highly recommend him."
      },
      {
        "id": "g11p543xbzj-ODliYm1nRRAB",
        "author": "Steven Oldrini",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11p543xbzj",
        "text": "I would highly recommendDr Daniel Meyerkort, he successfully removed a loose body from my knee. He is very professional and an excellent surgeon."
      },
      {
        "id": "g11p543xbzj-NjZDMnZBRRAB",
        "author": "stefan thiselton",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11p543xbzj",
        "text": "Saw doc not long ago for my knee and he is awesome, super informative, super friendly and one hell of a surgeon.\nI can move without pain in my knee again. Thank you doc 🙏"
      },
      {
        "id": "g11p543xbzj-cFk2aXBnRRAB",
        "author": "Rodney Norris",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11p543xbzj",
        "text": "I have to thank Dr Meyerkort for all his help to get my chronic sleep apnia sorted out .\nMy original GP was no help and called me a liar when I told him my throat had closed up on me . I changed to Dr Meyerkort were he organised my Throat surgery to fix 50 % of my sleep apnia then the sleave stomach surgery to loose weight to fix the other 50% of the sleep apnia , I feel like a new man and 40kg lighter , thank you for listening to me Dr Meyerkort I was heading down a road of major health issues till I come see you ."
      },
      {
        "id": "g11p543xbzj-temVyTENnEAE",
        "author": "SANDY HEMBRA",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11p543xbzj",
        "text": "Dr Meyerkort was my surgeon when I had total knee replacement surgery in Sept 2022. I found him to be very pleasant and understanding. He fully informed me of the procedure and answered any questions I had. The surgery and recovery have been amazing. I was up and moving on the first day and never looked back. He also has the lovely Renata as his office assistant.She is great and nothing is too much trouble .\nI would highly recommend Dr Meyerkort . Definitely 5 star *****"
      },
      {
        "id": "g11p543xbzj-bnE2TWtBRRAB",
        "author": "Queensgate Specialist Centre",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11p543xbzj",
        "text": "12 months post surgery Im walking tall and straight with no pain at all. Dan Meyerkort is an excellent surgeon who relays information using terminology that is easy to understand and I was in no doubt as to what was going to happen and how. Recovery was excellent utilising physio and regular exercises. Would thoroughly recommend Daniel and the team. Thank you Dan for giving me a new lease on life."
      },
      {
        "id": "g11p543xbzj-XcnFTYVVBEAE",
        "author": "Syed Ahmad Alqadri",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11p543xbzj",
        "text": "I met Dr Meyerkort when I was looking for a surgeon to attend to my ruptured ACL and torn meniscus. His online reviews were the reason I contacted his clinic and I am so glad I did it.\n\nFrom the very first discussion I had with Dr Meyerkort, he was very assuring, he listened to my complex situation in terms of timeline, listed down my options and went through the pros and cons. At that first meeting I knew I was going to be in really good hands.\n\nThe operation went really smoothly. He checked on me the next day when I was still in hospital, and every follow up appointment, both in person and via Skype (I am now based in Singapore), he has shown how much he cares for his patients' condition and recovery progress.\n\nI am midway through my rehabilitation and it is progressing really nicely. I put that down mainly to the excellent work in the operating theatre that Dr Meyerkort and his team did. I obviously do not wish to get seriously injured again, but if I am in need of one, Dr Meyerkort will definitely be the one and I would highly recommend him to anyone as well.\n\nAlso a special thanks to Renata (PA to Dr Meyerkort) for being so friendly and helpful with the administrative side of things. Every communication with the clinic was organised and easy to understand.\n\nThank you to everyone at Dr Meyerkort's clinic."
      },
      {
        "id": "g11p543xbzj-2MHJqeEZ3EAE",
        "author": "Gayle Cash",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11p543xbzj",
        "text": "Dr Meyerkort completed a total hip replacement for me 27 August 2021. This was my 1st major surgery, and I could not have picked a better surgeon! He patiently answered all my questions at our initial appointment, his PA Renata fielded numerous emails from me prior to surgery without complaint. He chatted to me prior to surgery, and visited me twice in my 2 day hospital stay. I am so happy to have such a skilled and caring surgeon, and would not hesitate to recommend Dr Meyerkort. Thank you for doing such great surgery on me, I can't wait to getting back to being pain free & doing fun things again!"
      }
    ]
  },
  "homan-zandi": {
    "listings": [
      {
        "key": "/g/11dftshfyd",
        "name": "Dr. Homan Zandi",
        "address": "85 Monash Ave, Nedlands WA 6009",
        "rating": 5,
        "reviewCount": 16,
        "url": "https://maps.google.com/?cid=15504559731762795474",
        "primary": true,
        "placeId": "ChIJo2emI_ykMioR0hOM6u1CK9c",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJo2emI_ykMioR0hOM6u1CK9c"
      }
    ],
    "reviews": [
      {
        "id": "g11dftshfyd-VUdOUE4wRRAB",
        "author": "Sid Hak",
        "rating": 5,
        "date": "2026-09-19",
        "listing": "/g/11dftshfyd",
        "text": "Top surgeon the best"
      },
      {
        "id": "g11dftshfyd-Wld4Rk9GRRAB",
        "author": "Bianca Galipo",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11dftshfyd",
        "text": "In April this year, I ‘smashed’ my wrist and ended up in ER where I was scheduled for surgery to have a plate put in, but after being bumped off the operating list I decided to go with a private doctor. I feel very lucky to have found the wonderful Dr Homan Zandi. My first contact with him was through his very professional and kind assistant, Emily, who got me an appointment within a couple of days. Unlike another surgeon I contacted who for expediency suggested we have an over the phone consulation, Dr Zandi insisted we meet in person so he could assess my injury and explain the procedure to me. My surgery went very well and Dr Zandi gave me excellent aftercare including referring me to Rosemary, a kind and caring OT who guided me to a full recovery. After three months, I was pain free and had pretty much regained full mobility and strength. Dr Zandi is not only an excellent doctor, but also a caring and compassionate health professional. I have no hesitation in recommending him and his team. I got exceptional care with very little out of pocket costs. Given his level of expertise he could easily charge like a wounded bull, but amazingly he and his anaesthetist are gap free doctors! Thank you, Dr Zandi, Emily and Rosemary for your excellent care. You are a great team."
      },
      {
        "id": "g11dftshfyd-YXkxelYyYxAB",
        "author": "David Carter",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/11dftshfyd",
        "text": "I saw Dr Zandi back in 2006 when he fixed my Rotary cuff tear.. What a great man , was a pleasure to meet him explained everything to also saw me before the op and straight afterwards and always made you feel at ease and relaxed about everything... it's now 2026 and I’ve ripped it again... Might be time for a new visit."
      },
      {
        "id": "g11dftshfyd-VUU5aGIwRRAB",
        "author": "Angela Edwards",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11dftshfyd",
        "text": "a very thorough and down to earth doctor he fixed my husbands wrist was a pleasure dealing with him"
      },
      {
        "id": "g11dftshfyd-dWVTbHBnRRAB",
        "author": "Meg Kotlarz",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11dftshfyd",
        "text": "Dr. Zandi did my Carpal Tunnel and Trigger Finger in 2023, liked him so much went back for 2 Shoulder Surgeries in October 2024. He is always on time, straight to the point, explains as much as you need to hear and present Before,During and After Surgery, which was important to me. All Surgery has been 100% Successful - Thank you!"
      },
      {
        "id": "g11dftshfyd-WVVVMlUxRRAB",
        "author": "Heather Galloway",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11dftshfyd",
        "text": "Thank you Mr Homan Zandi for fixing my agonising 5 months of hand pain. I knew you would, I trusted and liked you the minute we met. You are quietly confident, competent and reassuring. I’m 4 weeks post surgery, done everything I was told and am ahead in my recovery where I expected to be. I’ve had 5 orthopaedic surgeries (including joint replacement) so think I’m qualified to give 5 stars. Oh, and big thumbs up from nursing staff, recovery staff, and OT about what a great surgeon and nice man you are."
      },
      {
        "id": "g11dftshfyd-MejVlRVB3EAE",
        "author": "Julie Odgers",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11dftshfyd",
        "text": "I've had 2 shoulders done and Dr Zandi has been wonderful. Always pleasant and caring. Like the fact he's direct. Very nice man."
      },
      {
        "id": "g11dftshfyd-cEppdTdRRRAB",
        "author": "Felicia Hartmann",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11dftshfyd",
        "text": "Was referred to Dr Zandi for a tendon tear in my shoulder. After my mri I had the chance to meet and discuss the surgery. Dr Zandi is down to earth very pleasant and easy to talk to. When I was rolled into surgery I was very nervous and anxious. He was very comforting and talked to me while the anaesthetic took hold of me and I fell asleep. I woke up in the recovery room and didn't remember a thing. My follow-up appointments were fantastic. Thank you Dr Zandi for fixing my shoulder 🙏"
      },
      {
        "id": "g11dftshfyd-wanVQQ2J3EAE",
        "author": "I R",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11dftshfyd",
        "text": "I experienced a hand injury which required medical attention. I was referred to Dr. Zandi for diagnosis and treatment. Dr. Zandi was able to promptly identify the issue through a simple examination, subsequently ordering an MRI and providing necessary treatment."
      },
      {
        "id": "g11dftshfyd-leXAyUE9BEAE",
        "author": "Paul Bloxham",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11dftshfyd",
        "text": "I had my shoulder reconstruction 15yrs after it dislocated 80-100times and it has not failed me since surgery! I surf dive and swim all thanks to dr homan Zandi! Highly recommend!"
      },
      {
        "id": "g11dftshfyd-4dGZQd0pREAE",
        "author": "Danny Chamberlain",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11dftshfyd",
        "text": "Very thorough surgeon, not arrogant, and very caring"
      },
      {
        "id": "g11dftshfyd-wNFBPV1RBEAE",
        "author": "Yvonne Rolfe",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11dftshfyd",
        "text": "MR Zandi is a fantastic surgeon he's done both shoulders and hands and I haven't had any problems I would definitely recommend Mr Zani"
      }
    ]
  },
  "paul-jarret": {
    "listings": [
      {
        "key": "/g/1thrgbh4",
        "name": "Paul Jarrett Orthopaedic Clinic",
        "address": "Murdoch Clinic, 10/100 Murdoch Dr, Murdoch WA 6150",
        "rating": 4.8,
        "reviewCount": 16,
        "url": "https://maps.google.com/?cid=13214043323200216874",
        "primary": true,
        "placeId": "ChIJD8H4D7iiMioRKp_4NWS2Ybc",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJD8H4D7iiMioRKp_4NWS2Ybc"
      }
    ],
    "reviews": [
      {
        "id": "g1thrgbh4-VkdjMWIwRRAB",
        "author": "Casey Mitchell",
        "rating": 3,
        "date": "2026-06-10",
        "listing": "/g/1thrgbh4",
        "text": "They only offer services to people with health insurance so don't waste time on getting a referral if you don't have health insurance."
      },
      {
        "id": "g1thrgbh4-Ni1mZzVRRRAB",
        "author": "Ann Barber",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1thrgbh4",
        "text": "Had x 2 different hand surgeries I cannot thank Dr Jarrett enough for his expertise, care & support.\nI felt very confident, All his staff Reception, OT, Practice nurse & Physio were all very understanding.\nmany thanks"
      },
      {
        "id": "g1thrgbh4-Tm5neVVXYxAB",
        "author": "Lynda",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1thrgbh4",
        "text": "I highly recommend Mr Jarrett and his wonderful admin team. Following a skiing injury he operated on my thumb in January. My recovery is going great and I can barely see the scar. The care and attention from my first visit to the post op care has been fantastic Thank you!"
      },
      {
        "id": "g1thrgbh4-3c3N5QllREAE",
        "author": "Dean Carrabin",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1thrgbh4",
        "text": "Mr Jarrett performed a left thumb base arthroscopy and CMC denervation and was fantastic throughout the entire process, has was his team"
      },
      {
        "id": "g1thrgbh4-NnR6Qjl3RRAB",
        "author": "Morgan Jenner",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1thrgbh4",
        "text": "I had my right shoulder rotator cuff tendons reattached by Paul over a decade ago.\nI got 100% use of my shoulder.\nCant thank you enough Paul.\nMorgan"
      },
      {
        "id": "g1thrgbh4-heHN1ckdREAE",
        "author": "Luke",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1thrgbh4",
        "text": "I fronted to Dr Jarrett clinic with a finger that had been dislocated for over a month. He has done an incredble job in restoring my finger to somewhat normality. Could not recommend his services highly enough to anyone in need of a top quality orthopedic surgeon."
      },
      {
        "id": "g1thrgbh4-aksyaXZBRRAB",
        "author": "Evanne Fineberg",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1thrgbh4",
        "text": "My recovery from surgery for frozen shoulder was excellent. Terrific surgeon."
      },
      {
        "id": "g1thrgbh4-clpxMzVBRRAB",
        "author": "sue hutton",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1thrgbh4",
        "text": "Absolutely wonderful surgeon.\nThe results from my fractured wrist were so much better than i expected,\nI am a physiotherapist and was terrified that i would never work again, but i am back to work next week!,\nAlso a lovely guy with a really good team"
      },
      {
        "id": "g1thrgbh4-M2JtYzdBRRAB",
        "author": "Susan Potter",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1thrgbh4",
        "text": "Paul did surgery on both my shoulders (frozen). I've not had any issues with either shoulder since. Full use and rotation back in very short time. I recommend him to anyone who needs surgery if this type. Great manner and pleasing to deal with. Follow up visits well timed and helpful towards a speedy recovery."
      },
      {
        "id": "g1thrgbh4-cGRLM3JnRRAB",
        "author": "Haydn Pocklington",
        "rating": 5,
        "date": "2016-10-10",
        "listing": "/g/1thrgbh4",
        "text": "Paul and his Murdoch Clinic team are both friendly and knowledgeable,\nAnd are always working on providing the best in care for their patients."
      }
    ]
  },
  "gerald-hardisty": {
    "listings": [
      {
        "key": "/g/1ptyj2ptf",
        "name": "Assoc Prof Gerard Hardisty | The Foot & Ankle Centre Perth",
        "address": "Suite 13, Wexford Medical Centre, 3 Barry Marshall Parade, Murdoch WA 6150",
        "rating": 4.5,
        "reviewCount": 15,
        "url": "https://maps.google.com/?cid=1065783757349872196",
        "primary": true,
        "placeId": "ChIJTQ4KjbaiMioRRGI4OK5syg4",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJTQ4KjbaiMioRRGI4OK5syg4"
      }
    ],
    "reviews": [
      {
        "id": "g1ptyj2ptf-UVcxcVZsRRAB",
        "author": "Deborah Copping",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/1ptyj2ptf",
        "text": "I’m so grateful for the wonderful care I’ve received the last 8 years from Assoc Prof Hardisty. I’ve had multiple surgeries and I’m so happy with the results."
      },
      {
        "id": "g1ptyj2ptf-WVdwTFNtYxAB",
        "author": "Josh Oversby",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/1ptyj2ptf",
        "text": "Dr. Hardisty has in-depth knowledge of his field, is good at what he does, and cares about his patients. You couldn't really ask for more from a surgeon than that."
      },
      {
        "id": "g1ptyj2ptf-UkV4ck1tYxAB",
        "author": "Bry Jon Wright",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/1ptyj2ptf",
        "text": "Dr Hardisty is an exceptional orthopaedic surgeon, and I would recommend him without hesitation to anyone seeking expert care.\nAfter nearly 3 years of ongoing ankle issues, I cannot speak highly enough of Dr Gerard Hardisty and the care he provided me.\nFrom my very first appointment, Dr Hardisty took the time to genuinely listen to me. He approached my situation with incredible care, patience, and attention to detail. He thoroughly analysed my MRI and was able to identify issues in my ankle joint that had been previously overlooked by other orthopaedic surgeons.\nDr Hardisty recommended an ankle arthroscopy to clean up the joint, and I am so incredibly grateful he did.\nFollowing surgery and recovery, I could immediately feel a difference in the movement of my ankle - movement I had not been able to achieve in almost 3 years.\nI am deeply grateful for Dr Hardisty’s knowledge, experience, and genuine compassion. Most importantly, I am thankful that he listened to me and took my concerns seriously.\nThank you Dr Hardisty – you are the best!"
      },
      {
        "id": "g1ptyj2ptf-ZGpGWVNsRRAB",
        "author": "Britt",
        "rating": 2,
        "date": "2026-03-10",
        "listing": "/g/1ptyj2ptf",
        "text": "I would not recommend Prof Hardisty and suggest seeking an orthopaedic surgeon with stronger expertise. While Prof Hardisty had a pleasant manner, his consultations always felt rushed and he was not very thorough, which was concerning considering he is a professor and also the high cost of appointments.\n\nAlthough steroid injections he arranged did help, there were multiple occasions where I had to point out areas of pain that he had overlooked—even though he had my MRI results. Only after I directed his attention did he review the scans properly and diagnose arthritis in those areas. He also remarked that my case was “really challenging him,” which did not inspire confidence in his ability to manage my treatment.\n\nHis admin staff were polite enough when bringing me into the room, but when it came to paying and booking another appointment, they were cold and short. This was the same in phone interactions when I raised an issue—they came across dismissive and unhelpful. After being referred for four steroid injections, the radiologist performed only two, explaining that further injections were unnecessary. I phoned the clinic to clarify whether Prof. Hardisty still wanted me to have the other two injections. The receptionist did check with him, and when she called back, she said he wanted me to come in for another appointment. I explained that, as someone on the disability pension, I did not want to pay for another consultation if it was only to get a referral for the remaining injections. I asked her to check again, but she replied, “I can’t give you advice.” Her tone was really rude, and I could tell she was getting annoyed. I told her I wasn’t asking for her advice, I was asking her to clarify with Prof Hardisty. She repeated that I needed to book another appointment and would not answer my question. This left me feeling the process was more about money than my care.\n\nProf Hardisty did say that I may need surgery, but due to my lack of confidence in his thoroughness and approach, I have sought orthopaedic expertise elsewhere."
      },
      {
        "id": "g1ptyj2ptf-2OGJmaUFnEAE",
        "author": "Irene Pratt",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1ptyj2ptf",
        "text": "I've always liked Dr Hardisty. Down to earth, keeping it real sort of man. He's an amazing surgeon. You know you are in good hands with him. I've had 2 surgeries with him and gave been happy with the results both times. A long way to go for this surgery but with his support , I'll get there. And he has a lovely smile that reaches the eyes quickly. Thank you dr. HARDISTY. I appreciate your work.\nIrene"
      },
      {
        "id": "g1ptyj2ptf-nanB5eEJREAE",
        "author": "Helen Davies",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1ptyj2ptf",
        "text": "I have had 2 major surgeries with Dr Hardistry and am very satisfied with his professionalism and caring nature. He goes above and beyond to ensure you get the best advice regarding your surgery and the outcomes to expect. I cannot speak more highly of him. A wonderful human being."
      },
      {
        "id": "g1ptyj2ptf-GeTlyME5REAE",
        "author": "Jeff Green",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1ptyj2ptf",
        "text": "On first meeting the Big G he was exemplary in his empathy towards my issue with my Achilles tendon. Explaining exactly what needs to be done and performing the operation flawlessly. Great follow up, both in hospital and post op, never felt rushed.\nHighly recommend 👌"
      },
      {
        "id": "g1ptyj2ptf-3NVlpNldREAE",
        "author": "stilts23",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1ptyj2ptf",
        "text": "Dr Hardisty did a fantastic job on my ankle which suffered a dislocation and fracture, requiring a plate and screws.\nAftercare was great and his nurse was informative and had a great bedside manner.\n\nDr Hardisty answered all my questions and was lovely to interact with even tho he was quick and to the point ( 😂.).\n\nWould definitely recommend"
      },
      {
        "id": "g1ptyj2ptf-4czZXTUd3EAE",
        "author": "Cathy Moffat",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1ptyj2ptf",
        "text": "Dr Hardisty is one of the nicest and most Brilliant Orthopaedic Dr I have ever met. I had been seeing Dr Hardisty for 10years and he has help me to stay on my feet ."
      },
      {
        "id": "g1ptyj2ptf-tOWJLVklBEAE",
        "author": "Esther Buttner",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1ptyj2ptf",
        "text": "We had a horror run years ago and was told that I must get used to the pain as it will be with me for a lifetime. Dx was crps. I disagreed. Surgeon after surgeons send me home saying they will not touch me if it is crps. I was even told to “don’t bother taking your sock off”. Then Dr Hardisty came into my life and realised I was indeed right, not crps but an unstable ankle. He managed to get me in fast and I am forever grateful! Recently I had knee issues plus a toe implant issues and again Dr Hardisty came to the rescue. Years of buckling knee, falls and pain -gone! He is so very skilled and really listens! So grateful!"
      },
      {
        "id": "g1ptyj2ptf-cHVlWDZnRRAB",
        "author": "Grace Begley",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1ptyj2ptf",
        "text": "I was in so much pain and couldn't really woek. My plantar had entirely gone. Professor Hardisty performed surgery on my useless right foot, taking a graft from my knee. I am 8 years late in writing this, but now I can say that thanks to Professor Hardisty, I have travelled Europe, walking up to 30kms per day. I now can teach and bush walk around 10kms. I went from sitting in my lounge room to living again. He gave me back my life."
      },
      {
        "id": "g1ptyj2ptf-eW9Ia3dRRRAB",
        "author": "julie Ryder",
        "rating": 4,
        "date": "2021-10-10",
        "listing": "/g/1ptyj2ptf",
        "text": "Gerard is such a pleasure to deal with my daughter feels so comfortable with her visits, even with her anxiety. Only downfall is a couple of his admin staff are extremely rude and unhelpful, but If you can get over that then I would recommend."
      },
      {
        "id": "g1ptyj2ptf-rNV9tWmNBEAE",
        "author": "Samantha Stubberfield",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1ptyj2ptf",
        "text": "Only doctor to take my work related injury seriously at first. What was thought to be 1 fracture in foot, ended up being 5. He was clear, precise and blunt. Which is what i prefer. Doesnt waist my time. He did my surgery which massively reduced my pain and increased mobility. I would 100% recommend. Sometimes runs late. But i dont think that is something that can be changed. As some apps run longer then others. Or paitents can run late.\nHappy he was and is my specialist."
      },
      {
        "id": "g1ptyj2ptf-bDc3UDZBRRAB",
        "author": "Cara Holland",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1ptyj2ptf",
        "text": "Highly recommend Gerard following a very complicated multiple fracture of leg & ankle as result mx injury. Straight shooter & honest. Was referred by a surgeon in Melbourne & we are so grateful to Gerard for giving the best chance towards a reasonable recovery. A+"
      }
    ]
  },
  "nicole-leeks": {
    "listings": [
      {
        "key": "/g/1q6bkbcx1",
        "name": "Dr Nicole Leeks",
        "address": "3/85 Monash Ave, Nedlands WA 6009",
        "rating": 3,
        "reviewCount": 15,
        "url": "https://maps.google.com/?cid=4003914462234064847",
        "primary": true,
        "placeId": "ChIJE7Y4p_6kMioRz7eCYP3CkDc",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJE7Y4p_6kMioRz7eCYP3CkDc"
      },
      {
        "key": "/g/1pv083gl9",
        "name": "The Orthopaedic Group WA",
        "address": "3/85 Monash Ave, Nedlands WA 6009",
        "rating": 4.7,
        "reviewCount": 26,
        "url": "https://maps.google.com/?cid=8271533031927574939",
        "primary": false,
        "shared": true,
        "placeId": "ChIJITtrnv6kMioRm_Hz03djynI",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJITtrnv6kMioRm_Hz03djynI"
      }
    ],
    "reviews": [
      {
        "id": "g1q6bkbcx1-UlZseU1FRRAB",
        "author": "Lynne Rouda",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/1q6bkbcx1",
        "text": "We had a really positive experience with Dr Nicole Leeks. From the beginning, she was incredibly knowledgeable, kind and reassuring.\n\nDr Leeks took the time to explain everything clearly, answering our questions and putting our minds at ease. We always felt that our daughter was in very capable and caring hands during this stressful time.\n\nWe are extremely grateful."
      },
      {
        "id": "g1q6bkbcx1-VTFocFdtYxAB",
        "author": "Sonya Jayne",
        "rating": 1,
        "date": "2026-06-10",
        "listing": "/g/1q6bkbcx1",
        "text": "My daughter saw her yesterday - she was rude, unconcerned, arrogant and indifferent to the 4 months of agony my daughter has spent with a broken foot that no-one seems to know how to heal. Unacceptable for a medical professional to treat a patient this way."
      },
      {
        "id": "g1q6bkbcx1-VjBSUFNtYxAB",
        "author": "Lisa",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/1q6bkbcx1",
        "text": "I wanted to come here to leave a review for parents that are apprehensive or hesitant to book with Dr Leeks after reading the google reviews as I was in this position before seeing Dr Leeks in person today. My bub was diagnosed with DDH recently and we had a very confusing appointment at PCH so sought after going down the private route instead. We have been on a waitlist with another orthopaedic surgeon but it was a long wait but we were able to get a quick appointment with Dr Leeks.\n\nI was worried I was not going to be able to get good care from her after reading some of the reviews here, but she was nothing but professional and clinically knowledgeable with DDH.\n\nShe was also great with our bub and made sure bub was greeted with a smile and relaxed. She answered all our questions and concerns. Yes, it was a quick appointment but she was straight to the point & no beating around the bush, but i wouldn’t say she was rude or anything like that. Just very professional."
      },
      {
        "id": "g1q6bkbcx1-YldwcWFFRRAB",
        "author": "M M",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/1q6bkbcx1",
        "text": "Well I made a huge mistake in trusting this woman a simple foot op left me having to have 6 more surgeries to try to correct the total stuff up Leeks made\nDo your research\n2 complete strangers came up to me while I hobbling on my crutches both it seemed had stuffed up surgeries\nThe correction were NOT performed by Leeks"
      },
      {
        "id": "g1q6bkbcx1-ncW9LZVZBEAE",
        "author": "Yolette Inskip",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/1q6bkbcx1",
        "text": "I seldomly leave negative reviews. However, Dr Nicole Leeks wasted 2 years of my life after conducting an arthroscopic meniscectomy in June 2020, where not enough was done. When I brought my concerns to her via email, she was rude and unapproachable, whilst making it sound like my knee would heal quickly.\n\nI diligently followed my exercise physiologist's programme for 18 months but to no avail As a result of a limp created by my knee, my right hip flared up from time-to-time. Hiking and playing tennis were no longer activities that I could participate in properly. Also, I was unable to pass a medical for my long sought after aspiratiin of working on the mines.\n\nEventually, in July 2022 a highly reputable and professional surgeon took me under his wing! Unlike Dr Leek, he stitched what he could so that only a bit needed to be removed, preventing a knee replacement down the line. As a result, I was able to successfully complete 12 hours of Poon Hill trekking over 2 days in Nepal two weeks ago. Also, I now operate machines on the mines and happily relief teach in my spare time, not taking any work home.\n\nHence, I highly recommend that you reconsider Dr Leek for knee surgery, should you want to avoid disappointment. I wish I had read reviews about her before committing to her services, which my GP in Newman recommended."
      },
      {
        "id": "g1q6bkbcx1-Nm92OTZnRRAB",
        "author": "Keith George Eveson",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1q6bkbcx1",
        "text": "Amazing experience yesterday, in my opinion Doctor Leeks is the best of the best, and Ive seen many, approx ten year ago I was referred to one in Joondalup to have three toe nails removed, he had two attempts they all grew back, after the second,, he said, “if this fails, do not come back”\nDoctor Leeks did the job first attempt, a more helpful, thoughtful lady you couldnt wish to meet, in fact her whole team were just amazing, , thank you all so very much.\nKeith Eveson"
      },
      {
        "id": "g1q6bkbcx1-JX01laFl3EAE",
        "author": "Joondalup Boat Shack",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1q6bkbcx1",
        "text": "I recently had the displeasure of tearing my Achilles tendon and was treated by Dr Leaks. I count myself as one of the lucky ones, she took my case as her care and professional was first class. She was absolutely spot on in her assessment and I’d add her Staff were also super friendly and extremely capable. I would have zero issues with recommending anyone if they can see Dr Leeks to do so. You’ll be happy you did. Thanks again Rod 👍"
      },
      {
        "id": "g1q6bkbcx1-lbTdXRkZ3EAE",
        "author": "Athena Kwee",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/1q6bkbcx1",
        "text": "Don’t recommend this Doctor to any kid, very rush, impatient and arbitrary.\nWhen I tried to ask more about my daughter’s situation, and if there’s any other options, she replied me very rush and impatient with no more than 2 sentences for any question.\n\nMy whole appointment took just 5 mins! She didn’t even take off my daughter’s shoes to check the toes or feet, not mention about other tests...\n\nShe maybe a surgeon, but definitely no enough experience or knowledge on treatment or theory.\n\nMy daughter is the patient, I’m the mother, of course you wouldn’t find my name in your system."
      },
      {
        "id": "g1q6bkbcx1-MU15bTBRRRAB",
        "author": "Timothy Winch",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1q6bkbcx1",
        "text": "I found Nicole to be an expert surgeon with excellent follow up with patients. Her attention to detail & knowledge within her profession is 2nd to none"
      },
      {
        "id": "g1q6bkbcx1-MnJheF9nRRAB",
        "author": "Andy Jones",
        "rating": 1,
        "date": "2022-10-10",
        "listing": "/g/1q6bkbcx1",
        "text": "If you want compassion and understanding then go somewhere else.\nIf you want a rude, arrogant Doctor who doesn’t listen and makes you feel like you’re making your injury up, then book in with this woman. You won’t be disappointed."
      },
      {
        "id": "g1q6bkbcx1-NGNYYm1RRRAB",
        "author": "Montserrat garguz",
        "rating": 3,
        "date": "2022-10-10",
        "listing": "/g/1q6bkbcx1",
        "text": "I would look for different options if you need a orthopedist for your child. My baby was referred to Dr Leeks about his hips. We were worry about our baby's health and expecting to get a good explanation about his current situation and future life. But we only got a really brief comment saying he'll be fine is nothing serious... Come to see me in 6 months to make sure everything is going well.\nWe received more kindness and had a longer conversation with the ladies in reception.\nHonestly $250 for less than 2 minutes made me think I should read the reviews before and see other options. Anyway if you are looking for a kind Dr who take the time to fully explain your child situation go somewhere else."
      },
      {
        "id": "g1q6bkbcx1-XzdiSjR3RRAB",
        "author": "Melissa Keenan",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1q6bkbcx1",
        "text": "I recently required a correction to two of my toes. I found Dr Leeks to be very professional. I did not have to wait long post my initial appointment, to get in for my day surgery procedure. My day surgery went well and the area where my toes needed to be corrected has healed nicely. I'm very happy with Dr Leeks' work."
      },
      {
        "id": "g1q6bkbcx1-xcEtLSGN3EAE",
        "author": "Eman Obaid",
        "rating": 1,
        "date": "2021-10-10",
        "listing": "/g/1q6bkbcx1",
        "text": "I took my 9 year old daughter for a consultation and I wasn't satisfied at all! The doctor was in a rush as the whole appointment took only 15 min! She wasn't thorough in her examination neither did I have enough time to discuss my daughter situation and treatment options. Also she was so rigid for a pediatric who is expected to be nice and gentle when dealing with kids. She was like( your daughter had no physical reasons behind her tiptoe walking and it's all in her brain and I'm not a brain surgeon!) then she addressed my daughter with a straight face asking ( do you want to walk like this or you want to fix your feet!) Also for the $250 fees I paid I definitely expected more help and enough time for my concerns. Honestly I won't recommend her for kids! Or anyone who needs time to talk their treatment"
      },
      {
        "id": "g1q6bkbcx1-5aXZtaFhBEAE",
        "author": "Julie Murphy",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1q6bkbcx1",
        "text": "Dr Nicole Leeks recently fixed my right big toe that was causing me a great deal of pain and had been for many years.\nFrom the first consultation through to the surgery and after care, it was exceptional service and I am pain free!!\nRebecca who is Dr Leeks Receptionist, was also amazing with all the communication and professionalism that she showed while dealing with my case.\nThank you very much to both of you for such an easy operation process."
      },
      {
        "id": "g1pv083gl9-FdFk3U0NnEAE",
        "author": "Sophie Jauffret",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1pv083gl9",
        "text": "Doctor Nicole Leeks is the person to see if you want to a candid, no nonsense approach. And she's a brilliant surgeon."
      }
    ]
  },
  "andrej-nikoloski": {
    "listings": [
      {
        "key": "/g/11gdq9r5rt",
        "name": "Dr Andrej Nikoloski",
        "address": "3/85 Monash Ave, Nedlands WA 6009",
        "rating": 5,
        "reviewCount": 14,
        "url": "https://maps.google.com/?cid=1391797320891176487",
        "primary": true,
        "placeId": "ChIJnbnP3DikMioRJxYPD0qoUBM",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJnbnP3DikMioRJxYPD0qoUBM"
      }
    ],
    "reviews": [
      {
        "id": "g11gdq9r5rt-JLWNXZVVREAE",
        "author": "Dee Gow",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11gdq9r5rt",
        "text": "Dr Nikoloski performed an ankle replacement. He is absolutely professional, respectful, caring and explains the procedure in detail. I highly recommend him and am eternally grateful to him for taking away my chronic pain."
      },
      {
        "id": "g11gdq9r5rt-cXJhRW1BRRAB",
        "author": "Andrew McRoberts",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11gdq9r5rt",
        "text": "Mr Nikoloski is quite simply the best Doctor I have ever seen. I had an ankle reconstruction and he has been great from the start. A very polite Doctor and an even better person. He was honest about my recovery and how my ankle would be moving forward. He is also supported by a great receptionist Mica, who even helped making appointments with scans and moving my surgery forward. If you need surgery on your lower limbs, I would highly suggest Mr Nikoloski!!."
      },
      {
        "id": "g11gdq9r5rt-yOThIS0lnEAE",
        "author": "david stobie",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11gdq9r5rt",
        "text": "Andrej did an emergency total hip replacement for me in Feb 2019, after a bike fall. 3 years later it continues to serve me well and is no problem at all for long walks, jogging, and bike riding."
      },
      {
        "id": "g11gdq9r5rt-pdE0ySVdBEAE",
        "author": "Kevin Dornan",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gdq9r5rt",
        "text": "Very friendly and great skills. Recon of my ankle and improvement of my gait.\nI can now walk around a shopping centre ,without pain and fear of a fall, ride my mountain bike and motorcycle again and knockabout with my daughters and my niece's three young sons - can't thank him enough."
      },
      {
        "id": "g11gdq9r5rt-amZuQXhRRRAB",
        "author": "Ben",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11gdq9r5rt",
        "text": "I would 100% recommend Dr Nikoloski to anyone requiring ankle stabilisation, the process was worry free and gave me a great recovery plan alongside my physio Luke in midland. He answered all my questions and concerns with a professional and intelligent opinion which has led to a full recovery."
      },
      {
        "id": "g11gdq9r5rt-a0l5enlBRRAB",
        "author": "Pauline Pearce",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11gdq9r5rt",
        "text": "I recently had surgery done and Andre Nikoloski was polite, considerate, friendly, informative and friendly. He put me at ease immediately. Thank you."
      },
      {
        "id": "g11gdq9r5rt-wMk0yMFZBEAE",
        "author": "Melanie Tewman",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11gdq9r5rt",
        "text": "Dr Nikoloski repaired my broken ankle in surgery yesterday. He is a delightful person with warm bedside manner and a brilliant surgeon. His communication with me was excellent, sharing up to date research findings and explaining clearly to me all the procedures involved in my care. He closely liaised with anesthesiology and I have felt in very good hands I can trust. Andrej is our ankle guy forever!"
      },
      {
        "id": "g11gdq9r5rt-BNEtPVEFREAE",
        "author": "CJ",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11gdq9r5rt",
        "text": "I found Dr Nikoloski to have a wonderful “bedside manner “. Not rushing me; very interested in my concerns; explaining the problem I was experiencing with my feet after previous multiple surgeries and giving a very honest opinion of the possible outcomes of any further surgery. He considered my total wellbeing and explained that as anti inflammatories we giving me adequate pain relief, I should avoid surgery. I left his surgery feeling very grateful for an honest opinion and a great attitude."
      }
    ]
  },
  "dermot-collopy": {
    "listings": [
      {
        "key": "/g/11bv6l904t",
        "name": "Dr Dermot Collopy",
        "address": "Unit 1/1 Wexford St, Subiaco WA 6008",
        "rating": 4.5,
        "reviewCount": 13,
        "url": "https://maps.google.com/?cid=15289386634247899625",
        "primary": true,
        "placeId": "ChIJZ51pymqlMioR6YnzHyPQLtQ",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJZ51pymqlMioR6YnzHyPQLtQ"
      }
    ],
    "reviews": [
      {
        "id": "g11bv6l904t-TVZGWlRWRRAB",
        "author": "Annemarie Harris",
        "rating": 5,
        "date": "2026-10-08",
        "listing": "/g/11bv6l904t",
        "text": "Dr Collopy did a very professional job replacing my 2 knees, 6th months apart. Could drive after 4 weeks and back to work in 6 weeks. A lot less pain than I anticipated. The team at SJGH Subi did a wonderful job also. I'm now 2 years down the track, lost weight and feel so much better."
      },
      {
        "id": "g11bv6l904t-T0ZZNVRuYxAB",
        "author": "Paul Frenken",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11bv6l904t",
        "text": "How brilliant is this surgeon, laying bricks 5 weeks after thr with no pain what a professional team they are highly recommend"
      },
      {
        "id": "g11bv6l904t-Ulc5WVMxRRAB",
        "author": "Barana Jafari",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11bv6l904t",
        "text": "He is very understanding and professional. He knows what he wants to do. We had good experience\nThank you"
      },
      {
        "id": "g11bv6l904t-VFZOQlRsRRAB",
        "author": "Mark Norval",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11bv6l904t",
        "text": "Dr Colopy performed an emergency revision surgery on my knee. My normal surgeon was on vacation. I was very impressed with Dr Colopy's confidence instilling manner which allowed me to get through a very traumatic experience. Thankyou for your expert treatment Dr Colopy."
      },
      {
        "id": "g11bv6l904t-dUtYTnBRRRAB",
        "author": "Nick",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11bv6l904t",
        "text": "Dr Dermot Collopy has been instrumental in helping me regain my life as I knew it after successfully replacing both my hips\nsimultaneously. Life prior to surgery was trying but I am now happy to say this is the beginning of a new way of living pain free! Thank you Dermot and your team for doing what you do. 👏👏"
      },
      {
        "id": "g11bv6l904t-cV9ySXZRRRAB",
        "author": "Shahram Salekian",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11bv6l904t",
        "text": "Hey everybody bring your cars, bring your trucks and tractors and he will fix them like new! Did my hip replacement and knee clean up op with this guy, and I was walking without crutches in a week and a half. A year later still no limp, no pain, running up and down a ladder without any problems. He is a magician and a wonderful, funny guy. His staff always smiling, warm and helpful. Thank you!! Shaz"
      },
      {
        "id": "g11bv6l904t-dHZDajB3RRAB",
        "author": "Michelle Lekias",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11bv6l904t",
        "text": "What an amazing experience from day one . Dermott has now taken on the role of my real life hero. Brilliant surgeon , total hip replacement highest pain score from day one 2/10 .\nOff crutches by week 3 . He’s firm in your interest with a wicked sense of humour.\n110% recommend, but that’s no wonder as he is so highly regarded in his field .\nHe’s a miracle man .."
      },
      {
        "id": "g11bv6l904t-hN05XdGZBEAE",
        "author": "Christine Ellis",
        "rating": 1,
        "date": "2021-10-10",
        "listing": "/g/11bv6l904t",
        "text": "Dr Collopy came very highly recommended by friends. He said he would write to other Specialists for treatment options. He wrote only to our GP. He did recommend Hydrotherapy - but didn't write to them either. Patient was and is in extreme pain dealing with bone on bone movement. he has not helped us in the very least. Patient will die because of the pain (he will give up) not because of his medical conditions. I thought better of you."
      },
      {
        "id": "g11bv6l904t-3a3VPc0F3EAE",
        "author": "David Christie",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11bv6l904t",
        "text": "I'm going for my second hip replacement with Dr. Dermot with complete confidence. He certainly knows his hips! He is also a thoughtful and caring man...and is straight to the point."
      },
      {
        "id": "g11bv6l904t-MmJtb2xnRRAB",
        "author": "Erica Scrutton",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11bv6l904t",
        "text": "Mr Collopy was recommended by another surgeon, which is no faint praise. He proved to be kind, good humoured and, best of all, a good surgeon, with the latest technology and expertise. He has a thorough approach to post-operative care, calling in every morning to the hospital to check on my progress. He is also open to suggestions, which I appreciated. I was able to walk unaided in under a week, although my overall recuperation took longer. (Sue Scrutton - posting under a relative's name.)"
      },
      {
        "id": "g11bv6l904t-MktXdjlRRRAB",
        "author": "Dorothy Dunlop",
        "rating": 5,
        "date": "2016-10-10",
        "listing": "/g/11bv6l904t",
        "text": "Dr Collopy is a first rate surgeon with a beautiful manner about him. He did several surgeries on my left femur, which I broke in the USA and also did a total knee replacement for me. I cannot recommend him highly enough. A truly gifted surgeon and a very nice man as well."
      }
    ]
  },
  "dror-maor": {
    "listings": [
      {
        "key": "/g/11h1mjs34p",
        "name": "Dr Dror Maor",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.4,
        "reviewCount": 13,
        "url": "https://maps.google.com/?cid=12615862041274293648",
        "primary": true,
        "placeId": "ChIJ1Q7TzzelMioRkB19Ua-LFK8",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJ1Q7TzzelMioRkB19Ua-LFK8"
      }
    ],
    "reviews": [
      {
        "id": "g11h1mjs34p-YW1Gc1ZVRRAB",
        "author": "Blake Francis",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11h1mjs34p",
        "text": "elite"
      },
      {
        "id": "g11h1mjs34p-V1cxMk9FRRAB",
        "author": "Dani GB",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/11h1mjs34p",
        "text": "I’ve been under the care and management on more than one occasion for two separate injuries with Dr Dror Maor and team. He’s been fantastic with his care and the follow through of the support staff has also been excellent."
      },
      {
        "id": "g11h1mjs34p-Y1hOaVFrRRAB",
        "author": "Bec Comac",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/11h1mjs34p",
        "text": "Excellent experience from start to finish. Dror was professional, approachable, and took the time to explain everything clearly, which made me feel informed and reassured. Highly recommend."
      },
      {
        "id": "g11h1mjs34p-YVVneFJGRRAB",
        "author": "Tony Kearney",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/11h1mjs34p",
        "text": "Nothing negative to say whatsoever. I have had a couple of surgeries and every care has been taken not to just rush anything to ensure the best result possible.\nGreat guy and great team to deal with.\nJust honest solid advice.\nWouldn’t hesitate to recommend his services."
      },
      {
        "id": "g11h1mjs34p-ZUcxMVJWRRAB",
        "author": "PETER ROWE",
        "rating": 1,
        "date": "2025-11-10",
        "listing": "/g/11h1mjs34p",
        "text": "Nearly five years of operations and still waiting for a pain specialist to fix my big toe"
      },
      {
        "id": "g11h1mjs34p-aDRMTnFRRRAB",
        "author": "Traci Drage",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11h1mjs34p",
        "text": "\"Dr. Dror Maor is an exceptional physician whose expertise and care truly stand out. My son recently suffered an ankle injury, and Dr. Maor's treatment was nothing short of outstanding. From the moment we walked into his office, we were greeted with warmth and professionalism. Dr. Maor took the time to thoroughly assess my son's injury, explaining the diagnosis and treatment plan in clear and understandable terms. Throughout the entire process, he demonstrated a genuine concern for my son's well-being, providing both medical expertise and emotional support. Thanks to Dr. Maor's skillful care, my son's ankle has healed beautifully, and he's back to his active lifestyle with no lingering issues. I cannot recommend Dr. Dror Maor highly enough for his exceptional care and professionalism.\""
      },
      {
        "id": "g11h1mjs34p-bkluNm53RRAB",
        "author": "Richard Kelly",
        "rating": 1,
        "date": "2024-10-10",
        "listing": "/g/11h1mjs34p",
        "text": "Impossible to get an appointment.\nI hand delivered my referral last week and had my X-rays sent directly to his staff from Perth Radiological at Bethesda on the same day.\nI was told his PA would call me to make an appointment, she didn’t. I then phoned once and physically went to the clinic on 3 separate occasions over a period of 4 days and each time was told that the PA wasn’t available, but that she’d call back, she didn’t.\nMy last visit was today, I was treated abruptly by someone who I imagine was the office manager, and then left, with no intention of returning.\nTotally disrespectful waste of my time.\nI’ll find another surgeon with a functioning administration department."
      },
      {
        "id": "g11h1mjs34p-aThiZV9RRRAB",
        "author": "Alana Bernstein",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11h1mjs34p",
        "text": "Doctor Moar examined my son’s foot and was very professional and easy to communicate with. It was easy to make an appointment, have the X-rays done and then see Doctor Moar for the results. I felt comfortable and in good hands!"
      },
      {
        "id": "g11h1mjs34p-qODRhamFREAE",
        "author": "Jason Rhine",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11h1mjs34p",
        "text": "Dr Dror Maor, his team and his staff have been exceptional. I have seen Dr Maor on several occasions for sporting injuries. His advice, expertise and understanding of my injuries made my come back to endurance sport seamless. Dror is so personal and is one of the best not only in Australia but globally and I couldn’t recommend him and his caring team enough!"
      },
      {
        "id": "g11h1mjs34p-XzlTRV9nRRAB",
        "author": "Brad Hutchinson",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11h1mjs34p",
        "text": "The staff at Dr Maor's rooms are refreshingly friendly and efficient. Dr Maor has a kind bedside manor and fills you with confidence in his knowledge and competence. My knee operation was huge success. I am very grateful to Dr Maor and I would definitely recommend him to anyone searching for an orthopaedic surgeon."
      }
    ]
  },
  "alex-obeirne": {
    "listings": [
      {
        "key": "/g/11c2kjdpk7",
        "name": "Alex O'Beirne - Western Orthopaedic Clinic",
        "address": "Suite 37 Hollywood Medical Centre, 85 Monash Ave, Nedlands WA 6009",
        "rating": 3.8,
        "reviewCount": 21,
        "url": "https://maps.google.com/?cid=18084127108605777356",
        "primary": true,
        "placeId": "ChIJCdUjy2qlMioRzJV1ncq59_o",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJCdUjy2qlMioRzJV1ncq59_o"
      },
      {
        "key": "/g/1pv5xy8_v",
        "name": "Dr. Alex O'Beirne",
        "address": "Western Orthopaedic Clinic Suite 13, Wexford Medical Centre, 3 Barry Marshall Parade, Murdoch WA 6150",
        "rating": 3.3,
        "reviewCount": 12,
        "url": "https://maps.google.com/?cid=3122873109062692658",
        "primary": false,
        "placeId": "ChIJTQ4KjbaiMioRMi9NCIysVis",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJTQ4KjbaiMioRMi9NCIysVis"
      }
    ],
    "reviews": [
      {
        "id": "g1pv5xy8_v-UW5admNWRRAB",
        "author": "Linda Brydon",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/1pv5xy8_v",
        "text": "I saw Dr O'Beirne for a consultation on the 18th August 2026 and he was a gentleman and I appreciated his advice re, my condition.\nI would not hesitate to recommend Dr O'Beirne, should you need to see an orthopaedic surgeon."
      },
      {
        "id": "g1pv5xy8_v-T0hkUFZFRRAB",
        "author": "Andrew Quin",
        "rating": 1,
        "date": "2026-02-10",
        "listing": "/g/1pv5xy8_v",
        "text": "Typical arrogant Perth Medical specialist. Do not recommend."
      },
      {
        "id": "g11c2kjdpk7-zN2JEbUlREAE",
        "author": "Mr Brown “PERTH / NOW” Perth",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "I had surgery in my elbow after surgery i was still in pain in my elbow after 6 months dr alex attitude change became rude! I told him after surgery i was still feeling pain in my elbow all the way to my fingers . Very disappointed how from day 1 dr alex was polite! 6 months after surgery Rude person ."
      },
      {
        "id": "g1pv5xy8_v-zbmVXeWZnEAE",
        "author": "Mr Brown “PERTH / NOW” Perth",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/1pv5xy8_v",
        "text": "Very rude person unprofessional ."
      },
      {
        "id": "g1pv5xy8_v-WTNCQ1dFRRAB",
        "author": "Macca Girls",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pv5xy8_v",
        "text": "Absolutely brilliant nerve surgeon, explains the procedure he is anticipating to conduct prior to surgery and a wealth of knowledge."
      },
      {
        "id": "g1pv5xy8_v-VmtsMmVXYxAB",
        "author": "Vicki Fosselius",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/1pv5xy8_v",
        "text": "Felt very uncomfortable after having my hamstring looked at by Dr O'Beirne. He was also very blunt and rushed through my appointment. I left feeling distressed and not wanting to return."
      },
      {
        "id": "g1pv5xy8_v-VEhKa05GRRAB",
        "author": "TRISH's Playlists",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pv5xy8_v",
        "text": "I have had 2 emergency surgical procedures with Dr O'Beirne, his attention to giving you the best surgical care and post Op outcomes.\nDr O'Beirne is my go too for any hand or upper limb surgery.\nAs a Songwriter/Musician I highly recommend Dr O'Beirne 100%.\nThank you Dr O'Beirne.\nTrish Robson"
      },
      {
        "id": "g11c2kjdpk7-MjlmSV93RRAB",
        "author": "Chris White",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "Underneath a pretty laid back exterior is a super technically impressive and experienced surgeon.\n\nAlex operated on my wife’s badly broken wrist and did a terrific job. We went back for my shoulder reconstruction which has turned out far better than I could have hoped.\n\nIn both our cases (and in all surgeries I would think) there are no absolute guarantees of success. We kept our expectations reasonable and regard ourselves as being fortunate to have very positive outcomes."
      },
      {
        "id": "g11c2kjdpk7-NjUtcGpRRRAB",
        "author": "Jenny Graham",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "My husband had wrist surgery with Alex although he also had a redial fracture at his elbow, Alex just ignored it. Greedy guy."
      },
      {
        "id": "g11c2kjdpk7-tdDR5cEt3EAE",
        "author": "ian F",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "Alex has been treating and operated on me over a number of years for a complicated and difficult shoulder problem . He has put a huge amount of time and energy into helping me going way more than the extra mile . I am very very appreciative and indebted to him . Thankyou Dr O'Beirne !!!\nIan Forsyth"
      },
      {
        "id": "g11c2kjdpk7-dWN5ZC1BRRAB",
        "author": "David Sofield",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "Excellent service from the rooms staff and a great outcome from my surgery. Highly recommended."
      },
      {
        "id": "g1pv5xy8_v-NTZlXy13RRAB",
        "author": "Andrew Bobey",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1pv5xy8_v",
        "text": "Seemed to really know his stuff. Explained my MRI results in detail and showed me on the screen. Recommended against surgery in my case and explained why."
      },
      {
        "id": "g11c2kjdpk7-ZzdTTW93RRAB",
        "author": "Thomas murray",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "solid doctor"
      },
      {
        "id": "g11c2kjdpk7-wOU1MMUR3EAE",
        "author": "Cooper Barnes",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "good hand doctor"
      },
      {
        "id": "g11c2kjdpk7-wOU9qZ2R3EAE",
        "author": "Kurtis Butler",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "we love Alex"
      },
      {
        "id": "g11c2kjdpk7-OUt5XzZRRRAB",
        "author": "David Tencents",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "10/10 legend, will recommend."
      },
      {
        "id": "g11c2kjdpk7-OUlTVTd3RRAB",
        "author": "William",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "Thank you Dr O'Beirne for your handy solution!"
      },
      {
        "id": "g11c2kjdpk7-wOUtLT1hnEAE",
        "author": "Blair",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "Good with his hands, exactly what you want from a hand doctor."
      },
      {
        "id": "g11c2kjdpk7-ak1pbzF3RRAB",
        "author": "Flynn Mahon",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "A perfect doctor who has an even more perfect son.\n\nGrod ✋."
      },
      {
        "id": "g11c2kjdpk7-MGFxem1BRRAB",
        "author": "Laura-Jane Goodhew",
        "rating": 1,
        "date": "2020-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "First met at St John's Murdoch was told my daughter needed surgery on broken finger as it would be disfigured if she didn't have it done. He seemed very nice although did use some swear words in conversation which I generally don't with my children. Had surgery at St John's Subiaco was told the screw he put in was too long but only get one chance at doing it so if you have problems could be taken out in 6 months. We went back in 6 months as her finger was still quite swollen looking around joint. Explained we had done all the physio appointments following surgery but didn't help the look of finger. Was then told it would cost another $400 out of pocket to remove the screw that was too long and try to fix the shape a little. Explained that already had quite a large out of pocket expense with first surgery only to be told maybe I should get a better health insurer, I have HBF gold cover which I presume is quite high cover. My daughter was then told if she put on a bit of weight her finger wouldn't look as bad. I haven't been back and will endeavour to find a different surgeon to remove the screw from her finger.Overall very poor treatment all round ."
      },
      {
        "id": "g11c2kjdpk7-djhQRWt3RRAB",
        "author": "Jean Macrae",
        "rating": 1,
        "date": "2019-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "Very rude and arrogant, do not waste your money look for a specialist who values and cares about his patients."
      },
      {
        "id": "g11c2kjdpk7-Z3NIZzNRRRAB",
        "author": "carol briody",
        "rating": 3,
        "date": "2019-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "Don't like being charged for a Post-Op subsequent visit . I paid the over the schedule amount for the Surgery. I have never been charged for Post Op visits by any other Surgeons. What is the point of having Private Insurance when you are continually having to pay out. When I didn't attend the appointment I received a Bill for $55 for non attendance !!!"
      },
      {
        "id": "g1pv5xy8_v-JdjZPY2NREAE",
        "author": "Jean Macrae",
        "rating": 1,
        "date": "2019-10-10",
        "listing": "/g/1pv5xy8_v",
        "text": "Very arrogant specialist whose not interested in his patients."
      },
      {
        "id": "g11c2kjdpk7-BdXV6YVZ3EAE",
        "author": "Susan Battensby",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "He's the first doctor in 16years to give me a yes he could do something to help instead of saying no sorry you just got learn to live with your disability and expect to get worse like other doctors/surgeons before him have told me. He was very through and made sure that before he said yes to the surgery that it would work and there wasn't other options from other surgeons that might be less invasive. Had the surgery and when I had problem at the hospital I was in with nurses he came late at night after full day of surgery to see if I was ok and hear everything that had gone on, he made me feel like I mattered. He's an amazing surgeon I'm so happy to have been referred on to see him, he's given me hope and changed my life for the better."
      },
      {
        "id": "g1pv5xy8_v-OV9iSzdRRRAB",
        "author": "Robert Rodrigues",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1pv5xy8_v",
        "text": "Thankyou so much A+ service and everything was 10 out of 10.If you want the best this it. From admission to release very happy"
      },
      {
        "id": "g11c2kjdpk7-RM2JUM0JnEAE",
        "author": "Geoff Middleton",
        "rating": 1,
        "date": "2017-10-10",
        "listing": "/g/11c2kjdpk7",
        "text": "My mother had an operation in March 2017 we were told she would be in hospital three days.The very next morning she was sent back to the home in which she was a resident.Alex O'Beirne did not come and see her before she left hospital,or after.She was left in the care of carers not nurses.The first morning i went to the home my mother had been showered,her arm which was operated on not covered in the shower,the wound was saturated.Three days later she died.Where was the after care,the hospital (South Perth) would not tell us who discharged her.Iam not a nurse,but she was hot and sweating(infection) probably,but if she was in hospital having proper care,would this tragedy have happened?Iam writing this for other people whose surgeon does not check on them after an operation,and nobody will say who discharged my mum.A beautiful,quite lady that did not deserve this treatment.No autopsy was done but they said heart attack,did this lack of care contribute to that? Shelley Middleton."
      },
      {
        "id": "g1pv5xy8_v-RM2JUM1ZBEAE",
        "author": "Geoff Middleton",
        "rating": 1,
        "date": "2017-10-10",
        "listing": "/g/1pv5xy8_v",
        "text": "My mother had her arm operated on,Alex O'Beirne did not see her after the op or the next day.To our disappointment she was placed back in the nursing home the very next day.(she was a private patient)She was left with carers not nurses,when i arrived her wound was saturated,not even covered when showering.Two days later she passed away,there was no after care what so ever,had there been a follow up visit this might have been prevented.Shelley Middleton."
      },
      {
        "id": "g1pv5xy8_v-NC16MzVnRRAB",
        "author": "Val Miller",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1pv5xy8_v",
        "text": "I went to Dr O'Beirne for a second opinion for Elbow surgery, I was very nervous after being told I needed 6 months off work with the first opinion. Dr O'Beirne was very clear on what I need to expect from the surgery he planned. I went with his diagnosis, the results were better then I could have ever hoped for. I was back to work in a week, and better results then expected after 3 weeks, and I can't wait to see what I will be am able to do."
      },
      {
        "id": "g1pv5xy8_v-cnRxbXVRRRAB",
        "author": "Fawaz Alraggas",
        "rating": 5,
        "date": "2016-10-10",
        "listing": "/g/1pv5xy8_v",
        "text": "Good doctor"
      }
    ]
  },
  "allan-wang": {
    "listings": [
      {
        "key": "/g/1tf2pn0c",
        "name": "Wang Allan",
        "address": "10/100 Murdoch Dr, Murdoch WA 6150",
        "rating": 4.9,
        "reviewCount": 12,
        "url": "https://maps.google.com/?cid=11492496136693198975",
        "primary": true,
        "placeId": "ChIJEyMf87aiMioRf7AlsliMfZ8",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJEyMf87aiMioRf7AlsliMfZ8"
      }
    ],
    "reviews": [
      {
        "id": "g1tf2pn0c-T0RBNFpWRRAB",
        "author": "Anthony Paynter",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/1tf2pn0c",
        "text": "Prof Allan Wang carried out surgery to reattach my ruptured RH bicep tendon.\nFrom first consult to final follow up Mr Wang was informative and explained the process clearly as well as potential risks and ongoing rehab required. Diane & Louise reception staff were always warm welcoming on the phone and in person too.\nThank you team for all you do, greatly appreciated"
      },
      {
        "id": "g1tf2pn0c-Z296ZS1RRRAB",
        "author": "Richard Sheavyn",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tf2pn0c",
        "text": "Tore 3 muscles in my left shoulder and shoulder is now good as new. Weight training is a big part of my life and I now have no restrictions. Highly recommend."
      },
      {
        "id": "g1tf2pn0c-6OGFyRERBEAE",
        "author": "karen edwards",
        "rating": 4,
        "date": "2024-10-10",
        "listing": "/g/1tf2pn0c",
        "text": "I just had shoulder op with Dr Wang 1st time I met him was lovely explained everything about the op I needed it. After surgery he came to visit said all went well now just recovery. Louise was very friendly also surprised to see her beside the bed as well as reception. Karen edwards"
      },
      {
        "id": "g1tf2pn0c-b01lbmtBRRAB",
        "author": "Shernavaz Cooper",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tf2pn0c",
        "text": "Dr. Allan Wang's exceptional talent as an orthopaedic surgeon warrants the highest praise. His knowledge and surgical precision fostered a sense of trust throughout my procedure and recovery. Dr. Wang's commitment to patient well-being truly sets him apart. The attentiveness he provided during my recovery not only ensured a smooth healing process but also instilled a genuine sense of care.\n\nFurthermore, a special thanks needs to be extended to Louise and Dianne. Their roles on the reception and nursing staff, respectively, were far more than just functional. Their warm and professional demeanors transformed a difficult situation into a more manageable one. Their positive presence made a world of difference during a challenging time."
      },
      {
        "id": "g1tf2pn0c-ajczbGx3RRAB",
        "author": "Heather Dowell",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tf2pn0c",
        "text": "Professor Wang is an excellent physician. His treatment is highly skilled and of the first order in up-to-date practices. His treatment of post operative pain is exceptional, and the follow up care with his physiotherapist gives the patient a full assurance of regaining optimum return to usefulness. I was very impressed with Dr Wang's treatment of my shoulder, and would like to thank him for his care."
      },
      {
        "id": "g1tf2pn0c-1OElpY2N3EAE",
        "author": "Gavin McMahon",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tf2pn0c",
        "text": "After a major trauma to my left shoulder I was blessed to be repaired and care for by Prof Wang and Danielle Woodhouse his in house physiotherapist.\nFollowing successful surgery and measured step by step rehab I've been able to return to work 6 weeks ahead of scheduled .\nAn amazing result,\nIt is without hesitation I give Professor Alan Wang a 5 star recommendation."
      },
      {
        "id": "g1tf2pn0c-NVlxMGdRRRAB",
        "author": "Mike Stealthman",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1tf2pn0c",
        "text": "Performs great work, has a strong team, listens to his patients, with the limited time available for a surgeon. I can recommend Dr. Allan Wang."
      },
      {
        "id": "g1tf2pn0c-LbXJPZkNnEAE",
        "author": "Dora Brown",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1tf2pn0c",
        "text": "Mr Wang is a very caring,compassionate Surgeon he makes the experience very comforting as he is very professional along with his Amazing team.\nLouise and Dianne are just beautiful caring and supportive staff.\nI have had 5 Surgeries with Dr Wang with excellent results.\nHe takes pride in his job and has an excellent bedside manner I would highly recommend him at any time you will feel rest assured and be in very good hands,\nHis Team of Anaethetists are very caring and professional also.\n100% all round"
      },
      {
        "id": "g1tf2pn0c-rMjRiWkJBEAE",
        "author": "ray Bauskis",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1tf2pn0c",
        "text": "Outstanding surgeon, professional, sincere and caring. Both shoulder surgeries and carpal tunnel surgery great successes."
      }
    ]
  },
  "angus-keogh": {
    "listings": [
      {
        "key": "/g/11c0xs6_5q",
        "name": "Mr Angus Keogh",
        "address": "312 Churchill Ave, Subiaco WA 6008",
        "rating": 4.7,
        "reviewCount": 12,
        "url": "https://maps.google.com/?cid=7393166745154923069",
        "primary": true,
        "placeId": "ChIJ-5dNLRWlMioRPaow6vvNmWY",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJ-5dNLRWlMioRPaow6vvNmWY"
      }
    ],
    "reviews": [
      {
        "id": "g11c0xs6_5q-UVhOcVVIYxAB",
        "author": "J Brown",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/11c0xs6_5q",
        "text": "Dr Keogh is a very skilled and experienced surgeon from my perspective. He on all occasions conducted himself in a highly professional manner throughout, ie pre surgery communication and post surgery check up. Completed my surgery to a very high standard and checked my progress at a later stage during initial physio . Once again Dr Keogh conducted himself with a high sense of morals and integrity during my care while still being relaxed and easy going. Highly recommend."
      },
      {
        "id": "g11c0xs6_5q-VFVkQ2QzYxAB",
        "author": "zoe croft",
        "rating": 1,
        "date": "2026-06-10",
        "listing": "/g/11c0xs6_5q",
        "text": "My first experience was similar to all the previous reviews.\nSadly, following my second operation with Angus Keogh he visited me the morning following my surgery - I was heavily medicated on ketamine post surgery, as Iike many, I struggle with pain management.\nHe demanded I apologise to the woman in the hospital room who had also had surgery the day before. I had no idea what he was talking about and he never actually explained anything. Instead, he kept insisting I apologise and despite asking him why he still never explained. As a consequence I became very stressed and upset. I was completely vulnerable and on strong medication and he was looming over my hospital bed at me as I was still laying in it. Eventually he left the room after threatening not to be my doctor anymore.\nWhen the husband of the woman came into the room I asked him if he would tell me what was happening. The husband then explained that his wife had thought I had said something to her in the night that upset her. I did not. Further more I was wearing a mask all night so how she would have heard anything audible if I had said something I do not know.\nTo this day Mr Keogh has never apologised for his behaviour although I have received an apology from the hospital.\nWhen we are in hospital we expect care and consideration.\nEven if I had said something 'mean'...this should never have been dealt with in this manner.\nWe should all be cognisant of people when they are in altered vulnerable states. This applies both to my room mate whom was clearly also in distress and pain as well as myself.\nI hope Angus Keogh has learned from this experience...but then how would I know. He has never had the courage to rectify his highly unprofessional behaviour through an apology."
      },
      {
        "id": "g11c0xs6_5q-Y0ZBelNGRRAB",
        "author": "Ian & Carol Knight",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11c0xs6_5q",
        "text": "Very , very happy with this Drs medical knowedge and operational skills. Explains everything in detail so you know whats going to happen."
      },
      {
        "id": "g11c0xs6_5q-cHZ5WHNRRRAB",
        "author": "isobel cassidy",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11c0xs6_5q",
        "text": "Was the right surgeon for my wrist, had a plate in there after breaking it. Surgeon who put it in dud not want to remove it but Angus looked at it and removed it asap to address a likely rupture of ligament if not removed. Was no issue with surgery and rom improved after. Highly recommended by both my fabulous OT and PT."
      },
      {
        "id": "g11c0xs6_5q-OF9LMGtnRRAB",
        "author": "Alison Barbour-Jones",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11c0xs6_5q",
        "text": "Dr Keogh is fantastic. Really helpful in diagnosing a complex situation. Compassionate and caring also."
      },
      {
        "id": "g11c0xs6_5q-MzRuLXl3RRAB",
        "author": "Matison Dalwood",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11c0xs6_5q",
        "text": "I would highly recommend Dr Angus Keogh. I had shoulder surgery, that required quite a lot repairs to ligaments. Very knowledgeable and very understanding with whole surgery made whole progress very easy go through with , with minimum stress involved with surgery."
      },
      {
        "id": "g11c0xs6_5q-bG9HMnZBRRAB",
        "author": "Bianca Vicars",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11c0xs6_5q",
        "text": "I have had 3 operations with Angus thus far. He’s incredibly knowledgeable, and gifted in the orthopaedic field.\nThe admin staff are also fantastic. They’re efficient, kind, and always go above and beyond to ensure you’re satisfied.\nThank you to Dr Keogh and his team, for everything so far."
      },
      {
        "id": "g11c0xs6_5q-POXNMb1pREAE",
        "author": "Italo Zamudio",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11c0xs6_5q",
        "text": "Very kind and efficient consultant orthopaedic surgeon"
      },
      {
        "id": "g11c0xs6_5q-elB5bDdnRRAB",
        "author": "Toni Hughes",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11c0xs6_5q",
        "text": "Highly recommended Angus Keogh, fabulous surgeon who excels at what he does, professional and fabulous surgeon."
      },
      {
        "id": "g11c0xs6_5q-NU92TGhBRRAB",
        "author": "dominik male",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11c0xs6_5q",
        "text": "I was meant to see Dr Angus Keogh and arrange an operation for my right thumb as my ultrasound report says there's rupture of UCL with stener lesion, then the Dr Angus moved around my thumb and decided not to have this operation because he thinks that it may heal without having surgery.\n\nThe first 2 weeks I wasn't able to open a bottle and to lift my backpack and now it's been 3 weeks and 2 days, I can easily open a bottle and no problem with lifting a backpack.\n\nI wish I could give more than 5 stars review ."
      },
      {
        "id": "g11c0xs6_5q-aGRiNG5nRRAB",
        "author": "Samantha Ann Wehmeyer",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11c0xs6_5q",
        "text": "Dr Keogh is a good Surgeon and very passionate about what he does. He listens to his patients and doesn't let insurance companies bully him into making unrealistic decisions. Thanks Keogh"
      }
    ]
  },
  "brett-bairstow": {
    "listings": [
      {
        "key": "/g/1tfr7lmw",
        "name": "Bairstow Dr Brett",
        "address": "Unit 2/29 Walters Dr, Osborne Park WA 6017",
        "rating": 4.7,
        "reviewCount": 12,
        "url": "https://maps.google.com/?cid=10185859853133367532",
        "primary": true,
        "placeId": "ChIJX3pI4cC6MioR7EjtxZFxW40",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJX3pI4cC6MioR7EjtxZFxW40"
      }
    ],
    "reviews": [
      {
        "id": "g1tfr7lmw-ZWpSclFXYxAB",
        "author": "Joy Cooke",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/1tfr7lmw",
        "text": "My knee has been unstable since surgery and I now require a full revision 4 years post surgery. Not happy."
      },
      {
        "id": "g1tfr7lmw-IakpUOUNBEAE",
        "author": "Sunset DJs",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tfr7lmw",
        "text": "Dr Bairstow was fabulous in attending to mum. He was caring and explained everything in detail. Checked up on her daily in the hospital. Great bedside manner. The receptionists Margaret and Carmelina (hope I got that correct) are wonderful and friendly. Mum will be back again for her other knee. Mum had a great experience."
      },
      {
        "id": "g1tfr7lmw-wenYzc1l3EAE",
        "author": "Lee Poland",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tfr7lmw",
        "text": "Dr Brett Bairstow, is a fantastic professional. He takes the time and care to explain. Makes you feel very comfortable."
      },
      {
        "id": "g1tfr7lmw-SMDllT1FREAE",
        "author": "Karen Crockett",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tfr7lmw",
        "text": "Mr Brett Bairstow is thorough and his knowledge of his field is outstanding. His bed side manner is 10/10...don't get much of these in the medical profession these days. I feel totally comfortable in his care"
      },
      {
        "id": "g1tfr7lmw-N1A2bW53RRAB",
        "author": "ellie flower-collins",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1tfr7lmw",
        "text": "For attention to detail and approachability, especially when required for more complex hip surgeries unbeatable!"
      },
      {
        "id": "g1tfr7lmw-ODhqcTBRRRAB",
        "author": "Vicki Simpson",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1tfr7lmw",
        "text": "Our family can't speak highly enough of Dr Bairstow. The treatment and care he gave our mum was outstanding. We are very grateful."
      },
      {
        "id": "g1tfr7lmw-d3B2dG1BRRAB",
        "author": "Suzanna Plinke",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1tfr7lmw",
        "text": "Great attention to details, wonderful bedside manner, you never feel rushed during office visits."
      },
      {
        "id": "g1tfr7lmw-RX1BQVkpnEAE",
        "author": "Elizabeth Jones",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1tfr7lmw",
        "text": "I have been seeing Brett for over ten years now, wonderful doctor with a kind and loving manner. Very specialised in Revision hips and knees."
      },
      {
        "id": "g1tfr7lmw-NXRHRmd3RRAB",
        "author": "appelbug Avb",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1tfr7lmw",
        "text": "What a lovely gentleman. Nothing is ever a trouble. He will talk TO you rather than AT you. He is highly skilled and I cannot recommend Mr Bairstow enough!!!!!"
      },
      {
        "id": "g1tfr7lmw-RaEw3dGZnEAE",
        "author": "Karl Buckley",
        "rating": 5,
        "date": "2016-10-10",
        "listing": "/g/1tfr7lmw",
        "text": "Excellent"
      }
    ]
  },
  "gareth-prosser": {
    "listings": [
      {
        "key": "/g/11c6qbnnsy",
        "name": "A/Professor Gareth Prosser",
        "address": "Murdoch Square, Ste 205 Tower C/44 Barry Marshall Parade, Murdoch WA 6150",
        "rating": 5,
        "reviewCount": 10,
        "url": "https://maps.google.com/?cid=10030425158142173398",
        "primary": true,
        "placeId": "ChIJvQwpjbaiMioR1qA0sYk6M4s",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJvQwpjbaiMioR1qA0sYk6M4s"
      }
    ],
    "reviews": [
      {
        "id": "g11c6qbnnsy-ya2N6WFlnEAE",
        "author": "Kellie Simone",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11c6qbnnsy",
        "text": "Dr Prosser is fantastic, he is knowledgeable and kind. Thank you for seeing me, your treatment and advice has been excellent."
      },
      {
        "id": "g11c6qbnnsy-tOXZDMGV3EAE",
        "author": "Maca",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11c6qbnnsy",
        "text": "Professor Prosser successfully performed a double hip replacement 2 years ago and a full knee replacement 2 weeks ago.\nHe leads a great team of professional people from start ro finish."
      },
      {
        "id": "g11c6qbnnsy-tcy1qWGV3EAE",
        "author": "Rupinder singh Randhawa",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11c6qbnnsy",
        "text": "I wish I could give more star.\nDr Gareth Prosser did total Hip replacement on me. He has done marvellous job and my life has been changed. I wasn’t able to walk more than 15 minutes but now i can walk whole day and I won’t have any sort of pain or disconnect.\nThanks Doctor and may God bless you with happy and long life."
      },
      {
        "id": "g11c6qbnnsy-d2J2QzJ3RRAB",
        "author": "Matt James",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11c6qbnnsy",
        "text": "The man is a miracle worker ! I had bilateral hip resurfacing and have made a complete recovery.\nGreat consultation, in depth understanding of my procedure and kept me informed all the way. Could not recommend highly enough. Thankyou"
      },
      {
        "id": "g11c6qbnnsy-wX2NxeUpREAE",
        "author": "Robert Barnett",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11c6qbnnsy",
        "text": "Associate Professor Gareth Prosser is a brilliant Orthopedic Surgeon..He recently did a full hip replacement for me. His total professionalism from the first consultation where the procedure is full explained and his care of the well-being of the patient to the subsequent operation and care provided is superb and follow up is brilliant\n\nRobert Barnett"
      },
      {
        "id": "g11c6qbnnsy-weU55RkJBEAE",
        "author": "Barbara McShane",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11c6qbnnsy",
        "text": "I have just had a total left hip replacement and Mr Prosser was excellent\nNeat scar\nI was 1st in the list for the operation theatre..\nUp and around later on the same day.\nI did feel a little dizzy but pretty good apart from that.\nThe team were fantastic, I was 100% informed the whole way\nI saw Mr Prosser last Thursday 1 day short of 4 weeks and he was happy with my progress so back to work p/t tomorrow\nI am 61 yrs old and I really wonder why I suffered the pain of oesto-arthritis for so long!!\nI’d recommend Prof Prosser 100% .. get service :-)"
      },
      {
        "id": "g11c6qbnnsy-JbC16eFhBEAE",
        "author": "Rob Neutert",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11c6qbnnsy",
        "text": "A/Professor Prosser is a perfectionist and a brilliant surgeon. I will not trust anyone else with my family. I can not recommend him highly enough.\nThank you Gareth."
      },
      {
        "id": "g11c6qbnnsy-cXNPbmhBRRAB",
        "author": "Anne Moxham",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11c6qbnnsy",
        "text": "Gareth prosser is my lifesaver i will be recommending to all and sundry. He is such a delightful man and most of all a great surgeon"
      },
      {
        "id": "g11c6qbnnsy-3bWZfRkh3EAE",
        "author": "brad ball",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11c6qbnnsy",
        "text": "This Doctor is a genius. A true professional. If not for his operating skills there was a good chance of losing half of my right leg. Now it is nearly normal ."
      }
    ]
  },
  "gavin-clark": {
    "listings": [
      {
        "key": "/g/11b8jd7m01",
        "name": "Dr Gavin Clark",
        "address": "Unit 1/1 Wexford St, Subiaco WA 6008",
        "rating": 4.2,
        "reviewCount": 10,
        "url": "https://maps.google.com/?cid=7844516960071761758",
        "primary": true,
        "placeId": "ChIJITtrnv6kMioRXr-a95xS3Ww",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJITtrnv6kMioRXr-a95xS3Ww"
      }
    ],
    "reviews": [
      {
        "id": "g11b8jd7m01-VEhsbVNHYxAB",
        "author": "Sherree",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11b8jd7m01",
        "text": "Dr Clark is a very gifted surgeon. I’ve had a knee and recently a hip replacement, both surgeries have been very successful and I wouldn’t hesitate to recommend Dr Clark."
      },
      {
        "id": "g11b8jd7m01-Wm1kUFJHYxAB",
        "author": "Sherrill Duncan",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11b8jd7m01",
        "text": "Extremely proficient surgeon- he replaced my hip 6 weeks ago and I am very impressed with both the op and, importantly, the ongoing follow up by Dr Clark and his very professional team, namely his Nurse and Physio!\nHighly recommended!!"
      },
      {
        "id": "g11b8jd7m01-VG5sRWIxRRAB",
        "author": "Michael Cowley",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/11b8jd7m01",
        "text": "Knee operation has recovered quickly and works well. I like his direct and to the point directions as there is no ambiguity. His staff are most helpful and professional . It is a well known painful experience but Gavin and the staff get you through it."
      },
      {
        "id": "g11b8jd7m01-YdDRTZ0V3EAE",
        "author": "Paul Bramley",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11b8jd7m01",
        "text": "Absolutely brilliant bilateral total knee replacement-St John’s hospital awesome as well."
      },
      {
        "id": "g11b8jd7m01-Y0RCV2MxRRAB",
        "author": "Sharon Hawkins",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11b8jd7m01",
        "text": "There’s a reason why GPs recommend Mr Clark for knees and hips and a even bigger reason those who know him professionally have their hips n knees replaced by Mr Clark , absolute perfectionist ,I’ve experienced massive decrease in pain from what I experienced pre op ,, absolutely no bruising ,my suture line is barely visible and I’m only 2 weeks post op , forever humbly grateful to Mr Clark and highly recommend"
      },
      {
        "id": "g11b8jd7m01-SaklEX0NnEAE",
        "author": "jean Macrae",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11b8jd7m01",
        "text": "My husband had a Knee and hip surgery with Dr Clark and can't praise him enough, his post op physio and after care have been excellent."
      }
    ]
  },
  "david-kerr": {
    "listings": [
      {
        "key": "/g/11xtxw5789",
        "name": "Dr David Kerr (MBBS, FRACS, BSci Physio)",
        "address": "144 Churchill Ave, Subiaco WA 6008",
        "rating": 5,
        "reviewCount": 9,
        "url": "https://maps.google.com/?cid=14144975875391027219",
        "primary": true,
        "placeId": "ChIJmSH39ailMioRE_gmiZ0MTcQ",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJmSH39ailMioRE_gmiZ0MTcQ"
      }
    ],
    "reviews": [
      {
        "id": "g11xtxw5789-ZHpOTFNGRRAB",
        "author": "Adam Loud",
        "rating": 5,
        "date": "2026-10-08",
        "listing": "/g/11xtxw5789",
        "text": "Helpful and quick to respond to get me back to work."
      },
      {
        "id": "g11xtxw5789-ZWxkM1ZXYxAB",
        "author": "Richard Broughton",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11xtxw5789",
        "text": "Hi Guys,\n\nMy name is Richie and I would like to share my experience most recently with my right hip replacement by Dr David Kerr and his amazing team at the St John of God Hospital Mt Lawley\n\nStage 1 - GP Submission, I believe it took less than 2 weeks after my submission via the public submissions by my GP that I received an email from Dr Kerr's Joint Solutions practice to confirm my consultation date. I actually broke down to my wife over the phone.\n\nStage 2 - October Consultation, my initial thought process while sitting in Dr Kerr's practice was that the entire enrolment and waiting time for surgery was going to take a lifetime & like so many of us the cost of living, bills & not having private health full cover absolutely I had my doubts for surgery. Dr Kerr put all that doubt to bed straight away and in the space of 20 minutes we were discussing surgery option's specific to my range of movements and his recommendations and surgery dates as early as December/January.\n\nStage 3 - At Home Set Up, If I'm honest I was a nervous wreck but I knew that Dr Kerr had set me up for a successful recovery with pivotal and detailed hospital and home visits by specialists on how my recovery at home should look like and providing the necessary equipment that allowed me to be confident in the recovery space. This included visual aids like old school comic books easy step by step ways to sit, sleep, shower etc. Please practice the movements before surgery & trust me it makes recovery so much easier meaningful!\n\nStage 4 - Pre Surgery, March 26 2026, the surgery team I found was thorough. I was asked my name date of birth, which Dr and where and what side I was being operated on so many times.... I totally understood the assignment and that reassured myself that Dr Kerr had me in the best possible care!\n\nStage 5 - Hospital Post Surgery, the amount of support and confidence and regular visits from Dr Kerr that my surgery was a success, 24 hour support at hospital, pain treatment, comfort, meals and genuine care for me I am truly grateful.\n\nStage 6 - Recovery, I am proud to say that 8 days post surgery I was able to stop my pain killers, my sleep was not hindered, the pain in my hip seemed like a distant memory. Now I am almost at 5 months post surgery I am 2 months back to fifo since July and this was only made possible by Dr Kerr and his amazing team.\n\nFor future reference or note to self would be to reach out to Dr Kerr's Orthopaedic clinic asap\nwww.jointsolutions.com.au"
      },
      {
        "id": "g11xtxw5789-Ums4MFYzYxAB",
        "author": "Brett Walker",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11xtxw5789",
        "text": "Dr David Kerr was amazing he has done both my hips this year and without him I wouldn’t even be walking. Other surgeons had dropped me, I can only gather my hips were to far gone and was told by them that I would end up with one leg longer than the other and I would never have a normal life again and would be in constant back pain because of how uneven my legs would be. Dr Kerr has made them completely even and I am back to my old self, painless and it’s not even 12 weeks since the second hip op. The aftercare and general care from his whole team has been amazing and he has gone above and beyond of what I was told by other doctors and I could not recommend him enough and to anyone who needs to see one of the best if not the best hip and knee surgeon in Perth as far as I’m concerned\nThankyou dr Kerr and his team for taking away years of pain and giving me back my old life!! I can not thank you enough❤️💐❤️"
      },
      {
        "id": "g11xtxw5789-TVhoWVUwRRAB",
        "author": "Heather Fife",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11xtxw5789",
        "text": "I had a total knee replacement performed by David Kerr at Midland Hospital on 23rd March 2026. The operation went exceptionally well and I have made a remarkable and quick recovery thanks to the expertise and brilliant skills of David and his team.\nDavid was highly professional and put me at ease and answered any questions I had. He has the best bedside manner I have ever encountered. He is friendly and approachable and personable and I can highly recommend him as the best knee surgeon in Perth."
      },
      {
        "id": "g11xtxw5789-YUhCbmRHYxAB",
        "author": "Rosanna Shepherd",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11xtxw5789",
        "text": "As a patient of Dr Kerr and his team I couldn't have been in better care. Dr Kerr seems to care for his patients deeply and I was impressed by his kindness and humour. And, of course most of all, the outcome of the operation couldn't have been any more successful. Up and about in what seemed to be no time with no pain, which surprised me. Totally recommend his practice and all the care I have had all round at St John of God in Midland."
      },
      {
        "id": "g11xtxw5789-YnpoNU1XYxAB",
        "author": "Dakota Mccarthy",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11xtxw5789",
        "text": "I highly recommend Dr. Kerr. From the start, he was friendly, easy to talk to, and took the time to explain all of my options clearly. He made me feel comfortable and confident throughout the whole process.\n\nI’ve felt really well looked after by Dr. Kerr and his team, and the care I’ve received has been amazing. Everyone has been supportive, professional, and genuinely caring.\n\nI’m very grateful for everything they’ve done and wouldn’t hesitate to recommend Dr. Kerr to anyone needing a great surgeon."
      },
      {
        "id": "g11xtxw5789-V25Obk9VRRAB",
        "author": "Christine",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11xtxw5789",
        "text": "I had left knee arthroscopy surgery with Dr David Kerr in December 2025. From the first appointment, right through to the day of surgery and at my post operative appointments Dr Kerr and his team were amazing. Dr Kerr always took the time to explain the treatment options in detail and provided a thorough explanation around the surgery and the expected outcomes. He is a very caring and understanding doctor who only wants the best outcomes for his patients. He was kind and always understanding and was happy to answer any questions or queries I had. I have had a fantastic result from knee arthroscopy surgery and cannot thank Dr Kerr and his team enough!! Before the surgery I was in quite a lot of pain and had a very unstable knee with a marble-sized loose body floating around in the knee joint, this caused issues with locking and a general feeling of instability. Dr Kerr was able to remove the loose body, tidy up some small tears in the meniscus and release the patellofemoral ligament to allow more mobility in the knee joint. I am now five months post surgery and my knee feels amazing, strong and stable and with very little pain. It has allowed me to get back to doing the activities I enjoy, swimming and walking and to live life again. I would definitely highly recommend Dr David Kerr as he is a very experienced, professional and caring doctor."
      },
      {
        "id": "g11xtxw5789-VmpoZlFrRRAB",
        "author": "John Rompotis",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11xtxw5789",
        "text": "I was referred to Dr Kerr after a seriously impacting my big toe.\nWas expecting to be in surgery later this week, but was pleasantly surprised by David's prudent and conservative approach to my injury. After carefully detailing his diagnosis, showing me my Xray, and explaining in patient friendly language, what we were looking at, I came away from my appointment, grateful to be in the hands of a competent, caring and ethical professional."
      }
    ]
  },
  "david-graham": {
    "listings": [
      {
        "key": "/g/11rk343_jy",
        "name": "Dr David Graham",
        "address": "West Coast Orthopaedic Centre, Suite 213/25 McCourt St, Subiaco WA 6008",
        "rating": 4.1,
        "reviewCount": 8,
        "url": "https://maps.google.com/?cid=10073102077218996601",
        "primary": true,
        "placeId": "ChIJGWvlR9whOSoReUHjOvjYyos",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJGWvlR9whOSoReUHjOvjYyos"
      }
    ],
    "reviews": [
      {
        "id": "g11rk343_jy-UVhOcmNXYxAB",
        "author": "Majid Salemi",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11rk343_jy",
        "text": "I had shoulder reconstruction with Dr. David at Bentley Hospital last year. He is an exceptional, knowledgeable, and caring surgeon with great professionalism and patience. I highly recommend him and trust his judgement completely. Thank you, David, for everything."
      },
      {
        "id": "g11rk343_jy-ROGRmM0VnEAE",
        "author": "tony brenz-verca",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11rk343_jy",
        "text": "Absolutely rapt with his work on my shoulder .\nFirstly some clean up work then a full reverse replacement .\n6 weeks later and going from strength to strength\nThanks"
      },
      {
        "id": "g11rk343_jy-ndy1Ta0V3EAE",
        "author": "Billy Jones",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/11rk343_jy",
        "text": "Absolutely ego manic ! Completely buggered up my shoulder in my operation then admitted that he shaved too much bone on rotator cuff but nothing he can do ! Didn’t believe any other scan or mri reports thought he knows everything keep away from this greedy clown 🤡"
      },
      {
        "id": "g11rk343_jy-4NVllWkNnEAE",
        "author": "Brendan Grant",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11rk343_jy",
        "text": "Great surgeon. Very particular and makes sure things are done properly. Nice guy, easy to relate to and explains things well.\nTop job fixing my banged up shoulder."
      },
      {
        "id": "g11rk343_jy-oMUttMVp3EAE",
        "author": "Daphne Daley",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11rk343_jy",
        "text": "This young man is caring, knowledgeable and a perfectionist, he wants the best outcome for his patients regardless of how challenging their problems are. His team is so supportive, I could never trust anyone as much as this man! Thank you so much! You are very special"
      },
      {
        "id": "g11rk343_jy-1eXB5aWZREAE",
        "author": "Mark.K",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11rk343_jy",
        "text": "Dr Graham was exemplary in dealing with my non-union injury. His staff were very efficient and helpful. He was straight talking and very upfront with the operation.\nSurgery went well and recovery is progressing well.\nI can highly recommend him if you need surgery done."
      }
    ]
  },
  "patrick-michalka": {
    "listings": [
      {
        "key": "/g/11dxbwlk2h",
        "name": "Dr. Patrick Michalka MBBS FRACS",
        "address": "Ste 12/57 Shenton Ave, Joondalup WA 6027",
        "rating": 5,
        "reviewCount": 8,
        "url": "https://maps.google.com/?cid=17608581611775876772",
        "primary": true,
        "placeId": "ChIJW_j-GGhTzSsRpF5ggK4_XvQ",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJW_j-GGhTzSsRpF5ggK4_XvQ"
      }
    ],
    "reviews": [
      {
        "id": "g11dxbwlk2h-ZUc5eFVXYxAB",
        "author": "Helen Douglas",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11dxbwlk2h",
        "text": "I consulted Dr. Michalka regarding my son’s shoulder issues after receiving a recommendation from a colleague.\nHis staff at the Claremont rooms were efficient and pleasant to deal with and my experience was excellent - he is great with kids, really informative and kind.\nHighly recommended as a specialist orthopaedic surgeon."
      },
      {
        "id": "g11dxbwlk2h-WjFZd05uYxAB",
        "author": "Maggie Horsburgh",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/11dxbwlk2h",
        "text": "I had both my shoulder surgery and also a ganglion in my hand done at the same time. Very good surgeon with a good manner. Friendly staff."
      },
      {
        "id": "g11dxbwlk2h-UVVaYWEzYxAB",
        "author": "Micky Green",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11dxbwlk2h",
        "text": "Very knowledgeable, and a more conservative surgeon that goes above and beyond to help people in need. Thanks Dr Patrick."
      },
      {
        "id": "g11dxbwlk2h-CeG9uYVJ3EAE",
        "author": "Terence Krummel",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11dxbwlk2h",
        "text": "I fell of my bike cycling @ Rottnest last week @ gashed my leg.\nI’m a male of 80 years. A man came running to help me.\nHe told me his name was Patrick & a Doctor. He went & fetched his medical kit & with the help of another passer by stemmed the bleeding & applied dressing & pressure bandage.\nThe Dr was so caring I couldn’t believe my luck when the other passer by said she was a nurse.\nPatrick helped me get back to my accommodation & made sure I was feeling OK.\nI later found out his surname.\nWhat a beautiful man he is."
      },
      {
        "id": "g11dxbwlk2h-NVppLThnRRAB",
        "author": "Lucinda Casey",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11dxbwlk2h",
        "text": "Dr Patrick Michalka saved me. Although his main area of specialty is hand surgery this incredible surgeon decided that he would try and in doing so saved my leg from possible amputation on multiple occasions. I don’t know how I can ever thank him enough.\nI’m a landscape gardener now & climb trees .. with both legs."
      },
      {
        "id": "g11dxbwlk2h-ek1IS29nRRAB",
        "author": "Roslyne Watt",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11dxbwlk2h",
        "text": "I never got a chance to thank him for doing an excellent job on my humerus last August.\nMy healing time was good and the scar is brilliant."
      },
      {
        "id": "g11dxbwlk2h-NMzRhUE13EAE",
        "author": "Loukia Avraamides",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11dxbwlk2h",
        "text": "Dr Patrick Michalka is a great surgeon and a good man. Glad I chose him to do my hand surgery."
      }
    ]
  },
  "michael-ledger": {
    "listings": [
      {
        "key": "/g/11bvt47yd4",
        "name": "Dr Michael Ledger - Shoulder and Knee Orthopaedic Specialist",
        "address": "3/85 Monash Ave, Nedlands WA 6009",
        "rating": 5,
        "reviewCount": 7,
        "url": "https://maps.google.com/?cid=14758161626659511210",
        "primary": true,
        "placeId": "ChIJuyHwHfykMioRqlvXrs6Fz8w",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJuyHwHfykMioRqlvXrs6Fz8w"
      }
    ],
    "reviews": [
      {
        "id": "g11bvt47yd4-bUlpNXVBRRAB",
        "author": "Judith Arthurs",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11bvt47yd4",
        "text": "My husband Geoff had 2 total knee replacements last year and he is a new man! He is now pain free and walks for long distances without any problem at all, would highly recommend Dr Ledger."
      },
      {
        "id": "g11bvt47yd4-CcWZyWURREAE",
        "author": "Matthew Mego",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11bvt47yd4",
        "text": "Been 11 years now since I got my ACL from a netball dislocation\nStill going strong and feeling great\nI have since done the other knee in the same way and heading straight back to the best\nThanks again for your help"
      },
      {
        "id": "g11bvt47yd4-LU1hOHhBRRAB",
        "author": "Brodie",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11bvt47yd4",
        "text": "Mike fixed both my knees in my early 30's and took me from \"I can't walk\" to \"I'm back shredding pow\" within a few months. Recently, as a result of pow shredding in Switzerland which resulted in a nasty fall and broken tibia, Mike removed the metal plate and 7 pins from my leg. He's done a very neat job, a few weeks on and I'm already doing little beach runs and gym rehab. Thank Mike. See you on the slopes mate!"
      },
      {
        "id": "g11bvt47yd4-Nc0xQME93EAE",
        "author": "David Dukes",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11bvt47yd4",
        "text": "Great surgeon. Explained everything clearly. Highly recommended!"
      }
    ]
  },
  "matthew-scaddan": {
    "listings": [
      {
        "key": "/g/11c5h2mhvy",
        "name": "Dr Matthew Scaddan",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 3,
        "reviewCount": 6,
        "url": "https://maps.google.com/?cid=16626894866495077435",
        "primary": true,
        "placeId": "ChIJCWj-3DikMioRO3w0u8mYvuY",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJCWj-3DikMioRO3w0u8mYvuY"
      },
      {
        "key": "/g/1tg97s20",
        "name": "Coastal Orthopaedic Group",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.5,
        "reviewCount": 33,
        "url": "https://maps.google.com/?cid=9059753005658017788",
        "primary": false,
        "shared": true,
        "placeId": "ChIJOzv53DikMioR_A8Gp1u1un0",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJOzv53DikMioR_A8Gp1u1un0"
      }
    ],
    "reviews": [
      {
        "id": "g11c5h2mhvy-ZVdzemFVRRAB",
        "author": "Mandy Hahn",
        "rating": 1,
        "date": "2026-09-10",
        "listing": "/g/11c5h2mhvy",
        "text": "Get a second opinion.."
      },
      {
        "id": "g11c5h2mhvy-WkRnMmVGRRAB",
        "author": "Deb Taylor",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11c5h2mhvy",
        "text": "Had ankle stabilization due to two straps that had snapped. Physio misdiagnosed, podiatrist said not to bother. My new physio who I am working with thinks that he can now get me running again. Matt is great, his team of nurses are also super helpful and on their game. Matt came highly recommended and now I recommend him too. The one star review must have been an unfortunate set of circumstances. My only negative was the food at Bethesda is not great but the view of the river made up for it and the team there also."
      },
      {
        "id": "g11c5h2mhvy-YLWFlT0Z3EAE",
        "author": "Warren Gomer",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/11c5h2mhvy",
        "text": "Very disappointing very quick to dismiss after issues arose from surgery. Now left with compartment syndrome and chronic pain in foot and ankle. Do not recommend"
      },
      {
        "id": "g1tg97s20-1MU12TkxnEAE",
        "author": "Robert Aleksic",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tg97s20",
        "text": "Had an appointment with Dr Matthew Scaddan; very professional, he explained my injury in a clear and easy to understand manner, listened to my explanation of my injury and current state, took what I said into consideration, and worked with me to come to a good resolution. Highly recommend."
      },
      {
        "id": "g1tg97s20-bnVEbnN3RRAB",
        "author": "Geoff Tinnock",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tg97s20",
        "text": "Needed to have surgery after rupturing my Achilles. Contacted Coastal Orthopedic about getting this done. Dr Scaddan was wonderful, he put all my fears to rest and got me in for surgery asap. I really recommend this group and especially Dr Scaddan."
      },
      {
        "id": "g11c5h2mhvy-GbVllbVdnEAE",
        "author": "Minxy",
        "rating": 1,
        "date": "2024-10-10",
        "listing": "/g/11c5h2mhvy",
        "text": "Suggested to cut achilles when all that was required was a bone fragment needed to be removed. Had it successfully removed by another surgeon. Who Never touched my Achilles"
      },
      {
        "id": "g1tg97s20-OWI3TGt3RRAB",
        "author": "Steph J",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tg97s20",
        "text": "Dr Scaddan was wonderful. Took the time to answer all of my questions, listened to my concerns and had a very pleasant manner. Did not feel rushed and walked away feeling very well informed with confidence in his care. The team at Coastal Orthopaedics were also very helpful and pleasant. A breath of fresh air in terms of visiting a specialist practice."
      },
      {
        "id": "g11c5h2mhvy-b3N5U19nRRAB",
        "author": "Dirk Klicker",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11c5h2mhvy",
        "text": "Had foot surgery with Dr Scadden. Nice chap. Knows his stuff. Did a great job. Foot as good as new 👏🫶🏻🫶🏻 Staff were great too. Very professional. Can’t go wrong with Dr Scadden."
      },
      {
        "id": "g11c5h2mhvy-eHRQZHhBRRAB",
        "author": "ashling devittt",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11c5h2mhvy",
        "text": "Mr Scaddan and his team worked efficiently and effectively on my second ruptured achilles in three months. They made myself and my injury feel validated when the public health system did not. I can’t thank him enough for giving me the opportunity to finally heal and walk normally again. 10/10 recommend Dr Scaddan!"
      }
    ]
  },
  "benjamin-witte": {
    "listings": [
      {
        "key": "/g/11cn3sqy_b",
        "name": "Dr Benjamin Witte",
        "address": "3 Barry Marshall Parade, Murdoch WA 6150",
        "rating": 5,
        "reviewCount": 4,
        "url": "https://maps.google.com/?cid=12258351662670695359",
        "primary": true,
        "placeId": "ChIJTQ4KjbaiMioRv0tOweNpHqo",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJTQ4KjbaiMioRv0tOweNpHqo"
      }
    ],
    "reviews": [
      {
        "id": "g11cn3sqy_b-McktMQUZREAE",
        "author": "D Liam",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11cn3sqy_b",
        "text": "Many thanks to Dr Ben Witte. Ben has been amazing from day 1 and I'm really pleased with the outcome of my ACL knee reconstruction surgery. Being my first operation (and hopefully last), I felt reassured going into the surgery and was truely in safe hands. I was discharged confidently and had a great experience end to end with all staff involved too."
      },
      {
        "id": "g11cn3sqy_b-X1BLYm1RRRAB",
        "author": "Robert Pavlov",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11cn3sqy_b",
        "text": "A real professional and speciliast. Ben will gladly cover in great detail the biomechanics of your knee issue and any alternatives to surgery. Truly cares about what's best for the patient. Thanks Ben."
      },
      {
        "id": "g11cn3sqy_b-bkxHM19RRRAB",
        "author": "Marion Ramsey",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11cn3sqy_b",
        "text": "Dr Witte performed bilateral knee replacements on me 6 years ago. Best thing l have ever done!"
      }
    ]
  },
  "nicholas-calvert": {
    "listings": [
      {
        "key": "/g/11vxkjr_jy",
        "name": "Dr Nicholas Calvert",
        "address": "Perth Orthopaedics and ports Medicine Centre, Level 1/1 Havelock St, West Perth WA 6005",
        "rating": 5,
        "reviewCount": 4,
        "url": "https://maps.google.com/?cid=9105589228971403702",
        "primary": true,
        "placeId": "ChIJyVh2Fy-lMioRtql2BymNXX4",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJyVh2Fy-lMioRtql2BymNXX4"
      }
    ],
    "reviews": [
      {
        "id": "g11vxkjr_jy-zOExtbUxBEAE",
        "author": "Troy Davey",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11vxkjr_jy",
        "text": "The Man is a Saint, himself and his amazing team deserve the Gold Medal 🥇in hip n bone surgery and empathy..\nI feel like jumping for joy I feel so good, but you told me not too...\nCan't thank them all enough."
      },
      {
        "id": "g11vxkjr_jy-VXpseFMwRRAB",
        "author": "vanessa cricklewood",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11vxkjr_jy",
        "text": "I had a total knee replacement 6 weeks ago and I'm doing really well. My new knee is awesome and I'm breezing through my recovery. This is the surgeon to see if you want a fabulous result. Highly recommend!"
      }
    ]
  },
  "omar-khorshid": {
    "listings": [
      {
        "key": "/g/1q5hrjnk7",
        "name": "Dr. Omar Khorshid",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4,
        "reviewCount": 4,
        "url": "https://maps.google.com/?cid=4170364776382526255",
        "primary": true,
        "placeId": "ChIJOzv53DikMioRL_MUKKsc4Dk",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJOzv53DikMioRL_MUKKsc4Dk"
      },
      {
        "key": "/g/1tg97s20",
        "name": "Coastal Orthopaedic Group",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.5,
        "reviewCount": 33,
        "url": "https://maps.google.com/?cid=9059753005658017788",
        "primary": false,
        "shared": true,
        "placeId": "ChIJOzv53DikMioR_A8Gp1u1un0",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJOzv53DikMioR_A8Gp1u1un0"
      }
    ],
    "reviews": [
      {
        "id": "g1tg97s20-YzFKeVVrRRAB",
        "author": "Mick Crossan",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tg97s20",
        "text": "Over a 10 year span I have had full replacement both hips and R knee. Dr Omar Khorshid has been my \"Go To\" Orthopaedic Surgeon 😷 for all procedures. He is wonderful and supported by his amazing team I'm so grateful for the work done, the care received and the quality of life I can now enjoy.\nThanks Dr Khorshid and Team 🙏"
      },
      {
        "id": "g1q5hrjnk7-RemFxNWFBEAE",
        "author": "Sarah",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1q5hrjnk7",
        "text": "Dr Khorshid found that my knee pain I had for many years that made me collapse and not be able to walk, is due to the fact that I have twisted femurs and no other specialist saw this. I got knee alignment surgery, which was done by Dr Khorshid himself, and the scars are almost invisible and the surgery helped immensely. It's been 3 years now and I still recommend Dr Khorshid to everyone I know.\n\nThank you for giving me the ability to walk again!"
      },
      {
        "id": "g1q5hrjnk7-ZDNGUFQyYxAB",
        "author": "Esther Saunders",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1q5hrjnk7",
        "text": "Amazing surgeon. I have minimal post-operative pain or swelling after total knee replacement. This enables my post-operative exercises to be completed as recommended with no issues. I’m very grateful for Dr Khorshid’s skill and professionalism."
      },
      {
        "id": "g1q5hrjnk7-ocmZDRVVnEAE",
        "author": "Al N",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/1q5hrjnk7",
        "text": "Terrible"
      },
      {
        "id": "g1q5hrjnk7-HMWF2ZmVBEAE",
        "author": "Derel",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1q5hrjnk7",
        "text": "Thank you so much for the hip replacement surgery. Just coming up for three weeks from surgery. Pain free for the first time in a couple of years. A great surgeon and clear communicator. Told me exactly what to expect. Thanks again John Moriarty"
      }
    ]
  },
  "brendan-ricciardo": {
    "listings": [
      {
        "key": "/g/11cs9_pt5z",
        "name": "Dr Brendan Ricciardo",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 3.7,
        "reviewCount": 3,
        "url": "https://maps.google.com/?cid=17992227405991844427",
        "primary": true,
        "placeId": "ChIJQwwYAp9G2isRSxoxtH87sfk",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJQwwYAp9G2isRSxoxtH87sfk"
      }
    ],
    "reviews": [
      {
        "id": "g11cs9_pt5z-ObTZPMUlREAE",
        "author": "Julie Bevan",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11cs9_pt5z",
        "text": "My GP recommended Brendan Ricciardo for shoulder surgery. I had put this off for 10 years and was very reluctant to proceed previously. My initial appointment with Brendan was very considered and not rushed. I decided to proceed based on the latest facts. The operation went well, the recovery was as advised and the support staff were happy to answer questions on the way. Six months later I felt great and was back to ‘normal’ ie sport etc. However almost one year on and my shoulder is better than it’s ever been- full strength and full range of motion! I had no idea how bad it was before. I also had no complications whatsoever. Thanks to Brendan and his team. I’m very happy."
      },
      {
        "id": "g11cs9_pt5z-4XzlHRU1REAE",
        "author": "Carol Penn",
        "rating": 1,
        "date": "2020-10-10",
        "listing": "/g/11cs9_pt5z",
        "text": "Bit expensive for what you get then further treatment expensive too when on Age Pension."
      }
    ]
  },
  "eammon-mcloskey": {
    "listings": [
      {
        "key": "/g/1tctzvjr",
        "name": "Dr McCloskey Eamonn",
        "address": "25 McCourt St, Subiaco WA 6008",
        "rating": 4,
        "reviewCount": 16,
        "url": "https://maps.google.com/?cid=1291724480047343951",
        "primary": true,
        "placeId": "ChIJdZ-2ThWlMioRT-nlHJIg7RE",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJdZ-2ThWlMioRT-nlHJIg7RE"
      }
    ],
    "reviews": [
      {
        "id": "g1tctzvjr-ellXaXNRRRAB",
        "author": "John Davies",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tctzvjr",
        "text": "Totally trust Eamon"
      },
      {
        "id": "g1tctzvjr-EbXVIZ2JnEAE",
        "author": "Dan Whyte",
        "rating": 1,
        "date": "2024-10-10",
        "listing": "/g/1tctzvjr",
        "text": "Dismissive and arrogant,no empathy what so ever,just in it for the money,not helpfully at all,knowing I had to drive from the country to be told he couldn't help,but still charged an arm and a leg,\nDo not recommend"
      },
      {
        "id": "g1tctzvjr-Ed3F6eEFnEAE",
        "author": "Techno Tash",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tctzvjr",
        "text": "I had two spinal surgeries in 2008 by Dr McCloskey and was given such relief and ability to return to a pain free life and rehab back to work and a social life. It’s 13 years later with regular exercise and stretching I’m living a normal life."
      },
      {
        "id": "g1tctzvjr-WenNhX1B3EAE",
        "author": "Ronald Sammut",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tctzvjr",
        "text": "Dr McCluskey is an excellent surgeon with a very direct & professional manner.\nI attended fully expecting surgery to be my only option, however, with his guidance I have avoided surgery & my symptoms have fully resolved.\nCannot recommend highly enough."
      },
      {
        "id": "g1tctzvjr-kbmFER1BREAE",
        "author": "Howard Kennard",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tctzvjr",
        "text": "I presented with strong left leg pain and after extensive discussion with Mr McCloskey, decided to go the spinal fusion route. Mr McCloskey was very helpful to outline possible outcomes and risks and his depth of knowledge was inspiring. A truly great asset to the Perth medical community. He took extra care in the follow up and was extremely helpful in identifying recovery issues. A truly great man."
      },
      {
        "id": "g1tctzvjr-ycEppQWF3EAE",
        "author": "keith martin",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tctzvjr",
        "text": "I am just over eighty. I had a lumbar decompression fusion eight years ago.The result was unbelievable. By doing all the exercises etc I was able to drive a two day trip to Karratha within six months (with no pain at all.) I wanted to get back into athletics seriously but progress was slow for two years because I kept making excuses. I decide to train without excuses.\nSix years after the Op I won three gold medals in sprints at the State Masters Athletic Championships. Obviously he is very good.\nMy initial impression of Mr McCloskey was that he was not there to get my money. He did not want to operate without trying something less invasive. This gave me a lot of confidence .\nThe follow up other specialist treatments did not work.\nI was very surprised to read the review that he did not want to operate on that person. To me it seems she/he did not listen to him.\nI cannot thank Dr/Mr McCloskey enough for the work he did.\nI still have no back or resulting problems\nKeith Martin"
      },
      {
        "id": "g1tctzvjr-aM05Tbld3EAE",
        "author": "Virginia Foreman",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tctzvjr",
        "text": "Clear precise and direct honest explanation, 👌 I had L3 to S1 fusion. I am out of pain and very grateful for the relief for how ever long it lasts."
      },
      {
        "id": "g1tctzvjr-lLXZpdEhBEAE",
        "author": "daviswestswan",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/1tctzvjr",
        "text": "Condescending, lacks empathy, poor listener, poor communicator!!\nDespite full X-rays and MRI I was not given any explanation of why I'm having constant back and hip pain and have trouble walking, apart from \"its just a bit of mild arthritis\" He decided I was looking for quick fix surgery, and he told me to get physio. ( I have had 10 years of treatment from various physios but nothing really helps and its getting worse ) Waste of time and money!!!"
      },
      {
        "id": "g1tctzvjr-wazRiSEJBEAE",
        "author": "Lisa Ciccarelli",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/1tctzvjr",
        "text": "Refused any surgery after 4 years of agony. Was dismissive and arrogant. Even on writing a letter to complain he was unapologetic. Thankfully my partner found another amazing surgeon who operated and took my pain away and gave me my life back. My surgeon apologized for the neglect I had suffered in Mc Closkey’s hands."
      },
      {
        "id": "g1tctzvjr-tc0o3SUF3EAE",
        "author": "Brian Arenson",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tctzvjr",
        "text": "What a fantastic spinal surgeon ,dedicated to his patients.\nMr. McCloskey is concerned about his patients and is caring and nurturing. He explains one's condition clearly and makes it easy to comprehend.\nI have had a cervical laminectomy for stenosis ( narrowing of the spinal cord) and a lumbar laminectomy as well.\nDiane , his secretary is always sweet and helpful .\nThank you ."
      },
      {
        "id": "g1tctzvjr-LTZqM2p3RRAB",
        "author": "Phil Rigg",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1tctzvjr",
        "text": "Just a wonderful caring health professional always incredibly respectful and thorough. I would recommend him to anyone who needs brilliant care and magnificent skills."
      },
      {
        "id": "g1tctzvjr-cFlQSi1RRRAB",
        "author": "Tao Tait",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1tctzvjr",
        "text": "Couldn't walk and MRI wasn't showing up the problem. After visiting a few doctors I was referred to Dr. McCloskey who ordered a new high res MRI on the first day I met him and he found the damaged disc and nerve, the prolapse turned out to be massive. He operated within a week and 4 months later and I'm up and about working again. Brilliant, highly recommend."
      },
      {
        "id": "g1tctzvjr-waThMaFZnEAE",
        "author": "Chris White",
        "rating": 1,
        "date": "2019-10-10",
        "listing": "/g/1tctzvjr",
        "text": "Has NO empathy for patients. Belittling my partner who was asking for help, as he is in constant crontic pain for the past 12 months."
      },
      {
        "id": "g1tctzvjr-cHBmb2tBRRAB",
        "author": "Niklas Hinz",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1tctzvjr",
        "text": "Had a workers compensation regulated L5/S1 discectomy and laminectomy. Due to my good injury management team I was able to be reviewed by Dr. Mccloskey and undergone surgery within a 4 weeks time frame. Dr. Mccloskey took his time to explain all the possible surgery opportunities to me. He saw the need for surgery as stated already in my referral and offered it, but didn't force me into a decision. It was the best decision to be made. After 8 month in pain, and intense pain levels over the past 2 month, without being able to stand straight in the morning, the post operation pain (after 4 days) feels like peanuts compared to before surgery. I've even managed to step down on my Painkillers which contained Tramadol, Panadol, Lyrica. Right now I'm only taking the Panadol. Dr. Mccloskey visited me pre surgery to calm me down and again to explain what we where doing that day. Had a same day visit once I was back in my room and another on the following day. I'll be reviewed in 4 week. Had to stay in Hospital for two nights. Today, (4 days after surgery) I feel as if I could run marathon, of course the aftermath still contains 4 weeks of rest and several month of physiotherapy to hopefully reach a full recovery. I can recommend Dr. Mccloskey to anyone with back issues. In my opinion, as his nurse stated right, in cases of back issues Dr. Mccloskey \"is the man\"."
      },
      {
        "id": "g1tctzvjr-RenRMWE1BEAE",
        "author": "kathy morley",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1tctzvjr",
        "text": "I had the pleasure of meeting Dr McCloskey in early May 2018. I had no movement in my left foot and the nerve pain was excrutiating. The surgery went amazingly and everything turned out exactly the way the Dr had explained. I was very sore for about 4 weeks but i have no pain or discomfort whatsoever now, and its been 10 weeks. I had a plan given to me for the pain medication which i followed explicitly. I would definitely recommend this surgeon and his staff were so helpful with appointments etc. I live in Mandurah and sometimes the traffic can be very busy especially if you are given really early appointments."
      }
    ]
  },
  "reza-salleh": {
    "listings": [
      {
        "key": "/g/1tfswgq8",
        "name": "Dr Reza Salleh",
        "address": "Ste 217/25 McCourt St, Subiaco WA 6008",
        "rating": 3.9,
        "reviewCount": 88,
        "url": "https://maps.google.com/?cid=614120921376554778",
        "primary": true,
        "placeId": "ChIJdZ-2ThWlMioRGv_IZ7nLhQg",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJdZ-2ThWlMioRGv_IZ7nLhQg"
      }
    ],
    "reviews": [
      {
        "id": "g1tfswgq8-VDA1NFgwRRAB",
        "author": "Ronny Ray",
        "rating": 5,
        "date": "2026-10-03",
        "listing": "/g/1tfswgq8",
        "text": "Dr. Reza Salleh is a superhero without a cape.\n​After being dismissed elsewhere, I came to him in the public system with a mistake someone else made on my leg—and he fixed it. While junior doctors tried their best, Dr. Salleh showed more genuine care, focus, and expertise in our first 10 minutes than the whole team combined.\n​When your mobility and life are on the line, you need someone who truly knows their stuff. Dr. Salleh is strong, direct, calls it as it is, and isn't afraid to advocate for you against injustice. I paid out of pocket, and he was worth every single cent. Professional, experienced, and deeply caring—I couldn't recommend him more highly."
      },
      {
        "id": "g1tfswgq8-TlVsNE5IYxAB",
        "author": "Gemma Trneny",
        "rating": 5,
        "date": "2026-10-03",
        "listing": "/g/1tfswgq8",
        "text": "dr selleh saved my mums life.\nafter seeing her lose hope from all the other doctors we have been to, seeing her hope come back from dr selleh has been amazing.\nfor the first time in a long time my mum feels like she can walk again. we cant thankyou enough🫶"
      },
      {
        "id": "g1tfswgq8-Ynpkek5tYxAB",
        "author": "Aaron Sargent",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/1tfswgq8",
        "text": "Absolutely recommend Dr Salleh. I needed some foot surgery and initially I was a little concerned with exactly how successful it would be. But after a good discussion with Dr Salleh he reassured me that what he'd do to help me would be successful. Now here I am 4 mths post op and I'm very happy with how it's turned out. Still some minor swelling and stiffness, but it's getting better every week. Can't wait to get the same surgery on my other foot. I highly recommend Dr Salleh for any foot or ankle surgery. He really cares for his patients and the success of their surgery not just initially but for their long-term future too."
      },
      {
        "id": "g1tfswgq8-TWprNFpHYxAB",
        "author": "Donna Staltari",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr. Salleh is not only highly skilled but also known as the best for good reason. I have had both feet operated on and could not be happier that he had been recommended to me.\nHe is also a gentle, wise and compassionate human being."
      },
      {
        "id": "g1tfswgq8-ZWpSNFMwRRAB",
        "author": "Ori Weiser",
        "rating": 1,
        "date": "2026-08-10",
        "listing": "/g/1tfswgq8",
        "text": "Rude! him and his staff..He does you a favour to respond as he's really busy..didn't help our daughter's broken ankle after two appointments and lots of $$ he actually \"fired\" us as clients..unreal"
      },
      {
        "id": "g1tfswgq8-WDI1WFoxRRAB",
        "author": "Samir Neupane",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/1tfswgq8",
        "text": "I highly recommend Reza Sallah. I saw him for my ankle strain after another surgeon recommended surgery, but Dr. Sallah truly listened to my concerns and provided honest, supportive, and professional care. He made me feel comfortable and confident throughout the process. One of the best surgeons in Perth in my experience."
      },
      {
        "id": "g1tfswgq8-YmxNMVkwRRAB",
        "author": "Heather Weskin",
        "rating": 1,
        "date": "2026-03-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Reza\n“It’s not that I’m saying you’re lying but I am a man of science and the scan says your ankle is fine”\n\nMe *leaves in tears\n\nDifferent specialist\n“Cannot tell exactly but there is definitely something wrong with your syndesmosis but we won’t know until we operate.”\n\nResult- syndesmosis reattached, ulcer cut from bone, spur removed, arthroscopy removed piece of bone and a tightrope now holds my ankle together.\n\nA waste of my time and money."
      },
      {
        "id": "g1tfswgq8-ZDBGelEzYxAB",
        "author": "Mandy Stewart",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Salleh is a highly skilled surgeon, with obvious extensive experience evident from the very first assessment.\nHis manner put me at ease and I felt confident in my decision to seek his help.\n\nBoth my feet had 'problems' with surgery the only option. The surgical issues with one foot being more complex and caused by a different provider; however Dr Salleh offered options to improve function.\n\nMy surgeries went very well with an agreed recovery period in between and there were no issues at all with my recoveries. If only I'd seen him sooner!\n\nWhen I saw Dr Salleh at the last review consult, my simple 'thank you' didn't seem enough when I considered the difference he had made to my future.\n\nI'm looking forward to continuing a very active lifestyle and have no hesitation in recommending Dr Salleh and his Admin Team at St John of God, in Subiaco."
      },
      {
        "id": "g1tfswgq8-czc2Um1nRRAB",
        "author": "Family Walters",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Great Surgeon and a genuine nice man."
      },
      {
        "id": "g1tfswgq8-VWxKdmVFRRAB",
        "author": "John H Collins",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Salleh is a plain talking medico who provides appropriate advice and treatment."
      },
      {
        "id": "g1tfswgq8-Nk5EMzdRRRAB",
        "author": "Ms. Me",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr. Salleh standards have dropped dramatically, and his after care.He needs to treat ladies more respectfully! Especially if they’re married!"
      },
      {
        "id": "g1tfswgq8-ROGEyV2R3EAE",
        "author": "Sandro Monaco",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Salleh is useless , told me to go away nothing he could do , I went to a younger surgeon who did an ankle replacement and reconstruction , now walking with no pain , I wouldn’t take my dog to him ."
      },
      {
        "id": "g1tfswgq8-dUotZDlRRRAB",
        "author": "julieann barton",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I highly recommend Dr. Salleh. He is approachable and patient-focused, and his office staff is always helpful and accommodating, both on the phone and in rooms."
      },
      {
        "id": "g1tfswgq8-1cXJ5b1hREAE",
        "author": "upendra maganti",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I visited Dr Salleh today and he was kind enough to follow up with the radiology with the test results and to understand my pain in the shoulder and also in Ribs and answered my questions and treating me."
      },
      {
        "id": "g1tfswgq8-TW1GaWEzYxAB",
        "author": "Michelle G",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Can't fault Dr Raza.Had my first appointment today and really appreciated his straight non medical jargon and explaining things that I understood and so personable . Very rare to find this expertise delivered with such humanity in the medical industry and would not trust anyone else to my care. His reception staff were so welcoming and caring. Thank you x"
      },
      {
        "id": "g1tfswgq8-NDg3WWtBRRAB",
        "author": "L Mok",
        "rating": 4,
        "date": "2025-10-10",
        "listing": "/g/1tfswgq8",
        "text": "A very highly recommended experienced skilled orthopedic surgeon. Professor Salleh performed a rather complex surgery on my right foot and it is currently in the recuperative process and healing quite nicely.\nProfessor Salleh visited me everyday whilst I stayed in the hospital, even on his off duty days (weekend).\nProfessor Salleh fees are kept low, so everyone can access and afford his orthopedic surgeon skills. However, due to recent change of government laws there will be an upfront gap that would need to be paid in advance before the surgery can be scheduled.\nProfessor Salleh has been very professional, warm and very thorough orthopedic specialist doctor. I was kept informed of my whole surgery and the recovery process.\nI would also like to add the administration team at Professor Salleh’s clinic has been wonderful, they have all been very attentive to my concerns & queries and always provided the extra caring support when I need it.\nThank you so much Professor Salleh and Administration Team."
      },
      {
        "id": "g1tfswgq8-QbHFmN0FREAE",
        "author": "Alisha Wilde",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I recently had an ankle reconstruction. Cannot rate highly enough Dr Salleh and his team. Everyone was professional and caring. Dr Salleh has a great sense of humour and knows his stuff. Recovery from this surgery takes time and he was with me every step of the way. I am now pain free and extremely happy with the result. Highly recommend Dr Salleh."
      },
      {
        "id": "g1tfswgq8-bzZDVDVRRRAB",
        "author": "Marina Lovegrove",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I was referred to Dr Salleh by my obstetrician after breaking my ankle just prior to giving birth. He saw me very quickly whilst on the ward (even on his weekend!) and scheduled my surgery a week later. I can't thank Dr Salleh enough for helping me so promptly and advocating for me to stay with my newborn when transferred to the orthopaedic ward. He is clearly very skilled at what he does and my ankle has had a successful recovery. I would not hesitate in recommending Dr Salleh to others. He has a funny sense of humour too.\nThank you Dr Salleh"
      },
      {
        "id": "g1tfswgq8-YkhkZlltYxAB",
        "author": "Julian Bunko",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Salleh operated on me in July 2024 to re-attach my left achilles tendon to the heel. It was 50% detached and also torn several centimetres up the tendon. I couldn't be more happy with the result. I appreciated his operating skill, aftercare, concern for my progress, and his honesty in advising that I didn't need any physio. He has a nice manner and it was always pleasant to see him, which makes a big difference when you have to go back multiple times for aftercare."
      },
      {
        "id": "g1tfswgq8-OXEzRnBBRRAB",
        "author": "Katya",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Very knowledgeable professional doctor"
      },
      {
        "id": "g1tfswgq8-aEpTeTBnRRAB",
        "author": "Dawn (Duck)",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Very caring, very thorough, wait times not to bad\nAll staff are now very polite and understanding."
      },
      {
        "id": "g1tfswgq8-a2RYd29RRRAB",
        "author": "Alina",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Great doctor! Saw him for my broken ankle today. He gave me some good advice and arranged a free MRI the next day."
      },
      {
        "id": "g1tfswgq8-bnNEcm5RRRAB",
        "author": "Victoria Price",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Leader in his field.\nExcellent Surgeon.\nRazor sharp humour.\nHighest level of care, compassion and attention.\nWho ever thought bilateral bunion surgery could be such a great experience!"
      },
      {
        "id": "g1tfswgq8-3LWYtNE1REAE",
        "author": "Nerinderjeet Kaur",
        "rating": 1,
        "date": "2024-10-10",
        "listing": "/g/1tfswgq8",
        "text": "This doctor is only concerned about making money. Has no empathy towards patients. Does not do his job and expects patients to come back and pay more repeatedly for his lack of time to complete his job. I was sent to this Dr to get an opinion about my condition, however he didn't have time to look at my scans beforehand and sent me for another MRI, after that called to tell me what i already knew from the previous MRI report. Didn't bother to give me suggestions on what should be done. Upon contacting his receptionist, was told to come in and pay again for another appointment. Ridiculous. Waste of time and money for a useless service."
      },
      {
        "id": "g1tfswgq8-aEs2Vmh3RRAB",
        "author": "Glenda Stephens",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I Recently had knee surgery the care I've been given before and after has been fantastic. From the reception staff at Dr Salleh rooms to my operation and after appointments..\nI'm recovering really well no issues\n.\nThank you Dr Reza Salleh and staff."
      },
      {
        "id": "g1tfswgq8-GNDdTeVhBEAE",
        "author": "Deb Cooke",
        "rating": 2,
        "date": "2024-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Unfortunately a very negative experience needing corrective surgery due to infection after the operation. I was required to pay for after care following my surgery upfront which I did not receive as Dr Sallah was on vacation overseas . Another surgeon had to remove my toe pins due to the infection. The whole experience was negative and painful. I actually asked for a refund considering there was no after care and I had paid out $1000., but there was no response from Dr Salleh. I still needed corrective surgery on my toes following my experience with Dr Sallah and chose a podiatric surgeon a year later who was fabulous with thankfully a great result."
      },
      {
        "id": "g1tfswgq8-OU1MV2l3RRAB",
        "author": "Mon B",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Posting here due to the reviews on here that are not an accurate reflection of this practice.\n\nI have a fractured ankle and was struggling to get specialised help. I called this number because it was the next one on the list, and im so glad I did. The administrator was not only supportive she was very empathetic. She gave me advice and then got me in as soon as she could to see Dr Salleh.\n\nMy experience with Dr Salleh was of the highest quality. He went above and beyond to get me an xray same day. He explained everything that was happening with my ankle and did a physical examination.\nHe was warm and friendly and did not rush even though I could see he was busy.\n\nI can not speak to the negative reviews on this site, but I must assume that they saw a completely different person at a completely different practice!\n\nI cannot commend this Dr and his staff enough for their high quality of work and their incredibly friendly demeanour."
      },
      {
        "id": "g1tfswgq8-Ib3VXN0h3EAE",
        "author": "Amber Sky",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Salleh is amazing, kind hearted, very good at what he does, down to earth and his staff are so kind. I’ve had only the best experience ! Very very wonderful people and so much skill. I’ve seen him for foot surgery and will see him again in two weeks to swap the cast. To you all, thank you !!!!!!"
      },
      {
        "id": "g1tfswgq8-c2FUczBRRRAB",
        "author": "Pam S",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tfswgq8",
        "text": "My Ankle Fusion .On 22-2-24 I walked into SKG hospital finally to have an ankle fusion .I had chickened out on this many times prior to this day ,after suffering a broken ankle 40 odd years ago.It was always try these new pain killers,compression bandages,new shoes (very expensive)shopping centre massages nothing worked .It was recommended I see Dr Reza Salleh It is now September seven months after my ankle fusion I have no pain I am walking normally and enjoying my senior years. Dr Reza Salleh is a brilliant surgeon plus he is a wonderful human being. John McKay."
      },
      {
        "id": "g1tfswgq8-eGNmcnpRRRAB",
        "author": "Julie Baker",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I found Dr Salette, very polite, punctual and professional. A very friendly person."
      },
      {
        "id": "g1tfswgq8-eTZmYTNnRRAB",
        "author": "Alec D'antoine",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I took my grandmother here for a check up on her ankle the two lady’s at the counter was polite, patent and very welcoming and doctors was very helpful and also provide me with tips and exercises to help her with a speedy recovery"
      },
      {
        "id": "g1tfswgq8-NEpQU2lnRRAB",
        "author": "Troy Hynam",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Do not use this surgeon! After receiving a dressing down for answering a question. I was aloogised to later. Any surgeon doesn't enjoy 5 stars run for the hills! Sorry not a good dr."
      },
      {
        "id": "g1tfswgq8-aeWFXTlRREAE",
        "author": "Adam Pickering",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tfswgq8",
        "text": "A great straight to the point surgeon. Has done an amazing job on my completely ruptured calf. If I ever need surgery of a similar kind, I know where I'll be going."
      },
      {
        "id": "g1tfswgq8-4cGNLRmJnEAE",
        "author": "Maria Phillips",
        "rating": 1,
        "date": "2023-10-10",
        "listing": "/g/1tfswgq8",
        "text": "While the doctor himself seemed okay, his receptionists and clinic are in total chaos. I have a simple bunion surgery booked with him. Tried to get some information on what to expect, hospital stay and costs. Spent an entire morning ringing the clinic, hospital, insurer, back to clinic and to no avail.\n\nRude, unhelpful staff with no empathy or compassion, who just ask you to send an email and then don’t provide the required information, just giving you the run around. All I needed was an item number for the surgery and they just make excuses and there is delay after delay providing that info. They also mistakenly booked me in for the wrong surgery dates as well! I worry that I might come out of theatre missing a couple of limbs at this level of staff incompetence. A complete joke."
      },
      {
        "id": "g1tfswgq8-dHFLWDlnRRAB",
        "author": "Jennifer Desmond",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Salleh was incredible for my consultation. A lovely, personable Doctor and I couldn’t have asked for more! Didn’t rush me out the door and answered all my questions even though he is clearly very busy. Great manner, very friendly. When reading these bad reviews, I can’t help but wonder whether these people just had unreasonable expectations? Probably!"
      },
      {
        "id": "g1tfswgq8-eTR2MnVRRRAB",
        "author": "Stephanie Dixon",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Salleh is incredibly thorough in what he does, I always feel to be in the best hands when with him.\n\nHis reception staff are all a complete breath of fresh air, bubbly, incredibly helpful and compassionate. They booked me in to the soonest available appointment with the doctor and are a pleasure to deal with. They made my experience a walk in the park and I will be sure to return to Dr Salleh in the future if need be."
      },
      {
        "id": "g1tfswgq8-4NzZ2TkpREAE",
        "author": "alan barrie",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I have read past reviews and as usual there are a few from armchair experts who obviously expect the world everytime they ask for it. I am a veteran who has had more surgical procedures than I care to remember. I am scheduled for foot surgery next week and only saw the good doctor today after he was recommended by my normal podiatrist who stayed that he was the one he would have operating on his feet should that be required. He was friendly, patient and told me what my options were before I made my decision. I will write another review after surgery but so far he lives up to my high expectations."
      },
      {
        "id": "g1tfswgq8-ekxIUy13RRAB",
        "author": "Rosemary McCallum",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Excellent ankle surgery… full functionality and back on the tennis 🎾 court. Thank you Reza"
      },
      {
        "id": "g1tfswgq8-taV9pMFBnEAE",
        "author": "Lynette Sultana",
        "rating": 1,
        "date": "2022-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Appalling person. Removed an neuroma from my foot. I went back because I couldn't move my toes He left me sitting in the chair walked to the door turned around and told me he couldn't help me and walked to his next patient. 3 years on and still in pain. Very unprofessional."
      },
      {
        "id": "g1tfswgq8-yLVBfOVlBEAE",
        "author": "OZ traveller",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Excellent surgeon. My GP would not have recommended him if he wasn't. Gives direct, factual answers. Reception staff are serious and offhanded but they do their job."
      },
      {
        "id": "g1tfswgq8-1cDhuM1lREAE",
        "author": "Noah Kane",
        "rating": 3,
        "date": "2022-10-10",
        "listing": "/g/1tfswgq8",
        "text": "had knee surgery and it all went well got in quickly, post op i’ve been trying to get a second script sent to my pharmacy for over 3 days on the phone to the office every hour and every time i get the same response, it’s on someone’s desk about to be sent through. in that regard i am not happy at all with the service i’ve gone 5 days without painkillers that i need."
      },
      {
        "id": "g1tfswgq8-XLXNuMkZBEAE",
        "author": "Jessica S",
        "rating": 1,
        "date": "2022-10-10",
        "listing": "/g/1tfswgq8",
        "text": "He may be “best foot surgeon” but he only cares for his success rate. He has absolutely no humanity and should learn from seniors in his profession. He has been the rudest surgeon I have ever comes across. Comments such as “it’s not like you have cancer” and then comparing my foot pain to “someone coming from a broken household and keeps getting expelled from school and he’s a teacher” or “if you’ve waited years with pain, what’s your problem with another week?”\n\nWon’t work with you or even discuss and show medical images and explain. Doesn’t explain surgery clearly, pros and cons, alternative options.\n\nRead all the other comments. It’s not worth $90 to always end up walking out crying. He has no compassion and judges without knowledge."
      },
      {
        "id": "g1tfswgq8-ycnFTLVpBEAE",
        "author": "Heath Bassett",
        "rating": 1,
        "date": "2022-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Very average in the admin and follow up department. I went in for surgery (first ever) last October. I was pretty nervous, and seen the doctor for literally 10 seconds in the lead up to surgery. After surgery I didn't get told how it went, I disnt get scans done after, and still to this day have not seen a before and after shot to see progress. It's been 6 months since surgery.\n\nI've been following up for the last 6 weeks about physio, and every time I call, theres been nothing written in my file.\n\nI have no idea if my ankle is meant to be sore still after sport 6 months on, but it is, so I can't comment on his ability as a surgeon..."
      },
      {
        "id": "g1tfswgq8-1OWM3bEFREAE",
        "author": "Matt James",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Salleh performed a subtalar arthrodesis on me in July 2021, i suffered with chronic pain for 20 years leading up to this, and no wish id met him years ago, i visited lots of dr's and surgeons but never felt completely comfortable, Reza was great and has changed my life and now im mostly pain free! He looked after me very well through the whole experience!"
      },
      {
        "id": "g1tfswgq8-MGUyVnVBRRAB",
        "author": "Yvette Doust",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I would highly recommend Dr Reza Salleh. He is caring and extremely professional. He also has a great sense of humour!\nAs soon as I mention to anyone that I had Dr Salleh perform my surgery, I am told what a wonderful surgeon he is. I am so grateful that my doctor sent me to him."
      },
      {
        "id": "g1tfswgq8-dFpyTjBBRRAB",
        "author": "Jodie Pollard",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I have seen Dr Salleh several times. He referred me to a colleague for knee surgery whom he thought may be better suited. I didn’t hesitate to return to him when I needed treatment for my foot. Once surgery was determined as the next option, he made an effort to get it done quickly. Post op care has been great. He listened and understood my individual circumstances around work & other commitments ⭐️ ⭐️ ⭐️ ⭐️ ⭐️"
      },
      {
        "id": "g1tfswgq8-dTh5azJRRRAB",
        "author": "Hugh",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Excellent"
      },
      {
        "id": "g1tfswgq8-xdnBlRE93EAE",
        "author": "Debbie Evans",
        "rating": 1,
        "date": "2021-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Don’t waste your time and money seeing this so called Doctor\nHe’s an obnoxious and very Rude man\nWho has been no help to me whatsoever\nWish I could have given him minus 5 stars"
      },
      {
        "id": "g1tfswgq8-cHBydGdRRRAB",
        "author": "joey yang",
        "rating": 1,
        "date": "2021-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I would not even give one star if it allows me to. This is what happened to my feet after the surgery. Very uncomfortable and inconvenient. Terrible experience and totally not recommended."
      },
      {
        "id": "g1tfswgq8-cmYzQWl3RRAB",
        "author": "Daniel Ranasinghe",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Makes excellent pork and lamb ribs, best I have ever had in my life. Definitely would recommend, excellent surgeon."
      },
      {
        "id": "g1tfswgq8-hNE5ydGNBEAE",
        "author": "M",
        "rating": 1,
        "date": "2021-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Horrible experience. Havent been able to walk properly for many months, and after waiting months for an appointment and then being kept waiting for an hour in his waiting room, he wont give me my test results no matter how many times he is contacted.\nDo not recommend"
      },
      {
        "id": "g1tfswgq8-BNXU2dFFBEAE",
        "author": "Rhys Croxford",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I was recommended Dr Salleh by a family member. There was murmers of his bedside manner not being particularly good .\nI found Dr Salleh to be nothing short of an absolute professional. He knows his job as well if not better than anyone . I dislocated my ankle and broke my fibula requiring a plate and pins. He told me straight up that I would not be able to weight bare for 10 weeks. This news was harsh but completely accurate. He didn’t sugar coat the situation but I needed to know the scenario.\nHis work was neat and precise and I feel confident the bone has mended securely.\nI wanted the best person to repair a major injury that could affect my ability to walk for the rest of my life.\nI certainly feel that I found him.\nGreat work Dr Salleh. 5 Star performance"
      },
      {
        "id": "g1tfswgq8-OUx5VThnRRAB",
        "author": "Ben Lawlor",
        "rating": 1,
        "date": "2020-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Waited for an hour but had to get back to work - never saw the doctor but poor time management."
      },
      {
        "id": "g1tfswgq8-zdkoySUxBEAE",
        "author": "JIALING LEE",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Very nice, caring and very people first. Also very encouraging. No operation needed for my injury but he taught me what I can do (swimming & cycling) and not do to speed up my recovery."
      },
      {
        "id": "g1tfswgq8-zMFpPbEdBEAE",
        "author": "Janina Carter-Dick",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Reza is an excellent surgeon. He puts you first. His staff are polite and efficient. I have had foot surgery twice with him."
      },
      {
        "id": "g1tfswgq8-zeE1LM2VnEAE",
        "author": "Terri Morrow",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1tfswgq8",
        "text": "The clinic is very efficient. Dr Salleh has done 3 ops on my feet. Nice manner, very good at what he does & still passionate about his craft. Highly recommend"
      },
      {
        "id": "g1tfswgq8-4ODVyalFBEAE",
        "author": "Steve Ingram",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr. Salleh has performed ankle fracture surgery for my wife and I over the past 4 years, mine in December 2019. Our outcomes were very successful. We have utmost respect for Dr. Salleh and staff."
      },
      {
        "id": "g1tfswgq8-cnViY2dRRRAB",
        "author": "Farnaz Jafar",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I had bunions surgery\nNo pain at all 😊"
      },
      {
        "id": "g1tfswgq8-NE9hS2lnRRAB",
        "author": "Cassandra Rowe",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Thanks for being so kind and understanding. Very nice Dr 😊"
      },
      {
        "id": "g1tfswgq8-FLWR6T1RnEAE",
        "author": "melvin BEATRIX",
        "rating": 1,
        "date": "2019-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Worst reception staff I've ever seen, not helpful and not friendly. The women even hung up on me when i was trying to explain my insurance situation."
      },
      {
        "id": "g1tfswgq8-vZ0tUbVlBEAE",
        "author": "Viriama Masini",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Doctor Salleh is honest and very down to earth.\nHe doesn't mess around and tells you straight I can honestly say he puts his patients first.\nGod bless and be with him always."
      },
      {
        "id": "g1tfswgq8-VN3JlYUp3EAE",
        "author": "Douglas Faudet",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I had arthroscopy procedure a few years back on left ankle. Recently a big toe fusion. Everything went as Dr Saleh said it would. He is a fine ‘people first surgeon. I am very glad that he was recommended to me some years ago."
      },
      {
        "id": "g1tfswgq8-bjl1cG93RRAB",
        "author": "Liz Whittleston",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr.Salleh operated on my knee after an accident at work. I found him very caring and kind. He is a brilliant surgeon. He was straightforward and upfront with my recovery at all my follow up appointments. Thank you Dr Salleh. His staff are very busy but always very nice to me."
      },
      {
        "id": "g1tfswgq8-eG8yRzFnRRAB",
        "author": "Frances Malloch",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Salleh is totally professional; warned me the surgery was major and to consider before making my decision. Yes, he does run a very busy surgery clinic, BUT, I know of no other specialist in any field where you can get a first-time appointment within two weeks, provided it does not include school holidays. So, we have to wait a bit on the day of the appointment, so what. I would rather wait an hour if necessary than 6-8 weeks for an appointment. And, he is the best in Perth. Your GP would not send you to a novice. If you want a long heart-to-heart talk, that is one of the reasons for maintaining contact with your GP. When seeing a specialist of any sort, for heavens sake, write down any questions before you go. Yes, his staff are reserved, professional, very busy, and will always return a smile. Dr Salleh runs a tight ship. He has performed two different operations on my feet in different years and I will go to him again should it be required."
      },
      {
        "id": "g1tfswgq8-am8yeG1nRRAB",
        "author": "christine carnicelli",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Reza Salleh has done a fusion on my right ankle and has done a magnificent job and i am extremely happy i have been to 3 other surgeons and they said it was to hard to do and amputation was the only solution.Also my daughter had a bad car accident and Dr Salleh really did a good job on her too,and my best friend Lorry fell off a ladder and Dr Salleh fixed him up like new.What i like about Dr Salleh he tells it how it is and doesn't coat it.This surgery took 4 months to heal and in this time Dr Salleh is a good friend of mine i owe him heaps , i would like to thank Dr Salleh for saving my leg ,at 63 it would be difficult with one leg all the best Dr Salleh regards,\n\nTIM ROBERTS"
      },
      {
        "id": "g1tfswgq8-OE1PUXZ3RRAB",
        "author": "Rosalyn Gibbings",
        "rating": 3,
        "date": "2018-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I saw Dr Salleh last week. He was great knew exactly what he was doing. We put together a treatment plan and wants to be informed which ever way things turn out. Reception staff tho.... dont think much of them... they are rude, completely unhelpful and dont know general basic manners such as please and thank you."
      },
      {
        "id": "g1tfswgq8-BejhxZEtnEAE",
        "author": "J X",
        "rating": 1,
        "date": "2018-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I hope Dr Salleh is an excellent Othhopod as his reception staff are woeful.\n\nReception staff:\n1. Did not return phone calls,\n2. Were dismissive on the phone,\n3. Couldn’t or didn’t want to explain the process,\n4. Provided very inaccurate information about the referral process.\n\nFingers crossed!!!!"
      },
      {
        "id": "g1tfswgq8-dkk3MjZnRRAB",
        "author": "tracey dixon",
        "rating": 1,
        "date": "2018-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I Was happy with surgery but after hardly saw him, he did not inform me prior to operation of all the side effects leading me to think recovery would be between 4-6 weeks now it cauld be 18 months. Follow up visit questions still unanswered, when my son questioned his answers ( shrug off the shoulders) he approached my son with his chest out in a very confrontational way and said I am the doctor, my son then said well your just putting your hands up and saying to all our questions (when ever) he then mimiced what the doctor did with his arms and my sons finger hit his hand and all of a sudden he started threatning my son with security when it was him who walked 2 metres over to my son confrontationaly. I asked him to back away from my son and explained to dr salleh that his approach to my son was confrontational and he should not do it.\nI became fritened of him at that stage as you never expect a doctor to be so aggressive when you ask simple questions. I will never refer him to anyone, I will also find another surgeon to do follow up."
      },
      {
        "id": "g1tfswgq8-NmNfUTdnRRAB",
        "author": "ken knight",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Reza fused both great toes. The surgery was very successful. His communication was easy going. He took into consideration my lifestyle and everything was smooth. Very down to earth and realistic. Thankyou"
      },
      {
        "id": "g1tfswgq8-nX3ZTdVJ3EAE",
        "author": "John Atkinson",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Salleh reattached both of my severed Achilles tendons 5 and 6 years ago. I am 53 years of age and still playing competitive AFL masters football and have no Achilles trouble whatsoever. I cannot recommend his surgical competence highly enough !"
      },
      {
        "id": "g1tfswgq8-BLW92cEJnEAE",
        "author": "Jason Hunt",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Sellah did an excellent job in repairing my achilles tendon. His surgery created a very strong bond and allowed me an excellent recovery. His surgery skills are excellent, after that a lot is up to you and your physio, don't expect a surgeon to anything but ultra conservative or to have long, free follow up consults."
      },
      {
        "id": "g1tfswgq8-bXNtbzdBRRAB",
        "author": "Sarah Mitchell",
        "rating": 1,
        "date": "2018-10-10",
        "listing": "/g/1tfswgq8",
        "text": "I can handle dismissive and arrogant but rude behaviour is unacceptable. I heard good things about Dr. Salleh but was definitely disappointed with my experience. Dr. Salleh raised his voice and chastised me for asking a question about my son's test results. He insinuated he was doing me a favour by calling me at home at 7:00 am, a full week after we'd had a blood test done. We had already waited nine days to get the results of MRIs when he ordered the blood test.\n\nDr. Salleh said he would contact our GP in a couple of days to set up a referral to another specialist. I asked if that could be done quicker because my son had been in pain for a year and we still weren't able to get to the bottom of the problem. He said, \"If you've been managing for a year, another week won't make a difference.\" He then unloaded on me, with raised voice, letting me know in no uncertain terms he had no obligation to help us because he was a surgeon and my son did not have a surgical problem.\n\nI have never encountered anything quite like this. If he was one of my employees, or an employee of any of the companies where I'm a board member, I would be horrified. He might be a brilliant surgeon but his interpersonal skills are awful and he's comfortable dishing out abuse without provocation."
      },
      {
        "id": "g1tfswgq8-aXVHTGtnRRAB",
        "author": "Bec Bec",
        "rating": 1,
        "date": "2017-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Pretty poor correspondence... cant get test results... worth paying to see someone else"
      },
      {
        "id": "g1tfswgq8-dHQyTnBBRRAB",
        "author": "Ramzi Faraj",
        "rating": 1,
        "date": "2017-10-10",
        "listing": "/g/1tfswgq8",
        "text": "He did my operation in my knee last month maybe hes good at surgery cause still pain ,but in the appointment he will sit maximum 5 minute with you ,not enough time with patient and you wana ask him inorder to answer you he doesnt give you details about anything and he will let you wait 30 minute every time after your appoitment"
      },
      {
        "id": "g1tfswgq8-nMnZIcUdREAE",
        "author": "Sam Wilson",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Excellent surgeon. Make sure you are prepared to ask any questions (eg write them down so you don't forget) because he is machine-like in his ability to move through his consultations. I have seen people complain about this, but as long as you are ready for it and ask the questions you want answered, you will have no problems.\n\nRecommend."
      },
      {
        "id": "g1tfswgq8-anViaF9BRRAB",
        "author": "Daisy Pearce",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Reza is superb. Super competent. I had zero pain from my operation. Still can't figure out what his magic hands did to make that happen! Did have to wait a ridiculous amount of time for one appointment but he is super busy all the time so one out of four appointments isn't bad. Highly recommend."
      },
      {
        "id": "g1tfswgq8-allESjhBRRAB",
        "author": "Michael Oconnor",
        "rating": 5,
        "date": "2015-10-10",
        "listing": "/g/1tfswgq8",
        "text": "Dr Salleh operated on my snapped ankle tendon . I am very pleased with the outcome and am getting back on my feet.Dr Salleh has been very courteous and efficient in my 2 pre op and 3 post op consultations. His asssitant- Nadine has also been excellent. I was kept waiting 30 mins for 1 consultation but all others were on time which is almost unique in the medical profession in my opinion ! I had some concerns initially as I had read 1 or 2 poor reviews. My experience with Dr Salleh has been excellent and I have no hesitation in recommending him .Thank you for getting me back on my feet ."
      }
    ]
  },
  "william-blakeney": {
    "listings": [
      {
        "key": "/g/11sqck1vdd",
        "name": "Dr William Blakeney - Orthopaedic Surgeon Perth",
        "address": "St John of God Medical Clinic Suite 213, 25 McCourt St, Subiaco WA 6008",
        "rating": 4.8,
        "reviewCount": 35,
        "url": "https://maps.google.com/?cid=3394951622831743792",
        "primary": true,
        "placeId": "ChIJs331-QWlMioRMKOFhINKHS8",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJs331-QWlMioRMKOFhINKHS8"
      }
    ],
    "reviews": [
      {
        "id": "g11sqck1vdd-Y0RsV1gyYxAB",
        "author": "Elizabeth Mckimm",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11sqck1vdd",
        "text": "can’t speak to highly of dr blakeney i had my right knee replaced at albany campus on 19th may 2026 by the good doctor i was ready to resume normal movement in about 4 weeks with little to no pain and 120 degree movement in 5 weeks just amazing\nthank you for your professional services\ngraham mckimm"
      },
      {
        "id": "g11sqck1vdd-ZW5WNk1XYxAB",
        "author": "Tony M",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11sqck1vdd",
        "text": "Great care from Dr Will Blakeney and the West Coast Orthopedic Centre team. Professional, attentive, and highly skilled. Didn't take forever to get an appointment, fees were very reasonable, everything handled very well. Couldn’t be happier with my experience."
      },
      {
        "id": "g11sqck1vdd-U0hwTGVVRRAB",
        "author": "Michelle Derrick",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11sqck1vdd",
        "text": "My experience with Dr Blakeney has been nothing short of incredible. My full knee replacement journey has been seamless from prior surgery meetings to post surgery. He is professional and has a great bed side manner. Then there’s Gracie the lady behind the desk who offers her beautiful calm nature and smile. Her presence and professionalism has never wavered. The two of them make a formidable team, Thank you 🤩"
      },
      {
        "id": "g11sqck1vdd-YUhoTFowRRAB",
        "author": "Amanda",
        "rating": 1,
        "date": "2026-06-10",
        "listing": "/g/11sqck1vdd",
        "text": "Receptionist was condescending and rude to the point of me seeking another surgeon."
      },
      {
        "id": "g11sqck1vdd-Y0hwR1NGRRAB",
        "author": "Ronald Watkins",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/11sqck1vdd",
        "text": "I had a right hip replacement 12 months ago and it has been brilliant. I went back to Will as he had previously done reconstruction on both shoulders. First class on all 3 occasions. Further, Gracie his Secretary makes the whole experience an absolute pleasure. Many thanks."
      },
      {
        "id": "g11sqck1vdd-UWxOaFNrRRAB",
        "author": "Michael H",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11sqck1vdd",
        "text": "Amazing surgeon, bilateral knee replacement surgery and walking out of hospital 5 days later 😁"
      },
      {
        "id": "g11sqck1vdd-YnpWTGQzYxAB",
        "author": "Trish Chitty",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11sqck1vdd",
        "text": "Highly recommend William Blakeney, operation went smoothly excellent results. I found Dr Blakeney quite easy to converse with considering he is a surgeon. Dr Blakeney's secretary Gracey is very efficient and lovely to deal with."
      },
      {
        "id": "g11sqck1vdd-ZDJ4VFFsRRAB",
        "author": "Nigel Carey",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11sqck1vdd",
        "text": "My knee operation was a great success. Dr Blakeney carefully explained the procedure and the post op process and this helped ensure a very positive outcome.\nDr Blakeney is a highly professional and skilled orthopaedic surgeon. I strongly recommend him for your procerdure.\nGracie, his secretary, is also extremely helpful!"
      },
      {
        "id": "g11sqck1vdd-ZW05cmQzYxAB",
        "author": "Elisha “Pasty” Delahaye",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/11sqck1vdd",
        "text": "Dr William Blakeney performed my shoulder surgery after I lost most of my movement when a COVID vaccination was administered too high and aggravated the bursa. Despite several cortisone injections, my range of motion remained severely restricted. Throughout the process, Dr Blakeney was easy to talk to, listened carefully, and treated me with respect. He is a skilled surgeon and communicates in a way that many in his profession unfortunately do not."
      },
      {
        "id": "g11sqck1vdd-TjNwNlkxRRAB",
        "author": "David Digby",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11sqck1vdd",
        "text": "Recently had shoulder surgery at the start of December 25.\nDr Blakeney and his staff were fantastic, shoulder id getting better every day and the operation was very stress free. I wouldn't hesitate to recommend Dr Blakeney."
      },
      {
        "id": "g11sqck1vdd-V0RGVllWRRAB",
        "author": "Kevin Cockburn",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11sqck1vdd",
        "text": "Absolutely amazing Orthopaedic Surgeon who transformed my painfull dodgy knee into a painless experience. Appreciate the follow ups after surgery to check on my well-being. Highly recommend Will Blakeney"
      },
      {
        "id": "g11sqck1vdd-TldoRE1GRRAB",
        "author": "Kylie Frampton",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11sqck1vdd",
        "text": "After four years of persistent pain and consultations with numerous practitioners who said my shoulder would never improve, I was referred to Dr. Blakeney. He promptly recommended surgery, and within four months I regained full movement, with no impingement and no pain. Dr. Blakeney is friendly, highly knowledgeable, and an exceptionally skilled surgeon."
      },
      {
        "id": "g11sqck1vdd-czZud2dnRRAB",
        "author": "graeme stewart",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "Six weeks, after a total knee replacement, l could not be happier. Absolutely reccomend Dr. Blakeney and his team and St. John of God Hospital in Subiaco. Fantastic effort by them all. Thanks again."
      },
      {
        "id": "g11sqck1vdd-OHNyR3FnRRAB",
        "author": "Richard Flanigan",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "Dr William Blakeney is an outstanding orthopaedic surgeon, who is interested, attentive and caring in his interaction with patients. His team approach to hip replacement at all stages is faultless."
      },
      {
        "id": "g11sqck1vdd-LWNqYmd3RRAB",
        "author": "Linda Harris",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "No complaints after shoulder replacement surgery. Recovery period was easy to endure and 12 month follow up showed a good result. Compliments for excellent surgery outcome by Dr Blakeney"
      },
      {
        "id": "g11sqck1vdd-Zc3NXN0J3EAE",
        "author": "Adele McDonnell",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "Partial medial meniscectomy performed by Dr Blakeney recently. Absolutely fantastic result.\nAbsolutely no residual pain. Remember though that the surgery is only as good as the effort you put into your rehabilitation. Follow the recommended exer For the best results!"
      },
      {
        "id": "g11sqck1vdd-YOF9PaGJnEAE",
        "author": "Peter Mitchell",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "Will performed a Reverse shoulder replacement on my right shoulder six weeks ago. I am still on the mend but I believe the surgery has been very effective. Will explained the process very clearly and he has been very professional in all his dealings with me. I might require both knee joints to be replaced due to similar arthritic problems. Should this be the case I would have no hesitation in using Will again for this surgery."
      },
      {
        "id": "g11sqck1vdd-YVZOTU1FRRAB",
        "author": "William Pearce",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "Can not thank William enough for getting my mobility back after a double hip\nReplacement. His professionalism in communicating what was required to be done and the trust he built with me in a very short time was extraordinary along with his Surgical skills.\n\nPost operation in Hospital he consistently visited me daily to follow up how I was progressing. He gave me a clear rehab programme to work through to full recovery.\n\nAt 67 I am now back Bike riding 14 kms a day , walking an average of 5,000 steps a day, resumed fishing out in my boat, playing walking football and travelling with my caravan around Australia and off to Europe for 7 weeks soon.\n\nHighly recommend William and his very efficient secretary Gracie.\n\nRegards\n\nBill Pearce"
      },
      {
        "id": "g11sqck1vdd-T1hjek1sRRAB",
        "author": "David Parnell",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "It's coming up to 12 months since having Will Blakeney do a reverse shoulder joint replacement. I would highly recommend WILL as a surgeon in this type of operation. I had and have, the utmost confidence in Will's ability through the pre and post operation care. My procedure has been a total success.\nI also must highly commend Gracie Edwards as Will's personal assistant, to have all the checks, pre and post surgery in place. Nothing was too hard for her, which as a country patient, was greatly appreciated.\nDavid Parnell\nAlbany"
      },
      {
        "id": "g11sqck1vdd-bXRmZGpRRRAB",
        "author": "Diane Hargrave",
        "rating": 4,
        "date": "2024-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "Very happy with my left shoulder surgery with Dr Blakeney & the treatment with West Coast Orthopaedic Centre. Will be having my right shoulder done shortly also with Dr Blakeney."
      },
      {
        "id": "g11sqck1vdd-dmJMUmtRRRAB",
        "author": "Neil Giblett",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "I have been very pleased with the results of my surgery.\nDr Blakeney and his team were very professional and a pleasure to deal with. I would not hesitate to recommend them."
      },
      {
        "id": "g11sqck1vdd-M2JtZW9RRRAB",
        "author": "Moogs Murph",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "Amazing shoulder surgeon. He used 3D planning to determine the optimum placement and movement of the joint (RSA) and this resulted in him ordering a non standard part - he's actually co-written papers on this. After being hit by a car while riding a bike nearly 10 years ago my shoulder was a mess with necrosis and extremely limited range and constant pain even at rest. I was told by many surgeons not to expect more range from a reverse shoulder replacement but a reduction in pain. Seven months post RSA my range in all directions has improved hugely to the point I can do things I haven't done in 10 years - like use arm equipment in the gym, lift my arms up above my head and sleep. I'm really grateful I chose Mr Blakeney as I believe the 3D planning and his skills as a surgeon maximised my chances of success. It has totally transformed my life."
      },
      {
        "id": "g11sqck1vdd-yd092VEVnEAE",
        "author": "Terry Walmsley",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "Highly recommended for hip surgery. Dr William Blakeney and his team (including Gracie Edwards) were very professional with a nothing is too much trouble and high care attitude. Very happy with the whole process/experience and results."
      },
      {
        "id": "g11sqck1vdd-dWZTSWdBRRAB",
        "author": "Allan Rowe",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "I had a (R) shoulder replacement 25th June 2024, after suffering for years from a previous shoulder replacement. Dr Blakeney was very explanatory, as to what the surgery process would be like & what to expect after surgery. It has now been 6 weeks from my surgery & am pleased with my progress so far - a lot less pain than I had experience with the previous surgeon. I would absolutely recommend Dr Blakeney, to anyone wishing to venture into joint replacement surgery. Dr Blakeney also performed shoulder replacement surgery on my (L) shoulder back in 2018 & am pain free. He also, performed Hip replacement surgery on my wife's hip & she is also pain free, with a complete recovery. Great surgeon - well done Dr Will."
      },
      {
        "id": "g11sqck1vdd-N3NQazhBRRAB",
        "author": "Graeme Ashford",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "Very satisfied with my reverse shoulder replacement."
      },
      {
        "id": "g11sqck1vdd-4XzU3eGFREAE",
        "author": "Dan Western",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "Very professional and did an amazing job on my total shoulder replacement. Would highly recommend seeing him for any shoulder issues"
      },
      {
        "id": "g11sqck1vdd-OG9UMjlRRRAB",
        "author": "Kevin Green",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "Pitsamai Green comments as follows:\n\"Thank you, Dr Blakeney for everything you have done to rid me of the pain caused my osteoarthritis problems, that is, your expertise in carrying out my two hip replacement operations.\nEach operation went very well. Though you were very busy helping many of your patients but your care in finding time to visit and check on me during my two stays in the hospital were very much appreciated.\nI would also like to mention you have a good team member in Gracie. In her administrative role Gracie was very efficient and helpful right from my first phone call to make an appointment .\nGracie made us feel welcome whenever we visited your practice.\nI am thankful and I feel blessed to have you as my orthopaedic\nsurgeon.\nBest wishes,\nPitsamai Green 5/06/2023"
      },
      {
        "id": "g11sqck1vdd-Z2FHbXVBRRAB",
        "author": "John Sabatino",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "I recently had a reverse shoulder replacement operation.\nI received such great service from Dr Blakeney he made me feel comfortable and explained everything to me prior to the operation. It’s been 3 months now that I’ve have had the operation and I feel great and I can honestly recommend Dr Blakeny for anyone having to have a procedure like mine to go see This amazing Dr and his staff for all his care and support.\nThank you Dr Blakeney\nJean Pierre Sabatino"
      },
      {
        "id": "g11sqck1vdd-OVlyS21nRRAB",
        "author": "Terry Genge",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11sqck1vdd",
        "text": "A Reverse Shoulder Replacement was the diagnosis, somewhat daunting! I needn't have worried. Dr Blakeney performed the procedure 12 months ago, and today, my shoulder is like new. I have not experienced any issues whatsoever and I only wish I had seen him a decade ago. I could not have wished for a better outcome. Dr Blakeney is a brilliant surgeon."
      }
    ]
  },
  "arash-taheri": {
    "listings": [
      {
        "key": "/g/11bbrgsf63",
        "name": "Joondalup Orthopaedic Group",
        "address": "Joondalup Private Hospital Suite 5, Ground Floor, 60 Shenton Ave, Joondalup WA 6027",
        "rating": 4.6,
        "reviewCount": 90,
        "url": "https://maps.google.com/?cid=2337886651748735655",
        "primary": true,
        "shared": true,
        "placeId": "ChIJzSDWBmlTzSsRp1qc6oXXcSA",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJzSDWBmlTzSsRp1qc6oXXcSA"
      }
    ],
    "reviews": [
      {
        "id": "g11bbrgsf63-YUc1WlJrRRAB",
        "author": "Laura Hanson",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11bbrgsf63",
        "text": "Recently I had the Coolief procedure on my hip to reduce the pain while I wait for replacement surgery . It has made such an improvement , I am able to go back to strengthening exercises , walking properly and sleeping better. And I also noticed I am not needing pain medication very often or even at all some days . I am very grateful this procedure was offered by Dr Taherri. He and the staff have been very good to deal with .A Big thank you to them ."
      },
      {
        "id": "g11bbrgsf63-VkV0VlNGRRAB",
        "author": "Lucy Ramsden",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Dr Taheri is the most excellent surgeon in my case. He has done my right knee 3 years ago and now he’s done my left knee. I’m the most happiest person ever because I was in so much pain before I had each one done. Dr Taheri really looks after his patients very well.\nIf u need to get your knees done do it now sooner than later because I suffered so much waiting to have them done. U knees are in a good surgeons hand, and the receptionist do an amazing job looking after u as well."
      },
      {
        "id": "g11bbrgsf63-ia3VMUFNREAE",
        "author": "Margarita Leon",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I am so grateful for Dr Arash Taheri and his team.\nAfter being wrong diagnosed before and many different doctors not sending me to the right tests, Dr Arash finally helped me to get some answers and get closer to my recovery.\nKellie in the admin was so lovely, professional and efficient booking me the right places for my tests too.\nDr Arash was excellent experience when I was struggling so much and with so many other doctors and clinics not really caring so much.\nThey really cared and look after their patients.\nHighly recommended"
      },
      {
        "id": "g11bbrgsf63-qeVkzV1FnEAE",
        "author": "Mehran Zare",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "After a bad ACL and meniscus injury at the age of sixty, I visited four specialists, some hesitant to operate and pessimistic about the outcome. I was on crunchers for four months until I met the fifth specialist, Dr Arash Tahiri.\n\nDr Arash Tahiri was recommended to me by my niece and a friend who works at the hospital. Dr Tahiri professionally explained the surgery procedure giving me confidence in his ability to do the knee operation despite my age. He was Positive I could get back to sport with a recovery duration of one year."
      },
      {
        "id": "g11bbrgsf63-CN1lLbk53EAE",
        "author": "Diana Winch",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I would highly recommend Dr Hateri. I had a total hip replacement after some time in pain and the pain disappeared instantly after surgery. The reception staff and Dr Hateri were extremely helpful at all times and any questions I had were happily answered. My recovered from the surgery has gone without any hitches thanks to the excellent information regarding post operative care."
      },
      {
        "id": "g11bbrgsf63-SURSbTlvQxAB",
        "author": "Evelyn Wardle",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I had a total knee replacement January 16th 2023. Dr A Taheri was very friendly and professional. He done a first class operation. I now have a one hundred percent perfect pain free knee. Highly recommended."
      },
      {
        "id": "g11bbrgsf63-MEtMUjJRRRAB",
        "author": "Ann Thake",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I had a double knee replacement in November 2022. Aresh Taheri was very kind and explained all aspects of the operation and what would happen. His best advice was to treat it as a marathon race and not to give up. I followed all the rules and did all the exercises on a daily basis. I am now 16 weeks post op and apart from a \"tight band\" feeling in both knees, I am not in any pain at all. I would recommend Aresh Taheri most highly for his treatment and thank you to all the hospital staff for their help."
      },
      {
        "id": "g11bbrgsf63-oaWQ3TWZREAE",
        "author": "Julie Walters",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Dr Taheri I would highly recommend. Amazed, my leg from trauma was 90 degree angle, the outcome is fantastic my leg is straight\nThe surgery was successful and the outcome is no nerve pain at all and a normal knee. Also it has now been 3 months post surgery and I have just realised that my knocked knee that I could never put my ankles together has gone I can put my ankles together. I'm in awe."
      },
      {
        "id": "g11bbrgsf63-adHF5WUpnEAE",
        "author": "suzanne smedley",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Dr Arash Taheri performed a bi lateral hip replacement nearly 3 weeks ago for me. I cannot praise Dr Taheri and his team for the difference he has made to me only 3 weeks in, I’m totally amazed that the whole process has been pain free and has been a totally different experience to what I thought it would be, he was transparent from the beginning and guided me through the process with ease. I followed instructions to the letter and have ongoing Physio which has been far better than I could imagine. The Leukomed Zipline used on my wounds was amazing too, clean and so much better than stitches, all healed well in 2 weeks. If anyone has doubts about this operation go for it the difference it makes to your life is beyond believe and Dr Arash Taheri is the surgeon to do it. Again big thanks to him for giving me a light at the end of the tunnel, so glad I listened to him."
      },
      {
        "id": "g11bbrgsf63-PdmRyeFhREAE",
        "author": "Karla Longstaff",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I’ve just finished my second knee surgery with Arash Taheri. Both experiences were great from start to finish and also great recovery and results. Arash was extremely caring and professional, I felt heard and he made me feel at ease about having these types of surgeries so young. I couldn’t recommend him and his team enough. I’ll be forever grateful for all they have done to improve my quality of life!"
      },
      {
        "id": "g11bbrgsf63-aDlEMjRBRRAB",
        "author": "Stephen Wells",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Many thanks to Mr Taheri\n2 knees replaced\nBowed legs re-aligned\n5star result\nNever better feeling .\nThanks again A rash\nSteve Wells 67 yrs"
      },
      {
        "id": "g11bbrgsf63-4dGYzV1hnEAE",
        "author": "Reckless_ Ashen",
        "rating": 1,
        "date": "2020-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I'm sure Arash Taheri is a wonderful Orthopedic specialist if you're otherwise fit and healthy, if you carry a little extra weight I would recommend a doctor that can address this topic with a bit more class and understanding, if you decide to still follow through with an appointment with Dr Arash, be ready for him to dismiss any diagnostic evidence. If you have Osteoarthritis I can save you the consultation fee to see Taheri, just take a combination of Fish oil and Tumeric, don't forget to take Panadol 3x a day (even if you have a liver condition that means you can't take said medication)."
      },
      {
        "id": "g11bbrgsf63-blBpRTVnRRAB",
        "author": "Julie Peckham",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Had my three monthly check up for my right hip replacement with Dr Taheri “feeling like a million dollars”I’m 60 this year and have always worked hard and been blessed to be fit.\nI was fly in and fly out cooking, and my hip said no more. I could hardly walk across the tarmac because of the pain and felt so sad because I wanted to keep going. Dr Taheri was the best thing that happened. He studied with all the big guns in America with the robot and bought it back to help people like me out. He is brilliant and all the Staff concerned at Joondalup hospital are amazing. Thankyou you with all my heart Dr Taheri for the next twenty years.\nJulie"
      },
      {
        "id": "g11bbrgsf63-wbnRfV1ZREAE",
        "author": "Matt Gould",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I went to see MR Taheri with acute arthritis in both knees and was unable to carry out my job on the mines I am 51 and was a very fit person before I suffered for 4 year before surgery. This guy is amazing and transformed my life and gave it back to me thank you Arash ."
      },
      {
        "id": "g11bbrgsf63-wbFBLRExBEAE",
        "author": "Derran Johnston",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I have just under 4 weeks ago had total right hip replacement preformed by Mr Arash Taheri, I can't thank him and all the staff enough! And of course mako the robotic arm, brilliant - in contrast, regarding my recovery to three people I know who have also had hip replacement done years ago, I am progressing at a speedy rate, they are all amazed. I must also mention as a public patient there really wasn't that long to wait for my first consult with Mr Arash Taheri. From start to finish the care and information was excellent - I highly recommend : Again Thank you all so much."
      },
      {
        "id": "g11bbrgsf63-VbE15N09nEAE",
        "author": "Asta Morton",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I was referred to JOG and Mr Arash Tahir by a friend - and I cannot thank my friend enough. Mr Tahir was awesome for my ACL reconstruction and him telling me he has had his own done before gave me full confidence he knew what I was feeling and going through. All the team were great and so easy to talk to and deal with. Absolute 5 stars!!"
      },
      {
        "id": "g11bbrgsf63-bDhLQWhnRRAB",
        "author": "Margie king",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Highly Recommended!!! I had a Left Total Knee Replacement with the MAKO 3.5 weeks ago with Mr. Arash Taheri. The pre/post care cannot be faulted. I am walking several Kms/day with no crutch already. Pain managed very well with minimal medications. The education session prior to surgery was fantastic. Very well presented and very informative on post surgery expectations. I couldn't be more pleased with the care I have received throughout. Thank You very much."
      },
      {
        "id": "g11bbrgsf63-bXRIRXhnRRAB",
        "author": "Brett Lardi",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "1 year ago I had my right hip replaced and received top service from all concerned. Last Monday I had my left hip replaced and am already up and walking around, sometimes with a walking stick but no other aid required. Robotics were used both operations. The only complaint I had was with the noise in hospital ward at Joondalup private hospital. Once staff heard about my sensitivity to the buzzers going off they moved me to a very private, silent room with a magnificent view. All in all a great outcome for me and now I have a new life with no pain. Thanks to hospital staff, Dr Taheri and his staff. Exceptional service."
      },
      {
        "id": "g11bbrgsf63-N043ZXJ3RRAB",
        "author": "Stephanie Lloyd",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I was referred to Dr Taheri after fracturing my ankle whilst on my honeymoon. He was friendly and he made me feel at ease. I would highly reccomend! 😊"
      },
      {
        "id": "g11bbrgsf63-3b1B6ZkVnEAE",
        "author": "Christine Askew",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Mr Tahiti operated on my right knee. I was in terrible pain before the op but after I could run he has manic hands and anyone who has him as their surgeon would be very lucky."
      },
      {
        "id": "g11bbrgsf63-NU52SDJBRRAB",
        "author": "Harold Summers",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Highly recommend Mr Arash Taheri. Had a hip replacement at almost 87 years old. All went well and have made a great recovery, can't wait to get back on the golf course"
      },
      {
        "id": "g11bbrgsf63-RX1BpM1J3EAE",
        "author": "Malcolm Howard",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "My wife (Stella Howard) recently had a total knee replacement. Mr. Arash Taheri carried out the procedure. The care and attention to detail when describing what would happen was second to none. The after care was excellent, we couldn't have wished for better care. We would like to take this opportunity to thank you and all the staff at JOG. Best wished Mal & Stella Howard"
      },
      {
        "id": "g11bbrgsf63-bWFiQzF3RRAB",
        "author": "Joseph George",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Pre–operative consultation and pre-clinical information:\nWithout doubt, Dr Arash Taheri has to be the nicest doctor I've ever had the pleasure of dealing with, and perhaps one of the nicest people I've ever met. He explained everything you need to know before you have an operation but in simple and easy terms using non- medical jargon.\n\nThe operation and in-hospital care at Joondalup Hospital:\nI’m 62 years old and I had a full knee replacement for both knees (3 months apart for each knee replacement), and Dr Taheri was in charge. I walked out of the hospital after 5 days (with crutches), for the first knee and 4 days (with crutches), later for the second knee. Fantastic pain management, throughout the whole process apart from some during my stay in the ward and during rehabilitation which was to be expected. Post-operative advice from all the team was exemplary and the nurses who looked after me during recovery where exemplary.\n\nPost-operative consultation and follow-up:\nOne year later, I’ve returned back to work and I’m back to my daily walks as well. I still continue at home with regimented physio exercise. One of the best decisions of my life and now I have a new lease of life. I would refer any person I know to him. Thank you Dr Taheri. You are one of a kind."
      },
      {
        "id": "g11bbrgsf63-RaTVyZEp3EAE",
        "author": "Kerry Costello",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Joondalup Orthopaedic Group\nAsk the community\nI recently had two knee replacement surgeries performed by Arash Taheri. My first surgery was in June, the second eight weeks later in August. I am recovering well from both surgeries and would happily recommend Mr Taheri to anyone considering this surgery. Mr Taheri appears to be very focused on using up to date methods and follows through with surveys of his patients progress which I can only assume will assist with the continued improvement of surgery and recovery processes. Highly recommend!"
      },
      {
        "id": "g11bbrgsf63-BNV9tb0lBEAE",
        "author": "Rosie VanderHeyden",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Consulting Mr Taheri for a total knee replacement, his suggestion and request to lose weight and get fit placed me in the best condition to have surgery which was totally trouble free. Excellent recovery and can't say enough about the enhanced recovery plan with great pre and post operation support. Thoroughly recommend Mr Taheri if you are contemplating undertaking knee surgery."
      },
      {
        "id": "g11bbrgsf63-MlBTZzhRRRAB",
        "author": "Kevin & Sue Williams",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Mr taheri,Such a talented surgeon.Went above and beyond to repair my badly smashed wrist.Explained procedure and rehabilitation process.A very professional team.Thank you,"
      },
      {
        "id": "g11bbrgsf63-RMG83cEt3EAE",
        "author": "verna dunn",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "My husband had a robotic procedure on his knee, 3 weeks ago, done by Mr Arash Taheri & we can only say, Thank you. A fantastic result by a very approachable surgeon & there were no problems anywhere from the beginning to now. Thank you again"
      },
      {
        "id": "g11bbrgsf63-bE5iZzBRRRAB",
        "author": "Frank Tuson",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Mr Arash Tahiri has now done both my hips. His patients are his number one priority. His skills are cutting edge. He is very approachable and has a good sense of humour. I highly recommend him."
      }
    ]
  },
  "tao-lim": {
    "listings": [
      {
        "key": "/g/11bbrgsf63",
        "name": "Joondalup Orthopaedic Group",
        "address": "Joondalup Private Hospital Suite 5, Ground Floor, 60 Shenton Ave, Joondalup WA 6027",
        "rating": 4.6,
        "reviewCount": 90,
        "url": "https://maps.google.com/?cid=2337886651748735655",
        "primary": true,
        "shared": true,
        "placeId": "ChIJzSDWBmlTzSsRp1qc6oXXcSA",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJzSDWBmlTzSsRp1qc6oXXcSA"
      }
    ],
    "reviews": [
      {
        "id": "g11bbrgsf63-UlZkdGRGRRAB",
        "author": "Vanessa Johnson",
        "rating": 5,
        "date": "2026-08-10",
        "listing": "/g/11bbrgsf63",
        "text": "I had bilateral hip arthroscopys over a year ago with Mr Lim. I was in awful pain with my hips prior to surgery and now I don't have pain 95% of the time. I would very much recommend Mr Lim and his team.."
      },
      {
        "id": "g11bbrgsf63-V0hwNlNIYxAB",
        "author": "Korin McArthur",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11bbrgsf63",
        "text": "I honestly can’t recommend Dr Lim highly enough. He is hands down the best orthopaedic surgeon in WA, with an incredible team around him.\n\nAt 21 years old, being diagnosed with femoroacetabular impingement in both hips was daunting, but Dr Lim went above and beyond to properly assess and identify exactly what was going on. His process is thorough, structured, and extremely professional.\n\nHe has now operated on both of my hips, and even only one week post-surgery, I can already feel significant improvement. His attention to detail and pride in his work really stand out. He is honest, transparent, and explains everything clearly so you feel confident and informed every step of the way.\n\nDr Lim also provides clear, simple recovery instructions and refers you to excellent physiotherapists in your area to ensure the best possible outcome.\n\nI wouldn’t trust anyone else in this state to perform this procedure. Thank you, Dr Lim and your team, for everything you’ve done for me"
      },
      {
        "id": "g11bbrgsf63-Tm0xaFltYxAB",
        "author": "Kenneth Wong",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/11bbrgsf63",
        "text": "I underwent a right knee ACL reconstruction yesterday, and the procedure was extremely successful. A huge thank you to Dr Lim and his wonderful team for taking such excellent care of me. Dr Lim’s professionalism and expertise were outstanding—he was incredibly thorough and reassuring throughout the entire process, which gave me complete peace of mind. I highly recommend Dr Lim to anyone seeking exceptional care."
      },
      {
        "id": "g11bbrgsf63-UmxwU01WRRAB",
        "author": "Jessica Holmes",
        "rating": 5,
        "date": "2025-11-10",
        "listing": "/g/11bbrgsf63",
        "text": "I highly recommend Dr. Tao Shan Lim. He is incredibly organised and always takes the time to answer all my questions promptly. He’s very approachable and even speaks with me over the phone whenever I have any concerns or need clarification, which I truly appreciate.\nAs I’m only six months postpartum and currently breastfeeding, Dr. Lim has gone above and beyond to ensure I felt safe and comfortable throughout the entire process. He took the time to thoroughly explain my procedure, helping me understand every step clearly, which gave me great confidence in his care.\nHis online system is also extremely efficient and user-friendly — all your notes are securely stored in one place, and you can easily access your detailed reports after surgery as well as comprehensive post-op care instructions.\nOverall, Dr. Lim’s professionalism, compassion, and attention to detail have made my experience exceptional. I’m very grateful for his support and would highly recommend him to anyone seeking a caring and dedicated specialist."
      },
      {
        "id": "g11bbrgsf63-2bUxhVFVBEAE",
        "author": "Marianne Cross",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I recently saw Dr Tao Lim regarding my painful hip. Originally I wasn’t able to get an appointment for over 2 months time. However when I emailed the clinic asking about the possibility of getting an earlier appointment, because I was in excruciating pain, they managed to give me an appointment a few days later. I had x-rays done just before I saw Dr Lim, which was organised so quickly. My appointment with Dr Lim was straight after. The clinic was very clean and Dr Lim was so pleasant, explaining what my medical problem is, and why I was not a suitable candidate for arthroscopic surgery. He then referred me to another Dr for further treatment, who I managed to get an appointment with very quickly. I couldn’t think of questions while I was in the clinic, as I was quite distressed, so I sent an email with my question a few days later, and Dr Lim called me that evening and so kindly and patiently answered all my questions until I fully understood my diagnosis. There isn’t too many specialists that would do that. Also, the staff at reception were very nice and the fee to see Dr Lim is very reasonable. I wouldn’t hesitate to recommend Dr Lim, to anyone that requires an orthopedic consultation."
      },
      {
        "id": "g11bbrgsf63-UjB4VVgyYxAB",
        "author": "nigel mills",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Hello I am a returning customer for Mr tao lim I had a shoulder reconstruct October 2014 it was fine working as it should my wife fell over an I tried to pick her up which destroyed the good work that Mr Lim did I wasn't getting much pain so I just moved on with it .\n13 years later I did the other rotor cuff to make life a bit easier my left shoulder was now being a pain so I compensated by using my right as much as I could and of course there both the same now just got to wait till he makes contact with me ps I was referred to scgh in March 2024 didn't hear from them telling me I was booked in for April 10 that was cancelled by them 3 days before then I was issued another day August 14 that was also cancelled both times by the hospital. I'm sure Mr Lim won't do those tricks. Just a lil book tonight. G,knight all"
      },
      {
        "id": "g11bbrgsf63-WTI4MmMzYxAB",
        "author": "Leon de Gaye",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Twelve months post-surgery and I’m delighted to report that I have regained full movement and am pain-free in my previously buggered shoulder. Bravo to Mr Tao Shan Lim and his team of professionals for their expert surgical skills. 10-Stars."
      },
      {
        "id": "g11bbrgsf63-MN0p1UU1nEAE",
        "author": "Glen Palmer",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Dr Tao Shan Lim is professional, caring, supportive, and an excellent surgeon.\nThank you for your ongoing support post hip arthroscopy surgery."
      },
      {
        "id": "g11bbrgsf63-MklUUmdnRRAB",
        "author": "Julieta",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I had been in pain for more than one year and struggling to know what was my issue until I was referred to Dr. Lim and he figured out exactly what was my problem. After treatment I have no pain anymore and my life is getting better thanks to Dr. Lim. His staff is very helpful and efficient as well. I highly recommend him. I am very grateful with him."
      },
      {
        "id": "g11bbrgsf63-bmRQaHBnRRAB",
        "author": "Karla Dowton",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Dr lim is one of the most caring and kind surgeons I have ever met, his ability to listen and give honest feedback is so valuable. This is a character of a great specialist I am forever grateful to you for believing i was in pain when no one did. I highly recommend Dr lim he will not let you down."
      },
      {
        "id": "g11bbrgsf63-d19PM2pBRRAB",
        "author": "kevin kuek",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Had a successful ACL reconstruction with Dr Tao Shan Lim. Very professional and efficient. Made sure all our questions were answered thoroughly and we fully understood what to expect from the procedure. Great ongoing support from Dr Lim after the operation as well, encouraging us to email in questions and then calling is back personally to answer.\nBest of all, got lucky and managed to go from initial enquiry to consultation and operation before we even heard back from other waiting lists!\n5 stars. Exceptional experience."
      },
      {
        "id": "g11bbrgsf63-lNmN1ZlFREAE",
        "author": "Rick May",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Incredible to see lean principles used to cut patient waiting time. Watching MR TAO SHAN LIM & his team use technology to drive efficiencies & allow medical expertise to diagnose quickly & improve lives. My son was referred 10 days ago & in that time has had 2 telephone consultations, 1 practice consultation, X-ray, MRI & is now booked in for A CT scan. We know it’s a long process if surgery is required for an 18 yo sports mad boy so it’s vital waiting time is reduced. Thank you."
      },
      {
        "id": "g11bbrgsf63-ycEstYUZREAE",
        "author": "Jess Singleton",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I highly recommend Joondlaup Orthopaedic Group! I have had two surgeries done by Dr Tao Shan Lim and im truly grateful for all of his help with my complex case."
      },
      {
        "id": "g11bbrgsf63-NW96MDBBRRAB",
        "author": "Karina Davies",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Dr Tao Lim is my daughters surgeon, he got her referral and we had a phone consultation that same day and she was booked in for surgery 6 days later.... he is an amazing dr I would highly recommend him"
      },
      {
        "id": "g11bbrgsf63-cDhyaGlnRRAB",
        "author": "Sandra Stewart",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I was fortunate to be referred to Dr Lim. From the moment I met him I knew I was in safe hands. He questioned whether other methods had been tried before we discussed surgery. I had my surgery and am now on the road to recovery and I can’t praise Dr Lim and his staff enough . Dr Lim will always follow up no matter time of day or night it is and checks your progress through an online questionnaire as well as phone calls . He’s very approachable and polite truly professional. I would highly recommend him."
      },
      {
        "id": "g11bbrgsf63-2bnRucFZBEAE",
        "author": "Emily Ibiza",
        "rating": 1,
        "date": "2021-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Avoid Tao Lim any possible ways...He’s in love with himself and will not care about you. Do yourself a favor finding a better doctor. Rude and arrogant! Telling everyone how great you are ..doesn’t make you great!"
      },
      {
        "id": "g11bbrgsf63-pNU9TNGRnEAE",
        "author": "Sonya Stevensonrg8tcvy8cct8 utrd guyy8v5tc6",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Mr Tao Shan Lim💛 I can't thank you enough. You treated me with respect and explained the process of the 2 operations you performed on me in a clear and understanding way.🌻 Mr Lim is a true professional and an excellent surgeon.🙏 I was in the public system but felt like I was treated like a private patient. Your attention to detail is impeccable. If it wasn't for Mr Lim I am sure I would not walk again without a limp and other problems.🌹 From my first consultation, to my hospital stay, to my recovery ...Mr Lims team were exceptional in care and concern.😃 Mr Lim even came to visit me early Saturday morning to see how I was recovering after surgery. Thank you very much Mr Lim and Joondalup Health Campus,\nA big 10 out of 10 from me\nMrs Sonya Stevenson 🤗"
      },
      {
        "id": "g11bbrgsf63-d3BfdDhnRRAB",
        "author": "Anne Blades",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I can’t speak highly enough about Dr Tao Lim. Excellent surgeon. From my first contact with him he was professional, knowledgeable, extremely thorough and very polite. He didn’t rush into surgery and explored other possibilities before making a decision. His decisions are based on current research and he explained everything to me verbally and then in writing. I felt in very good hands. His communication was excellent and I received emails from him at all hours of the day and night and even had an early morning call from him (7:20am) to talk me through next steps. His staff were very helpful and responsive. As I said, I can’t speak highly enough about this surgeon."
      },
      {
        "id": "g11bbrgsf63-dE56Ym5BRRAB",
        "author": "Terry Waites",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "DR Tao lim and his team have been excellent over the years, can not recommend a better team to look after me and all my knee issues.. VERY professional."
      },
      {
        "id": "g11bbrgsf63-c0pmOTdBRRAB",
        "author": "Claire",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Dr. Tao Shan Lim has done an amazing job on our son's knee. Many thanks. Would highly recommend."
      },
      {
        "id": "g11bbrgsf63-3N0xDTVFREAE",
        "author": "Marie Arthy",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Dr Lim and his team were amazing I had Labral tear repair 3 months ago and it is because of them I have hardly any pain now and feel great. Would recommend Dr Lim and his team highlt"
      },
      {
        "id": "g11bbrgsf63-OC1iUTdRRRAB",
        "author": "Paul Alexander Foldenauer",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I high sided while doing a track day this February and tore 3 tendions holding the right collarbone in place dislocating the bone by 30 mm. I was able to get a appointment the next week with surgry organised the next day. I have never had such fantastic medical care ever and would recommend Dr Lim very highly to all.\nAs a sports minded person doctor Dr Lims bedside manner suited me perfectly has he is a no nonsense surgen which shots from the hip.\nThanks Doc"
      },
      {
        "id": "g11bbrgsf63-dnFQMXZBRRAB",
        "author": "Eileen Watson",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I was very impressed with every aspect of this practice. The waiting time was very short\nThe receptionists were amazing, they sent all paperwork immediately. Dr. LIM was great as very nice. I had my post OP visit yesterday and sutures removed\nIn all a very good experience\nThankyou."
      },
      {
        "id": "g11bbrgsf63-MHVyRXJ3RRAB",
        "author": "sophie",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Dr Tao Shan Lim was fantastic. I had 2 hip arthroscopies and labrum tear repairs, his professionalism was always 100%. In the public system I only waited 2 weeks for my operations. highly recommend👍"
      },
      {
        "id": "g11bbrgsf63-Nk4ydDR3RRAB",
        "author": "amanda grech",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Cannot rate Joondalup Orthopaedic Group and Dr Tao Shan Lim high enough, from the moment you walk in you are treated with respect, procedures are explained in detail and nothing is too much trouble. Emails are answered within an efficient time frame, and if you are told Dr Lim is going to call you back - he does!!\nCommunication from this office to third parties is also very efficient and thorough, my physio was left in no doubt to my condition, my capabilities and Dr Lims expectations which left no room for second guessing and resulted in a very successful outcome :)"
      },
      {
        "id": "g11bbrgsf63-cTVYQm53RRAB",
        "author": "Laura Schmidt",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "My Husband, Herbert Schmidt, would like to thank Mr Tao Shan Lim for the great results from his recent procedure to his hip. As a public patient the wait was minimum and the result excellent. Good job and thanks."
      },
      {
        "id": "g11bbrgsf63-aUlQaHNRRRAB",
        "author": "Thomas Murcott",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I received an injury to my knee tearing all my ligaments (MCL, PCL, ACL and LCL), i was referred to DR. Tao Shan Lim by my GP and was seen to immediately by him, he clearly explained the depth of my injury and what was needed to repair it and was very clear and made sure i understood everything every step of the way before moving on. I can now walk and jog and have full control of my leg thanks to DR. Lim and would strongly recommend him to anyone suffering these types of injuries and have no ill words to say about him."
      },
      {
        "id": "g11bbrgsf63-ncEthbWF3EAE",
        "author": "Felice Tati",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Dear Dr Lim,\n\nI'd like to express my most heartfelt appreciation for not only your skill, but your compassion throughout this process. Earlier this year I had an accident causing me to almost loose my right leg. Both my tibia and fibula bones were broken, and walking again was something that we did not know would be possible. It was a traumatic time for myself and my family, and definitely shook us all.\n\nDr Lim's knowledge and positive outlook played a major role in my recovering so well. He is an excellent surgeon, and was able to provide answers to every question I asked. At our ongoing appointments, he is always so attentive and considerate.\n\nI know there is still a long way to go until I reach full recovery and am able to walk again. However, with Dr Lim's expertise and support, slowly but surly I know I will get there.\n\nKindest Regards,\nFelice Tati"
      },
      {
        "id": "g11bbrgsf63-bThYTHlBRRAB",
        "author": "Amrita Sindhu",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I had ACL reconstruction and meniscus repair done by Dr. Tao Shan Lim in Nov 2017. First of all I would like to thank the doctor for the amazing operation which made me walk and run again. He did not hurry to do the operation straight away and made me understand all the aspects of the operation. He delayed the operation so that my wound can heal to avoid any post op infection (for my wellbeing of course, I was becoming impatient at times), used very latest technology and most of all regular follow up. Before my operation and during the recovery I was following many blogs related to this kind of procedures and found myself in a lot better position in terms of pain and post op recovery. The bottom line is I am very much pleased with the services and I highly recommend Dr. Lim. By the way, my colleague fractured his collarbone and had the operation done by Dr. Lim. He also speaks very high about Dr. Lim ( I came to know about this after my operation and gained more confidence that I was in right hands)."
      },
      {
        "id": "g11bbrgsf63-bTRmUzdRRRAB",
        "author": "Andrew Fraser",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Anyone who can give this man a bad review is obviously not following the procedures properly! Ruptured my acl and medial maniscus had a bucket handle tear causing bone and ligament fragments to stop the function of my knee also had impacted bone marrow. Dr Lim was very professional yet considerate at the same time very little wait time 2 weeks i think it was. The surgery went well and physio was going great i then had to have another manipulation surgery as the scar tissue had hardened and i was unable to break through it with extensive physio. The surgeries are quiet daunting but Mr Lim made sure all my questions were answered and i was satisfied i would get the best treatment. Now 7 months from actually doing the injury i am free to return to work and live a normal like just 7 months after completley blowing my knee apart!. Thankyou Dr Lim and the great reception staff for a great experience and thankyou Dr Lim for giving me my life back! I cannot thankyou enough!"
      },
      {
        "id": "g11bbrgsf63-Bd3NQMmJ3EAE",
        "author": "Kaliopi Stephens",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I underwent hip arthroscopy surgery three months ago with Dr Lim and the surgery went perfectly well . The service I received from Dr Lim ,his staff and the nursing staff at Joondalup Private was exemplary 😊"
      },
      {
        "id": "g11bbrgsf63-3NzlXdE1BEAE",
        "author": "Alexandria Dobbs",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "My son has had 2 operations on his knee performed by Mr Tao Lim.Acl repair and a meniscus tear..Both under public..I was very pleased aswell as my son.Great recovery..I am very gratefull to him.And feel 100% reassured that any further injurys if they accure that Mr Lim will be there for my son.."
      },
      {
        "id": "g11bbrgsf63-BdF9taER3EAE",
        "author": "Lee Hannam",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Big thank you to Dr Lim\nI had a Label tear in my right shoulder and after extensive Phyiso I was referred to Dr Lim for surgery after 4 months I'm nearly pain free and have good movement back .\nI would highly recommend joc to anyone needing shoulder reconstruction.\nAgain thank you."
      },
      {
        "id": "g11bbrgsf63-X2FidHdRRRAB",
        "author": "Cam Joseph",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "I had a high impact fracture, my tibia and fibula were broken and I really didn't know what would happen, if I would walk again or what. Dr Tao Lim performed the surgery that allowed me to have my leg back. He is a brilliant surgeon and very kind and considerate man. Thank you so much Dr Lim."
      },
      {
        "id": "g11bbrgsf63-ckxpWDd3RRAB",
        "author": "Shona Mac",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Most organised and efficient medical practice I have ever been to. My husband needed a full thickness tear repaired in his shoulder and our GP referred us to a local public surgeon - the wait for the first consult with them was over 6 months away, let alone the surgery waiting list time. I rang JOG after the practice was recommended to me by a number of people. Got an initial consult within weeks (rather than 6 months!), and a surgery date set immediately for less than 3 months away, they were even organised enough to have all the admission paperwork at the appointment - he ended up getting fitted in on the short notice wait list and had the surgery 5 weeks after being added to the list! All on the public system.\n\nSurgery went well, all the staff at Joondalup Hospital were very nice, and the public physio he was referred to even commented that the surgery must have been done well as most people were still on pain killers after 1.5 weeks and my husband hadn't needed them in days.\n\nI have read some of the other reviews of this practice and was surprised to note a few people waiting for a long time past their appointment times - we never experienced this (however even if we had I would be fine with it, as I would rather a surgeon give priority to emergencies than scheduled appointments).\n\nIf you need hand holding through the process, you may be better off at a slow paced practice where they don't get so many patients through, however we wanted a fast, quality surgery and JOG definitely delivered on that.\n\nMr Lim and his staff should be proud of the professional and efficient practice."
      },
      {
        "id": "g11bbrgsf63-NXZPVnJBRRAB",
        "author": "Wayne",
        "rating": 5,
        "date": "2016-10-10",
        "listing": "/g/11bbrgsf63",
        "text": "Surgeon Tao Lim is knowledgeable, friendly and always ready to help! I have been referring patients to this practice for awhile now and imagine to be doing so for a long time.\n\nPatients are consistently happy with the care received as well as the results."
      }
    ]
  },
  "douglas-kingwell": {
    "listings": [
      {
        "key": "/g/1td_7gmd",
        "name": "Perth Orthopaedic & Sports Medicine Centre",
        "address": "Level 1/1 Havelock St, West Perth WA 6005",
        "rating": 4.4,
        "reviewCount": 62,
        "url": "https://maps.google.com/?cid=13779430128870790906",
        "primary": true,
        "shared": true,
        "placeId": "ChIJ--4GSyWlMioR-paoFrJeOr8",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJ--4GSyWlMioR-paoFrJeOr8"
      }
    ],
    "reviews": [
      {
        "id": "g1td_7gmd-cExMeHNBRRAB",
        "author": "Dennis Wolf",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Dr kingwell is definitely highly recommendable"
      }
    ]
  },
  "gregory-janes": {
    "listings": [
      {
        "key": "/g/1td_7gmd",
        "name": "Perth Orthopaedic & Sports Medicine Centre",
        "address": "Level 1/1 Havelock St, West Perth WA 6005",
        "rating": 4.4,
        "reviewCount": 62,
        "url": "https://maps.google.com/?cid=13779430128870790906",
        "primary": true,
        "shared": true,
        "placeId": "ChIJ--4GSyWlMioR-paoFrJeOr8",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJ--4GSyWlMioR-paoFrJeOr8"
      }
    ],
    "reviews": [
      {
        "id": "g1td_7gmd-YUV0dWVrRRAB",
        "author": "Alan Britton",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/1td_7gmd",
        "text": "Had Greg do my knee replacement 5 days ago wow Fantastic not a lot of pain and have 90 degree bend already thank you Greg Janes"
      },
      {
        "id": "g1td_7gmd-V0c5UVoxRRAB",
        "author": "Graham N Carol",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/1td_7gmd",
        "text": "Dr Greg Janes my go to knee guru"
      },
      {
        "id": "g1td_7gmd-ZUhGSVVXYxAB",
        "author": "lee mazey",
        "rating": 5,
        "date": "2026-02-10",
        "listing": "/g/1td_7gmd",
        "text": "Dr Janes repaired ligaments and tendons in my left shoulder and was happy with the result. I am now going to see him again for the right shoulder and after a couple of months after he operated on my left shoulder I had 5 visits for physio under a care plan from my GP she gave me an apparatus to use at home and after the five visits I had two twice in a week towards the end because she done job.When I went to see Greg for the last visit he was happy with the results but I asked him if I could have a cortisone injection which he kindly did I had to pay for it with no Medicare rebate but I didn’t worry about the cost as it helped ease the little niggle I had a few days before seeing him I probably over done something"
      },
      {
        "id": "g1td_7gmd-WW5vMVJrRRAB",
        "author": "Janis Sanderson",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/1td_7gmd",
        "text": "Had my gluteal tear repair by Dr Janes in March..I still have 3 months out of 12 for recovery but it's so great to be able to walk without pain in my right leg.\nNow I need a total Knee Replacement 🤣🤣🤣 booked in for Septemeber\nYes Dr Janes is doing that for him.\nHe is a brilliant surgeon and had a great bedside manner and also a sense of humour\nBig shout out to Suzie his brilliant personal assistant who kept me in the loop and nothing was a problem for her"
      },
      {
        "id": "g1td_7gmd-ZEhsVVYxRRAB",
        "author": "Julie-Anne M Western Australia",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1td_7gmd",
        "text": "I have had two surgeries by Dr Janes 10+ years ago on each knee and I am about to have knee recon next month and I would not let anyone else operate on my knee. Dr Janes is the best ortho surgeon in Perth in my opinion and would totally recommend Dr Janes if you are looking for an expert surgeon for your knee. Great bedside manner and he treats you like a human not a number. 👍💪"
      },
      {
        "id": "g1td_7gmd-0eVBDdk1BEAE",
        "author": "Garry Cullen",
        "rating": 1,
        "date": "2024-10-10",
        "listing": "/g/1td_7gmd",
        "text": "I had a total knee replacement by GregJanes in September 2022. It left me with a stiff and painful knee- maximum bend of about 95 degrees.\nGreg Janes then did a Arthroscopic Synovectomy in December 2023, with the result very little improvement- the pain when walking is now worse, maximum bend is 110 degrees.\nI found Greg Janes rude, impatient and showed zero empathy for my situation where it appears I I will have to put up with this stiff and painful knee for the rest of my life .\n( Just one example: when I went back to see Greg Janes after the TKR with my concerns, he said “ now this you’ve had a whinge, we’ll do another X-Ray “)"
      },
      {
        "id": "g1td_7gmd-OVpIM3VRRRAB",
        "author": "Danielle Webb",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Great experience Dr Janes before and after op visits and care excellent. No pain or great discomfort Excellent will be back for left shoulder. Thank you Dr Janes"
      },
      {
        "id": "g1td_7gmd-hbE9PYmF3EAE",
        "author": "Gail Billingham",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Dr Janes repaired my shoulder and has been dealing with me now for some years, I can't credit him and all his staff enough for their ongoing friendly professional service .Thank you"
      },
      {
        "id": "g1td_7gmd-zc1BXc2R3EAE",
        "author": "Kim Thompson",
        "rating": 1,
        "date": "2020-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Had my shoulder reconstructed by greg janes. Initial impressions were good and he came recommended to me. Follow up appointment was 2 hours late, no apology, rude and dismissive of questions. Stood at the door as if to say get out. Said no physio until 6 weeks (later was informed by an AFL team physio this is not right, especially with myself who has a history of shoulder issues). Came out of sling overly stiff due to lack of physio. Continued to have pain up to the 5 month appointment, again he was dismissive of my concerns. Saw another surgeon at 7 months post surgery who recommended an MRI. Found his surgical repair had failed and that the tear he ignored had gotten worse (said he didnt repair it because it wasnt necessary). I am now faced with a more serious surgery and time off work due to his operation. I am afraid to go back to him and am suffering because of this."
      },
      {
        "id": "g1td_7gmd-M0t5d2xRRRAB",
        "author": "Yanina Acevedo",
        "rating": 5,
        "date": "2019-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Dr Greg Janes the best doctor I have met.\nTwo knees, replacement with the best result.\nThanks to you I will be dancing in no time."
      },
      {
        "id": "g1td_7gmd-nNXVtU0pnEAE",
        "author": "Davo",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Dr greg janes and the other drs fixed my left knee as many drs wouldn’t touch it.\n8 years on boom just like new"
      },
      {
        "id": "g1td_7gmd-bGVlZy1RRRAB",
        "author": "Kerry Hughes",
        "rating": 5,
        "date": "2017-10-10",
        "listing": "/g/1td_7gmd",
        "text": "I had a full knee replacement and Dr Greg Janes was in charge. Walked out of the hospital 3 days later with no crutches. Fantastic pain management, zero pain throughout the whole process apart from some during rehabilitation which was to be expected"
      }
    ]
  },
  "ross-radic": {
    "listings": [
      {
        "key": "/g/1td_7gmd",
        "name": "Perth Orthopaedic & Sports Medicine Centre",
        "address": "Level 1/1 Havelock St, West Perth WA 6005",
        "rating": 4.4,
        "reviewCount": 62,
        "url": "https://maps.google.com/?cid=13779430128870790906",
        "primary": true,
        "shared": true,
        "placeId": "ChIJ--4GSyWlMioR-paoFrJeOr8",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJ--4GSyWlMioR-paoFrJeOr8"
      }
    ],
    "reviews": [
      {
        "id": "g1td_7gmd-Mm9YYjdnRRAB",
        "author": "Gerry Stevens",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1td_7gmd",
        "text": "My Son had a serious mva last May. Multiple fractures and broken bones. Thank God Dr. Radic was Lukes surgeon...Excellent social skills as my son also had an ABI, Dr Radic explained all procedures in great detail..My boy has amazed many people with his speedy recovery time...What more can can I say!\nTotal Ledgend."
      }
    ]
  },
  "travis-falconer": {
    "listings": [
      {
        "key": "/g/1td_7gmd",
        "name": "Perth Orthopaedic & Sports Medicine Centre",
        "address": "Level 1/1 Havelock St, West Perth WA 6005",
        "rating": 4.4,
        "reviewCount": 62,
        "url": "https://maps.google.com/?cid=13779430128870790906",
        "primary": true,
        "shared": true,
        "placeId": "ChIJ--4GSyWlMioR-paoFrJeOr8",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJ--4GSyWlMioR-paoFrJeOr8"
      }
    ],
    "reviews": [
      {
        "id": "g1td_7gmd-Y0dGV2JXYxAB",
        "author": "Xavier Simmons",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/1td_7gmd",
        "text": "Dr Travis Falconer is one hell of a surgeon. His fantastic at what he does and caring. Only down fall is his am Eagles supporter 🤣 on a serious note Dr Falconer is amazing as well as his receptionist Linda. Linda is very polite and caring and stunning. Thank you to you both. Maria Simmons"
      },
      {
        "id": "g1td_7gmd-ZERsRmNWRRAB",
        "author": "Graeme Peucker",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/1td_7gmd",
        "text": "Had full reverse shoulder replacement done by Travis Falconer and can't praise him enough. Best thing l have done,1.5 weeks in sling no pain and fast recovery, having other one done soon with Travis and looking forward to it after years of torn tendons and bone on bone and pain would recommend Travis to anyone without any reservations. So happy cheers Travis your the man"
      },
      {
        "id": "g1td_7gmd-tcDVHRENBEAE",
        "author": "James",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Highly recommend Dr. Travis Falconer. I broke my collarbone and ruptured a ligament in my shoulder. Travis got me in for surgery asap and did a fantastic job. Only a few days after surgery the pain in my shoulder had all but disappeared and a few weeks after surgery I was back to basic life movements. I was racing the clock to get my shoulder right as my second child was due. Happy to say the shoulder recovered just before bubs was born! Thanks to Dr Falconer at Perth Ortho 👍🏽💪🏽"
      },
      {
        "id": "g1td_7gmd-BM0pfMGFREAE",
        "author": "Yvonne Sharpe",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1td_7gmd",
        "text": "Travis Falconer has been amazing in his work to reconstruct my wrist. His caring attitude and friendly manner gives you confidence when facing such a challenge which can be traumatic for an active person. Today I recommended him to a tradesman facing the challenge of wrist and hand surgery. It's scary when you don't know who to trust. I wouldn't go to anyone else."
      },
      {
        "id": "g1td_7gmd-RM2JUM1ZnEAE",
        "author": "Geoff Middleton",
        "rating": 1,
        "date": "2017-10-10",
        "listing": "/g/1td_7gmd",
        "text": "My mother had broken her arm,Travis Falconer operated,during the operation the radial nerve was damaged.My mother lost all use of her arm and hand.Shelley Middleton."
      }
    ]
  },
  "james-larkin": {
    "listings": [
      {
        "key": "/g/1tg97s20",
        "name": "Coastal Orthopaedic Group",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.5,
        "reviewCount": 33,
        "url": "https://maps.google.com/?cid=9059753005658017788",
        "primary": true,
        "shared": true,
        "placeId": "ChIJOzv53DikMioR_A8Gp1u1un0",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJOzv53DikMioR_A8Gp1u1un0"
      }
    ],
    "reviews": [
      {
        "id": "g1tg97s20-TldKbWFVRRAB",
        "author": "Charls Chacko",
        "rating": 5,
        "date": "2026-06-10",
        "listing": "/g/1tg97s20",
        "text": "Dr. James Larkin and team very nice to take care of me and appreciate very nice behaviour team\nmy knee scope surgery at Bethesda Health Care very smooth and nice"
      },
      {
        "id": "g1tg97s20-zcElpY0NREAE",
        "author": "Wayne Faulkner",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tg97s20",
        "text": "Dr Larkin gets 10 out of 10 for his skills in surgery to my hip .His skills in the operation and his after care are second to none .I am so happy I chose Dr Larkin for my hip replacement Thank you"
      }
    ]
  },
  "jean-louis-papineau": {
    "listings": [
      {
        "key": "/g/1tg97s20",
        "name": "Coastal Orthopaedic Group",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.5,
        "reviewCount": 33,
        "url": "https://maps.google.com/?cid=9059753005658017788",
        "primary": true,
        "shared": true,
        "placeId": "ChIJOzv53DikMioR_A8Gp1u1un0",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJOzv53DikMioR_A8Gp1u1un0"
      }
    ],
    "reviews": [
      {
        "id": "g1tg97s20-TWxnelFuYxAB",
        "author": "KERI BOVELL",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/1tg97s20",
        "text": "Would thoroughly recommend Dr Jean-Louis Papineau. A lovely caring human being and great surgeon. Explains the procedure in detail and words non medical people can understand.\nThank you JL and your team, my hip is feeling good 👏"
      },
      {
        "id": "g1tg97s20-TUdaRVdFRRAB",
        "author": "mandy Taylor",
        "rating": 5,
        "date": "2026-04-10",
        "listing": "/g/1tg97s20",
        "text": "Dr. Jean-Louis Papineau and the team at Coastal Orthopaedics were exceptional throughout my entire experience. From the beginning, everything was clearly explained, and I felt well-informed and supported at every step of the process.\n\nI underwent a total hip replacement, and the results have been amazing. At just two weeks post-surgery, I’m already walking without crutches most of the time and feeling like I’ve got my life back. Thank you.\n\nDr. Papineau’s expertise and professionalism are second to none. I’m incredibly grateful for the care I received and would highly recommend him and his team to anyone considering orthopedic surgery."
      },
      {
        "id": "g1tg97s20-NGFXY213RRAB",
        "author": "Mr C Salt",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tg97s20",
        "text": "Dr. Jean-Louis Papineau and the team at Coastal Orthopaedics were absolutely brilliant. They performed my bicep tendon surgery, and the results have been amazing. From start to finish, the care and attention I received were exceptional. Dr. Papineau’s expertise and professionalism, combined with the supportive and attentive team at Coastal Orthopaedics, made the entire process seamless and reassuring. I couldn’t be happier with the outcome and highly recommend Dr. Papineau and Coastal Orthopaedics to anyone."
      },
      {
        "id": "g1tg97s20-cjYtRC1BRRAB",
        "author": "mike Cippitelli",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1tg97s20",
        "text": "Coastal Orthopaedics and specifically Dr Papineau and Tammy have been absolutely amazing to deal with and could not recommend them any higher. Great service and nice to be in an enviroment that really cares."
      }
    ]
  },
  "toby-leys": {
    "listings": [
      {
        "key": "/g/1tg97s20",
        "name": "Coastal Orthopaedic Group",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.5,
        "reviewCount": 33,
        "url": "https://maps.google.com/?cid=9059753005658017788",
        "primary": true,
        "shared": true,
        "placeId": "ChIJOzv53DikMioR_A8Gp1u1un0",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJOzv53DikMioR_A8Gp1u1un0"
      }
    ],
    "reviews": [
      {
        "id": "g1tg97s20-OGRmZ29nRRAB",
        "author": "Steven Gare",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tg97s20",
        "text": "I have had knee surgery due to an injury at work,my surgeon Dr Toby Leys was absolutely fantastic. From the consultation to the surgery. Toby explained everything in detail and ensured I was completely aware of what surgery I was in need of…. I would certainly recommend his expertise to anyone."
      },
      {
        "id": "g1tg97s20-3eGF2ZEtREAE",
        "author": "Isis Nair",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tg97s20",
        "text": "I absolutely love this clinic! I initially started seeing my physio here, and then most recently, Dr. Toby Leys performed my ACL reconstruction. I felt completely safe and confident in his care. Dr. Toby is incredibly caring and reassuring. His entire team went above and beyond to make sure I was seen for my initial appointment, even though it was quite late. The nurse, Shamini (I hope I'm spelling that correctly!), was just wonderful at my 2-week post-op appointment.\n\nHighly recommend these guys."
      }
    ]
  },
  "xiang-salim": {
    "listings": [
      {
        "key": "/g/1tg97s20",
        "name": "Coastal Orthopaedic Group",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.5,
        "reviewCount": 33,
        "url": "https://maps.google.com/?cid=9059753005658017788",
        "primary": true,
        "shared": true,
        "placeId": "ChIJOzv53DikMioR_A8Gp1u1un0",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJOzv53DikMioR_A8Gp1u1un0"
      }
    ],
    "reviews": [
      {
        "id": "g1tg97s20-6OXJQN0RBEAE",
        "author": "Varun Dhamija",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1tg97s20",
        "text": "Dr.Salim patiently listen to the knee issue i was experiencing, gave right consultation and operated. Highly recommended."
      },
      {
        "id": "g1tg97s20-OdG9TQVNREAE",
        "author": "Trefor Lenegan",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tg97s20",
        "text": "I cannot speak highly enough of Coastal Orthopaedics! Dr Xiang Salim did a wonderful job repairing my fractured Fibula and keeping me fully informed of progress. This was followed up with terrific after care from all the staff..especially Head Nurse Cherie who is as knowledgeable as she is affable! I always felt fully informed and truly cared for. I could not recommend this practice more highly. Trefor Lenegan"
      },
      {
        "id": "g1tg97s20-xcmR5MUNBEAE",
        "author": "Urszula Dziki",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tg97s20",
        "text": "I would have no hesitation in recommending Dr Xiam Salim and his team! You see nothing more than professionalism as soon as you walk through the door.\n\nAll the team are very good at their respective roles, nothing is too much trouble and communication over the phone, and via email was outstanding. Thank you Tammy Rose for being patient with me.\n\nWhen you meet Dr Xiam Salim you know you are in good hands from the start. Not often you meet great doctors who care about patients, and a true gentle man at the same time!\n\nThere was an absolute pleasure to see someone who not only posses knowledge but truly care about patients.\n\nThank you dr Xiam Salim for taking me on with short notice and organising tests and give all recommendations.\n\nIf you want the best in the orthopedic field Dr Xiam Salim is your man!"
      },
      {
        "id": "g1tg97s20-5dVkydllBEAE",
        "author": "Colby",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1tg97s20",
        "text": "Was referred by my physio, to see this clinic. Had Dr Xiang Salim assigned to me, an amazing specialist/surgeon. Great communication on my diagnosis, immediate response & brilliant work done by \"Magic Hands\". Can't thank you enough for my surgery & results. Highly recommend this surgeon & clinic."
      }
    ]
  },
  "aaron-tay": {
    "listings": [
      {
        "key": "/g/1pv083gl9",
        "name": "The Orthopaedic Group WA",
        "address": "3/85 Monash Ave, Nedlands WA 6009",
        "rating": 4.7,
        "reviewCount": 26,
        "url": "https://maps.google.com/?cid=8271533031927574939",
        "primary": true,
        "shared": true,
        "placeId": "ChIJITtrnv6kMioRm_Hz03djynI",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJITtrnv6kMioRm_Hz03djynI"
      }
    ],
    "reviews": [
      {
        "id": "g1pv083gl9-TlU1cGRVRRAB",
        "author": "Michelle",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/1pv083gl9",
        "text": "Mr Aaron Tay - great outcome with shoulder surgery. Technically one of the best and that’s what you need, especially with shoulders. Fantastic team at Hollywood. Thank you 🙏"
      },
      {
        "id": "g1pv083gl9-UjI5SVQxRRAB",
        "author": "Helen Jennings",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pv083gl9",
        "text": "Dr Aaron Tay is an absolute professional. I am so appreciative he was assigned my case in an emergency traumatic situation. Dr Tay was so personable, professional & compassionate, I couldn’t have asked for a better surgeon/specialist. He has continued to support me ongoing! Thanks so much Dr Aaron Tay, your care & expertise is very much appreciated!"
      },
      {
        "id": "g1pv083gl9-NXRERnRRRRAB",
        "author": "P “Warrigal” Hutchins",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1pv083gl9",
        "text": "Mr Tay was the best. My knee replacement has been so successful. I’ve waited 2 years to post this. A skilled professional with great personal interactions. Highly recommended."
      },
      {
        "id": "g1pv083gl9-teWE2bkFnEAE",
        "author": "Ms Gilbert",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1pv083gl9",
        "text": "Aaron Tay is fantastic Dr with great surgical skill and bedside manner.\nI recommend him to anyone who needs knee surgery."
      },
      {
        "id": "g1pv083gl9-adUx2Zk9REAE",
        "author": "Kelvin Matthes",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/1pv083gl9",
        "text": "Aaron Tay is amazing, In 2019 I shattered my elbow in an accident and Dr Tay rebuilt it (with a fair crack of hardware). Post procedure Dr Tay said I might loose 5-8 % range of motion, but with a lot of rehab and physio I got full motion back, even -4% as I am double jointed. Absolutely amazing work."
      },
      {
        "id": "g1pv083gl9-amNfS2x3RRAB",
        "author": "Glynn MOORE",
        "rating": 5,
        "date": "2018-10-10",
        "listing": "/g/1pv083gl9",
        "text": "Wow, what a guy. Charming polite forthrite and caring. I remember saying to him mate this is not only about my elbow it’s my livelihood. 50 weeks on and I’m all clear and healed. Dr TAY did an amazing job on an elbow that was almost beyond repair. To me He has made a miracle Happen and I am So thankful I have my career and my health.\nGOD BLESS YOU Dr TAY"
      }
    ]
  },
  "colin-whitewood": {
    "listings": [
      {
        "key": "/g/1pv083gl9",
        "name": "The Orthopaedic Group WA",
        "address": "3/85 Monash Ave, Nedlands WA 6009",
        "rating": 4.7,
        "reviewCount": 26,
        "url": "https://maps.google.com/?cid=8271533031927574939",
        "primary": true,
        "shared": true,
        "placeId": "ChIJITtrnv6kMioRm_Hz03djynI",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJITtrnv6kMioRm_Hz03djynI"
      }
    ],
    "reviews": [
      {
        "id": "g1pv083gl9-VVVseU5XYxAB",
        "author": "Jack Dalton",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/1pv083gl9",
        "text": "Dr Colin Whitewood has been amazing with both the surgery to repair my Achilles rupture and the post surgery care. Very grateful, thank you!"
      },
      {
        "id": "g1pv083gl9-ZUZCUmVHYxAB",
        "author": "Carolyn Vitek",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/1pv083gl9",
        "text": "Dr Colin Whitewood is a fantastic orthopaedic surgeon. He has repaired two torn meniscus injuries for me and both surgeries were very successful. He’s professional, knowledgeable and very reassuring, and his sense of humour really helps put you at ease. His assistant is also wonderful and keeps everything running smoothly in the rooms. I’m very grateful for the care I received and would highly recommend him."
      },
      {
        "id": "g1pv083gl9-MHQtRGxRRRAB",
        "author": "Brenda McKell",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1pv083gl9",
        "text": "There is no better Orthopaedic Surgeon than Dr Colin Whitewood.\nI had a fall at work and hurt my right knee, Dr Whitewood stayed with me through my right knee replacement journey\nWhat a wonderful gentleman he listened to everything I had to say,he answered all my questions. And he made me feel comfortable and confident before and post surgery.\nSo thankyou Colin Whitewood you are an absolute bloody legend\nBrenda Mckell xx"
      },
      {
        "id": "g1pv083gl9-ELTdhZEJ3EAE",
        "author": "Paliza Kalanaki",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/1pv083gl9",
        "text": "Dr. Whitewood is simply exceptional! His expertise is unmatched, coupled with an incredible attention to detail. He takes the time to listen and address every concern with patience and understanding. If you're seeking top-notch care, look no further. Highly recommended!"
      },
      {
        "id": "g1pv083gl9-Z05uWnhRRRAB",
        "author": "Candice Dry",
        "rating": 5,
        "date": "2022-10-10",
        "listing": "/g/1pv083gl9",
        "text": "Dr Whitewood was brilliant. Trust him completely, he was very attentive and took the time to explained everything honestly. A real expert and leader in his field."
      },
      {
        "id": "g1pv083gl9-aV9HOTJRRRAB",
        "author": "Darryl Archer",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1pv083gl9",
        "text": "Absolute perfection was performed by Dr Colin Whitewood on my hip replacement. After 7 weeks I was cycling 10 km and after 9 weeks I’m back on my surfboard. Thank you again."
      }
    ]
  },
  "piet-rogers": {
    "listings": [
      {
        "key": "/g/1pv083gl9",
        "name": "The Orthopaedic Group WA",
        "address": "3/85 Monash Ave, Nedlands WA 6009",
        "rating": 4.7,
        "reviewCount": 26,
        "url": "https://maps.google.com/?cid=8271533031927574939",
        "primary": true,
        "shared": true,
        "placeId": "ChIJITtrnv6kMioRm_Hz03djynI",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJITtrnv6kMioRm_Hz03djynI"
      }
    ],
    "reviews": [
      {
        "id": "g1pv083gl9-TW5neGNsRRAB",
        "author": "Adrienne Matthews",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/1pv083gl9",
        "text": "Dr Piet Rogers is a exceptional surgeon and I highly recommend. He operated on both my hips and I couldn't be happier with the result. He is extremely knowledgeable and explained everything to me in detail. Thanks again"
      }
    ]
  },
  "david-dyer": {
    "listings": [
      {
        "key": "/g/11t4zt2v6m",
        "name": "Wrist + Hand Institute Perth",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.8,
        "reviewCount": 18,
        "url": "https://maps.google.com/?cid=11081807862529746260",
        "primary": true,
        "shared": true,
        "placeId": "ChIJV0p43pilMioRVGU3e4l9ypk",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJV0p43pilMioRVGU3e4l9ypk"
      }
    ],
    "reviews": [
      {
        "id": "g11t4zt2v6m-Tkc5M1JrRRAB",
        "author": "Lis Kawatiri",
        "rating": 5,
        "date": "2026-05-10",
        "listing": "/g/11t4zt2v6m",
        "text": "I cannot speak highly enough of my hand surgeon Dr David Dyer and the exceptional care I received throughout my treatment. From the very first consultation, I felt completely confident that I was in expert hands. Dr Dyer took the time to thoroughly explain my central slip rupture and the associated sequelae, trigger finger affecting another digit, in a way that was clear, reassuring, and easy to understand.\nDr Dyer’s precision, skill, and deep knowledge of hand anatomy were evident and his commitment to achieving the best possible functional result, not just a quick fix.\nThroughout my recovery, Dr Dyer remained attentive and genuinely invested in my progress. Every follow-up appointment felt unhurried, and all my questions were met with thoughtful, thorough answers. If you are facing a complex hand injury, I would wholeheartedly recommend this surgeon without hesitation. Dr Dyer’s combination of technical excellence, professionalism, and compassionate care is truly outstanding."
      },
      {
        "id": "g11t4zt2v6m-YzJwaVMwRRAB",
        "author": "Rebecca Hutton",
        "rating": 5,
        "date": "2026-01-10",
        "listing": "/g/11t4zt2v6m",
        "text": "This is my second experience with the Wrist + Hand Institute for separate injuries, and once again I’ve been extremely happy with the care I’ve received.\n\nDr David Dyre is highly professional, informative, and incredibly reassuring. He explains everything clearly and has a calm, comforting manner that immediately puts you at ease. I’ve felt confident and well cared for throughout the entire process.\n\nHighly recommend Dr Dyre and the Wrist + Hand Institute."
      },
      {
        "id": "g11t4zt2v6m-YUVSck1uYxAB",
        "author": "Sue Chapman",
        "rating": 1,
        "date": "2025-10-10",
        "listing": "/g/11t4zt2v6m",
        "text": "Very disappointed with David Dyer, however his receptionist was friendly and lovely to deal with. When seeing David Dyer I got the vibe that I lived south of the river he questioned why I was seeing a Dr in Applecross! why that even mattered but that has been my Dr for over 30 years during the appointment 15/7/25 he attended his phone and responded it was a Nanny camera (that's what I thought he said) being a mum I asked if he had a new born and got no response. he did not seem at all concerned with my injuries nor the pain I was suffering. I was sent for X-Rays and a MRI plus a referral to hand therapy which I attended. To date 22/8/25 all I have received is a copy of the letter sent to my GP. and nothing more! Considering the findings I require a shoulder replacement plus the services of a spinal surgeon and it appears a series of surgeries.... David Dyer obviously didn't consider these findings important enough to make any further contact with me!"
      },
      {
        "id": "g11t4zt2v6m-YkhGaU0xRRAB",
        "author": "Nicole Tagorda",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/11t4zt2v6m",
        "text": "I’m very grateful to Dr. David Dyer and his team for their care and expertise throughout my surgery and recovery. The whole process—from consultation to post-op—was smooth, professional, and reassuring. I felt well looked after every step of the way. Highly recommend!"
      },
      {
        "id": "g11t4zt2v6m-keW9uYUFREAE",
        "author": "ND Ana Rhia",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11t4zt2v6m",
        "text": "Dr Dyer has great interpersonal skills which coupled with great medical/ surgical expertise, makes him a great doctor.\nHighly recommended.\n\nSpecial mention to his receptionist, who is helpful and attentive.\n\nND"
      }
    ]
  },
  "humza-khan": {
    "listings": [
      {
        "key": "/g/11t4zt2v6m",
        "name": "Wrist + Hand Institute Perth",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.8,
        "reviewCount": 18,
        "url": "https://maps.google.com/?cid=11081807862529746260",
        "primary": true,
        "shared": true,
        "placeId": "ChIJV0p43pilMioRVGU3e4l9ypk",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJV0p43pilMioRVGU3e4l9ypk"
      }
    ],
    "reviews": [
      {
        "id": "g11t4zt2v6m-UlhCelJtYxAB",
        "author": "Kerry Hamersley",
        "rating": 5,
        "date": "2026-10-03",
        "listing": "/g/11t4zt2v6m",
        "text": "My experience with Dr Humza Khan as well as all staff involved including reception, the. OT's, etc was remarkable. Dr Khan has the best bedside manner I have ever experienced with any medical professional. Thank you."
      },
      {
        "id": "g11t4zt2v6m-UkVWM1ZtYxAB",
        "author": "DS",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11t4zt2v6m",
        "text": "I honestly cannot thank Dr Khan and his team enough for everything they have done for me over the past six months.\n\nFrom my initial consultation through to my six-month post op review, Dr Khan made me feel that I was in the best possible hands. He was incredibly knowledgeable, thorough and reassuring, and always took the time to explain things and answer my questions.\n\nI am incredibly grateful for the care and patience I received throughout the whole process. I am so happy with the function I have regained in my wrist and to be getting back to doing the things I love.\n\nI genuinely cannot thank Dr Khan enough for giving me my wrist back! I would wholeheartedly recommend him to anyone needing hand or wrist surgery 💙"
      },
      {
        "id": "g11t4zt2v6m-WTFkNmJIYxAB",
        "author": "Nikki Hulse",
        "rating": 5,
        "date": "2026-09-10",
        "listing": "/g/11t4zt2v6m",
        "text": "I have been under the care of Perth Wrist & Hand for a year now following a significant hand injury and subsequent surgery. I also have additional challenges of living remote. The clinic have always accommodated my needs of travelling over 2000kms, answered queries, sent emails, liaised with my local OT and coordinated care. Thank you Erin. I have also received exceptional care from Dr Khan who I have always felt has had my best interest at heart, alleviated worries for my first ever general anaesthetic, was as excited as I on my healing and supportive when there were blips. In addition, despite having a number of incisions to my hand, you cannot see any scars. I thoroughly recommend Dr Khan and his team and thank them for giving me back a functional hand."
      },
      {
        "id": "g11t4zt2v6m-VG10dldHYxAB",
        "author": "Natasha Warne",
        "rating": 5,
        "date": "2026-07-10",
        "listing": "/g/11t4zt2v6m",
        "text": "I broke my wrist and required surgery, Dr Humza and the team of OTs and physios were fantastic pre and post surgery, cannot recommend them enough, a very smooth and easy recovery 🫶🏼"
      }
    ]
  },
  "grant-booth": {
    "listings": [
      {
        "key": "/g/11qgkf429v",
        "name": "Perth Shoulder Clinic",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.6,
        "reviewCount": 9,
        "url": "https://maps.google.com/?cid=15369773325019951342",
        "primary": true,
        "shared": true,
        "placeId": "ChIJx29fcvOlMioR7rAWFGhnTNU",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJx29fcvOlMioR7rAWFGhnTNU"
      }
    ],
    "reviews": [
      {
        "id": "g11qgkf429v-eW9uRzJBRRAB",
        "author": "vicki atkins",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11qgkf429v",
        "text": "Dr Booth did my reverse shoulder replacement earlier this year. He is very knowledgeable & a great surgeon who made me feel very comfortable on the day.\nHis followup care is exceptional along with his staff who are very helpful always. Can highly recommend."
      },
      {
        "id": "g11qgkf429v-c0txdThnRRAB",
        "author": "Matthew Mm",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11qgkf429v",
        "text": "Dr Grant Booth is the best surgeon."
      },
      {
        "id": "g11qgkf429v-dDlTS2pnRRAB",
        "author": "ian F",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11qgkf429v",
        "text": "I have recently had extensive shoulder Surgery with Grant Booth . He is considered , attentive , professional and very good . Highly recommend him . Ian Forsyth"
      }
    ]
  },
  "michael-perret": {
    "listings": [
      {
        "key": "/g/11qgkf429v",
        "name": "Perth Shoulder Clinic",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.6,
        "reviewCount": 9,
        "url": "https://maps.google.com/?cid=15369773325019951342",
        "primary": true,
        "shared": true,
        "placeId": "ChIJx29fcvOlMioR7rAWFGhnTNU",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJx29fcvOlMioR7rAWFGhnTNU"
      }
    ],
    "reviews": [
      {
        "id": "g11qgkf429v-Y3pVMVFsRRAB",
        "author": "Geoff Mason",
        "rating": 5,
        "date": "2026-03-10",
        "listing": "/g/11qgkf429v",
        "text": "Can highly recommend Dr Perret for any finger surgery. I had surgery in 2023 to fix the volar plate after a dislocation with a screw placed in. Unfortunately the screw came out and my finger was heavily swan necking again - Dr Perret recorrected it and I full almost fully straight it again. Never had a surgeon call the next day after surgery to check how everything went."
      },
      {
        "id": "g11qgkf429v-cFpfb3hBRRAB",
        "author": "Astro",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11qgkf429v",
        "text": "Dr Perret has been a wonderful surgeon, polite and extremely professional. 10/10."
      }
    ]
  },
  "sven-goebel": {
    "listings": [
      {
        "key": "/g/11qgkf429v",
        "name": "Perth Shoulder Clinic",
        "address": "Bethesda Hospital, 25 Queenslea Dr, Claremont WA 6010",
        "rating": 4.6,
        "reviewCount": 9,
        "url": "https://maps.google.com/?cid=15369773325019951342",
        "primary": true,
        "shared": true,
        "placeId": "ChIJx29fcvOlMioR7rAWFGhnTNU",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJx29fcvOlMioR7rAWFGhnTNU"
      }
    ],
    "reviews": [
      {
        "id": "g11qgkf429v-1OGJEbWZBEAE",
        "author": "paddymickie mickie",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/11qgkf429v",
        "text": "My Experience with Dr Seven Goebel and the Perth shoulder and Knee clinic was in a word fantastic\nI have had both shoulders and one Knee done by Dr Goebel all with excellent results than you"
      },
      {
        "id": "g11qgkf429v-oaWRtYUl3EAE",
        "author": "Steven Zyrucha",
        "rating": 5,
        "date": "2023-10-10",
        "listing": "/g/11qgkf429v",
        "text": "I had major surgery for a severely damaged and broken shoulder injury. If it wasn't for the fantastic and professional skill of Dr. Sven Goebel I would not be in the position I am today! Only a few months ago I had no use of my entire arm, and the pain was intolerable. Thanks to Dr. Goebel I have full range and use of my arm and shoulder!! He is a master of shoulder surgery and more! In my honest opinion Dr. Goebel is literally the best surgeon in his field. I can't thank him enough! My sincere and heartfelt gratitude!"
      }
    ]
  },
  "gordon-hay": {
    "listings": [
      {
        "key": "/g/119v98gyb",
        "name": "Geographe Bay Orthopaedics",
        "address": "246 Bussell Hwy, West Busselton WA 6280",
        "rating": 4.1,
        "reviewCount": 9,
        "url": "https://maps.google.com/?cid=9483437500927976561",
        "primary": true,
        "shared": true,
        "placeId": "ChIJIWCGZOk4LioRcSRuZCnwm4M",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJIWCGZOk4LioRcSRuZCnwm4M"
      }
    ],
    "reviews": [
      {
        "id": "g119v98gyb-TUdsUk5HYxAB",
        "author": "Cynthia Ossy-Orley",
        "rating": 5,
        "date": "2025-10-10",
        "listing": "/g/119v98gyb",
        "text": "All I can say about Dr Gordon Hay is that he is absolutely brilliant in his field. I had a total hip replacement and am better physically than I ever was.\nI constantly recommend him to others."
      },
      {
        "id": "g119v98gyb-a09QcXhRRRAB",
        "author": "PETER Watson",
        "rating": 5,
        "date": "2024-10-10",
        "listing": "/g/119v98gyb",
        "text": "Dr Gordon Hay carried out my shoulder reconstruction and left knee Arthroscopy and did an excellent repair job.\nI would also like to compliment his office staff Karen, Natalie and Jan who organised everything associated with both operations that went smoothly and they always showed professionalism with a smile.\nI would recommend anyone with joint issues to contact Geography Bay orthopaedics."
      },
      {
        "id": "g119v98gyb-d0wyZF9RRRAB",
        "author": "Janet Gray",
        "rating": 4,
        "date": "2023-10-10",
        "listing": "/g/119v98gyb",
        "text": "Gordon Hay and his team very very professional, even when I was worried about increased pain 8 days after surgery and Gordon was on holidays. Looking forward to working with the team on the new ap my mobility with exercises and education at the touch of a button. Janet Gray"
      }
    ]
  },
  "harry-stock": {
    "listings": [
      {
        "key": "/g/1pty_mv03",
        "name": "Bunbury Orthopaedic & Sports Surgery",
        "address": "3/138 Spencer St, South Bunbury WA 6230",
        "rating": 5,
        "reviewCount": 8,
        "url": "https://maps.google.com/?cid=12601797857616629065",
        "primary": true,
        "shared": true,
        "placeId": "ChIJ5cTpLm0dLioRSY2EYmKU4q4",
        "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJ5cTpLm0dLioRSY2EYmKU4q4"
      }
    ],
    "reviews": [
      {
        "id": "g1pty_mv03-ZFdrek5uYxAB",
        "author": "Mick Wilson",
        "rating": 5,
        "date": "2025-12-10",
        "listing": "/g/1pty_mv03",
        "text": "I’ve had quite a few surgeries and was initially hesitant about coming to Bunbury. My mum had Dr. Harry Stock though and said he was great, so I decided to book an appointment. I have never received so much attention and time before a surgery. I had a reverse shoulder replacement, and Dr. Stock could not have prepared me any better.\n\nTwo weeks post-surgery, and everything is going even better than I could have hoped.\n\nHe is the best surgeon I’ve had and just an all-round nice guy, backed by an incredibly friendly and organised team. We are very lucky to have such a high quality service here in Bunbury.\n\nThank you!"
      },
      {
        "id": "g1pty_mv03-d01LczB3RRAB",
        "author": "Jann G",
        "rating": 5,
        "date": "2021-10-10",
        "listing": "/g/1pty_mv03",
        "text": "Broken wrist - 6 screws & a plate. 2 years later full recovery & motion, near invisible scar. Impressive skills, highly recommended. Thank you Dr Harry Stock."
      },
      {
        "id": "g1pty_mv03-ZzhiRDdRRRAB",
        "author": "justaaussie",
        "rating": 5,
        "date": "2020-10-10",
        "listing": "/g/1pty_mv03",
        "text": "Dr Harry Stock looked after my daughter when fractured her tibia and fibula.\nAbsolutely amazing surgeon. Patient, caring and kind along with his receptionists and team.\nThankyou for the amazing work that you do."
      }
    ]
  }
};
