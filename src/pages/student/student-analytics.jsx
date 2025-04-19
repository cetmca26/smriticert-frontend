"use client"

import { useState } from "react"
import { Calendar, Eye, Globe, LineChart, MousePointerClick, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function StudentAnalytics() {
  const [timeRange, setTimeRange] = useState("30days")

  // Mock data
  const analyticsData = {
    totalViews: 1248,
    uniqueVisitors: 856,
    averageTime: "2m 34s",
    clickRate: "4.2%",
    topReferrers: [
      { source: "LinkedIn", visits: 423, percentage: 34 },
      { source: "Direct", visits: 298, percentage: 24 },
      { source: "GitHub", visits: 156, percentage: 12 },
      { source: "Twitter", visits: 132, percentage: 11 },
      { source: "Google", visits: 98, percentage: 8 },
    ],
    topLocations: [
      { country: "United States", visits: 512, percentage: 41 },
      { country: "India", visits: 186, percentage: 15 },
      { country: "United Kingdom", visits: 124, percentage: 10 },
      { country: "Canada", visits: 98, percentage: 8 },
      { country: "Germany", visits: 76, percentage: 6 },
    ],
    recentVisits: [
      { date: "2023-06-15 14:23", source: "LinkedIn", location: "United States", device: "Desktop" },
      { date: "2023-06-15 12:05", source: "Direct", location: "Canada", device: "Mobile" },
      { date: "2023-06-14 18:47", source: "GitHub", location: "India", device: "Desktop" },
      { date: "2023-06-14 10:32", source: "Twitter", location: "United Kingdom", device: "Tablet" },
      { date: "2023-06-13 22:15", source: "Google", location: "Germany", device: "Desktop" },
    ],
  }

  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold">Portfolio Analytics</h2>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-gray-800 text-white">
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="year">Last year</SelectItem>
            <SelectItem value="all">All time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.totalViews}</div>
            <p className="text-xs text-green-500">+12.5% from last period</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.uniqueVisitors}</div>
            <p className="text-xs text-green-500">+8.2% from last period</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time on Page</CardTitle>
            <Calendar className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.averageTime}</div>
            <p className="text-xs text-green-500">+0.8% from last period</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
            <MousePointerClick className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.clickRate}</div>
            <p className="text-xs text-red-500">-1.2% from last period</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="referrers" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="referrers">Top Referrers</TabsTrigger>
          <TabsTrigger value="locations">Top Locations</TabsTrigger>
          <TabsTrigger value="recent">Recent Visits</TabsTrigger>
        </TabsList>
        <TabsContent value="referrers">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg">Top Referrers</CardTitle>
              <CardDescription>Where your visitors are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-gray-800">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Source</TableHead>
                      <TableHead className="text-right">Visits</TableHead>
                      <TableHead className="text-right">Percentage</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {analyticsData.topReferrers.map((referrer) => (
                      <TableRow key={referrer.source}>
                        <TableCell className="font-medium">{referrer.source}</TableCell>
                        <TableCell className="text-right">{referrer.visits}</TableCell>
                        <TableCell className="text-right">{referrer.percentage}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="locations">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg">Top Locations</CardTitle>
              <CardDescription>Where your visitors are located</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-gray-800">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Country</TableHead>
                      <TableHead className="text-right">Visits</TableHead>
                      <TableHead className="text-right">Percentage</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {analyticsData.topLocations.map((location) => (
                      <TableRow key={location.country}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-gray-500" />
                            {location.country}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{location.visits}</TableCell>
                        <TableCell className="text-right">{location.percentage}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recent">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg">Recent Visits</CardTitle>
              <CardDescription>Latest visitors to your portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-gray-800">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Device</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {analyticsData.recentVisits.map((visit, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{visit.date}</TableCell>
                        <TableCell>{visit.source}</TableCell>
                        <TableCell>{visit.location}</TableCell>
                        <TableCell>{visit.device}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-lg">Traffic Overview</CardTitle>
          <CardDescription>Visualize your portfolio traffic over time</CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="flex flex-col items-center text-center text-gray-500">
            <LineChart className="h-16 w-16 mb-4" />
            <p>Traffic chart visualization would appear here</p>
            <p className="text-sm">Showing data for the selected time period</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
