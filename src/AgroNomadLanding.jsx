import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { MapPin, HeartPulse, Thermometer, Cpu, Radio, Battery } from "lucide-react";

import logoIg from "@/assets/logos/Logo_instagram.png";
import img1 from "@/assets/agronomad/Agronomad_presentation(1).jpeg";
import img2 from "@/assets/agronomad/Agronomad_presentation(2).jpeg";
import img3 from "@/assets/agronomad/Agronomad_presentation(3).jpeg";
import img4 from "@/assets/agronomad/Agronomad_presentation(4).jpeg";

export default function AgroNomadLanding() {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="w-full border-b sticky top-0 bg-white/80 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex column items-center space-x-2">
            <img src="/logo.jpeg" alt="Logo" className="w-12 h-12 rounded-full"/>
            <h1 className="text-2xl font-bold">
              <span className="text-light-green">Agro</span>
              <span className="text-light-orange">Nomad</span>
            </h1>
          </div>
          
          <nav className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-gray-600">Acerca de</a>
            <a href="#how" className="hover:text-gray-600">Como funciona</a>
            <a href="#features" className="hover:text-gray-600">Prestaciones</a>
            <a href="#tech" className="hover:text-gray-600">Tecnologia</a>
            <a href="#contact" className="hover:text-gray-600">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Monitoreo inteligente de ganado con AgroNomad
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Un collar inteligente diseñado para rastrear la ubicación del ganado y monitorear
              datos de salud vitales como la frecuencia cardíaca y la temperatura corporal en tiempo real.
            </p>
            <Button className="text-lg px-6 py-6">Ver cómo funciona</Button>
          </div>
          <div className="bg-gray-100 rounded-2xl h-[400px] relative overflow-hidden">
            {images.map((img, i) => (
              <img key={i} src={img} alt={`Presentation ${i+1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`} />
            ))}
            <div className="absolute bottom-4 left-4 right-4 h-2 bg-white/50 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full transition-all duration-100" style={{width: `${progress}%`}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Acerca del Proyecto</h3>
          <p className="text-gray-600 text-lg">
            Agronomad es una plataforma de monitoreo inteligente de ganado diseñada para ayudar a los agricultores
            a rastrear su ganado y monitorear indicadores de salud. El dispositivo colgante recopila datos en tiempo real
            y los envía a una plataforma web para un análisis fácil y una toma de decisiones informada.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Como funciona</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl">
              <CardContent className="p-6 text-center">
                <Cpu className="mx-auto mb-4" size={40} />
                <h4 className="font-semibold text-lg mb-2">Dispositivo Colgante</h4>
                <p className="text-gray-600">Instalado sobre el ganado para recopilar datos de salud.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6 text-center">
                <Radio className="mx-auto mb-4" size={40} />
                <h4 className="font-semibold text-lg mb-2">Transmisión Inalámbrica</h4>
                <p className="text-gray-600">Los datos se envían a la plataforma en la nube.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto mb-4" size={40} />
                <h4 className="font-semibold text-lg mb-2">Panel de Monitoreo</h4>
                <p className="text-gray-600">Los agricultores ven los datos en tiempo real.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Prestaciones</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature icon={<MapPin />} title="Seguimiento GPS" />
            <Feature icon={<HeartPulse />} title="Monitoreo de Frecuencia Cardíaca" />
            <Feature icon={<Thermometer />} title="Monitoreo de Temperatura" />
            <Feature icon={<Battery />} title="Bajo Consumo de Energía" />
            <Feature icon={<Radio />} title="Comunicación Inalámbrica" />
            <Feature icon={<Cpu />} title="Procesamiento Inteligente" />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="tech" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Tecnología Utilizada</h3>
          <ul className="text-gray-600 space-y-2">
            <li>ESP32 Microcontrolador</li>
            <li>Módulo GPS</li>
            <li>Sensor de Temperatura</li>
            <li>Sensor de Frecuencia Cardíaca</li>
            <li>Comunicación Inalámbrica (LoRa / GSM / WiFi)</li>
            <li>Panel de monitoreo Web y Fisico(Dashboard)</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Contacto</h3>
          <p className="text-gray-600 mb-2">E.E.S.T N.7("T.R.Q"), Quilmes, Buenos Aires</p>
          <p className="text-gray-600 mb-2">nomadbusiness2026@gmail.com</p>
            <a className="flex items-center justify-center space-x-1 w-fit mx-auto" href="https://www.instagram.com/proyecto.agronomad" target="_blank" rel="noopener noreferrer">
              <img src={logoIg} alt="Instagram" className="w-6 h-6" />
              <p className="text-gray-600">@proyecto.agronomad</p>
            </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t">
        <p className="text-gray-500">© 2026 AgroNomad - Monitoreo Inteligente de Ganado.</p>
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
