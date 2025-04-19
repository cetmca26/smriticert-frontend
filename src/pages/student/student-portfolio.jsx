"use client"

import { useState } from "react"
import { Award, Briefcase, Edit, GraduationCap, Mail, MapPin, Phone, Save, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function StudentPortfolio() {
  const [activeTab, setActiveTab] = useState("personal")
  const [isEditing, setIsEditing] = useState(false)
  const [newSkill, setNewSkill] = useState("")

  const [personalInfo, setPersonalInfo] = useState({
    name: "John Smith",
    title: "Computer Science Student",
    about:
      "Passionate computer science student with a focus on web development and artificial intelligence. Looking for internship opportunities to apply my skills in a real-world setting.",
    location: "New York, NY",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    website: "johnsmith.dev",
  })

  const [portfolioSections, setPortfolioSections] = useState([
    {
      id: "edu1",
      type: "education",
      title: "Bachelor of Science in Computer Science",
      subtitle: "Westlake University",
      date: "2021 - Present",
      description: "Focusing on software engineering and artificial intelligence.",
    },
    {
      id: "exp1",
      type: "experience",
      title: "Web Development Intern",
      subtitle: "Tech Solutions Inc.",
      date: "Summer 2022",
      description: "Developed and maintained company website using React and Node.js.",
    },
    {
      id: "proj1",
      type: "project",
      title: "Personal Portfolio Website",
      subtitle: "Web Development",
      date: "2022",
      description: "Designed and developed a personal portfolio website using Next.js and Tailwind CSS.",
    },
    {
      id: "skill1",
      type: "skill",
      title: "Technical Skills",
      skills: ["JavaScript", "React", "Node.js", "Python", "Java", "HTML/CSS", "Git", "SQL"],
    },
  ])

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target
    setPersonalInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSectionChange = (id, field, value) => {
    setPortfolioSections((prev) =>
      prev.map((section) => (section.id === id ? { ...section, [field]: value } : section)),
    )
  }

  const handleAddSkill = () => {
    if (!newSkill.trim()) return

    const skillSection = portfolioSections.find((section) => section.type === "skill")
    if (skillSection) {
      setPortfolioSections((prev) =>
        prev.map((section) =>
          section.id === skillSection.id
            ? { ...section, skills: [...(section.skills || []), newSkill.trim()] }
            : section,
        ),
      )
    } else {
      setPortfolioSections((prev) => [
        ...prev,
        {
          id: `skill${Date.now()}`,
          type: "skill",
          title: "Technical Skills",
          skills: [newSkill.trim()],
        },
      ])
    }
    setNewSkill("")
  }

  const handleRemoveSkill = (skillToRemove) => {
    const skillSection = portfolioSections.find((section) => section.type === "skill")
    if (skillSection) {
      setPortfolioSections((prev) =>
        prev.map((section) =>
          section.id === skillSection.id
            ? { ...section, skills: section.skills?.filter((skill) => skill !== skillToRemove) }
            : section,
        ),
      )
    }
  }

  const handleAddSection = (type) => {
    const newSection = {
      id: `${type}${Date.now()}`,
      type,
      title: type === "education" ? "Degree" : type === "experience" ? "Job Title" : "Project Name",
      subtitle: type === "education" ? "Institution" : type === "experience" ? "Company" : "Category",
      date: "Present",
      description: "Description",
    }
    setPortfolioSections((prev) => [...prev, newSection])
  }

  const handleRemoveSection = (id) => {
    setPortfolioSections((prev) => prev.filter((section) => section.id !== id))
  }

  const handleSave = () => {
    setIsEditing(false)
    alert("Portfolio updated successfully!")
  }

  const educationSections = portfolioSections.filter((section) => section.type === "education")
  const experienceSections = portfolioSections.filter((section) => section.type === "experience")
  const projectSections = portfolioSections.filter((section) => section.type === "project")
  const skillSection = portfolioSections.find((section) => section.type === "skill")

  return (
    <div className="space-y-6 text-white    ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Portfolio</h2>
        <Button variant={isEditing ? "default" : "outline"} onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="mr-2 h-4 w-4" />
              Edit Portfolio
            </>
          )}
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 ">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects & Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="mt-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-indigo-500" />
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Your basic information</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      name="name"
                      value={personalInfo.name}
                      onChange={handlePersonalInfoChange}
                      placeholder="Your full name"
                    />
                  ) : (
                    <p className="text-sm font-medium">{personalInfo.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  {isEditing ? (
                    <Input
                      id="title"
                      name="title"
                      value={personalInfo.title}
                      onChange={handlePersonalInfoChange}
                      placeholder="e.g. Software Developer"
                    />
                  ) : (
                    <p className="text-sm font-medium">{personalInfo.title}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  {isEditing ? (
                    <Input
                      id="location"
                      name="location"
                      value={personalInfo.location}
                      onChange={handlePersonalInfoChange}
                      placeholder="City, State"
                    />
                  ) : (
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-1 h-4 w-4 text-gray-400" />
                      {personalInfo.location}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      name="email"
                      value={personalInfo.email}
                      onChange={handlePersonalInfoChange}
                      placeholder="your.email@example.com"
                    />
                  ) : (
                    <div className="flex items-center text-sm">
                      <Mail className="mr-1 h-4 w-4 text-gray-400" />
                      {personalInfo.email}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      name="phone"
                      value={personalInfo.phone}
                      onChange={handlePersonalInfoChange}
                      placeholder="(123) 456-7890"
                    />
                  ) : (
                    <div className="flex items-center text-sm">
                      <Phone className="mr-1 h-4 w-4 text-gray-400" />
                      {personalInfo.phone}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  {isEditing ? (
                    <Input
                      id="website"
                      name="website"
                      value={personalInfo.website}
                      onChange={handlePersonalInfoChange}
                      placeholder="yourwebsite.com"
                    />
                  ) : (
                    <p className="text-sm font-medium">{personalInfo.website}</p>
                  )}
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="about">About Me</Label>
                  {isEditing ? (
                    <Textarea
                      id="about"
                      name="about"
                      value={personalInfo.about}
                      onChange={handlePersonalInfoChange}
                      placeholder="Write a short bio about yourself"
                      rows={4}
                    />
                  ) : (
                    <p className="text-sm">{personalInfo.about}</p>
                  )}
                </div>
              </div>
            </CardContent>
            {isEditing && (
              <CardFooter className="border-t border-gray-800 pt-4">
                <Button onClick={handleSave}>Save Personal Information</Button>
              </CardFooter>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="education" className="mt-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-indigo-500" />
                  <div>
                    <CardTitle>Education</CardTitle>
                    <CardDescription>Your academic background</CardDescription>
                  </div>
                </div>
                {isEditing && (
                  <Button variant="outline" size="sm" onClick={() => handleAddSection("education")}>
                    Add Education
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-6">
              {educationSections.map((education) => (
                <div key={education.id} className="relative border-b border-gray-800 pb-6 last:border-0 last:pb-0">
                  {isEditing && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0"
                      onClick={() => handleRemoveSection(education.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Degree</Label>
                      {isEditing ? (
                        <Input
                          value={education.title}
                          onChange={(e) => handleSectionChange(education.id, "title", e.target.value)}
                          placeholder="e.g. Bachelor of Science in Computer Science"
                        />
                      ) : (
                        <h3 className="text-lg font-medium">{education.title}</h3>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Institution</Label>
                        {isEditing ? (
                          <Input
                            value={education.subtitle}
                            onChange={(e) => handleSectionChange(education.id, "subtitle", e.target.value)}
                            placeholder="e.g. University Name"
                          />
                        ) : (
                          <p className="text-sm">{education.subtitle}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label>Date</Label>
                        {isEditing ? (
                          <Input
                            value={education.date}
                            onChange={(e) => handleSectionChange(education.id, "date", e.target.value)}
                            placeholder="e.g. 2020 - 2024"
                          />
                        ) : (
                          <p className="text-sm text-gray-400">{education.date}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      {isEditing ? (
                        <Textarea
                          value={education.description}
                          onChange={(e) => handleSectionChange(education.id, "description", e.target.value)}
                          placeholder="Describe your studies, achievements, etc."
                          rows={3}
                        />
                      ) : (
                        <p className="text-sm">{education.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {educationSections.length === 0 && (
                <div className="text-center py-6 text-gray-500">
                  {isEditing ? "Click 'Add Education' to add your educational background" : "No education added yet"}
                </div>
              )}
            </CardContent>
            {isEditing && (
              <CardFooter className="border-t border-gray-800 pt-4">
                <Button onClick={handleSave}>Save Education</Button>
              </CardFooter>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="experience" className="mt-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-indigo-500" />
                  <div>
                    <CardTitle>Experience</CardTitle>
                    <CardDescription>Your work experience</CardDescription>
                  </div>
                </div>
                {isEditing && (
                  <Button variant="outline" size="sm" onClick={() => handleAddSection("experience")}>
                    Add Experience
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-6">
              {experienceSections.map((experience) => (
                <div key={experience.id} className="relative border-b border-gray-800 pb-6 last:border-0 last:pb-0">
                  {isEditing && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0"
                      onClick={() => handleRemoveSection(experience.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Position</Label>
                      {isEditing ? (
                        <Input
                          value={experience.title}
                          onChange={(e) => handleSectionChange(experience.id, "title", e.target.value)}
                          placeholder="e.g. Software Developer"
                        />
                      ) : (
                        <h3 className="text-lg font-medium">{experience.title}</h3>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Company</Label>
                        {isEditing ? (
                          <Input
                            value={experience.subtitle}
                            onChange={(e) => handleSectionChange(experience.id, "subtitle", e.target.value)}
                            placeholder="e.g. Company Name"
                          />
                        ) : (
                          <p className="text-sm">{experience.subtitle}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label>Date</Label>
                        {isEditing ? (
                          <Input
                            value={experience.date}
                            onChange={(e) => handleSectionChange(experience.id, "date", e.target.value)}
                            placeholder="e.g. Jan 2020 - Present"
                          />
                        ) : (
                          <p className="text-sm text-gray-400">{experience.date}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      {isEditing ? (
                        <Textarea
                          value={experience.description}
                          onChange={(e) => handleSectionChange(experience.id, "description", e.target.value)}
                          placeholder="Describe your responsibilities and achievements"
                          rows={3}
                        />
                      ) : (
                        <p className="text-sm">{experience.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {experienceSections.length === 0 && (
                <div className="text-center py-6 text-gray-500">
                  {isEditing ? "Click 'Add Experience' to add your work experience" : "No experience added yet"}
                </div>
              )}
            </CardContent>
            {isEditing && (
              <CardFooter className="border-t border-gray-800 pt-4">
                <Button onClick={handleSave}>Save Experience</Button>
              </CardFooter>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="mt-6 space-y-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-indigo-500" />
                  <div>
                    <CardTitle>Projects</CardTitle>
                    <CardDescription>Your portfolio projects</CardDescription>
                  </div>
                </div>
                {isEditing && (
                  <Button variant="outline" size="sm" onClick={() => handleAddSection("project")}>
                    Add Project
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-6">
              {projectSections.map((project) => (
                <div key={project.id} className="relative border-b border-gray-800 pb-6 last:border-0 last:pb-0">
                  {isEditing && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0"
                      onClick={() => handleRemoveSection(project.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Project Name</Label>
                      {isEditing ? (
                        <Input
                          value={project.title}
                          onChange={(e) => handleSectionChange(project.id, "title", e.target.value)}
                          placeholder="e.g. E-commerce Website"
                        />
                      ) : (
                        <h3 className="text-lg font-medium">{project.title}</h3>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Category</Label>
                        {isEditing ? (
                          <Input
                            value={project.subtitle}
                            onChange={(e) => handleSectionChange(project.id, "subtitle", e.target.value)}
                            placeholder="e.g. Web Development"
                          />
                        ) : (
                          <p className="text-sm">{project.subtitle}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label>Date</Label>
                        {isEditing ? (
                          <Input
                            value={project.date}
                            onChange={(e) => handleSectionChange(project.id, "date", e.target.value)}
                            placeholder="e.g. 2023"
                          />
                        ) : (
                          <p className="text-sm text-gray-400">{project.date}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      {isEditing ? (
                        <Textarea
                          value={project.description}
                          onChange={(e) => handleSectionChange(project.id, "description", e.target.value)}
                          placeholder="Describe your project, technologies used, etc."
                          rows={3}
                        />
                      ) : (
                        <p className="text-sm">{project.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {projectSections.length === 0 && (
                <div className="text-center py-6 text-gray-500">
                  {isEditing ? "Click 'Add Project' to add your projects" : "No projects added yet"}
                </div>
              )}
            </CardContent>
            {isEditing && (
              <CardFooter className="border-t border-gray-800 pt-4">
                <Button onClick={handleSave}>Save Projects</Button>
              </CardFooter>
            )}
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-indigo-500" />
                <div>
                  <CardTitle>Skills</CardTitle>
                  <CardDescription>Your technical and soft skills</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              {isEditing ? (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          handleAddSkill()
                        }
                      }}
                    />
                    <Button onClick={handleAddSkill}>Add</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillSection?.skills?.map((skill) => (
                      <div key={skill} className="flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 text-sm">
                        {skill}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 rounded-full"
                          onClick={() => handleRemoveSkill(skill)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {skillSection?.skills?.map((skill) => (
                    <span key={skill} className="rounded-full bg-indigo-900/30 px-3 py-1 text-sm text-indigo-200">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
            {isEditing && (
              <CardFooter className="border-t border-gray-800 pt-4">
                <Button onClick={handleSave}>Save Skills</Button>
              </CardFooter>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
