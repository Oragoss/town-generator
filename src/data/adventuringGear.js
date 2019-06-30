const adventuringGear = [
    { "quantity": 1, "name": "Burglar's Pack", "cost": 16, "chance": 0.6},
    { "quantity": 1, "name": "Diplomat's Pack", "cost": 39, "chance": 0.6},
    { "quantity": 2, "name": "Dungeoneer's Pack", "cost": 12, "chance": 0.9},
    { "quantity": 2, "name": "Entertainer's Pack", "cost": 40, "chance": 0.9},
    { "quantity": 2, "name": "Explorer's Pack", "cost": 10, "chance": 0.9},
    { "quantity": 2, "name": "Priest's Pack", "cost": 19, "chance": 0.9},
    { "quantity": 1, "name": "Scholar's Pack", "cost": 40, "chance": 0.6},
    { "quantity": 1, "name": "Abacus", "cost": 2, "chance": 0.6},
    { "quantity": 2, "name": "Backpack", "cost": 2, "chance": 0.9},
    { "quantity": 1, "name": "Ball Bearings (bag of 1000)", "cost": 1, "chance": 0.6},
    { "quantity": 1, "name": "Barrel", "cost": 2, "chance": 1},
    { "quantity": 1, "name": "Basket", "cost": 0.4, "chance": 1},
    { "quantity": 5, "name": "Bedroll", "cost": 1, "chance": 0.9},
    { "quantity": 3, "name": "Bell", "cost": 1, "chance": 0.9},
    { "quantity": 1, "name": "Blanket", "cost": 0.5, "chance": 1},
    { "quantity": 4, "name": "Block and Tackle", "cost": 1, "chance": 0.9},
    { "quantity": 1, "name": "Book", "cost": 25, "chance": 0.9},
    { "quantity": 6, "name": "Bottle, Glass", "cost": 2, "chance": 0.9},
    { "quantity": 1, "name": "Bucket", "cost": 0.05, "chance": 1},
    { "quantity": 1, "name": "Caltrops (bag of 20)", "cost": 1, "chance": 0.6},
    { "quantity": 1, "name": "Candle", "cost": 0.01, "chance": 1},
    { "quantity": 2, "name": "Case, Crossbow Bolt", "cost": 1, "chance": 0.9},
    { "quantity": 2, "name": "Case, Map or Scroll", "cost": 1, "chance": 0.9},
    { "quantity": 8, "name": "Chain (10 feet)", "cost": 5, "chance": 0.9},
    { "quantity": 10, "name": "Chalk (1 piece)", "cost": 0.01, "chance": 0.9},
    { "quantity": 3, "name": "Chest", "cost": 5, "chance": 0.9},
    { "quantity": 5, "name": "Climber's Kit", "cost": 25, "chance": 0.9},
    { "quantity": 10, "name": "Clothes, Common", "cost": 0.5, "chance": 1},
    { "quantity": 1, "name": "Clothes, Costume", "cost": 5, "chance": 0.4},
    { "quantity": 1, "name": "Clothes, Fine", "cost": 15, "chance": 0.6},
    { "quantity": 10, "name": "Clothes, Traveler's", "cost": 2, "chance": 1},
    { "quantity": 1, "name": "Component Pouch", "cost": 25, "chance": 0.6},
    { "quantity": 1, "name": "Crowbar", "cost": 2, "chance": 0.9},
    { "quantity": 1, "name": "Fishing Tackle", "cost": 1, "chance": 0.9},
    { "quantity": 10, "name": "Flask or Tankard", "cost": 0.02, "chance": 1},
    { "quantity": 1, "name": "Grappling Hook", "cost": 2, "chance": 0.6},
    { "quantity": 1, "name": "Hammer", "cost": 1, "chance": 1},
    { "quantity": 1, "name": "Sledge Hammer", "cost": 2, "chance": 0.9},
    { "quantity": 1, "name": "Healer's Kit", "cost": 5, "chance": 0.6},
    { "quantity": 1, "name": "Hourglass", "cost": 25, "chance": 0.4},
    { "quantity": 10, "name": "Hunting Trap", "cost": 5, "chance": 0.9},
    { "quantity": 1, "name": "Ink (1 ounce bottle)", "cost": 10, "chance": 0.6},
    { "quantity": 1, "name": "Ink Pen", "cost": 0.02, "chance": 0.6},
    { "quantity": 1, "name": "Jug or Pitcher", "cost": 0.02, "chance": 1},
    { "quantity": 10, "name": "Ladder (10-foot)", "cost": 0.1, "chance": 0.9},
    { "quantity": 1, "name": "Lamp", "cost": 0.5, "chance": 0.9},
    { "quantity": 8, "name": "Lantern, bullseye", "cost": 10, "chance": 0.9},
    { "quantity": 1, "name": "Lantern, hooded", "cost": 5, "chance": 0.9},
    { "quantity": 1, "name": "Lock", "cost": 10, "chance": 0.9},
    { "quantity": 1, "name": "Magnifying Glass", "cost": 100, "chance": 0.6},
    { "quantity": 1, "name": "Manacles", "cost": 2, "chance": 0.6},
    { "quantity": 1, "name": "Mess Kit", "cost": 0.2, "chance": 1},
    { "quantity": 1, "name": "Mirror, steel", "cost": 5, "chance": 0.6},
    { "quantity": 1, "name": "Paper (one sheet)", "cost": 0.2, "chance": 0.6},
    { "quantity": 1, "name": "Parchment (one sheet)", "cost": 0.1, "chance": 0.6},
    { "quantity": 1, "name": "Pick, miner's", "cost": 2, "chance": 0.9},
    { "quantity": 1, "name": "Piton", "cost": 0.05, "chance": 0.6},
    { "quantity": 1, "name": "Pole (10-foot)", "cost": 0.05, "chance": 0.9},
    { "quantity": 2, "name": "Pot, iron", "cost": 2, "chance": 1},
    { "quantity": 2, "name": "Pouch", "cost": 0.5, "chance": 1},
    { "quantity": 3, "name": "Quiver", "cost": 1, "chance": 1},
    { "quantity": 4, "name": "Ram, portable", "cost": 4, "chance": 0.9},
    { "quantity": 4, "name": "Robes", "cost": 1, "chance": 0.9},
    { "quantity": 5, "name": "Rope, hempen (50 feet)", "cost": 1, "chance": 0.9},
    { "quantity": 1, "name": "Rope, silk (50 feet)", "cost": 10, "chance": 0.6},
    { "quantity": 1, "name": "Sack", "cost": 0.01, "chance": 1},
    { "quantity": 1, "name": "Scale, merchant's", "cost": 5, "chance": 0.6},
    { "quantity": 1, "name": "Sealing Wax", "cost": 0.5, "chance": 0.6},
    { "quantity": 1, "name": "Shovel", "cost": 2, "chance": 1},
    { "quantity": 1, "name": "Signal Whistle", "cost": 0.05, "chance": 0.6},
    { "quantity": 1, "name": "Signet Ring", "cost": 5, "chance": 0.6},
    { "quantity": 1, "name": "Soap", "cost": 0.02, "chance": 0.9},
    { "quantity": 1, "name": "Spellbook", "cost": 50, "chance": 0.6},
    { "quantity": 1, "name": "Spikes, iron (10)", "cost": 1, "chance": 0.9},
    { "quantity": 1, "name": "Spyglass", "cost": 1000, "chance": 1},
    { "quantity": 1, "name": "Tent, two-person", "cost": 2, "chance": 0.9},
    { "quantity": 1, "name": "Tinderbox", "cost": 0.5, "chance": 0.9},
    { "quantity": 1, "name": "Torch", "cost": 0.01, "chance": 1},
    { "quantity": 1, "name": "Vial", "cost": 1, "chance": 0.9},
    { "quantity": 1, "name": "Waterskin", "cost": 0.2, "chance": 1},
    { "quantity": 1, "name": "Whetstone", "cost": 0.01, "chance": 0.9}
]

module.exports = adventuringGear;