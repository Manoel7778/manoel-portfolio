"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "en" ? (
        <div className="flex flex-col gap-4 max-sm:px-4">
          <p><strong>I am an RPA developer specialized in <span className="emoji">Automation Edge 🤖</span>, with experience in process automation using <span className="emoji">Python 🐍</span> and <span className="emoji">VBA</span>.</strong></p>
          <p>I have skills in <span className="emoji">TypeScript 💻</span>, <span className="emoji">JavaScript ⚡</span>, <span className="emoji">React.js ⚛️</span>, <span className="emoji">SQL 📊</span>, and system integration to optimize workflows <span className="emoji">🔄</span>.</p>
          <p>Currently, I work in <strong><span className="emoji">Nova Olímpia, Mato Grosso 🏙️</span></strong>, implementing innovative solutions for operational efficiency.</p>

          <p>Previously, I was an <strong><span className="emoji">IT Assistant 💼</span></strong>, gaining experience in development on <strong>Fluig</strong> and process automation with<span className="emoji">Node.js</span>, <span className="emoji">Python</span>, and <span className="emoji">JavaScript</span>.</p>

          <p>I also worked as an <strong><span className="emoji">IT Instructor 👨‍🏫</span></strong> for <strong>1 year and 8 months</strong>, teaching everything from basic computer skills to computer repair and network management <span className="emoji">🖥️</span>.</p>

          <p>I am passionate about technology and automation <span className="emoji">💡</span>, always seeking new solutions to optimize processes and deliver efficient results <span className="emoji">🚀</span>.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 max-sm:px-4">
          <p><strong>Sou desenvolvedor de RPA especializado em <span className="emoji">Automation Edge 🤖</span>, com experiência na automação de processos usando <span className="emoji">Python 🐍</span> e <span className="emoji">VBA</span>.</strong></p>
          <p>Tenho habilidades em <span className="emoji">TypeScript 💻</span>, <span className="emoji">JavaScript ⚡</span>, <span className="emoji">React.js ⚛️</span>, <span className="emoji">SQL 📊</span> e integração de sistemas para otimizar fluxos de trabalho <span className="emoji">🔄</span>.</p>
          <p>Atualmente, atuo em <strong><span className="emoji">Nova Olímpia, Mato Grosso 🏙️</span></strong>, implementando soluções inovadoras para eficiência operacional.</p>

          <p>Anteriormente, fui <strong><span className="emoji">Assistente de TI 💼</span></strong>, adquirindo experiência em desenvolvimento no <strong>Fluig</strong> e automação de processos com <span className="emoji">Node.js</span>, <span className="emoji">Python</span> e <span className="emoji">JavaScript</span>.</p>

          <p>Também atuei como <strong><span className="emoji">Professor de Informática 👨‍🏫</span></strong> por <strong>1 ano e 8 meses</strong>, ensinando desde fundamentos de informática até manutenção de computadores e redes <span className="emoji">🖥️</span>.</p>

          <p>Sou apaixonado por tecnologia e automação <span className="emoji">💡</span>, sempre buscando novas soluções para otimizar processos e entregar resultados eficientes <span className="emoji">🚀</span>.</p>
        </div>
      )}
    </motion.section>
  )
}
