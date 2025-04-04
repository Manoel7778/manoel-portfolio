"use client"

import { IoLanguageOutline } from "react-icons/io5"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

export default function LanguageSwitch() {
  const localActive = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const onChangeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextLocale = localActive === "en" ? "pt" : "en"
    const newPath = pathname.replace(/^\/(en|pt)/, `/${nextLocale}/`)
    router.replace(newPath, {
      scroll: false,
    })
  }

  return (
    <>
      <button
        onClick={onChangeLanguage}
        className="w-[2.5rem] h-[2.5rem] bg-opacity-80 flex items-center justify-center gap-1 transition-all "
      >
        <span className="sr-only">Mudar Linguagem</span>
        {/* <IoLanguageOutline /> */}

        <span className="text-sm hover:scale-[1.15] active:scale-105 transition-all">
          {" "}
          {localActive == "en" ? "EN" : "PT"}
        </span>
      </button>
    </>
  )
}
