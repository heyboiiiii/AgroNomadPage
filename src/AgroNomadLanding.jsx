import React from "react";
import { Card, CardContent } from "@/components/ui/card";
/*import { Button } from "@/components/ui/button";*/
import { MapPin, HeartPulse, Thermometer, Cpu, Radio, Battery } from "lucide-react";

export default function AgroNomadLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="w-full border-b sticky top-0 bg-white/80 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">AgroNomad</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-gray-600">About</a>
            <a href="#how" className="hover:text-gray-600">How it works</a>
            <a href="#features" className="hover:text-gray-600">Features</a>
            <a href="#tech" className="hover:text-gray-600">Technology</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Smart Cattle Monitoring with AgroNomad
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A smart necklace designed to track cattle location and monitor
              vital health data such as heart rate and body temperature in real time.
            </p>
            <button className="text-lg px-6 py-6">See how it works</button>
          </div>
          <div className="bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center">
            <p className="text-gray-400">Project Image</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">About the Project</h3>
          <p className="text-gray-600 text-lg">
            AgroNomad is a smart livestock monitoring system designed to help farmers
            track their cattle and monitor health indicators. The necklace device
            collects real-time data and sends it to a web platform for easy analysis
            and decision making.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">How it Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl">
              <CardContent className="p-6 text-center">
                <Cpu className="mx-auto mb-4" size={40} />
                <h4 className="font-semibold text-lg mb-2">Necklace Device</h4>
                <p className="text-gray-600">Attached to the cow to collect health data.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6 text-center">
                <Radio className="mx-auto mb-4" size={40} />
                <h4 className="font-semibold text-lg mb-2">Wireless Transmission</h4>
                <p className="text-gray-600">Data is sent to the cloud platform.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto mb-4" size={40} />
                <h4 className="font-semibold text-lg mb-2">Monitoring Dashboard</h4>
                <p className="text-gray-600">Farmers view data in real time.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature icon={<MapPin />} title="GPS Tracking" />
            <Feature icon={<HeartPulse />} title="Heart Rate Monitoring" />
            <Feature icon={<Thermometer />} title="Temperature Monitoring" />
            <Feature icon={<Battery />} title="Low Power Consumption" />
            <Feature icon={<Radio />} title="Wireless Communication" />
            <Feature icon={<Cpu />} title="Smart Processing" />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="tech" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Technology Used</h3>
          <ul className="text-gray-600 space-y-2">
            <li>ESP32 / Arduino Microcontroller</li>
            <li>GPS Module</li>
            <li>Temperature Sensor</li>
            <li>Heart Rate Sensor</li>
            <li>Wireless Communication (LoRa / GSM / WiFi)</li>
            <li>React + Tailwind Dashboard</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Contact</h3>
          <p className="text-gray-600 mb-4">
            Final High School Project - AgroNomad
          </p>
          <p className="text-gray-600">Your Name</p>
          <p className="text-gray-600">Your School</p>
          <p className="text-gray-600">Email: your@email.com</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t">
        <p className="text-gray-500">© 2026 AgroNomad - Smart Livestock Monitoring</p>
      </footer>
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4">{icon}</div>
        <h4 className="font-semibold text-lg">{title}</h4>
      </CardContent>
    </Card>
  );
}
