"use client"

import React, { useState, useEffect } from "react"
import { Search, Filter, MoreHorizontal, Eye, Check, X, ChevronLeft, ChevronRight, Clock, CheckCircle, XCircle, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

const DoctorApplicationsPage = () => {
  const [applications, setApplications] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState("all")
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [applicationToDelete, setApplicationToDelete] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const itemsPerPage = 6

  // Fetch applications from API
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/doctor-claims")
        
        if (response.ok) {
          const data = await response.json()
          setApplications(data)
          console.log("data", data)
        } else {
          toast.error("Failed to fetch applications")
        }
      } catch (error) {
        console.error("Error fetching applications:", error)
        toast.error("Error fetching applications")
      } finally {
        setLoading(false)
      }
    }

    fetchApplications()
  }, [])

  // Filter applications
  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.ahpraNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.doctor?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || app.status.toLowerCase() === statusFilter.toLowerCase()
    
    return matchesSearch && matchesStatus
  })

  // Reset to page 1 when search or filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, statusFilter])

  // Pagination calculations
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentApplications = filteredApplications.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const generatePageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
      }
    }
    
    return pages
  }

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600"><Clock className="h-3 w-3 mr-1" />Pending</Badge>
      case 'approved':
        return <Badge variant="outline" className="text-green-600 border-green-600"><CheckCircle className="h-3 w-3 mr-1" />Approved</Badge>
      case 'rejected':
        return <Badge variant="outline" className="text-red-600 border-red-600"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const sendNotificationEmail = async (application, status) => {
    try {
      let subject, message
      
      switch (status) {
        case 'APPROVED':
          subject = 'Doctor Profile Claim Request Approved - Best Orthopaedic Surgeons'
          message = `Dear ${application.name},

We are pleased to inform you that your doctor profile claim request has been APPROVED.

Profile Details:
- Doctor: ${application.doctor?.name || 'N/A'}
- Location: ${application.doctor?.location || 'N/A'}
- AHPRA Number: ${application.ahpraNumber}

Your profile is now linked to your account and you can manage it through your dashboard.

If you have any questions, please don't hesitate to contact our support team.

Best regards,
Best Orthopaedic Surgeons Team`
          break
          
        case 'REJECTED':
          subject = 'Doctor Profile Claim Request Update - Best Orthopaedic Surgeons'
          message = `Dear ${application.name},

We regret to inform you that your doctor profile claim request has been REJECTED.

Profile Details:
- Doctor: ${application.doctor?.name || 'N/A'}
- AHPRA Number: ${application.ahpraNumber}

If you believe this decision was made in error or if you have additional documentation to support your claim, please contact our support team.

Best regards,
Best Orthopaedic Surgeons Team`
          break
          
        case 'PENDING':
          subject = 'Doctor Profile Claim Request Status Update - Best Orthopaedic Surgeons'
          message = `Dear ${application.name},

This is to inform you that your doctor profile claim request status has been updated to PENDING for further review.

Profile Details:
- Doctor: ${application.doctor?.name || 'N/A'}
- Location: ${application.doctor?.location || 'N/A'}
- AHPRA Number: ${application.ahpraNumber}

Your application is currently under review and you will be notified once a decision has been made.

If you have any questions, please don't hesitate to contact our support team.

Best regards,
Best Orthopaedic Surgeons Team`
          break
          
        default:
          return // Don't send email for unknown status
      }

      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: application.email,
          subject: subject,
          message: message,
        }),
      })
    } catch (error) {
      console.error('Error sending notification email:', error)
      // Don't show error toast for email failures as the main action succeeded
    }
  }

  const handleStatusUpdate = async (applicationId, newStatus, userId) => {
    try {
      const response = await fetch(`/api/doctor-claims/${applicationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus, userId: userId }),
      })

      if (response.ok) {
        // Find the application to get email details
        const application = applications.find(app => app.id === applicationId)
        
        // Update the local state
        setApplications(prev => 
          prev.map(app => 
            app.id === applicationId 
              ? { ...app, status: newStatus }
              : app
          )
        )
        
        // Send notification email
        if (application) {
            console.log("app" , application)
          await sendNotificationEmail(application, newStatus)
        }
        
        toast.success(`Application ${newStatus.toLowerCase()} successfully and notification email sent`)
      } else {
        const error = await response.json()
        toast.error(error.message || `Failed to ${newStatus.toLowerCase()} application`)
      }
    } catch (error) {
      console.error(`Error updating application status:`, error)
      toast.error(`Error updating application status`)
    }
  }

  const handleDeleteClick = (application) => {
    setApplicationToDelete(application)
    setDeleteModalOpen(true)
  }

  const handleDeleteConfirm = async () => {
    if (!applicationToDelete) return

    setIsDeleting(true)
    try {
      const response = await fetch(`/api/doctor-claims/${applicationToDelete.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        // Remove the application from local state
        setApplications(prev => prev.filter(app => app.id !== applicationToDelete.id))
        toast.success('Application deleted successfully')
        setDeleteModalOpen(false)
        setApplicationToDelete(null)
      } else {
        const error = await response.json()
        toast.error(error.message || 'Failed to delete application')
      }
    } catch (error) {
      console.error('Error deleting application:', error)
      toast.error('Error deleting application')
    } finally {
      setIsDeleting(false)
    }
  }

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false)
    setApplicationToDelete(null)
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Doctor Applications</h1>
            <p className="text-gray-600">Manage doctor profile claim requests</p>
          </div>
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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Doctor Applications</h1>
          <p className="text-gray-600">Manage doctor profile claim requests</p>
        </div>
        <div className="text-sm text-gray-500">
          Total: {applications.length} applications
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search by name, email, AHPRA number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Status: {statusFilter === "all" ? "All" : statusFilter}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                All Status
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("pending")}>
                Pending
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("approved")}>
                Approved
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("rejected")}>
                Rejected
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentApplications.map((application) => (
          <Card key={application.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-600">
                      {application.name?.split(' ').map(n => n[0]).join('') || '??'}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{application.name}</h3>
                    <p className="text-sm text-gray-600">Claiming: {application.doctor?.name || 'Unknown Doctor'}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    {application.status === 'PENDING' && (
                      <>
                        <DropdownMenuItem 
                          onClick={() => handleStatusUpdate(application.id, 'APPROVED', application.userId)}
                          className="text-green-600"
                        >
                          <Check className="h-4 w-4 mr-2" />
                          Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleStatusUpdate(application.id, 'REJECTED', application.userId)}
                          className="text-red-600"
                        >
                          <X className="h-4 w-4 mr-2" />
                          Reject
                        </DropdownMenuItem>
                      </>
                    )}
                    {application.status === 'APPROVED' && (
                      <DropdownMenuItem 
                        onClick={() => handleStatusUpdate(application.id, 'PENDING', application.userId)}
                        className="text-orange-600"
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        Unapprove
                      </DropdownMenuItem>
                    )}
                    {application.status === 'REJECTED' && (
                      <DropdownMenuItem 
                        onClick={() => handleStatusUpdate(application.id, 'PENDING', application.userId)}
                        className="text-orange-600"
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        Unapprove
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem 
                      onClick={() => handleDeleteClick(application)}
                      className="text-red-600"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Status:</span>
                  {getStatusBadge(application.status)}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Email:</span>
                  <span className="text-sm text-gray-900 truncate max-w-[150px]" title={application.email}>
                    {application.email}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Phone:</span>
                  <span className="text-sm text-gray-900">{application.phone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">AHPRA:</span>
                  <span className="text-sm text-gray-900">{application.ahpraNumber}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Submitted:</span>
                  <span className="text-sm text-gray-900">{formatDate(application.createdAt)}</span>
                </div>
              </div>

              {application.doctor && (
                <div className="pt-3 border-t border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Doctor Profile:</div>
                  <div className="text-sm text-gray-900 font-medium">{application.doctor.name}</div>
                  {application.doctor.location && (
                    <div className="text-sm text-gray-600">{application.doctor.location}</div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredApplications.length)} of {filteredApplications.length} applications
          </div>
          
          <div className="flex items-center gap-2">
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
            <div className="flex items-center gap-1">
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
                  className="w-8 h-8 p-0"
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
        </div>
      )}

      {filteredApplications.length === 0 && !loading && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No applications found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || statusFilter !== "all" 
                ? `No applications match your current filters.` 
                : "No doctor applications have been submitted yet."}
            </p>
            {(searchTerm || statusFilter !== "all") && (
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("")
                  setStatusFilter("all")
                }}
              >
                Clear Filters
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Delete Confirmation Modal */}
      <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-600">Delete Application</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this application? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          {applicationToDelete && (
            <div className="py-4">
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Applicant:</span>
                  <span className="text-sm text-gray-900">{applicationToDelete.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Email:</span>
                  <span className="text-sm text-gray-900">{applicationToDelete.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Doctor:</span>
                  <span className="text-sm text-gray-900">{applicationToDelete.doctor?.name || 'Unknown'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Status:</span>
                  {getStatusBadge(applicationToDelete.status)}
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleDeleteCancel}
              disabled={isDeleting}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteConfirm}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Application
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DoctorApplicationsPage
