import { RideTracking } from "@/components/ride-tracking"

export const metadata = {
  title: "Track Your Ride - AccessRide",
  description: "Live tracking for your accessibility ride",
}

export default function TrackRidePage({ params }: { params: { rideId: string } }) {
  return <RideTracking rideId={params.rideId} />
}
