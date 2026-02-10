import { UniversityNavbar } from "@/components/university/UniversityNavbar";
import UniversityFooter from "@/components/university/UniversityFooter";
import CatalogSidebar from "@/components/university/catalog/CatalogSidebar";
import CatalogGrid from "@/components/university/catalog/CatalogGrid";

export default function CourseCatalogPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans">
            <UniversityNavbar />

            <main className="container mx-auto px-4 py-12">
                {/* Breadcrumb (Optional) */}
                <div className="text-sm text-gray-500 mb-8 font-medium">
                    University / <span className="text-[#292D34]">Course Catalog</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <CatalogSidebar />
                    <CatalogGrid />
                </div>
            </main>

            <UniversityFooter />
        </div>
    );
}
