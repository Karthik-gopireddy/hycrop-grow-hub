import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Leaf, Users, FlaskConical, ShieldCheck, Zap } from "lucide-react";

const coreValues = [
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "Farmer-Centric Commitment",
    desc: "We exist to empower the farming community with growth, prosperity, and sustainability.",
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
    title: "Innovation in Agriculture",
    desc: "Advanced, science-driven solutions to protect crops and improve yields.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    title: "Sustainability First",
    desc: "Practices that protect soil health, conserve resources, and safeguard biodiversity.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-yellow-600" />,
    title: "Partnership & Trust",
    desc: "Building relationships rooted in transparency, trust, and shared success.",
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-600" />,
    title: "Excellence & Agility",
    desc: "Delivering uncompromising quality through learning and timely action.",
  },
];

export default function Founderprofile() {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        {/* <div className="flex flex-col items-center">
          <img
            src="/founderImage.jpeg" // Replace with actual founder image path
            alt="Mr. Balakrishna"
            className="w-[200px] h-[250px] rounded-full object-cover border-2 border-green-600 shadow-lg  mb-4"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-green-700">
            Mr. Balakrishna
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-2">
            Founder & Managing Director
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto mt-4">
            With over 26 years of rich experience in Sales and Marketing across
            leading multinational companies, Mr. Balakrishna established Hycrop
            Agri Solutions Pvt. Ltd. in 2025 with a clear purpose to serve the
            farming community by offering innovative and sustainable solutions
            that protect their crops, improve the productivity, and ensure
            farmers welfare.
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto mt-4">
            As the driving force behind the organization, he has consistently
            guided the team towards excellence, seizing new opportunities and
            transforming them into milestones of growth. His calm and pragmatic
            approach to complex business challenges ensures focus on the
            long-term vision—bringing meaningful, positive change to the
            agriculture sector.
          </p>
        </div> */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Founder Image */}
          <img
            src="/founderImage.jpeg"
            alt="Mr. Balakrishna"
            className="w-[220px] h-[260px] rounded-2xl object-cover border-2 border-green-600 shadow-lg"
          />

          {/* Founder Info */}
          <div className="text-center md:text-left max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-green-700">
              Mr. Balakrishna
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-2">
              Founder & Managing Director
            </p>

            <p className="text-gray-500 mt-4 leading-relaxed">
              With over 26 years of rich experience in Sales and Marketing
              across leading multinational companies, Mr. Balakrishna
              established Hycrop Agri Solutions Pvt. Ltd. in 2025 with a clear
              purpose to serve the farming community by offering innovative and
              sustainable solutions that protect their crops, improve the
              productivity, and ensure farmers welfare.
            </p>

            <p className="text-gray-500 mt-4 leading-relaxed">
              As the driving force behind the organization, he has consistently
              guided the team towards excellence, seizing new opportunities and
              transforming them into milestones of growth. His calm and
              pragmatic approach to complex business challenges ensures focus on
              the long-term vision—bringing meaningful, positive change to the
              agriculture sector.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Core Values */}
      <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
        Core Values
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((value, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl shadow-lg p-5 bg-white border hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-3">
              {value.icon}
              <h3 className="font-semibold text-lg text-gray-800">
                {value.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm">{value.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Vision & Mission */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Card className="rounded-2xl shadow-md border-t-4 border-green-600">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-green-700 mb-4">Vision</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                To deliver sustainable solutions that enhance crop productivity.
              </li>
              <li>
                To support farmers in improving soil and plant health
                conditions.
              </li>
              <li>
                To provide high-quality products and services with dedication.
              </li>
              <li>
                To become a leading supplier of agricultural inputs at
                affordable prices.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md border-t-4 border-yellow-600">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-yellow-700 mb-4">Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To be a trusted partner for farmers, enhancing crop yields through
              innovative, sustainable, and high-quality solutions, delivered
              with consistent performance, ethical practices, and a commitment
              to improving farmers livelihoods.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
