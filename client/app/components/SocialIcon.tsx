import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconName,
  IconPrefix,
  library,
} from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab);
library.add(fas as any);

interface ISocialIcon {
  icon: IconName;
  link: string;
  style: string;
  type: IconPrefix;
}

export const SocialIcon = ({ icon, type, link, style }: ISocialIcon) => (
  <Link href={link} className={style} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={[`${type}`, `${icon}`]} />
  </Link>
);
