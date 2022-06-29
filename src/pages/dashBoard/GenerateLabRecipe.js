import React, { useState } from 'react';
import { useEffect } from 'react';



// const labdata = {
//     orderType: ["Sample", "Bulk", "Lab Dip"],
//     targetType: ["Swatch", " Reference"],
//     substrate: ["SSP", "TXP", "CFP", "CFN", "PPC", "PVA", "NY"],
//     count: ["20/3", "20/4", "20/2", "20/9", "30/3", "30/2", "40/2", "40/3", "60/2", "60/3", "50/2", "12/3", "16/3"],
//     fastness: ["Bleach Proof", "Super Bleach Proof"],
//     dyesNames: [
//         "101- DIANIX ORANGE SG",
//         "102- DIANIX TURQUOISE-XF",
//         "103- TECHRON NAVY ECO 300%",
//         "104- TECHRON RED E-FB 220%",
//         "105- TECHRON YELLOW SE-4G 200%",
//         "106- DIANIX TURQUOISE S-BG",
//         "107- DIANIX NAVY S2G",
//         "108- DIANIX LUMINOUS RED-G",
//         "110- DIANIX Y. BROWN CC",
//         "111- DIANIX BRILLIANT VIOLET R",
//         "112- TECHRON RED F-3BS 150%",
//         "113- D.YELL.BROWN-SERL",
//         "114-DIANIX RUBINE ETD",
//         "TECHRON ORANGE BLS",
//         "116- DIANIX RED SG",
//         "117- DIANIX YELLOW  SE-G",
//         "118- DIANIX RUBINE S2G 150%",
//         "119- DIANIX BLACK CC-R",
//         "120- DIANIX NAVY CC",
//         "121- DIANIX BLUE CC",
//         "122- DIANIX Y. BROWN S2R 150%",
//         "123- DIANIX RED CBN-SF",
//         "124- DIANIX TURQUOISE XF 2",
//         "125- DIANIX  RED S-BEL",
//         "126- DIANIX YELLOW 10 G",
//         "127- DIANIX RED 4B-E",
//         "128- DIANIX VIOLET S-4R",
//         "129- DIANIX LUMINOUS PINK -5B",

