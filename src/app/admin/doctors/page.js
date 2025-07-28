"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Filter, MoreHorizontal, Edit, Trash2, Eye, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getAllDoctors } from "@/lib/apiCalls/client/allDoctor"

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Fetch doctors from API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true)
        const doctorsData = await getAllDoctors()
        if (doctorsData) {
          setDoctors(doctorsData)
        }
      } catch (error) {
        console.error("Error fetching doctors:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, [])

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.subspecialities?.some(sub => 
      sub.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  // Pagination calculations
  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentDoctors = filteredDoctors.slice(startIndex, endIndex)

  const handleToggleFeatured = (doctorId) => {
    setDoctors(prev => prev.map(doctor => 
      doctor.id === doctorId 
        ? { ...doctor, featured: !doctor.featured }
        : doctor
    ))
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Utility function to truncate text
  const truncateText = (text, maxLength = 15) => {
    if (!text) return ''
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  const generatePageNumbers = () => {
    const pages = []
    const showPages = 5 // Number of page buttons to show
    
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2))
    let endPage = Math.min(totalPages, startPage + showPages - 1)
    
    // Adjust start page if we're near the end
    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1)
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    
    return pages
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">All Doctors</h1>
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
          <h1 className="text-2xl font-bold text-gray-900">All Doctors</h1>
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

      {/* Results Info */}
      {filteredDoctors.length > 0 && (
        <div className="flex justify-between items-center text-sm text-gray-600">
          <p>
            Showing {startIndex + 1}-{Math.min(endIndex, filteredDoctors.length)} of {filteredDoctors.length} doctors
          </p>
          <p>
            Page {currentPage} of {totalPages}
          </p>
        </div>
      )}

      {/* Doctors Grid - Original Admin Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentDoctors.map((doctor) => (
          <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    {doctor.image || doctor.user?.image ? (
                      <img 
                        src={doctor.image || doctor.user?.image} 
                        alt={doctor.name || doctor.user?.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-lg font-semibold text-gray-600">
                        {(doctor.name || doctor.user?.name)?.split(' ').map(n => n[0]).join('') || '??'}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{doctor.name || doctor.user?.name || 'Unknown Doctor'}</h3>
                    <p className="text-sm text-gray-600">{doctor.designation || 'N/A'}</p>
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
                      <Link href={`/admin/doctors/edit/${doctor.id}`}>
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
                  <p className="font-medium">{doctor.experience || 0} years</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Subspecialities</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {doctor.subspecialities?.slice(0, 2).map((sub, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                        title={sub} // Show full text on hover
                      >
                        {truncateText(sub, 15)}
                      </span>
                    )) || (
                      <span className="text-xs text-gray-500">No subspecialities</span>
                    )}
                    {doctor.subspecialities?.length > 2 && (
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 mt-8">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-1">
            {/* First page if not visible */}
            {generatePageNumbers()[0] > 1 && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(1)}
                  className="w-8 h-8 p-0"
                >
                  1
                </Button>
                {generatePageNumbers()[0] > 2 && (
                  <span className="px-2 text-gray-500">...</span>
                )}
              </>
            )}

            {/* Visible page numbers */}
            {generatePageNumbers().map((pageNum) => (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(pageNum)}
                className={`w-8 h-8 p-0 ${
                  currentPage === pageNum 
                    ? "bg-[#2F797B] hover:bg-[#236B6D] text-white" 
                    : ""
                }`}
              >
                {pageNum}
              </Button>
            ))}

            {/* Last page if not visible */}
            {generatePageNumbers()[generatePageNumbers().length - 1] < totalPages && (
              <>
                {generatePageNumbers()[generatePageNumbers().length - 1] < totalPages - 1 && (
                  <span className="px-2 text-gray-500">...</span>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(totalPages)}
                  className="w-8 h-8 p-0"
                >
                  {totalPages}
                </Button>
              </>
            )}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

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