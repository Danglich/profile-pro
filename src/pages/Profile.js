import { useEffect } from 'react';

function Profile() {
    useEffect(() => {
        document.title = 'PROFILE || MIKIYA KOBAYASHI';
    }, []);

    return (
        <div className="bg-[#f2f2f2]">
            <div className="text-center">
                <h1 className="relative inline-block cursor-pointer text-[18px] text-center px-[4px] py-[30px] text-black font-[800]">
                    EN
                    <span className="absolute h-[1px] bg-[black] w-[100%] top-[50%] left-[0]"></span>
                </h1>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-[1000px] flex max-md:block px-[50px]  max-md:px-[20px] py-[50px] bg-[white] mx-[auto] max-lg:w-[100%]"
            >
                <div className="w-[220px] shrink-0 max-md:w-[100%] max-md:flex max-md:justify-center  max-md:mb-[24px]">
                    <img
                        alt="ảnh"
                        src="http://www.mikiyakobayashi.com/common/img/profile/photo_mikiyakobayashi.jpg"
                    ></img>
                </div>
                <div>
                    <h1 className="text-[17px] font-[900] tracking-[2px] max-md:text-center  max-md:text-[19px]">
                        MIKIYA KOBAYASHI
                    </h1>
                    <p className="mb-[24px] text-[18px] font-[500]  max-md:text-center  max-md:text-[19px]">
                        Designer / Director
                    </p>
                    <p className="text-[18px] font-[500]">
                        Mikiya Kobayashi, born in Tokyo, in 1981, established
                        his own studio in 2006. Since his beginnings, Mikiya
                        Kobayashi's creation process was focused on the
                        perception of its designs, looking for uniqueness in
                        minimal shapes. Thanks to his inclination for natural
                        resources, wood has become one of the main material used
                        for his projects over the years. Kobayashi has been
                        always closely related to his cultural heritage,
                        connecting the tradition with new concepts,
                        manufacturing processes and technologies. His process,
                        always close to materials, and his challenging approach
                        have led the studio to work within a large variety of
                        projects, from industrial design products to furniture
                        and interior. Running together a design studio and
                        showroom/store, he has been able to get direct feedback
                        from customers about the products, which helped him to
                        keep on improving his design. Mikiya Kobayashi was born
                        in 1981, and graduated at Musashino Art University,
                        Tokyo in 2004. In 2005 he worked for FIELD FOUR DESIGN
                        OFFICE, one of the biggest interior design firm in
                        Japan. In 2006 he founded his studio in Tokyo and began
                        designing for wood products companies such as H CONCEPT
                        and DREAMY PERSON, where he started his own design brand
                        KIME. Later, he worked on several product designs for
                        LEMNOS and Timbre. In 2008, he collaborated with
                        KARIMOKU FURNITURE, wood furniture company active for
                        over 70 years in Japan, designing a furniture collection
                        named HARU. Since then, he started directing his own
                        brands for the japanese largest furniture companies
                        including FUJI FURNITURE, TAKUMI KOHGEI and TENDO MOKKO.
                        He also worked on furniture projects for MASTERWAL. In
                        2010, he received international design awards such as
                        the "IF Gold award" and the "Red dot design award". In
                        2011, he opened his shop "TAIYOU no SHITA" in Tokyo,
                        offering his own designs together with a curated
                        selection of furniture and products. In 2016 he launched
                        TAIYOU&C. a furniture brand for contract and home use,
                        where he invited international designers to collaborate
                        on the collection. More recent projects included the
                        design of a shoehorn collection for LEMNOS, a
                        radio/speaker for LEXON (France), a bistrot chair for
                        MAISON DRUCKER (France), a fabric collection for
                        AQUACLEAN (Spain) and a stool for DIABLA (Spain), a
                        GANDIABLASCO new brand. In 2018 he opened his second
                        studio in Valencia, to better connect with the
                        increasing number of european clients, and established
                        the lifestyle brand IMPLEMENTS, with the desire to
                        deliver products that enrich people's lives.
                    </p>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-[1000px] flex max-md:block mt-[20px] px-[50px]  max-md:px-[20px] py-[50px] bg-[white] mx-[auto] max-lg:w-[100%]"
            >
                <div className="w-[220px] shrink-0 max-md:w-[100%] max-md:flex max-md:justify-center  max-md:mb-[24px]">
                    <h1 className="uppercase text-[18px] max-sm:text-[20px] font-[900]">
                        Profile
                    </h1>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>1981</th>
                                <td>Born in Tokyo</td>
                            </tr>
                            <tr>
                                <th>2005</th>
                                <td>Graduated from MUSASHINO ART UNIVERSITY</td>
                            </tr>
                            <tr>
                                <th>2006</th>
                                <td>FIELD FOUR DESIGN OFFICE, Japan</td>
                            </tr>
                            <tr>
                                <th>2006</th>
                                <td>Established MIKIYA KOBAYASHI DESIGN</td>
                            </tr>
                            <tr>
                                <th>2011</th>
                                <td>Opened the store TAIYOU no SHITA</td>
                            </tr>
                            <tr>
                                <th>2012</th>
                                <td>
                                    Established MIKIYA KOBAYASHI INC. in Tokyo,
                                    Japan
                                </td>
                            </tr>
                            <tr>
                                <th>2016</th>
                                <td>Judge at Good Design Award</td>
                            </tr>
                            <tr>
                                <th>2018</th>
                                <td>
                                    Opened a design studio in Valencia, Spain
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 className="uppercase text-[18px] font-[900] mt-[20px] mb-[6px] tracking-[2px]">
                        LECTURER
                    </h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>2010</th>
                                <td>ICS COLLAGE OF ARTS / Adjunct lecturer</td>
                            </tr>
                            <tr>
                                <th>2014</th>
                                <td>MUSASHINO ART UNIVERSITY / Lecturer</td>
                            </tr>
                            <tr>
                                <th>2015</th>
                                <td>ICS COLLAGE OF ARTS / Adjunct lecturer</td>
                            </tr>
                            <tr>
                                <th>2017</th>
                                <td>
                                    TOKYO METROPOLITAN UNIVERSITY / Adjunct
                                    lecturer
                                </td>
                            </tr>
                            <tr>
                                <th>2018</th>
                                <td>
                                    TOKYO ZOKEI UNIVERSITY / Adjunct lecturer
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 className="uppercase text-[18px] font-[900] mt-[20px] mb-[6px] tracking-[2px]">
                        AWARD
                    </h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>2017</th>
                                <td>
                                    IF PRODUCT DESIGN AWARD 2017 (GERMANY) /
                                    Winner
                                </td>
                            </tr>
                            <tr>
                                <th>2014</th>
                                <td>GOOD DESIGN AWARD (JAPAN) / Winner</td>
                            </tr>
                            <tr>
                                <th>2013</th>
                                <td>
                                    ELLE DECOR YOUNG JAPANESE DESIGN TALENT 2013
                                    / Winner
                                </td>
                            </tr>
                            <tr>
                                <th>2012</th>
                                <td>Tokyo ADC Award / Winner</td>
                            </tr>
                            <tr>
                                <th>2011</th>
                                <td>
                                    Selected SPOTLIGHT 2011 DESIGNER by
                                    DESIGNNET
                                </td>
                            </tr>
                            <tr>
                                <th>2010</th>
                                <td>
                                    IF PRODUCT DESIGN AWARD 2010 (GERMANY) /
                                    Gold Award Winner red dot design award 2010
                                    (GERMANY) / Winner
                                </td>
                            </tr>
                            <tr>
                                <th>2008</th>
                                <td>
                                    International Furniture Design Competition
                                    Asahikawa 2008 (JAPAN) / Finalist Toyama
                                    Product Design Competition 2008 (JAPAN) /
                                    Grand Prix Winner 100% DESIGN TOKYO 2008
                                    (JAPAN) / 100% AWARD Winner
                                </td>
                            </tr>
                            <tr>
                                <th>2007</th>
                                <td>
                                    SaloneSatellite 2007 (ITALY) / DESIGN REPORT
                                    AWARD 2007 Finalist
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
                <div className="w-[1000px] max-md:text-center mt-[20px] flex max-md:block px-[50px]  max-md:px-[20px] py-[50px] bg-[white] mx-[auto] max-lg:w-[100%]">
                    <div className="w-[220px] shrink-0 max-md:w-[100%] max-md:flex max-md:justify-center  max-md:mb-[24px]">
                        <h1 className="uppercase text-[18px] max-sm:text-[20px] font-[900]">
                            COMPANY
                        </h1>
                    </div>
                    <div>
                        <h1 className="text-[17px] font-[900] tracking-[2px] max-md:text-center  max-md:text-[19px]">
                            MIKIYA KOBAYASHI INC.
                        </h1>
                        <p className="my-[4px] text-[18px] font-[500]  max-md:text-center  max-md:text-[19px]">
                            TOKYO OFFICE
                        </p>
                        <p className="font-[500] text-[17px]">
                            5-28-8 Himonya Meguro-ku Tokyo 152-0003 JAPAN
                        </p>
                        <p className="font-[500] text-[18px] mt-[20px]">
                            VALENCIA OFFICE
                        </p>
                        <p className="font-[500] text-[17px]">
                            Carre Dels Cavaliers, 46001 Valencia SPAIN
                        </p>
                        <p className="text-[#19a69a] text-[17px] hover:text-[#5BCDC3] cursor-pointer">
                            joy@mikiyakobayashi.com
                        </p>
                    </div>
                </div>
                <div className="w-[1000px] max-md:text-center  flex max-md:block px-[50px]  max-md:px-[20px] py-[50px] bg-[white] mx-[auto] max-lg:w-[100%]">
                    <div className="w-[220px] shrink-0 max-md:w-[100%] max-md:flex max-md:justify-center  max-md:mb-[24px]">
                        <h1 className="uppercase text-[18px] max-sm:text-[20px] font-[900]">
                            SHOP & SHOWROOM
                        </h1>
                    </div>
                    <div>
                        <h1 className="text-[17px] font-[900] tracking-[2px] max-md:text-center  max-md:text-[19px]">
                            IMPLEMENTS
                        </h1>
                        <p className="font-[500] text-[17px] py-[3px]">
                            5-28-8 Himonya Meguro-ku Tokyo 152-0003 JAPAN
                        </p>
                        <p className=" font-[500] text-[17px]">
                            URL .
                            <a
                                href="www.implements.jp"
                                className="text-[#19a69a] text-[17px] hover:text-[#5BCDC3] cursor-pointer"
                            >
                                www.implements.jp
                            </a>
                        </p>
                    </div>
                </div>
                <div className="w-[1000px]  flex max-md:block px-[50px]  max-md:px-[20px] py-[50px] bg-[white] mx-[auto] max-lg:w-[100%]">
                    <div className="w-[220px] shrink-0 max-md:w-[100%] max-md:flex max-md:justify-center  max-md:mb-[24px]">
                        <h1 className="uppercase text-[18px] max-sm:text-[20px] font-[900]">
                            STAFF
                        </h1>
                    </div>
                    <div>
                        <img
                            className="w-full"
                            alt="ảnh"
                            src="https://www.mikiyakobayashi.com/common/img/profile/mki_3922_all.jpg"
                        ></img>
                    </div>
                </div>
            </div>
            <div className="mt-[56px] pb-[28px]">
                <p className="font-[400] tracking-[2px] text-[15px] text-center">
                    © MIKIYA KOBAYASHI INC. All Rights Reserved.
                </p>
            </div>
        </div>
    );
}

export default Profile;
