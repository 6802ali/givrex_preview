// Recipe sheets for the Givrex range, one entry per recipe collection, trilingual.
// English text follows givrex.com's own recipe pages verbatim; FR/AR are translations of the same text.
// Collections marked draft: true are not yet sourced from givrex.com.

const PACK = "linear-gradient(160deg, #F2F5EA 0%, #E4EBD4 100%)";
const pack = (f) => ({ img: "assets/" + f + ".png", bg: PACK, pad: "16px", fit: "contain", pos: "50% 50%" });
const photo = (f, pos) => ({ img: "assets/" + f, bg: "#E7EFE4", pad: "0", fit: "cover", pos: pos || "50% 50%" });

export const RECIPES = [
  {
    slug: "artichoke", product: "artichoke-hearts", visual: pack("p-artichoke-hearts"),
    en: {
      name: "Artichoke Recipes", kind: "Vegetables",
      intro: "Three preparations from the artichoke range: a meat stew with bottoms, hearts in white sauce, and artichokes for stuffing.",
      dishes: [
        {
          name: "Artichokes Stew", prepFor: "Givrex Artichoke Bottoms (400gm)", servings: "Makes 5 Servings",
          ingredients: ["1 Tablespoon of butter", "1 Diced onion", "1/2 Kilo of meat cubes", "Givrex Artichoke Bottoms"],
          steps: ["Heat 1 tablespoon of butter in a large saucepan over medium heat.", "Add in a diced onion and sauté until lightly brown.", "Stir in 1/2 a kilo of meat cubes, sauté until browned.", "Add the necessary hot water to cook it.", "Season to taste with salt and condiments as desired.", "Add the frozen Givrex Artichokes; simmer in the sauce until cooked."]
        },
        {
          name: "Artichokes with white sauce", prepFor: "Givrex Artichokes Hearts (400gm)", servings: "Makes 5 Servings",
          ingredients: ["1 Tablespoon of white flour", "Lemon juice", "Salt", "1 Medium-size sliced onion", "1 Tablespoon of oil", "1 Pack of Givrex Artichokes Hearts"],
          steps: ["Bring 2 cups of water to a boil in a heavy sauce pot.", "Dissolve in a tablespoon of white flour.", "Add lemon juice, salt as desired, a medium-size sliced onion and a tablespoon of oil.", "Add the frozen pack of Givrex Artichokes Hearts to that mixture.", "Place over very low heat; simmer and cook until the sauce thickens."]
        },
        {
          name: "Stuffed Artichokes", prepFor: "Givrex Artichokes for Stuffing (500gm)", servings: "Makes 5 Servings",
          ingredients: ["1 Tablespoon of butter", "1 Diced onion", "1/4 Kilo of minced meat", "Givrex Artichokes for Stuffing"],
          steps: ["Heat 1 tablespoon of butter in a large saucepan over medium heat.", "Add in a diced onion and sauté until lightly brown.", "Stir in 1/4 kilo of minced meat, sauté until browned.", "Season to taste with salt and condiments as desired.", "Stuff Givrex Artichokes after being thawed with the meat.", "Pour the Béchamel Sauce over the top."]
        }
      ]
    },
    fr: {
      name: "Recettes d'artichaut", kind: "Légumes",
      intro: "Trois préparations de la gamme artichaut : un ragoût de viande aux fonds, des cœurs à la sauce blanche et des artichauts à farcir.",
      dishes: [
        {
          name: "Ragoût d'artichauts", prepFor: "Fonds d'artichaut Givrex (400 g)", servings: "Pour 5 personnes",
          ingredients: ["1 cuillère à soupe de beurre", "1 oignon en dés", "1/2 kilo de viande en cubes", "Fonds d'artichaut Givrex"],
          steps: ["Faites chauffer 1 cuillère à soupe de beurre dans une grande casserole à feu moyen.", "Ajoutez un oignon en dés et faites revenir jusqu'à légère coloration.", "Ajoutez 1/2 kilo de viande en cubes et faites revenir jusqu'à ce qu'elle soit dorée.", "Ajoutez l'eau chaude nécessaire à la cuisson.", "Assaisonnez de sel et d'épices selon votre goût.", "Ajoutez les artichauts Givrex surgelés ; laissez mijoter dans la sauce jusqu'à cuisson."]
        },
        {
          name: "Artichauts à la sauce blanche", prepFor: "Cœurs d'artichaut Givrex (400 g)", servings: "Pour 5 personnes",
          ingredients: ["1 cuillère à soupe de farine blanche", "Jus de citron", "Sel", "1 oignon moyen émincé", "1 cuillère à soupe d'huile", "1 sachet de cœurs d'artichaut Givrex"],
          steps: ["Portez 2 tasses d'eau à ébullition dans une casserole à fond épais.", "Délayez-y une cuillère à soupe de farine blanche.", "Ajoutez du jus de citron, du sel selon votre goût, un oignon moyen émincé et une cuillère à soupe d'huile.", "Ajoutez le sachet de cœurs d'artichaut Givrex surgelés à ce mélange.", "Placez sur feu très doux ; laissez mijoter jusqu'à ce que la sauce épaississe."]
        },
        {
          name: "Artichauts farcis", prepFor: "Artichauts à farcir Givrex (500 g)", servings: "Pour 5 personnes",
          ingredients: ["1 cuillère à soupe de beurre", "1 oignon en dés", "1/4 de kilo de viande hachée", "Artichauts à farcir Givrex"],
          steps: ["Faites chauffer 1 cuillère à soupe de beurre dans une grande casserole à feu moyen.", "Ajoutez un oignon en dés et faites revenir jusqu'à légère coloration.", "Ajoutez 1/4 de kilo de viande hachée et faites revenir jusqu'à coloration.", "Assaisonnez de sel et d'épices selon votre goût.", "Farcissez les artichauts Givrex décongelés avec la viande.", "Nappez de sauce Béchamel."]
        }
      ]
    },
    ar: {
      name: "وصفات الخرشوف", kind: "خضروات",
      intro: "ثلاث طرق لتحضير الخرشوف: طاجن باللحم بقواعد الخرشوف، وقلوب الخرشوف بالصلصة البيضاء، وخرشوف للحشو.",
      dishes: [
        {
          name: "طاجن الخرشوف", prepFor: "قواعد خرشوف جيفركس (٤٠٠ جرام)", servings: "تكفي ٥ أشخاص",
          ingredients: ["ملعقة كبيرة زبدة", "بصلة مقطعة مكعبات", "نصف كيلو لحم مكعبات", "قواعد خرشوف جيفركس"],
          steps: ["سخّني ملعقة كبيرة من الزبدة في قدر واسع على نار متوسطة.", "أضيفي البصل المقطع مكعبات وقلّبيه حتى يشقرّ قليلًا.", "أضيفي نصف كيلو من مكعبات اللحم وقلّبيها حتى تتحمّر.", "أضيفي الماء الساخن اللازم للطهي.", "تبّلي بالملح والبهارات حسب الرغبة.", "أضيفي الخرشوف المجمّد من جيفركس واتركيه ينضج في الصلصة."]
        },
        {
          name: "الخرشوف بالصلصة البيضاء", prepFor: "قلوب خرشوف جيفركس (٤٠٠ جرام)", servings: "تكفي ٥ أشخاص",
          ingredients: ["ملعقة كبيرة دقيق أبيض", "عصير ليمون", "ملح", "بصلة متوسطة مقطعة شرائح", "ملعقة كبيرة زيت", "عبوة قلوب خرشوف جيفركس"],
          steps: ["اغلي كوبين من الماء في قدر ثقيل القاعدة.", "أذيبي فيه ملعقة كبيرة من الدقيق الأبيض.", "أضيفي عصير الليمون والملح حسب الرغبة وبصلة متوسطة مقطعة شرائح وملعقة كبيرة زيت.", "أضيفي عبوة قلوب الخرشوف المجمّدة إلى هذا الخليط.", "ضعي القدر على نار هادئة جدًا واتركيه حتى تتكثّف الصلصة."]
        },
        {
          name: "الخرشوف المحشي", prepFor: "خرشوف جيفركس للحشو (٥٠٠ جرام)", servings: "تكفي ٥ أشخاص",
          ingredients: ["ملعقة كبيرة زبدة", "بصلة مقطعة مكعبات", "ربع كيلو لحم مفروم", "خرشوف جيفركس للحشو"],
          steps: ["سخّني ملعقة كبيرة من الزبدة في قدر واسع على نار متوسطة.", "أضيفي البصل المقطع مكعبات وقلّبيه حتى يشقرّ قليلًا.", "أضيفي ربع كيلو من اللحم المفروم وقلّبيه حتى يتحمّر.", "تبّلي بالملح والبهارات حسب الرغبة.", "احشي الخرشوف بعد تذويبه باللحم.", "اسكبي صلصة البشاميل على الوجه."]
        }
      ]
    }
  },
  {
    slug: "molokhia", product: "minced-molokhia", visual: pack("pack-molokhia"),
    en: {
      name: "Molokhia Recipe", kind: "Vegetables",
      intro: "The Egyptian classic, cooked straight from frozen in stock and finished with a garlic and coriander sizzle.",
      dishes: [{
        name: "Molokhia", prepFor: "Frozen Givrex Molokhia (400gm)", servings: "Makes 4 Servings",
        ingredients: ["4 Cups of chicken or meat stock", "Frozen Givrex Molokhia", "1 Tablespoon of butter", "5 to 6 Crushed garlic cloves", "1 Tablespoon of dry coriander"],
        steps: ["Bring 2 cups of chicken or meat stock to a boil in a heavy sauce pot.", "Add the Givrex Frozen Molokhia while stirring from time to time until reaching complete homogeneity.", "Season to taste with salt.", "In a separate frying pan, heat a tablespoon of butter and fry 5 to 6 crushed garlic cloves with a tablespoon of dry coriander.", "Stir into the soup, as it starts boiling remove immediately from the heat.", "Serve with rice aside and fried chicken."]
      }]
    },
    fr: {
      name: "Recette de molokhia", kind: "Légumes",
      intro: "Le classique égyptien, cuit directement surgelé dans un bouillon et fini par un grésillement d'ail et de coriandre.",
      dishes: [{
        name: "Molokhia", prepFor: "Molokhia Givrex surgelée (400 g)", servings: "Pour 4 personnes",
        ingredients: ["4 tasses de bouillon de poulet ou de viande", "Molokhia Givrex surgelée", "1 cuillère à soupe de beurre", "5 à 6 gousses d'ail écrasées", "1 cuillère à soupe de coriandre sèche"],
        steps: ["Portez 2 tasses de bouillon de poulet ou de viande à ébullition dans une casserole à fond épais.", "Ajoutez la molokhia Givrex surgelée en remuant de temps en temps jusqu'à obtenir un mélange parfaitement homogène.", "Assaisonnez de sel selon votre goût.", "Dans une poêle à part, faites chauffer une cuillère à soupe de beurre et faites revenir 5 à 6 gousses d'ail écrasées avec une cuillère à soupe de coriandre sèche.", "Incorporez à la soupe ; dès qu'elle commence à bouillir, retirez immédiatement du feu.", "Servez avec du riz à part et du poulet frit."]
      }]
    },
    ar: {
      name: "وصفة الملوخية", kind: "خضروات",
      intro: "الطبق المصري الأشهر، يُطهى من المجمّد مباشرة في المرق ويُختم بتقلية الثوم والكزبرة.",
      dishes: [{
        name: "الملوخية", prepFor: "ملوخية جيفركس المجمّدة (٤٠٠ جرام)", servings: "تكفي ٤ أشخاص",
        ingredients: ["٤ أكواب مرق دجاج أو لحم", "ملوخية جيفركس المجمّدة", "ملعقة كبيرة زبدة", "٥ إلى ٦ فصوص ثوم مدقوقة", "ملعقة كبيرة كزبرة ناشفة"],
        steps: ["اغلي كوبين من مرق الدجاج أو اللحم في قدر ثقيل القاعدة.", "أضيفي الملوخية المجمّدة من جيفركس مع التحريك من وقت لآخر حتى يتجانس الخليط تمامًا.", "تبّلي بالملح حسب الرغبة.", "في مقلاة منفصلة، سخّني ملعقة كبيرة من الزبدة وقلّبي ٥ إلى ٦ فصوص ثوم مدقوقة مع ملعقة كبيرة من الكزبرة الناشفة.", "أضيفي التقلية إلى الملوخية، وبمجرد أن تبدأ في الغليان ارفعيها من على النار فورًا.", "تُقدَّم مع الأرز والدجاج المحمّر."]
      }]
    }
  },
  {
    slug: "broad-beans", product: "peeled-fava-beans", visual: pack("p-fava"),
    en: {
      name: "Broad Beans Recipes", kind: "Vegetables",
      intro: "Peeled broad beans served two ways: dressed as a salad, or stewed with meat.",
      dishes: [
        {
          name: "Broad Beans Salad", prepFor: "Frozen Givrex Broad Beans (400gm)", servings: "Makes 5 Servings",
          ingredients: ["Givrex Frozen Broad Beans", "Oil", "Lemon juice", "Cumin"],
          steps: ["Bring salted water to a boil in a saucepan.", "Add the Givrex Frozen Broad Beans.", "Boil until desired tenderness.", "Cool immediately in cold water then drain well.", "Serve them as salad by seasoning them with oil, lemon juice and cumin."]
        },
        {
          name: "Broad Beans Stew", prepFor: "Frozen Givrex Broad Beans (400gm)", servings: "Makes 5 Servings",
          ingredients: ["1 Tablespoon of butter", "1 Diced onion", "1/4 Kilo of meat cubes", "Givrex Frozen Broad Beans"],
          steps: ["Heat 1 tablespoon of butter in a large saucepan over medium heat.", "Add in a diced onion and sauté until lightly brown.", "Stir in 1/4 kilo of meat cubes until browned.", "Add the necessary hot water and bring to a boil and simmer.", "Season to taste with salt and condiments as desired.", "When the meat is tender, add the Givrex Frozen Broad Beans to be cooked."]
        }
      ]
    },
    fr: {
      name: "Recettes de fèves", kind: "Légumes",
      intro: "Les fèves épluchées de deux façons : assaisonnées en salade, ou mijotées avec de la viande.",
      dishes: [
        {
          name: "Salade de fèves", prepFor: "Fèves Givrex surgelées (400 g)", servings: "Pour 5 personnes",
          ingredients: ["Fèves Givrex surgelées", "Huile", "Jus de citron", "Cumin"],
          steps: ["Portez de l'eau salée à ébullition dans une casserole.", "Ajoutez les fèves Givrex surgelées.", "Faites bouillir jusqu'à la tendreté souhaitée.", "Refroidissez immédiatement dans de l'eau froide puis égouttez bien.", "Servez-les en salade en les assaisonnant d'huile, de jus de citron et de cumin."]
        },
        {
          name: "Ragoût de fèves", prepFor: "Fèves Givrex surgelées (400 g)", servings: "Pour 5 personnes",
          ingredients: ["1 cuillère à soupe de beurre", "1 oignon en dés", "1/4 de kilo de viande en cubes", "Fèves Givrex surgelées"],
          steps: ["Faites chauffer 1 cuillère à soupe de beurre dans une grande casserole à feu moyen.", "Ajoutez un oignon en dés et faites revenir jusqu'à légère coloration.", "Ajoutez 1/4 de kilo de viande en cubes et faites revenir jusqu'à coloration.", "Ajoutez l'eau chaude nécessaire, portez à ébullition puis laissez mijoter.", "Assaisonnez de sel et d'épices selon votre goût.", "Lorsque la viande est tendre, ajoutez les fèves Givrex surgelées et laissez cuire."]
        }
      ]
    },
    ar: {
      name: "وصفات الفول المقشور", kind: "خضروات",
      intro: "الفول المقشور بطريقتين: سلطة متبّلة، أو طاجن باللحم.",
      dishes: [
        {
          name: "سلطة الفول", prepFor: "فول جيفركس المجمّد (٤٠٠ جرام)", servings: "تكفي ٥ أشخاص",
          ingredients: ["فول جيفركس المجمّد", "زيت", "عصير ليمون", "كمون"],
          steps: ["اغلي ماءً مملحًا في قدر.", "أضيفي الفول المجمّد من جيفركس.", "اتركيه يغلي حتى يصل إلى درجة اللين المطلوبة.", "برّديه فورًا في ماء بارد ثم صفّيه جيدًا.", "قدّميه كسلطة متبّلة بالزيت وعصير الليمون والكمون."]
        },
        {
          name: "طاجن الفول", prepFor: "فول جيفركس المجمّد (٤٠٠ جرام)", servings: "تكفي ٥ أشخاص",
          ingredients: ["ملعقة كبيرة زبدة", "بصلة مقطعة مكعبات", "ربع كيلو لحم مكعبات", "فول جيفركس المجمّد"],
          steps: ["سخّني ملعقة كبيرة من الزبدة في قدر واسع على نار متوسطة.", "أضيفي البصل المقطع مكعبات وقلّبيه حتى يشقرّ قليلًا.", "أضيفي ربع كيلو من مكعبات اللحم حتى تتحمّر.", "أضيفي الماء الساخن اللازم واتركيه يغلي ثم اهدئي النار.", "تبّلي بالملح والبهارات حسب الرغبة.", "عندما يلين اللحم أضيفي الفول المجمّد واتركيه ينضج."]
        }
      ]
    }
  },
  {
    slug: "okra", product: "okra-special", visual: pack("pack-okra"),
    en: {
      name: "Okra Recipe", kind: "Vegetables",
      intro: "Bamia: okra simmered with meat, tomato and garlic until the sauce is smooth.",
      dishes: [{
        name: "Okra", prepFor: "Frozen Givrex Okra (400gm)", servings: "Makes 5 Servings",
        ingredients: ["1 Tablespoon of butter", "1 Diced onion", "1/2 kilo of meat cubes", "2 Fresh tomatoes juice or tomato concentrate", "Salt and pepper", "Lemon", "Frozen Givrex Okra", "5 to 6 Cloves of garlic"],
        steps: ["Heat 1 tablespoon of butter in a large saucepan over medium heat.", "Add in a diced onion and sauté until lightly brown.", "Stir in 1/2 a kilo of meat cubes and sauté until browned.", "Add the necessary hot water to cook them with the juice of 2 fresh tomatoes or a tablespoon of tomato concentrate.", "Season to taste with salt and condiments as desired.", "When meat is cooked, add frozen Givrex Okra with 5 to 6 cloves of garlic.", "Add more hot water if needed and leave to simmer until obtaining a smooth sauce.", "At the end of cooking, add lemon juice at will.", "Serve with rice aside."],
        note: "Givrex Okra could also be cooked in the same manner without adding meat cubes, but with more tomato concentrate."
      }]
    },
    fr: {
      name: "Recette de gombo", kind: "Légumes",
      intro: "Bamia : des gombos mijotés avec de la viande, de la tomate et de l'ail jusqu'à obtenir une sauce onctueuse.",
      dishes: [{
        name: "Gombo", prepFor: "Gombos Givrex surgelés (400 g)", servings: "Pour 5 personnes",
        ingredients: ["1 cuillère à soupe de beurre", "1 oignon en dés", "1/2 kilo de viande en cubes", "Le jus de 2 tomates fraîches ou du concentré de tomate", "Sel et poivre", "Citron", "Gombos Givrex surgelés", "5 à 6 gousses d'ail"],
        steps: ["Faites chauffer 1 cuillère à soupe de beurre dans une grande casserole à feu moyen.", "Ajoutez un oignon en dés et faites revenir jusqu'à légère coloration.", "Ajoutez 1/2 kilo de viande en cubes et faites revenir jusqu'à coloration.", "Ajoutez l'eau chaude nécessaire à la cuisson avec le jus de 2 tomates fraîches ou une cuillère à soupe de concentré de tomate.", "Assaisonnez de sel et d'épices selon votre goût.", "Lorsque la viande est cuite, ajoutez les gombos Givrex surgelés avec 5 à 6 gousses d'ail.", "Ajoutez de l'eau chaude si nécessaire et laissez mijoter jusqu'à obtenir une sauce onctueuse.", "En fin de cuisson, ajoutez du jus de citron à volonté.", "Servez avec du riz à part."],
        note: "Les gombos Givrex peuvent aussi être cuits de la même manière sans viande, mais avec davantage de concentré de tomate."
      }]
    },
    ar: {
      name: "وصفة البامية", kind: "خضروات",
      intro: "البامية تُطهى مع اللحم والطماطم والثوم حتى تصبح الصلصة ناعمة.",
      dishes: [{
        name: "البامية", prepFor: "بامية جيفركس المجمّدة (٤٠٠ جرام)", servings: "تكفي ٥ أشخاص",
        ingredients: ["ملعقة كبيرة زبدة", "بصلة مقطعة مكعبات", "نصف كيلو لحم مكعبات", "عصير حبتي طماطم أو معجون طماطم", "ملح وفلفل", "ليمون", "بامية جيفركس المجمّدة", "٥ إلى ٦ فصوص ثوم"],
        steps: ["سخّني ملعقة كبيرة من الزبدة في قدر واسع على نار متوسطة.", "أضيفي البصل المقطع مكعبات وقلّبيه حتى يشقرّ قليلًا.", "أضيفي نصف كيلو من مكعبات اللحم وقلّبيها حتى تتحمّر.", "أضيفي الماء الساخن اللازم للطهي مع عصير حبتي طماطم أو ملعقة كبيرة من معجون الطماطم.", "تبّلي بالملح والبهارات حسب الرغبة.", "عندما ينضج اللحم أضيفي البامية المجمّدة مع ٥ إلى ٦ فصوص ثوم.", "أضيفي مزيدًا من الماء الساخن إذا لزم واتركي الطاجن حتى تصبح الصلصة ناعمة.", "في نهاية الطهي أضيفي عصير الليمون حسب الرغبة.", "تُقدَّم مع الأرز."],
        note: "يمكن طهي بامية جيفركس بالطريقة نفسها دون لحم، مع زيادة معجون الطماطم."
      }]
    }
  },
  {
    slug: "taro", product: "peeled-and-cut-taro", visual: pack("p-taro"),
    en: {
      name: "Taro Recipe", kind: "Vegetables",
      intro: "Colocasia with its greens, simmered in stock and finished with fried garlic.",
      dishes: [{
        name: "Taro", prepFor: "Frozen Givrex Taro with its Greens (500gm)", servings: "Makes 5 Servings",
        ingredients: ["4 Cups of chicken or beef stock", "Frozen Givrex Taro with its Greens", "5 to 6 Garlic cloves", "1 Tablespoon of butter"],
        steps: ["Bring 4 cups of chicken or beef stock to a boil in a saucepan.", "Add frozen Givrex Taro with its Greens, season with salt as desired.", "Simmer for about 10 minutes.", "Mash 5 to 6 garlic cloves into a paste.", "Heat a tablespoon of butter in a small frying pan. Add the garlic, fry until it is golden brown and stir immediately into the cooking Colocasia."]
      }]
    },
    fr: {
      name: "Recette de taro", kind: "Légumes",
      intro: "De la colocase et ses feuilles, mijotées au bouillon et finies à l'ail frit.",
      dishes: [{
        name: "Taro", prepFor: "Taro Givrex surgelé avec ses feuilles (500 g)", servings: "Pour 5 personnes",
        ingredients: ["4 tasses de bouillon de poulet ou de bœuf", "Taro Givrex surgelé avec ses feuilles", "5 à 6 gousses d'ail", "1 cuillère à soupe de beurre"],
        steps: ["Portez 4 tasses de bouillon de poulet ou de bœuf à ébullition dans une casserole.", "Ajoutez le taro Givrex surgelé avec ses feuilles et salez selon votre goût.", "Laissez mijoter environ 10 minutes.", "Écrasez 5 à 6 gousses d'ail en pâte.", "Faites chauffer une cuillère à soupe de beurre dans une petite poêle. Ajoutez l'ail, faites-le frire jusqu'à ce qu'il soit doré et incorporez-le immédiatement à la colocase en cuisson."]
      }]
    },
    ar: {
      name: "وصفة القلقاس", kind: "خضروات",
      intro: "القلقاس بورقه، يُطهى في المرق ويُختم بتقلية الثوم.",
      dishes: [{
        name: "القلقاس", prepFor: "قلقاس جيفركس المجمّد بورقه (٥٠٠ جرام)", servings: "تكفي ٥ أشخاص",
        ingredients: ["٤ أكواب مرق دجاج أو لحم", "قلقاس جيفركس المجمّد بورقه", "٥ إلى ٦ فصوص ثوم", "ملعقة كبيرة زبدة"],
        steps: ["اغلي ٤ أكواب من مرق الدجاج أو اللحم في قدر.", "أضيفي القلقاس المجمّد بورقه وتبّليه بالملح حسب الرغبة.", "اتركيه على نار هادئة نحو ١٠ دقائق.", "ادقّي ٥ إلى ٦ فصوص ثوم حتى تصبح عجينة.", "سخّني ملعقة كبيرة من الزبدة في مقلاة صغيرة، أضيفي الثوم وقلّبيه حتى يذبل ويشقرّ ثم أضيفيه فورًا إلى القلقاس أثناء الطهي."]
      }]
    }
  },
  {
    slug: "spinach", product: "chopped-spinach", visual: pack("p-spinach"),
    en: {
      name: "Spinach Recipe", kind: "Vegetables",
      intro: "Spinach with minced meat and a garlic-coriander finish, and a creamed spinach side.",
      dishes: [
        {
          name: "Spinach with minced meat", prepFor: "Frozen Givrex Spinach (400gm)", servings: "Makes 5 Servings",
          ingredients: ["2 Tablespoons of butter", "1 Diced onion", "1/4 Kilo of minced meat", "Tomato paste", "Frozen Givrex Spinach", "5-6 Mashed cloves of garlic", "1 Tablespoon of fresh chopped coriander leaves (Cilantro)"],
          steps: ["Heat 1 tablespoon of butter in a large saucepan over medium heat.", "Add in a diced onion and sauté until lightly brown.", "Stir in 1/4 kilo of minced meat, sauté until browned.", "Add salt, tomato paste and the frozen Givrex Spinach to be cooked all together.", "Heat a tablespoon of butter in a separate small frying pan.", "Add 5-6 mashed cloves of garlic and a tablespoon of fresh chopped coriander leaves (Cilantro).", "Stir immediately into the spinach. Serve with rice aside."]
        },
        {
          name: "Creamed Spinach", prepFor: "Frozen Givrex Spinach (400gm)", servings: "Makes 5 Servings",
          ingredients: ["Frozen spinach", "2 Large tablespoons of cream and milk", "1 Tablespoon of raw butter"],
          steps: ["Cook Givrex Frozen Spinach in salted water.", "Drain it and pass it through a sieve.", "Stir in two large tablespoons of cream and milk as desired.", "Season to taste with salt.", "Add in a tablespoon of raw butter and serve it hot."]
        }
      ]
    },
    fr: {
      name: "Recette d'épinards", kind: "Légumes",
      intro: "Des épinards à la viande hachée finis à l'ail et à la coriandre, et des épinards à la crème.",
      dishes: [
        {
          name: "Épinards à la viande hachée", prepFor: "Épinards Givrex surgelés (400 g)", servings: "Pour 5 personnes",
          ingredients: ["2 cuillères à soupe de beurre", "1 oignon en dés", "1/4 de kilo de viande hachée", "Concentré de tomate", "Épinards Givrex surgelés", "5 à 6 gousses d'ail écrasées", "1 cuillère à soupe de coriandre fraîche ciselée"],
          steps: ["Faites chauffer 1 cuillère à soupe de beurre dans une grande casserole à feu moyen.", "Ajoutez un oignon en dés et faites revenir jusqu'à légère coloration.", "Ajoutez 1/4 de kilo de viande hachée et faites revenir jusqu'à coloration.", "Ajoutez le sel, le concentré de tomate et les épinards Givrex surgelés, et laissez cuire l'ensemble.", "Faites chauffer une cuillère à soupe de beurre dans une petite poêle à part.", "Ajoutez 5 à 6 gousses d'ail écrasées et une cuillère à soupe de coriandre fraîche ciselée.", "Incorporez immédiatement aux épinards. Servez avec du riz à part."]
        },
        {
          name: "Épinards à la crème", prepFor: "Épinards Givrex surgelés (400 g)", servings: "Pour 5 personnes",
          ingredients: ["Épinards surgelés", "2 grandes cuillères à soupe de crème et de lait", "1 cuillère à soupe de beurre cru"],
          steps: ["Faites cuire les épinards Givrex surgelés dans de l'eau salée.", "Égouttez-les et passez-les au tamis.", "Incorporez deux grandes cuillères à soupe de crème et du lait selon votre goût.", "Assaisonnez de sel selon votre goût.", "Ajoutez une cuillère à soupe de beurre cru et servez chaud."]
        }
      ]
    },
    ar: {
      name: "وصفة السبانخ", kind: "خضروات",
      intro: "سبانخ باللحم المفروم مع تقلية الثوم والكزبرة، وسبانخ بالكريمة.",
      dishes: [
        {
          name: "سبانخ باللحم المفروم", prepFor: "سبانخ جيفركس المجمّدة (٤٠٠ جرام)", servings: "تكفي ٥ أشخاص",
          ingredients: ["ملعقتان كبيرتان زبدة", "بصلة مقطعة مكعبات", "ربع كيلو لحم مفروم", "معجون طماطم", "سبانخ جيفركس المجمّدة", "٥ إلى ٦ فصوص ثوم مدقوقة", "ملعقة كبيرة كزبرة خضراء مفرومة"],
          steps: ["سخّني ملعقة كبيرة من الزبدة في قدر واسع على نار متوسطة.", "أضيفي البصل المقطع مكعبات وقلّبيه حتى يشقرّ قليلًا.", "أضيفي ربع كيلو من اللحم المفروم وقلّبيه حتى يتحمّر.", "أضيفي الملح ومعجون الطماطم والسبانخ المجمّدة واتركي المكوّنات تُطهى معًا.", "سخّني ملعقة كبيرة من الزبدة في مقلاة صغيرة منفصلة.", "أضيفي ٥ إلى ٦ فصوص ثوم مدقوقة وملعقة كبيرة من الكزبرة الخضراء المفرومة.", "أضيفي التقلية فورًا إلى السبانخ، وقدّميها مع الأرز."]
        },
        {
          name: "سبانخ بالكريمة", prepFor: "سبانخ جيفركس المجمّدة (٤٠٠ جرام)", servings: "تكفي ٥ أشخاص",
          ingredients: ["سبانخ مجمّدة", "ملعقتان كبيرتان من الكريمة واللبن", "ملعقة كبيرة زبدة طازجة"],
          steps: ["اطهي السبانخ المجمّدة من جيفركس في ماء مملح.", "صفّيها وامرريها في منخل.", "أضيفي ملعقتين كبيرتين من الكريمة واللبن حسب الرغبة.", "تبّليها بالملح حسب الرغبة.", "أضيفي ملعقة كبيرة من الزبدة الطازجة وقدّميها ساخنة."]
        }
      ]
    }
  },
  {
    slug: "green-beans", product: "cut-green-beans", visual: pack("p-green-beans"),
    en: {
      name: "Green Beans Recipe", kind: "Vegetables",
      intro: "Green beans simmered with meat, tomato and garlic until the sauce is tasty.",
      dishes: [{
        name: "Green Beans", prepFor: "Givrex Frozen Green Beans (400gm)", servings: "Makes 5 Servings",
        ingredients: ["1 Tablespoon of butter", "1 Diced onion", "1/2 Kilo of meat cubes", "2 Fresh tomatoes juice or a tablespoon of tomato concentrate", "Givrex Frozen Green Beans", "5-6 Cloves of garlic"],
        steps: ["Heat 1 tablespoon of butter in a large saucepan over medium heat.", "Add in a diced onion and sauté until lightly brown.", "Stir in 1/2 a kilo of meat cubes and sauté until browned.", "Add the necessary hot water to cook them with the juice of 2 fresh tomatoes or a tablespoon of tomato concentrate.", "Season to taste with salt and condiments as desired.", "When meat is cooked, add Givrex Frozen Green Beans with 5 to 6 cloves of garlic.", "Add more hot water if needed and leave to simmer until obtaining a tasty sauce.", "Serve with rice aside."],
        note: "Givrex Green Beans could also be cooked in the same manner without adding meat cubes, but with more tomato concentrate."
      }]
    },
    fr: {
      name: "Recette de haricots verts", kind: "Légumes",
      intro: "Des haricots verts mijotés avec de la viande, de la tomate et de l'ail jusqu'à obtenir une sauce savoureuse.",
      dishes: [{
        name: "Haricots verts", prepFor: "Haricots verts Givrex surgelés (400 g)", servings: "Pour 5 personnes",
        ingredients: ["1 cuillère à soupe de beurre", "1 oignon en dés", "1/2 kilo de viande en cubes", "Le jus de 2 tomates fraîches ou une cuillère à soupe de concentré de tomate", "Haricots verts Givrex surgelés", "5 à 6 gousses d'ail"],
        steps: ["Faites chauffer 1 cuillère à soupe de beurre dans une grande casserole à feu moyen.", "Ajoutez un oignon en dés et faites revenir jusqu'à légère coloration.", "Ajoutez 1/2 kilo de viande en cubes et faites revenir jusqu'à coloration.", "Ajoutez l'eau chaude nécessaire à la cuisson avec le jus de 2 tomates fraîches ou une cuillère à soupe de concentré de tomate.", "Assaisonnez de sel et d'épices selon votre goût.", "Lorsque la viande est cuite, ajoutez les haricots verts Givrex surgelés avec 5 à 6 gousses d'ail.", "Ajoutez de l'eau chaude si nécessaire et laissez mijoter jusqu'à obtenir une sauce savoureuse.", "Servez avec du riz à part."],
        note: "Les haricots verts Givrex peuvent aussi être cuits de la même manière sans viande, mais avec davantage de concentré de tomate."
      }]
    },
    ar: {
      name: "وصفة الفاصوليا الخضراء", kind: "خضروات",
      intro: "فاصوليا خضراء تُطهى مع اللحم والطماطم والثوم حتى تصبح الصلصة غنية.",
      dishes: [{
        name: "الفاصوليا الخضراء", prepFor: "فاصوليا جيفركس الخضراء المجمّدة (٤٠٠ جرام)", servings: "تكفي ٥ أشخاص",
        ingredients: ["ملعقة كبيرة زبدة", "بصلة مقطعة مكعبات", "نصف كيلو لحم مكعبات", "عصير حبتي طماطم أو ملعقة كبيرة معجون طماطم", "فاصوليا جيفركس الخضراء المجمّدة", "٥ إلى ٦ فصوص ثوم"],
        steps: ["سخّني ملعقة كبيرة من الزبدة في قدر واسع على نار متوسطة.", "أضيفي البصل المقطع مكعبات وقلّبيه حتى يشقرّ قليلًا.", "أضيفي نصف كيلو من مكعبات اللحم وقلّبيها حتى تتحمّر.", "أضيفي الماء الساخن اللازم للطهي مع عصير حبتي طماطم أو ملعقة كبيرة من معجون الطماطم.", "تبّلي بالملح والبهارات حسب الرغبة.", "عندما ينضج اللحم أضيفي الفاصوليا المجمّدة مع ٥ إلى ٦ فصوص ثوم.", "أضيفي مزيدًا من الماء الساخن إذا لزم واتركيها حتى تصبح الصلصة غنية.", "تُقدَّم مع الأرز."],
        note: "يمكن طهي فاصوليا جيفركس بالطريقة نفسها دون لحم، مع زيادة معجون الطماطم."
      }]
    }
  },
  {
    slug: "strawberries", product: "strawberries", visual: pack("pack-strawberries"), draft: true,
    en: {
      name: "Strawberries Recipe", kind: "Fruits",
      intro: "Two preparations from one bag: a smooth coulis for plating and a loose compote for spooning.",
      dishes: [{
        name: "Strawberry Coulis and Compote", prepFor: "Givrex IQF Strawberries (400gm)", servings: "Makes 6 Servings",
        ingredients: ["500 g Givrex IQF strawberries, from frozen", "80 g caster sugar", "Juice of half a lemon", "1 strip lemon zest", "1 tsp cornflour (compote only)", "1 tbsp water"],
        steps: ["For the coulis, blend 250 g of still-frozen berries with 40 g sugar and the lemon juice until smooth, then pass through a fine sieve.", "For the compote, warm the remaining berries with the rest of the sugar and the zest over low heat, without stirring, for 6 minutes.", "Slake the cornflour in the water, stir it through the warm fruit and cook 1 minute until it just thickens.", "Remove the zest and cool both preparations over ice to keep the colour bright.", "Hold refrigerated and use within two days."]
      }]
    },
    fr: {
      name: "Recette de fraises", kind: "Fruits",
      intro: "Deux préparations dans un seul sachet : un coulis lisse pour le dressage, une compote souple à la cuillère.",
      dishes: [{
        name: "Coulis et compote de fraises", prepFor: "Fraises IQF Givrex (400 g)", servings: "Pour 6 personnes",
        ingredients: ["500 g de fraises IQF Givrex, surgelées", "80 g de sucre semoule", "Le jus d'un demi-citron", "1 lanière de zeste de citron", "1 c. à café de fécule (compote seulement)", "1 c. à soupe d'eau"],
        steps: ["Pour le coulis, mixez 250 g de fraises encore surgelées avec 40 g de sucre et le jus de citron, puis passez au chinois.", "Pour la compote, chauffez le reste des fraises avec le sucre restant et le zeste à feu doux, sans remuer, 6 minutes.", "Délayez la fécule dans l'eau, incorporez-la au fruit chaud et laissez épaissir 1 minute.", "Retirez le zeste et refroidissez les deux préparations sur glace pour garder une couleur vive.", "Conservez au froid et utilisez sous deux jours."]
      }]
    },
    ar: {
      name: "وصفة الفراولة", kind: "فواكه",
      intro: "تحضيران من كيس واحد: صوص ناعم للتزيين وكومبوت طري للتقديم بالملعقة.",
      dishes: [{
        name: "صوص الفراولة والكومبوت", prepFor: "فراولة جيفركس المجمّدة (٤٠٠ جرام)", servings: "تكفي ٦ أشخاص",
        ingredients: ["٥٠٠ جرام فراولة جيفركس مجمّدة", "٨٠ جرام سكر ناعم", "عصير نصف ليمونة", "شريحة قشر ليمون", "ملعقة صغيرة نشا (للكومبوت فقط)", "ملعقة كبيرة ماء"],
        steps: ["للصوص: اخلطي ٢٥٠ جرامًا من الفراولة المجمّدة مع ٤٠ جرام سكر وعصير الليمون حتى تنعم، ثم صفّيها في منخل ناعم.", "للكومبوت: سخّني باقي الفراولة مع باقي السكر وقشر الليمون على نار هادئة ٦ دقائق دون تحريك.", "أذيبي النشا في الماء وأضيفيه إلى الفاكهة الساخنة واطهي دقيقة حتى يتكثّف قليلًا.", "أزيلي قشر الليمون وبرّدي التحضيرين على الثلج للحفاظ على اللون.", "احفظيهما مبرّدين واستخدميهما خلال يومين."]
      }]
    }
  },
  {
    slug: "green-peas", product: "green-peas", visual: pack("p-peas"), draft: true,
    en: {
      name: "Green Peas Recipe", kind: "Vegetables",
      intro: "Green peas and carrot stewed in a light tomato broth, the everyday Egyptian pea dish.",
      dishes: [{
        name: "Bisilla Green Pea Stew", prepFor: "Givrex Frozen Green Peas (400gm)", servings: "Makes 4 Servings",
        ingredients: ["500 g Givrex green peas, from frozen", "2 carrots, diced", "1 onion, diced", "300 g tomato passata", "2 tbsp ghee", "400 ml stock", "1 tsp ground cumin", "Salt and pepper"],
        steps: ["Fry the onion in the ghee until translucent, then add the carrot and cook 5 minutes.", "Add the passata and cumin and reduce for 8 minutes.", "Add the peas from frozen with the stock and season.", "Simmer uncovered 15 minutes, until the peas are soft and the broth has body.", "Rest 5 minutes before serving so the starch settles."]
      }]
    },
    fr: {
      name: "Recette de petits pois", kind: "Légumes",
      intro: "Petits pois et carottes mijotés dans un bouillon de tomate léger, le plat de pois du quotidien en Égypte.",
      dishes: [{
        name: "Ragoût de petits pois bisilla", prepFor: "Petits pois Givrex surgelés (400 g)", servings: "Pour 4 personnes",
        ingredients: ["500 g de petits pois Givrex, surgelés", "2 carottes en dés", "1 oignon en dés", "300 g de purée de tomate", "2 c. à soupe de ghee", "400 ml de bouillon", "1 c. à café de cumin moulu", "Sel et poivre"],
        steps: ["Faites revenir l'oignon dans le ghee jusqu'à translucidité, ajoutez la carotte et poursuivez 5 minutes.", "Ajoutez la purée de tomate et le cumin et laissez réduire 8 minutes.", "Ajoutez les pois surgelés et le bouillon, puis assaisonnez.", "Laissez frémir 15 minutes à découvert, jusqu'à ce que les pois soient fondants et le bouillon lié.", "Laissez reposer 5 minutes avant de servir."]
      }]
    },
    ar: {
      name: "وصفة البسلة", kind: "خضروات",
      intro: "بسلة وجزر يُطهيان في مرق طماطم خفيف؛ طبق البسلة المصري اليومي.",
      dishes: [{
        name: "بسلة بالطماطم", prepFor: "بسلة جيفركس المجمّدة (٤٠٠ جرام)", servings: "تكفي ٤ أشخاص",
        ingredients: ["٥٠٠ جرام بسلة جيفركس، مجمّدة", "جزرتان مقطعتان مكعبات", "بصلة مقطعة مكعبات", "٣٠٠ جرام صلصة طماطم مصفّاة", "ملعقتان كبيرتان سمن", "٤٠٠ مل مرق", "ملعقة صغيرة كمون", "ملح وفلفل"],
        steps: ["قلّبي البصل في السمن حتى يشفّ، ثم أضيفي الجزر واطهي ٥ دقائق.", "أضيفي الصلصة والكمون واتركيها تتكثّف ٨ دقائق.", "أضيفي البسلة من المجمّد مع المرق والتوابل.", "اطهي ١٥ دقيقة دون غطاء حتى تلين البسلة ويصبح للمرق قوام.", "اتركي القدر يرتاح ٥ دقائق قبل التقديم."]
      }]
    }
  },
  {
    slug: "soup-vegetables", product: "artichoke-cream-soup", visual: photo("cat-soups.jpeg", "50% 55%"), draft: true,
    en: {
      name: "Vegetables for Soup Recipe", kind: "Soups",
      intro: "A clear, well-seasoned vegetable soup built straight from the frozen soup mix, with a cream finish option.",
      dishes: [{
        name: "Vegetable Soup from the Mix", prepFor: "Givrex Vegetables for Soup (400gm)", servings: "Makes 6 Servings",
        ingredients: ["600 g Givrex vegetables for soup, from frozen", "1.5 l chicken or vegetable stock", "1 onion, diced", "2 tbsp butter", "1 bay leaf", "100 ml cream (optional)", "Salt, pepper, lemon"],
        steps: ["Sweat the onion in the butter with the bay leaf until soft, 6 minutes.", "Add the stock and bring to the boil.", "Tip in the vegetables from frozen and return to a simmer.", "Cook 12 to 15 minutes, until the root pieces are tender and the broth has taken on their flavour.", "Season, add lemon juice, and either serve clear or blend a third of the soup with the cream and stir it back for body."]
      }]
    },
    fr: {
      name: "Recette de légumes pour soupe", kind: "Soupes",
      intro: "Une soupe de légumes claire et bien assaisonnée, préparée directement à partir du mélange surgelé, avec une option crème.",
      dishes: [{
        name: "Soupe de légumes du mélange", prepFor: "Légumes pour soupe Givrex (400 g)", servings: "Pour 6 personnes",
        ingredients: ["600 g de légumes pour soupe Givrex, surgelés", "1,5 l de bouillon de poule ou de légumes", "1 oignon en dés", "2 c. à soupe de beurre", "1 feuille de laurier", "100 ml de crème (facultatif)", "Sel, poivre, citron"],
        steps: ["Faites suer l'oignon dans le beurre avec le laurier 6 minutes.", "Ajoutez le bouillon et portez à ébullition.", "Versez les légumes surgelés et ramenez à frémissement.", "Laissez cuire 12 à 15 minutes, jusqu'à ce que les légumes racines soient tendres.", "Assaisonnez, ajoutez du jus de citron, puis servez clair ou mixez un tiers de la soupe avec la crème avant de la réincorporer."]
      }]
    },
    ar: {
      name: "وصفة خضار الشوربة", kind: "شوربة",
      intro: "شوربة خضار صافية جيدة التتبيل تُحضَّر مباشرة من خليط الشوربة المجمّد، مع إمكانية الإضافة بالكريمة.",
      dishes: [{
        name: "شوربة خضار من الخليط", prepFor: "خضار الشوربة من جيفركس (٤٠٠ جرام)", servings: "تكفي ٦ أشخاص",
        ingredients: ["٦٠٠ جرام خضار للشوربة جيفركس، مجمّدة", "١٫٥ لتر مرق دجاج أو خضار", "بصلة مقطعة مكعبات", "ملعقتان كبيرتان زبدة", "ورقة غار", "١٠٠ مل كريمة (اختياري)", "ملح وفلفل وليمون"],
        steps: ["قلّبي البصل في الزبدة مع ورق الغار ٦ دقائق حتى يلين.", "أضيفي المرق واتركيه يغلي.", "أضيفي الخضار من المجمّد وأعيدي الغليان الهادئ.", "اطهي ١٢ إلى ١٥ دقيقة حتى تلين قطع الجذور ويأخذ المرق نكهتها.", "تبّلي وأضيفي عصير الليمون، ثم قدّميها صافية أو اخلطي ثلثها مع الكريمة وأعيديها للقدر."]
      }]
    }
  },
  {
    slug: "mixed-vegetables", product: "mixed-vegetables", visual: pack("pack-mixed-vegetables"), draft: true,
    en: {
      name: "Mixed Vegetables Recipe", kind: "Vegetables",
      intro: "The macedoine cut used two ways: a quick buttered side, and folded through rice as a pilaf.",
      dishes: [{
        name: "Buttered Macedoine and Rice", prepFor: "Givrex Mixed Vegetables (400gm)", servings: "Makes 4 Servings",
        ingredients: ["500 g Givrex mixed vegetables, from frozen", "40 g butter", "1 shallot, minced", "200 g long grain rice (pilaf version)", "450 ml stock (pilaf version)", "Salt, pepper, chopped parsley"],
        steps: ["For the side, melt the butter, add the shallot and the vegetables from frozen and cover for 5 minutes.", "Uncover, raise the heat and cook 4 minutes more until the water has gone and the butter coats the cut.", "For the pilaf, toast the rice in butter, add the stock and bring to the boil.", "Scatter the frozen vegetables on top, cover, and cook on the lowest heat 15 minutes without stirring.", "Rest 5 minutes, then fork the vegetables through the rice and season."]
      }]
    },
    fr: {
      name: "Recette de macédoine", kind: "Légumes",
      intro: "La macédoine de deux façons : un accompagnement rapide au beurre, ou mêlée au riz en pilaf.",
      dishes: [{
        name: "Macédoine au beurre et pilaf", prepFor: "Macédoine de légumes Givrex (400 g)", servings: "Pour 4 personnes",
        ingredients: ["500 g de macédoine de légumes Givrex, surgelée", "40 g de beurre", "1 échalote hachée", "200 g de riz long grain (version pilaf)", "450 ml de bouillon (version pilaf)", "Sel, poivre, persil ciselé"],
        steps: ["Pour l'accompagnement, faites fondre le beurre, ajoutez l'échalote et les légumes surgelés, couvrez 5 minutes.", "Découvrez, montez le feu et poursuivez 4 minutes, jusqu'à évaporation de l'eau.", "Pour le pilaf, nacrez le riz au beurre, ajoutez le bouillon et portez à ébullition.", "Parsemez les légumes surgelés en surface, couvrez et cuisez 15 minutes au plus doux, sans remuer.", "Laissez reposer 5 minutes, puis mêlez les légumes au riz à la fourchette et assaisonnez."]
      }]
    },
    ar: {
      name: "وصفة الخضار المشكّل", kind: "خضروات",
      intro: "الخضار المشكّل بطريقتين: طبق جانبي سريع بالزبدة، أو مقلّب مع الأرز على شكل بلاف.",
      dishes: [{
        name: "خضار مشكّل بالزبدة والأرز", prepFor: "خضار مشكّل من جيفركس (٤٠٠ جرام)", servings: "تكفي ٤ أشخاص",
        ingredients: ["٥٠٠ جرام خضار مشكّل جيفركس، مجمّد", "٤٠ جرام زبدة", "بصلة صغيرة مفرومة", "٢٠٠ جرام أرز طويل الحبة (نسخة البلاف)", "٤٥٠ مل مرق (نسخة البلاف)", "ملح وفلفل وبقدونس مفروم"],
        steps: ["للطبق الجانبي: أذيبي الزبدة وأضيفي البصل والخضار من المجمّد وغطّي ٥ دقائق.", "ارفعي الغطاء وزيدي النار واطهي ٤ دقائق حتى يتبخّر الماء وتغلّف الزبدة الخضار.", "للبلاف: حمّري الأرز في الزبدة وأضيفي المرق واتركيه يغلي.", "وزّعي الخضار المجمّد على السطح وغطّي واطهي ١٥ دقيقة على أهدأ نار دون تحريك.", "اتركيه يرتاح ٥ دقائق ثم قلّبي الخضار مع الأرز بالشوكة وتبّلي."]
      }]
    }
  },
  {
    slug: "vine-leaves", product: null, visual: photo("recipes/vine-leaves.jpg", "50% 50%"), draft: true,
    en: {
      name: "Vine Leaves Recipe", kind: "Vegetables",
      intro: "Mahshi warak enab: vine leaves rolled around seasoned rice and simmered under a plate until glossy.",
      dishes: [{
        name: "Stuffed Vine Leaves", prepFor: "Givrex Vine Leaves", servings: "Makes 6 Servings",
        ingredients: ["60 vine leaves, blanched", "300 g short grain rice, rinsed", "2 tomatoes, finely diced", "1 onion, finely diced", "1 small bunch each parsley, dill and mint, chopped", "80 ml olive oil", "Juice of 2 lemons", "700 ml stock", "Salt, pepper, ground cumin"],
        steps: ["Mix the rice with the tomato, onion, herbs, half the olive oil, the cumin and plenty of seasoning.", "Lay a leaf vein side up, place a finger of filling near the stem, fold the sides in and roll tightly but not hard.", "Line the pot with torn leaves, then pack the rolls in close layers, seam down.", "Pour over the stock, lemon juice and remaining oil, set a plate directly on the rolls to hold them down.", "Cover and simmer on low for 50 to 60 minutes, until the rice is tender and the liquid nearly gone. Rest 15 minutes before unloading."]
      }]
    },
    fr: {
      name: "Recette de feuilles de vigne", kind: "Légumes",
      intro: "Mahshi warak enab : des feuilles de vigne roulées autour d'un riz assaisonné et mijotées sous une assiette.",
      dishes: [{
        name: "Feuilles de vigne farcies", prepFor: "Feuilles de vigne Givrex", servings: "Pour 6 personnes",
        ingredients: ["60 feuilles de vigne blanchies", "300 g de riz rond rincé", "2 tomates en petits dés", "1 oignon en petits dés", "1 petit bouquet de persil, d'aneth et de menthe, ciselés", "80 ml d'huile d'olive", "Le jus de 2 citrons", "700 ml de bouillon", "Sel, poivre, cumin moulu"],
        steps: ["Mélangez le riz avec la tomate, l'oignon, les herbes, la moitié de l'huile, le cumin et un assaisonnement généreux.", "Posez une feuille nervures vers le haut, déposez un doigt de farce près de la tige, rabattez les côtés et roulez serré sans forcer.", "Tapissez la casserole de feuilles déchirées, puis rangez les rouleaux en couches serrées, soudure vers le bas.", "Versez le bouillon, le jus de citron et le reste d'huile, posez une assiette directement sur les rouleaux.", "Couvrez et laissez mijoter 50 à 60 minutes à feu doux, jusqu'à ce que le riz soit tendre. Laissez reposer 15 minutes."]
      }]
    },
    ar: {
      name: "وصفة ورق العنب", kind: "خضروات",
      intro: "محشي ورق العنب: ورق يُلفّ حول أرز متبّل ويُطهى تحت طبق حتى يلمع.",
      dishes: [{
        name: "ورق العنب المحشي", prepFor: "ورق عنب من جيفركس", servings: "تكفي ٦ أشخاص",
        ingredients: ["٦٠ ورقة عنب مسلوقة سلقًا خفيفًا", "٣٠٠ جرام أرز قصير الحبة مغسول", "حبتا طماطم مقطعتان ناعمًا", "بصلة مقطعة ناعمًا", "حزمة صغيرة من البقدونس والشبت والنعناع، مفرومة", "٨٠ مل زيت زيتون", "عصير ليمونتين", "٧٠٠ مل مرق", "ملح وفلفل وكمون"],
        steps: ["اخلطي الأرز مع الطماطم والبصل والأعشاب ونصف الزيت والكمون وتتبيل وفير.", "افرشي الورقة وعروقها لأعلى، وضعي أصبعًا من الحشو قرب الساق، ثم اطوي الجانبين ولفّي بإحكام دون شدّ.", "افرشي قاع القدر بورق ممزّق ثم رصّي اللفائف في طبقات متقاربة والوصلة لأسفل.", "أضيفي المرق وعصير الليمون وباقي الزيت، وضعي طبقًا فوق اللفائف لتثبيتها.", "غطّي القدر واطهي على نار هادئة ٥٠ إلى ٦٠ دقيقة حتى يلين الأرز ويكاد السائل ينتهي. اتركيه يرتاح ١٥ دقيقة."]
      }]
    }
  }
];

export const RECIPE_BY_SLUG = RECIPES.reduce((m, r) => { m[r.slug] = r; return m; }, {});