//         "205- DIANIX SERA WHITE PN",
//         "206- DIANIX ORANGE AM-SLR",
//         "207- TERASIL NAVY XF 2",
//         "208- DIANIX YELLOW AM-2R",
//         "209- DIANIX BRILLIANT RED SF",
//         "210- DIANIX NAVY XF 2",
//         "211- TERATOP BLUE HL-B 150%",
//         "213- DIANIX BLACK XF 2",
//         "300- DIANIX Y. BROWN SE-R",
//         "BEMACID YELLOW N-2G",
//         "301- TELON YELLOW M4GL",
//         "302- TELON RED A-2R",
//         "303- TELON RED M-BL",
//         "304- TELON BLUE M-2R",
//         "305- TELON TURQUOISE M-5G 85%",
//         "306- TELON RHODAMINE M-BN",
//         "307- TELON FLAVINE M-7G",
//         "TELON BLUE A-2R",
//         "308- ISOLAN BLACK 2S-LDN",
//         "309- TAINASET RED 2-BT",
//         "310- TAINASET BLUE 2-RNT",
//         "311- TAINASET BLACK B-T",
//         "312- TAINASET NAVY RNT "
//     ],
//     customers: [
//         "4A YARN DYEING LTD.",
//         "A&AGROUP",
//         "ABA GROUP",
//         "SADAT APPARELS LTD",
//         "ADOR COMPOSITE LTD.",
//         "AYASHA LTD",
//         "ADVANCE ATTIRE LTD",
//         "DIRD GARMENTS LTD.",
//         "AJ FASHION",
//         "PACIFIC COTTON LTD",
//         "ALPHA CLOTHING LTD.",
//         "Aman Graphics & Designs Ltd.",
//         "MASIHATA GROUP",
//         "AMAN KNITTINGS LTD.",
//         "AMAN TEX LTD.",
//         "ANOWARA GROUP",
//         "APPEAR COMPOSITE FASHION LTD.",
//         "APPEAR COMPOSITE LTD",
//         "CURIUM BANGLADESH",
//         "TOTAL MARCHAND LTD",
//         "L Z FASHION LTD;",
//         "TECHRON BLUE BLS",
//         "AR JEANS PRODUCER LTD",
//         "SUSTAINABLY YOURS",
//         "ARABI FASHION LIMITED",
//         "ARRIVAL FASHION LIMITED",
//         "AST KNITWEAR LTD",
//         "AVANT GARMENTS LTD.",
//         "AZIM GROUP",
//         "BABYLON GROUP",
//         "BALAKA STITCH (PVT) LT",
//         "BANBIZ PVT LTD.",
//         "BANDO DESIGN LIMITED",
//         "Barnali Textile & Printing Ind.(Pvt.) Ltd.",
//         "BAXTER BRENTON(BD)CLOTHING MANUFACTURING CO.LTD.",
//         "BIRDS GROUP",
//         "BITOPI GROUP",
//         "BONIAN KNIT FASHIONS LTD.",
//         "CIVIC APPARELS LTD.",
//         "COAST TO COAST GROUP",
//         "COMFIT COMPOSITE KNIT LTD",
//         "COMPTEX BANGLADESH LIMITED",
//         "COMTEXTILE (H.K) LTD",
//         "CONCORD GARMENTS LTD",
//         "CONCORD VENTURES EXPORTS LLC",
//         "CONSUMER KNITEX LIMITED.",
//         "COTTON ZONE LIMITED",
//         "CREATIVE DESIGNERS LTD",
//         "CROSS LINE WOVEN GARMENTS LTD",
//         "DAC PACIFIC (BD)LTD",
//         "Dekko Designs Ltd.",
//         "DEKKO GROUP UNIT -1",
//         "DESIGN & SOURCE LTD.",
//         "DESIGNER FASHION LTD.",
//         "DIP KNIT WEAR LTD.",
//         "DIPS APPAREL LTD",
//         "DIVINE CRAFT & FASHION (PVT) LTD",
//         "DRESSMEN DRESSES LTD.",
//         "E.H FABRICS LIMITED",
//         "EHSAN-MOON LIGHT GARMENTS LTD",
//         "EMAZ FASHION WEAR LTD.",
//         "EMON FASHION LTD.",
//         "EMP DHAKA CO.LTD",
//         "ENVOY GROUP",
//         "ESPRIT APPAREL LIMITED",
//         "ESSENTIAL CLOTHING LTD",
//         "EUPHORIA APPARELS LTD",
//         "EURO ATRE APPARELS LTD.",
//         "EURO KNIT WEAR LTD.",
//         "EXPERIENCE GROUP",
//         "FABRICA KNIT COMPOSITE LTD.",
//         "Fakir apparels Ltd.",
//         "FAKIR FASHION LTD.",
//         "FALCON GROUP",
//         "FASHION FLASH LTD(JCL GROUP)",
//         "Fashion Knit Garments (HR Textile) Ltd.",
//         "FASHIONS SUPPORT LTD.",
//         "FASHION FLASH",
//         "Fiat Fashion Ltd.",
//         "FLAXEN DRESS MAKER LTD",
//         "FORTUNEX LIMITED",
//         "FOUR WINGS LIMITED.",
//         "GANADOR APPARELS LIMITED",
//         "GEMTEX LIMITED.",
//         "GIANT GROUP",
//         "GLARE FASHIONS LTD./UNITED ACCESSORICS LTD.",
//         "GLOBAL LABEL",
//         "GOLDEN REFIT GARMENTS LTD.",
//         "GOLDSTAR GROUP OF INDUSTRIES",
//         "GRAMTECH KNIT DYEING FINISHING.",
//         "GREEN SMART SHIRTS LTD.",
//         "HA-MEEM GROUP",
//         "HAMS GARMENTS LIMITED",
//         "HARRODS GARMENTS LTD",
//         "HARRY FASHION LTD",
//         "HORNBILL",
//         "IMPRESS FASHION LTD.",
//         "IMPRESS-NEWTEX COMPOSITE TEXTILE LTD.",
//         "INNOVATIVE KNITTEX LTD.",
//         "INTEGRA APPARELS(BD)LTD.",
//         "INTERNATIONAL CLASSIC COMPOSITE LTD.",
//         "INTERSTOFF APPARELS LTD.",
//         "IRIS DESIGN LTD.",
//         "IRIS FABRICS LIMITED",
//         "J.M FABRICS LTD",
//         "JAMUNA",
//         "JANN  COMPOSITE MILLS LIMITED",
//         "JERICHO IMEX LIMITED",
//         "JK GROUP",
//         "JOY AUTO GARMENTS LTD.",
//         "K.A DESIGN WEAR LTD.",
//         "K.M FASHIONS LTD.",
//         "Khantex",
//         "Knit Valley Fashions Ltd.",
//         "LAILA GROUP",
//         "LENNY FASHIONS LTD",
//         "LIBAS TEXTILE LTD",
//         "LIZ FASHION IND.LTD(A)",
//         "LIZ FASHION INDUSTRY LIMITED",
//         "LOGOS APPARELS LTD.",
//         "LOOPDOT FASHION LIMITED",
//         "LOUIETEX MANUFACTURING LTD",
//         "LYRIC INDUSTRIES (PVT)LTD.",
//         "M.N KNITWEAR LTD.(M.N GROUP)",
//         "MAGPIE COMPOSITE TEXTILES LTD",
//         "MAHMUD GROUP",
//         "MAJUMDER GROUP",
//         "MARMA COMPOSITE LTD",
//         "MASCO GROUP",
//         "MASTRADE INTERNATIONAL GARMENTS LTD.",
//         "Mazib Fashions Ltd.",
//         "MBM GROUP",
//         "MEEK KNIT LIMITED",
//         "MEGA LOOK FASHION",
//         "MEGHNA KNIT COMPOSITE LTD.",
//         "MEHNAZ STYLES & CRAFT LTD.",
//         "METRO Knitting & Dyeing Mills Limited.",
//         "MOHAMMADI GROUP",
//         "MOMTEX EXPO LTD.",
//         "MONDOL GROUP",
//         "MULTIFABS LTD (A)",
//         "MUST GARMENTS CON. LIMITED",
//         "NABA KNIT COMPOSITE LIMITED",
//         "NASA HITECH",
//         "NATURAL GROUP",
//         "NEEDLE DROP LIMITED",
//         "NETWORK CLOTHING LTD.",
//         "NEW ASIA GROUP",
//         "New Line Clothings Ltd",
//         "NORBAN",
//         "NORTHERN GROUP",
//         "NOVEL HURRICANE KNIT GARMENTS LTD.",
//         "OLYMPIC FASHION",
//         "ONUS GARMENTS LTD.",
//         "OPEX GROUP",
//         "PADMA LIMITED",
//         "PAKIZA GROUP",
//         "PALMAL GROUP",
//         "PANGEA FASHION WEAR LTD.",
//         "PANASIA CLOTHING LTD.",
//         "PARK STAR APPARELS LTD.",
//         "PHYTHM FASHION LTD",
//         "PINAKI GROUP",
//         "PRIME JEANS",
//         "PROGRESS APPARELS(BANGLADESH) LTD",
//         "PROSTAR APPARELS LTD.",
//         "QUAZI ABEDIN TEX LTD.",
//         "RABAB FASHION INDUSTRIES LTD",
//         "RADIANCE GROUP",
//         "RADIANCE KNITWEARS LTD.",
//         "RAHIM APPARELS",
//         "RAIHAN APPARELS LTD.",
//         "RAIYAN KNIT COMPOSITE LTD.",
//         "REEDISHA KNITEX LTD.",
//         "RENAISSANCE APPARELS LTD.",
//         "RIO FASHION WEAR LTD",
//         "ROBINTEX (BD) LIMITED",
//         "ROMO FASHION TODAY LTD.",
//         "S M KNITWEARS LIMITED",
//         "SAG FASHION LTD",
//         "SAIHAM KNIT COMPOSITE LTD.",
//         "SALEK TEXTILE LTD",
//         "SALES RETURN",
//         "SEAROCK APPARELS LTD.",
//         "SALES RETURN",
//         "SALES RETURN",
//         "SELF SHADE",
//         "SERA WHITW PN",
//         "SHAD FASHION LTD.",
//         "SHAGORE GARMENTS LIMITED",
//         "SHARMIN GROUP",
//         "SHASHA GARMENTS LIMITED.",
//         "SHEPHERD JEANS LT",
//         "SHINE EMBROIDERY LTD.",
//         "SIAM'S SUPERIOR LTD",
//         "SILK INTERNATIONAL LTD.",
//         "SILKEN SEWING LTD.",
//         "SKYLINE GROUP",
//         "SM KNITWEARS",
//         "SPARKLE KNIT COMPOSITE LTD.",
//         "SPEEDWELL",
//         "STERLING CREATIONS LIMITED",
//         "Stoffatex Fashions Ltd",
//         "STYLECRAFT LIMITED",
//         "STYLISH GARMENTS LTD.",
//         "SUMI APPARELS LTD",
//         "SUSTAINABLY TO0URS",
//         "TEXEUROP",
//         "Texpro Eco Apparels Ltd.",
//         "TEXTOWN LIMITED",
//         "THE NEW DELTA APPARELS LTD.",
//         "TNZ APPARELS LIMITED",
//         "TRIPLE APPARELS LTD",
//         "TROUSER LAND LIMITED",
//         "TRUST KNITWEAR INDUSTRIES LTD.",
//         "Turag Garments & Hosiery Mills Limited",
//         "TUSUKA GROUP",
//         "ULTIMATE FASHION LTD",
//         "URANUS",
//         "URMI GARMENTS LTD",
//         "VANGUARD",
//         "VANGUARD GARMENTS LTD",
//         "Venice Leather Goods Ltd.",
//         "VERSATILE ATTIRE LIMITED",
//         "VERTEX GROUP",
//         "VISION GROUP",
//         "WELL LORD KNIT WEARS LTD.",
//         "WINDY GROUP",
//         "Y & F HEALTHCARE LTD.",
//         "Z3 COMPOSITE KNITWEAR LTD.",
//         "GEARS GROUP",
//         "REAZ",
//         "SHAD KNITWEAR",
//         "UHM LIMITED.",
//         "UNISOURCE",
//         "RESTS POTS N PAPER NEXT BATCH",
//         "HDF APPARELS LTD.",
//         "ECHOTEX",
//         "TOTAL MERCHANDISING",
//         "AMTRANET GROUP",
//         "STYRAX FASHIONS LTD.",
//         "CROSSWEAR INDUSTRIES LTD.",
//         "HDF APPARELS LTD.",
//         "MINIMAX LTD.",
//         "AYESHA & GALEYA FASHIONS LTD.",
//         "LEATHEREX FOOTWEAR INDUSTRIES LTD.",
//         "PIONEER APPARELS LTD.",
//         "Al Jamali Trading Co LLC",
//         "PIONEER APPARELS LTD.",
//         "SAJIB FASHION WEAR LTD",
//     ]

