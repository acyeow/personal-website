"use client";
import "@/app/globals.css";

import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";

export default function AdminPage() {
  return <NextStudio config={config} />;
}
