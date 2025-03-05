"use client";

import { Card, CardContent, CardTitle } from "../components/card";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";

export default function TeacherDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex flex-col flex-grow items-center justify-center">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Manage Tests</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Create Test Card */}
          <Card className="cursor-pointer" onClick={() => router.push("/teacherdashboard/CreateTest")}>
            <CardTitle>Create Test</CardTitle>
            <CardContent>Design and create new tests with ease.</CardContent>
          </Card>

          {/* View Test Card */}
          <Card className="cursor-pointer" onClick={() => router.push("/teacherdashboard/view-test")}>
            <CardTitle>View Test</CardTitle>
            <CardContent>Browse and manage existing tests.</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
