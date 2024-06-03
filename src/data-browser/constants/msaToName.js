const cbsasRaw = `{"10100":"ABERDEEN","10140":"ABERDEEN","10220":"ADA","10260":"ADJUNTAS","10300":"ADRIAN","10460":"ALAMOGORDO","10620":"ALBEMARLE","10660":"ALBERT LEA","10700":"ALBERTVILLE","10760":"ALEXANDER CITY","10820":"ALEXANDRIA","10860":"ALICE","10940":"ALMA","10980":"ALPENA","11060":"ALTUS","11140":"AMERICUS","11220":"AMSTERDAM","11380":"ANDREWS","11420":"ANGOLA","11580":"ARCADIA","11620":"ARDMORE","11660":"ARKADELPHIA","11680":"ARKANSAS CITY-WINFIELD","11740":"ASHLAND","11780":"ASHTABULA","11820":"ASTORIA","11860":"ATCHISON","11900":"ATHENS","11940":"ATHENS","11980":"ATHENS","12120":"ATMORE","12140":"AUBURN","12180":"AUBURN","12300":"AUGUSTA-WATERVILLE","12380":"AUSTIN","12460":"BAINBRIDGE","12660":"BARABOO","12680":"BARDSTOWN","12740":"BARRE","12780":"BARTLESVILLE","12820":"BASTROP","12860":"BATAVIA","12900":"BATESVILLE","13060":"BAY CITY","13100":"BEATRICE","13180":"BEAVER DAM","13260":"BEDFORD","13300":"BEEVILLE","13340":"BELLEFONTAINE","13420":"BEMIDJI","13500":"BENNETTSVILLE","13540":"BENNINGTON","13620":"BERLIN","13660":"BIG RAPIDS","13700":"BIG SPRING","13720":"BIG STONE GAP","13940":"BLACKFOOT","14140":"BLUEFIELD","14180":"BLYTHEVILLE","14220":"BOGALUSA","14300":"BONHAM","14340":"BOONE","14380":"BOONE","14420":"BORGER","14460":"BOSTON-CAMBRIDGE-NEWTON","14580":"BOZEMAN","14620":"BRADFORD","14660":"BRAINERD","14700":"BRANSON","14720":"BRECKENRIDGE","14780":"BRENHAM","14820":"BREVARD","15020":"BROOKHAVEN","15060":"BROOKINGS","15100":"BROOKINGS","15140":"BROWNSVILLE","15220":"BROWNWOOD","15340":"BUCYRUS","15420":"BURLEY","15460":"BURLINGTON","15580":"BUTTE-SILVER BOW","15620":"CADILLAC","15660":"CALHOUN","15700":"CAMBRIDGE","15740":"CAMBRIDGE","15780":"CAMDEN","15820":"CAMPBELLSVILLE","15860":"CAÑON CITY","15900":"CANTON","16100":"CARLSBAD-ARTESIA","16140":"CARROLL","16260":"CEDAR CITY","16340":"CEDARTOWN","16380":"CELINA","16420":"CENTRAL CITY","16460":"CENTRALIA","16500":"CENTRALIA","16660":"CHARLESTON-MATTOON","16980":"CHICAGO-NAPERVILLE-ELGIN","17060":"CHILLICOTHE","17200":"CLAREMONT-LEBANON","17220":"CLARKSBURG","17260":"CLARKSDALE","17340":"CLEARLAKE","17380":"CLEVELAND","17500":"CLEWISTON","17540":"CLINTON","17580":"CLOVIS","17620":"COAMO","17640":"COCO","17700":"COFFEYVILLE","17740":"COLDWATER","18060":"COLUMBUS","18100":"COLUMBUS","18180":"CONCORD","18220":"CONNERSVILLE","18260":"COOKEVILLE","18300":"COOS BAY","18380":"CORDELE","18420":"CORINTH","18460":"CORNELIA","18500":"CORNING","18620":"CORSICANA","18660":"CORTLAND","18740":"COSHOCTON","18780":"CRAIG","18820":"CRAWFORDSVILLE","18860":"CRESCENT CITY","18900":"CROSSVILLE","18980":"CULLMAN","19000":"CULLOWHEE","19100":"DALLAS-FORT WORTH-ARLINGTON","19220":"DANVILLE","19260":"DANVILLE","19420":"DAYTON","19540":"DECATUR","19580":"DEFIANCE","19620":"DEL RIO","19700":"DEMING","19760":"DERIDDER","19820":"DETROIT-WARREN-DEARBORN","19860":"DICKINSON","19940":"DIXON","19980":"DODGE CITY","20060":"DOUGLAS","20140":"DUBLIN","20180":"DUBOIS","20300":"DUMAS","20340":"DUNCAN","20380":"DUNN","20420":"DURANGO","20460":"DURANT","20540":"DYERSBURG","20580":"EAGLE PASS","20660":"EASTON","20780":"EDWARDS","20820":"EFFINGHAM","20900":"EL CAMPO","20980":"EL DORADO","21020":"ELIZABETH CITY","21120":"ELK CITY","21180":"ELKINS","21220":"ELKO","21260":"ELLENSBURG","21380":"EMPORIA","21460":"ENTERPRISE","21540":"ESCANABA","21580":"ESPAÑOLA","21640":"EUFAULA","21700":"EUREKA-ARCATA-FORTUNA","21740":"EVANSTON","21840":"FAIRFIELD","21860":"FAIRMONT","21900":"FAIRMONT","21980":"FALLON","22060":"FARIBAULT-NORTHFIELD","22100":"FARMINGTON","22260":"FERGUS FALLS","22280":"FERNLEY","22300":"FINDLAY","22340":"FITZGERALD","22580":"FOREST CITY","22620":"FORREST CITY","22700":"FORT DODGE","22780":"FORT LEONARD WOOD","22800":"FORT MADISON-KEOKUK","22820":"FORT MORGAN","22840":"FORT PAYNE","22860":"FORT POLK SOUTH","23140":"FRANKFORT","23180":"FRANKFORT","23240":"FREDERICKSBURG","23300":"FREEPORT","23340":"FREMONT","23380":"FREMONT","23500":"GAFFNEY","23620":"GAINESVILLE","23660":"GALESBURG","23700":"GALLUP","23780":"GARDEN CITY","23820":"GARDNERVILLE RANCHOS","23860":"GEORGETOWN","23940":"GILLETTE","23980":"GLASGOW","24060":"GLENWOOD SPRINGS","24100":"GLOVERSVILLE","24330":"GRAND RAPIDS","24380":"GRANTS","24460":"GREAT BEND","24620":"GREENEVILLE","24640":"GREENFIELD TOWN","24700":"GREENSBURG","24740":"GREENVILLE","24820":"GREENVILLE","24900":"GREENWOOD","24940":"GREENWOOD","24980":"GRENADA","25100":"GUYMON","25200":"HAILEY","25300":"HANNIBAL","25460":"HARRISON","25580":"HASTINGS","25700":"HAYS","25720":"HEBER","25740":"HELENA","25760":"HELENA-WEST HELENA","25780":"HENDERSON","25820":"HEREFORD","25840":"HERMISTON-PENDLETON","25880":"HILLSDALE","25900":"HILO","26020":"HOBBS","26090":"HOLLAND","26220":"HOOD RIVER","26260":"HOPE","26340":"HOUGHTON","26460":"HUDSON","26500":"HUNTINGDON","26540":"HUNTINGTON","26660":"HUNTSVILLE","26700":"HURON","26740":"HUTCHINSON","26780":"HUTCHINSON","26860":"INDIANA","26940":"INDIANOLA","26960":"IONIA","27020":"IRON MOUNTAIN","27160":"JACKSON","27220":"JACKSON","27300":"JACKSONVILLE","27380":"JACKSONVILLE","27420":"JAMESTOWN","27460":"JAMESTOWN-DUNKIRK-FREDONIA","27540":"JASPER","27580":"JAYUYA","27600":"JEFFERSON","27660":"JENNINGS","27700":"JESUP","27920":"JUNCTION CITY","27940":"JUNEAU","28060":"KALISPELL","28180":"KAPAA","28260":"KEARNEY","28300":"KEENE","28340":"KENDALLVILLE","28380":"KENNETT","28500":"KERRVILLE","28540":"KETCHIKAN","28580":"KEY WEST","28620":"KILL DEVIL HILLS","28780":"KINGSVILLE","28820":"KINSTON","28860":"KIRKSVILLE","28900":"KLAMATH FALLS","29060":"LACONIA","29260":"LA GRANDE","29300":"LAGRANGE","29380":"LAKE CITY","29500":"LAMESA","29660":"LARAMIE","29780":"LAS VEGAS","29860":"LAUREL","29900":"LAURINBURG","29980":"LAWRENCEBURG","30060":"LEBANON","30220":"LEVELLAND","30260":"LEWISBURG","30280":"LEWISBURG","30380":"LEWISTOWN","30420":"LEXINGTON","30580":"LIBERAL","30660":"LINCOLN","30820":"LOCK HAVEN","30880":"LOGAN","30900":"LOGANSPORT","30940":"LONDON","31060":"LOS ALAMOS","31080":"LOS ANGELES-LONG BEACH-ANAHEIM","31220":"LUDINGTON","31260":"LUFKIN","31300":"LUMBERTON","31380":"MACOMB","31500":"MADISON","31580":"MADISONVILLE","31620":"MAGNOLIA","31660":"MALONE","31680":"MALVERN","31820":"MANITOWOC","31930":"MARIETTA","31940":"MARINETTE","31980":"MARION","32000":"MARION","32020":"MARION","32100":"MARQUETTE","32140":"MARSHALL","32180":"MARSHALL","32220":"MARSHALL","32260":"MARSHALLTOWN","32280":"MARTIN","32300":"MARTINSVILLE","32340":"MARYVILLE","32380":"MASON CITY","32460":"MAYFIELD","32500":"MAYSVILLE","32540":"MCALESTER","32620":"MCCOMB","32660":"MCMINNVILLE","32700":"MCPHERSON","32740":"MEADVILLE","32860":"MENOMONIE","32940":"MERIDIAN","32980":"MERRILL","33020":"MEXICO","33060":"MIAMI","33100":"MIAMI-FORT LAUDERDALE-WEST PALM BEACH","33180":"MIDDLESBOROUGH","33300":"MILLEDGEVILLE","33420":"MINERAL WELLS","33500":"MINOT","33580":"MITCHELL","33620":"MOBERLY","33940":"MONTROSE","33980":"MOREHEAD CITY","34020":"MORGAN CITY","34140":"MOSCOW","34180":"MOSES LAKE","34220":"MOULTRIE","34260":"MOUNTAIN HOME","34300":"MOUNTAIN HOME","34340":"MOUNT AIRY","34380":"MOUNT PLEASANT","34420":"MOUNT PLEASANT","34460":"MOUNT STERLING","34500":"MOUNT VERNON","34540":"MOUNT VERNON","34660":"MURRAY","34700":"MUSCATINE","34780":"MUSKOGEE","34860":"NACOGDOCHES","35020":"NATCHEZ","35060":"NATCHITOCHES","35140":"NEWBERRY","35220":"NEW CASTLE","35260":"NEW CASTLE","35420":"NEW PHILADELPHIA-DOVER","35440":"NEWPORT","35460":"NEWPORT","35500":"NEWTON","35580":"NEW ULM","35620":"NEW YORK-NEWARK-JERSEY CITY","35700":"NOGALES","35740":"NORFOLK","35820":"NORTH PLATTE","35860":"NORTH VERNON","35900":"NORTH WILKESBORO","35940":"NORWALK","36020":"OAK HARBOR","36300":"OGDENSBURG-MASSENA","36340":"OIL CITY","36380":"OKEECHOBEE","36460":"OLEAN","36580":"ONEONTA","36620":"ONTARIO","36660":"OPELOUSAS","36700":"ORANGEBURG","36820":"OSKALOOSA","36830":"OTHELLO","36840":"OTTAWA","36860":"OTTAWA-PERU","36900":"OTTUMWA","36940":"OWATONNA","37020":"OWOSSO","37060":"OXFORD","37080":"OXFORD","37120":"OZARK","37140":"PADUCAH","37220":"PAHRUMP","37260":"PALATKA","37300":"PALESTINE","37420":"PAMPA","37500":"PARAGOULD","37540":"PARIS","37580":"PARIS","37660":"PARSONS","37740":"PAYSON","37780":"PECOS","37800":"PELLA","37940":"PERU","37980":"PHILADELPHIA-CAMDEN-WILMINGTON","38100":"PICAYUNE","38180":"PIERRE","38240":"PINEHURST-SOUTHERN PINES","38260":"PITTSBURG","38380":"PLAINVIEW","38420":"PLATTEVILLE","38460":"PLATTSBURGH","38500":"PLYMOUTH","38580":"POINT PLEASANT","38620":"PONCA CITY","38700":"PONTIAC","38740":"POPLAR BLUFF","38780":"PORTALES","38820":"PORT ANGELES","38840":"PORT CLINTON","38920":"PORT LAVACA","39020":"PORTSMOUTH","39060":"POTTSVILLE","39220":"PRICE","39260":"PRINEVILLE","39420":"PULLMAN","39500":"QUINCY","39700":"RAYMONDVILLE","39780":"RED BLUFF","39860":"RED WING","39940":"REXBURG","39980":"RICHMOND","40080":"RICHMOND-BEREA","40100":"RIO GRANDE CITY","40180":"RIVERTON","40260":"ROANOKE RAPIDS","40300":"ROCHELLE","40460":"ROCKINGHAM","40540":"ROCK SPRINGS","40620":"ROLLA","40700":"ROSEBURG","40740":"ROSWELL","40760":"RUIDOSO","40780":"RUSSELLVILLE","40820":"RUSTON","40860":"RUTLAND","40940":"SAFFORD","41220":"ST. MARYS","41260":"ST. MARYS","41400":"SALEM","41460":"SALINA","41760":"SANDPOINT","41780":"SANDUSKY","41820":"SANFORD","41860":"SAN FRANCISCO-OAKLAND-HAYWARD","42180":"SANTA ISABEL","42300":"SAULT STE. MARIE","42380":"SAYRE","42420":"SCOTTSBLUFF","42460":"SCOTTSBORO","42620":"SEARCY","42660":"SEATTLE-TACOMA-BELLEVUE","42740":"SEDALIA","42780":"SELINSGROVE","42820":"SELMA","42860":"SENECA","42900":"SENECA FALLS","42940":"SEVIERVILLE","42980":"SEYMOUR","43020":"SHAWANO","43060":"SHAWNEE","43140":"SHELBY","43180":"SHELBYVILLE","43220":"SHELTON","43260":"SHERIDAN","43320":"SHOW LOW","43380":"SIDNEY","43460":"SIKESTON","43500":"SILVER CITY","43660":"SNYDER","43700":"SOMERSET","43740":"SOMERSET","43760":"SONORA","43940":"SPEARFISH","43980":"SPENCER","44020":"SPIRIT LAKE","44260":"STARKVILLE","44340":"STATESBORO","44460":"STEAMBOAT SPRINGS","44500":"STEPHENVILLE","44540":"STERLING","44580":"STERLING","44620":"STEVENS POINT","44660":"STILLWATER","44740":"STORM LAKE","44780":"STURGIS","44860":"SULPHUR SPRINGS","44900":"SUMMERVILLE","44920":"SUMMIT PARK","44980":"SUNBURY","45000":"SUSANVILLE","45020":"SWEETWATER","45140":"TAHLEQUAH","45180":"TALLADEGA-SYLACAUGA","45340":"TAOS","45380":"TAYLORVILLE","45520":"THE DALLES","45580":"THOMASTON","45620":"THOMASVILLE","45660":"TIFFIN","45700":"TIFTON","45740":"TOCCOA","45860":"TORRINGTON","45900":"TRAVERSE CITY","45980":"TROY","46020":"TRUCKEE-GRASS VALLEY","46100":"TULLAHOMA-MANCHESTER","46180":"TUPELO","46380":"UKIAH","46460":"UNION CITY","46500":"URBANA","46620":"UVALDE","46740":"VALLEY","46780":"VAN WERT","46820":"VERMILLION","46860":"VERNAL","46900":"VERNON","46980":"VICKSBURG","47080":"VIDALIA","47180":"VINCENNES","47240":"VINEYARD HAVEN","47340":"WABASH","47420":"WAHPETON","47540":"WAPAKONETA","47620":"WARREN","47660":"WARRENSBURG","47700":"WARSAW","47780":"WASHINGTON","47820":"WASHINGTON","47900":"WASHINGTON-ARLINGTON-ALEXANDRIA","47920":"WASHINGTON COURT HOUSE","47980":"WATERTOWN","48020":"WATERTOWN-FORT ATKINSON","48100":"WAUCHULA","48180":"WAYCROSS","48220":"WEATHERFORD","48460":"WEST PLAINS","48500":"WEST POINT","48580":"WHITEWATER-ELKHORN","48780":"WILLISTON","48820":"WILLMAR","48940":"WILMINGTON","48980":"WILSON","49080":"WINNEMUCCA","49100":"WINONA","49220":"WISCONSIN RAPIDS-MARSHFIELD","49260":"WOODWARD","49300":"WOOSTER","49380":"WORTHINGTON","49460":"YANKTON","49780":"ZANESVILLE","49820":"ZAPATA"}`

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
  99999: 'N/A OR OUTSIDE MSA/MD',
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

const msamdToName2017 = { ...JSON.parse(cbsasRaw), ...msaToName }

const msaToName2020 = { ...msaToName2019 }

const deleteFrom2020 = [
  16974, // "CHICAGO-NAPERVILLE-ARLINGTON HEIGHTS"
  19380, // "DAYTON"
  20524, // "DUTCHESS COUNTY-PUTNAM COUNTY"
  39140, // "PRESCOTT"
  43524, // "SILVER SPRING-FREDERICK-ROCKVILLE"
]

deleteFrom2020.forEach((key) => {
  delete msaToName2020[key]
})

export default {
  2017: msamdToName2017,
  2018: msaToName,
  2019: msaToName2019,
  2020: msaToName2020,
  2021: msaToName2020,
  2022: msaToName2020,
  2023: msaToName2020,
}
