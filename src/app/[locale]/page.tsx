import LocalSwitcher from "@/localSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Heading");
  return (
    <div>
      <h1 className="text-2xl">{t("title")}</h1>
      <LocalSwitcher />
    </div>
  );
}
