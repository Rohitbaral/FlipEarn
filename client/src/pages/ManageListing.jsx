import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const ManageListing = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {userListings} = useSelector((state)=>state.listing)

  const [loadingListing, setLoadingListing] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    platform: '',
    username: '',
    followers_count: '',
    engagement_rate: '',
    montly_views: '',
    niche: '',
    price: '',
    description: '',
    verified: '',
    monetized: '',
    country: '',
    age_range: '',
    images: [],
  })
  return (
    <div>
      <h1>ManageListing page</h1>
    </div>
  )
}

export default ManageListing
