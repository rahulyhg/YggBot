const skill3 = {
	'agielba' : '**Kagutsuchi**: Gain C.A. Instant Standby and Drain. ' + 
				'End cooldown for caster\'s other skills.' +
				'\nCD: 7 turns, Duration: 2 turns.',
	'albert' : '**Lightning Burst**: Gain 1000% Skill DMG Up (Stackable) and Electrified.' +
				'\nCD: 10 turns, Duration: Until used/1 turn',
	'aletheia' : '**Speed**: Gain C.A. Instant Standby.' +
				'\nCD: 6 turns.',
	'aliza' : '**Thunder**: 200%-300% Fire damage to all foes. Gain 10% ATK Up (Stackable) (Max: 50%).' +
				'\nCD: 4 turns.',
	'altair' : '**Battleplan: Crescent Moon**: All allies gain 30% Charge Boost. \nCD: 7 turns.',
	'amira' : '**Half-God Half-Demon**: Activate Half-God Half-Demon mode. Reduce Light damage taken by 25%.' +
				'Normal attacks and charge attacks deal bonus Dark damage. ' +
				'*(Uses 100% of charge bar)*.' +
				'\nCD: 10 turns, Duration: 10 turns.',
	'anne' : '**Radiant Calling**: Restore 30% of caster\'s HP (Healing cap: 1500). ' +
				'Use 1 Spirit: Healing increased to 40%. Healing Cap increased to 3000 HP. ' +
				'Also remove all debuffs on caster.' +
				'\nCD: 4 turns.',
	'anthuria' : '**Captivation**: Inflict DA Down and TA Down on all foes. ' +
				'All allies gain a 500-damage Shield. ' +
				'Gain Silent Tap, restoring all allies\' HP upon dodging (Healing cap: 1500).' +
				'\nCD: 8 turns, Duration: 180 sec/3 turns.',
	'aoidos' : '**Legendary Warriors**: All allies gain Hyped. ' +
				'\nCD: 5 turns, Duration: 1 turn.',
	'arriet' : '**Euphoria**: All allies gain Mode Bar Cut Boosted. ' +
				'Inflict 25% ATK Down and 25% DEF Down on all foes. ' +
				'\nCD: 7 turns, Duration: 3 turns, 180 sec.',
	'arulumaya' : '**Nakshatra**: 250%-300% Earth damage to a foe. Inflict Delay. ' +
				'\nCD: 6 turns.',
	'ayer' : '**Provoke**: Gain Hostility Up. Take a lethal hit without being knocked out. ' +
				'\nCD: 6 turns, Duration: 2 turns.',
	'azazel' : '**Malice Wing**: Gain 70% Dark ATK Up. Self-inflict 20% Light DEF Down. ' +
				'\nCD: 8 turns, Duration: 3 turns.',
	'baotorda' : '**Noble Sacrifice**: All allies gain 60% DMG Cut. ' +
				'\nCD: 6 turns, Duration: 1 turn.',
	'beatrix' : '**Soaring Star**: Gain Jammed. *(Uses 40% of max HP)*. ' +
				'\nCD: 1 turn, Duration: 8 turns.',
	'birdman' : '**Stormwind\'s Solace**: Gain 100% DA Up and 20% TA Up. ' +
				'\nCD: 6 turns, Duration: 3 turns.',
	'cagliostro' : '**Reinforce**: Restore 200 + 25% of all allies\' HP (Healing cap: 2000). ' +
				'All allies gain Refresh. ' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'cagliostro-dark' : '**Nucleosynthesis**: 350% Dark damage to a foe. All allies gain Boost to healing cap.' +
				'\nCD: 7 turns, Duration: 1 turn.',
	'carmelina' : '**All Sensation**: Inflict 15% Debuff Res. Down on all foes.' +
					'\nCD: 6 turns, Duration: 180 sec.',
	'catherine' : '**Violet Assassination**: Gain Salted Wound (Nightsmoke\'s Prey).' +
					'\nCD: 6 turns, Duration: 1 turn.',
	'cerberus' : '**Triad Deception**: Inflict Charmed, Blinded, and Burned on a foe.' +
					'\nCD: 9 turns, Duration: 180 sec.',
	'charlotta' : '**Sword of Lumiel**: 550% Water damage to a foe. Inflict Mode Bar Cut. Gain Unchallenged.' +
					'\nCD: 6 turns, Duration: 1 turn.',
	'chatnoir' : '**A Spectacular Heist**: Plain damage to a foe based on 1%-5% of its current HP and remove 1 buff.' +
					'\nCD: 6 turns.',
	'clarisse' : '**Atomic Resolution**: Plain damage to a foe based on 1%-5% of its current HP and remove 1 buff.' +
					'\nCD: 6 turns.',
	'clarisse-light' : '**Atomic Resolution**: Plain damage to a foe based on 1%-5% of its current HP and remove 1 buff.' +
						'\nUse 1 Dissolution charge: All allies also gain DMG Boosted.' +
						'\nCD: 6 turns, Duration: 4 turns.',
	'cucouroux' : '**Armslore**: Grant an ally Assemble and 50% Dodge Rate Boosted.',
	'delafille' : '**Regeneration**: All allies gain Revitalize.' +
					'\nCD: 10 turns, Duration: 5 turns.',
	'delafille-earth' : '**Glitter Reflection**: 300% Earth damage to all foes. All allies gain 40% Repel for up to 2 hits.' +
						'\nCD: 9 turns, Duration: 2 turns.',
	'eustace' : '**Slow Death**: 8-hit, 30%-35% Earth damage to random foes. Gain 10% Charge Boost.' +
					'\nCD: 5 turns.',
	'feena' : '**Victory Charge**: Gain Guaranteed TA.' +
				'\nCD: 8 turns, Duration: 2 turns.',
	'ferry' : '**Hin Liechten**: All allies gain 100% TA Up and 30% Bonus Light DMG. Inflict Shorted on all allies. *(Uses 100% of all allies\' charge bar.)*' +
				'\nCD: 12 turns, Duration: 4 turns.',
	'forte' : '**Conqueror Wing**: Gain 30% / 50% Critical Hit Rate Up and 70% DA Up.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'freezie' : '**Cursed Malice / Energy Drain**: Switch into Dark Mutation mode.(Consumes 100% of charge bar. ' +
				'Ends all skills\' cooldown. Can\'t recast).' +
				'\nIn Dark Mutation mode: 2000% Dark damage to a foe. Restore caster\'s HP.' +
				'Ready in 3 turns, can\'t be recast.',
	'gawain' : '**Noblesse Oblige**: All allies gain 70% DMG Cut.' +
				'\nCD: 5 turns, Duration: 1 turn.',
	'ghandagoza' : '**True Avidya**: All allies gain 20% Fire ATK Up and 30% DA Up. Gain Unmatched Aspiration.' +
					'\nCD: 7 turns, Duration: 5 turns.',
	'grea' : '**Dragonheart**: Gain Guaranteed TA and 40% / 20% Critical Hit Rate Up. *(Uses 30% of charge bar)*' +
				'\nCD: 8 turns, Duration: 2 turns.',
	'halle' : '**Say Goodbye!**: Gain 25% / 50% Critical Hit Rate Up.' +
				'\nCD: 6 turns, Duration: 3 turns.',
	'heles' : '**Reckoning Night**: Gain Guaranteed TA and Counters on Dodge for 1 hit. *(Uses 30% of charge bar)*' +
				'\nCD: 8 turns, Duration: 3 turns.',
	'ilsa' : '**Ear Ringer**: Use up all Bullets to deal Earth damage to a foe. (Boost to damage and damage cap based on number of Bullets used.)' +
				'\nReady in 3 turns, CD: 10 turns.',
	'izmir' : '**Immutable Faith**: Gain 30% Charge Bar Sped Up and Hostility Down.' +
				'\nCD: 8 turns, Duration: 3 turns.',
	'jeanne' : '**Advent Eternal**: Gain 100% TA Up and Strength.' +
				'\nCD: 8 turns, Duration: 2 turns.',
	'jeanne-dark' : '**Eternal Chaos**: Gain Invulnerable, then knocked out after 5 turns. ' +
					'(Effect removed upon full HP recovery. Can\'t be cast if HP is full).' +
					'\nCD: 15 turns, Duration: 5 turns.',
	'juliet' : '**Cielo della Grazia**: Restore 5 Spirit Shroud. *(Uses 20% of charge bar)*' +
				'\nCD: 10 turns.',
	'katapillar' : '**Aether Bane**: 250% Water damage to a foe. Inflict 20% Fire ATK Down and 20% Water DEF Down.' +
					'\nCD: 10 turns, Duration: 180 sec.',
	'korwa' : '**Viscos**: Grant one ally Col, increasing DEF and granting refresh. (Costs 3 Fil)' +
				'\nCD: 1 turn, Duration: 5 turns.',
	'ladygrey' : '**Bane**: Dark damage to a foe. Inflict Poisoned on a foe.' +
				'\nCD: 5 turns, Duration: 180 sec.',
	'lancelot' : '**Southern Cross**: Gain 100% DA Up, 30% TA Up and 30% Bonus Water DMG.' +
				'\nCD: 8 turns, Duration: 5 turns.',
	'lancelot-wind' : '**Ritterorden**: All allies gain 30% DA Up, 15% TA Up, and 10% Bonus Wind DMG.' +
						'\nCD: 7 turns, Duration: 3 turns.',
	'lennah' : '**Espoir**: Remove 1 debuff from all allies.' +
				'\nCD: 3 turns.',
	'lilele' : '**And the Seasons Go On**: Heal all male allies up to 3000 HP. All male allies gain a 1500-damage Shield.' +
				'\nHeal all female allies up to 2000 HP. All female allies gain a 1000-damage Shield.' +
				'\nCD: 8 turns, Duration: 3 turns.',
	'lily' : '**White Heal**: Restore all allies\' HP (Healing cap: 1500) and remove 1 debuff.' +
				'\nCD: 6 turns.',
	'lunalu' : '**Inspiration**: Gain C.A. Instant Standby.End Facsimile II\'s cooldown. ' +
				'Self-inflict 1 stack of 10% Max HP Lowered (Stackable).' +
				'\nReady in 3 turns, CD: 8 turns.',
	'maids' : '**Keep it Clean / Door Knocker**: Dorothy: 250% Light damage to all foes and remove 1 buff. ' +
				'\nClaudia: 500% Light damage to a foe and inflict Gravity' +
				'\nCD: 7 turns, Duration: -/180 sec.',
	'magisa' : '**Walpurgis**: 500% Fire damage to all foes. Inflict Blinded and Burned.' +
				'\nCD: 6 turns, Duration: 7 turns.',
	'marquiares' : '**Reign of Terror**: Heal all allies for 30% max HP (Healing cap: 1500 HP).' +
					'\nUse 3 MP: All allies also gain a 2000-damage Shield.' +
					'\nCD: 6 turns, Duration: 3 turns.',
	'melissabelle' : '**Left Hairsaber**: 6-hit, 100% Wind damage to random foes. ' +
						'Hits increase by 1 with each cast (Max: 10 hits).' +
						'\nCD: 6 turns.',
	'melleau' : '**Impelliteri**: Gain Guaranteed TA.' +
				'\nCD: 7 turns, Duration: 2 turns.',
	'metera' : '**The Great Fall**: 400%-450% Wind damage to a foe and inflict Delay.' +
				'\nCD: 8 turns.',
	'metera-fire' : '**Descent of the Flames**: 550% Fire Damage to a foe. Self-inflict 20% DEF Down and Hostility Up (Stackable).' +
					'\nUse Aetherial Seal: Don\'t self-inflict 20% DEF Down and Hostility Up (Stackable).' +
					'\nCD: 4 turns, Duration: 5 turns.',
	'narmaya' : '**Kyogasuigetsu**:' +
				'\nDawnfly stance: Increase a foe\'s mode bar by 5% and inflict Delay.' +
				'\nFreeflutter stance: Gain Defiance and 20% ATK Up.' +
				'\nCD: 6 turns.',
	'nemone' : '**Stand in Line**: Time to let that power rip!(Consume all Nemone stacks to gain 15% ATK Up (Max: 150%) ' +
				'and 5% DMG Cap Up (Max: 50%) per stack for 1 turn.)' +
				'\nCD: 1 turn, Duration: 1 turn.',
	'nicholas' : '**Giga Shield**: All allies gain 60% DMG Cut.' +
					'\nCD: 6 turns, Duration: 1 turn.',
	'percival' : '**Traumerei**: Gain Strength, 30% Fire ATK Up and 20% Bonus Fire DMG.' +
					'\nCD: 8 turns, Duration: 3 turns.',
	'petra' : '**Elemental Breath**: All allies gain 50% Wind ATK Up, 50% Fire ATK Up, 50% Earth ATK Up and 50% Water ATK Up.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'razia' : '**Uebel Zerstoeren**: Gain C.A. Instant Standby and 50% / 50% Critical Hit Rate Up.' +
				'\nCD: 8 turns, Duration: 3 turns.',
	'robomi' : '**Blaster Array**: Gain Booster Activated. *(Uses 1 Power Cells)*' +
				'\nCD: 6 turns, Duration: 5 turns.',
	'romeo' : '**Fiamma Blu**: Switch to Amplified mode and instantly reset the cooldown on other skills. Can deactivate Amplified mode after 1 turn. ' +
				'When deactivated: Restore 5 Spirit and skill cooldown is set to 10 turns.' +
				'\nCD: 10 turns, Duration: Until recast.',
	'rosamia' : '**Groundhold Talisman**: Gain 100% DA Up, 40% TA Up and sharp Hostility Up.' +
				'\nCD: 11 turns, Duration: 6 turns.',
	'sandalphon' : '**The Power of One**: All allies gain 30% / 50% Critical Hit Rate Up and DMG Boosted.' +
					'\nCD: 7 turns, Duration: 3 turns.',
	'sara' : '**Emeth**: Gain 1000% DEF Up.' +
				'\nCD: 5 turns, Duration: 2 turn.',
	'sarunan' : '**Holy Suction**: 150%-200% Light damage to all foes. Restore all allies\' HP based on 33% of damage dealt (Healing cap: 1500).' +
				'\nCD: 6 turns.',
	'sarunan-dark' : '**Forbidden Curse**: Gain Spell Sacrifice buff. Can stack up to 7 times. ' +
						'Each stack increases the damage for Sleepless Dream by +100% additively and the healing cap by 50 HP.' +
						'\nCD: 0 turns, Duration: 3 turns.',
	'scathacha' : '**Dragon\'s Heart**: Grant an ally a Shieldworth 25% of caster\'s max HP (Max: 5,000). *(Uses 25% of max HP)*' +
					'\nCD: 2 turns.',
	'selfira' : '**All\'improvista**: Restore 10% of all allies\' HP (Healing cap: 2,000). End cooldown for caster\'s other skills.' +
				'\nCD: 9 turns.',
	'seruel' : '**Regulus Gloria**: 350%-400% Light damage to all foes. All allies gain 20% Charge Boost.' +
				'\nCD: 6 turns.',
	'siegfried' : '**Delirium**: Drain an enemy\'s mode bar and gain up to 25% Charge Boost and gain 20% DA Up.' +
					'\nCD: 8 turns, Duration: 6 turns.',
	'silva' : '**Dead Specimen**: Gain C.A. Instant Standby and 20% Bonus C.A. DMG.' +
				'\nCD: 7 turns, Duration: 1 turn.',
	'silva-light' : '**Blind Spot**: Switch out with a sub ally. Ally gains Backup Fire.' +
					'\nReady in 5 turns, CD: 9 turns, Duration: 3 turns.',
	'societte' : '**Closing Dance: Tokiyomi**: Water damage to a foe. Inflict Delay.' +
					'\nCD: 6 turns.',
	'societte-fire' : '**Closing Dance: Tokiyomi-aratame**: Gain Closing Dance: Tokiyomi Kai, 1 stack of Closing Dance: Tokiyomi Kai and begin dancing. Recast to stop dancing.' +
						'\nWhile dancing: Can\'t attack while dancing. Gain 1 stack of Closing Dance: Tokiyomi Kai after each turn (Max: 5). All Fire allies gain DA Up and TA Up when attacking. Buff effects increase based on stacks.' +
						'\nOn recast: Consume all Closing Dance: Tokiyomi Kai stacks and gain equal amount of Closing Dance: Tokiyomi Kai stacks for up to 4 turns. All Fire allies gain DA Up and TA Up when attacking.' +
						'\nCD: 4 turns.',
	'sophia' : '**Metanoia**: ~50% chance to revive one ally. If successful, ally revives with 50% HP. If revive fails, Metanoia cooldown set to 2 turns.' +
				'\nCD: 12 turns.',
	'soriz' : '**Macho Ultimatum**: End cooldown for Tenacious Will and Bravado Bullet.' +
				'\nWhen there are female allies: Also gain ATK Up, 80% DEF Up, and No Touching My Ladies.' +
				'\nCD: 7 turns, Duration: 2 turns.',
	'therese' : '**Caerula Gladius**: Fire damage to a foe. Reset cooldowns for Therese\'s other skills. *(Uses all of charge bar)*' +
				'\nCD: 7 turns.',
	'tiamat' : '**Wind Cloak**: All allies gain Veil and Mirror Image for 1 hit.' +
				'\nCD: 8 turns.',
	'tsubasa' : '**Going Kamikaze**: All allies gain DA Up and 20% TA Up. *(Uses 20% of charge bar)*' +
				'\nCD: 6 turns, Duration: 2 turns.',
	'vane' : '**Soul Eruption**: Heal to full HP and remove all debuffs. Gain Soul Eruption, sharply boosting stats. ' +
				'*(Only usable when almost knocked out. Uses all of charge bar.)*' +
				'\nCD: 15 turns, Duration: 5 turns.',
	'vania' : '**Charm Throb**: Inflict Charmed on a foe. Gain 20% ATK Up, 20% DEF Up, 20% DA Up, and 10% TA Up.' +
				'\nCD: 10 turns, Duration: 180 sec/3 turns.',
	'vaseraga' : '**Forgotten Tales**: Gain 50% ATK Up, Mode Bar Cut Boosted and 20% Bonus Dark DMG.' +
					'\nCD: 6 turns, Duration: 3 turns.',
	'vaseraga-earth' : '**Welcome to Death**: All allies gain 30% Charge Boost.' +
						'\nCD: 7 turns.',
	'veight' : '**Scarlet Slayer**: Add 1 charge diamond to a foe. All allies gain 20% C.A. DMG Up.' +
				'\nCD: 12 turns, Duration: 8 turns.',
	'vira' : '**Affection Oath**: 300%-400% Dark damage and 300%-400% Light damage to a foe. ' +
				'Restore caster\'s HP based on 50% of damage dealt (Healing cap: 2000).' +
				'\nCD: 9 turns.',
	'wulf' : '**Rufen**: Gain 50% Dodge Rate Boosted and 20% Charge Boost.' +
				'\nCD: 9 turns, Duration: 5 turns.',
	'yggdrasil' : '**Cerasus Gratia**: Restore all allies\' HP and remove 1 debuff (Healing cap: 500). All allies gain Refresh.' +
					'\nCD: 7 turns, Duration: 3 turns.',
	'yngwie' : '**No Mercy**: Gain 50% / 50% Critical Hit Rate Up, 30% Bonus Water DMG and Full Metal Beam.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'yodarha' : '**Perpetual Rotation**: Restore 3 Triple Shrouded.' +
				'\nCD: 15 turns.',
	'yuel' : '**Rite of Dawn**: Heal all allies for 150 + 20% HP and remove 1 debuff (Healing cap: 1500).' +
				'\nCD: 6 turns.',
	'yuel-water' : '**Prelude Dance: Taika**: 400% Water damage to a foe and inflict Foxflame.' +
					'\nCD: 7 turns, Duration: 3 turns.',
	'yuisis' : '**Suppression / Unfettered**:' +
				'\nStarslayer mode: Gain Counters on DMG for up to 2 hits.' +
				'\nHeavensbane mode: Gain Guaranteed DA.' +
				'\nCD: 5 turns, Duration: 3 turns.',
	'zahl' : '**New Faith**: All allies gain 20% Fire ATK Up and 20% Wind Cut.' +
				'\nCD: 6 turns, Duration: 5 turns.',
	'zeta' : '**Thousand Flames**: 250%-350% Fire damage to all foes. Inflict Break Boosted (Time).' +
				'\nCD: 5 turns.',
	'zeta-dark' : '**Signo Nero**: Gain 100% TA Up. *(Uses 30% of charge bar)*' +
					'\nCD: 8 turns, Duration: 3 turns.',
	'zooey' : '**The Last Wish**: 1000% Light damage to a foe. All Light allies gain Sign of Zooey and Drain.' +
				'\nReady in 5 turns, CD: 12 turns, Duration: 5 turns.',
	
	'alexiel' : '**Lagulf**: 6-hit, 150% Earth damage to random foes. Deploy 1 Mirror-Blade.' +
				'\nCD: 7 turns.',
	'anila' : '**Hidden Tigger, Crouching Dragon**: All allies gain Hidden Tiger, Crouching Dragon. ' +
				'(Equivalent to 50% ATK Up 30% DA Up, 30% / 30% Critical Hit Rate Up, 50% Charge Bar Sped Up, 50% Debuff Res. Up)' +
				'\nCD: 7 turns, Duration: 5 turns.',
	'andira' : '**Tricumulo**: All allies gain Loop, increasing in effect for 3 turns, then decaying until it ends.' +
				'\nCD: 8 turns, Duration: 6 turns.',
	'blackknight' : '**Acumen**: Inflict Petrified on a foe.' +
					'\nCD: 7 turns, Duration: 60 sec.',
	'cain' : '**Bagua Blade Reborn**: 8-hit Earth damage to random foes. Gain 20% Charge Boost.' +
				'\nCD: 5 turns.',
	'drang' : '**Fool You Thrice**: Remove 1 buff effect from a foe. Inflict 25% ATK Down and 25% DEF Down.' +
				'\nCD: 5 turns, Duration: 180 sec.',
	'eugen' : '**Autoignition**: Gain C.A. Instant Standby and Autoignition. Remove 1 debuff from Eugen.' +
				'\nCD: 12 turns, Duration: 2 turns.',
	'europa' : '**Pleiades**: 700% Water damage to a foe. Gain Guaranteed TA and 70% Bonus Water DMG.' +
				'\nCD: 7 turns, Duration: 1 turn.',
	'io' : '**Mystic Vortex**: Convert charge bar to gain Mystic Vortex. (Raises Mystic Vortex lvl based on charge bar amount used.)' +
			'\nCD: 2 turns, Duration: Until used.',
	'katalina' : '**Light Wall Divider**: All allies gain 25% DMG Cut.' +
					'\nCD: 3 turns, Duration: 1 turn.',
	'lecia' : '**Stalwart Command**: Gain Issue Orders. Lecia gains 1 stack of an Order type depending on the type of skill an ally uses. Skill cooldown set to 1 turn. (Recast skill to end orders)' +
				'\nOn recast: Consume all Order stacks and provide an effect depending on the Order type. Skill cooldown set to 3 turns.' +
				'\nCD: 1 turn, 3 turns (Recast), Duration: Varies.',
	'lucio' : '**Awakenings**: Gain 90% Bonus Light DMG, 30% TA Up, 75% Dark Cut, and 100% Debuff Res. Up.' +
				'\nCD: 7 turns, Duration: 2 turns.',
	'mahira' : '**Feather the Nest**: All allies gain 25% ATK Up and 20% Bonus Earth DMG.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'olivia' : '**Nevermore**: Gain 30% TA Up, 100% / 30% Critical Hit Rate Up, and 10% Debuff Success Boosted.' +
				'\nCD: 7 turns, Duration: 2 turns.',
	'orchid' : '**Oblivion**: 3 hits of 300% Dark damage to random foes. Gain 20% Charge Boost.' +
				'\nCD: 6 turns.',
	'pholia' : '**Mark of Indistinction**: Water damage to all foes. Inflict Sea-Sky Offing. (Charge diamonds don\'t fill up / Can\'t use special attacks.)' +
				'\nCD: 8 turns, Duration: 2 turns.',
	'rackam' : '**Double Tap**: Gain 100% DA Up and Double Tap (Deals bonus DMG and gains Spitfire effect on attack).' +
				'\nCD: 5 turns, Duration: 1 turn.',
	'rosetta' : '**Imrryr**: Self-heal up to 1000 HP. Gain 25% ATK Up and 25% DEF Up.' +
				'\nCD: 6 turns.',
	'sturm' : '**Redouble**: Gain 50% ATK Up, 55% DA Up, 20% TA Up, 30% Dodge Rate Boosted. *(Uses 20% of charge bar)*' +
				'\nCD: 9 turns, Duration: 5 turns.',
	'vajra' : '**Hound of the Hunt**: Gain Double Strike and Summon Garjana. *(Uses 30% of charge bar)*' +
				'\nCD: 9 turns, Duration: 2 turns.',
	'vira-grand' : '**Divine Weapon**: Gain Guaranteed TA, 20% Charge Bar Sped Up and 50% Light ATK Up. (Affects all allies when Aegis Merge is active.)' +
					'\nCD: 9 turns, Duration: 1 turn.',
	'zooey-grand' : '**Thunder**: Dark damage to all foes and randomly inflict one of three debuffs: ATK Down (Stackable), DEF Down (Stackable), or Debuff Res. Down (Stack) (Max: 30%).' +
					'\nCD: 6 turns, Duration: 180 sec.',
	
	'arulumaya-c' : '**Gaze into Snow Globe / End Gaze**: Gaze into snow globe (Random effect based on the color of the snow globe).' +
					'\nCD: No Color: 0 turns, End Gaze: 5 turns, Duration: 1 turn.',
	'beatrix-ss' : '**Soaring Star**: Gain Jammed. *(Uses 40% of max HP)*' +
					'\nCD: 1 turn, Duration: 8 turns.',
	'cagliostro-h' : '**Reinforce**: Heal all allies for 200 + 25% HP (Healing cap: 2000 HP).' +
						'\nCD: 7 turns.',
	'charlotta-h' : '**Mystic Boon**: Create Cure Potion.' +
					'\nCD: 7 turns.',
	'clarisse-c' : '**Beta Decay**: Inflict 10% ATK Down (Stackable) (Max: 30%) on a foe. Raise foe\'s β Decay by 4 stacks and lower α Decay by 1 stack.' +
					'\nCD: 4 turns, Duration: ATK Down: 180 sec, Decay: 120 sec.',
	'danua-h' : '**Saures**: Inflict Sleep on all foes. (Can use Trick Reaper again upon putting a Petrified enemy to sleep.)' +
				'\nCD: 7 turns, Duration: 1-3 turns.',
	'danua-ss' : '**Upgrade**: Dark damage to all foes. Inflict 25% ATK Down.' +
					'\nCD: 5 turns, Duration: 180 sec.',
	'delafille-ss' : '**Gleaming Mirror**: All allies gain 40% Repel for up 3 hits.' +
						'\nCD: 9 turns, Duration: 3 turns.',
	'diantha-ss' : '**Standing Ovation**: All allies gain Hyped.' +
					'\nCD: 6 turns, Duration: 2 turns.',
	'eustace-h' : '**Wasted Earth**: All allies gain 40% DA Up and 30% Earth ATK Up. Gain 1 Loaded stack.' +
					'\nCD: 8 turns.',
	'grea-ss' : '**Dragonheart**: Gain Dracostrike (100% TA Up, 60% / 20% critical hit rate). ' +
				'(Uses 30% of charge bar / Grants the same effect to an ally with Linkage effect)' +
				'\nCD: 8 turns, Duration: 2 turns.',
	'heles-ss' : '**Reckoning Night**: Gain Guaranteed TA and Counters on Dodge for up to 1 hit. *(Uses 30% of charge bar)*' +
					'\nCD: 8 turns, Duration: 3 turns.',
	'ilsa-ss' : '**Hellfire Club**: Mount a Type-3 Aerial Mine to a foe. ' +
				'(Type-3 Aerial Mine detonates when a foe uses a special attack. 999,999 Plain damage and Paralyzed effect to all foes upon detonation)' +
				'\nCD: 10 turns.',
	'io-ss' : '**Sunny Days**: Restore 50% of an ally\'s HP (Healing cap: 2500). Grant 30% Bonus Fire DMG and 30% Fire ATK Up.' +
				'\nCD: 5 turns, Duration: 4 turns.',
	'izmir-ss' : '**White Wyrm**: 250%-400% Water damage to a foe.' +
					'\nUse 1 Icy Blade: Activates this skill twice.' +
					'\nCD: 7 turns.',
	'jeanne-ss' : '**Banner of the Brave**: All allies gain 30% ATK Up and 10% Charge Boost.',
	'korwa-ss' : '**Croquis d\'Ete**: Gain Coudres. Ends on recast.' +
					'\nWhile Coudresis active: 30% reduced DEF and can\'t attack. Gain 2 more Fil and 20% Charge Boost at end of turn.' +
					'\nCD: 3 turns, Duration: Until recast.',
	'ladygrey-h' : '**Hands of Necronia**: Grant a Dark ally a Shield worth 70% of caster\'s max HP (Max: 4000) and 30% Bonus Dark DMG. (Bonus Dark DMG effect ends upon taking damage.)' +
					'\nCD 7 turns.',
	'mary-c' : '**Merry Sparkle**: All allies gain 100% TA Up.' +
				'\nCD: 7 turns, Duration: 1 turn.',
	'medusa-valentine' : '**Eyes for Only You**: All allies gain 40% Repel for up to 2 hits. Medusa gains Amplifier Prism.' +
							'\n(When foe uses a special attack: All allies gain 50% Charge Boost, 30% C.A. DMG Up (1 time), and 10% C.A. DMG Cap Up (1 time).' +
							'\nCD: 9 turns, Duration: 3 turns.',
	'naoise-ss' : '**Aureate Stance**: Gain 80% C.A. DMG Up (1 time), 20% C.A. DMG Cap Up (1 time), and 50% / 50% Critical Hit Rate Up.' +
					'\n(When Lumen Lance is consumed: Affects all allies)' +
					'\nCD: 7 turns, Duration: 3 turns.',
	'narmaya-ss' : '**Mental Focus**: Gain 30% / 50/75/100% Critical Hit Rate Up, 20% ATK Up, and Salted Wound. Skill rank increases with each use (Max Rank: 3)' +
					'\nCD: 7 turns, Duration: 3 turns.',
	'percival-ss' : '**Faszination**: Inflict Adoration and 25% Fire DEF Down on a foe. *(Uses 20% of charge bar)*' +
					'\nCD: 7 turns, Duration: 2-3 turns/180 sec.',
	'rosetta-c' : '**Illuminati Flow**: Heal all allies up to 1500 HP and remove 1 debuff.' +
					'\nCD: 6 turns.',
	'rosetta-ss' : '**Rosa Chinensis**: 500% Earth damage to all foes. End cooldown for Blue Rose Barrier.' +
					'\nCD: 9 turns.',
	'siegfried-ss' : '**L\'Ombre d\'Hier**: Gain 50% DEF Up, Hostility Up, and Counters on DMG for up to 3 hits.' +
						'\nCD: 7 turns, Duration: 3 turns.',
	'vira-ss' : '**Lyst**: Self-inflict Lyst, reducing ATK for 3 turns. Then gain Lyst, boosting ATK for 3 turns. Gain 100% Charge Boost on fourth turn.' +
				'\nCD: 10 turns, Duration: 6 turns.',
	'zeta-ss' : '**Arvess Swing**: 400%-500% Light damage to a foe. Gain Guaranteed TA.',
	
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

module.exports = skill3;