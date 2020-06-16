const msaToName = {
  10180: 'ABILENE',
  11100: 'AMARILLO',
  12420: 'AUSTIN-ROUND ROCK',
  13140: 'BEAUMONT-PORT ARTHUR',
  15180: 'BROWNSVILLE-HARLINGEN',
  17780: 'COLLEGE STATION-BRYAN',
  18580: 'CORPUS CHRISTI',
  19124: 'DALLAS-PLANO-IRVING',
  21340: 'EL PASO',
  23104: 'FORT WORTH-ARLINGTON',
  26420: 'HOUSTON-THE WOODLANDS-SUGAR LAND',
  28660: 'KILLEEN-TEMPLE',
  29700: 'LAREDO',
  30980: 'LONGVIEW',
  31180: 'LUBBOCK',
  32580: 'MCALLEN-EDINBURG-MISSION',
  33260: 'MIDLAND',
  36220: 'ODESSA',
  41660: 'SAN ANGELO',
  41700: 'SAN ANTONIO-NEW BRAUNFELS',
  43300: 'SHERMAN-DENISON',
  45500: 'TEXARKANA',
  46340: 'TYLER',
  47020: 'VICTORIA',
  47380: 'WACO',
  48660: 'WICHITA FALLS',
  10380: 'AGUADILLA-ISABELA',
  11640: 'ARECIBO',
  25020: 'GUAYAMA',
  32420: 'MAYAGÜEZ',
  38660: 'PONCE',
  41900: 'SAN GERMÁN',
  41980: 'SAN JUAN-CAROLINA-CAGUAS',
  10420: 'AKRON',
  15940: 'CANTON-MASSILLON',
  17140: 'CINCINNATI',
  17460: 'CLEVELAND-ELYRIA',
  18140: 'COLUMBUS',
  19380: 'DAYTON',
  26580: 'HUNTINGTON-ASHLAND',
  30620: 'LIMA',
  31900: 'MANSFIELD',
  44220: 'SPRINGFIELD',
  45780: 'TOLEDO',
  48260: 'WEIRTON-STEUBENVILLE',
  48540: 'WHEELING',
  49660: 'YOUNGSTOWN-WARREN-BOARDMAN',
  10500: 'ALBANY',
  12020: 'ATHENS-CLARKE COUNTY',
  12060: 'ATLANTA-SANDY SPRINGS-ROSWELL',
  12260: 'AUGUSTA-RICHMOND COUNTY',
  15260: 'BRUNSWICK',
  16860: 'CHATTANOOGA',
  17980: 'COLUMBUS',
  19140: 'DALTON',
  23580: 'GAINESVILLE',
  25980: 'HINESVILLE',
  31420: 'MACON-BIBB COUNTY',
  40660: 'ROME',
  42340: 'SAVANNAH',
  46660: 'VALDOSTA',
  47580: 'WARNER ROBINS',
  10540: 'ALBANY',
  13460: 'BEND-REDMOND',
  18700: 'CORVALLIS',
  21660: 'EUGENE',
  24420: 'GRANTS PASS',
  32780: 'MEDFORD',
  38900: 'PORTLAND-VANCOUVER-HILLSBORO',
  41420: 'SALEM',
  10580: 'ALBANY-SCHENECTADY-TROY',
  13780: 'BINGHAMTON',
  15380: 'BUFFALO-CHEEKTOWAGA-NIAGARA FALLS',
  20524: 'DUTCHESS COUNTY-PUTNAM COUNTY',
  21300: 'ELMIRA',
  24020: 'GLENS FALLS',
  27060: 'ITHACA',
  28740: 'KINGSTON',
  35004: 'NASSAU COUNTY-SUFFOLK COUNTY',
  35614: 'NEW YORK-JERSEY CITY-WHITE PLAINS',
  40380: 'ROCHESTER',
  45060: 'SYRACUSE',
  46540: 'UTICA-ROME',
  48060: 'WATERTOWN-FORT DRUM',
  10740: 'ALBUQUERQUE',
  22140: 'FARMINGTON',
  29740: 'LAS CRUCES',
  42140: 'SANTA FE',
  10780: 'ALEXANDRIA',
  12940: 'BATON ROUGE',
  25220: 'HAMMOND',
  26380: 'HOUMA-THIBODAUX',
  29180: 'LAFAYETTE',
  29340: 'LAKE CHARLES',
  33740: 'MONROE',
  35380: 'NEW ORLEANS-METAIRIE',
  43340: 'SHREVEPORT-BOSSIER CITY',
  10900: 'ALLENTOWN-BETHLEHEM-EASTON',
  11020: 'ALTOONA',
  14100: 'BLOOMSBURG-BERWICK',
  16540: 'CHAMBERSBURG-WAYNESBORO',
  20700: 'EAST STROUDSBURG',
  21500: 'ERIE',
  23900: 'GETTYSBURG',
  25420: 'HARRISBURG-CARLISLE',
  27780: 'JOHNSTOWN',
  29540: 'LANCASTER',
  30140: 'LEBANON',
  33874: 'MONTGOMERY COUNTY-BUCKS COUNTY-CHESTER COUNTY',
  35084: 'NEWARK',
  37964: 'PHILADELPHIA',
  38300: 'PITTSBURGH',
  39740: 'READING',
  42540: 'SCRANTON--WILKES-BARRE--HAZLETON',
  44300: 'STATE COLLEGE',
  48700: 'WILLIAMSPORT',
  49620: 'YORK-HANOVER',
  12100: 'ATLANTIC CITY-HAMMONTON',
  15804: 'CAMDEN',
  36140: 'OCEAN CITY',
  45940: 'TRENTON',
  47220: 'VINELAND-BRIDGETON',
  48864: 'WILMINGTON',
  11180: 'AMES',
  16300: 'CEDAR RAPIDS',
  19340: 'DAVENPORT-MOLINE-ROCK ISLAND',
  19780: 'DES MOINES-WEST DES MOINES',
  20220: 'DUBUQUE',
  26980: 'IOWA CITY',
  36540: 'OMAHA-COUNCIL BLUFFS',
  43580: 'SIOUX CITY',
  47940: 'WATERLOO-CEDAR FALLS',
  11244: 'ANAHEIM-SANTA ANA-IRVINE',
  12540: 'BAKERSFIELD',
  17020: 'CHICO',
  20940: 'EL CENTRO',
  23420: 'FRESNO',
  25260: 'HANFORD-CORCORAN',
  31084: 'LOS ANGELES-LONG BEACH-GLENDALE',
  31460: 'MADERA',
  32900: 'MERCED',
  33700: 'MODESTO',
  34900: 'NAPA',
  36084: 'OAKLAND-HAYWARD-BERKELEY',
  37100: 'OXNARD-THOUSAND OAKS-VENTURA',
  39820: 'REDDING',
  40140: 'RIVERSIDE-SAN BERNARDINO-ONTARIO',
  40900: 'SACRAMENTO--ROSEVILLE--ARDEN-ARCADE',
  41500: 'SALINAS',
  41740: 'SAN DIEGO-CARLSBAD',
  41884: 'SAN FRANCISCO-REDWOOD CITY-SOUTH SAN FRANCISCO',
  41940: 'SAN JOSE-SUNNYVALE-SANTA CLARA',
  42020: 'SAN LUIS OBISPO-PASO ROBLES-ARROYO GRANDE',
  42034: 'SAN RAFAEL',
  42100: 'SANTA CRUZ-WATSONVILLE',
  42200: 'SANTA MARIA-SANTA BARBARA',
  42220: 'SANTA ROSA',
  44700: 'STOCKTON-LODI',
  46700: 'VALLEJO-FAIRFIELD',
  47300: 'VISALIA-PORTERVILLE',
  49700: 'YUBA CITY',
  11260: 'ANCHORAGE',
  21820: 'FAIRBANKS',
  11460: 'ANN ARBOR',
  12980: 'BATTLE CREEK',
  13020: 'BAY CITY',
  19804: 'DETROIT-DEARBORN-LIVONIA',
  22420: 'FLINT',
  24340: 'GRAND RAPIDS-WYOMING',
  27100: 'JACKSON',
  28020: 'KALAMAZOO-PORTAGE',
  29620: 'LANSING-EAST LANSING',
  33220: 'MIDLAND',
  33780: 'MONROE',
  34740: 'MUSKEGON',
  35660: 'NILES-BENTON HARBOR',
  40980: 'SAGINAW',
  43780: 'SOUTH BEND-MISHAWAKA',
  47664: 'WARREN-TROY-FARMINGTON HILLS',
  11500: 'ANNISTON-OXFORD-JACKSONVILLE',
  12220: 'AUBURN-OPELIKA',
  13820: 'BIRMINGHAM-HOOVER',
  19300: 'DAPHNE-FAIRHOPE-FOLEY',
  19460: 'DECATUR',
  20020: 'DOTHAN',
  22520: 'FLORENCE-MUSCLE SHOALS',
  23460: 'GADSDEN',
  26620: 'HUNTSVILLE',
  33660: 'MOBILE',
  33860: 'MONTGOMERY',
  46220: 'TUSCALOOSA',
  11540: 'APPLETON',
  20260: 'DULUTH',
  20740: 'EAU CLAIRE',
  22540: 'FOND DU LAC',
  24580: 'GREEN BAY',
  27500: 'JANESVILLE-BELOIT',
  29100: 'LA CROSSE-ONALASKA',
  29404: 'LAKE COUNTY-KENOSHA COUNTY',
  31540: 'MADISON',
  33340: 'MILWAUKEE-WAUKESHA-WEST ALLIS',
  33460: 'MINNEAPOLIS-ST. PAUL-BLOOMINGTON',
  36780: 'OSHKOSH-NEENAH',
  39540: 'RACINE',
  43100: 'SHEBOYGAN',
  48140: 'WAUSAU',
  11700: 'ASHEVILLE',
  15500: 'BURLINGTON',
  16740: 'CHARLOTTE-CONCORD-GASTONIA',
  20500: 'DURHAM-CHAPEL HILL',
  22180: 'FAYETTEVILLE',
  24140: 'GOLDSBORO',
  24660: 'GREENSBORO-HIGH POINT',
  24780: 'GREENVILLE',
  25860: 'HICKORY-LENOIR-MORGANTON',
  27340: 'JACKSONVILLE',
  34820: 'MYRTLE BEACH-CONWAY-NORTH MYRTLE BEACH',
  35100: 'NEW BERN',
  39580: 'RALEIGH',
  40580: 'ROCKY MOUNT',
  47260: 'VIRGINIA BEACH-NORFOLK-NEWPORT NEWS',
  48900: 'WILMINGTON',
  49180: 'WINSTON-SALEM',
  16700: 'CHARLESTON-NORTH CHARLESTON',
  17900: 'COLUMBIA',
  22500: 'FLORENCE',
  24860: 'GREENVILLE-ANDERSON-MAULDIN',
  25940: 'HILTON HEAD ISLAND-BLUFFTON-BEAUFORT',
  43900: 'SPARTANBURG',
  44940: 'SUMTER',
  12580: 'BALTIMORE-COLUMBIA-TOWSON',
  15680: 'CALIFORNIA-LEXINGTON PARK',
  19060: 'CUMBERLAND',
  25180: 'HAGERSTOWN-MARTINSBURG',
  41540: 'SALISBURY',
  43524: 'SILVER SPRING-FREDERICK-ROCKVILLE',
  47894: 'WASHINGTON-ARLINGTON-ALEXANDRIA',
  12620: 'BANGOR',
  30340: 'LEWISTON-AUBURN',
  38860: 'PORTLAND-SOUTH PORTLAND',
  12700: 'BARNSTABLE TOWN',
  14454: 'BOSTON',
  15764: 'CAMBRIDGE-NEWTON-FRAMINGHAM',
  38340: 'PITTSFIELD',
  39300: 'PROVIDENCE-WARWICK',
  44140: 'SPRINGFIELD',
  49340: 'WORCESTER',
  13220: 'BECKLEY',
  16620: 'CHARLESTON',
  34060: 'MORGANTOWN',
  37620: 'PARKERSBURG-VIENNA',
  49020: 'WINCHESTER',
  13380: 'BELLINGHAM',
  14740: 'BREMERTON-SILVERDALE',
  28420: 'KENNEWICK-RICHLAND',
  30300: 'LEWISTON',
  31020: 'LONGVIEW',
  34580: 'MOUNT VERNON-ANACORTES',
  36500: 'OLYMPIA-TUMWATER',
  42644: 'SEATTLE-BELLEVUE-EVERETT',
  44060: 'SPOKANE-SPOKANE VALLEY',
  45104: 'TACOMA-LAKEWOOD',
  47460: 'WALLA WALLA',
  48300: 'WENATCHEE',
  49420: 'YAKIMA',
  13740: 'BILLINGS',
  24500: 'GREAT FALLS',
  33540: 'MISSOULA',
  13900: 'BISMARCK',
  22020: 'FARGO',
  24220: 'GRAND FORKS',
  13980: 'BLACKSBURG-CHRISTIANSBURG-RADFORD',
  16820: 'CHARLOTTESVILLE',
  25500: 'HARRISONBURG',
  28700: 'KINGSPORT-BRISTOL-BRISTOL',
  31340: 'LYNCHBURG',
  40060: 'RICHMOND',
  40220: 'ROANOKE',
  44420: 'STAUNTON-WAYNESBORO',
  14010: 'BLOOMINGTON',
  16020: 'CAPE GIRARDEAU',
  16060: 'CARBONDALE-MARION',
  16580: 'CHAMPAIGN-URBANA',
  16974: 'CHICAGO-NAPERVILLE-ARLINGTON HEIGHTS',
  19180: 'DANVILLE',
  19500: 'DECATUR',
  20994: 'ELGIN',
  28100: 'KANKAKEE',
  37900: 'PEORIA',
  40420: 'ROCKFORD',
  41180: 'ST. LOUIS',
  44100: 'SPRINGFIELD',
  14020: 'BLOOMINGTON',
  18020: 'COLUMBUS',
  21140: 'ELKHART-GOSHEN',
  21780: 'EVANSVILLE',
  23060: 'FORT WAYNE',
  23844: 'GARY',
  26900: 'INDIANAPOLIS-CARMEL-ANDERSON',
  29020: 'KOKOMO',
  29200: 'LAFAYETTE-WEST LAFAYETTE',
  31140: 'LOUISVILLE/JEFFERSON COUNTY',
  33140: 'MICHIGAN CITY-LA PORTE',
  34620: 'MUNCIE',
  45460: 'TERRE HAUTE',
  14260: 'BOISE CITY',
  17660: "COEUR D'ALENE",
  26820: 'IDAHO FALLS',
  46300: 'TWIN FALLS',
  30860: 'LOGAN',
  38540: 'POCATELLO',
  14500: 'BOULDER',
  17820: 'COLORADO SPRINGS',
  19740: 'DENVER-AURORA-LAKEWOOD',
  22660: 'FORT COLLINS',
  24300: 'GRAND JUNCTION',
  24540: 'GREELEY',
  39380: 'PUEBLO',
  14540: 'BOWLING GREEN',
  17300: 'CLARKSVILLE',
  21060: 'ELIZABETHTOWN-FORT KNOX',
  30460: 'LEXINGTON-FAYETTE',
  36980: 'OWENSBORO',
  14860: 'BRIDGEPORT-STAMFORD-NORWALK',
  25540: 'HARTFORD-WEST HARTFORD-EAST HARTFORD',
  35300: 'NEW HAVEN-MILFORD',
  35980: 'NORWICH-NEW LONDON',
  15540: 'BURLINGTON-SOUTH BURLINGTON',
  15980: 'CAPE CORAL-FORT MYERS',
  18880: 'CRESTVIEW-FORT WALTON BEACH-DESTIN',
  19660: 'DELTONA-DAYTONA BEACH-ORMOND BEACH',
  22744: 'FORT LAUDERDALE-POMPANO BEACH-DEERFIELD BEACH',
  23540: 'GAINESVILLE',
  26140: 'HOMOSASSA SPRINGS',
  27260: 'JACKSONVILLE',
  29460: 'LAKELAND-WINTER HAVEN',
  33124: 'MIAMI-MIAMI BEACH-KENDALL',
  34940: 'NAPLES-IMMOKALEE-MARCO ISLAND',
  35840: 'NORTH PORT-SARASOTA-BRADENTON',
  36100: 'OCALA',
  36740: 'ORLANDO-KISSIMMEE-SANFORD',
  37340: 'PALM BAY-MELBOURNE-TITUSVILLE',
  37460: 'PANAMA CITY',
  37860: 'PENSACOLA-FERRY PASS-BRENT',
  38940: 'PORT ST. LUCIE',
  39460: 'PUNTA GORDA',
  42680: 'SEBASTIAN-VERO BEACH',
  42700: 'SEBRING',
  45220: 'TALLAHASSEE',
  45300: 'TAMPA-ST. PETERSBURG-CLEARWATER',
  45540: 'THE VILLAGES',
  48424: 'WEST PALM BEACH-BOCA RATON-DELRAY BEACH',
  17860: 'COLUMBIA',
  22220: 'FAYETTEVILLE-SPRINGDALE-ROGERS',
  27620: 'JEFFERSON CITY',
  27900: 'JOPLIN',
  28140: 'KANSAS CITY',
  41140: 'ST. JOSEPH',
  44180: 'SPRINGFIELD',
  16180: 'CARSON CITY',
  29820: 'LAS VEGAS-HENDERSON-PARADISE',
  39900: 'RENO',
  16220: 'CASPER',
  16940: 'CHEYENNE',
  17420: 'CLEVELAND',
  27180: 'JACKSON',
  27740: 'JOHNSON CITY',
  28940: 'KNOXVILLE',
  32820: 'MEMPHIS',
  34100: 'MORRISTOWN',
  34980: 'NASHVILLE-DAVIDSON--MURFREESBORO--FRANKLIN',
  20100: 'DOVER',
  31860: 'MANKATO-NORTH MANKATO',
  40340: 'ROCHESTER',
  41060: 'ST. CLOUD',
  21420: 'ENID',
  22900: 'FORT SMITH',
  30020: 'LAWTON',
  36420: 'OKLAHOMA CITY',
  46140: 'TULSA',
  26300: 'HOT SPRINGS',
  27860: 'JONESBORO',
  30780: 'LITTLE ROCK-NORTH LITTLE ROCK-CONWAY',
  38220: 'PINE BLUFF',
  22380: 'FLAGSTAFF',
  29420: 'LAKE HAVASU CITY-KINGMAN',
  38060: 'PHOENIX-MESA-SCOTTSDALE',
  39140: 'PRESCOTT',
  43420: 'SIERRA VISTA-DOUGLAS',
  46060: 'TUCSON',
  49740: 'YUMA',
  24260: 'GRAND ISLAND',
  30700: 'LINCOLN',
  25060: 'GULFPORT-BILOXI-PASCAGOULA',
  25620: 'HATTIESBURG',
  27140: 'JACKSON',
  27980: 'KAHULUI-WAILUKU-LAHAINA',
  46520: 'URBAN HONOLULU',
  29940: 'LAWRENCE',
  31740: 'MANHATTAN',
  45820: 'TOPEKA',
  48620: 'WICHITA',
  36260: 'OGDEN-CLEARFIELD',
  39340: 'PROVO-OREM',
  41100: 'ST. GEORGE',
  41620: 'SALT LAKE CITY',
  31700: 'MANCHESTER-NASHUA',
  40484: 'ROCKINGHAM COUNTY-STRAFFORD COUNTY',
  39660: 'RAPID CITY',
  43620: 'SIOUX FALLS',
  99999: 'N/A OR OUTSIDE MSA/MD'
}

