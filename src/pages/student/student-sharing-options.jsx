"use client"

import { useState } from "react"
import { Copy, Download, Facebook, Globe, Instagram, Link, Linkedin, Save, Shield, Share, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export function StudentSharingOptions() {
  const [portfolioUrl, setPortfolioUrl] = useState("portfolio.studenthub.com/johnsmith")
  const [customUrl, setCustomUrl] = useState("johnsmith")
  const [isPublic, setIsPublic] = useState(true)
  const [allowComments, setAllowComments] = useState(true)
  const [showViews, setShowViews] = useState(true)

  const handleSaveSettings = () => {
    alert("Sharing settings saved successfully!")
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${portfolioUrl}`)
    alert("Portfolio link copied to clipboard!")
  }

  const handleUpdateCustomUrl = () => {
    setPortfolioUrl(`portfolio.studenthub.com/${customUrl}`)
    alert("Custom URL updated successfully!")
  }

  return (
    <div className="space-y-6 text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Sharing Options</h2>
        <Button onClick={handleSaveSettings}>
          <Save className="mr-2 h-4 w-4" />
          Save Settings
        </Button>
      </div>

      <Tabs defaultValue="links" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="links">Portfolio Links</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="privacy">Privacy Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="links" className="mt-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <Link className="h-5 w-5 text-indigo-500" />
                <div>
                  <CardTitle>Portfolio URL</CardTitle>
                  <CardDescription>Manage and customize your portfolio link</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-6">
              <div className="space-y-2">
                <Label>Your Portfolio Link</Label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Globe className="h-4 w-4 text-gray-500" />
                    </div>
                    <Input value={`https://${portfolioUrl}`} readOnly className="pl-9 bg-gray-800 text-gray-300" />
                  </div>
                  <Button variant="outline" onClick={handleCopyLink}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
                <p className="text-xs text-gray-500">Share this link with others to view your portfolio</p>
              </div>

              <div className="space-y-2">
                <Label>Customize URL</Label>
                <div className="flex items-center gap-2">
                  <div className="flex-none text-gray-400">portfolio.studenthub.com/</div>
                  <Input
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="yournamehere"
                    className="flex-1"
                  />
                  <Button variant="outline" onClick={handleUpdateCustomUrl}>
                    Update
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  Choose a custom URL for your portfolio (letters, numbers, and hyphens only)
                </p>
              </div>

              <div className="space-y-2">
                <Label>QR Code</Label>
                <div className="flex items-center justify-center h-48 bg-white rounded-md">
                  <div className="text-gray-800 text-center">
                    <p className="font-medium">QR Code for your portfolio</p>
                    <p className="text-xs">Scan to view</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download QR Code
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="mt-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <Share className="h-5 w-5 text-indigo-500" />
                <div>
                  <CardTitle>Social Media Sharing</CardTitle>
                  <CardDescription>Share your portfolio on social media platforms</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Button className="flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/90">
                  <Facebook className="h-5 w-5" />
                  Share on Facebook
                </Button>
                <Button className="flex items-center justify-center gap-2 bg-[#1DA1F2] hover:bg-[#1DA1F2]/90">
                  <Twitter className="h-5 w-5" />
                  Share on Twitter
                </Button>
                <Button className="flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90">
                  <Linkedin className="h-5 w-5" />
                  Share on LinkedIn
                </Button>
                <Button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90">
                  <Instagram className="h-5 w-5" />
                  Share on Instagram
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Share Message</Label>
                <Textarea
                  placeholder="Check out my portfolio!"
                  className="min-h-[100px]"
                  defaultValue="Check out my professional portfolio showcasing my skills, projects, and achievements!"
                />
                <p className="text-xs text-gray-500">This message will be included when sharing to social media</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="mt-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-indigo-500" />
                <div>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>Control who can view your portfolio and what they can see</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Portfolio Visibility</Label>
                  <p className="text-sm text-gray-500">Make your portfolio public or private</p>
                </div>
                <Switch checked={isPublic} onCheckedChange={setIsPublic} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Allow Comments</Label>
                  <p className="text-sm text-gray-500">Let visitors leave comments on your portfolio</p>
                </div>
                <Switch checked={allowComments} onCheckedChange={setAllowComments} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show View Count</Label>
                  <p className="text-sm text-gray-500">Display the number of views on your portfolio</p>
                </div>
                <Switch checked={showViews} onCheckedChange={setShowViews} />
              </div>

              <div className="space-y-2">
                <Label>Password Protection</Label>
                <div className="flex gap-2">
                  <Input type="password" placeholder="Set a password (optional)" />
                  <Button variant="outline">Set Password</Button>
                </div>
                <p className="text-xs text-gray-500">Add a password to restrict access to your portfolio</p>
              </div>
            </CardContent>
            <CardFooter className="border-t border-gray-800 pt-4">
              <p className="text-sm text-gray-400">
                Your privacy settings determine who can view your portfolio and what information is visible.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
