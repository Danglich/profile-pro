import { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        document.title = 'CONTACt || MIKIYA KOBAYASHI';
    }, []);

    return (
        <div className="w-full h-[calc(100vh-60px)] fixed  animate-[toTop_1s_ease-in-out] top-[0] bg-[rgba(0,0,0,0.8)] text-white">
            <div className="flex items-center h-full justify-center flex-col">
                <h1 className="uppercase font-[900] text-left text-[18px] mb-[30px]">
                    Contact
                </h1>
                <div className="flex flex-wrap max-sm:block">
                    <div className="w-[50%] pl-[16px] animate-[zoomOut_0.8s_ease-in] max-sm:w-[100%] max-sm:px-[0]">
                        <p className="mb-[24px] text-[18px] text-white">
                            For requests, information or comments, please
                            contact below.
                        </p>
                        <h1 className="uppercase font-[900] text-left text-[18px] ">
                            MIKIYA KOBAYASHI INC.
                        </h1>
                        <p className="text-[18px]">
                            5-28-8 Himonya Meguro-ku Tokyo 152-0003 JAPAN
                        </p>
                        <p className="text-[17px]">
                            Mail.{' '}
                            <span className="text-[#19a69a] hover:text-[#5BCDC3] cursor-pointer transition-colors duration-[250ms] ease-out">
                                joy@mikiyakobayashi.com
                            </span>
                        </p>
                    </div>
                    <div className="w-[50%] pr-[16px] animate-[zoomOut_0.8s_ease-in]  max-sm:w-[100%] max-sm:px-[0] max-sm:mt-[36px]">
                        <p className="">
                            ご依頼/お問い合わせは下記連絡先よりお願い致します。
                        </p>
                        <p className="mb-[24px]">
                            ご依頼の有無に関わらず、ご質問等ありましたらお気軽にご連絡ください。
                        </p>
                        <p>株式会社 小林幹也スタジオ</p>
                        <p>152-0003 東京都目黒区碑文谷5-28-8</p>
                        <p>Tel. +81-3-6421-3926</p>
                        <p className="text-[17px]">
                            Mail.{' '}
                            <span className="text-[#19a69a] hover:text-[#5BCDC3] cursor-pointer transition-colors duration-[250ms] ease-out">
                                joy@mikiyakobayashi.com
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
