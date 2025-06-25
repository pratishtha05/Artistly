'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'

const artistSchema = z.object({
  name: z.string().min(2, "Name is required"),
  bio: z.string().min(10, "Bio is too short"),
  category: z.array(z.string()).min(1, "Select at least one category"),
  languages: z.array(z.string()).min(1, "Select languages"),
  feeRange: z.string().min(1, "Select a fee range"),
  location: z.string().min(2, "Location required"),
})

type ArtistFormValues = z.infer<typeof artistSchema>

const categories = ["Singer", "Dancer", "DJ", "Speaker"]
const languages = ["English", "Hindi", "Punjabi", "Bengali"]
const feeRanges = ["₹10k-₹20k", "₹20k-₹40k", "₹40k+"]

export default function ArtistForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ArtistFormValues>({
    resolver: zodResolver(artistSchema),
    defaultValues: {
      category: [],
      languages: [],
    },
  })

  const onSubmit = (data: ArtistFormValues) => {
    console.log("Submitted artist data:", data)
    alert("Artist submitted! Check console.")
  }

  const watchCategory = watch("category", [])
  const watchLanguages = watch("languages", [])

  const handleCheckbox = (field: "category" | "languages", value: string) => {
    const values = new Set(watch(field))
    if (values.has(value)) values.delete(value)
    else values.add(value)
    setValue(field, Array.from(values))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block font-medium">Name</label>
        <input {...register("name")} className="input" />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Bio</label>
        <textarea {...register("bio")} className="input" />
        <p className="text-red-500 text-sm">{errors.bio?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Category</label>
        <div className="flex flex-wrap gap-4 mt-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={watchCategory.includes(cat)}
                onChange={() => handleCheckbox("category", cat)}
              />
              {cat}
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm">{errors.category?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Languages Spoken</label>
        <div className="flex flex-wrap gap-4 mt-2">
          {languages.map((lang) => (
            <label key={lang} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={watchLanguages.includes(lang)}
                onChange={() => handleCheckbox("languages", lang)}
              />
              {lang}
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm">{errors.languages?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Fee Range</label>
        <select {...register("feeRange")} className="input">
          <option value="">Select</option>
          {feeRanges.map((fee) => (
            <option key={fee} value={fee}>{fee}</option>
          ))}
        </select>
        <p className="text-red-500 text-sm">{errors.feeRange?.message}</p>
      </div>

      <div>
        <label className="block font-medium">Profile Image (optional)</label>
        <input
          type="file"
          accept="image/*"
          className="mt-2"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) setImagePreview(URL.createObjectURL(file))
          }}
        />
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="mt-4 w-32 rounded shadow" />
        )}
      </div>

      <div>
        <label className="block font-medium">Location</label>
        <input {...register("location")} className="input" />
        <p className="text-red-500 text-sm">{errors.location?.message}</p>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500"
      >
        Submit Artist
      </button>
    </form>
  )
}
