import type { ComponentType } from "react";
import {
  FiActivity,
  FiEdit3,
  FiFeather,
  FiHeart,
  FiSmile,
  FiUsers,
} from "react-icons/fi";

export interface Service {
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const services: Service[] = [
  {
    title: "Sensory Integration",
    description:
      "Helping children process sensory information for better participation in daily life.",
    icon: FiActivity,
  },
  {
    title: "Fine Motor Skills",
    description:
      "Improving hand strength, coordination, and dexterity for everyday activities.",
    icon: FiFeather,
  },
  {
    title: "Handwriting Support",
    description:
      "Developing handwriting, pencil grip, and classroom readiness.",
    icon: FiEdit3,
  },
  {
    title: "Autism & ADHD Support",
    description:
      "Personalized interventions to enhance attention, communication, and daily routines.",
    icon: FiHeart,
  },
  {
    title: "Activities of Daily Living",
    description:
      "Building independence in dressing, feeding, grooming, and self-care skills.",
    icon: FiUsers,
  },
  {
    title: "Play-Based Therapy",
    description:
      "Engaging, child-led therapy sessions that make learning fun and meaningful.",
    icon: FiSmile,
  },
];