/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import CutOneLogo from "./components/CutOneLogo";
import pzBarbershopImg from "./assets/images/pz_barbershop_1780863657701.png";
import cutOneLogoImg from "./assets/images/cut_one_logo_1780863673282.png";
import pzBarberLogoImg from "./assets/images/pz_barber_logo_1780864942954.png";
import { 
  Check, 
  Instagram, 
  MessageCircle, 
  Globe, 
  Palette, 
  Zap,
  Star,
  Plus,
  Trash2,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Clock,
  Smartphone,
  Sparkles,
  DollarSign,
  TrendingUp,
  Sliders,
  User,
  Scissors,
  ArrowRight,
  Menu,
  X,
  CreditCard,
  Building,
  Target,
  HelpCircle,
  ChevronDown
} from "lucide-react";

// --- Constants & Contacts ---
const whatsappUrl = "https://wa.me/573114168811"; // Official contact coordinate
const INSTAGRAM_URL = "https://www.instagram.com/cutone.app";

export default function App() {
  // active plan selected in pricing selector (on mobile views)
  const [activePlanIdx, setActivePlanIdx] = useState<number>(2); // Default is "Pro 💎"
  
  // Mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Top banner rotating index and messages
  const [currentBannerIdx, setCurrentBannerIdx] = useState<number>(0);
  const bannerMessages = [
    {
      badge: "Soporte 24/7",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      text: "Acompañamiento 1-a-1 e instalación directa de nuestro equipo en Colombia.",
      sub: "¡Configuramos tu barbería por ti!"
    },
    {
      badge: "Cero Esfuerzo",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      text: "Implementación express garantizada en 2 horas sin pausar tus turnos.",
      sub: "Soporte VIP inmediato"
    },
    {
      badge: "Migración Gratis",
      badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      text: "Cargamos tu lista de clientes y configuramos tus barberos con soporte ilimitado.",
      sub: "Listo para usar"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIdx((prev) => (prev + 1) % bannerMessages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // FAQ accordion state and data
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const FAQ_DATA = [
    {
      q: "¿Cuánto tiempo tarda en estar lista mi página de reservas?",
      a: "¡Súper rápido! Menos de 2 horas desde que nos compartes tu información por WhatsApp (horarios de atención, fotos de tus barberos y lista de servicios). Nosotros configuramos absolutamente todo por ti para que no pierdas tiempo."
    },
    {
      q: "¿Tengo que saber de tecnología o configurar servidores?",
      a: "No, en lo absoluto. No necesitas lidiar con hosting, bases de datos o códigos complicados. Nuestro equipo se encarga de crear tu enlace elegante, optimizarlo para celulares y entregártelo listo para usar. Tu única tarea será ponerlo en tu perfil de Instagram."
    },
    {
      q: "¿Cómo funciona el soporte técnico 24/7 de Cut-One?",
      a: "Ofrecemos soporte técnico humano, directo e inmediato vía WhatsApp. Si necesitas modificar tus precios, dar de alta un nuevo barbero, bloquear un día festivo o ajustar tus comisiones, nos escribes un mensaje al +57 311 416 8811 y nuestro equipo lo soluciona en minutos."
    },
    {
      q: "¿Hay algún cobro o comisión extra por cada cita agendada?",
      a: "No. Solo pagas el valor mensual fijo de tu plan (Básico, Estándar o Pro). No cobramos comisiones ni tarifas ocultas sobre el cobro de tus servicios en la barbería. Todo lo que facturas es 100% de tu negocio."
    },
    {
      q: "¿El sistema funciona directamente como mensajes de WhatsApp?",
      a: "No de forma manual. En lugar de pasar horas contestando mensajes repetitivos para adivinar horas libres, te damos una página web de reservas impecable donde tus clientes ingresan desde su celular, eligen el servicio, su barbero favorito y reservan de forma autónoma en 20 segundos. Las reservas se guardan ordenadas en tu panel en tiempo real, liberando tu tiempo de chats manuales."
    },
    {
      q: "¿Cómo se calculan las comisiones de los barberos?",
      a: "El sistema automatiza todo el proceso financiero de la barbería. Cada vez que se completa una cita, el sistema calcula la comisión exacta del barbero de forma automática basándose en las tarifas de los servicios y el porcentaje de comisión que definas para cada uno. Olvídate de llevar cuentas en papel al final de la semana."
    },
    {
      q: "¿Tienen servicio de migración si actualmente uso otro programa u hojas de cálculo?",
      a: "¡Sí, al 100%! Sabemos que cambiar de software da pereza o temor a perder información valiosa de tus clientes. Ofrecemos un servicio de migración gratuito donde nuestro equipo se encarga de transferir toda tu base de datos (clientes, catálogo de servicios, inventario e historial de citas) a Cut-One en menos de 24 horas, sin detener tu operación y garantizando una transición impecable."
    }
  ];

  // Pricing Plans
  const PLANS_DATA = [
    {
      name: "Básico",
      tag: "Arranque",
      tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      price: "59.900",
      whatsappMsg: "Hola Cut-One, me interesa conocer más del Plan Básico (59.900 COP/mes) para mi barbería.",
      description: "Ideal para barberos independientes que inician su digitalización.",
      features: [
        { text: "Enlace personalizado de reserva", included: true },
        { text: "Hasta 2 barberos/colaboradores", included: true },
        { text: "Alertas automáticas de confirmación", included: true },
        { text: "Pestaña de turnos interactiva", included: true },
        { text: "Panel ejecutivo de caja e ingresos", included: false },
        { text: "Soporte prioritario 24/7", included: false },
        { text: "Dominio propio personalizado", included: false }
      ]
    },
    {
      name: "Estándar",
      tag: "Recomendado",
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      price: "99.900",
      hasPromo: true,
      promoPrice: "89.910",
      promoText: "¡10% DE DESCUENTO EN LOS PRIMEROS 2 MESES!",
      whatsappMsg: "Hola Cut-One, me interesa conocer más del Plan Estándar (99.900 COP/mes) con el 10% de descuento para mis primeros 2 meses.",
      description: "Todas las funcionalidades clave para impulsar tu barbería.",
      features: [
        { text: "Todas las funcionalidades del sistema", included: true },
        { text: "Solo hasta 5 barberos/colaboradores", included: true },
        { text: "Cálculo de comisiones de barberos", included: true },
        { text: "Recordatorios preventivos de cita", included: true },
        { text: "Historial de turnos y caja rápida", included: true },
        { text: "Página de reservas estándar móvil", included: true },
        { text: "Personalización de colores/logo de reserva", included: false }
      ]
    },
    {
      name: "Pro 💎",
      tag: "La Elite",
      tagColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      price: "189.900",
      whatsappMsg: "Hola Cut-One, quiero agendar el Plan Pro (189.900 COP/mes) para mi barbería.",
      description: "El sistema con absolutamente todas sus funcionalidades para máxima elite.",
      features: [
        { text: "Sistema con todas las funcionalidades", included: true },
        { text: "Hasta 10 colaboradores / barberos", included: true },
        { text: "Cálculo automático de comisiones", included: true },
        { text: "Página de reservas 100% personalizada", included: true },
        { text: "Capacitación 1 a 1 para tu equipo", included: true },
        { text: "Soporte prioritario e inmediato", included: true },
        { text: "Sin marca de agua Cut-One", included: true }
      ]
    },
    {
      name: "Multi-Sede",
      tag: "Franquicias",
      tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      price: "249.900",
      whatsappMsg: "Hola Cut-One, requiero asesoría sobre el plan Multi-Sede (249.900 COP/mes) para cadena de locales.",
      description: "Control absoluto para múltiples sucursales y franquicias.",
      features: [
        { text: "Colaboradores e insumos ilimitados", included: true },
        { text: "Control multi-sucursal integrado", included: true },
        { text: "Estadísticas consolidadas por sede", included: true },
        { text: "Cajas independientes multisede", included: true },
        { text: "Capacitación a sucursales ilimitadas", included: true },
        { text: "Soporte VIP telefónico exclusivo", included: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-blue-600/35 overflow-x-hidden flex flex-col justify-between">
      
      {/* React 19 SEO & Social Share Metadata Tags - Hoisted automatically to the document head */}
      <title>Cut-One | Agenda tu Barbería en Colombia</title>
      <meta name="description" content="Automatiza tu barbería con el enlace de reservas ultra-rápido para celular. Control de barberos, cálculo automático de comisiones, capacitación 1 a 1 y soporte VIP 24/7." />
      <meta name="keywords" content="Cut-One, cutone, agenda barberia colombia, app barberos colombia, software de reservas, gestionar barberia, comisiones de barberos" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://ais-pre-hnzzplcllf5ihj7dlslanf-273751191439.us-east1.run.app" />

      {/* Open Graph Meta Tags (Optimized for WhatsApp, Messenger, Instagram, and Facebook) */}
      <meta property="og:title" content="Cut-One | Agenda tu Barbería en Colombia" />
      <meta property="og:description" content="Automatiza tu barbería hoy. Enlace personalizado en el que tus clientes reservan de forma autónoma en 20 segundos y tú calculas comisiones sin esfuerzo." />
      <meta property="og:image" content={pzBarbershopImg} />
      <meta property="og:url" content="https://ais-pre-hnzzplcllf5ihj7dlslanf-273751191439.us-east1.run.app" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Cut-One" />
      <meta property="og:locale" content="es_CO" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cut-One | Agenda tu Barbería en Colombia" />
      <meta name="twitter:description" content="Todas las funcionalidades clave para tu barbería: reservas en 20 segundos, control de barberos, comisiones y soporte prioritario 24/7." />
      <meta name="twitter:image" content={pzBarbershopImg} />
      
      {/* Dynamic Animated Top Banner (Cintillo de Soporte y Facilidad) */}
      <div className="relative bg-[#080808] border-b border-white/[0.04] py-2 px-4 overflow-hidden select-none z-55">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-emerald-950/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBannerIdx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className={`text-[9px] uppercase tracking-widest font-black px-2 py-0.5 rounded-full border ${bannerMessages[currentBannerIdx].badgeColor}`}>
                  {bannerMessages[currentBannerIdx].badge}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-neutral-200">
                {bannerMessages[currentBannerIdx].text}{" "}
                <span className="hidden sm:inline text-neutral-500 font-normal">|</span>{" "}
                <span className="text-blue-400 font-extrabold sm:font-bold">
                  {bannerMessages[currentBannerIdx].sub}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Background decoration glow gradients */}
      <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[10%] w-[80%] h-[35%] bg-blue-600/10 blur-[130px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[40%] bg-emerald-500/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[30%] bg-blue-500/5 blur-[140px] rounded-full" />
      </div>

      {/* Modern, Highly Responsive Global Header */}
      <header className="sticky top-0 bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.04] z-50 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CutOneLogo size={42} />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-black tracking-tight text-white">Cut-One</span>
                <span className="text-[9px] bg-blue-500/15 text-blue-400 px-1.5 py-0.5 rounded font-extrabold tracking-wide uppercase">v2.0</span>
              </div>
              <span className="text-[10px] text-neutral-400 font-medium block">Agendas para Barberías en Colombia</span>
            </div>
          </div>

          {/* Desktop Navigation Links (Hidden on small mobile viewports) */}
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase font-extrabold tracking-widest text-neutral-400">
            <a href="#beneficios" className="hover:text-blue-400 transition-colors">Beneficios</a>
            <a href="#planes" className="hover:text-blue-400 transition-colors">Planes</a>
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Dropdown Mobile Navigation Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 border-t border-white/[0.04] pt-3 pb-2 space-y-2 text-sm font-semibold text-neutral-300"
            >
              <a 
                href="#beneficios" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-lg hover:bg-white/[0.03] hover:text-white"
              >
                Beneficios Clave
              </a>
              <a 
                href="#planes" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-lg hover:bg-white/[0.03] hover:text-white"
              >
                Planes Mensuales
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Container */}
      <div className="w-full flex-1">
        
        {/* --- HERO SECTION: FULL WIDTH BOUNDED --- */}
        <section className="relative px-4 sm:px-6 pt-8 sm:pt-16 pb-12 sm:pb-20 max-w-7xl mx-auto text-center space-y-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[70%] h-[70%] soft-glow pointer-events-none rounded-full" />
          
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400">
            <Smartphone size={12} />
            <span>Nativo para Celular • Optimizado 100%</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight uppercase max-w-4xl mx-auto">
            REVOLUCIONA LAS RESERVAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500">
              DE TU BARBERÍA
            </span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Dile adiós a las horas perdidas coordinando citas por chats de WhatsApp. Cut-One te proporciona una landing page de reservas ultra-rápida nativa para celular donde tus clientes agendan de forma autónoma en 20 segundos.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2 max-w-sm sm:max-w-none mx-auto">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black py-3.5 px-7 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all active:scale-95 shadow-xl shadow-white/5 inline-flex items-center justify-center gap-1.5"
            >
              <MessageCircle size={14} className="fill-black" />
              <span>Solicitar Demo Gratis</span>
            </a>
            <a 
              href="#planes" 
              className="bg-blue-600 hover:bg-blue-500 text-white py-3.5 px-7 rounded-xl font-bold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-blue-500/20 text-center"
            >
              Ver Planes COP
            </a>
          </div>

          {/* Social Proof and trust elements */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto border-t border-white/[0.04] mt-10">
            <div className="p-4 bg-white/[0.01] border border-white/[0.03] rounded-2xl">
              <span className="text-lg sm:text-xl font-black text-emerald-400 font-display block">85%</span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-extrabold block mt-0.5">Menos Ausencias</span>
            </div>
            <div className="p-4 bg-white/[0.01] border border-white/[0.03] rounded-2xl">
              <span className="text-lg sm:text-xl font-black text-yellow-500 font-display block">4.9 / 5.0</span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-extrabold block mt-0.5">Calificación Promedio</span>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: THE UNIQUE VALUE PROPOSITION / BENEFITS --- */}
        <section id="beneficios" className="bg-[#080808] border-y border-white/[0.04] py-14 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-[10px] text-blue-500 uppercase tracking-widest font-black bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-500/20">
                Puntos de Diferencia
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Diseño de Élite Pensado para WhatsApp</h2>
              <p className="text-neutral-400 text-xs sm:text-sm">
                Tu cliente promedio reserva desde el celular de camino al trabajo o desde su casa. Nuestro motor elimina fricciones.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Benefit CARD 1 */}
              <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-2xl relative group hover:border-white/10 transition-all duration-300">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl w-fit mb-4">
                  <Smartphone size={20} />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wide mb-2">Simplicidad de Un Solo Paso</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Cero contraseñas o descargas. El cliente abre el link de tu bio, selecciona servicio, barbero, hora, introduce su celular y ¡listo! Proceso completado en menos de 1 minuto.
                </p>
              </div>

              {/* Benefit CARD 2 */}
              <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-2xl relative group hover:border-white/10 transition-all duration-300">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl w-fit mb-4">
                  <MessageCircle size={20} />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wide mb-2">Recordatorios en Piloto Automático</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Nuestra plataforma genera un formato claro de recordatorio para que tus clientes confirmen de regreso, reduciendo el ausentismo (no-show) de un 22% a menos del 4%.
                </p>
              </div>

              {/* Benefit CARD 3 */}
              <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-2xl relative group hover:border-white/10 transition-all duration-300">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl w-fit mb-4">
                  <Calendar size={20} />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wide mb-2">Agendamiento Autónomo 24/7</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Permite a tus clientes agendar a cualquier hora, incluso de noche o en tus días libres, liberándote de contestar chats interminables para separar turnos.
                </p>
              </div>

              {/* Benefit CARD 4 */}
              <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-2xl relative group hover:border-white/10 transition-all duration-300">
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 rounded-xl w-fit mb-4">
                  <Palette size={20} />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wide mb-2">Tu Marca de Barbería Destaca</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Estética oscura impecable, fotos del equipo en alta resolución, y enlaces elegantes que proyectan profesionalismo y estatus para tu academia o negocio.
                </p>
              </div>

              {/* Benefit CARD 5 */}
              <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-2xl relative group hover:border-white/10 transition-all duration-300">
                <div className="p-3 bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-xl w-fit mb-4">
                  <TrendingUp size={20} />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wide mb-2">Comisiones Exactas en Vivo</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  El administrador ve los reportes en vivo de cuántos cortes ha realizado cada colaborador y calcula su comisión correspondiente en dos clics.
                </p>
              </div>

              {/* Benefit CARD 6 */}
              <div className="p-6 bg-blue-600/15 border border-blue-500/20 rounded-2xl relative group">
                <div className="p-3 bg-blue-500 text-white rounded-xl w-fit mb-4">
                  <Zap size={20} />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wide mb-2">Adaptación para Colombia</h3>
                <p className="text-neutral-300 text-xs leading-relaxed">
                  La única agenda pensada exclusivamente con la jerga, precios en COP, soporte de soporte por WhatsApp y flujos bancarios locales de mayor impacto en Colombia.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* --- SECTION 4: CLIENTS / TRUST / TESTIMONIALS (PZ BARBERSHOP) --- */}
        <section id="clientes" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] text-blue-500 uppercase tracking-widest font-black bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-500/20">
              Historias de Éxito
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Clientes que ya confían en nosotros</h2>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Conoce cómo las mejores barberías de la región automatizan su operación diaria y elevan la experiencia de sus clientes.
            </p>
          </div>

          <div className="bg-[#0b0b0b] border border-white/[0.04] rounded-3xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="grid md:grid-cols-12 gap-8 items-stretch">
              {/* Image Container with high quality logo presentation */}
              <div className="md:col-span-5 relative group flex flex-col justify-center items-center">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-neutral-800 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative bg-black rounded-2xl p-6 overflow-hidden border border-white/10 shadow-2xl flex-1 flex flex-col justify-center items-center w-full min-h-[250px]">
                  <img 
                    src={pzBarberLogoImg} 
                    alt="PZ Barbershop Logo" 
                    referrerPolicy="no-referrer"
                    className="w-[80%] max-w-[220px] md:max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03] contrast-[3.5] brightness-[1.1] grayscale" 
                  />
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="text-[9px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md bg-black/90">
                      Cliente Oficial
                    </span>
                  </div>
                </div>
              </div>

              {/* Review Testimonial Details */}
              <div className="md:col-span-7 space-y-5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base text-neutral-300 italic font-medium leading-relaxed">
                  "Antes de Cut-One, perdíamos demasiado tiempo coordinando citas en WhatsApp; era un caos de mensajes y turnos cruzados. Desde que pusimos el enlace de reserva, el 90% de nuestros clientes se agendan solos en segundos. Los barberos ven su agenda en vivo y el cálculo de comisiones es exacto. Es la mejor inversión que hemos hecho para el negocio."
                </blockquote>

                <div className="border-t border-white/[0.05] pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-black uppercase text-white tracking-wide">PZ Barbershop</h4>
                    <p className="text-[10px] text-neutral-550 uppercase tracking-wider font-extrabold mt-0.5">Barbería Asociada • Colombia</p>
                  </div>
                  
                  {/* Subtle decorative check icon */}
                  <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                    <Check size={11} />
                    <span>Verificado con éxito</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 5: PRICING PLANS (LOS PLANES QUE YA TENÍAMOS - OPTIMIZED FOR MOBILE TOUCH SPLIT AND DESKTOP GRIDS) --- */}
        <section id="planes" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] bg-amber-500/10 text-amber-500 uppercase font-black px-3 py-1 rounded-full border border-amber-500/20 inline-block">
              Precios Transparentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Planes de Suscripción Mensual</h2>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Sin contratos de permanencia ni cláusulas raras. Cambia de nivel o cancela cuando quieras directamente de forma autónoma.
            </p>
          </div>

          {/* MOBILE ONLY INTERACTIVE SELECTOR (To avoid long list scrolling on cellphones) */}
          <div className="md:hidden block">
            <div className="bg-neutral-900/90 p-1 rounded-xl flex justify-between gap-1 border border-white/[0.03] mb-4">
              {PLANS_DATA.map((plan, idx) => (
                <button
                  key={plan.name}
                  onClick={() => setActivePlanIdx(idx)}
                  className={`flex-1 py-2.5 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activePlanIdx === idx
                      ? "bg-white text-black font-extrabold shadow-md"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  {plan.name.replace(" 💎", "")}
                </button>
              ))}
            </div>

            {/* Simulated selected plan display */}
            <div className="bg-[#0b0b0b] border border-neutral-800 rounded-3xl p-5 space-y-5 relative overflow-hidden">
              {PLANS_DATA[activePlanIdx].hasPromo && (
                <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 p-3 rounded-xl text-[10px] font-black text-center select-none tracking-wide animate-pulse">
                  🎁 ¡Este plan cuenta con {PLANS_DATA[activePlanIdx].promoText}!
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded border ${PLANS_DATA[activePlanIdx].tagColor}`}>
                  {PLANS_DATA[activePlanIdx].tag}
                </span>
                {PLANS_DATA[activePlanIdx].hasPromo && PLANS_DATA[activePlanIdx].promoPrice ? (
                  <div className="flex flex-col items-end">
                    <span className="text-[11px] text-neutral-500 line-through font-mono">${PLANS_DATA[activePlanIdx].price}</span>
                    <div className="flex items-baseline gap-0.5 font-mono">
                      <span className="text-2xl font-black text-emerald-400">${PLANS_DATA[activePlanIdx].promoPrice}</span>
                      <span className="text-[10px] text-emerald-400/80 font-medium whitespace-nowrap">/ mes *</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-2xl font-black text-white">${PLANS_DATA[activePlanIdx].price}</span>
                    <span className="text-[10px] text-neutral-500">/ mes</span>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-lg font-black text-white uppercase">{PLANS_DATA[activePlanIdx].name}</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-normal">{PLANS_DATA[activePlanIdx].description}</p>
              </div>

              <div className="space-y-3 pt-3 border-t border-neutral-800/80">
                <span className="text-[9px] text-[#555] uppercase font-black tracking-wider block">Beneficios del plan:</span>
                <div className="space-y-2">
                  {PLANS_DATA[activePlanIdx].features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <div className={`mt-0.5 w-4.5 h-4.5 rounded-md flex items-center justify-center flex-shrink-0 ${
                        feat.included 
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/10" 
                          : "bg-neutral-900 text-neutral-600/30 border border-neutral-800"
                      }`}>
                        {feat.included ? <Check size={11} /> : <div className="w-1.5 h-[1.5px] bg-neutral-600" />}
                      </div>
                      <span className={`${feat.included ? "text-neutral-300" : "text-neutral-600 line-through font-light decoration-neutral-800"}`}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={`${whatsappUrl}?text=${encodeURIComponent(PLANS_DATA[activePlanIdx].whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md mt-4 shadow-blue-500/10 select-none"
              >
                <MessageCircle size={14} className="fill-white" />
                <span>Elegir Plan {PLANS_DATA[activePlanIdx].name}</span>
              </a>
            </div>
          </div>

          {/* DESKTOP GRID: Show ALL plans aligned side-by-side (Hidden on Mobile) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PLANS_DATA.map((plan, idx) => (
              <div 
                key={plan.name}
                className={`bg-[#0b0b0b] border rounded-3xl p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 relative ${
                  plan.name.includes("Pro") 
                    ? "border-amber-500/30 shadow-2xl shadow-amber-500/5"
                    : plan.hasPromo
                    ? "border-emerald-500/25 shadow-2xl shadow-emerald-500/5 rgb-glow"
                    : "border-white/[0.04] shadow-md"
                }`}
              >
                {plan.name.includes("Pro") && (
                  <div className="absolute top-[-9px] right-4 bg-amber-500 text-black text-[8px] font-black uppercase px-2.5 py-0.5 rounded-full select-none tracking-widest">
                    RECOMENDADO
                  </div>
                )}
                {plan.hasPromo && (
                  <div className="absolute top-[-9px] right-4 bg-emerald-500 text-black text-[8px] font-black uppercase px-2.5 py-0.5 rounded-full select-none tracking-widest animate-pulse">
                    10% Descuento
                  </div>
                )}

                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border ${plan.tagColor}`}>
                      {plan.tag}
                    </span>
                    {plan.hasPromo && plan.promoPrice ? (
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-neutral-500 line-through font-mono">${plan.price}</span>
                        <div className="flex items-baseline gap-0.5 font-mono">
                          <span className="text-xl lg:text-2xl font-black text-emerald-400">${plan.promoPrice}</span>
                          <span className="text-[9px] text-emerald-400/80">/m *</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-0.5 font-mono">
                        <span className="text-xl lg:text-2xl font-black text-white">${plan.price}</span>
                        <span className="text-[9px] text-neutral-500">/m</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-black text-white uppercase">{plan.name}</h3>
                    <p className="text-[11px] text-neutral-400 mt-1 leading-normal">{plan.description}</p>
                  </div>

                  {plan.hasPromo && (
                    <div className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold leading-normal p-2.5 rounded-xl border border-emerald-500/20 text-center select-none">
                      🎁 10% de descuento en los primeros dos meses.
                    </div>
                  )}

                  <div className="space-y-2.5 pt-3 border-t border-white/[0.04]">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <div className={`mt-0.5 w-4 h-4 rounded-md flex items-center justify-center flex-shrink-0 ${
                          feat.included 
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/10" 
                            : "bg-neutral-900 text-neutral-600/30 border border-neutral-800"
                        }`}>
                          {feat.included ? <Check size={10} /> : <div className="w-1.5 h-[1.5px] bg-neutral-600" />}
                        </div>
                        <span className={`text-[11px] ${feat.included ? "text-neutral-300" : "text-neutral-600 line-through decoration-neutral-800"}`}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href={`${whatsappUrl}?text=${encodeURIComponent(plan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 active:scale-95 transition-all select-none ${
                      plan.name.includes("Pro")
                        ? "bg-amber-500 text-black hover:bg-amber-400"
                        : "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/10"
                    }`}
                  >
                    <MessageCircle size={12} className={plan.name.includes("Pro") ? "fill-black" : "fill-white"} />
                    <span>Elegir Plan</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </section>

        {/* --- SECTION 6: HOW TO SET UP (3 SIMPLE STEPS) --- */}
        <section className="bg-[#080808] border-t border-white/[0.04] py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-2">
                <Target size={20} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Tu Agenda Lista en 3 Simples Pasos</h2>
              <p className="text-neutral-400 text-xs sm:text-sm max-w-sm mx-auto">
                No necesitas saber de sistemas. Nosotros nos encargamos de todo el soporte técnico por ti.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              
              <div className="bg-black/50 border border-white/[0.03] p-5 rounded-2xl relative">
                <div className="w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-black mb-3">
                  1
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#ddd] mb-1.5">
                  Elige Plan & Cuéntanos
                </h3>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  Chatea con nosotros por WhatsApp. Cuéntanos cuál es tu plan ideal y pásanos tus servicios, fotos de los barberos y sus horarios.
                </p>
              </div>

              <div className="bg-black/50 border border-white/[0.03] p-5 rounded-2xl relative">
                <div className="w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-black mb-3">
                  2
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#ddd] mb-1.5">
                  Pegas el Link en tu Bio
                </h3>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  Te entregamos tu enlace elegante en menos de 2 horas. Lo pones en tu perfil de Instagram, TikTok, o como respuesta rápida en WhatsApp Business.
                </p>
              </div>

              <div className="bg-black/50 border border-white/[0.03] p-5 rounded-2xl relative">
                <div className="w-7 h-7 bg-emerald-500 text-black rounded-full flex items-center justify-center text-xs font-black mb-3">
                  3
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-1.5">
                  ¡Automatización Total!
                </h3>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  Tus clientes se agendan solos, las ausencias se reducen más de un 80% y tú mantienes el control financiero de comisiones sin un solo papel.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* --- SECTION 6B: MIGRATION SPECIAL OFFER --- */}
        <section id="migracion" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto space-y-12 border-t border-white/[0.04]">
          <div className="bg-gradient-to-br from-[#0c0c0d] to-[#040405] border border-emerald-500/25 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            {/* Background glowing ambient radial gradient */}
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Visual presentation of benefits */}
              <div className="md:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-400 uppercase font-black px-3 py-1 rounded-full border border-emerald-500/25 tracking-widest inline-block select-none">
                    🔑 MIGRACIÓN 100% GRATUITA Y VIP
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                    ¿Usas otra plataforma o Excel? <br />
                    <span className="text-emerald-400">Te mudamos sin costo</span> y sin complicaciones
                  </h2>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                    Sabemos que cambiar de herramienta de gestión puede traer inquietud por la seguridad de tus clientes e historial de ventas. Por eso, nuestro equipo de soporte VIP se encarga de transferir de forma íntegra toda tu información en <span className="text-white font-extrabold">menos de 24 horas</span>. ¡Impresiona a tus clientes con una experiencia de reserva premium desde el celular y eleva el nivel de tu marca!
                  </p>
                </div>

                {/* Grid of migrating assets */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-emerald-400 bg-emerald-500/10 p-1.5 rounded-lg shrink-0">
                      <Check size={13} />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-neutral-200">Lista de Clientes</h4>
                      <p className="text-[10px] text-neutral-500">Contactos e información</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-emerald-400 bg-emerald-500/10 p-1.5 rounded-lg shrink-0">
                      <Check size={13} />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-neutral-200">Servicios y Catálogo</h4>
                      <p className="text-[10px] text-neutral-500">Precios y duraciones</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-emerald-400 bg-emerald-500/10 p-1.5 rounded-lg shrink-0">
                      <Check size={13} />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-neutral-200">Historial Completo</h4>
                      <p className="text-[10px] text-neutral-500">Citas y notas históricas</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-emerald-400 bg-emerald-500/10 p-1.5 rounded-lg shrink-0">
                      <Check size={13} />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-neutral-200">Barberos y Equipos</h4>
                      <p className="text-[10px] text-neutral-500">Horarios y comisiones</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[10px] text-neutral-500 italic leading-relaxed">
                    * Nos encargamos de todo el proceso sin interrumpir tus reservas vigentes ni la atención diaria.
                  </p>
                </div>
              </div>

              {/* Right Column: Step by step action */}
              <div className="md:col-span-5 bg-black/60 border border-white/5 rounded-2xl p-5 sm:p-6 space-y-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-neutral-200 border-b border-white/[0.04] pb-3 mb-4">
                    Proceso de Mudanza Express
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-[10px] font-black font-mono text-emerald-400 bg-emerald-500/10 w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                        1
                      </span>
                      <div>
                        <h5 className="text-[11px] font-black text-neutral-200 uppercase">Activas tu plan</h5>
                        <p className="text-[10px] text-neutral-400 mt-0.5">Eliges el plan de Cut-One idóneo para ti.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-[10px] font-black font-mono text-emerald-400 bg-emerald-500/10 w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                        2
                      </span>
                      <div>
                        <h5 className="text-[11px] font-black text-neutral-200 uppercase">Pides la migración</h5>
                        <p className="text-[10px] text-neutral-400 mt-0.5">Nos compartes un reporte, Excel o acceso de tu sistema actual.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-[10px] font-black font-mono text-emerald-400 bg-emerald-500/10 w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                        3
                      </span>
                      <div>
                        <h5 className="text-[11px] font-black text-neutral-200 uppercase">Nosotros lo pasamos</h5>
                        <p className="text-[10px] text-neutral-400 mt-0.5">En menos de 24 horas importamos gratis tu información.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href={`${whatsappUrl}?text=${encodeURIComponent("Hola Cut-One, uso otra plataforma en mi barbería y quiero solicitar el servicio gratuito de migración express de todos mis datos (clientes, historial, servicios) en menos de 24 horas.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-widest text-[9px] rounded-xl shadow-lg shadow-emerald-500/10 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={12} className="fill-black shrink-0" />
                    <span>Migrar mi Barbería Gratis</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- SECTION 7: FAQ (PREGUNTAS FRECUENTES) --- */}
        <section id="faq" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-12 border-t border-white/[0.04]">
          <div className="text-center space-y-2">
            <span className="text-[10px] text-blue-500 uppercase tracking-widest font-black bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-500/20">
              Soporte y Dudas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Preguntas Frecuentes</h2>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-sm mx-auto">
              Todo lo que necesitas saber sobre cómo Cut-One transformará la administración de tus citas y comisiones.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-black/30 border border-white/[0.03] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none select-none gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle size={15} className={`${isOpen ? "text-blue-400" : "text-neutral-500"} transition-colors shrink-0`} />
                      <span className="font-bold text-xs text-neutral-200 tracking-wide">
                        {faq.q}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-neutral-500 shrink-0"
                    >
                      <ChevronDown size={15} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs text-neutral-400 leading-relaxed border-t border-white/[0.02]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      {/* --- FOOTER & SOCIAL LINKS --- */}
      <footer className="w-full bg-[#050505] border-t border-white/[0.04] py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <CutOneLogo size={28} />
            <span className="text-xs font-bold text-neutral-550">
              © 2026 Cut-One Colombia. Todos los derechos reservados.
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs text-neutral-400">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
              <Instagram size={14} /> Instagram
            </a>
            <span className="text-neutral-800">•</span>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <MessageCircle size={14} /> Soporte Técnico
            </a>
          </div>
        </div>
      </footer>

      {/* MOBILE PERSISTENT FLOATING DIRECT CTA BAR (Visible on smaller mobile portrait views only) */}
      <div className="sm:hidden fixed bottom-3 left-0 right-0 z-40 px-3 pointer-events-none">
        <div className="max-w-md mx-auto flex items-center justify-between gap-2 pointer-events-auto bg-black/85 backdrop-blur-md p-2 rounded-2xl border border-white/[0.05] shadow-2xl">
          <div className="pl-2">
            <span className="text-[8px] text-neutral-500 font-black uppercase tracking-wider block">PRECIO BASE</span>
            <span className="text-xs font-black text-white block">$59.900 <span className="text-[8px] text-neutral-400 font-light font-sans">COP/M</span></span>
          </div>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-[10px] uppercase px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95 tracking-wider"
          >
            <Zap size={10} className="fill-white text-white" />
            <span>Adquirir Ahora</span>
          </a>
        </div>
      </div>

      {/* FLOATING PERSISTENT SUPPORT ACTION BUTTON (WhatsApp conversion booster) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        className="fixed bottom-[74px] sm:bottom-6 right-4 sm:right-6 z-50 pointer-events-auto"
      >
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-3 rounded-full shadow-2xl font-black text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 group border border-emerald-400/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
          </span>
          <svg 
            viewBox="0 0 24 24" 
            width="15" 
            height="15" 
            fill="currentColor"
            className="group-hover:rotate-12 transition-transform duration-300"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.452 4.693 1.453 5.4 0 9.794-4.393 9.798-9.793.002-2.615-1.012-5.074-2.858-6.92C16.326 2.05 13.87 1.033 11.26 1.033 5.866 1.033 1.47 5.427 1.466 10.83c0 1.63.427 3.21 1.24 4.621l-1.01 3.692 3.785-.992zm12.35-6.19c-.37-.18-2.16-1.07-2.5-1.19-.34-.12-.58-.18-.82.18-.24.36-.93 1.17-1.14 1.4-.2.23-.41.25-.78.07-1.93-.96-3.13-1.68-4.38-3.82-.33-.57.33-.53.94-1.74.1-.2.05-.37-.02-.53-.08-.16-.82-1.97-1.12-2.71-.3-.71-.6-.61-.82-.62-.21 0-.45-.01-.7-.01-.24 0-.64.09-.98.46-.33.37-1.28 1.25-1.28 3.05s1.31 3.53 1.49 3.77c.18.24 2.58 3.94 6.25 5.53 2.19.95 3.91 1.52 5.24 1.94 2.21.7 4.22.61 5.8.37 1.77-.26 3.65-1.49 4.16-2.94.51-1.45.51-2.7.36-2.95-.15-.25-.56-.4-.93-.58z" />
          </svg>
          <span>Chatear con soporte</span>
        </a>
      </motion.div>



    </div>
  );
}
