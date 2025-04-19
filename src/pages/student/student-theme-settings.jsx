"use client"

import { useState } from "react"
import { Check, Palette, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function StudentThemeSettings() {
  const [colorScheme, setColorScheme] = useState("indigo")
  const [layoutStyle, setLayoutStyle] = useState("modern")
  const [fontStyle, setFontStyle] = useState("sans")

  const handleSaveTheme = () => {
    alert("Theme settings saved successfully!")
  }

  return (
    <div className="space-y-6 text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Theme Settings</h2>
        <Button onClick={handleSaveTheme}>
          <Save className="mr-2 h-4 w-4" />
          Save Theme
        </Button>
      </div>

      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="colors">Color Scheme</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="mt-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <Palette className="h-5 w-5 text-indigo-500" />
                <div>
                  <CardTitle>Color Scheme</CardTitle>
                  <CardDescription>Choose a color scheme for your portfolio</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <RadioGroup
                value={colorScheme}
                onValueChange={setColorScheme}
                className="grid grid-cols-2 gap-4 md:grid-cols-3"
              >
                <div>
                  <RadioGroupItem value="indigo" id="indigo" className="peer sr-only" />
                  <Label
                    htmlFor="indigo"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 hover:text-gray-50 peer-data-[state=checked]:border-indigo-600 [&:has([data-state=checked])]:border-indigo-600"
                  >
                    <div className="mb-3 flex h-16 w-full items-center justify-center rounded-md bg-indigo-600">
                      {colorScheme === "indigo" && <Check className="h-6 w-6 text-white" />}
                    </div>
                    <div className="font-medium">Indigo</div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="purple" id="purple" className="peer sr-only" />
                  <Label
                    htmlFor="purple"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 hover:text-gray-50 peer-data-[state=checked]:border-purple-600 [&:has([data-state=checked])]:border-purple-600"
                  >
                    <div className="mb-3 flex h-16 w-full items-center justify-center rounded-md bg-purple-600">
                      {colorScheme === "purple" && <Check className="h-6 w-6 text-white" />}
                    </div>
                    <div className="font-medium">Purple</div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="blue" id="blue" className="peer sr-only" />
                  <Label
                    htmlFor="blue"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 hover:text-gray-50 peer-data-[state=checked]:border-blue-600 [&:has([data-state=checked])]:border-blue-600"
                  >
                    <div className="mb-3 flex h-16 w-full items-center justify-center rounded-md bg-blue-600">
                      {colorScheme === "blue" && <Check className="h-6 w-6 text-white" />}
                    </div>
                    <div className="font-medium">Blue</div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="green" id="green" className="peer sr-only" />
                  <Label
                    htmlFor="green"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 hover:text-gray-50 peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                  >
                    <div className="mb-3 flex h-16 w-full items-center justify-center rounded-md bg-green-600">
                      {colorScheme === "green" && <Check className="h-6 w-6 text-white" />}
                    </div>
                    <div className="font-medium">Green</div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="red" id="red" className="peer sr-only" />
                  <Label
                    htmlFor="red"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 hover:text-gray-50 peer-data-[state=checked]:border-red-600 [&:has([data-state=checked])]:border-red-600"
                  >
                    <div className="mb-3 flex h-16 w-full items-center justify-center rounded-md bg-red-600">
                      {colorScheme === "red" && <Check className="h-6 w-6 text-white" />}
                    </div>
                    <div className="font-medium">Red</div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="amber" id="amber" className="peer sr-only" />
                  <Label
                    htmlFor="amber"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 hover:text-gray-50 peer-data-[state=checked]:border-amber-600 [&:has([data-state=checked])]:border-amber-600"
                  >
                    <div className="mb-3 flex h-16 w-full items-center justify-center rounded-md bg-amber-600">
                      {colorScheme === "amber" && <Check className="h-6 w-6 text-white" />}
                    </div>
                    <div className="font-medium">Amber</div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter className="border-t border-gray-800 pt-4">
              <p className="text-sm text-gray-400">
                The selected color scheme will be applied to your public portfolio.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="layout" className="mt-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <Palette className="h-5 w-5 text-indigo-500" />
                <div>
                  <CardTitle>Layout Style</CardTitle>
                  <CardDescription>Choose a layout style for your portfolio</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <RadioGroup
                value={layoutStyle}
                onValueChange={setLayoutStyle}
                className="grid grid-cols-1 gap-4 md:grid-cols-3"
              >
                <div>
                  <RadioGroupItem value="modern" id="modern" className="peer sr-only" />
                  <Label
                    htmlFor="modern"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 hover:text-gray-50 peer-data-[state=checked]:border-indigo-600 [&:has([data-state=checked])]:border-indigo-600"
                  >
                    <div className="mb-3 flex h-32 w-full flex-col items-center justify-center rounded-md bg-gray-800 p-2">
                      <div className="h-4 w-full rounded bg-gray-700 mb-2"></div>
                      <div className="flex w-full gap-2">
                        <div className="h-20 w-1/3 rounded bg-gray-700"></div>
                        <div className="h-20 w-2/3 rounded bg-gray-700"></div>
                      </div>
                    </div>
                    <div className="font-medium">Modern</div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="classic" id="classic" className="peer sr-only" />
                  <Label
                    htmlFor="classic"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 hover:text-gray-50 peer-data-[state=checked]:border-indigo-600 [&:has([data-state=checked])]:border-indigo-600"
                  >
                    <div className="mb-3 flex h-32 w-full flex-col items-center justify-center rounded-md bg-gray-800 p-2">
                      <div className="h-4 w-full rounded bg-gray-700 mb-2"></div>
                      <div className="h-4 w-3/4 rounded bg-gray-700 mb-2"></div>
                      <div className="h-16 w-full rounded bg-gray-700"></div>
                    </div>
                    <div className="font-medium">Classic</div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="minimal" id="minimal" className="peer sr-only" />
                  <Label
                    htmlFor="minimal"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 hover:text-gray-50 peer-data-[state=checked]:border-indigo-600 [&:has([data-state=checked])]:border-indigo-600"
                  >
                    <div className="mb-3 flex h-32 w-full flex-col items-center justify-center rounded-md bg-gray-800 p-2">
                      <div className="h-6 w-1/2 rounded bg-gray-700 mb-4"></div>
                      <div className="h-4 w-3/4 rounded bg-gray-700 mb-2"></div>
                      <div className="h-4 w-1/2 rounded bg-gray-700"></div>
                    </div>
                    <div className="font-medium">Minimal</div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter className="border-t border-gray-800 pt-4">
              <p className="text-sm text-gray-400">
                The selected layout will determine how your portfolio sections are arranged.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="typography" className="mt-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <Palette className="h-5 w-5 text-indigo-500" />
                <div>
                  <CardTitle>Typography</CardTitle>
                  <CardDescription>Choose fonts for your portfolio</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <RadioGroup
                value={fontStyle}
                onValueChange={setFontStyle}
                className="grid grid-cols-1 gap-4 md:grid-cols-3"
              >
                <div>
                  <RadioGroupItem value="sans" id="sans" className="peer sr-only" />
                  <Label
                    htmlFor="sans"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 hover:text-gray-50 peer-data-[state=checked]:border-indigo-600 [&:has([data-state=checked])]:border-indigo-600"
                  >
                    <div className="mb-3 flex h-32 w-full flex-col items-center justify-center rounded-md bg-gray-800 p-2">
                      <p className="text-xl font-bold" style={{ fontFamily: "sans-serif" }}>
                        Sans Serif
                      </p>
                      <p className="text-sm" style={{ fontFamily: "sans-serif" }}>
                        Clean and modern
                      </p>
                    </div>
                    <div className="font-medium">Sans Serif</div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="serif" id="serif" className="peer sr-only" />
                  <Label
                    htmlFor="serif"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 hover:text-gray-50 peer-data-[state=checked]:border-indigo-600 [&:has([data-state=checked])]:border-indigo-600"
                  >
                    <div className="mb-3 flex h-32 w-full flex-col items-center justify-center rounded-md bg-gray-800 p-2">
                      <p className="text-xl font-bold" style={{ fontFamily: "serif" }}>
                        Serif
                      </p>
                      <p className="text-sm" style={{ fontFamily: "serif" }}>
                        Traditional and elegant
                      </p>
                    </div>
                    <div className="font-medium">Serif</div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="mono" id="mono" className="peer sr-only" />
                  <Label
                    htmlFor="mono"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 hover:text-gray-50 peer-data-[state=checked]:border-indigo-600 [&:has([data-state=checked])]:border-indigo-600"
                  >
                    <div className="mb-3 flex h-32 w-full flex-col items-center justify-center rounded-md bg-gray-800 p-2">
                      <p className="text-xl font-bold" style={{ fontFamily: "monospace" }}>
                        Monospace
                      </p>
                      <p className="text-sm" style={{ fontFamily: "monospace" }}>
                        Technical and precise
                      </p>
                    </div>
                    <div className="font-medium">Monospace</div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter className="border-t border-gray-800 pt-4">
              <p className="text-sm text-gray-400">
                The selected font style will be applied to all text in your portfolio.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
