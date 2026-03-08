import SampleChart from "@/components/charts/sample-chart"
import SampleMap from "@/components/maps/sample-map"

export default function App() {
  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold">
        DICT Bataan OpenGov Portal
      </h1>

      <SampleChart />

      <SampleMap />
    </div>
  )
}