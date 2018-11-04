const skill2 = {
	'agielba' : '**Turn the Tables**: 300%-800% Fire damage to a foe based on ' +
				'how low Agielba\'s HP is. Gain Jammed.' +
				'\nCD: 5 turns, Duration: 3 turns.',
	'albert' : '**Electron Blade**: 100% Light damage to all foes. Inflict Delay.' +
				'\nCD: 6 turns.',
	'aletheia' : '**Discord**: 250%-350% Earth damage to all foes.' +
				'\nCD: 6 turns.',
	'aliza' : '**Flame Wreath**: Gain 50% / 80% Critical Hit Rate Up and 50% DMG Cap Up.' +
				'\nCD: 8 turns, Duration: 3 turns.',
	'altair' : '**Battleplan: Crane Down**: Inflict 20% ATK Down, 20% DEF Down, and ' +
				'10% Water DEF Down on all foes.' +
				'\nCD: 7 turns, Duration: 180 sec.',
	'amira' : '**Power Within**: Absorb 40% of a foe\'s mode bar and 5% of all allies\' ' +
				'charge bars. Amira gains 20% charge bar for each ally absorbed. Also ' +
				'gain 50% C.A. DMG Up (1 time).' +
				'\nCD: 7 turns.',
	'anne' : '**Follow the Princess**: Gain Counters on DMG for up to 2 hits and Hostility Up. ' +
				'Use 1 Spirit: Also gain 20% DEF Up (Stackable) (Max 100%).' +
				'\nCD: 5 turns, Duration: 2 turns.',
	'anthuria' : '**Alluring Step**: All allies gain 15% Uplifted. Gain Quick Tap, granting ' +
				'Hyped to all allies upon dodging.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'aoidos' : '**Bloody Garden**: Gain DA Up, TA Up and sharp Hostility Up.' +
				'\nCD: 10 turns, Duration: 6 turns.',
	'arriet' : '**Secret Garden**: All allies gain 30% ATK Up and 30% Charge Bar Sped Up.' +
				'\nCD: 6 turns, Duration: 3 turns.',
	'arulumaya' : '**Tabula Rasa**: All allies gain Veil, 60% Skill DMG Up, and 10% Skill DMG Cap Up.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'ayer' : '**Jolt Counter**: Gain Jolt Counter. While Jolt Counter is active: Can\'t attack. ' +
				'Charge bar doesn\'t rise. Dodge one-ally attacks and counter up to 3 times per turn. ' +
				'Costs 10% charge bar each turn. *(Ends on recast or when charge bar is 0.)*' +
				'\nCD: 7 turns.',
	'azazel' : '**Thanatos Bane**: 400%-500% Dark damage to a foe. Inflict Poisoned.' +
				'\nCD: 5 turns, Duration: 180 sec.',
	'baotorda' : '**Sacred Shield**: 400%-500% Light damage to all foes. Gain Unchallenged.' +
				'\nCD: 6 turns, Duration: 3 turns.',
	'beatrix' : '**Unification**: Inflict 25% ATK Down and 15% Light ATK Down on a foe.' +
				'\nCD: 6 turns, Duration: 1 turn.',
	'birdman' : '**Strike Solace**: Gain Salted Wound and 20% ATK Up.' +
				'\nCD: 6 turns, Duration: 1 turn.',
	'cagliostro' : '**Phantasmagoria**: Remove 1 debuff from all allies. ' +
					'Grant all allies 30~35% / 30% Critical Hit Rate Up and Reversed Ouroboros.' +
					'\nCD: 7 turns, Duration: 3 turns.',
	'cagliostro-dark' : '**Nehustan**: All allies gain Refresh and 25% Dark ATK Up.' +
						'\nCD: 11 turns, Duration: 7 turns.',
	'carmelina' : '**Kaleidoscope**: Inflict Gravity on a foe.' +
					'\nCD: 5 turns, Duration: 180 sec.',
	'catherine' : '**Ivsa Lora**: Inflict Delay on a foe. If successful, gain 30% Charge Boost. ' +
					'Gain 30% C.A. DMG Up (1 time).' +
					'\nCD: 7 turns.',
	'cerberus' : '**Disillusion**: 3-hit Dark damage to a foe. Inflict 10% Debuff Res. Down.' +
					'\nCD: 6 turns, Duration: 180 sec.',
	'charlotta' : '**Kni Shilt**: All allies gain 50% DMG Cut and 10% DEF Up.' +
					'\nCD: 5 turns, Duration: 1 turn/3 turns.',
	'chatnoir' : '**Riddle Me This**: Inflict Delay on a foe. ' +
					'If Chat Noir has Forewarning: All allies gain 20% Charge Boost if Delay successfully hits. ' +
					'Forewarning is replaced with Riddle, dodging the next two single-target enemy attacks. ' +
					'(Riddle is removed after dodging twice or hit by an all-ally attack.)' +
					'\nCD: 7 turns, Duration: 3 turns.',
	'clarisse' : '**Eclipse**: 20%-25% Plain damage to a foe. Inflict 33% Mode Bar Cut.' +
					'\nCD: 6 turns.',
	'clarisse-light' : '**Photolysis**: Inflict 25% Light DEF Down on a foe.' +
						'\nUse 1 Dissolution charge: Also inflict 15% Dark ATK Down.' +
						'\nCD: 5 turns, Duration: 180 sec.',
	'cucouroux' : '**Shoot \'em Up**: Water damage to all foes. Inflict 5% ATK Down (Stackable) (Max: 40%) and ' +
					'5% DEF Down (Stackable) (Max: 40%). ' + 
					'Gain Shoot \'Em Up, blasting a Covering Fire at the end of each turn for 4 turns.' +
					'\nCD: 7 turns, Duration: 180 sec/4 turns.',
	'delafille' : '**Glorious Flame**: 250% Light damage to all foes. Inflict 10% Light DEF Down.' +
					'\nCD: 6 turns, Duration: 180 sec.',
	'delafille-earth' : '**Inspire Light**: Heal 45% of an ally\'s HP (Healing cap: 2500) and grant Jewel Glitz (50% ATK Up, 50% DEF Up, 80% DA Up, and 30% TA Up).' +
					'\nCD: 4 turns, Duration: 4 turns.',
	'eustace' : '**Anti-Social**: All allies gain 45% / 50% Critical Hit Rate Up. *(Uses 20% of charge bar)*' +
					'\nCD: 5 turns, Duration: 3 turns.',
	'feena' : '**Flight II**: Gain Other Self, 50% ATK Up, and Bonus Effect on Dodge. (Gain 100% Charge Boost upon dodging.)' +
				'\nCD: 5 turns, Duration: 1 turn.',
	'ferry' : '**Grausam**: All allies gain 60% C.A. DMG Up and 15% DMG Cap Up. Inflict 20% DEF Down on all allies.' +
				'\nCD: 6 turns, Duration: 1 turn.',
	'forte' : '**Battlecry**: All allies gain 20% Dark ATK Up. Inflict 10% ATK Down (Stackable) (Max: 30%) on all foes.' +
				'\nCD: 5 turns, Duration: 3 turns/180 sec.',
	'freezie' : '**Fallschirm / Hone Instincts**: All allies gain 30% DA Up, 15% TA Up, and 10% Bonus Dark DMG.' +
				'\nIn Dark Mutation mode: Gain TA Up and 50% / 50% Critical Hit Rate Up.' +
				'\nCD: 7 turns (Normal), 6 turns (Mutation), Duration: 3 turns/2 turns.',
	'gawain' : '**Rebellion**: 200%-2000% Wind damage to a foe. (Boost to damage based on how low main allies\' total HP is).' +
				'\nCD: 5 turns.',
	'ghandagoza' : '**Flashbeat Branding Palm**: Gain Counters on Dodge/DMG for up to 4 hits, C.A. Instant Standby, and 10 stacks of Eternal Rage.' +
					'\nCD: 6 turns, Duration: 3 turns.',
	'grea' : '**Cleansing Burst**: 400%-500% Fire damage to a foe and remove 1 buff. (10% boost to damage cap against foes with Dracoforce.)' +
				'\nCD: 6 turns.',
	'halle' : '**You\'re Toast!**: Gain DMG Boosted, 15% DA Up and 15% TA Up.' +
				'\nCD: 7 turns, Duration: 5 turns.',
	'heles' : '**Autumnal**: 400%-500% Fire damage to a foe. All allies gain 10% Charge Boost.' +
				'\nCD: 7 turns.',
	'ilsa' : '**Evensong**: Earth damage to a foe. Inflict 25% DEF Down. (Uses up 1 Bullets)' +
			'\nCD: 5 turns, Duration: 180 sec.',
	'izmir' : '**Farewell**: All allies gain 50% / 50% Critical Hit Rate Up. *(Uses 20% of charge bar)*' +
				'\nCD: 5 turns, Duration: 3 turns.',
	'jeanne' : '**Encouragement**: All allies gain 30% ATK Up.' +
				'\nCD: 5 turns, Duration: 3 turns.',
	'jeanne-dark' : '**Incision**: Gain Incision (Stats change for 6 turns).',
	'juliet' : '**Vangelo**: Grant an ally Revitalize and 50% DEF Up.' +
				'\nUse 1 Spirit Shroud: Also grant a 2500-damage Shield.' +
				'\nCD: 5 turns, Duration: 3 turns.',
	'katapillar' : '**Refuel**: Self-heal 30% max HP. Reset cooldown for other skills.' +
					'\nCD: 10 turns.',
	'korwa' : '**Des Vetements**: All allies gain Astuce, increasing double attack and triple attack rate. (Costs 4 Fil)' +
				'\nCD: 3 turns, Duration: 5 turns.',
	'ladygrey' : '**Deep Down**: Inflict 30% DEF Down and Delay on a foe.' +
				'\nCD: 5 turns, Duration: 180 sec.',
	'lancelot' : '**Wogenstrom**: 300%-350% Water damage to all foes. Inflict 15% ATK Down and 15% DEF Down.' +
				'\nCD: 7 turns, Duration: 180 sec.',
	'lancelot-wind' : '**Turbulenz**: Wind damage to all foes. Inflict 10% DEF Down (Stackable) (Max: 20%) and DA Down.' +
						'\nCD: 5 turns, Duration: 180 sec.',
	'lennah' : '**Renaissance**: Restore all allies\' HP (Healing cap: 2000). All allies gain Revitalize. Remove 1 debuff from all allies.' +
				'\nCD: 6 turns, Duration: 3 turns.',
	'lilele' : '**Wings Shall Deliver You**: All male allies gain 20% Charge Boost and 20% Charge Bar Sped Up.' +
				'\nAll female allies gain 15% Charge Boost and 15% Charge Bar Sped Up.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'lily' : '**Frozen Gale**: 250%-300% Water damage to all foes. Inflict Glaciate.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'lunalu' : '**Handsome Gorilla DA**: All Dark allies gain Hyped, Guaranteed DA, and 20% TA Up. ' +
				'Self-inflict 2 stacks of 10% Max HP Lowered (Stackable).' +
				'\nCD: 7 turns, Duration: 4 turns.',
	'maids' : '**Maximum Server / Watcher**: Dorothy: Grant the Main Character 50% ATK Up, 60% DA Up, and 50% Bonus Light DMG.' +
				'\nClaudia: Gain DMG Boosted and 50% Critical Hit Rate Up.' +
				'\nCD: 5 turns, Duration: 3 turns.',
	'magisa' : '**Wall**: All allies gain Veil, 20% ATK Up and 20% DEF Up.' +
				'\nCD: 8 turns, Duration: Until used/3 turns.',
	'marquiares' : '**Mystic Moon**: Gain 100% TA Up.' +
					'\nUse 3 MP: Also gain Revitalize and 50% Light DMG Lowered.' +
					'\nCD: 6 turns, Duration: 2 turns.',
	'melissabelle' : '**Right Hairsaber**: 5-hit, 100% Wind damage to random foes. ' +
						'Hits increase by 1 with each cast (Max: 10 hits).' +
						'\nCD: 6 turns.',
	'melleau' : '**Engrave Fang**: 250%-300% Earth damage to a foe. ' +
				'Gain 15% Charge Boost and Hostility Up (Stackable).' +
				'\nCD: 4 turns.',
	'metera' : '**Starry Sky**: 5-hit 90% Wind damage to random foes. Inflict 8% ATK Down (Stackable) (Max: 30%) on all foes.' +
				'\nCD: 6 turns, Duration: 180 sec.',
	'metera-fire' : '**Adorned Remittance**: 200% Fire damage to a foe and inflict Charmed.' +
					'\nUse Aetherial Seal: Also inflict Delay.' +
					'\nCD: 7 turns, Duration: 180 sec.',
	'narmaya' : '**Transient**: 400%-450% Dark damage to a foe.' +
				'\nDawnfly stance: Gain Guaranteed DA and 10% TA Up.' +
				'\nFreeflutter stance: Inflict 25% DEF Downon a foe.' +
				'\nCD: 6 turns, Duration: 3 turns/180 sec.',
	'nemone' : '**Roselle**: Gain 70% Dodge Rate Boosted. Upon dodge: Gain 10% Charge Boost and Hostility Down (Stackable).' +
				'\nCD: 8 turns, Duration: 3 turns.',
	'nicholas' : '**Willow Counter**: Gain Counter Strike and 20% Charge Boost ' +
					'(Dodge all foes\' attacks and debuffs / Substitute effect / Can\'t attack on that turn).' +
					'\nCD: 6 turns, Duration: 1 turn.',
	'percival' : '**Ikzel**: Inflict Petrified on a foe.' +
					'\nCD: 6 turns, Duration: 60 sec.',
	'petra' : '**Celestial Phenomenon**: 150%-200% Wind, Fire, Earth and Water damage to all foes. Inflict 10% Wind DEF Down.' +
				'\nCD: 7 turns, Duration: 180 sec.',
	'razia' : '**Ausbruch**: 650% Earth damage to a foe and consume all Flash Point stacks. Self-inflict 30% DEF Down. ' +
				'Boost to damage and damage cap based on number of Flash Pointstacks consumed.' +
				'\nCD: 9 turns, Duration: 5 turns.',
	'robomi' : '**Iris Arc**: 1000% Light damage to all foes. *(Uses 2 Power Cells)*' +
				'\nReady in 3 turns, CD: 5 turns.',
	'romeo' : '**Credenza**: Gain Substitute.' +
				'\nNormal mode: Use 1 Spirit to gain 80% Fire DMG Lowered.' +
				'\nAmplified mode: Use 2 Spiritto grant 80% Fire DMG Lowered to all allies.' +
				'\nCD: 6 turns, Duration: 1 turn.',
	'rosamia' : '**Armorsmash Quad Talisman**: 250% Light damage to a foe. Inflict 8% DEF Down (Stackable) (Max: 30%).' +
				'\nCD 4 turns, Duration: 180 sec.',
	'sandalphon' : '**Ecliptica**: Light damage to a foe. Drain 50% of damage dealt up to 900 HP.' +
					'\nCD: 7 turns.',
	'sara' : '**Quadriga**: All allies gain 50% DMG Cut and 25% DEF Up.' +
				'\nCD: 5 turns, Duration: 1 turn.',
	'sarunan' : '**Hitch Force**: 250%-300% Light damage to a foe. Inflict Break Boosted (Time) and Break Boosted (DMG). ' +
				'Also inflict Delay. If successful, gain 20% Charge Boost.' +
				'\nCD: 6 turns.',
	'sarunan-dark' : '**Unia**: Remove all buffs from all foes. Remove all buffs and debuffs from all allies (but not other parties).' +
						'\nCD: 9 turns.',
	'scathacha' : '**Power Seeker**: 200%-900% Wind damage to a foe based on how low Scathacha\'s HP is. Gain Jammed.' +
					'With Dragon\'s Fury: Damage increased to 300%-1400%.' +
					'\nCD: 7 turns, Duration: 3 turns.',
	'selfira' : '**Rondo Appassionato**: All allies gain 30% Wind ATK Up.' +
				'\nAdditional effect from 2nd cast: All allies also gain 10% Bonus Wind DMG.' +
				'\nFrom 3rd cast: All allies also gain 20% C.A. DMG Up (1 time).' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'seruel' : '**Royal Curtain**: All allies gain Veil. Seruel gains 100% DA Up.' +
				'\nCD: 8 turns, Duration: Until used/3 turns.',
	'siegfried' : '**Manigance**: Gain Manigance, boosting ATK by 60% and DEF by 30%.' +
					'\nCD: 7 turns, Duration: 5 turns.',
	'silva' : '**Tactician**: Gain 75% / 75% Critical Hit Rate Up.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'silva-light' : '**Insight**: Inflict 30% ATK Down, 30% DEF Down, and Weak Point on a foe.' +
					'\nCD: 5 turns, Duration: 3 turns.',
	'societte' : '**Sixth Dance: Bizen**: Inflict 25% ATK Down and 25% DEF Down on all foes.' +
					'\nCD: 7 turns, Duration: 180 sec.',
	'societte-fire' : '**Sixth Dance: Unryu**: All allies gain 60% DMG Cut.' +
						'\nCD: 6 turns, Duration: 1 turn.',
	'sophia' : '**Clear**: Remove 1 debuff from all allies.' +
				'\nCD: 5 turns.',
	'soriz' : '**Bravado Bullet**: 6-hit Earth damage to a foe. Inflict 10% DEF Down (Stackable) (Max: 30%). ' +
				'(Hit number increases upon each cast [Max: 10 hits])' +
				'\nCD: 6 turns, Duration: 180 sec.',
	'therese' : '**Indicum**: Gain 100% TA Up and 80% Bonus Fire DMG. Self-inflict 10% Max HP Lowered (Stackable).' +
				'\nCD: 5 turns, Duration: 2 turns.',
	'tiamat' : '**Crippling Storm**: 300%-400% Wind damage to all foes and inflict 25% ATK Down.' +
				'\nCD: 6 turns, Duration: 180 sec.',
	'tsubasa' : '**Fistfight City**: Add 1 charge diamond to a foe. If successful, all allies gain 30% Charge Boost, 30% C.A. DMG Up (1 time), and 10% C.A. DMG Cap Up (1 time).' +
				'\nCD: 7 turns.',
	'vane' : '**Breakthrough**: Gain Jammed and Hostility Up (Stackable). *(Uses 40% of max HP)*' +
				'\nCD: 3 turns, Duration: 8 turns.',
	'vania' : '**Scarlet Gift**: Inflict Delay on a foe. If successful, all allies gain 20% Charge Boost.' +
				'\nCD: 7 turns.',
	'vaseraga' : '**Instinction**: 800% Dark damage to a foe.' +
					'\nCD: 6 turns.',
	'vaseraga-earth' : '**Battalions of Fear**: 200%-900% damage to a foe based on how low Vaseraga\'s HP is. Gain 10% Charge Boost.' +
						'\nCD: 5 turns.',
	'veight' : '**Noble Blood**: Gain Awakening, sharply increasing stats. When damaged twice, Awakening is removed and Veight self-inflicts Backlash for 1 turn.' +
				'\nCD: 6 turns.',
	'vira' : '**Evening Existence**: All allies gain Veil. Vira gains 100% TA Up.' +
				'\nCD: 8 turns, Duration: 2 turns.',
	'wulf' : '**Renie\'s Tears**: Renie\'s rallying cry grants Renie\'s Tears to Wulf. ' +
				'Remove all Lone Wolf Scar stacks. Restore 20% of caster\'s HP (Healing cap: 2000). ' +
				'*(Requires 5 Lone Wolf Scar stacks. Uses all of charge bar)*' +
				'\nCD: 6 turns, Duration: 4 turns.',
	'yggdrasil' : '**Ziggurat**: All Earth allies gain 80% / 30% Critical Hit Rate Up. All allies except Yggdrasil gain a 2000-damage Shield. *(Uses 20% of charge bar)*' +
					'\nCD: 6 turns, Duration: 3 turns.',
	'yngwie' : '**Wild and Tough**: Instantly perform a normal attack without using up a turn.' +
				'\nCD: 4 turns.',
	'yodarha' : '**Hymn of the Hundreds**: Gain Other Self. Gain Substitute if Yodarha has Triple Shrouded.' +
				'\nCD: 7 turns, Duration: 1 turn.',
	'yuel' : '**Gurren**: 250%-350% Fire damage to all foes. All allies gain 20% Bonus Fire DMG.' +
				'\nCD: 6 turns, Duration: 3 turns.',
	'yuel-water' : '**Call of the Fire**: Inflict Foxflame, 10% Fire ATK Down, and 25% Water DEF Down on all foes. *(Uses 10% of charge bar)*' +
					'\nCD: 7 turns, Duration: 3 turns/180 sec.',
	'yuisis' : '**Steadfast Shield / Ardent Blade**:' +
				'\nStarslayer mode: Gain Substitute and  70% DMG Cut. *(Uses 20% of charge bar)*' +
				'\nHeavensbane mode: Gain Ardent Blade, boosting ATK by 150% and boosting C.A. damage cap by 80%. *(Uses 20% of max HP)*' +
				'\nCD: 5 turns, Duration: 1 turn.',
	'zahl' : '**Flare**: Deploy the Flare field effect, modifying ATK over time. All allies gain 20% DEF Up for 3 turns.' +
				'\nCD: 15 turns, Duration: 180 sec.',
	'zeta' : '**Rhapsody**: Gain 20% ATK Up for 1 turn, and Salted Wound and Salted Wound (Arvess Fermare) for 1 hit.' +
				'\nCD: 6 turns, Duration: 1 turn.',
	'zeta-dark' : '**Infinite Wonders**: Inflict Burned and 15% Dark DEF Down on all foes.' +
					'\nCD: 7 turns, Duration: 180 sec.',
	'zooey' : '**Ray Strike**: 400%-500% Light damage to a foe. Gain 40% Dodge Rate Boosted and Bonus Effect on Dodge.' +
				'\nCD: 6 turns, Duration: 3 turns.',
	
	'alexiel' : '**Nibelung Silt**: 250% Earth damage to all foes. All allies gain Veil and Unchallenged.' +
				'\nCD: 12 turns.',
	'anila' : '**All is Vanity**: 250-350% fire damage to all foes and inflict Delay.' +
				'\nCD: 7 turns.',
	'andira' : '**Sage of Eternity**: Grant an ally a 3500-damage Shield for 3 turns and Hostility Up for 1 turn.' +
				'\nCD: 6 turns, Duration: 3 turns/1 turn.',
	'blackknight' : '**Drain**: 500% Dark damage to a foe and drain up to 2000 HP.' +
					'\nCD: 5 turns.',
	'cain' : '**Soldier\'s Swiftness**: All allies gain Instantaneity. (30% ATK Up / 20% DA Up / 10% TA Up).' +
				'\nCD: 12 turns, Duration: 6 turns.',
	'drang' : '**Switcheroo**: Switch between Switcheroo (Attack) and Switcheroo (Defense).' +
				'\nCD: 3 turns.',
	'eugen' : '**Sudden Attack II**: Grant one ally 20% Uplifted.' +
				'\nCD: 10 turns, Duration: 5 turns.',
	'europa' : '**Tyros Aggeris**: All allies gain Star Sanctuary (15% ATK Up, 50% Fire DMG Lowered, Elemental DMG converted to Fire DMG. ' +
				'(Effect ends upon taking damage 2 times)' +
				'\nCD: 12 turns.',
	'io' : '**Heal III**: Heal all allies for 1000 + 5% HP (Healing cap: 5000 HP). Heal strength increases by another 1200 HP per Mystic Vortex lvl.' +
			'\nCD: 7 turns.',
	'katalina' : '**Loengard**: All allies gain Veil and Refresh. Refresh heals up to 1000 HP the first turn, then decreases to 500 → 250 → 150 each turn thereafter.' +
					'\nCD: 8 turns, Duration: 4 turns.',
	'lecia' : '**First Aid**: Restore 10% of an ally\'s HP (Healing cap: 1000 HP) and remove 1 debuff. Ally also gains a 1000-damage Shield if their HP is below 25%.' +
				'\nCD: 2 turns.',
	'lucio' : '**Out of the Ashes**: 900% Light damage to a foe.' +
				'\nCD: 5 turns.',
	'mahira' : '**Finding Flight**: 200-250% Earth damage to a foe. Inflict 15% DEF Down and 25% Earth DEF Down.' +
				'\nCD: 7 turns, Duration: 180 sec.',
	'olivia' : '**Peccatum Mortale**: 500% Dark damage to a foe. Inflict Delay.' +
				'\nCD: 8 turns.',
	'orchid' : '**Ancestral Aegis**: All allies gain 50% Dark ATK Up and 70% Light Cut.' +
				'\nCD: 8 turns, Duration: 2 turns.',
	'pholia' : '**Recognition**: Grant an ally Trance Absolution. Inflict 20% Max HP Lowered (Stackable) on the target ally' +
				'\nCD: 8 turns, Duration: 5 turns.',
	'rackam' : '**Duration II**: Inflict 35% Mode Bar Cut and Convulsion on all foes in Overdrive. Gain Mode Bar Cut Boosted.' +
				'\nCD: 5 turns, Duration: 3 turns.',
	'rosetta' : '**Iron Maiden**: 200%-250% Wind damage to all foes. All allies gain DMG Boosted.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'sturm' : '**Sword Switch**: Switch between Hot-headed (ATK Boost) and Hot-headed (Hit Foe DEF) for single-target attacks.' +
				'\nCD: 3 turns.',
	'vajra' : '**Canid Growl**: Inflict Petrified on a foe.' +
				'\nCD: 6 turns, Duration: 60 sec.',
	'vira-grand' : '**Blade of Light**: 800% Light damage to all foes and remove 1 buff effect.' +
					'\nCD: 7 turns.',
	'zooey-grand' : '**Conjunction**: Set all allies\' HP to 1. All allies gain Unchallenged and Drain, healing up to 15% max HP from normal attacks and charge attacks.' +
					'\nCD: 14 turns, Duration: 1 turn/4 turns.',
	
	'arulumaya-c' : '**Tabula Rasa**: All allies gain Veil and Revitalize.' +
					'\nCD: 8 turns, Duration: 3 turns.',
	'beatrix-ss' : '**Nayde Vanaroosa**: Gain Nayde Vanaroosa, increasing mode bar cut and sharply boosting ATK against a foe in Overdrive for 1 hit.' +
					'\nCD: 8 turns, Duration: 1 turn.',
	'cagliostro-h' : '**Phantasmagoria**: Remove 1 debuff from all allies. All allies gain Reversed Ouroboros.' +
						'\nCD: 7 turns, Duration: 3 turns.',
	'charlotta-h' : '**Trick-and-Treat**: Inflict Blinded on a foe. Gain Refresh up to 300 HP.' +
					'\nCD: 7 turns, Duration: 4 turns.',
	'clarisse-c' : '**Alpha Decay**: Inflict 10% DEF Down (Stackable) (Max: 30%) on a foe. Raise foe\'s α Decay by 4 stacks and lower β Decay by 1 stack.' +
					'\nCD: 4 turns, Duration: DEF Down: 180 sec, Decay: 120 sec.',
	'danua-h' : '**Trick Reaper**: 550% Fire damage to a foe. Damage increased against enemies with Sleep. Self-inflict Blood Sacrifice.' +
				'\nCD: 4 turns, Duration: 1 turn.',
	'danua-ss' : '**Grim Reaper II**: 400%-500% Dark damage to a foe. Inflict 10% DEF Down (Stackable) (Max: 30%). ' +
					'Self-inflict Blood Sacrifice, dealing damage up to 10% HP at the end of turn. This debuff cannot reduce Danua\'s HP below 1.' +
					'\nCD: 4 turns, Duration: 1 turn/180 sec.',
	'delafille-ss' : '**Cure Light**: Restore 20% of an ally\'s HP (Healing cap: 2500) and grant Jewel Glitz (50% ATK Up / 50% DEF Up / 80% DA Up / 30% TA Up).' +
						'\nCD: 4 turns, Duration: 4 turns.',
	'diantha-ss' : '**Onstage**: All allies gain 9% C.A. DMG Up (Stackable) (Max: 27%).' +
					'\nCD: 4 turns, Duration: 7 turns.',
	'eustace-h' : '**Tonight I Fly**: 250%-350% damage to a foe. Consumes 3 Loaded stacks.' +
					'\nCD: 4 turns.',
	'grea-ss' : '**Blazing Duo**: Linkage effect to caster and an ally (Can\'t grant Linkage effect to caster and an ally (Can\'t grant Linkage effect to more than 1 other ally at a time)' +
				'\nCD: 5 turns, Duration: 5 turns.',
	'heles-ss' : '**Graven Image**: Gain 20% ATK Up, and Defiance.' +
					'\nCD: 6 turns, Duration: 1 turn.',
	'ilsa-ss' : '**Future Nova**: 500% Fire damage to all foes. Inflict 10% DEF Down (Stackable) (Max: 40%). ' +
				'(Gain HVAP Round, blasting an HVAP Round at the end of each turn for 3 turns)' +
				'\nCD: 7 turns, Duration: 180 sec/3 turns.',
	'io-ss' : '**Flowery Light**: 5-hit 80% Fire damage to random foes. Inflict Burned on all foes.' +
				'\nCD: 6 turns, Duration: 180 sec.',
	'izmir-ss' : '**Blizzard**: Deploy the Blizzard field effect, modifying ATK over time. ' +
					'All allies also gain 15% ATK Up.' +
					'\nCD: 15 turns, Duration: 180 sec/3 turns.',
	'jeanne-ss' : '**Salvation**: Restore an ally\'s HP (Healing cap: 2500). Ally also gains Armored and Strength.' +
					'\nCD: 6 turns, Duration: 3 turns.',
	'korwa-ss' : '**Soie Elegante**: All Wind allies gain Magnifique, boosting DEF and granting a chance to lessen damage taken. (Costs 4 Fil)' +
					'\nCD: 3 turns, Duration: 6 turns.',
	'ladygrey-h' : '**Dusk\'s Descent**: Inflict 10% DEF Down (Stackable) (Max: 30%) on all foes. All allies gain Evenfall (15% DEF Up) (Stackable / Max: 3).' +
					'\nCD: 5 turns, Duration: 180 sec.',
	'mary-c' : '**Piece of Cake**: Grant one ally 20% Charge Boost, 100% / 20% Critical Hit Rate Up, and Happy Sprinkles (50% ATK Up, 50% DEF Up).' +
				'\nCD: 4 turns, Duration: 4 turns.',
	'medusa-valentine' : '**Magical Medusiana**: 400% Earth damage to a foe. 10% boost to damage cap against Poisoned foes. Inflict Poisoned.' +
							'\nCD: 5 turns, Duration: 180 sec.',
	'naoise-ss' : '**Lucent Thrust**: Light damage to a foe. Inflict 25% Light DEF Down.' +
					'\n(When Lumen Lance is consumed: Activates twice and boost to debuff success rate)' +
					'\nCD: 6 turns, Duration: 180 sec.',
	'narmaya-ss' : '**Physical Endurance**: Remove 1 buff from a foe. Gain 25/??/??% DA Up and 10/??/??% TA Up. Skill rank increases with each use (Max Rank: 3).' +
					'\nCD: 6 turns, Duration: 3 turns.',
	'percival-ss' : '**Gluehen**: Gain Guaranteed DA and 20% Bonus Fire DMG.' +
					'\nCD: 6 turns, Duration: 3 turns.',
	'rosetta-c' : '**Domination**: Remove 1 buff from a foe.' +
					'\nCD: 7 turns.',
	'rosetta-ss' : '**Celebration**: Restore 20% of all allies\' HP (Healing cap: 2000) and remove 1 debuff.' +
					'\nCD: 7 turns.',
	'siegfried-ss' : '**Messager**: 250% Wind damage to all foes (Boost to effect with each cast (Max: 5 boosts)). Gain 30% / 50% Critical Hit Rate Up.' +
						'\nCD: 6 turns, Duration: 3 turns.',
	'vira-ss' : '**Estrella Sprite**: Earth damage to a foe and heal up to 1200 HP to all allies.' +
				'\nCD: 8 turns.',
	'zeta-ss' : '**Rhapsody**: Gain 20% ATK Up, Salted Wound and Salted Wound (Arvess Fermare).' +
				'\nCD: 6 turns, Duration: 1 turn.',
	
	'anre' : '',
	'tweyen' : '',
	'threo' : '',
	'feower' : '',
	'fif' : '',
	'seox' : '',
	'seofon' : '',
	'eahta' : '',
	'niyon' : '',
	'tien' : '',
};

module.exports = skill2;