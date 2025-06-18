import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  TrendingUp,
  Coffee,
  Target,
  MessageCircle,
  Mail,
  Linkedin,
  Twitter,
  Calendar,
  BookOpen,
  Plane,
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
                Hi, I'm <span className="text-blue-400">Alex</span>
                <br />
                <span className="text-2xl md:text-4xl text-gray-300">Your Success Partner at Vercel</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                I help developers and teams unlock their full potential on the Vercel platform, turning ambitious ideas
                into successful digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Avatar className="w-64 h-64 border-4 border-white/20">
                <AvatarImage src="/placeholder.svg?height=256&width=256" alt="Alex - CSM at Vercel" />
                <AvatarFallback className="text-4xl bg-blue-600">AJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
              <div className="text-gray-600">Years at Vercel</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Mindset</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">More Than Just a CSM</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Professional Journey</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With over 5 years in customer success and 3+ years at Vercel, I've helped hundreds of developers and
                  teams scale their applications from MVP to millions of users. My passion lies in bridging the gap
                  between complex technology and real business outcomes.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Customer Success</Badge>
                  <Badge variant="secondary">Technical Consulting</Badge>
                  <Badge variant="secondary">Team Leadership</Badge>
                  <Badge variant="secondary">Product Strategy</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Personal Side</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  When I'm not helping customers succeed, you'll find me exploring new coffee shops, hiking local
                  trails, or experimenting with the latest web technologies. I believe the best customer relationships
                  are built on genuine human connections.
                </p>
                <div className="flex items-center gap-4 text-gray-600">
                  <Coffee className="h-5 w-5" />
                  <span>Coffee Enthusiast</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600 mt-2">
                  <Plane className="h-5 w-5" />
                  <span>Travel Lover</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600 mt-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Continuous Learner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How I Drive Your Success</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Every customer journey is unique. Here's how I ensure you get the most out of Vercel.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Strategic Onboarding</CardTitle>
                  <CardDescription>
                    Tailored onboarding plans that align with your business goals and technical requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Custom implementation roadmaps</li>
                    <li>• Team training sessions</li>
                    <li>• Best practices workshops</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Growth Optimization</CardTitle>
                  <CardDescription>
                    Continuous monitoring and optimization to ensure your applications scale efficiently.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Performance analysis</li>
                    <li>• Cost optimization strategies</li>
                    <li>• Feature adoption guidance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Proactive Support</CardTitle>
                  <CardDescription>
                    Always one step ahead, anticipating needs and solving challenges before they impact you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Regular health checks</li>
                    <li>• Proactive issue resolution</li>
                    <li>• Strategic planning sessions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-4">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Sarah Mitchell</div>
                      <div className="text-sm text-gray-600">CTO, TechFlow</div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Alex transformed our deployment process from chaotic to seamless. Their strategic guidance helped
                    us scale from 10K to 1M users without breaking a sweat."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-4">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Marcus Rodriguez</div>
                      <div className="text-sm text-gray-600">Founder, StartupLab</div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Working with Alex feels like having a technical co-founder. They understand both the business and
                    technical sides, making complex decisions simple."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Success?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can optimize your Vercel experience and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Mail className="mr-2 h-5 w-5" />
              Send a Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
              <p className="text-gray-400">Customer Success Manager at Vercel</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Alex Johnson. Empowering success, one customer at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
