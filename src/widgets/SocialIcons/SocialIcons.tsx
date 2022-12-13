import React, {FC} from "react";
import cls from "./socialsIcons.module.scss";

import {ReactComponent as TelegramSvg} from "../../app/assets/icons/socials/telegram.svg";
import {ReactComponent as VkSvg} from "../../app/assets/icons/socials/vk.svg";
import {ReactComponent as FacebookSvg} from "../../app/assets/icons/socials/facebook-outline.svg";
import {ReactComponent as WhatsAppSvg} from "../../app/assets/icons/socials/whats-app.svg";
import {ReactComponent as ViberSvg} from "../../app/assets/icons/socials/viber.svg";

interface SocialIconsTypes {
    classNameStyle?: string | undefined
}

export const SocialsIcons:FC <SocialIconsTypes> = () => {
    return (
        <div className={cls.social}>
            <a className={cls.social__link} href="src/widgets/SocialIcons/SocialIcons#">
                <VkSvg />
            </a>
            <a className={cls.social__link} href="src/widgets/SocialIcons/SocialIcons#">
                <FacebookSvg />
            </a>
            <a className={cls.social__link} href="src/widgets/SocialIcons/SocialIcons#">
                <ViberSvg />
            </a>
            <a className={cls.social__link} href="src/widgets/SocialIcons/SocialIcons#">
                <TelegramSvg />
            </a>
            <a className={cls.social__link} href="src/widgets/SocialIcons/SocialIcons#">
                <WhatsAppSvg />
            </a>
        </div>
    );
}