// }


const GenerateLabRecipe = () => {
    const [todayDate, setTodayDate] = useState(new Date());
    const yearToday = todayDate.getFullYear().toLocaleString()
    const id = todayDate.getTime().toString()
    const [labCode, setLabCode] = useState(`${id}-${yearToday.slice(3, 5)}`);

    // get labdata from database
    const [labData, setLabdata] = useState([]);
    useEffect(() => {
        fetch("labdata.json")
            .then(res => res.json())
            .then(data => setLabdata(data[0]))
    }, [])


    // generate unique lab token for each color
    const handleRecipeToken = (e) => {
        e.preventDefault()

        //let create key for tokenIfo obje
        const tokenId = e.target.labCode.value
        const orderType = e.target.orderType.value
        const targetType = e.target.targetType.value
        const orderNo = e.target.orderNo.value
        const customer = e.target.customer.value
        const colorName = e.target.colorName.value
        const substrate = e.target.substrate.value
        const count = e.target.count.value
        const fastness = e.target.fastness.value
        const firstDye = e.target.firstDye.value
        const secondDye = e.target.secondDye.value
        const thirdDye = e.target.thirdDye.value
        const fourthDye = e.target.fourthDye.value
        const fifthDye = e.target.fifthDye.value
        const remarks = e.target.remarks.value


        // controll non selected fields
        if (orderType === "Select Type" || targetType === "Select Type" || customer === "Select Type" || substrate === "Select Type" || count === "Select Type" || fastness === "Select Type" || firstDye === "Select Dyes" || secondDye === "Select Dyes" || thirdDye === "Select Dyes") {
            return alert("Please select item from dropdown")
        } else if (tokenId && orderType && targetType && orderNo && customer && colorName && substrate && count && fastness && firstDye && secondDye && thirdDye) {
            const tokenInfo = { tokenId, orderType, targetType, orderNo, customer, colorName, substrate, count, fastness, firstDye, secondDye, thirdDye, fourthDye, fifthDye, remarks }
            console.log(tokenInfo);
        }

    }

    return (

        <section class="w-full p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Simtex Industries Ltd.</h2>
            <p>Lab Section</p>
            <small>{todayDate.toLocaleDateString()}</small>


            <form
                className='mt-8'
                onSubmit={handleRecipeToken}
            >
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="labCode">Lab Code</label>
                        <input id="labCode" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            value={`${labCode}`}
                            readOnly
                            name='labCode'
                            required
                        />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="orderType">Order Type</label>
                        <select class="select select-info w-full max-w-xs"
                            name="orderType"
                            required
                        >
                            <option disabled selected>Select Type</option>
                            {
                                labData?.orderType?.sort()?.map((item, index) =>
                                    <option
                                        key={index}
                                    >{item}</option>
                                )
                            }
                        </select>
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="targetType">Target Type</label>
                        <select class="select select-info w-full max-w-xs"
                            name='targetType'
                            required
                        >
                            <option disabled selected>Select Type</option>
                            {
                                labData?.targetType?.sort()?.map((item, index) =>
                                    <option
                                        key={index}
                                    >{item}</option>
                                )
                            }
                        </select>
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="orderNo">Order No</label>
                        <input id="orderNo" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            placeholder='Enter Order No'
                            name='orderNo'
                            required
                        />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="customer">Customers</label>
                        <select class="select select-info w-full max-w-xs"
                            name='customer'
                            required
                        >
                            <option disabled selected>Select Type</option>
                            {
                                labData?.customers?.sort()?.map((item, index) =>
                                    <option
                                        key={index}
                                    >{item}</option>
                                )
                            }
                        </select>
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="colorName">Color Name</label>
                        <input id="colorName" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            placeholder='Enter Color Name'
                            name='colorName'
                            required
                        />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="substrate">Substrate</label>
                        <select class="select select-info w-full max-w-xs"
                            name='substrate'
                            required
                        >
                            <option disabled selected>Select Type</option>
                            {
                                labData?.substrate?.sort()?.map((item, index) =>
                                    <option
                                        key={index}
                                    >{item}</option>
                                )
                            }
                        </select>
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="count">Count</label>
                        <select class="select select-info w-full max-w-xs"
                            name='count'
                            required
                        >
                            <option disabled selected>Select Type</option>
                            {
                                labData?.count?.sort()?.map((item, index) =>
                                    <option
                                        key={index}
                                    >{item}</option>
                                )
                            }
                        </select>
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="fastness">Fastness</label>
                        <select class="select select-info w-full max-w-xs"
                            name='fastness'
                            required
                        >
                            <option disabled selected>Select Type</option>
                            {
                                labData?.fastness?.sort()?.map((item, index) =>
                                    <option
                                        key={index}
                                    >{item}</option>
                                )
                            }
                        </select>
                    </div>

                </div>


                <div class="overflow-x-auto mt-12">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Dyes Name</th>
                                <th>Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            <tr>
                                <th>1</th>
                                <td>
                                    <select class="select select-info select-sm w-full max-w-xs"
                                        name='firstDye'
                                        required
                                    >
                                        <option disabled selected>Select Dyes</option>
                                        {
                                            labData?.dyesNames?.sort()?.map((item, index) =>
                                                <option
                                                    key={index}
                                                >{item}</option>
                                            )
                                        }
                                    </select>
                                </td>
                                <td>
                                    <input type="text" placeholder="%" class="input input-bordered input-info input-sm w-full max-w-xs" />
                                </td>
                            </tr>
                            {/* <!-- row 2 --> */}
                            <tr>
                                <th>2</th>
                                <td>
                                    <select class="select select-info select-sm w-full max-w-xs"
                                        name='secondDye'
                                        required
                                    >
                                        <option disabled selected>Select Dyes</option>
                                        {
                                            labData?.dyesNames?.sort()?.map((item, index) =>
                                                <option
                                                    key={index}
                                                >{item}</option>
                                            )
                                        }
                                    </select>
                                </td>
                                <td>
                                    <input type="text" placeholder="%" class="input input-bordered input-info input-sm w-full max-w-xs" />
                                </td>
                            </tr>
                            {/* <!-- row 3 --> */}
                            <tr>
                                <th>3</th>
                                <td>
                                    <select class="select select-info select-sm w-full max-w-xs"
                                        name='thirdDye'
                                        required
                                    >
                                        <option disabled selected>Select Dyes</option>
                                        {
                                            labData?.dyesNames?.sort()?.map((item, index) =>
                                                <option
                                                    key={index}
                                                >{item}</option>
                                            )
                                        }
                                    </select>
                                </td>
                                <td>
                                    <input type="text" placeholder="%" class="input input-bordered input-info input-sm w-full max-w-xs" />
                                </td>
                            </tr>
                            {/* <!-- row 4 --> */}
                            <tr>
                                <th>4</th>
                                <td>
                                    <select class="select select-info select-sm w-full max-w-xs"
                                        name='fourthDye'
                                    >
                                        <option disabled selected></option>
                                        {
                                            labData?.dyesNames?.sort()?.map((item, index) =>
                                                <option
                                                    key={index}
                                                >{item}</option>
                                            )
                                        }
                                    </select>
                                </td>
                                <td>
                                    <input type="text" placeholder="%" class="input input-bordered input-info input-sm w-full max-w-xs" />
                                </td>
                            </tr>
                            {/* <!-- row 5 --> */}
                            <tr>
                                <th>5</th>
                                <td>
                                    <select class="select select-info select-sm w-full max-w-xs"
                                        name='fifthDye'
                                    >
                                        <option disabled selected></option>
                                        {
                                            labData?.dyesNames?.sort()?.map((item, index) =>
                                                <option
                                                    key={index}
                                                >{item}</option>
                                            )
                                        }
                                    </select>
                                </td>
                                <td>
                                    <input type="text" placeholder="%" class="input input-bordered input-info input-sm w-full max-w-xs" />
                                </td>
                            </tr>
                            {/* <!-- Special Notes --> */}
                            <tr>
                                <label class="text-gray-700 dark:text-gray-200" for="remarks">
                                    <strong>Remarks</strong>
                                </label>
                                <td
                                    colSpan="4"
                                >
                                    <input type="text" placeholder="N.B :" class="input input-bordered input-info w-full"
                                        id='remarks'
                                        name='remarks'
                                    />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>


                <div class="flex justify-end mt-6">
                    <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </form>
        </section>
    );
};

export default GenerateLabRecipe;