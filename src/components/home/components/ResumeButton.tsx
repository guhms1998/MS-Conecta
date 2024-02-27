import LocalConfig from "@/constants/config";
import Link from "next/link";
import { faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[12rem]"
      href="https://onedrive.live.com/embed?resid=AFE88173A9912D37%2149037&amp;authkey=!AL2Scz2iKgorZSM&amp;em=2&amp;wdAr=1.7777777777777777"
      target="_blank" >
      Apresentação da MS
      <FontAwesomeIcon
        icon={faFilePowerpoint}
        size="1x"
        className="whatsapp-icon"
        style={{ marginLeft: "5px" }}
      />
    </Link>
    
  );
};

export default ResumeButton;
