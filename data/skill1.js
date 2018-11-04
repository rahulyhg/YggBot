const skill1 = {
	'agielba' : '**Fortitude**: Gain Substitute, 40% DEF Up, and Counters on DMG for up to 3 hits.' +
				'\nCD: 6 turns, Duration: 1 turn/3 turns.',
	'albert' : '**Impulse Slash**: 125% Light and Fire damage to a foe. Inflict 10% Light DEF Down.' +
				'\nCD: 4 turns, Duration: 180 sec.',
	'aletheia' : '**Order**: 400%-500% Earth damage to a foe.' +
				'\nCD: 5 turns.',
	'aliza' : '**Waves of Fire**: Gain Counters on Dodge for up to 3 hits and Substitute. *(Uses 25% of charge bar)*' +
				'\nCD: 6 turns, Duration: 2 turns.',
	'altair' : '**Battleplan: Surround**: All allies gain 30% ATK Up, 30% DEF Up, and 30% Water ATK Up.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'amira' : '**Bal-Sagoth**: All allies gain 30% DA Up, 15% TA Up, and 30% Charge Bar Sped Up.' +
				'\nCD: 6 turns, Duration: 3 turns.',
	'anne' : '**Anti-Collision Spell**: All allies gain 100% DEF Up for 3 turns.' +
				'\nUse 1 Spirit: All allies also gain Armored for 5 turns.' +
				'\nCD: 8 turns, Duration: 3 turns/5 turns.',
	'anthuria' : '**Dance of Delirium**: Gain 50% Dodge Rate Boosted and Hostility Up.' +
				'\nCD: 4 turns, Duration: 2 turns.',
	'aoidos' : '**Judgement Night**: Gain Hyped.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'arriet' : '**Philanthropy**: 1-turn cut to a Wind ally\'s skill cooldowns and grant Double Strike.' +
				'\nCD: 9 turns, Duration: 1 turn.',
	'arulumaya' : '**Heaven\'s Moon**: 400%-450% Earth damage to all foes and inflict 25% ATK Down and 10% Water ATK Down.' +
				'\nCD: 6 turns, Duration: 180 sec.',
	'ayer' : '**Guilty Break**: Gain Guilty Break, greatly boosting ATK as HP decreases. *(Uses 25% of max HP)*' +
				'\n\nCD: 0 turns, Duration: 8 turns.',
	'azazel' : '**Merciless Doom**: Inflict Blinded and 25% Dark DEF Down on all foes. *(Uses 20% of charge bar)*' +
				'\nCD: 7 turns, Duration: 180 sec.',
	'baotorda' : '**Valiant Shield**: Gain Bulwark. (Deals 40% less damage and doesn\'t deal multiattacks while in effect. Ends on recast).' +
				'\nCD: 3 turns.',
	'beatrix' : '**Embrasque Sword**: 400%-500% Dark damage to a foe. Gain Guaranteed TA.' +
				'\nCD: 6 turns, Duration: 1 turn.',
	'birdman' : '**Adamant Solace**: Gain 45% ATK Up and Veil.' +
				'\nCD: 6 turns, Duration: 5 turns.',
	'cagliostro' : '**Collapse**: 200%-250% Earth damage to all foes. Inflict 15% DEF Down.' +
				'\nCD: 6 turns, Duration: 180 sec.',
	'cagliostro-dark' : '**Arcana Evolution**: All Dark allies gain 50% / 40% Critical Hit Rate Up. ' +
						'All allies gain 20% ATK Up and 20% DEF Up. *(Uses 10% of charge bar)*' +
						'\nCD: 6 turns, Duration: 3 turns.',
	'carmelina' : '**War Hoop**: Wind damage to all foes (Boost to damage as number of foes decrease). ' +
					'Inflict 10% DEF Down, DA Down and TA Down.' +
					'\nCD: 5 turns, Duration: 180 sec.',
	'catherine' : '**Nocturnal**: Inflict Enticed and  Nightsmoke\'s Prey on a foe. ' +
					'(Inflict Charmed on a foe when failing to land Enticed.)' +
					'\nCD: 6 turns, Duration: 3 turns/180 sec.',
	'cerberus' : '**Absorption: 3-hit Dark damage to a foe. Restore caster\'s HP (Healing cap: 1333).' +
					'\nCD: 6 turns.',
	'charlotta' : '**Blue Moon**: 350%-450% Water damage to a foe and inflict 20% DEF Down.' +
					'\nCD: 5 turns, Duration: 180 sec.',
	'chatnoir' : '**Challenge Letter**: Gain Forewarning.' +
					'\nCD: 4 turns, Duration: 3 turns.',
	'clarisse' : '**Nano Analyze**: Inflict 25% DEF Down and 15% Fire DEF Down on a foe.' +
					'\nCD: 5 turns, Duration: 180 sec.',
	'clarisse-light' : '**Power Inhibitor**: Gain 650% C.A. DMG Up, 50% C.A. DMG Cap Up, and ' +
						'Hostility Up. Self-inflict 50% DEF Down. *(Costs 1 Dissolution charge)*' +
						'\nCD: 7 turns, Duration: 1 turn.',
	'cucouroux' : '**Explosive Keg**: Water damage to a foe. ' +
					'(Uses all Powder Keg stacks. SPEC enhanced based on number of Powder Keg stacks used)' +
					'\nCD: 6 turns.',
	'delafille' : '**Jewel Mirror**: Gain Counters on Dodge for up to 3 hits and 20% Bonus Light DMG. ' +
					'(Bonus Light DMG effect ends upon taking damage.)' +
					'\nCD: 7 turns, Duration: 2 turns.',
	'delafille-earth' : '**Serenity Shimmer**: All allies gain Refresh, a 1000-damage Shield, and 20% Earth ATK Up' +
						'\nCD: 15 turns, Duration: 10 turns.',
	'eustace' : '**Flamek Thunder**: 250%-350% Earth damage to all foes. Inflict Paralyzed.' +
					'\nCD: 6 turns, Duration: 2 turns.',
	'feena' : '**Three Way Destruction!**: 500% Wind damage to all foes. Inflict 25% DEF Down.' +
				'\nCD: 7 turns, Duration: 180 sec.',
	'ferry' : '**Vergiften**: 250%-350% Light damage to all foes.' +
				'\nCD: 5 turns.',
	'forte' : '**Blackwyrm Lash**: 400%-500% Dark damage to a foe.' +
				'\nCD: 5 turns.',
	'freezie' : '**Ruthless Ricochet / Scharfe Schneide**: Consume 1 Ammunition to deal 3-hit Dark damage to a foe. Inflict 10% DEF Down (Stackable) (Max: 30%). (Starts battle with 3 Ammunition. Can\'t recover Ammunition.)' +
				'\nIn Dark Mutation mode: 7-hit Dark damage to random foes. Gain 10% Charge Boost.' +
				'\nCD: 2 turns, Duration: 180 sec.',
	'gawain' : '**Fracture**: 250%-300% Wind damage to a foe. Inflict 25% ATK Down.' +
				'\nCD: 6 turns, Duration: 180 sec.',
	'ghandagoza' : '**Infernal Skybreaker**: Deal 500% Fire damage to all foes. Inflict Solar Crown on all foes.' +
					'\nCD: 6 turns, Duration: 2 turns.',
	'grea' : '**Mana Agni**: 400%-500% Fire damage to a foe. Inflict Dracoforce.' +
				'\nCD: 6 turns, Duration: 4 turns.',
	'halle' : '**Can\'t Catch Me!**: Gain Other Self. *(Uses 25% of charge bar)*' +
				'\nCD: 8 turns, Duration: 2 turns.',
	'heles' : '**Quick Raid**: 200%-250% Fire damage to a foe. Gain 10% C.A. DMG Up (Stackable) (Max: 40%).' +
				'\nCD: 3 turns.',
	'ilsa' : '**Sacred Hell**: Plain damage to a foe based on 5% of its current HP. ' +
				'Inflict Petrified. Reload all Bullets (Can only use when Bullets are at 0).' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'izmir' : '**Niflheim**: Gain Icy Blade and 8% ATK Up (Stackable) (Max: 40%).' +
				'\nCD: 2 turns.',
	'jeanne' : '**Reversal**: Inflict 25% DEF Down and 20% ATK Down on a foe.' +
				'\nCD: 5 turns, Duration: 180 sec.',
	'jeanne-dark' : '**Anti-Reversal**: Inflict 30% DEF Down on a foe. Self-inflict Impurity.' +
					'\nCD: 5 turns, Duration: 180 sec/3 turns.',
	'juliet' : '**Fulmine Bianco**: All allies gain 20% Light ATK Up and 20% Dark Cut.' +
				'\nUse 1 Spirit Shroud: Also inflict 20% Light DEF Down on a foe.' +
				'\nCD: 6 turns, Duration: 5 turns/180 sec.',
	'katapillar' : '**Full Barrage**: 16 hits of 50% Water damage to random foes.' +
					'\nCD: 8 turns.',
	'korwa' : '**Noir et Blanc**: All allies gain Esprit, increasing ATK and debuff success rate. (Costs 2 Fil)' +
				'\nCD: 2 turns, Duration: 4 turns.',
	'ladygrey' : '**Dark Energy**: 350%-450% Dark damage to a foe and inflict 10% Dark DEF Down.' +
				'\nCD: 6 turns.',
	'lancelot' : '**Blade Impulse**: 400%-500% Water damage to a foe.' +
				'\nCD: 5 turns.',
	'lancelot-wind' : '**Blade Impulse**: ' +
						'\nCD: 5 turns.',
	'lennah' : '**Mistral Bouquet**: 200%-250% Wind damage to all foes. Inflict Poisoned.' +
				'\nCD: 7 turns, Duration: 180 sec.',
	'lilele' : '**I Miss You So Much...**: All male allies gain 35% ATK Up and 35% DEF Up.' +
				'\nAll female allies gain 20% ATK Up and 20% DEF Up.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'lily' : '**Silverfrost Barrier**: All allies gain 70% Fire Cut.' +
				'\nCD: 8 turns, Duration: 2 turns.',
	'lunalu' : '**Facsimile**: ' +
				'\nCD: 8 turns, Duration: 3 turns.',
	'maids' : '**The Maid Variable**: 350% Light damage to a foe. Switch Dorothy and Claudia. Gain Servant\'s Oath.' +
				'\nCD: 5 turns, Duration: 4 turns.',
	'magisa' : '**Eruption**: 200%-250% Fire damage to all foes. Inflict 25% ATK Down and 25% DEF Down.' +
				'\nCD: 6 turns, Duration: 180 sec.',
	'marquiares' : '**Unholy Warcry**: Gain Supernal Sync, preventing attacks or skill use this turn. ' +
					'Next turn, gain Supernal Explosion, 10 MP, and Hostility Up.' +
					'\nCD: 7 turns, Duration: 1 turn.',
	'melissabelle' : '**Continuum**: Gain C.A. Instant Standby and gain 30% / 30% Critical Hit Rate Up for 2 turns. *(Uses 20% of max HP)*' +
						'\nCD: 11 turns.',
	'melleau' : '**Raging Flow**: Gain 40% ATK Up and Veil.' +
				'\nCD: 5 turns, Duration: 3 turns.',
	'metera' : '**Bowstring Bow**: 300% Wind damage to a foe and inflict Charmed.' +
				'\nCD: 5 turns, Duration: 180 sec.',
	'metera-fire' : '**Starry Sky**: 5-hit 90% Fire damage to random foes. Gain Aetherial Seal.' +
					'\nCD: 6 turns.',
	'narmaya' : '**Butterfly Effect**: Switch between Dawnfly stance and Freeflutter stance. ' +
				'Gain Butterfly Effect, adding 70% bonus superior elemental damage to normal attacks for 4 turns. ' +
				'Gain 5% ATK Up (Stackable) (Max: 50%) and 7% DEF Down (Stackable) (Max: 35%). ' +
				'Self-inflict Skill Sealed for 1 turn.' +
				'\nCD: 3 turns, Duration: 4 turns (Butterfly), 1 turn (Skill Seal).',
	'nemone' : '**La Nina**: 500% Earth damage to a foe and inflict 10% DEF Down (Stackable) (Max: 30%). ' +
				'Gain 1 stack of Nemone.' +
				'\nCD: 5 turns.',
	'nicholas' : '**Bio Blade**: 4-hit damage to random foes. Inflict ATK Down (Stackable) on all foes.' +
					'\nCD: 5 turns, Duration: 180 sec.',
	'percival' : '**Tzaraisen**: 400%-500% Fire damage to a foe. Drain 50% of damage dealt up to 800 HP.' +
					'\nCD: 5 turns.',
	'petra' : '**Illusion**: Grant one ally  Mirror Image for up to 2 hits.' +
				'\nCD: 7 turns.',
	'razia' : '**Absolute Gerechtigkeit**: Gain Substitute and Counters on DMG for up 3 hits and 80% DEF Up. *(Uses 30% of charge bar)*' +
				'\nCD: 6 turns, Duration: 2 turns.',
	'robomi' : '**Repulsor Storm**: Light damage to a foe. Inflict 10% DEF Down (Stackable) (Max: 20%). ' +
				'Gain Maximum Output *(Uses 1 Ammo / Can\'t be used once Ammo runs out)*' +
				'\nCD: 1 turn, Duration: 1 turn/180 sec.',
	'romeo' : '**Lama Acuta**: 300%-400% Water damage to a foe.' +
				'\nNormal mode: Use 1 Spirit to also inflict 20% Water DEF Down.' +
				'\nAmplified mode: Use 2 Spirit to activate this skill twice and also inflict 20% Water DEF Down' +
				'\nCD: 6 turns, Duration: 180 sec.',
	'rosamia' : '**Immovable Talisman III**: Gain Unchallenged for 2 turns. ' +
				'Self-inflict Curse of the Mask, preventing Rosamia from being healed for 4 turns. *(Uses 25% of max HP)*' +
				'\nCD: 5 turns, Duration: 2 turns/4 turns.',
	'sandalphon' : '**Alone in Heaven**: Gain 50% DA Up, 10% TA Up, 15% DEF Up and Counters on DMG for up to 5 hits.' +
					'\nCD: 7 turns, Duration: 4 turns.',
	'sara' : '**Maestitia**: Gain Substitute.' +
				'\nCD: 4 turns, Duration: 1 turn.',
	'sarunan' : '**Mad Veil**: All allies gain 70% Dark Cut and 50% Light ATK Up.' +
				'\nCD: 8 turns, Duration: 2 turns.',
	'sarunan-dark' : '**Sleepless Dream**: 200% Dark damage to a foe. All allies gain Refresh. ' +
						'Sarunan self-inflicts Spell Sacrifice debuff, dealing 1000 damage to himself for each stack of Spell Sacrifice buff.' +
						'\nCD: 7 turns, Duration: 3 turns.',
	'scathacha' : '**Deirdre\'s Aura**: All allies gain 30% Wind ATK Up. Remove 1 debuff from all allies.' +
					'\nCD: 5 turns, Duration: 5 turns.',
	'selfira' : '**Diminuendo**: 200%-300% Wind damage to all foes. Inflict 25% DEF Down.' +
				'\nAdditional effect from 2nd cast: Also inflict 15% Earth ATK Down.' +
				'\nFrom 3rd cast: Also inflict 10% Wind DEF Down' +
				'\nCD: 5 turns, Duration: 180 sec.',
	'seruel' : '**Quick Raid**: 300%-400% Light damage to a foe. Gain 10% Skill DMG Cap Up (Stackable) (Max: 40%).' +
				'\nCD: 3 turns.',
	'siegfried' : '**Uwe**: 300%-400% Earth damage to a foe. All allies gain 20% Water Cut.' +
					'\nCD: 6 turns, Duration: 3 turns.',
	'silva' : '**Eagle Eye**: Gain C.A. DMG Up, 30% Chain Burst DMG Boosted, and 200% C.A. DMG Cap Up. Self-inflict 20% DEF Down.' +
				'\nCD: 7 turns, Duration: 1 turn.',
	'silva-light' : '**Invisible Hawk**: Gain Scurry, 70% / 75% Critical Hit Rate Up, 40% C.A. DMG Cap Up, and 20% Uplifted. ' +
					'Self-inflict 50% DEF Down.' +
					'\nCD: 9 turns, Duration: 5 turns.',
	'societte' : '**First Dance: Kagura**: Restore an ally\'s HP (Healing cap: 2000). Grants Revitalize and 10% Bonus Water DMG.' +
					'\nCD: 4 turns, Duration: 3 turns.',
	'societte-fire' : '**First Dance: Shimotsuki**: Gain Counters on Dodge up to 2 hits.' +
						'\nCD: 4 turns, Duration: 2 turns.',
	'sophia' : '**Medicament**: Heal 15% of one ally\'s HP. Completely heal ally if their HP bar is red.' +
				'\nCD: 6 turns.',
	'soriz' : '**Tenacious Will**: 6-hit Earth damage to a foe (Damage cap: ~80,000 per hit). Restore caster\'s HP (Healing cap: 5000). ' +
				'(5% Boost to healing amount upon each cast [Max: 25%], Healing cap unaffected)' +
				'\nCD: 5 turns.',
	'therese' : '**Certamen**: Gain Duel (Boost to double attack rate and hostility / Sharp boost to dodge rate).' +
				'\nCD: 9 turns, Duration: 3 turns.',
	'tiamat' : '**Winds of Blessing**: All allies gain 25% DEF Up, 25% ATK Up, and 25% Charge Bar Sped Up. *(Uses 10% of charge bar)*' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'tsubasa' : '**Throwdown Town**: 400% Fire damage to a foe. Inflict Petrified.' +
				'\nCD: 6 turns, Duration: 3 turns.',
	'vane' : '**Arm Destruction II**: 400% Water damage to a foe. Inflict 15% ATK Down and 10% Fire ATK Down.' +
				'\nCD: 6 turns, Duration: 180 sec.',
	'vania' : '**Testament**: 350%-500% Dark damage to a foe and remove 1 buff.' +
				'\nCD: 7 turns.',
	'vaseraga' : '**Great Scythe Grynoth**: 250%-300% Dark damage to all foes. Gain 20% Charge Boost.' +
					'\nCD: 7 turns.',
	'vaseraga-earth' : '**Soul Forge**: Gain Soul Forge, sharply boosting stats. *(Uses up 100% of charge bar)*' +
						'\nCD: 10 turns, Duration: 8 turns.',
	'veight' : '**Inner Fire**: 6-hit 100% Dark damage to random foes. Inflict DA Down and TA Down on all foes.' +
				'\nCD: 6 turns.',
	'vira' : '**Layer Rise II**: Inflict 15% ATK Down and 15% DEF Down on a foe. ' +
				'Gain 15% ATK Up and 15% DEF Up.' +
				'\nCD: 7 turns, Duration: 3 turns/180 sec.',
	'wulf' : '**Herz aus Eisen**: Gain Counters on Dodge/DMG for up to 5 hits and DMG Boosted. *(Uses 30% of charge bar)*' +
				'\nCD: 6 turns, Duration: 4 turns.',
	'yggdrasil' : '**Blathnat Norn**: All allies gain 25% ATK Up, 25% DEF Up, and 25% Charge Bar Sped Up. *(Uses 10% of charge bar)*' +
					'\nCD: 7 turns, Duration: 3 turns.',
	'yngwie' : '**Jumpstart My Heart**: Absorb up to 50% charge bar from all allies and transfer to caster\'s charge bar. Gain 10% Uplifted.' +
				'\nCD: 7 turns, Duration: 5 turns.',
	'yodarha' : '**Awakening**: 400%-500% Water damage to a foe. Activates twice if Yodarha has Triple Shrouded.' +
				'\nCD: 5 turns.',
	'yuel' : '**Eye of the Sparrow**: 400%-500% Fire damage to a foe. Gain 75% DA Up.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'yuel-water' : '**Starlit Sky**: All allies gain 30% DA Up, 15% TA Up, and 20% Debuff Success Boosted.' +
					'\nCD: 6 turns, Duration: 3 turns.',
	'yuisis' : '**No Surrender / No Regrets**:' +
				'\nStarslayer mode: Change to Heavensbane mode.' +
				'\nHeavensbane mode: Change to Starslayer mode.' +
				'\nCD: 4 turns.',
	'zahl' : '**Sunlight Radium**: All allies gain Refresh up to 300 HP and a 1000-damage Shield.' +
				'\nCD: 15 turns, Duration: 10 turns.',
	'zeta' : '**Spear of Arvess**: 300%-350% Fire damage to a foe. Inflict Arvess Fermare.' +
				'\nCD: 5 turns, Duration: 4 turns.',
	'zeta-dark' : '**Shining Star**: 350-400% Dark damage to a foe. All allies gain 20% Light DMG Lowered.' +
					'\nCD: 6 turns, Duration: 3 turns.',
	'zooey' : '**Convergence**: 2-hit Light damage to random foes. Gain 100% DA Up, 25% TA Up, and Hostility Up.' +
				'\nCD: 5 turns, Duration: 3 turns.',
	
	'alexiel' : '**Uncrossable Realm**: All allies gain 70% DMG Cut.' +
				'\nCD: 6 turns, Duration: 1 turn.',
	'anila' : '**All of Creation**: 6-hit, 200% all-elemental damage to all foes. Gain 40% Extra Superior Element DMG. Also inflicts all elemental ATK Down and RES Down.' +
				'\nCD: 6 turns, Duration: 3 turns/180 sec.',
	'andira' : '**Unborn, Undying**: Restore 100% of all allies\' HP.Restore all parties\' HP (Healing cap: 1000). ' +
				'Self-inflict 25% DEF Down and 25% Debuff Res. Down on all allies.' +
				'\nCD: 12 turns, Duration: 2 turns.',
	'blackknight' : '**Quadspell**: 150%-250% Fire, Water, Earth and Wind damage to all foes. Inflict Burned, Delay and remove 1 buff.' +
					'\nCD: 7 turns, Duration: 180 sec.',
	'cain' : '**Freewheeling Scheme**: Inflict 25% ATK Down, 25% DEF Down, and Secret Plot on a foe.' +
				'\nCD: 7 turns, Duration: 180 sec.',
	'drang' : '**Fair Trick**: 500% Water damage to all foes and inflict 20% Debuff Res. Down. ' +
				'Heal 10% of all allies\' max HP (Healing cap: 1000 HP).' +
				'\nCD: 5 turns, Duration: 180 sec.',
	'eugen' : '**Intercept II**: Gain Counters on Dodge up to 3 hits and Hostility Up. *(Uses 40% of charge bar)*' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'europa' : '**Mana Blast**: 3-hit Water damage to random foes. Restore 30% of all allies\' HP (Healing cap: 2000) and remove 1 debuff.' +
				'\nCD: 6 turns.',
	'io' : '**Flowery Seven**: 7-hit superior element damage to random foes. Damage cap increases based on Mystic Vortex lvl.' +
			'\nCD: 6 turns.',
	'katalina' : '**Enchanted Lands**: 300%-400% Water damage to a foe. Gain Guaranteed TA.' +
					'\nCD: 6 turns, Duration: 1 turn.',
	'lecia' : '**Sonic Boom**: 300%-1600% Wind damage to a foe. Boost to damage based on how low Lecia\'s HP is. Gain Jammed.' +
				'\nCD: 8 turns, Duration: 3 turns.',
	'lucio' : '**Revelation**: All allies gain a 1300-damage Shield, 25% ATK Up and 25% DEF Up.' +
				'\nCD: 8 turns, Duration: 3 turns.',
	'mahira' : '**Spirit Drums**: All allies gain buff effects (Uses all Drum Beat).' +
				'\nCD: 7 turns, Duration: 5 turns.',
	'olivia' : '**Sterling Sea**: 300% Dark damage to all foes. Inflict DA Down and Twilight Terror.' +
				'\nCD: 8 turns, Duration: 180 sec/2 turns.',
	'orchid' : '**Puppet Strings**: Gain Puppet Stringsand a shield effect worth 40% of caster\'s max HP (Max: 8000). ' +
				'Switches to Tangled Strings for 2.5 turns when shield effect ends.' +
				'\nCD: 8 turns.',
	'pholia' : '**White Veil**: Gain White Veil and a shield effect worth 40% of caster\'s max HP (Max: 8000). '+
				'When shield effect ends: Self-inflict Unveiled Sin for 2 turns' +
				'\nCD: 8 turns.',
	'rackam' : '**Spitfire**: 200%-250% Fire damage to a foe. Gain Spitfire (Max: 3). *(Uses 10% of charge bar)*' +
				'\nCD: 2 turns, Duration: 4 turns.',
	'rosetta' : '**Elegant Rose Barrier**: Activate Rose Barrier. Rose Barrier gains 1 stack when Rosetta is damaged (Max: 5 stacks). '+
				'Drains charge bar based on stack level for each turn Rose Barrier is active. Recast skill to release Rose Barrier. When released, all allies gain buffs based on the number of stacks.' +
				'\nCD: 1 turn, Duration: 2 turns.',
	'sturm' : '**Blitzkrieg**: 400%-500% Fire damage to a foe and inflict Burned. ~10% increased damage cap against a Burned enemy.' +
				'\nCD: 4 turns, Duration: 180 sec.',
	'vajra' : '**Okami**: 300% Water damage to all foes. Inflict 10% Debuff Res. Down (Stack) (Max: 30%).' +
				'\nCD: 6 turns, Duration: 180 sec.',
	'vira-grand' : '**Aegis Merge**: Remove all debuffs from Vira. Gain Aegis Merge. (Uses up 1 Bit every turn. Ends upon using up all Bit stacks / Max: 3 turns)' +
					'\nCD: 7 turns, Duration: 3 turns.',
	'zooey-grand' : '**Resolution**: Superior element damage to a foe. Damage increases based on how low Zooey\'s HP is. Gain Jammed.' +
					'\nCD: 8 turns, Duration: 3 turns.',
	
	'arulumaya-c' : '**Let it Snow**: 200%-250% Water damage to a foe and inflict 25% Water DEF Down. *(Uses 10% of charge bar)*' +
					'\nCD: 5 turns, Duration: 180 sec.',
	'beatrix-ss' : '**Nayde Sinine**: Nayde Sinine: Gain Nayde Sinine, boosting double attack, triple attack, and hostility, and lowering DEF. Skill changes to Nayde Kollane.' +
					'**Nayde Kollane**: Nayde Kollane: Replace Nayde Sinine with Nayde Kollane. Skill changes to Nayde Valge.' +
					'**Nayde Valge**: Nayde Valge: Toggle off Nayde Kollane. Skill changes to Nayde Sinine and cooldown set to 5 turns.' +
					'\nCD: 0 turns/5 turns, Duration: Until toggled.',
	'cagliostro-h' : '**Collapse**: 200%-300% Dark damage to all foes. Inflict 10% DEF Down (Stackable) (Max: 30%).' +
						'\nCD: 5 turns, Duration: 180 sec.',
	'charlotta-h' : '**Plasmic Thrust**: 300%-400% Light damage to a foe and inflict 20% ATK Down.' +
					'\nCD: 6 turns, Duration: 180 sec.',
	'clarisse-c' : '**Atomic Annihilation**: ' +
					'\nCD: 2 turns, Duration: 180 sec.',
	'danua-h' : '**Frightening Puppet**: Fire damage to all foes and inflict Petrified.' +
				'\nCD: 6 turns, Duration: 3 turns.',
	'danua-ss' : '**Envy Doll**: All allies gain a 2400-damage Shield.' +
					'\nCD: 7 turns, Duration: 3 turns.',
	'delafille-ss' : '**Prism Pillar**: 350% Light damage to all foes. Inflict Blinded.' +
						'\nCD: 7 turns, Duration: 180 sec.',
	'diantha-ss' : '**Summer Encore**: All allies gain 100% TA Up.' +
					'\nCD: 7 turns, Duration: 1 turn.',
	'eustace-h' : '**Flamek Thunder**: 250%-350% Earth damage to all foes. Inflict Paralyzed. Gain 2 Loaded stacks.' +
					'\nCD: 6 turns, Duration: 2 turns.',
	'grea-ss' : '**Mana Agni**: 350%-450% Water damage to a foe. Inflict Dracoforce.' +
				'\nCD: 6 turns, Duration: 4 turns.',
	'heles-ss' : '**Carry On**: All allies gain 20% Charge Boost, 30% Chain Burst DMG Boosted, and 20% Chain Burst DMG Cap Boosted.' +
					'\nCD: 7 turns, Duration: 1 turn.',
	'ilsa-ss' : '**Shadow Eaters**: 300% Fire damage to all foes. Inflict Accuracy Lowered' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'io-ss' : '**Red Wind**: 350%-400% Fire damage to all foes. All allies gain 30% Wind Cut.' +
				'\nCD: 7 turns, Duration: 3 turns.',
	'izmir-ss' : '**Jotunheimr**: Gain Icy Blade (Max: 2 / 10% boost to ATK per stack of Icy Blade.)' +
					'\nCD: 2 turns.',
	'jeanne-ss' : '**Reversal Tide**: Inflict 25% DEF Down and 15% Wind DEF Down on a foe.' +
					'\nCD: 5 turns, Duration: 180 sec.',
	'korwa-ss' : '**Ligne d\'Ete**: Grant one Wind ally Coquetterie, boosting ATK and double attack rate. (Costs 1 Fil)' +
					'\nCD: 2 turns, Duration: 4 turns.',
	'ladygrey-h' : '**Night\'s Grace**: All allies gain Drain (Healing cap: 500), Death\'s Grace, and 20% Charge Boost.' +
					'\nCD: 7 turns, Duration: 5 turns.',
	'mary-c' : '**Snowdrop**: Inflict 3 Bounty stacks and 250%-350% Light damage to all foes.' +
				'\nCD: 5 turns.',
	'medusa-valentine' : '**Sparkling Eyes**: Inflict Stared Stiff and 25% Earth DEF Down on a foe. *(Uses 20% of charge bar)*' +
							'\nCD: 8 turns, Duration: 2-3 turns/180 sec.',
	'naoise-ss' : '**Ritter Shield II**: All allies gain 50% DMG Cut and 20% Dark Cut.' +
					'\nCD: 6 turns, Duration: 1 turn.',
	'narmaya-ss' : '**Butterfly Effect**: Gain Butterfly Effect. Self-inflict 20% DEF Down. Skill rank increases with each use (Max Rank: 3).' +
					'\nCD: 3 turns, Duration: 3-5 turns.',
	'percival-ss' : '**Tzaraisen**: 400%-500% Fire damage to a foe.' +
					'\nCD: 5 turns.',
	'rosetta-c' : '**Nemesis**: Dark damage to a foe and inflict Poisoned. Damage applies twice if enemy is Poisoned.' +
					'\nCD: 6 turns, Duration: 180 sec.',
	'rosetta-ss' : '**Blue Rose Barrier**: Gain Blue Rose Barrier and a shield effect worth 70% of caster\'s max HP (Max: 4000). ' +
					'(When shield effect ends: Blue Rose Barrier ends)' +
					'\nCD: 7 turns.',
	'siegfried-ss' : '**Delivrance**: 300%-400% Wind damage to a foe and inflict 20% Wind DEF Down.' +
						'\nCD: 6 turns, Duration: 180 sec.',
	'vira-ss' : '**Fascinate**: Inflict Charmed on a foe and remove 1 buff.' +
				'\nCD: 8 turns, Duration: 180 sec.',
	'zeta-ss' : '**Rhymes**: Gain 40% ATK Up. Inflict 10% Debuff Res. Down and Arvess Fermare on a foe.' +
				'\nCD: 6 turns, Duration: 5 turns/180 sec/4 turns.',
	
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

module.exports = skill1;