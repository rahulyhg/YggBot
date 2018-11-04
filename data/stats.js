/* Contains dictionary that links keys to a list containing:
	 - character stats (at level 100)
	 - character element
	 - character race, proficiency and typing
*/

//deprecated
const charEle = {
	'fire' : 'https://i.imgur.com/yA9CtBY.png',
	'water' : 'https://i.imgur.com/W6jeN82.png',
	'earth' : 'https://i.imgur.com/ubyVuSI.png',
	'wind' : 'https://i.imgur.com/9KPha9N.png',
	'light' : 'https://i.imgur.com/FgvZSzZ.png',
	'dark' : 'https://i.imgur.com/lR6Ul0P.png'
}

//deprecated
const charRace = {
	'human' : 'https://i.imgur.com/keswd5z.png',
	'draph' : 'https://i.imgur.com/nOa1pNw.png',
	'erune' : 'https://i.imgur.com/OXcrmTo.png',
	'harvin' : 'https://i.imgur.com/LNDUwnh.png',
	'unknown' : 'https://i.imgur.com/IE73aLh.png',
	'primal' : 'https://i.imgur.com/lo3khAy.png',
}

//deprecated
const charProf = {
	'spear' : 'https://i.imgur.com/S5bbAFb.png',
	'bow' : 'https://i.imgur.com/rXoTFnL.png',
	'axe' : 'https://i.imgur.com/5xHO5ck.png',
	'dagger' : 'https://i.imgur.com/DjMebG3.png',
	'staff' : 'https://i.imgur.com/eoqEvmd.png',
	'melee' : 'https://i.imgur.com/KNS3aFS.png',
	'Sabre' : 'https://i.imgur.com/JTg325I.png',
	'katana' : 'https://i.imgur.com/Ssd9EqE.png',
	'harp' : 'https://i.imgur.com/YcUUwXO.png',
	'gun' : 'https://i.imgur.com/n1bkH2W.png',
}

//deprecated
const charStyle = {
	'attack' : 'https://i.imgur.com/n7LVP5T.png',
	'defense' : 'https://i.imgur.com/cVX83Zb.png',
	'special' : 'https://i.imgur.com/2X5zEU3.png',
	'balanced' : 'https://i.imgur.com/vRyaDMZ.png',
	'heal' : 'https://i.imgur.com/95wA41R.png'
}

