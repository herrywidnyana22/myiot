'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DotStatus } from '@/components/ui/custom/dot-status'
import { Calendar, CalendarCheck, CalendarClock, CircleGauge, Droplet, Gauge, LandPlot, MapPin, MapPinned, Shell, Timer, TriangleAlert } from 'lucide-react'
import { Label } from '@/components/ui/custom/label'
import { getFormattedDateTime, getTimeDistanceFromNow } from '@/lib/datetime'
import { SpinnerPicker } from '@/components/ui/custom/spinner-picker'
import { CardDevice } from '@/components/ui/layout/card-device'
import { PageHeader } from '@/components/ui/layout/page-header'

type DeviceData = {
  temperature: number
  humidity: number
  status: 'online' | 'offline'
  lastUpdated: string
}

export default function DashboardPage() {
  const [data, setData] = useState<DeviceData | null>(null)

  const nextSchedule = '25-05-2025 20:00'
  const lastSchedule = '20-05-2025 20:00'
  const calculateNextSchedule = getTimeDistanceFromNow(nextSchedule)
  const calculateLastSchedule = getTimeDistanceFromNow(lastSchedule)

  useEffect(() => {
    const interval = setInterval(() => {
      const fakeData: DeviceData = {
        temperature: parseFloat((Math.random() * 10 + 25).toFixed(2)),
        humidity: parseFloat((Math.random() * 20 + 60).toFixed(2)),
        status: Math.random() > 0.2 ? 'online' : 'offline',
        lastUpdated: new Date().toLocaleTimeString()
      }
      setData(fakeData)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <PageHeader title="Dashboard"/>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardDevice
          title='Watering System'
          status={'online'}
          content={
            <div className='flex justify-between'>
              <Label
                icon={Droplet}
                size={40}
                label={`${data?.temperature}°C`}
                hintLabel='Total water'
                iconColor="text-sky-500"
                fontColor="text-neutral-600"
              />
              <Label
                icon={Timer}                
                size={40}
                label='14.2 jam'
                iconColor="text-emerald-500"
                fontColor="text-neutral-600"
                hintLabel={"Total Durasi"}
                className='flex-row-reverse'
              />
            </div>
          }
          footer={
            <div className='flex gap-4 items-center'>
              <Label
                icon={Shell}                
                size={14}
                label='14 buah'
                iconColor="text-orange-500"
                fontColor="text-neutral-400"
                hintLabel={"Jumlah keran"}
              />
              <Label
                icon={CalendarClock}                
                size={14}
                label={calculateNextSchedule}
                iconColor="text-orange-500"
                fontColor="text-neutral-400"
                hintLabel={`Terjadwal: ${nextSchedule}`}
              />
              <Label
                icon={CalendarCheck}                
                size={14}
                label={calculateLastSchedule}
                iconColor="text-rose-500"
                fontColor="text-neutral-400"
                hintLabel={`Terakhir aktif: ${lastSchedule}`}
              />
            </div>
          }
        />
        <CardDevice
          title='GPS Tracker'
          status={'offline'}
          content={
            <div className='flex justify-between'>
              <Label
                icon={TriangleAlert}
                size={40}
                label={'40x'}
                hintLabel='Total pelanggaran'
                iconColor="text-rose-500"
                fontColor="text-neutral-600"
              />
              <Label
                icon={Gauge}                
                size={40}
                label='97km/h'
                iconColor="text-emerald-500"
                fontColor="text-neutral-600"
                hintLabel={"Total Durasi"}
                className='flex-row-reverse'
              />
            </div>
          }
          footer={
            <div className='flex gap-4 items-center'>
              <Label
                icon={MapPinned}                
                size={14}
                label={'40km'}
                iconColor="text-sky-500"
                fontColor="text-neutral-400"
                hintLabel={`Max Distance: ${40} km`}
              />
              <Label
                icon={CircleGauge}                
                size={14}
                label={'80km/h'}
                iconColor="text-orange-500"
                fontColor="text-neutral-400"
                hintLabel={`Max Speed: ${80}km/h`}
              />
            </div>
          }
        />
      </div>
    </>
  )
}
