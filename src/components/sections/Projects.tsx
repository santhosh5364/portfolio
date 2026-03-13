import { useRef } from "react"
import {
  Rocket,
  CheckCircle2,
  Globe,
  Clock,
  Container,
  Hammer,
  Server,
  Shield,
  ArrowRight,
  Blocks,
  ToggleRight,
} from "lucide-react"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { resumeProjects } from "@/data/resume"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

function DeploymentCard({
  name,
  description,
  highlights,
  platforms,
  architecture,
}: {
  name: string
  description: string
  highlights: string[]
  platforms?: string[]
  architecture?: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:border-green-500/30">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-muted/50">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/20 text-green-500">
          <Rocket className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            <Badge className="bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30 text-xs">
              <Globe className="h-3 w-3 mr-1" />
              Production
            </Badge>
            {architecture && (
              <Badge className="bg-ai-accent-500/20 text-ai-accent-500 border-ai-accent-500/30 text-xs font-mono">
                {architecture}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
        </div>
      </div>

      {platforms && platforms.length > 0 && (
        <div className="px-5 py-3 border-b border-border bg-muted/30 flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-mono mr-1">platforms:</span>
          {platforms.map((platform) => (
            <Badge key={platform} variant="secondary" className="text-xs font-mono">
              {platform}
            </Badge>
          ))}
        </div>
      )}

      <div className="px-5 py-3 border-b border-border bg-muted/30 flex items-center gap-4 text-xs text-muted-foreground font-mono">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          All checks passed
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          Deployed
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Release Notes
        </p>
        <ul className="space-y-2">
          {highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500/70" />
              <span className="text-muted-foreground leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const deployStages = [
  {
    icon: <Blocks className="h-5 w-5" />,
    label: "Terraform",
    description: "Provision and manage cloud infrastructure as code — VPCs, EC2 instances, RDS databases, and networking via declarative HCL configs",
    color: "text-indigo-500",
    bg: "bg-indigo-500/15",
    border: "border-indigo-500/30",
  },
  {
    icon: <Hammer className="h-5 w-5" />,
    label: "Jenkins Build",
    description: "Jenkins CI triggers on merge to main, runs test suites, and builds a tagged Docker image",
    color: "text-yellow-500",
    bg: "bg-yellow-500/15",
    border: "border-yellow-500/30",
  },
  {
    icon: <Container className="h-5 w-5" />,
    label: "Docker Image",
    description: "Multi-stage Dockerfile optimizes build — pushes tagged image to container registry",
    color: "text-blue-500",
    bg: "bg-blue-500/15",
    border: "border-blue-500/30",
  },
  {
    icon: <Server className="h-5 w-5" />,
    label: "SSH Deploy",
    description: "Jenkins SSHs into production server, pulls latest Docker image, and performs rolling restart",
    color: "text-purple-500",
    bg: "bg-purple-500/15",
    border: "border-purple-500/30",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    label: "Nginx Proxy",
    description: "Nginx reverse proxy handles SSL/TLS, gzip, caching, and load balances across containers",
    color: "text-green-500",
    bg: "bg-green-500/15",
    border: "border-green-500/30",
  },
  {
    icon: <ToggleRight className="h-5 w-5" />,
    label: "Flipt",
    description: "Feature flag management for safe, gradual rollouts — toggle features per tenant or user segment without redeploying",
    color: "text-orange-500",
    bg: "bg-orange-500/15",
    border: "border-orange-500/30",
  },
]

function DeploymentPipeline() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm mb-8">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-muted/50">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ai-accent-500/20 text-ai-accent-500">
          <Rocket className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground font-mono">deployment_pipeline.yml</h3>
          <p className="text-xs text-muted-foreground">Terraform &rarr; Jenkins &rarr; Docker &rarr; SSH &rarr; Nginx &rarr; Flipt</p>
        </div>
        <Badge className="ml-auto bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30 text-xs">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          Live
        </Badge>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-center gap-1 md:gap-3 mb-8 flex-wrap">
          {deployStages.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-1 md:gap-3">
              <div className={cn("flex items-center gap-2 rounded-full border px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-mono font-semibold", stage.bg, stage.border, stage.color)}>
                <CheckCircle2 className="h-3.5 w-3.5" />
                {stage.label}
              </div>
              {i < deployStages.length - 1 && (
                <ArrowRight className="h-4 w-4 text-muted-foreground hidden md:block" />
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deployStages.map((stage) => (
            <div key={stage.label} className={cn("rounded-lg border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md", stage.border, stage.bg)}>
              <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg mb-3", stage.bg, stage.color)}>
                {stage.icon}
              </div>
              <h4 className={cn("text-sm font-semibold mb-1", stage.color)}>{stage.label}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 py-3 border-t border-border bg-muted/30">
        <div className="terminal-bg rounded-lg p-4 font-mono text-xs space-y-1">
          <p><span className="text-green-400">$</span> <span className="text-white/80">terraform plan -out=tfplan</span></p>
          <p className="text-indigo-400">Plan: 3 to add, 1 to change, 0 to destroy</p>
          <p><span className="text-green-400">$</span> <span className="text-white/80">terraform apply tfplan</span></p>
          <p className="text-green-400">Apply complete! Resources: 3 added, 1 changed</p>
          <p><span className="text-green-400">$</span> <span className="text-white/80">jenkins build --tag v2.4.1 --push registry</span></p>
          <p className="text-yellow-400">Building Docker image... multi-stage build</p>
          <p className="text-green-400">Image pushed: registry/corksy:v2.4.1</p>
          <p><span className="text-green-400">$</span> <span className="text-white/80">ssh deploy@prod &quot;docker pull registry/corksy:v2.4.1 &amp;&amp; docker-compose up -d&quot;</span></p>
          <p className="text-blue-400">Pulling latest image... Rolling restart</p>
          <p><span className="text-green-400">$</span> <span className="text-white/80">nginx -t &amp;&amp; systemctl reload nginx</span></p>
          <p className="text-green-400">nginx: configuration file test is successful</p>
          <p><span className="text-green-400">$</span> <span className="text-white/80">flipt flag enable checkout-v2 --segment=beta-testers</span></p>
          <p className="text-orange-400">Flag &quot;checkout-v2&quot; enabled for segment &quot;beta-testers&quot;</p>
          <p className="text-green-400">Deployment complete <span className="animate-blink">_</span></p>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <Section
      ref={ref}
      id="projects"
      className={cn(
        "relative transition-all duration-700 overflow-hidden",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="absolute inset-0 bg-grid-lines opacity-30" aria-hidden />
      <div className="glow-orb glow-orb--accent animate-float w-[200px] h-[200px] -top-16 right-1/4" aria-hidden />
      <div className="glow-orb glow-orb--primary animate-float-delayed w-[180px] h-[180px] bottom-0 -left-12" aria-hidden />
      <div className="relative z-10">
        <DeploymentPipeline />

        <Separator className="my-8" />

        <div className="space-y-6">
          {resumeProjects.map((project) => (
            <DeploymentCard
              key={project.name}
              name={project.name}
              description={project.description}
              highlights={project.highlights}
              platforms={project.platforms}
              architecture={project.architecture}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export { Projects }
