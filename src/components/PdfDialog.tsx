import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

// Module-level constants — env vars don't change at runtime
const PDF_CS_URL = import.meta.env.VITE_PDF_CS_URL || '/roadmap.pdf';
const PDF_MATH_URL = import.meta.env.VITE_PDF_MATH_URL || '/math-roadmap.pdf';

interface PdfDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PdfDialog({ isOpen, onClose }: PdfDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] md:max-w-6xl h-[90vh] flex flex-col p-6 border-white/10 bg-slate-900/98 backdrop-blur-xl">
        <DialogHeader className="flex flex-col space-y-1.5 shrink-0 text-left">
          <DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
            <span>📄</span> Roadmap Documents
          </DialogTitle>
          <p className="text-xs text-white/50">
            View the original curriculum PDFs for reference.
          </p>
        </DialogHeader>

        <div className="flex-1 min-h-0 mt-4 flex flex-col">
          <Tabs defaultValue="cs" className="flex-1 flex flex-col min-h-0">
            <TabsList className="w-fit self-center md:self-start shrink-0 mb-4 bg-white/5 border border-white/10 p-1 rounded-lg">
              <TabsTrigger
                value="cs"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white font-medium text-xs px-4 py-1.5 rounded-md"
              >
                CS &amp; AI Roadmap
              </TabsTrigger>
              <TabsTrigger
                value="math"
                className="data-[state=active]:bg-violet-500 data-[state=active]:text-white font-medium text-xs px-4 py-1.5 rounded-md"
              >
                Mathematics Roadmap
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cs" className="flex-1 min-h-0 mt-0">
              <iframe
                src={PDF_CS_URL}
                className="w-full h-full border border-white/10 rounded-lg bg-slate-950/50"
                title="CS & AI Engineering Roadmap PDF"
              />
            </TabsContent>

            <TabsContent value="math" className="flex-1 min-h-0 mt-0">
              <iframe
                src={PDF_MATH_URL}
                className="w-full h-full border border-white/10 rounded-lg bg-slate-950/50"
                title="Mathematics Roadmap PDF"
              />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
