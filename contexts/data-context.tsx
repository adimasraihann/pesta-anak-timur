"use client"

import type React from "react"
import { createContext, useContext } from "react"

interface Batch {
  id: string
  name: string
  category: string
  students: number
  startDate: string
  endDate: string
  status: string
  mentors: string[]
  modules: string[]
}

interface Module {
  id: string
  title: string
  description: string
  category: string
  batch: string
  lessons: number
  duration: string
  status: string
  progress?: number
}

interface DataContextType {
  batches: Batch[]
  modules: Module[]
  getBatchesByMentor: (mentorName: string) => Batch[]
  getModulesByBatch: (batchName: string) => Module[]
  getModulesByMentor: (mentorName: string) => Module[]
}

const DataContext = createContext<DataContextType | undefined>(undefined)

// Dummy data
const BATCHES: Batch[] = [
  {
    id: "1",
    name: "Music Production Batch 1",
    category: "Music Producer",
    students: 32,
    startDate: "2024-01-15",
    endDate: "2024-04-15",
    status: "Active",
    mentors: ["Sarah Johnson"],
    modules: ["Introduction to Music Production", "Audio Recording Techniques", "Mixing and Mastering"],
  },
  {
    id: "2",
    name: "Music Production Batch 2",
    category: "Music Producer",
    students: 28,
    startDate: "2024-02-01",
    endDate: "2024-05-01",
    status: "Active",
    mentors: ["John Smith"],
    modules: ["Introduction to Music Production", "Audio Recording Techniques", "Music Theory Essentials"],
  },
  {
    id: "3",
    name: "Barista Batch 1",
    category: "Barista",
    students: 25,
    startDate: "2024-01-20",
    endDate: "2024-04-20",
    status: "Active",
    mentors: ["John Smith"],
    modules: ["Espresso Basics", "Latte Art Intro", "Coffee Bean Knowledge"],
  },
  {
    id: "4",
    name: "Content Creator Batch 1",
    category: "Content Creator",
    students: 20,
    startDate: "2024-02-15",
    endDate: "2024-05-15",
    status: "Active",
    mentors: ["Sarah Johnson"],
    modules: ["Content Creation Fundamentals", "Video Editing Basics", "Social Media Strategy"],
  },
]

const MODULES: Module[] = [
  {
    id: "1",
    title: "Introduction to Music Production",
    description: "Learn the basics of music production and digital audio workstations",
    category: "Music Producer",
    batch: "Music Production Batch 1",
    lessons: 8,
    duration: "6 hours",
    status: "Published",
    progress: 100,
  },
  {
    id: "2",
    title: "Audio Recording Techniques",
    description: "Master the art of recording high-quality audio in various environments",
    category: "Music Producer",
    batch: "Music Production Batch 1",
    lessons: 10,
    duration: "8 hours",
    status: "Published",
    progress: 75,
  },
  {
    id: "3",
    title: "Mixing and Mastering",
    description: "Advanced techniques for mixing and mastering your music tracks",
    category: "Music Producer",
    batch: "Music Production Batch 1",
    lessons: 12,
    duration: "10 hours",
    status: "Published",
    progress: 0,
  },
  {
    id: "4",
    title: "Music Theory Essentials",
    description: "Understanding scales, chords, and musical composition",
    category: "Music Producer",
    batch: "Music Production Batch 2",
    lessons: 15,
    duration: "12 hours",
    status: "Published",
    progress: 50,
  },
  {
    id: "5",
    title: "Espresso Basics",
    description: "Learn the fundamentals of espresso preparation",
    category: "Barista",
    batch: "Barista Batch 1",
    lessons: 6,
    duration: "4 hours",
    status: "Published",
    progress: 80,
  },
  {
    id: "6",
    title: "Latte Art Intro",
    description: "Introduction to creating beautiful latte art",
    category: "Barista",
    batch: "Barista Batch 1",
    lessons: 8,
    duration: "6 hours",
    status: "Published",
    progress: 60,
  },
  {
    id: "7",
    title: "Coffee Bean Knowledge",
    description: "Understanding different coffee beans and their characteristics",
    category: "Barista",
    batch: "Barista Batch 1",
    lessons: 5,
    duration: "3 hours",
    status: "Published",
    progress: 0,
  },
  {
    id: "8",
    title: "Content Creation Fundamentals",
    description: "Basic principles of creating engaging content",
    category: "Content Creator",
    batch: "Content Creator Batch 1",
    lessons: 10,
    duration: "8 hours",
    status: "Published",
    progress: 90,
  },
]

export function DataProvider({ children }: { children: React.ReactNode }) {
  const getBatchesByMentor = (mentorName: string): Batch[] => {
    return BATCHES.filter((batch) => batch.mentors.includes(mentorName))
  }

  const getModulesByBatch = (batchName: string): Module[] => {
    return MODULES.filter((module) => module.batch === batchName)
  }

  const getModulesByMentor = (mentorName: string): Module[] => {
    const mentorBatches = getBatchesByMentor(mentorName)
    const batchNames = mentorBatches.map((batch) => batch.name)
    return MODULES.filter((module) => batchNames.includes(module.batch))
  }

  return (
    <DataContext.Provider
      value={{
        batches: BATCHES,
        modules: MODULES,
        getBatchesByMentor,
        getModulesByBatch,
        getModulesByMentor,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider")
  }
  return context
}
