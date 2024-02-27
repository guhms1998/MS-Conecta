import Link from "next/link";
import Strings from "@/constants/strings";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TalkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[12rem]"
      href={"https://wa.me/+5511964246388"}
      target="_blank"

    >
      Vamos Conversar!   {" "}
      
      <FontAwesomeIcon
        icon={faWhatsapp}
        size="1x"
        className="whatsapp-icon"
        style={{ marginLeft: "5px" }}
      />
    </Link>
  );
};

export default TalkButton;
