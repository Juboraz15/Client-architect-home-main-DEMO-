import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Palette, 
  Hammer, 
  ShoppingBag, 
  FileText, 
  Users, 
  Settings,
  BarChart3,
  Plus,
  Eye
} from "lucide-react";

const sidebarItems = [
  {
    title: "Properties & Interior Design",
    icon: Home,
    items: [
      { title: "Property Listings", icon: Home, count: 24 },
      { title: "Design Portfolio", icon: Palette, count: 18 },
      { title: "Interior RFQs", icon: FileText, count: 7 },
      { title: "Property RFQs", icon: Users, count: 12 }
    ]
  },
  {
    title: "Contracting Services",
    icon: Hammer,
    items: [
      { title: "Active Projects", icon: Hammer, count: 8 },
      { title: "Project Portfolio", icon: Eye, count: 45 },
      { title: "Contracting RFQs", icon: FileText, count: 15 },
      { title: "Project Timeline", icon: BarChart3, count: null }
    ]
  },
  {
    title: "Furniture Sales",
    icon: ShoppingBag,
    items: [
      { title: "Product Catalog", icon: ShoppingBag, count: 156 },
      { title: "Shopify Orders", icon: FileText, count: 23 },
      { title: "Inventory", icon: BarChart3, count: null },
      { title: "Customer Reviews", icon: Users, count: 89 }
    ]
  }
];

const dashboardStats = [
  { title: "Total RFQs", value: "34", change: "+12%", trend: "up" },
  { title: "Active Projects", value: "8", change: "+2", trend: "up" },
  { title: "Monthly Revenue", value: "$45.2K", change: "+8.5%", trend: "up" },
  { title: "Client Satisfaction", value: "98%", change: "+1%", trend: "up" }
];

export const AdminDashboard = () => {
  const [activeModule, setActiveModule] = useState("Properties & Interior Design");
  const [collapsed, setCollapsed] = useState(false);

  const getActiveModuleData = () => {
    const module = sidebarItems.find(item => item.title === activeModule);
    return module?.items || [];
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-wider uppercase text-primary mb-4">
            Management System
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Admin Dashboard Preview
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive management system for all your business operations
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="bg-muted/30 rounded-2xl p-6 shadow-elegant">
          <SidebarProvider>
            <div className="flex min-h-[600px] w-full rounded-xl border bg-background shadow-elegant">
              <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
                <div className="p-4 border-b">
                  <SidebarTrigger onClick={() => setCollapsed(!collapsed)} />
                  {!collapsed && (
                    <h4 className="font-semibold text-lg mt-2">Admin Panel</h4>
                  )}
                </div>
                
                <SidebarContent>
                  {sidebarItems.map((group) => (
                    <SidebarGroup key={group.title}>
                      <SidebarGroupLabel 
                        className={`cursor-pointer hover:text-primary transition-colors ${
                          activeModule === group.title ? "text-primary font-semibold" : ""
                        }`}
                        onClick={() => setActiveModule(group.title)}
                      >
                        <group.icon className="h-4 w-4 mr-2" />
                        {!collapsed && group.title}
                      </SidebarGroupLabel>
                      
                      {!collapsed && activeModule === group.title && (
                        <SidebarGroupContent>
                          <SidebarMenu>
                            {group.items.map((item) => (
                              <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton className="w-full justify-between">
                                  <div className="flex items-center">
                                    <item.icon className="h-4 w-4 mr-2" />
                                    {item.title}
                                  </div>
                                  {item.count && (
                                    <Badge variant="secondary" className="ml-auto">
                                      {item.count}
                                    </Badge>
                                  )}
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                          </SidebarMenu>
                        </SidebarGroupContent>
                      )}
                    </SidebarGroup>
                  ))}
                </SidebarContent>
              </Sidebar>

              <main className="flex-1 p-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {dashboardStats.map((stat) => (
                    <Card key={stat.title} className="shadow-soft">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          {stat.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-green-600 mt-1">
                          {stat.change} from last month
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Module Content */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-2xl font-bold">{activeModule}</h4>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getActiveModuleData().map((item) => (
                      <Card key={item.title} className="shadow-soft hover-lift">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center">
                              <item.icon className="h-5 w-5 mr-2 text-primary" />
                              {item.title}
                            </div>
                            {item.count && (
                              <Badge variant="outline">{item.count}</Badge>
                            )}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            Manage and monitor your {item.title.toLowerCase()}
                          </p>
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </main>
            </div>
          </SidebarProvider>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            This is a preview of the admin dashboard functionality
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-luxury hover-lift">
            Request Demo Access
          </Button>
        </div>
      </div>
    </section>
  );
};