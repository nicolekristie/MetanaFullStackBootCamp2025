function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  

  const creatureArray = [
    { 
    name: "Goby",
    creatureType: "Goblin",
    creatureSkill: "Gobble",
    weakness: "fire-based-attacks"
    },
    { 
      name: "Wolfy",
      creatureType: "Werewolf",
      creatureSkill: "speed",
      weakness: "silver"
    },
    { 
      name: "Cetus",
      creatureType: "Sea Monster",
      creatureSkill: "swimming",
      weakness: "weapons"
    }

  ]
  const randomElement = getRandomItem(creatureArray);
  console.log(randomElement.name, randomElement.creatureType, randomElement.creatureSkill, randomElement.weakness)
  
  console.log(randomElement);