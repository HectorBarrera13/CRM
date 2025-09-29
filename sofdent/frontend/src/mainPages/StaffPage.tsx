import { useState } from "react";
import AddNewStaffForm from "../formPages/AddNewStaffForm";

interface StaffData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  specialization?: string;
  hireDate: string;
  salary?: string;
  status: string;
}

function StaffPage() {
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showStaffForm, setShowStaffForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddNewStaffMember = () => {
    setShowStaffForm(true);
  };

  const handleCancelStaff = () => {
    setShowStaffForm(false);
  };

  const handleSubmitStaff = async (staffData: StaffData) => {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("New staff member created:", staffData);
      setIsSubmitting(false);
      setShowStaffForm(false);
      // Here you would typically show a success message
      alert("Staff member added successfully!");
    }, 1500);
  };
  // Mock staff data
  const staffMembers: StaffData[] = [
    {
      id: "1",
      firstName: "Dr. Sarah Martinez",
      lastName: "Martinez",
      role: "doctor",
      email: "sarah.martinez@sofdent.com",
      phone: "(555) 123-4567",
      specialization: "General Dentistry",
      department: "General Practice",
      hireDate: "2020-01-15",
      status: "active",
    },
    {
      id: "2",
      firstName: "Dr. Michael Chen",
      lastName: "Chen",
      role: "doctor",
      email: "michael.chen@sofdent.com",
      phone: "(555) 234-5678",
      specialization: "Orthodontics",
      department: "Orthodontics",
      hireDate: "2019-03-22",
      status: "active",
    },
    {
      id: "3",
      firstName: "Dr. Emily Rodriguez",
      lastName: "Rodriguez",
      role: "doctor",
      email: "emily.rodriguez@sofdent.com",
      phone: "(555) 345-6789",
      specialization: "Oral Surgery",
      department: "Surgery",
      hireDate: "2021-06-10",
      status: "active",
    },
    {
      id: "4",
      firstName: "Dr. James Thompson",
      lastName: "Thompson",
      role: "doctor",
      email: "james.thompson@sofdent.com",
      phone: "(555) 456-7890",
      specialization: "Pediatric Dentistry",
      department: "Pediatrics",
      hireDate: "2018-09-05",
      status: "on-leave",
    },
    {
      id: "5",
      firstName: "Maria Garcia",
      lastName: "Garcia",
      role: "assistant",
      email: "maria.garcia@sofdent.com",
      phone: "(555) 567-8901",
      department: "General Practice",
      hireDate: "2020-11-12",
      status: "active",
    },
    {
      id: "6",
      firstName: "John Wilson",
      lastName: "Wilson",
      role: "assistant",
      email: "john.wilson@sofdent.com",
      phone: "(555) 678-9012",
      department: "Orthodontics",
      hireDate: "2021-02-28",
      status: "active",
    },
    {
      id: "7",
      firstName: "Lisa Brown",
      lastName: "Brown",
      role: "administrator",
      email: "lisa.brown@sofdent.com",
      phone: "(555) 789-0123",
      department: "Administration",
      hireDate: "2019-07-18",
      status: "active",
    },
    {
      id: "8",
      firstName: "Robert Davis",
      lastName: "Davis",
      role: "administrator",
      email: "robert.davis@sofdent.com",
      phone: "(555) 890-1234",
      department: "Administration",
      hireDate: "2020-04-03",
      status: "inactive",
    },
  ];

  const filteredStaff = staffMembers.filter((member) => {
    const matchesRole = selectedRole === "all" || member.role === selectedRole;
    const matchesSearch =
      member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case "doctor":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "assistant":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "administrator":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "inactive":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "on-leave":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  if (showStaffForm) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
              Add New Staff
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Enter patient information to create a new record
            </p>
          </div>
          <button
            onClick={handleCancelStaff}
            className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Back to Patients
          </button>
        </div>

        <AddNewStaffForm
          onSubmit={handleSubmitStaff}
          onCancel={handleCancelStaff}
          isLoading={isSubmitting}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
            Staff & Team
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Manage clinic personnel - doctors, assistants, and administrators
          </p>
        </div>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          onClick={handleAddNewStaffMember}
        >
          Add New Staff Member
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search staff members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="doctor">Doctors</option>
              <option value="assistant">Assistants</option>
              <option value="administrator">Administrators</option>
            </select>
          </div>
        </div>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map((member) => (
          <div
            key={member.id}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {getInitials(member.firstName)}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                    {member.firstName} {member.lastName}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {member.department}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(
                    member.role
                  )}`}
                >
                  {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    member.status
                  )}`}
                >
                  {member.status.replace("-", " ")}
                </span>
              </div>
            </div>

            {member.specialization && (
              <div className="mb-3">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Specialization
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {member.specialization}
                </p>
              </div>
            )}

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {member.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {member.phone}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Hired: {new Date(member.hireDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                View Details
              </button>
              <button className="flex-1 px-3 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Total Doctors
              </p>
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {staffMembers.filter((m) => m.role === "doctor").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Assistants
              </p>
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {staffMembers.filter((m) => m.role === "assistant").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Administrators
              </p>
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {staffMembers.filter((m) => m.role === "administrator").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Active Staff
              </p>
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {staffMembers.filter((m) => m.status === "active").length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffPage;
