import { useRef } from "react"
import { Section } from "@/components/ui/section"
import { contactLinks } from "@/data/contact"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <Section
      ref={ref}
      id="contact"
      className={cn(
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="terminal-bg rounded-xl border border-border overflow-hidden shadow-lg max-w-2xl mx-auto">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-3 text-xs text-white/40 font-mono">terminal — contact</span>
        </div>
        <div className="p-5 md:p-6 font-mono text-sm space-y-4">
          <div>
            <p>
              <span className="text-green-400">$</span>{" "}
              <span className="text-white/80">echo &quot;Let&apos;s connect!&quot;</span>
            </p>
            <p className="text-white/60 mt-1">
              Open to opportunities and collaboration. Reach out anytime.
            </p>
          </div>

          <div>
            <p>
              <span className="text-green-400">$</span>{" "}
              <span className="text-white/80">cat contact.json</span>
            </p>
            <div className="mt-2 pl-2 border-l-2 border-white/10 space-y-1">
              <p className="text-white/40">{"{"}</p>
              <p>
                {"  "}<span className="text-purple-400">&quot;email&quot;</span>
                <span className="text-white/40">: </span>
                <a
                  href={contactLinks.email}
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                >
                  &quot;{contactLinks.email.replace("mailto:", "")}&quot;
                </a>
              </p>
              <p>
                {"  "}<span className="text-purple-400">&quot;linkedin&quot;</span>
                <span className="text-white/40">: </span>
                <a
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                >
                  &quot;{contactLinks.linkedin}&quot;
                </a>
              </p>
              <p>
                {"  "}<span className="text-purple-400">&quot;github&quot;</span>
                <span className="text-white/40">: </span>
                <a
                  href={contactLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                >
                  &quot;{contactLinks.github}&quot;
                </a>
              </p>
              <p className="text-white/40">{"}"}</p>
            </div>
          </div>

          <p>
            <span className="text-green-400">$</span>{" "}
            <span className="animate-blink text-green-400">_</span>
          </p>
        </div>
      </div>
    </Section>
  )
}

export { Contact }