//[hp, atk, element, race, style, prof1, prof2]
const stats = {
	'agielba' : ['2110', '7920', 'Fire', 'Draph', 'Defense', 'Sabre', ''],
	'albert' : ['1280', '4800', 'Light', 'Human', 'Attack', 'Sabre', ''],
	'aletheia' : ['1360', '9200', 'Earth', 'Human', 'Attack', 'Sabre', 'Katana'],
	'aliza' : ['1960', '9830', 'Fire', 'Draph', 'Attack', 'Melee', ''],
	'altair' : ['2200', '9500', 'Water', 'Human', 'Balanced', 'Staff', ''],
	'amira' : ['1740', '10270', 'Light', 'Unknown', 'Special', 'Melee', ''],
	'anne' : ['1615', '7925', 'Water', 'Human', 'Defense', 'Spear', ''],
	'anthuria' : ['1150', '7970', 'Fire', 'Erune', 'Special', 'Melee', ''],
	'aoidos' : ['1920', '8400', 'Fire', 'Human', 'Special', 'Harp', 'Sabre'],
	'arriet' : ['1300', '8750', 'Wind', 'Human', 'Special', 'Harp', ''],
	'arulumaya' : ['1630', '9980', 'Earth', 'Harvin', 'Special', 'Staff', ''],
	'ayer' : ['1440', '8800', 'Earth', 'Human', 'Special', 'Melee', ''],
	'azazel' : ['1380', '9990', 'Dark', 'Primal', 'Attack', 'Dagger', 'Melee'],
	'baotorda' : ['2300', '7420', 'Light', 'Draph', 'Defense', 'Sabre', ''],
	'beatrix' : ['1300', '9850', 'Dark', 'Human', 'Special', 'Sabre', ''],
	'birdman' : ['1520', '12000', 'Wind', 'Human', 'Attack', 'Spear', ''],
	'cagliostro' : ['2230', '8310', 'Earth', 'Human', 'Heal', 'Staff', ''],
	'cagliostro-dark' : ['1805', '6370', 'Dark', 'Human', 'Heal', 'Staff', ''],
	'carmelina' : ['1350', '9240', 'Wind', 'Draph', 'Special', 'Dagger', ''],
	'catherine' : ['1430', '8670', 'Earth', 'Erune', 'Special', 'Gun', ''],
	'cerberus' : ['1333', '7333', 'Dark', 'Primal', 'Special', 'Melee', ''],
	'charlotta' : ['1990', '10400', 'Water', 'Harvin', 'Balanced', 'Sabre', ''],
	'chatnoir' : ['1300', '8700', 'Water', 'Human', 'Special', 'Staff', 'Dagger'],
	'clarisse' : ['1380', '8480', 'Fire', 'Human', 'Special', 'Staff', ''],
	'clarisse-light' : ['1300', '9500', 'Light', 'Human', 'Attack', 'Staff', ''],
	'cucouroux' : ['1500', '8500', 'Water', 'Human', 'Balanced', 'Gun', ''],
	'delafille' : ['1930', '6400', 'Light', 'Human', 'Heal', 'Sabre', ''],
	'delafille-earth' : ['1910', '5800', 'Earth', 'Human', 'Heal', 'Sabre', ''],
	'eustace' : ['1100', '8900', 'Earth', 'Erune', 'Attack', 'Gun', ''],
	'feena' : ['1320', '9400', 'Wind', 'Human', 'Attack', 'Bow', ''],
	'ferry' : ['1420', '7450', 'Light', 'Erune', 'Balanced', 'Dagger', ''],
	'forte' : ['1340', '10130', 'Dark', 'Draph', 'Attack', 'Spear', ''],
	'freezie' : ['1080', '8120', 'Dark', 'Erune', 'Special', 'Gun', ''],
	'gawain' : ['2470', '8550', 'Wind', 'Human', 'Defense', 'Axe', ''],
	'ghandagoza' : ['1610', '11970', 'Fire', 'Draph', 'Attack', 'Melee', ''],
	'grea' : ['1150', '10100', 'Fire', 'Unknown', 'Attack', 'Melee', ''],
	'halle' : ['1860', '11970', 'Earth', 'Draph', 'Attack', 'Axe', ''],
	'heles' : ['1150', '9180', 'Fire', 'Erune', 'Attack', 'Spear', ''],
	'ilsa' : ['1200', '8500', 'Earth', 'Erune', 'Attack', 'Gun', 'Bow'],
	'izmir' : ['1370', '9980', 'Water', 'Draph', 'Attack', 'Sabre', ''],
	'jeanne' : ['1840', '9850', 'Light', 'Human', 'Balanced', 'Spear', ''],
	'jeanne-dark' : ['1200', '9800', 'Dark', 'Human', 'Attack', 'Sabre', ''],
	'juliet' : ['1920', '7200', 'Light', 'Human', 'Defense', 'Spear', ''],
	'katapillar' : ['1300', '8700', 'Water', 'Unknown', 'Special', 'Melee', 'Gun'],
	'korwa' : ['1740', '7000', 'Wind', 'Erune', 'Special', 'Staff', ''],
	'ladygrey' : ['1760', '10680', 'Dark', 'Human', 'Special', 'Spear', 'Melee'],
	'lancelot' : ['1570', '11430', 'Water', 'Human', 'Attack', 'Sabre', 'Dagger'],
	'lancelot-wind' : ['1350', '9400', 'Wind', 'Human', 'Attack', 'Sabre', 'Dagger'],
	'lennah' : ['2700', '8110', 'Wind', 'Human', 'Heal', 'Staff', ''],
	'lilele' : ['1720', '8200', 'Water', 'Harvin', 'Special', 'Harp', ''],
	'lily' : ['1580', '6500', 'Water', 'Unknown', 'Heal', 'Staff', ''],
	'lunalu' : ['1160', '9240', 'Dark', 'Harvin', 'Special', 'Staff', ''],
	'maids' : ['1400', '9300', 'Light', 'Human', 'Special', 'Gun', 'Melee'],
	'magisa' : ['1520', '10450', 'Fire', 'Human', 'Special', 'Staff', ''],
	'marquiares' : ['1150', '9290', 'Dark', 'Harvin', 'Special', 'Staff', ''],
	'melissabelle' : ['1060', '10730', 'Wind', 'Harvin', 'Attack', 'Sabre', ''],
	'melleau' : ['1160', '9180', 'Earth', 'Erune', 'Attack', 'Spear', 'Axe'],
	'metera' : ['1450', '7750', 'Wind', 'Erune', 'Balanced', 'Bow', ''],
	'metera-fire' : ['1200', '8940', 'Fire', 'Erune', 'Attack', 'Bow', ''],
	'narmaya' : ['1330', '12200', 'Dark', 'Draph', 'Attack', 'Katana', ''],
	'nemone' : ['1120', '9340', 'Earth', 'Erune', 'Attack', 'Axe', 'Spear'],
	'nicholas' : ['1850', '7550', 'Dark', 'Human', 'Defense', 'Katana', ''],
	'percival' : ['1830', '11430', 'Fire', 'Human', 'Attack', 'Sabre', ''],
	'petra' : ['1650', '7680', 'Wind', 'Human', 'Balanced', 'Staff', ''],
	'razia' : ['2530', '7100', 'Earth', 'Draph', 'Defense', 'Gun', 'Spear'],
	'robomi' : ['1260', '9700', 'Light', 'Unknown', 'Attack', 'Gun', ''],
	'romeo' : ['1500', '8500', 'Water', 'Human', 'Balanced', 'Sabre', ''],
	'rosamia' : ['1600', '8000', 'Light', 'Human', 'Balanced', 'Sabre', ''],
	'sandalphon' : ['1660', '7700', 'Light', 'Primal', 'Balanced', 'Sabre', 'Katana'],
	'sara' : ['2440', '7200', 'Earth', 'Human', 'Defense', 'Melee', ''],
	'sarunan' : ['1780', '8360', 'Light', 'Erune', 'Special', 'Staff', ''],
	'sarunan-dark' : ['1340', '8860', 'Dark', 'Erune', 'Special', 'Staff', ''],
	'scathacha' : ['1900', '9040', 'Wind', 'Erune', 'Attack', 'Melee', ''],
	'selfira' : ['1160', '7880', 'Wind', 'Erune', 'Special', 'Harp', ''],
	'seruel' : ['1545', '10800', 'Light', 'Erune', 'Attack', 'Sabre', ''],
	'siegfried' : ['1610', '10430', 'Earth', 'Human', 'Special', 'Sabre', 'Katana'],
	'silva' : ['1802', '15590', 'Water', 'Human', 'Attack', 'Gun', ''],
	'silva-light' : ['1240', '9800', 'Light', 'Human', 'Attack', 'Gun', ''],
	'societte' : ['1400', '7920', 'Water', 'Erune', 'Special', 'Melee', ''],
	'societte-fire' : ['1730', '6470', 'Fire', 'Erune', 'Defense', 'Melee', ''],
	'sophia' : ['2160', '6160', 'Light', 'Human', 'Heal', 'Staff', ''],
	'soriz' : ['1300', '10200', 'Earth', 'Human', 'Attack', 'Melee', ''],
	'therese' : ['1240', '9800', 'Fire', 'Human', 'Attack', 'Sabre', ''],
	'tiamat' : ['1700', '7300', 'Wind', 'Primal', 'Special', 'Melee', ''],
	'tsubasa' : ['1100', '10500', 'Fire', 'Human', 'Attack', 'Melee', ''],
	'vane' : ['2180', '6960', 'Water', 'Human', 'Defense', 'Spear', 'Axe'],
	'vania' : ['1170', '9710', 'Dark', 'Unknown', 'Special', 'Staff', ''],
	'vaseraga' : ['1890', '13170', 'Dark', 'Draph', 'Attack', 'Axe', ''],
	'vaseraga-earth' : ['1340', '10130', 'Earth', 'Draph', 'Attack', 'Axe', ''],
	'veight' : ['1300', '10050', 'Dark', 'Unknown', 'Attack', 'Dagger', ''],
	'vira' : ['1520', '10640', 'Dark', 'Human', 'Attack', 'Sabre', ''],
	'wulf' : ['1480', '8600', 'Dark', 'Unknown', 'Attack', 'Melee', 'Gun'],
	'yggdrasil' : ['1900', '6300', 'Earth', 'Primal', 'Special', 'Melee', ''],
	'yngwie' : ['2570', '9260', 'Water', 'Human', 'Defense', 'Melee', 'Gun'],
	'yodarha' : ['1150', '10210', 'Water', 'Harvin', 'Attack', 'Sabre', 'Katana'],
	'yuel' : ['2270', '8910', 'Fire', 'Erune', 'Balanced', 'Sabre', 'Katana'],
	'yuel-water' : ['1140', '8500', 'Water', 'Erune', 'Special', 'Sabre', 'Katana'],
	'yuisis' : ['1300', '8000', 'Wind', 'Erune', 'Balanced', 'Sabre', 'Katana'],
	'zahl' : ['1510', '7560', 'Fire', 'Harvin', 'Special', 'Staff', ''],
	'zeta' : ['1280', '10200', 'Fire', 'Human', 'Attack', 'Spear', ''],
	'zeta-dark' : ['1020', '10400', 'Dark', 'Human', 'Attack', 'Spear', ''],
	'zooey' : ['1460', '8700', 'Light', 'Primal', 'Balanced', 'Gun', ''],
	
	'alexiel' : ['1960', '7000', 'Earth', 'Primal', 'Defense', 'Sabre', 'Katana'],
	'anila' : ['2015', '10945', 'Fire', 'Draph', 'Balanced', 'Spear', 'Melee'],
	'andira' : ['1670', '7920', 'Wind', 'Erune', 'Balanced', 'Staff', ''],
	'blackknight' : ['1500', '10000', 'Dark', 'Human', 'Attack', 'Sabre', 'Gun'],
	'cain' : ['1250', '8950', 'Earth', 'Human', 'Special', 'Katana', ''],
	'drang' : ['1250', '7510', 'Water', 'Erune', 'Special', 'Staff', ''],
	'eugen' : ['1400', '9900', 'Earth', 'Human', 'Attack', 'Gun', ''],
	'europa' : ['2000', '6800', 'Water', 'Primal', 'Heal', 'Staff', ''],
	'io' : ['1770', '7700', 'Light', 'Human', 'Balanced', 'Staff', ''],
	'katalina' : ['1980', '8100', 'Water', 'Human', 'Balanced', 'Sabre', ''],
	'lecia' : ['1900', '8500', 'Wind', 'Human', 'Balanced', 'Sabre', ''],
	'lucio' : ['1660', '7700', 'Light', 'Primal', 'Balanced', 'Sabre', 'Katana'],
	'mahira' : ['1480', '9370', 'Earth', 'Harvin', 'Special', 'Harp', ''],
	'olivia' : ['1480', '7800', 'Dark', 'Primal', 'Special', 'Sabre', ''],
	'pholia' : ['1166', '7899', 'Water', 'Erune', 'Special', 'Melee', 'Staff'],
	'rackam' : ['1600', '8000', 'Fire', 'Human', 'Special', 'Gun', ''],
	'rosetta' : ['2000', '7500', 'Wind', 'Primal', 'Special', 'Dagger', ''],
	'sturm' : ['1100', '11100', 'Fire', 'Draph', 'Attack', 'Sabre', ''],
	'vajra' : ['1140', '9260', 'Water', 'Erune', 'Attack', 'Katana', ''],
	'vira-grand' : ['1950', '7200', 'Light', 'Primal', 'Defense', 'Spear', ''],
	'zooey-grand' : ['1180', '9200', 'Dark', 'Primal', 'Special', 'Sabre', ''],
	
	'arulumaya-c' : ['1410', '8800', 'Water', 'Harvin', 'Special', 'Staff', ''],
	'beatrix-ss' : ['990', '11000', 'Fire', 'Human', 'Special', 'Sabre', ''],
	'cagliostro-h' : ['1550', '8100', 'Dark', 'Human', 'Balanced', 'Staff', ''],
	'charlotta-h' : ['1590', '6720', 'Light', 'Harvin', 'Heal', 'Sabre', ''],
	'clarisse-c' : ['1280', '8800', 'Earth', 'Human', 'Special', 'Staff', ''],
	'danua-h' : ['1550', '8610', 'Fire', 'Draph', 'Special', 'Dagger', ''],
	'danua-ss' : ['1590', '8350', 'Dark', 'Draph', 'Special', 'Dagger', ''],
	'delafille-ss' : ['1600', '6400', 'Light', 'Human', 'Heal', 'Sabre', ''],
	'diantha-ss' : ['1420', '8100', 'Water', 'Human', 'Special', 'Harp', ''],
	'eustace-h' : ['1100', '8900', 'Earth', 'Erune', 'Attack', 'Gun', ''],
	'grea-ss' : ['1160', '10050', 'Water', 'Draph', 'Attack', 'Melee', ''],
	'heles-ss' : ['1150', '8640', 'Light', 'Erune', 'Balanced', 'Spear', ''],
	'ilsa-ss' : ['1160', '8640', 'Fire', 'Erune', 'Attack', 'Bow', 'Gun'],
	'io-ss' : ['1225', '9680', 'Fire', 'Human', 'Attack', 'Staff', ''],
	'izmir-ss' : ['1350', '10100', 'Water', 'Draph', 'Attack', 'Sabre', ''],
	'jeanne-ss' : ['1780', '7100', 'Wind', 'Human', 'Balanced', 'Sabre', ''],
	'korwa-ss' : ['1550', '6850', 'Wind', 'Erune', 'Special', 'Staff', ''],
	'ladygrey-h' : ['1460', '8700', 'Dark', 'Human', 'Special', 'Spear', 'Melee'],
	'mary-c' : ['1630', '7900', 'Light', 'Human', 'Balanced', 'Gun', ''],
	'medusa-valentine' : ['1500', '8500', 'Earth', 'Primal', 'Balanced', 'Melee', ''],
	'naoise-ss' : ['2000', '7160', 'Light', 'Human', 'Defense', 'Spear', ''],
	'narmaya-ss' : ['1120', '10240', 'Water', 'Draph', 'Attack', 'Katana', ''],
	'percival-ss' : ['1540', '9120', 'Fire', 'Human', 'Balanced', 'Sabre', ''],
	'rosetta-c' : ['2000', '7500', 'Dark', 'Primal', 'Heal', 'Dagger', ''],
	'rosetta-ss' : ['1340', '8500', 'Earth', 'Primal', 'Special', 'Dagger', ''],
	'siegfried-ss' : ['1330', '9500', 'Wind', 'Human', 'Attack', 'Sabre', 'Katana'],
	'vira-ss' : ['1280', '8160', 'Earth', 'Human', 'Special', 'Sabre', ''],
	'zeta-ss' : ['1280', '9600', 'Light', 'Human', 'Attack', 'Spear', ''],
	
	'anre' : ['2311', '10411', 'Water', 'Harvin', 'Defense', 'Spear', ''],
	'tweyen' : ['2222', '11222', 'Light', 'Human', 'Balanced', 'Bow', ''],
	'threo' : ['1833', '13333', 'Earth', 'Draph', 'Attack', 'Axe', 'Sabre'],
	'feower' : ['1644', '10344', 'Water', 'Erune', 'Special', 'Dagger', ''],
	'fif' : ['2255', '9355', 'Light', 'Harvin', 'Heal', 'Staff', ''],
	'seox' : ['1966', '8666', 'Dark', 'Erune', 'Attack', 'Melee', ''],
	'seofon' : ['1777', '12777', 'Wind', 'Human', 'Attack', 'Sabre', ''],
	'eahta' : ['2088', '12888', 'Earth', 'Draph', 'Attack', 'Katana', ''],
	'niyon' : ['1599', '12199', 'Wind', 'Harvin', 'Special', 'Harp', ''],
	'tien' : ['2000', '10000', 'Fire', 'Erune', 'Balanced', 'Gun', ''],
};

module.exports = stats;