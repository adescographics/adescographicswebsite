import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';

const logos: Record<string, string> = {
  vscode: "/icons/visualstudiocode.svg",
  figma: "/icons/figma.svg",
  photoshop: "/icons/adobephotoshop.svg",
  office: "/icons/microsoftoffice.svg",

  nextjs: "/icons/nextdotjs.svg",
  vite: "/icons/vite.svg",
  github: "/icons/github.svg",
  slack: "/icons/slack.svg",
  tailwind: "/icons/tailwindcss.svg",
  stripe: "/icons/stripe.svg",
  aws: "/icons/amazonaws.svg",
  docker: "/icons/docker.svg",

  obs: "/icons/obsstudio.svg",
  canva: "/icons/canva.svg",
  renderforest: "/icons/renderforest.svg",
  restream: "/icons/restream_logo.svg",
  cpanel: "/icons/cpanel.svg",
  blender: "/icons/blender.svg",
  malwarebytes: "/icons/malwarebytes.svg",
  rufus: "/icons/rufus.svg",
};

const tools = [
  { id: "vscode", name: "Visual Studio Code", category: "Development" },
  { id: "figma", name: "Figma", category: "Design" },
  { id: "photoshop", name: "Adobe Photoshop", category: "Design" },
  { id: "office", name: "Microsoft Office", category: "Productivity" },

  { id: "nextjs", name: "Next.js", category: "Framework" },
  { id: "vite", name: "Vite", category: "Build" },
  { id: "github", name: "GitHub", category: "Collaboration" },
  { id: "slack", name: "Slack", category: "Communication" },

  { id: "tailwind", name: "Tailwind CSS", category: "Design" },
  { id: "stripe", name: "Stripe", category: "Payments" },
  { id: "aws", name: "AWS", category: "Cloud" },
  { id: "docker", name: "Docker", category: "Infrastructure" },

  { id: "obs", name: "OBS Studio", category: "Media" },
  { id: "canva", name: "Canva", category: "Design" },
  { id: "renderforest", name: "Renderforest", category: "Media" },
  { id: "restream", name: "Restream", category: "Media" },

  { id: "cpanel", name: "cPanel", category: "Hosting" },
  { id: "blender", name: "Blender", category: "3D" },
  { id: "malwarebytes", name: "Malwarebytes", category: "Security" },
  { id: "rufus", name: "Rufus", category: "Utilities" },
];

export const metadata = {
  title: "Tools We Use - Adesco Graphics",
  description:
    "Explore the technologies and tools we use to build modern, scalable digital solutions.",
};

export default function ToolsPage() {
  return (
    <PageLayout>

      {/* Header */}
      <Container>
        <PageHeader
          eyebrow="Our Tools"
          title={
            <>
              Built with
              <br />
              <span className="text-muted-foreground">
                powerful tools.
              </span>
            </>
          }
          subtitle="We use industry-leading technologies to deliver fast, scalable, and high-quality digital experiences."
        />
      </Container>

      {/* Tools Grid */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">

            {tools.map((tool) => {
              const icon = logos[tool.id];

              return (
                <div
                  key={tool.id}
                  className="
                    group relative p-6 lg:p-8 rounded-2xl
                    border border-white/5
                    bg-white/[0.02]
                    backdrop-blur-xl
                    transition-all duration-500 ease-out
                    hover:scale-[1.03]
                    hover:bg-white/[0.04]
                  "
                >

                  {/* Inner glass highlight */}
                  <div className="
                    pointer-events-none absolute inset-0 rounded-2xl
                    bg-gradient-to-b from-white/[0.08] to-transparent
                    opacity-0 group-hover:opacity-100
                    transition duration-500
                  " />

                  {/* Category */}
                  <div className="absolute top-4 right-4">
                    <span className="
                      text-[10px] font-mono px-2 py-1 rounded-full
                      bg-white/5 text-white/60 uppercase tracking-wide
                    ">
                      {tool.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">
                    {icon ? (
                      <img
                        src={icon}
                        alt={tool.name}
                        className="
                          w-10 h-10 object-contain
                          opacity-90 group-hover:opacity-100
                          transition duration-300
                          brightness-0 invert
                        "
                        loading="lazy"
                        draggable={false}
                      />
                    ) : (
                      <div className="
                        w-10 h-10 rounded-lg
                        bg-white/5
                        flex items-center justify-center
                        text-white/60 text-xs
                      ">
                        {tool.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="
                    font-medium text-white text-lg
                    tracking-tight
                    leading-tight
                  ">
                    {tool.name}
                  </h3>

                </div>
              );
            })}

          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <div className="text-center">

            <h2 className="
              text-4xl lg:text-5xl font-display
              tracking-tight
              mb-6
            ">
              Want us to build with these tools?
            </h2>

            <p className="
              text-xl text-muted-foreground
              mb-8 max-w-2xl mx-auto
            ">
              Let’s create something modern, scalable, and beautiful together.
            </p>

            <a
              href="/contact"
              className="
                group inline-flex items-center gap-2
                px-6 py-3 rounded-lg
                bg-white/5 hover:bg-white/10
                text-white font-medium
                transition-all duration-300 ease-out
                backdrop-blur
              "
            >
              Start a project
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>

          </div>
        </Container>
      </section>

    </PageLayout>
  );
}