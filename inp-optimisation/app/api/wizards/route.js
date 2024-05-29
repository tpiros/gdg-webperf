const wizardList = [
  {
    id: 1,
    name: 'Harry Potter',
    house: 'Gryffindor',
    wand: {
      wood: 'Holly',
      core: 'Phoenix feather',
      length: '11 inches',
    },
    bio: 'The Boy Who Lived, Harry is known for his bravery, his role in defeating Voldemort, and his strong sense of justice.',
  },
  {
    id: 2,
    name: 'Ron Weasley',
    house: 'Gryffindor',
    wand: {
      wood: 'Willow',
      core: 'Unicorn hair',
      length: '14 inches',
    },
    bio: "Harry's loyal best friend, Ron is known for his humor, courage, and strategic thinking in chess and battles.",
  },
  {
    id: 3,
    name: 'Hermione Granger',
    house: 'Gryffindor',
    wand: {
      wood: 'Vine',
      core: 'Dragon heartstring',
      length: '10¾ inches',
    },
    bio: 'The brightest witch of her age, Hermione is known for her intelligence, dedication, and strong principles.',
  },
  {
    id: 4,
    name: 'Draco Malfoy',
    house: 'Slytherin',
    wand: {
      wood: 'Hawthorn',
      core: 'Unicorn hair',
      length: '10 inches',
    },
    bio: 'A member of the Malfoy family, Draco is known for his rivalry with Harry and his complex journey throughout the series.',
  },
  {
    id: 5,
    name: 'Albus Dumbledore',
    house: 'Gryffindor',
    wand: {
      wood: 'Elder',
      core: 'Thestral tail hair',
      length: '15 inches',
    },
    bio: 'The wise and powerful headmaster of Hogwarts, Dumbledore is known for his wisdom, kindness, and crucial role in the fight against Voldemort.',
  },
  {
    id: 6,
    name: 'Lord Voldemort',
    house: 'Slytherin',
    wand: {
      wood: 'Yew',
      core: 'Phoenix feather',
      length: '13½ inches',
    },
    bio: 'The Dark Lord, Voldemort is known for his fearsome power, his quest for immortality, and his reign of terror over the wizarding world.',
  },
  {
    id: 7,
    name: 'Rubeus Hagrid',
    house: 'Gryffindor',
    wand: {
      wood: 'Oak',
      core: 'Unknown',
      length: '16 inches (broken)',
    },
    bio: 'The Keeper of Keys and Grounds at Hogwarts, Hagrid is known for his love of magical creatures and his loyalty to Dumbledore.',
  },
  {
    id: 8,
    name: 'Severus Snape',
    house: 'Slytherin',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'The Potions Master and later Headmaster of Hogwarts, Snape is known for his complex character, his deep love for Lily Potter, and his pivotal role in the defeat of Voldemort.',
  },
  {
    id: 9,
    name: 'Luna Lovegood',
    house: 'Ravenclaw',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: "Known for her quirky personality and unique perspective, Luna is a loyal friend and a member of Dumbledore's Army.",
  },
  {
    id: 10,
    name: 'Neville Longbottom',
    house: 'Gryffindor',
    wand: {
      wood: 'Cherry',
      core: 'Unicorn hair',
      length: '13 inches',
    },
    bio: 'Initially timid, Neville grows into a courageous and capable wizard, playing a key role in the final battle against Voldemort.',
  },
  {
    id: 11,
    name: 'Ginny Weasley',
    house: 'Gryffindor',
    wand: {
      wood: 'Yew',
      core: 'Unicorn hair',
      length: '11 inches',
    },
    bio: 'The youngest Weasley, Ginny is known for her fierce independence, strong will, and skill in Quidditch.',
  },
  {
    id: 12,
    name: 'Sirius Black',
    house: 'Gryffindor',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'Harry’s godfather, Sirius is known for his rebellious spirit, loyalty to his friends, and tragic fate.',
  },
  {
    id: 13,
    name: 'Remus Lupin',
    house: 'Gryffindor',
    wand: {
      wood: 'Cypress',
      core: 'Unicorn hair',
      length: '10¼ inches',
    },
    bio: 'A werewolf and former Defense Against the Dark Arts professor, Lupin is known for his kindness, intelligence, and bravery.',
  },
  {
    id: 14,
    name: 'Bellatrix Lestrange',
    house: 'Slytherin',
    wand: {
      wood: 'Walnut',
      core: 'Dragon heartstring',
      length: '12¾ inches',
    },
    bio: 'A fanatically loyal Death Eater, Bellatrix is known for her cruelty, madness, and powerful dark magic.',
  },
  {
    id: 15,
    name: 'Minerva McGonagall',
    house: 'Gryffindor',
    wand: {
      wood: 'Fir',
      core: 'Dragon heartstring',
      length: '9½ inches',
    },
    bio: 'The stern yet fair Transfiguration professor and Head of Gryffindor House, McGonagall is known for her loyalty and leadership.',
  },
  {
    id: 16,
    name: 'Lucius Malfoy',
    house: 'Slytherin',
    wand: {
      wood: 'Elm',
      core: 'Dragon heartstring',
      length: '18 inches',
    },
    bio: 'A prominent Death Eater, Lucius is known for his wealth, influence, and eventual disillusionment with Voldemort.',
  },
  {
    id: 17,
    name: 'Nymphadora Tonks',
    house: 'Hufflepuff',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'A Metamorphmagus and member of the Order of the Phoenix, Tonks is known for her cheerful personality and bravery.',
  },
  {
    id: 18,
    name: 'Alastor Moody',
    house: 'Unknown',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'A famous Auror known for his paranoia and combat skills, Moody is a key member of the Order of the Phoenix.',
  },
  {
    id: 19,
    name: 'Dolores Umbridge',
    house: 'Slytherin',
    wand: {
      wood: 'Birch',
      core: 'Dragon heartstring',
      length: '8 inches',
    },
    bio: 'Known for her sadistic and tyrannical behavior, Umbridge serves as a high-ranking Ministry official and briefly as Hogwarts’ headmistress.',
  },
  {
    id: 20,
    name: 'Cho Chang',
    house: 'Ravenclaw',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'A skilled Quidditch player and Harry’s first love interest, Cho is known for her grace and emotional depth.',
  },
  {
    id: 21,
    name: 'Cedric Diggory',
    house: 'Hufflepuff',
    wand: {
      wood: 'Ash',
      core: 'Unicorn hair',
      length: '12¼ inches',
    },
    bio: 'A talented and noble student, Cedric is known for his fairness, bravery, and tragic death in the Triwizard Tournament.',
  },
  {
    id: 22,
    name: 'Fleur Delacour',
    house: 'Beauxbatons',
    wand: {
      wood: 'Rosewood',
      core: 'Veela hair',
      length: '9½ inches',
    },
    bio: 'A Triwizard Champion representing Beauxbatons, Fleur is known for her beauty, courage, and loyalty.',
  },
  {
    id: 23,
    name: 'Viktor Krum',
    house: 'Durmstrang',
    wand: {
      wood: 'Hornbeam',
      core: 'Dragon heartstring',
      length: '10¼ inches',
    },
    bio: 'A famous Quidditch Seeker and Triwizard Champion, Krum is known for his athletic prowess and stoic nature.',
  },
  {
    id: 24,
    name: 'Molly Weasley',
    house: 'Gryffindor',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'The matriarch of the Weasley family, Molly is known for her fierce protectiveness, nurturing nature, and powerful magic.',
  },
  {
    id: 25,
    name: 'Arthur Weasley',
    house: 'Gryffindor',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'The head of the Weasley family, Arthur is known for his fascination with Muggle inventions and his gentle, kind demeanor.',
  },
  {
    id: 26,
    name: 'Percy Weasley',
    house: 'Gryffindor',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'The ambitious and rule-abiding third Weasley son, Percy is known for his dedication to the Ministry and eventual reconciliation with his family.',
  },
  {
    id: 27,
    name: 'Fred Weasley',
    house: 'Gryffindor',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'One of the Weasley twins, Fred is known for his pranks, entrepreneurial spirit, and tragic death in the Battle of Hogwarts.',
  },
  {
    id: 28,
    name: 'George Weasley',
    house: 'Gryffindor',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'The other Weasley twin, George is known for his humor, business acumen, and the loss of his ear in the battle against Death Eaters.',
  },
  {
    id: 29,
    name: 'Bill Weasley',
    house: 'Gryffindor',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'The eldest Weasley son, Bill is known for his work as a curse breaker, his marriage to Fleur Delacour, and his bravery.',
  },
  {
    id: 30,
    name: 'Charlie Weasley',
    house: 'Gryffindor',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'The second eldest Weasley son, Charlie is known for his work with dragons and his adventurous spirit.',
  },
  {
    id: 31,
    name: 'Gilderoy Lockhart',
    house: 'Ravenclaw',
    wand: {
      wood: 'Cherry',
      core: 'Dragon heartstring',
      length: '9 inches',
    },
    bio: 'A famous yet fraudulent author and former Defense Against the Dark Arts professor, Lockhart is known for his vanity and incompetence.',
  },
  {
    id: 32,
    name: 'Horace Slughorn',
    house: 'Slytherin',
    wand: {
      wood: 'Cedar',
      core: 'Dragon heartstring',
      length: '10¼ inches',
    },
    bio: 'The amiable Potions Master, Slughorn is known for his talent, connections, and role in revealing Voldemort’s Horcruxes.',
  },
  {
    id: 33,
    name: 'Sybil Trelawney',
    house: 'Ravenclaw',
    wand: {
      wood: 'Hazel',
      core: 'Unicorn hair',
      length: '9½ inches',
    },
    bio: 'The eccentric Divination professor, Trelawney is known for her vague predictions and the crucial prophecy she made about Harry and Voldemort.',
  },
  {
    id: 34,
    name: 'Pomona Sprout',
    house: 'Hufflepuff',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'The Head of Hufflepuff House and Herbology professor, Sprout is known for her knowledge of magical plants and her nurturing nature.',
  },
  {
    id: 35,
    name: 'Filius Flitwick',
    house: 'Ravenclaw',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'The diminutive Charms professor and Head of Ravenclaw House, Flitwick is known for his expertise in spells and his cheerful demeanor.',
  },
  {
    id: 36,
    name: 'Argus Filch',
    house: 'None (Squib)',
    wand: {
      wood: 'None',
      core: 'None',
      length: 'None',
    },
    bio: 'The cantankerous caretaker of Hogwarts, Filch is known for his harshness, loyalty to the school, and his cat, Mrs. Norris.',
  },
  {
    id: 37,
    name: 'Lavender Brown',
    house: 'Gryffindor',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'A member of Dumbledore’s Army, Lavender is known for her romantic relationship with Ron and her tragic fate in the Battle of Hogwarts.',
  },
  {
    id: 38,
    name: 'Parvati Patil',
    house: 'Gryffindor',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'A member of Dumbledore’s Army and close friend of Lavender Brown, Parvati is known for her bravery and loyalty.',
  },
  {
    id: 39,
    name: 'Dean Thomas',
    house: 'Gryffindor',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'A talented artist and member of Dumbledore’s Army, Dean is known for his friendship with Harry and his loyalty during the Second Wizarding War.',
  },
  {
    id: 40,
    name: 'Seamus Finnigan',
    house: 'Gryffindor',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'Known for his tendency to cause explosions, Seamus is a member of Dumbledore’s Army and a loyal friend to Harry.',
  },
  {
    id: 41,
    name: 'Pansy Parkinson',
    house: 'Slytherin',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'A member of the Slytherin house, Pansy is known for her loyalty to Draco Malfoy and her disdain for Harry and his friends.',
  },
  {
    id: 42,
    name: 'Gregory Goyle',
    house: 'Slytherin',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'One of Draco Malfoy’s closest cronies, Goyle is known for his brute strength and loyalty to the Malfoy family.',
  },
  {
    id: 43,
    name: 'Vincent Crabbe',
    house: 'Slytherin',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'Another of Draco Malfoy’s cronies, Crabbe is known for his lack of intelligence, brute strength, and eventual demise in the Room of Requirement.',
  },
  {
    id: 44,
    name: 'Blaise Zabini',
    house: 'Slytherin',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'A member of Slytherin house, Blaise is known for his aloof demeanor and his pure-blood status.',
  },
  {
    id: 45,
    name: 'Kingsley Shacklebolt',
    house: 'Unknown',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'An Auror and member of the Order of the Phoenix, Kingsley is known for his calm demeanor, powerful magic, and leadership during the Second Wizarding War.',
  },
  {
    id: 46,
    name: 'Aberforth Dumbledore',
    house: 'Unknown',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'Albus Dumbledore’s younger brother, Aberforth is known for his gruff demeanor, loyalty, and role in the Battle of Hogwarts.',
  },
  {
    id: 47,
    name: 'Peter Pettigrew',
    house: 'Gryffindor',
    wand: {
      wood: 'Chestnut',
      core: 'Dragon heartstring',
      length: '9¼ inches',
    },
    bio: 'A former friend of James Potter, Pettigrew is known for his betrayal, cowardice, and eventual demise.',
  },
  {
    id: 48,
    name: 'Mundungus Fletcher',
    house: 'Unknown',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'A member of the Order of the Phoenix, Mundungus is known for his shady dealings and cowardly nature.',
  },
  {
    id: 49,
    name: 'Rita Skeeter',
    house: 'Unknown',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'A journalist known for her sensationalist and often unethical reporting, Skeeter is an Animagus who transforms into a beetle.',
  },
  {
    id: 50,
    name: 'Fenrir Greyback',
    house: 'Unknown',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'A savage werewolf and Death Eater, Greyback is known for his brutality and role in spreading lycanthropy.',
  },
  {
    id: 51,
    name: 'Madam Pomfrey',
    house: 'Unknown',
    wand: {
      wood: 'Unknown',
      core: 'Unknown',
      length: 'Unknown',
    },
    bio: 'The matron of the Hogwarts Hospital Wing, Madam Pomfrey is known for her exceptional healing abilities and care for students.',
  },
  {
    id: 52,
    name: 'Ollivander',
    house: 'Ravenclaw',
    wand: {
      wood: 'Hornbeam',
      core: 'Dragon heartstring',
      length: '12¾ inches',
    },
    bio: 'The renowned wandmaker, Ollivander is known for his expertise in wandlore and his crucial role in Harry’s journey.',
  },
  {
    id: 53,
    name: 'Griphook',
    house: 'Unknown',
    wand: {
      wood: 'None',
      core: 'None',
      length: 'None',
    },
    bio: 'A goblin who works at Gringotts, Griphook is known for his cunning nature and pivotal role in the trio’s break-in to the bank.',
  },
  {
    id: 54,
    name: 'Grawp',
    house: 'None',
    wand: {
      wood: 'None',
      core: 'None',
      length: 'None',
    },
    bio: 'Hagrid’s giant half-brother, Grawp is known for his immense size, strength, and eventual softening under Hagrid’s care.',
  },
  {
    id: 55,
    name: 'Firenze',
    house: 'None',
    wand: {
      wood: 'None',
      core: 'None',
      length: 'None',
    },
    bio: 'A centaur and Divination professor at Hogwarts, Firenze is known for his wisdom, bravery, and conflict with his herd.',
  },
  {
    id: 56,
    name: 'Kreacher',
    house: 'None',
    wand: {
      wood: 'None',
      core: 'None',
      length: 'None',
    },
    bio: 'The Black family house-elf, Kreacher is known for his initial hostility, eventual loyalty, and significant role in the fight against Voldemort.',
  },
  {
    id: 57,
    name: 'Winky',
    house: 'None',
    wand: {
      wood: 'None',
      core: 'None',
      length: 'None',
    },
    bio: 'A house-elf formerly in the service of the Crouch family, Winky is known for her deep sense of duty and struggle with freedom.',
  },
  {
    id: 58,
    name: 'Fang',
    house: 'None',
    wand: {
      wood: 'None',
      core: 'None',
      length: 'None',
    },
    bio: 'Hagrid’s loyal and gentle boarhound, Fang is known for his large size and loveable nature.',
  },
  {
    id: 59,
    name: 'Mrs. Norris',
    house: 'None',
    wand: {
      wood: 'None',
      core: 'None',
      length: 'None',
    },
    bio: 'Argus Filch’s faithful cat, Mrs. Norris is known for her keen sense of detection and close companionship with Filch.',
  },
];

export async function GET() {
  return Response.json(wizardList);
}
