import { motion } from "framer-motion";
import { Heart, Users, Target, Lightbulb, Sparkles, Code, Zap } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title="About Us"
        description="Learn about PROJECT LIGHT's origin story, mission, and the problems we solve in global social giving."
        canonical="https://projectlight.com/about"
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">PROJECT LIGHT</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Born from a moment of compassion, built to create lasting change
          </p>
        </motion.div>

        {/* Origin Story */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-glow">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Why This Idea Started</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I met a deaf senior student struggling to pay his education fees. He used sign
                  language and a handwritten note because he couldn't speak—going from college to
                  college, asking for help.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  There was no system to support him. No organised network. No trusted platform
                  where his genuine need could be heard.
                </p>
              </div>
            </motion.div>

            <GlassCard delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Limited Resources</h3>
                    <p className="text-muted-foreground">
                      I could give only a small amount because I'm also a student with limited means.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lasting Guilt</h3>
                    <p className="text-muted-foreground">
                      The guilt stayed with me long after that moment—knowing I couldn't do more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Hidden Struggles</h3>
                    <p className="text-muted-foreground">
                      Many people face the same struggles but remain invisible, with no way to reach
                      those who could help.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">The Problems We Solve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Addressing the gaps in social giving and support systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "No Organised System",
                description: "There's no dedicated place for genuine individuals in need to reach trusted donors safely and transparently."
              },
              {
                title: "NGOs Lack Visibility",
                description: "Charities and NGOs struggle to gain attention and funding without proper platforms to showcase their missions."
              },
              {
                title: "Donors Don't Trust",
                description: "People want to help but hesitate due to random messages, unknown links, and fear of fraud."
              },
              {
                title: "No Unified Platform",
                description: "There's no dedicated social network built entirely around verified support, transparency, and real impact."
              }
            ].map((problem, index) => (
              <GlassCard key={problem.title} delay={index * 0.1}>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* What Project Light Is */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl p-12 text-white text-center shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-6">What PROJECT LIGHT Is</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              PROJECT LIGHT is a social platform similar to Instagram and LinkedIn—but focused
              entirely on social good. People in need, NGOs, compassionate donors, and communities
              connect in one transparent, trusted space where every case is verified and every
              story is real.
            </p>
          </motion.div>
        </section>

        {/* Founder Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Meet the Founder</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The visionary behind PROJECT LIGHT
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Founder Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Hi, I'm Ayaan Siddique
                    </h3>
                    <p className="text-lg text-secondary font-semibold mb-1">Founder & Community Builder</p>
                    <p className="text-muted-foreground">18 years old | B.E. Student in CSE (IoT)</p>
                  </div>

                  <div className="border-t border-primary/20 pt-6">
                    <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      My Vision
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      I want to create a world where compassion meets technology—where every person in need has a voice, 
                      every donor can make a verified impact, and every community can thrive through transparent, 
                      trust-based connections. I believe we can do better.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-primary flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      What I Do
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">IoT & Embedded Systems</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">Full Stack Development</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Community Building</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">Social Impact</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-primary flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      My Mission
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      I believe technology should serve humanity. By combining my passion for innovation 
                      with deep empathy for social causes, I'm building PROJECT LIGHT to bridge the gap between 
                      those who need help and those who want to help. This is my life's work.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Founder Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <GlassCard>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">My Turning Point</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I met a deaf senior student struggling to find help. He used sign language and a handwritten note, 
                      going from college to college asking for support. That moment changed everything for me. 
                      I realized the world needs a better system.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">My Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I built PROJECT LIGHT—combining my technical skills with my passion for social impact. 
                      It's not just code; it's my mission to make giving transparent, verified, and truly impactful. 
                      I want to help people like that student find support when they need it most.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">My Community</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm building a global community of changemakers, donors, and innovators who believe 
                      that technology can create real, measurable social impact. Together, we can change the world.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* Helpora Connection */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-secondary via-primary to-accent rounded-3xl p-12 text-white text-center shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-6">Powered by Helpora</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-6">
              PROJECT LIGHT is not the platform itself. The platform is <strong>Helpora - Connecting Humanity</strong>, 
              a comprehensive ecosystem designed to empower social initiatives worldwide.
            </p>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto opacity-90">
              Helpora serves as the foundational infrastructure that powers PROJECT LIGHT and other social good initiatives, 
              ensuring verified connections, transparent giving, and real-world impact across the globe.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;
