"use client";

import { Card, CardContent, CardTitle } from "../components/card";
import { useRouter } from "next/navigation";

export default function TeacherDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Create Test Card */}
        <Card className="cursor-pointer hover:shadow-lg transition-all duration-300">
          <CardTitle>Create Test</CardTitle>
          <CardContent>
            <button
              onClick={() => router.push("/components/teacher-dashborad/CreateTest")}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Go to Create Test
            </button>
          </CardContent>
        </Card>

        {/* View Test Card */}
        <Card className="cursor-pointer hover:shadow-lg transition-all duration-300">
          <CardTitle>View Test</CardTitle>
          <CardContent>
            <button
              onClick={() => router.push("/view-test")}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Go to View Test
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}