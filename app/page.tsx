import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Linkedin,
  Calendar,
  BookOpen,
  Plane,
  MapPin,
  Phone,
  GraduationCap,
  Award,
  Waves,
  Camera,
  Globe,
} from "lucide-react"

export default function CSMIntroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">Customer Success Manager</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-blue-400">Hanna Dreyer</span>
                <br />
                <span className="text-2xl md:text-4xl text-gray-300">Your Future Success Partner</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                With a PhD in Knowledge Management in Software Development Projects and extensive experience at
                Atlassian, I help developers and teams unlock their full potential on the Vercel platform, turning
                ambitious ideas into successful digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 mb-8 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Munich, Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+49 (0)172 83 60 880</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>dreyer.hanna@gmail.com</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="https://calendar.app.google/gSgC8G7JAtDFxVTz7" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Call
                  </a>
                </Button>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="mailto:dreyer.hanna@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-80 rounded-3xl border-4 border-white/20 overflow-hidden bg-gradient-to-br from-white to-gray-100 shadow-2xl">
                <img
                  src="/images/profile-photo.jpg"
                  alt="Hanna Dreyer - CSM at Vercel"
                  className="w-full h-full object-cover filter brightness-110 contrast-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">More Than Just a CSM</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Professional Journey</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Currently serving as a trusted advisor to Atlassian customers since January 2023, I bring a unique
                  blend of academic rigor and practical expertise. With a PhD in Knowledge Management in Software
                  Development Projects focusing on 'Tacit Knowledge in Software Development Projects', I understand both
                  the technical complexities and human dynamics of successful software implementations.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  My experience spans from leading teams of IT consultants at imc AG to teaching E-Commerce and Digital
                  Business at ISM. I've successfully managed enterprise client relationships, achieving 88% billable
                  time utilization and driving strategic digital transformation initiatives.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Customer Success</Badge>
                  <Badge variant="secondary">Strategic Engagement</Badge>
                  <Badge variant="secondary">Team Leadership</Badge>
                  <Badge variant="secondary">Digital Transformation</Badge>
                  <Badge variant="secondary">Project Management</Badge>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fluent in German (mother tongue), English (native level), and French (professional proficiency), I
                  effectively communicate with diverse international teams and stakeholders across multiple markets.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Personal Passions</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  When I'm not driving success, you'll find me pursuing my passions that keep me energized and inspired.
                  I believe that diverse experiences outside of work make me a better professional and more empathetic
                  partner to my clients.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-600">
                    <Waves className="h-5 w-5 text-blue-600" />
                    <div>
                      <span className="font-medium">Swimming Enthusiast</span>
                      <p className="text-sm">Training for a 2.2km lake crossing in August 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <Plane className="h-5 w-5 text-green-600" />
                    <div>
                      <span className="font-medium">Travel Explorer</span>
                      <p className="text-sm">Capturing moments from around the world</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                    <div>
                      <span className="font-medium">Continuous Learner</span>
                      <p className="text-sm">Published researcher in knowledge management</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <Camera className="h-5 w-5 text-orange-600" />
                    <div>
                      <span className="font-medium">Photo Enthusiast</span>
                      <p className="text-sm">Capturing life's beautiful moments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swimming Challenge Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Waves className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Swimming Challenge</h2>
            <p className="text-xl text-gray-600 mb-8">
              This August, I'm taking on a personal challenge that mirrors my professional approach: setting ambitious
              goals and achieving them through dedication and strategic planning.
            </p>
            <Card className="max-w-2xl mx-auto border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">2.2km Ammersee Crossing</h3>
                <p className="text-gray-600 mb-6">
                  Swimming across Ammersee requires the same qualities I bring to customer success: endurance, strategic
                  planning, and the ability to stay focused on the end goal even when the waters get rough.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">2.2</div>
                    <div className="text-sm text-gray-600">Kilometers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">Aug</div>
                    <div className="text-sm text-gray-600">2025</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">1st</div>
                    <div className="text-sm text-gray-600">Attempt</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Travel Gallery Section */}

      {/* Professional Experience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Professional Experience</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              A track record of driving customer success across enterprise organizations.
            </p>

            <div className="space-y-8">
              {/* Atlassian */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">Atlassian</h3>
                      <p className="text-blue-600 font-medium">Customer Success Manager</p>
                      <p className="text-gray-600">Munich, DE (Remote)</p>
                    </div>
                    <div className="text-gray-600 mt-2 md:mt-0">
                      <p className="font-medium">01.2023 - Present</p>
                      <p className="text-sm">Strategic Engagement Manager (01.2023 - 04.2023)</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Strategically focused on driving success with the Atlassian platform and maximizing customer
                      value throughout their lifecycle
                    </li>
                    <li>
                      • Led collaboration with account teams to develop comprehensive joint success plans, ensuring
                      alignment of business strategies
                    </li>
                    <li>
                      • Directed post-sales activities by cultivating strong customer relationships and leveraging
                      extensive product expertise
                    </li>
                    <li>
                      • Served as the Voice of the Customer, providing strategic internal feedback to enhance services
                      for enterprise clients
                    </li>
                    <li>
                      • Co-developed comprehensive long-term strategic engagement and adoption roadmaps with clients
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* imc AG */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">imc AG</h3>
                      <p className="text-blue-600 font-medium">Senior Manager & Team Lead</p>
                      <p className="text-gray-600">Munich, DE</p>
                    </div>
                    <div className="text-gray-600 mt-2 md:mt-0">
                      <p className="font-medium">03.2020 - 12.2022</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Led a team of six IT consultants, overseeing project planning, mentoring, and support</li>
                    <li>
                      • Directed high-impact projects, achieving 88% billable time utilization through streamlined
                      processes
                    </li>
                    <li>
                      • Provided expert customer support during transitions from on-premise systems to cloud
                      environments
                    </li>
                    <li>• Managed comprehensive rollout projects, ensuring timely and successful implementation</li>
                    <li>
                      • Offered strategic support for clients' digitization initiatives, enhancing digital
                      transformation efforts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* ISM */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">ISM</h3>
                      <p className="text-blue-600 font-medium">Lecturer</p>
                      <p className="text-gray-600">Munich, DE</p>
                    </div>
                    <div className="text-gray-600 mt-2 md:mt-0">
                      <p className="font-medium">09.2019 - 03.2021</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Taught E-Commerce, E-Business, and Digital Value Creation Networks</li>
                    <li>• Supported students in exam preparation and provided constructive feedback</li>
                    <li>• Led discussions on innovative approaches to creating value in the digital economy</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education & Qualifications</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  Education
                </h3>
                <div className="space-y-6">
                  <Card className="border-l-4 border-l-blue-600">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg">Doctor of Philosophy (PhD)</h4>
                      <p className="text-blue-600 font-medium">University of Gloucestershire, UK</p>
                      <p className="text-gray-600 text-sm mb-2">09.2012 - 10.2018</p>
                      <p className="text-gray-700 font-medium">'Tacit Knowledge in a Software Development Project'</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Examining software implementation through participant observation, with qualitative evaluation
                        of expert knowledge models.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-600">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg">Master of Science (MSc)</h4>
                      <p className="text-green-600 font-medium">SKEMA Business School, Paris, FR</p>
                      <p className="text-gray-600 text-sm mb-2">03.2010 - 06.2012</p>
                      <p className="text-gray-700 font-medium">
                        Project & Programme Management and Business Development
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        <Badge variant="outline" className="text-xs">
                          PMI
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          PRINCE2
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          AGILE
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-600">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg">Bachelor of Science (BSc)</h4>
                      <p className="text-purple-600 font-medium">SKEMA Business School, Sophia Antipolis, FR</p>
                      <p className="text-gray-600 text-sm mb-2">09.2006 - 02.2010</p>
                      <p className="text-gray-700 font-medium">Business Administration</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Languages & Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  Languages & Skills
                </h3>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">German</span>
                        <Badge>Mother Tongue</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">English</span>
                        <Badge>Native</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">French</span>
                        <Badge variant="secondary">Professional Proficiency</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">PMI</Badge>
                      <Badge variant="outline">PRINCE2</Badge>
                      <Badge variant="outline">P2M</Badge>
                      <Badge variant="outline">AGILE</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Publications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <p className="text-gray-700">
                        <strong>Dreyer, H., Jennex, M. (2020).</strong> Current issues and trends in knowledge
                        management, discovery, and transfer. Hershey, PA: Information Science Reference.
                      </p>
                      <p className="text-gray-700">
                        <strong>Dreyer, H., Wynn, M., Bown, R. (2020).</strong> Expert Group Knowledge Triggers: When
                        Knowledge Surfaces. International Journal of Knowledge Management.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Success?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can optimize your Vercel experience and drive your business forward with proven
            strategies and academic insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-purple-600 transition-colors"
              asChild
            >
              <a href="https://calendar.app.google/gSgC8G7JAtDFxVTz7" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Strategy Call
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-purple-600 transition-colors"
              asChild
            >
              <a href="mailto:dreyer.hanna@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send a Message
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Hanna Dreyer</h3>
              <p className="text-gray-400">Customer Success Manager</p>
              <p className="text-gray-400 text-sm">Munich, Germany</p>
              <p className="text-gray-400 text-sm">dreyer.hanna@gmail.com</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" className="text-blue-400 hover:text-blue-600" asChild>
                <a href="https://www.linkedin.com/in/hanna-dreyer/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-400 hover:text-blue-600" asChild>
                <a href="mailto:dreyer.hanna@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hanna Dreyer - Empowering success through expertise and dedication.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
