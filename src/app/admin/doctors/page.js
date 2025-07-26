"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Filter, MoreHorizontal, Edit, Trash2, Eye, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockDoctors = [
      {
        id: 1,
        title: "DR",
        name: "Dr. John Smith",
        designation: "SURGEON",
        experience: 15,
        subspecialities: ["Upper Limb", "Sports"],
        image: "/home/doctor-1.jpg",
        featured: true,
        registrationCompleted: true
      },
      {
        id: 2,
        title: "DR",
        name: "Dr. Sarah Johnson",
        designation: "DOCTOR",
        experience: 10,
        subspecialities: ["Spine", "Trauma"],
        image: "/home/doctor-2.jpg",
        featured: false,
        registrationCompleted: true
      },
      {
        id: 3,
        title: "DR", 
        name: "Dr. Michael Brown",
        designation: "SURGEON",
        experience: 8,
        subspecialities: ["Lower Limb"],
        image: "/home/doctor-3.jpg",
        featured: false,
        registrationCompleted: false
      }
    ]
    
    setTimeout(() => {
      setDoctors(mockDoctors)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.subspecialities.some(sub => 
      sub.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const handleToggleFeatured = (doctorId) => {
    setDoctors(prev => prev.map(doctor => 
      doctor.id === doctorId 
        ? { ...doctor, featured: !doctor.featured }
        : doctor
    ))
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Doctors</h1>
            <p className="text-gray-600">Manage doctor profiles</p>
          </div>
          <Button asChild>
            <Link href="/admin/doctors/create">
              <Plus className="h-4 w-4 mr-2" />
              Add Doctor
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-32 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Doctors</h1>
          <p className="text-gray-600">Manage doctor profiles and settings</p>
        </div>
        <Button asChild className="bg-[#2F797B] hover:bg-[#236B6D]">
          <Link href="/admin/doctors/create">
            <Plus className="h-4 w-4 mr-2" />
            Add Doctor
          </Link>
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-gray-900">{doctors.length}</div>
            <div className="text-sm text-gray-600">Total Doctors</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600">
              {doctors.filter(d => d.registrationCompleted).length}
            </div>
            <div className="text-sm text-gray-600">Active</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {doctors.filter(d => !d.registrationCompleted).length}
            </div>
            <div className="text-sm text-gray-600">Pending</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {doctors.filter(d => d.featured).length}
            </div>
            <div className="text-sm text-gray-600">Featured</div>
          </CardContent>
        </Card>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    {doctor.image ? (
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-lg font-semibold text-gray-600">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                    <p className="text-sm text-gray-600">{doctor.designation}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/doctor/${doctor.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/doctors/${doctor.id}/edit`}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleToggleFeatured(doctor.id)}
                    >
                      {doctor.featured ? "Remove from Featured" : "Add to Featured"}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Experience</p>
                  <p className="font-medium">{doctor.experience} years</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Subspecialities</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {doctor.subspecialities.slice(0, 2).map((sub, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                      >
                        {sub}
                      </span>
                    ))}
                    {doctor.subspecialities.length > 2 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                        +{doctor.subspecialities.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      doctor.registrationCompleted 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {doctor.registrationCompleted ? 'Active' : 'Pending'}
                    </span>
                    {doctor.featured && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm ? `No doctors match "${searchTerm}"` : "No doctors have been added yet."}
            </p>
            {!searchTerm && (
              <Button asChild>
                <Link href="/admin/doctors/create">Add First Doctor</Link>
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default DoctorsPage 