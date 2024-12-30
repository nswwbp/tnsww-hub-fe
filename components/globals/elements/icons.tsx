import { IIconProps } from "@/@types/elements";
import {
  BiMessageSquareError,
  BiShareAlt,
  BiTransferAlt,
} from "react-icons/bi";
import { BsPersonFillGear, BsPersonGear, BsThreeDots } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaDownload,
  FaEnvelopeOpenText,
  FaExternalLinkAlt,
  FaFacebook,
  FaInfo,
  FaLinkedin,
  FaPhoneAlt,
  FaPinterest,
  FaPlusCircle,
  FaPrint,
  FaRegAddressCard,
  FaRegCheckCircle,
  FaRegCreditCard,
  FaRegEdit,
  FaRegEnvelope,
  FaRegEye,
  FaRegFileImage,
  FaRegFilePdf,
  FaSearch,
  FaShip,
  FaTiktok,
  FaUserCircle,
  FaUsers,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowSwitch, GoHeart, GoHeartFill } from "react-icons/go";
import { GrLike } from "react-icons/gr";
import {
  IoDocumentAttachOutline,
  IoShieldCheckmarkOutline,
  IoShieldCheckmarkSharp,
} from "react-icons/io5";
import { LuInstagram, LuLayoutDashboard, LuShip } from "react-icons/lu";
import {
  MdBookmarkRemove,
  MdClose,
  MdDeleteOutline,
  MdDoneAll,
  MdMenu,
  MdOutlineAlternateEmail,
  MdOutlineBookmarkAdd,
  MdOutlineBusinessCenter,
  MdOutlineLogout,
  MdOutlineMyLocation,
  MdOutlinePendingActions,
  MdOutlineRadioButtonUnchecked,
  MdOutlineRequestQuote,
  MdOutlineShoppingCartCheckout,
  MdOutlineWhatsapp,
  MdRadioButtonChecked,
} from "react-icons/md";
import { PiShippingContainer, PiShippingContainerFill } from "react-icons/pi";
import {
  TbConfetti,
  TbFileTypeDoc,
  TbLayoutDashboardFilled,
  TbReload,
  TbSettings,
} from "react-icons/tb";
import { TiArrowBack, TiArrowForward, TiTicket } from "react-icons/ti";

export const IconInstance = ({
  Icon,
  iconSize,
  iconColor,
  customClass,
}: IIconProps) => {
  return (
    <Icon
      size={iconSize ?? 20}
      color={iconColor ?? `var(--black)`}
      className={customClass}
    />
  );
};

export const commonIcons = {
  //general icons
  menuIcon: MdMenu,
  plusIcon: FaPlusCircle,
  calendar: FaCalendarAlt,
  externalLink: FaExternalLinkAlt,
  user: FaUserCircle,
  usersicon: FaUsers,
  email: FaRegEnvelope,
  subject: FaEnvelopeOpenText,
  phone: FaPhoneAlt,
  altemail: MdOutlineAlternateEmail,
  location: MdOutlineMyLocation,
  lefticon: TiArrowBack,
  righticon: TiArrowForward,
  closeicon: MdClose,
  checkicon: FaCheckCircle,
  uncheckedicon: FaRegCheckCircle,
  bookmarkedicon: MdBookmarkRemove,
  notbookmarkedicon: MdOutlineBookmarkAdd,
  success: TbConfetti,
  error: BiMessageSquareError,
  info: FaInfo,
  actionstoggleicon: BsThreeDots,
  imageicon: FaRegFileImage,
  business: MdOutlineBusinessCenter,
  creditcardicon: FaRegCreditCard,
  downloadicon: FaDownload,
  updateicon: FaRegEdit,
  deleteicon: MdDeleteOutline,
  uncheckedradio: MdOutlineRadioButtonUnchecked,
  checkedradio: MdRadioButtonChecked,
  searchicon: FaSearch,
  reloadicon: TbReload,
  printicon: FaPrint,
  RegAddressCard: FaRegAddressCard,
  settingsicon: TbSettings,
  revealicon: FaRegEye,
  activatedicon: IoShieldCheckmarkSharp,
  deactivatedicon: IoShieldCheckmarkOutline,

  pendingicon: MdOutlinePendingActions,
  transactionicon: BiTransferAlt,
  completeicon: MdDoneAll,
  shippingicon: FaShip,
  clearingicon: PiShippingContainer,
  altshippingicon: LuShip,
  switchicon: GoArrowSwitch,

  //commerce icons
  moneybill: MdOutlineRequestQuote,
  checkouticon: MdOutlineShoppingCartCheckout,
  ticketIcon: TiTicket,

  //documents and attachments
  pdfIcon: FaRegFilePdf,
  docIcon: TbFileTypeDoc,
  attachmentIcon: IoDocumentAttachOutline,

  //dashboard icons
  dashboardicon: LuLayoutDashboard,
  activedashboardicon: TbLayoutDashboardFilled,
  activeshippingicon: LuShip,
  activeclearingicon: PiShippingContainerFill,
  settingicon: BsPersonGear,
  activesettingicon: BsPersonFillGear,
  logouticon: MdOutlineLogout,

  //social icons:
  facebookIcon: FaFacebook,
  instagramIcon: LuInstagram,
  linkedInIcon: FaLinkedin,
  tiktokIcon: FaTiktok,
  pinterestIcon: FaPinterest,
  whatsAppIcon: FaWhatsapp,
  xIcon: FaXTwitter,
  ytIcon: FaYoutube,
  likeIcon: GrLike,
  shareIcon: BiShareAlt,
  wishlistIcon: GoHeart,
  wishlistinIconChecked: GoHeartFill,
};
