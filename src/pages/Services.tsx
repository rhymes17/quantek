import { useState } from "react";
import Service from "./Service";
import Modal from "./Modal";

import CodeIcon from "../assets/images/code.png";
import BlockchainIcon from "../assets/images/bitcoin.png";
import TestingIcon from "../assets/images/exam.png";
import APIDevIcon from "../assets/images/layers.png";
import UIIcon from "../assets/images/figma.png";
import CloudIcon from "../assets/images/cloud.png";
import MaintainceIcon from "../assets/images/ratchet.png";
import IntegrationIcon from "../assets/images/website.png";
import SectionLayout from "../components/SectionLayout";

const services = [
  {
    title: "Custom Web Development",
    description:
      "Our custom web development solutions accelerate workflows, boost revenues, and optimize business operations from concept-to-code and development-to-deployment.",
    index: 0,
    icon: CodeIcon,
    color: "#FF4E88",
  },
  {
    title: "Blockchain",
    description:
      "From cryptocurrencies to supply chain management, Blockchain’s decentralized, distributed, and public ledger offers the highest level of security, transparency, and traceability.",
    index: 1,
    icon: BlockchainIcon,
    color: "#FFDA76",
  },
  {
    title: "QA & Testing",
    description:
      "Quality Assurance is all about creating the best possible product for your customers. A proper QA & Testing process reveals valuable insights, mitigates downtime, and improves user experience.",
    index: 2,
    icon: TestingIcon,
    color: "#B4D6CD",
  },
  {
    title: "API Development",
    description:
      "We develop reliable, well-documented, and easy-to-consume APIs that enable flexible integrations and customization of existing software products.",
    index: 3,
    icon: APIDevIcon,
    color: "#FF4E88",
  },
  {
    title: "UI/UX Design",
    description:
      "Leverage the latest UI/UX technologies, architectures, and trends to design responsive & scalable apps that transform customer experiences across multiple channels.",
    index: 4,
    icon: UIIcon,
    color: "#FFDA76",
  },
  {
    title: "Cloud Computing",
    description:
      "Cloud computing has become an essential driver of innovation and business transformation. Cloud-based technologies rapidly increase business agility, lower costs, and reduce IT complexity.",
    index: 5,
    icon: CloudIcon,
    color: "#B4D6CD",
  },
  {
    title: "Application Maintenance",
    description:
      "Our app maintenance & modernization services are designed to ensure the scalability, performance, and sustainability of your entire software infrastructure.",
    index: 6,
    icon: MaintainceIcon,
    color: "#FF4E88",
  },
  {
    title: "System Integrations",
    description:
      "Our custom web development solutions accelerate workflows, boost revenues, and optimize business operations from concept-to-code and development-to-deployment.",
    index: 7,
    icon: IntegrationIcon,
    color: "#FFDA76",
  },
];

const Services = () => {
  const [modal, setModal] = useState({
    active: false,
    index: 0,
  });

  return (
    <SectionLayout
      title="Our Serivces"
      subtitle="From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development of scalable solutions, Quantek delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs."
    >
      <div className="py-5 relative">
        {services.map((service) => (
          <Service service={service} setModal={setModal} />
        ))}
        <Modal modal={modal} services={services} />
      </div>
    </SectionLayout>
  );
};

export default Services;