const msaToName2019 = {
  ...msaToName,

  // Additions
  16984: 'CHICAGO-NAPERVILLE-EVANSTON',
  19430: 'DAYTON-KETTERING',
  23224: 'FREDERICK-GAITHERSBURG-ROCKVILLE',
  35154: 'NEW BRUNSWICK-LAKEWOOD',
  39100: 'POUGHKEEPSIE-NEWBURGH-MIDDLETOWN',
  39150: 'PRESCOTT VALLEY-PRESCOTT',
  49500: 'YAUCO',
  11500: 'ANNISTON-OXFORD',

  // Renames
  10540: 'ALBANY-LEBANON',
  12060: 'ATLANTA-SANDY SPRINGS-ALPHARETTA',
  12420: 'AUSTIN-ROUND ROCK-GEORGETOWN',
  13460: 'BEND',
  13980: 'BLACKSBURG-CHRISTIANSBURG',
  14740: 'BREMERTON-SILVERDALE-PORT ORCHARD',
  15380: 'BUFFALO-CHEEKTOWAGA',
  21660: 'EUGENE-SPRINGFIELD',
  22744: 'FORT LAUDERDALE-POMPANO BEACH-SUNRISE',
  23104: 'FORT WORTH-ARLINGTON-GRAPEVINE',
  24340: 'GRAND RAPIDS-KENTWOOD',
  24860: 'GREENVILLE-ANDERSON',
  25060: 'GULFPORT-BILOXI',
  25540: 'HARTFORD-EAST HARTFORD-MIDDLETOWN',
  25940: 'HILTON HEAD ISLAND-BLUFFTON',
  28700: 'KINGSPORT-BRISTOL',
  31860: 'MANKATO',
  33340: 'MILWAUKEE-WAUKESHA',
  34940: 'NAPLES-MARCO ISLAND',
  35660: 'NILES',
  36084: 'OAKLAND-BERKELEY-LIVERMORE',
  36500: 'OLYMPIA-LACEY-TUMWATER',
  38060: 'PHOENIX-MESA-CHANDLER',
  39580: 'RALEIGH-CARY',
  40900: 'SACRAMENTO-ROSEVILLE-FOLSOM',
  41740: 'SAN DIEGO-CHULA VISTA-CARLSBAD',
  41884: 'SAN FRANCISCO-SAN MATEO-REDWOOD CITY',
  41980: 'SAN JUAN-BAYAMÓN-CAGUAS',
  42020: 'SAN LUIS OBISPO-PASO ROBLES',
  42220: 'SANTA ROSA-PETALUMA',
  42540: 'SCRANTON--WILKES-BARRE',
  42644: 'SEATTLE-BELLEVUE-KENT',
  42700: 'SEBRING-AVON PARK',
  44420: 'STAUNTON',
  44700: 'STOCKTON',
  45940: 'TRENTON-PRINCETON',
  46700: 'VALLEJO',
  47300: 'VISALIA',
  48140: 'WAUSAU-WESTON',
  48424: 'WEST PALM BEACH-BOCA RATON-BOYNTON BEACH',
}

export default {
  2018: msaToName,
  2019: msaToName2019
}