(function () {

  /* ---------- 🕹️ GAMEPLAY TIPS ---------- */
  const gameplayTips = [
    "Use D to go right. Unless you are facing left.",
    "Jumping is faster. Probably.",
    "Red things are not friends.",
    "You cannot win if you lose.",
    "Try not dying. It helps a lot.",
    "Gravity is on. Always.",
    "Reloading is faster than dying.",
    "The save button saves. Unless it does not.",
    "Boss fights are just fights with louder music.",
    "Collect everything. Even if you do not need it.",
    "You can’t win if you lose. Think about it.",
    "Enemies can’t kill you if you quit first.",
    "Pressing random keys sometimes makes cool sounds. (try it!)",
    "‘Lag’ is just the universe taking a break.",
    "Sprinting drains stamina. Sitting still doesn’t.",
    "Fire hurts. It’s been tested.",
    "Collecting coins doesn’t improve your real finances.",
    "The walls exist for a reason.",
    "If you can’t find the exit… maybe you are the exit.",
    "Taking fall damage? Just don’t fall.",
    "The secret door isn’t that secret.",
    "‘Are you sure you want to quit?’ No one ever is.",
    "Pressing W moves you forward — in game and in life.",
    "If it glows, click it. If it explodes, remember that.",
    "Saving prevents tragedy. Usually.",
    "Crouching in real life doesn’t increase stealth.",
    "Boss music means something’s wrong.",
    "Don’t jump off the map. It’s not a shortcut.",
    "Reloading is faster than dying. Always.",
    "Gravity is undefeated since forever.",
    "Friendly fire is only funny once.",
    "If it’s glowing green, that’s not food."
  ];

  /* ---------- 🧱 OBVIOUS FACTS YOU DIDN’T NEED ---------- */
  const obviousFacts = [
    "If you punch a wall hard enough, the wall wins.",
    "Did you know most houses have a floor? Incredible technology.",
    "Standing in rain makes you wet.",
    "Falling hurts more the higher you go.",
    "The sun is really bright. Do not stare at it.",
    "Eating food stops hunger for a bit.",
    "Water is often found in wet places.",
    "If you walk long enough, you’ll be somewhere else.",
    "Hitting your head hurts, no matter how confident you are.",
    "If something’s hot, it’s not cold.",
    "Running into trees is rarely productive.",
    "If your phone battery dies, it turns off.",
    "Jumping off cliffs isn’t a reusable strategy.",
    "Keys open locks. Unless they don’t.",
    "Clouds are not solid. Do not test.",
    "Breathing underwater only works once.",
    "Fire is not a toy. Unless you’re chaos itself.",
    "Standing up increases your height slightly.",
    "You can’t drown in sand, but you can regret it.",
    "Sleeping at night is the default setting."
  ];

  /* ---------- 🎮 GAME LOGIC & DUMB GAMER WISDOM ---------- */
  const gamerLogic = [
    "Pressing W makes you advance your destiny and your character.",
    "If it glows, click it. If it explodes, remember that.",
    "Loot everything. Even if you don’t need it. Especially if you don’t need it.",
    "The tutorial is optional until it’s not.",
    "Friendly fire is only funny once.",
    "Don’t jump off the map. You won’t win faster.",
    "Saving the game prevents tragedy. Usually.",
    "Boss fights are just normal fights with louder music.",
    "Collectibles don’t fill the void, but they try.",
    "The harder the level, the louder the keyboard.",
    "Pressing jump twice doesn’t always mean double jump. Sometimes it means goodbye.",
    "Explosions solve problems. Sometimes they create them too.",
    "Crouching in real life doesn’t increase stealth.",
    "The final boss doesn’t care about your feelings.",
    "The game isn’t cheating. You’re just losing correctly."
  ];

  /* ---------- 🌎 LIFE & CHAOS “TIPS” ---------- */
  const lifeTips = [
    "Most doors can be opened. Try it sometime.",
    "The fridge light turns off. Probably.",
    "You can’t lose an argument if you stop responding.",
    "Yelling at the microwave won’t make it faster.",
    "Traffic lights don’t care about your schedule.",
    "Gravity is still undefeated since the beginning of time.",
    "Socks come in pairs until they don’t.",
    "Toothpaste tastes worse than it looks.",
    "Sleep debt cannot be paid with exposure.",
    "Money can be exchanged for goods and services.",
    "The faster you run, the sooner you’re tired.",
    "Most mirrors reflect you. The scary ones don’t.",
    "Coffee is basically legal energy theft.",
    "You can’t delete real life by pressing escape.",
    "Stairs are just vertical regrets.",
    "The universe doesn’t have patch notes.",
    "Birds don’t pay rent.",
    "Music makes silence jealous.",
    "Friends are just NPCs with better dialogue.",
    "If you touch grass, the grass touches back.",
    "Air is free, but only while supplies last.",
    "Time flies but it refuses to land.",
    "Gravity pulls us together mostly toward the floor.",
    "No one has ever won an argument with Wi-Fi.",
    "Life is the longest unskippable cutscene."
  ];

  /* ---------- 🧠 REAL-LIFE “TIPS” ---------- */
  const realLifeTips = [
    "Bathrooms often have sinks. Use them.",
    "Don’t lick doorknobs on other planets. Or this one.",
    "You can’t lose a fight if you don’t show up.",
    "If it’s on fire, it’s probably hot.",
    "If it’s glowing green, that’s not food.",
    "Breathing is a good daily habit.",
    "Standing up is faster than lying down, usually.",
    "The floor is reliable. It’s always there for you.",
    "If you drop something, gravity wins. Every time.",
    "Time only moves forward — plan accordingly.",
    "Chairs are like sitting upgrades.",
    "‘Hot water’ is just aggressive water.",
    "You can’t spell ‘snack’ without ‘ack’.",
    "Most doors open when you pull the right way.",
    "Running upstairs is fun until it’s not.",
    "Sleep is the human loading screen.",
    "Forgetting something means you’ll remember it later.",
    "Socks improve walking DLC.",
    "Birds don’t know what Wi-Fi is.",
    "The fridge light goes out when you close the door. Or does it? 👀"
  ];

  /* ---------- 🪄 Combine Everything ---------- */
  const SQ_TIPS = [
    ...gameplayTips,
    ...obviousFacts,
    ...gamerLogic,
    ...lifeTips,
    ...realLifeTips
  ];

  /* ---------- 🔁 Shuffle & Helper Methods ---------- */
  function SQ_shuffleTips() {
    for (let i = SQ_TIPS.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [SQ_TIPS[i], SQ_TIPS[j]] = [SQ_TIPS[j], SQ_TIPS[i]];
    }
    return SQ_TIPS;
  }

  function SQ_getRandomTip() {
    if (!SQ_TIPS.length) return "";
    return SQ_TIPS[Math.floor(Math.random() * SQ_TIPS.length)];
  }

  /* ---------- 🌐 Global Access ---------- */
  window.SQ_TIPS = SQ_TIPS;
  window.SQ_shuffleTips = SQ_shuffleTips;
  window.SQ_getRandomTip = SQ_getRandomTip;

  /* ---------- ✅ Log Load ---------- */
  console.log(
    `%c[StaticQuasar931 Tips Loaded]%c ${SQ_TIPS.length} total tips`,
    "color:#5ee1ff;font-weight:700",
    "color:#fff;font-weight:400"
  );
})();
