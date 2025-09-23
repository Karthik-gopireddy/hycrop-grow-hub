import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Award, TrendingUp } from "lucide-react";

const jobs = [
  {
    title: "Field Marketing Officer",
    qualification: "Diploma (Agriculture) / B.Sc. / M.Sc.",
    experience: "1-3 years",
    skills: [
      "Marketing",
      "Sales",
      "Customer Service",
      "Networking",
      "Coordination",
      "Communication",
      "Negotiation skills",
    ],
    responsibilities: [
      "Ensure to increase distributors and dealers in his specified areas of sales and Identify potential distributors with good dealer network and high counter sales.",
      "To obtain competitors information, meet farmers/ Distributor / Dealers and generate the order.",
      "Regular communication with customers regarding product requirements, schedule of delivery and follow up for payments.",
      "Provide the technical support to all Farmers on timely basis.",
      "Attending customer complain and co-ordinate with technical team to sort out field related problems.",
      "To maintain area / farmer wise after sales service data in register / excel file.",
      "Participation in Campaigning and promoting for sale of Bio Products in different areas.",
      "Inform the product benefits and method of utilization.",
      "Conducting Demonstrations in different crops to create awareness among end users.",
    ],
  },
  {
    title: "Territory Development Manager",
    qualification: "B.Sc. / M.Sc. (Agriculture)",
    experience: "2-5 years",
    skills: [
      "Coordination",
      "Communication and Negotiation skills",
      "Marketing",
      "Sales and Customer service",
      "Networking",
    ],
    responsibilities: [
      "To obtain competitors information, meet farmers/Distributor/Dealers and generate the order.",
      "Participation in campaigning and promoting for sale of Bio Products in different areas.",
      "Conducting demonstrations in different crops to create awareness among end users.",
      "Making marketing plans to achieve overall sales target & extension of existing market.",
      "Ensure to increase distributors and dealers in specified areas of sales and identify potential distributors with good dealer network and high counter sales.",
      "Ensure to achieve the monthly sales and collection target and take necessary actions accordingly.",
      "Regular communication with customers regarding product requirements, schedule of delivery and follow up for payments.",
      "To maintain area/farmer wise after sales service data in register/excel file.",
      "Inform the product benefits and method of utilization.",
      "Coordinate with sales administration/finance department for accounting of sales and collection & reconciliation.",
      "Follow-up with HO for party payments.",
    ],
  },
  {
    title: "Area Sales Manager",
    qualification: "B.Sc., MBA",
    experience: "7-10 years",
    skills: [
      "Leadership",
      "Problem solving",
      "Marketing",
      "Sales and Customer service",
      "Networking",
      "Coordination",
      "Communication and Negotiation skills",
    ],
    responsibilities: [
      "To achieve overall sales target & extension of existing market in his area.",
      "To generate orders from Govt./Semi Govt. & Non Govt. institutes.",
      "To resolve customer complaints and coordinate with technical team to sort out field related problems.",
      "To conduct farmer meetings & demonstrations in different crops to create awareness among end users.",
      "Preparing marketing plans to increase distributors and dealers in specified areas of sales and identify potential distributors with good dealer network and high counter sales.",
      "To generate orders by obtaining competitors’ information, meeting farmers, distributors & dealers.",
      "To achieve the monthly sales and collection target of his area and all team members.",
      "To ensure regular communication with customers & maintain harmonious relationships.",
      "To maintain area/farmer wise after-sales service records.",
      "Follow-up with HO for party payments.",
      "To send weekly plan and movement report to HO and Marketing Head within time frame.",
      "To conduct campaigns and promotions for sale of Bio Products in different areas.",
      "Inform the product benefits and method of utilization.",
      "To increase distributors & dealers in specified areas of sales & identify potential distributors with good dealer network & high counter sales.",
      "Coordinate with sales administration/finance department for accounting of sales and collection & reconciliation.",
    ],
  },
  {
    title: "Regional Business Manager",
    qualification: "B.Sc.(Agriculture) / M.Sc. / MBA",
    experience: "12-15 years",
    skills: [
      "Leadership skills",
      "Problem solving",
      "Understanding of Financial statements",
      "Analytical skills",
      "Creativity & Innovation",
      "Networking",
      "Coordination, Communication and Negotiation skills",
      "Marketing, Sales and Customer service",
    ],

    responsibilities: [
      "Network expansion in potential areas.",
      "C&F management.",
      "Stock management & liquidation.",
      "Arrange training for field force on quarterly basis to improve product knowledge and provide proper guidance on company SOP.",
      "Develop team members for upper positions.",
      "Monitor overall expenses.",
      "Ensure new products are launched as per deadline.",
      "Take personal responsibility for resolving customer concerns and ensure team members deliver high customer service with proper implementation of framework.",
      "Prepare crop-wise and product-wise plans along with budget.",
      "Submit detailed plans as per deadline.",
      "Continuously learn through attending workshops, seminars, and reading books.",
    ],
  },
];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          Career Opportunities
        </h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          At Hycrop Agri Solutions Pvt. Ltd., we believe that people are our
          greatest asset and the driving force behind our success. We are
          committed to creating an environment where talent is nurtured, ideas
          are valued, and achievements are celebrated.
        </p>
      </motion.div>

      {/* Job Listings */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="p-6 border rounded-2xl shadow-md hover:shadow-lg bg-white cursor-pointer"
            onClick={() => setSelectedJob(job)}
          >
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              {job.title}
            </h2>
            <p className="text-gray-600 text-sm">
              <strong>Qualification:</strong> {job.qualification}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Experience:</strong> {job.experience}
            </p>
            <p className="mt-2 text-gray-500 text-sm">Click to view details</p>
          </motion.div>
        ))}
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              {selectedJob.title}
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Qualification:</strong> {selectedJob.qualification}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Experience:</strong> {selectedJob.experience}
            </p>
            <h3 className="font-semibold text-lg mb-2">
              Key Responsibilities:
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              {selectedJob.responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
            <h3 className="font-semibold text-lg mb-2">
              Essential Skillset/s:
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedJob.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              onClick={() => setSelectedJob(null)}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Apply Now Form */}
      <Card className="rounded-2xl shadow-md border-t-4 border-green-600">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Apply Now</h2>
          <form className="grid gap-4">
            <div>
              <label className="block text-sm font-medium">Position *</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter position"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Name *</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone *</label>
              <input
                type="tel"
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Attach your Resume *
              </label>
              <input
                type="file"
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
            >
              Submit Application
            </button>
          </form>
        </CardContent>
      </Card>

      {/* Philosophy & What We Offer */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* People Philosophy */}
        <Card className="rounded-2xl shadow-md border-t-4 border-yellow-600">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-yellow-700 mb-3">
              We are looking for individuals who are:
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Result-oriented and take ownership of their work</li>
              <li>Committed to excellence and continuous learning</li>
              <li>Agile in adapting to challenges with speed and precision</li>
              <li>Collaborative in building strong teams and shared success</li>
            </ul>

            <h2 className="text-xl font-bold text-yellow-700 mb-3">
              Our People Philosophy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Hycrop, we follow the spirit of “Growing Together”. Our human
              resource strategies are designed to develop both professional and
              interpersonal skills, strengthen teamwork, and enhance knowledge.
              Through structured training and development programs, we
              continuously invest in our people to help them unlock their
              fullest potential.
            </p>
          </CardContent>
        </Card>

        {/* What We Offer */}
        <Card className="rounded-2xl shadow-md border-t-4 border-blue-600">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-3">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Career Growth:</strong> Clear pathways for advancement
                with opportunities to shape your professional journey.
              </li>
              <li>
                <strong>Learning & Development:</strong> Exposure to challenging
                assignments, skill-building programs, and cross-functional
                learning experiences.
              </li>
              <li>
                <strong>Work-Life Balance:</strong> A culture that values
                personal well-being alongside professional effectiveness.
              </li>
              <li>
                <strong>Inclusive Workplace:</strong> As an equal opportunity
                employer, we foster a diverse, fair, and empowering environment.
              </li>
              <li>
                <strong>Recognition & Rewards:</strong> Exceptional performance
                is acknowledged with opportunities that go beyond industry
                standards.
              </li>
            </ul>
            <p className="text-gray-600 mt-4 leading-relaxed">
              At Hycrop, you don’t just build a career — you grow with us. Join
              us, and be a part of our journey to deliver innovative
              agricultural solutions, empower farming communities, and create a
              sustainable future.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CareersPage;
