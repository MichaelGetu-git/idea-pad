import ModuleDetail from "../../../components/ModuleDetail";
import { getAllModuleSlugs, modulesRegistry } from "@/lib/modules/modules";
import { notFound } from "next/navigation";

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getAllModuleSlugs();
  if (!data) return notFound();
  return <ModuleDetail data={modulesRegistry[slug]} />;
}


