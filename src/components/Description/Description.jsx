import { PiCoffeeDuotone } from "react-icons/pi";
import css from "../Description/Description.module.css"

export default function Description() {
  return (
    <div>
      <h1 className={css.title}>
        Sip Happens Café
        <PiCoffeeDuotone size={35} />
      </h1>
      <p className={css.descr}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}