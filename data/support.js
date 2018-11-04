/* Contains character support skills
*/
const support = {
	'agielba' : '**Broad-Minded**: Boost to hostility. 30% boost to DEF. Starts battle with Lethal Attack Dodged.',
	'albert' : '**Thunderswift Lord**: Reflect 30% damage for 1 hit when Albert has Electrified.\n' +
				'**Levin Saber**: Guaranteed double attacks.',
	'aletheia' : '**Holy Sword**: Charge bar fills up 20% faster.',
	'aliza' : '**Everstrong Spirit**: Gain 1 Everstrong Spirit stack upon taking damage (Max: 10).',
	'altair' : '**Book of the Art of War**: Charge bar fills up 10% faster.\n' +
				'**Lexicon of Combat**: 5% boost to debuff success rate for all allies.',
	'amira' : '**One-Winged Demon**: Charge bar fills up 20% faster.\n' +
				'**Hidden Key**: While in Half-God Half-Demon mode: Gain 30% ATK, 30% DEF, 100% double attack rate, 10% triple attack rate, and immunity to debuffs. ' +
				'Counter upon taking damage up to 1 time per turn.',
	'anne' : '**Protector of the Academy**: More likely to be attacked. 30% boost to ATK and DEF when Anne has Spirit. Starts battle with 3 Spirit.\n' +
				'**Adept Sorceress**: Gain 15% C.A. DMG Up (Stackable) upon taking damage. ' +
				'(Max: 75%).',
	'anthuria' : '**Feet on Fire**: 10% boost to dodge rate.',
	'aoidos' : '**Deathwing**: Slight chance to dodge and counter one-foe attacks.',
	'arriet' : '**Harpist of the Gods: 5% boost to all allies\' debuff success rate.',
	'arulumaya' : '**Oracle**: 10% boost to DEF.',
	'ayer' : '**Blood Strife**: Boost to Ayer\'s double attack rate and damage cap based on how low HP is.',
	'azazel' : '**Brazen Wings**: Boost to dodge rate for Blinded foe attacks. Boost to critical hit rate against Poisoned foes.\n' +
				'Mutinous Hellfire**: Boost to C.A. DMG and C.A. DMG cap against foes that are both Blinded and Poisoned.',
	'baotorda' : '**Bulwark**: While Bulwark is active: 50% boost to hostility and 200% boost to defense specs. ' +
				'Also gain Divine upon taking damage, boosting C.A. damage and C.A. damage cap (Max: 5 Divine).\n' +
				'**Gendarme**: 50% chance to lessen DMG taken by 30%.',
	'beatrix' : '**Embrasque Pact**: Boost to Beatrix\'s multiattack rate and dodge rate based on how low HP is.\n' +
				'**Delta Clock**: Clock hands moves upon dealing triple attacks (Max: 3) (Boost to C.A. specs based on clock hands\' position).',
	'birdman' : '**The Lord of Wings**: 5% boost to ATK.\n' +
				'**Hulking Wings**: 3% increased triple attack rate for all allies.',
	'cagliostro' : '**World Cutest!**: 10% boost to debuff resistance.\n' +
					'**Spare Body**: Starts battle with Autorevive.',
	'cagliostro-dark' : '**Restorative Transmutation**: ~3% chance to fully recover HP upon taking damage.',
	'carmelina' : '**Universal Star**: 15% boost to debuff resistance.',
	'catherine' : '**Many Faces, Many Names**: Slight chance of debuff immunity. Boost to dodge rate.',
	'cerberus' : '**Infernal Heaven**: 50% boost to triple attack rate. Inflict 5% Debuff Res. Down (Stack)(Max: 30%) upon triple attack.',
	'charlotta' : '**Captain of the Holy Knights**: 20% cut to damage taken from foes in Overdrive.' +
					'Gain Captain of the Holy Knights every turn. (Grants 6% ATK, 7% DA, and 6% TA per stack) (Stacks up to 5 times. Ends upon taking damage.)\n' +
					'**Apostle of Justice**: 5% boost to all allies\' charge bar at the start of battle.',
	'chatnoir' : '**Thief\'s Tenet**: 20% boost each to ATK and DEF if Chat Noir has Forewarning.\n' +
					'**Don\'t Trust Your Eyes**: 100% boost to double attack rate and 25% boost to triple attack rate when Chat Noir has Riddle.',
	'clarisse' : '**Who\'s the Fairest? I am!**: 5% boost to debuff success rate for all allies.',
	'clarisse-light' : '**Dissolution is the Solution!**: 20% reduced DEF. 20% boost to ATK when having any Dissolution charges (Starts battle with 3 charges / Max: 3 charges).',
	'cucouroux' : '**Riflery**: Gain 1 Riflery lvl upon using charge attack (Max: 2) (Enhance Shoot \'Em Up and Covering Fire\'s DMG specs based on Riflery lvl)\n' +
					'**Powder Keg**: Gain 1 Powder Keg every turn (Max: 5). Lose 1 Powder Keg upon taking damage. Boost to multiattack rate based on number of Powder Keg stacks (Start battle with 3 Powder Keg stacks).',
	'delafille' : '**Glimmering Barrier**: Boost to DEF.',
	'delafille-earth' : '**Dressed to Impress**: 30% reduced DEF, but less likely to be attacked.\n' +
						'**Look What I\'ve Found...**: Chance to get casino chips at the end of the battle.',
	'eustace' : '**Flamek Pact**: Charge bar fills up 70% faster from damage taken.\n' +
				'**Custom Barrel**: Boost to ATK, C.A. DMG, and C.A. DMG Cap based on Loaded lvl. Loaded lvl rises by 1 upon using a skill.',
	'feena' : '**Unrivalled Drill**: Gain 1 Crushed stack when Feena triple attacks (Max: 3).',
	'ferry' : '**I\'ll Teach You a Lesson**: 5% / 30% boost to critical hit rate for all allies.',
	'forte' : '**We Are Blackwyrm**: 3% boost to ATK based on how many turns have passed (Max: 45%).',
	'freezie' : '**Savage Surge**: While Dark Mutation mode is in effect: 100% boost to ATK, 500% boost to DEF, 50% boost to damage cap, guaranteed double attacks, normal attacks hit all foes, and debuff immunity. Other allies can\'t participate in battle.\n' +
				'**Dark Decay**: While Dark Mutation mode is in effect: Dark Decay lvl rises at end of turn (Max: 5). (When Dark Decay lvl reaches max, Dark Lisle: Astringe activates and Freezie will be knocked out.)',
	'gawain' : '**Use it or Lose It**: 10% boost to DEF.\n' +
				'**Noble Guardian**: Lessen Earth damage taken by all allies by 10%.',
	'ghandagoza' : '**Eternal Rage**: 10% boost to melee-specialty allies\' double attack rate.\n' +
					'**Unrivaled Fighter**: Gain 1 Eternal Rage stack (Max: 10) with every attack.',
	'grea' : '**Flame Arts**: 20% bonus Fire damage and 50% boost to ATK against foes with Dracoforce.\n' +
				'**Burgeoning Concerto**: Ignore any DEF buff effects on a foe when using a charge attack.',
	'halle' : '**Downright Crazy!**: Gain Downright Crazy!(Stackable) and boost to damage cap each turn. Ends upon taking damage.\n' +
				'**W-Wait!**: Self-inflict 50% ATK Down for 1 turn upon taking damage. Also reduce Can\'t Catch Me!\'s cooldown by 2 turns upon taking damage.',
	'heles' : '**Scarlet Ribboned Lance**: 40% boost to ATK against foes in Overdrive.',
	'ilsa' : '**Neun Kugeln**: Use up 1 Bullets with every normal attack. (Start battle with 9 Bullets / Max: 9)\n' +
			'**Gun of Arbitration**: Boost to damage when there are Bullets. Reload instead of attacking when there are no Bullets left.',
	'izmir' : '**Alabaster Edge**: Boost to C.A. DMG and C.A DMG cap based on number of Icy Blade stacks. Icy Blade stacks up to 5 times.\n' +
				'**Ice Queen**: 20% boost to damage against Fire foes.',
	'jeanne' : '**La Pucelle**: 10% / 30% boost to critical hit rate.\n' +
				'**The Battle Standard**: 5% chance for a 1-turn cut to skill cooldowns at the end of turn when Jeanne takes a damaging hit.',
	'jeanne-dark' : '**La Pucelle d\'Arc**: Boost to ATK based on how low HP is.',
	'juliet' : '**Guardian Spirit of Verona**: Restore 5 Spirit Shroud every 5 turns. 50% reduced ATK if Juliet has no Spirit Shrouds. Attacks and skills each consume 1 Spirit Shroud.\n' +
				'**Spirit Shroud**: 30% boost to ATK and DEF while Spirit Shroud is active.',
	'katapillar' : '**Front Formation**: When first or third ally: Increases DEF by 40% and hostility. Immunity to Charmed.\n' +
					'**Flank Formation**: When second or fourth ally: Increases ATK by 50% but reduces DEF by 25%. Immunity to Blinded.',
	'korwa' : '**Spinner\'s Thread**: Gain 2 Fil every turn. (Max: 10)\n' +
				'**Adept Willpower**: Gain 2 Fil upon taking damage.',
	'ladygrey' : '**Love Hate Relationship**: 5% increased ATK.\n' +
				'**Black Barrier**: 10% increased debuff resistance for all allies.',
	'lancelot' : '**Herculean**: 10% increased double attack rate.\n' +
				'**Twin Blade Dance**: 10% increased double attack rate for all allies.',
	'lancelot-wind' : '**Defender\'s Twin Blades**: 20% boost to damage against Earth foes.\n' +
						'**Captain of the White Dragons**: 40% boost to C.A. damage and 10% boost to C.A. damage cap when Lancelot has a Bonus DMG effect.',
	'lennah' : '**Demonic Flower Wedge**: 15% boost to debuff resistance.\n' +
				'**Hemiparasite**: Drain effect when attacking a foe with Poisoned (Healing cap: 500).',
	'lilele' : '**I Love You All!**: Increases skill effects for male allies.',
	'lily' : '**Shine Crystal**: 10% boost to DEF.\n' +
				'**Envoy of the Crystalia**: Boost to Lily\'s ATK based on number of front line ally races.',
	'lunalu' : '**Deadline**: Boost to all allies\' ATK and DEF as Lunalu\'s max HP decreases.\n' +
				'**Quality Upgrade**: Boost to Dark allies\' charge attack specs upon finalizing a Page (Max: 3 Pages)',
	'maids' : '**Loyal Handmaidens**: Dorothy: Normal attacks hit all foes.\n' +
				'Claudia: Chance to inflict 5% DEF Down (Stackable)(Max: 20%) with every normal attack.\n' +
				'**Servant Synergy**: 200% charge bar maximum limit. (Joint charge attack activates by using up Servant\'s Oath and 200% of charge bar)',
	'magisa' : '**Almighty Sorceress**: 10% boost to skill DMG cap against foes with Blinded. 100% / 10% boost to critical hit rate against foes with Burned.\n' +
				'**Morax, the Demon**: While Morax Summoned is active: 30% boost to ATK, 100% boost to DEF, deal multiattacks, and normal attacks hit all foes. Magisa takes 7% max HP damage per turn (up to 800 damage).',
	'marquiares' : '**Eeeruption!**: Charge Attacks consume all MP for increased Charge Attack damage. Starts battle with 3 MP.\n' +
					'**Supernal Sorceror**: 15% reduced max HP. Marquiares gains 2 MP and refreshes 3% HP to all allies each turn (Healing cap: 200 HP)',
	'melissabelle' : '**Automatic Follicle Defense System**: Increases counter rate and skill damage cap based on how low HP is.\n' +
						'**Golden Luster**: 5% chance of 1-turn cut to skill cooldown upon taking damage. Gain ATK Up (Stackable) when Melissabelle uses damage skills (Max: 10 boosts).',
	'melleau' : '**Cat Lover**: Gain 1 stack of 5% ATK Up (Stackable) (Max: 50%) when taking damage from an enemy.',
	'metera' : '**Genius**: Increases ATK by 15% against enemies with a debuff.',
	'metera-fire' : '**Genius**: Increases ATK by 10% against enemies with a debuff.\n' +
					'**Complete Arcane Bow**: Normal attacks use Aetherial Seal for 80% bonus Fire damage.',
	'narmaya' : '**Fortified Vigor**: 10% boost to ATK for all Draph, Primal, and Unknown allies.\n' +
				'**Lock Swords**: 5% chance to reflect 99% of damage taken. Starts battle with Lethal Attack Dodged',
	'nemone' : '**Thanks!**: 20% reduced DEF, but gain 100% more charge bar when taking damage.\n' +
				'**Leave It to Nemone!**: Gain 1 stack of Nemone every time Nemone attacks an enemy [Max: 10]. A single attack grants 1 stack while a triple attack grants 3 stacks. Lose 1 stack when Nemone takes damage.',
	'nicholas' : '**Blade of Justice**: Restore HP based on 25% of one-foe damage dealt when below 50% HP (Healing cap: 800).\n' +
					'**Biometal Hero**: 20% boost to DEF. High hostility.',
	'percival' : '**Kingly Aura**: 30% increased Fire ATK when affected by Fire ATK Up.\n' +
					'**Ideal Vassals**: Increases ATK, double attack rate, and triple attack rate based on number of allies in battle.',
	'petra' : '**Breeze of Rest**: 20% boost to Wind ATK for allies with Mirror Image effect. All allies refresh up to 150 HP at the end of each turn if Petra is in the front line.',
	'razia' : '**Flash Point**: Gain 1 Flash Point stack when hit (Max: 10).\n' +
				'**On Solid Ground**: 20% boost to DEF and more likely to be attacked.',
	'robomi' : '**Power Converter**: Gain 2 Power Cells every time other allies buff or heal Robomi (Start battle with 5 Power Cells and 3 Ammo / Max: 5 Power Cells / Can\'t recover Ammo).\n' +
				'**High Mobility Chassis**: Can use each damage skill up to twice in one turn.',
	'romeo' : '**Guardian Spirit of Verona**: Restore 5 Spirit every 5 turns. 50% reduced ATK if Romeo has no Spirit. Normal attacks consume Spirit.\n' +
				'**Spirit Shroud**: 30% increased ATK and 20% increased DEF while Spirit is active.',
	'rosamia' : '**Lost Identity**: Maximum HP reduced by 15%. Take a lethal hit without being knocked-out while Curse of the Mask is active (only occurs once and leaves 1 HP).\n' +
				'**Mask Synchronization**: Deal 40% Bonus Light damage while Curse of the Mask is active.',
	'sandalphon' : '**Defiance**: Chance to remove 1 debuff at turn start.\n' +
					'**The Promise**: Starts battle with Lethal Attack Dodged.',
	'sara' : '**Graphos\'s Kindness**: Boost to ATK as HP decreases.\n' +
				'**Graphos\'s Teachings**: Gain these effects in order upon taking DMG: Convert DMG taken to Water DMG, boost to C.A. DMG, boost to C.A. DMG cap, debuff immunity, and Tank-and-Counter effect (3 hits).',
	'sarunan' : '**Mine, All Mine**: 10% Boost to DEF.',
	'sarunan-dark' : '**Dependence**: 5% increased ATK for all allies.',
	'scathacha' : '**Claw of the Dragon**: 20% boost to damage against Earth foes.\n' +
					'**Eternal Wisdom**: Boost to Scathacha\'s ATK and multiattack rate when buffed by Wind ATK Up. Allies gain 10% Bonus Wind DMG effect when they have Shield.',
	'selfira' : '**Veracious Violin**: Chance to remove 1 debuff at turn start.\n' +
				'**Skyfaring Musician**: Charge bar fills up 15% faster when Selfira is not debuffed.',
	'seruel' : '**The First Prince of Irestill**: Slight chance of Dodge-and-Counter effect (1 hit).',
	'siegfried' : '**Drachenblut**: 3% chance of healing 2-5% of damage dealt with every one-foe attack (Healing cap: 500).',
	'silva' : '**Silent Power**: Charge bar fills up 20% faster.\n' +
				'**Stick to Your Guns**: Charge attack won\'t miss against foes with Mirror Image and Dodge Rate Boosted.',
	'silva-light' : '**Spotter**: 3% boost to Light characters\' critical hit damage cap.\n' +
					'**Bullet Burst**: 200% bonus Light damage to a foe upon the chain burst Ascension when Silva is a sub ally.',
	'societte' : '**Royal Blood**: Boost to double attack rate.',
	'societte-fire' : '**Great Flames of Ninetails**: 5% chance to dodge enemy attacks.\n' +
						'**Dear Ones\' Dance**: Gain the following effects while dancing: 10% Uplifted, 30% DEF Down and Hostility Up (Stackable).',
	'sophia' : '**Zeyen Priestess**: Increases Defense.',
	'soriz' : '**Burlier with Age**: More likely to be targeted. 20% boost to max HP.',
	'therese' : '**Battle Gown**: Boost to dodge rate as HP decreases.',
	'tiamat' : '**Guardian of the Wind**: Increase ATK and DA rate by 30% each when Mirror Image is active.\n' +
				'**Anima Ductus**: 20% increased damage against Earth enemies.',
	'tsubasa' : '**Red Wing Roll-Out**: Gear shifts up upon using buff skills (Max: 5th) (Boost to dodge rate and charge bar gain based on how high Gear is.)\n' +
				'**We\'re Squad**: 10% bonus Fire damage effect to all allies\' against foes with Petrified effect',
	'vane' : '**Never Surrender!**: Starts battle with Lethal Attack Dodged.',
	'vania' : '**Selfish Royal**: 10% increased critical hit rate.',
	'vaseraga' : '**Grynoth\'s Pact**: 20% boost to ATK against foes in Overdrive.\n' +
					'**Feel No Pain**: Chance to counter attack up to 1 time when hit. Boost to DEF based on how low HP is.',
	'vaseraga-earth' : '*Feel No Pain**: When Soul Forge is in effect: 30% ATK Up, 100% / 20% boost to critical hit rate, 100% DA Up, lessen damage taken by 50%, Hostility Up, turns one-foe attacks into all-foe attacks, and debuff immunity.',
	'veight' : '**Blood Blade**: Slight chance to heal HP proportional to normal attack damage (Healing cap: 300 HP).',
	'vira' : '**Katalina Katalina Katalina**: If Katalina is in the party: 15% boost to ATK and 1-turn cut to skill cooldowns.\n' +
				'**Blade of Light**: While Luminiera Merge is active: ' +
				'15% boost to ATK, 15% boost to DEF, 50% boost to double attack rate, 15% boost to triple attack rate, ' +
				'25% Dark DMG Lowered, 50% bonus Light damage to normal attacks, and 10% Uplift effect.',
	'wulf' : '**Kampfer**: Guaranteed triple attacks. Charge bar fills up 35% slower.\n' +
				'**Einsam**: 30% boost to ATK. Gain 1 Lone Wolf Scar upon each attack (Max: 5). +15 boost to hostility for each stack. At 5 stacks, can\'t attack and reduces DEF by 70%.',
	'yggdrasil' : '**Grace of the Great Tree**: More likely to be attacked. Speed up charge bar by 100% upon taking damage.\n' +
					'**Anima Aeternus**: 20% increased damage against Water enemies.',
	'yngwie' : '**Tough Guy**: Switch into Tough Guy mode upon using Charge Attack. When Tough Guy mode is in effect: Sharp boost to ATK and DEF, debuff immunity. (Consumes charge bar every turn to extend Tough Guy mode)\n' +
				'**Borderline**: Boost to DEF based on how low HP is.',
	'yodarha' : '**Lost for Words**: Gain 3 Triple Shroudede very 4 turns. 50% reduced ATK, 50% reduced DEF, and increased hostility when Yodarha has no Triple Shrouds. Attacks and skills use Triple Shrouded.\n' +
				'**Twin Blades**: 100% triple attack rate when Triple Shrouded is active.',
	'yuel' : '**Moonrise**: 5% increased double attack rate.',
	'yuel-water' : '**Scarlet Robe**: All allies gain 10% bonus Water damage effect against enemies with Foxflame.',
	'yuisis' : '**Ditoria Style: Starslayer**: Starslayer mode: 50% boost to DEF and hostility. Boost to charge bar gain and healing specs based on Chivalry level.\n' +
				'**Ditoria Style: Heavensbane**: Heavensbane mode: 30% boost to ATK and less likely to be attacked. Boost to C.A. damage and C.A. damage cap based on Chivalry level.',
	'zahl' : '**Sun Worship**: Increases ATK for all allies based on how low Zahlhamelina\'s HP is.\n' +
				'**Solar Deflection**: 30% reduced DEF and less likely to be attacked.',
	'zeta' : '**Arvess Pact**: 20% boost to ATK against foes in Break.',
	'zeta-dark' : '**Arvess Invol**: 20% bonus damage for normal attacks and 25% bonus damage for Charge Attacks against enemies with Burned.',
	'zooey' : '**Peacemaker\'s Tears**: 1-turn cut to skill standby and cooldown for Last Wish upon being targeted by an ally\'s buff skill or healing skill.\n' +
				'**Primal Pulse**: Boost to critical hit rate and dodge rate based on number of turns passed.',
	
	'alexiel' : '**Mirror-Blade Eruption**: Boost to ATK, DEF, and charge attack specs based on number of Mirror-Blade (Max: 5).\n' +
				'**Guardian of the Realm**: Allies gain an additional 30% boost to Earth ATK when they are affected by Earth ATK Up.',
	'anila' : '**Queen of Sheep**: 10% boost to ATK for all allies and lessen Wind damage taken by 10% for all allies.',
	'andira' : '**Queen of Monkeys**: 5% chance to dodge a foe\'s one-ally attack for all allies.',
	'blackknight' : '**Sword of Despair**: Boost to Black Knight\'s ATK and DEF based on how low HP is.\n' +
					'**Black Armor**: 10% boost to max HP. 20% boost to DEF. More likely to be attacked.',
	'cain' : '**Absolute Ambush**: All allies gain 20% Bonus Earth DMG for 2.5 turns upon using charge attack against a foe with Secret Plot.\n' +
				'**Idelva\'s Prodigy**: 20% boost to ATK, 15%-20% boost to double attack rate, and 10% boost to C.A. damage cap when Cain is buffed by Instantaneity.',
	'drang' : '**On a Roll**: Gain stackable Boost to Attack Specs (8% ATK per stack (Max: 40%), ~7% double attack rate per stack (Max: ~35%), ~3% triple attack rate per stack (Max: ~15%)) ' +
				'or Boost to Defense Specs (8% DEF per stack (Max: 40%), ~5% dodge rate per stack (Max: ~25%)) at the end of each turn (Use Switcheroo to switch between effects). Lasts 4 turns.',
	'eugen' : '**Tunguska Butterfly**: Gain Chain Burst DMG Boosted (Stackable) (Max: 100%) if Eugen is targeted by an enemy attack.\n' +
				'**Headshot**: 3% chance to deal 500% more damage.',
	'europa' : '**Fountain Lotus**: Gain 1 Fountain Lotusupon triple attack (Max: 5) (Boost to ATK and healing specs based on Fountain Lotus lvl).\n' +
				'**Heavenly Allure**: Allies gain an additional 30% boost to Water ATK when they are affected by Water ATK Up.',
	'io' : '**Crystal Veil**: 10% reduced Dark damage taken for all allies.\n' +
			'**Enchanted Light**: 10% boost to allies\' Light ATK. (Boost to effect based on Mystic Vortex lvl. Total maximum effect: 25%.)',
	'katalina' : '**The Path of Duty**: Starts battle with Lethal Attack Dodged. 50% boost to ATK and 100% boost to DEF when affected by all-elemental DMG cut effect.',
	'lecia' : '**Acting Captain of the Crew of Enforcers**: Chance to remove 1 debuff from Lecia at the start of each turn.',
	'lucio' : '**The Morning Star**: Light ATK is increased by 4% per turn passed (Max: 40%). Dark DEF is reduced by 3% per turn passed (Max: -30%).\n' +
				'**Wings of Justice**: Gains Wings of Justice (17.5% DA, 10% TA per stack (Max: 70% DA; 40% TA)) each turn. Ends upon receiving damage.',
	'mahira' : '**Queen of Roosters**: All allies gain a Drum Beat upon dealing damage (Spirit Drums effects increase based on total number of Drum Beats).',
	'olivia' : '**A New Dusk Shall Dawn**: Light DEF is reduced by 3% per turn passed (Max: -30%). Bonus Dark damage is boosted by 3% per turn passed (Max: 30%).\n' +
				'**Fallen Angel**: 10% boost to damage against Light foes when Olivia has Dark ATK Up.',
	'orchid' : '**Girlish Grit**: 15% chance to dodge, but 30% reduced DEF.\n' +
				'**Automata Lloyd**: While Puppet Strings is in effect: 100% boost to ATK, 50% boost to DEF, 50% / 50% boost to critical hit rate, 100% boost to double attack rate, and 50% boost to triple attack rate.',
	'pholia' : '**Wise Sovereign, Loyal Retainer**: While White Veil is in effect: 30% boost to ATK, 30% boost to DEF, 100% / 20% boost to critical hit rate, and guaranteed double attacks.',
	'rackam' : '**Sleight of Hand**: 70% chance to attack all foes.\n' +
				'**Punish Save**: Increases ATK, chain burst damage, chain burst damage cap, and Charge Attack damage cap based on Spitfire stacks.',
	'rosetta' : '**Rose Queen**: While Rose Barrier is active: Boost to hostility, 20% repel, and refresh up to 500 HP per turn. Reduces ATK by 30%.',
	'sturm' : '**Scorchblade**: 80% bonus Fire damage for single attacks and 30% bonus Fire damage for double attacks.\n' +
				'**Hotheaded**: Chance to gain 10% ATK Up (Stackable) (Max: 50%) or inflict 5% DEF Down (Stackable) (Max: 25%) with every single-target attack. (Use Sword Switch to switch between effects).',
	'vajra' : '**Queen of Canines**: 200% maximum charge bar limit.\n' +
				'**Loyalty Eternal**: Boost to Vajra\'s charge bar based on chain burst\'s number of chains.',
	'vira-grand' : '**Primal Bits**: Use up 1 Bit to increase critical hit rate and increase damage against Dark enemies by 10%.[1] (Start battle with 3 Bit stacks / Max: 6)\n' +
					'**Impregnable Barrier**: When Aegis Merge is active: 1000% increased DEF, 100% increased debuff resistance, receive all attacks in place of allies (Includes all-ally attacks), and heal 999 HP on every turn.',
	'zooey-grand' : '**Envoy of Mediation**: Increases stats for each element among allies in the front line.',
	
	'arulumaya-c' : '**Clairvoyance**: 5% chance to dodge a foe\'s one-ally attack for all allies.',
	'beatrix-ss' : '**Immortality Forsaken**: Boost to critical hit rate and dodge rate based on how low HP is (Only activates when below 60%).\n' +
					'**Timeout!**: 20% chance to heal 10% HP if below 50% HP. Starts battle with Lethal Attack Dodged.',
	'cagliostro-h' : '**Time for a Trick**: 10% increased critical hit rate (30% more damage to Light enemies.',
	'charlotta-h' : '**Festival Attire**: 5% increased ATK and 5% increased DEF.',
	'clarisse-c' : '**Who\'s the Fairest? I am!**: 5% boost to debuff success rate for all allies.\n' +
					'**Radioactive Mode**: While Radioactive Mode is active: Cut base skill cooldowns by half. 30% boost to chain burst damage. Clarisse takes 7% max HP damage per turn (Max: 800 HP). 20% boost to ATK when Atomic Collapse is active.',
	'danua-h' : '**Carnival of Fear**: 20% reduced damage taken from Petrified enemies for all allies.\n' +
				'**Soft Touch**: Skill damage won\'t wake up enemies with Sleep.',
	'danua-ss' : '**Fear Domain**: Boost to all allies\' skill damage and debuff success rate.',
	'delafille-ss' : '**Battle is Fancy, Style is Forever**: Boost to dodge rate for attacks from foes with Blinded effect.',
	'diantha-ss' : '**Seaside Revival**: Chance to dodge all foe attacks while hyped.\n' +
					'**Summer Flower of Fate**: 10% reduced ATK, but less likely to be attacked.',
	'eustace-h' : '**Flamek Trigger**: Gain 2 Loaded stacks after each turn. If Eustace reaches 10 Loaded stacks, self-inflict Electrified for 1 turn. Lose 5 Loaded stacks when Electrified is removed.\n' +
					'**Lupine Lightning**: Increases ATK, Charge Attack damage, and Charge Attack damage cap based on Loaded stacks.',
	'grea-ss' : '**Flame Arts**: 20% bonus Water damage and 50% boost to ATK against foes with Dracoforce.\n' +
				'**Crescendo Waves**: While Linkage is in effect: 50% boost to C.A. damage, 30% boost to C.A. damage cap, refresh 5% of max HP (Healing cap: 300), and 15% Uplift effect. (Grants the same effect to an ally with Linkage effect.)',
	'heles-ss' : '**Scarlet Ribboned Lance**: 40% boost to ATK against foes in Overdrive.',
	'ilsa-ss' : '**Rise Again**: Boost to stats based on foe\'s mode.\n' +
				'When normal: 20% boost to base debuff success rate.\n' +
				'When in overdrive: 20% boost to ATK.\n' +
				'When in break: 10% Boost to Double Attack Rate and 10% Boost to Triple Attack Rate.',
	'io-ss' : '**Heat Haze**: 30% boost to C.A. DMG and 10% boost to C.A. DMG cap against foes with Burned effect.\n' +
				'**Growing Under the Sun**: 20% reduction to all allies\' DMG taken from foes with Burned effect.',
	'izmir-ss' : '**Dreams and Midsummer Nights**: Boost to all allies\' ATK based on how high Izmir\'s HP is. Izmir only: 20% reduced DEF and 15% reduced max HP.\n' +
					'**Summer Retreat**: Boost to C.A. DMG and C.A. DMG cap based on number of Icy Blade (Max: 2).',
	'jeanne-ss' : '**La Pucelle**: ~20% / 20% boost to critical hit rate.\n' +
					'**Unswayed**: Boost to multiattack rate based on how high HP is.',
	'korwa-ss' : '**Spinner\'s Thread**: Gain 1 Fil every turn. (Max: 10)\n' +
					'**Summer Debut**: 20% reduced ATK, less likely to be attacked.',
	'ladygrey-h' : '**Twilight Eden**: 30% boost to C.A. DMG and 5% boost to C.A. DMG cap for allies with Drain effect.',
	'mary-c' : '**Good Tidings to All!**: 1% Boost to ATK per Bounty stack.\n' +
				'**Joybringer**: Chance to get bonus treasure at the end of the battle.',
	'medusa-valentine' : '**Sweet Enchantment**: 40% boost to C.A. damage and 10% boost to C.A. damage cap against Poisoned foes.\n' +
							'**Supreme Serpent Eye**: Immune to Stone.',
	'naoise-ss' : '**Irestill Knight**: 20% cut to damage taken from foes in Overdrive.\n' +
					'When not debuffed: 20% boost to double attack rate and 10% boost to triple attack rate.\n' +
					'When debuffed: 80% boost to DEF.\n' +
					'**Evermore Lance**: Starts battle with Lumen Lance.',
	'narmaya-ss' : '**Fleeting Dawn**: Gain 10% ATK Up (Stackable) (Max: 50%) upon using charge attack. (Max: 5 times)\n' +
					'**Fanciful Flutter**: Gain Dodge Rate Boosted (Stackable) upon skill use. (Max: 10 times)',
	'percival-ss' : '**Flame Lord\'s Blade**: 20% boost to damage against Wind foes.\n' +
					'**Kingly Aura**: 30% increased Fire ATK when affected by Fire ATK Up.',
	'rosetta-c' : '**Rose Palace**: Increases Defense for all allies.',
	'rosetta-ss' : '**Private Rose Garden**: While Blue Rose Barrier is in effect: Boost to hostility. Grants buffs to all allies every turn based on Rose Barrier\'s strength.\n' +
					'**Every Rose Has Its Thorn**: 100% / 20% boost to critical hit rate against foes with Poisoned, 10% boost to damage cap against foes with Charmed.',
	'siegfried-ss' : '**Fate Unregretted**: Starts battle with Lethal Attack Dodged.\n' +
						'**Dark Dragon\'s Blood**: Speed up charge bar by 100% upon taking damage. DEF increases based on how low HP is.',
	'vira-ss' : '**Overflowing Passion**: Boost to mode bar cut for all allies.',
	'zeta-ss' : '**Red Fascination**: 5% boost to all allies\' ATK against a foe in Break.',
	
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

module.exports = support;