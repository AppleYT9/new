"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TranslatedText } from "@/components/translated-text"
import { Car, CheckCircle, Upload, User, Shield, DollarSign } from "lucide-react"

export function DriverPortal() {
    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left Column: Information */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                                <TranslatedText text="Drive with Purpose" />
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                <TranslatedText text="Join our network of verified accessibility drivers. Earn competitive rates whilst making a real difference in people's lives." />
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <Card>
                                <CardHeader className="pb-2">
                                    <DollarSign className="h-6 w-6 text-primary mb-2" />
                                    <CardTitle className="text-lg"><TranslatedText text="Higher Earnings" /></CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        <TranslatedText text="Earn more with specialized trips and lower commission rates." />
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-2">
                                    <Shield className="h-6 w-6 text-primary mb-2" />
                                    <CardTitle className="text-lg"><TranslatedText text="Verified Safety" /></CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        <TranslatedText text="Enhanced safety features for both drivers and riders." />
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold"><TranslatedText text="Requirements" /></h3>
                            <ul className="space-y-2">
                                {[
                                    "Valid Driver's License (Min. 3 years)",
                                    "Vehicle Inspection Report",
                                    "Clean Background Check",
                                    "WAV Certification (Optional)",
                                ].map((req, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span><TranslatedText text={req} /></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Registration Form */}
                    <Card className="border-primary/20 shadow-lg">
                        <CardHeader>
                            <CardTitle><TranslatedText text="Driver Registration" /></CardTitle>
                            <CardDescription>
                                <TranslatedText text="Fill in your details to get started with the verification process." />
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="personal" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 mb-6">
                                    <TabsTrigger value="personal"><TranslatedText text="Personal Info" /></TabsTrigger>
                                    <TabsTrigger value="vehicle"><TranslatedText text="Vehicle Details" /></TabsTrigger>
                                </TabsList>

                                <TabsContent value="personal" className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName"><TranslatedText text="First Name" /></Label>
                                            <Input id="firstName" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName"><TranslatedText text="Last Name" /></Label>
                                            <Input id="lastName" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email"><TranslatedText text="Email" /></Label>
                                        <Input id="email" type="email" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone"><TranslatedText text="Phone Number" /></Label>
                                        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                                    </div>
                                    <Button className="w-full">
                                        <TranslatedText text="Next: Vehicle Details" />
                                    </Button>
                                </TabsContent>

                                <TabsContent value="vehicle" className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="vehicleType"><TranslatedText text="Vehicle Type" /></Label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex flex-col items-center gap-2 rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center hover:border-primary/50 cursor-pointer">
                                                <Car className="h-8 w-8 text-primary" />
                                                <span className="text-sm font-medium"><TranslatedText text="Standard" /></span>
                                            </div>
                                            <div className="flex flex-col items-center gap-2 rounded-xl border-2 border-muted p-4 text-center hover:border-primary/50 cursor-pointer">
                                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">W</div>
                                                <span className="text-sm font-medium"><TranslatedText text="WAV" /></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label><TranslatedText text="Documents" /></Label>
                                        <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-muted/50 cursor-pointer transition-colors">
                                            <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                                            <span className="text-sm font-medium"><TranslatedText text="Upload License & Insurance" /></span>
                                            <span className="text-xs text-muted-foreground"><TranslatedText text="PDF, JPG or PNG" /></span>
                                        </div>
                                    </div>

                                    <Button className="w-full">
                                        <TranslatedText text="Submit Application" />
                                    </Button>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
